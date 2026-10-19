import {
  assertDocumentId,
  assertImportRecords,
  IMMUTABLE_COLLECTIONS,
  matchesQuery,
  nextRevision,
  PUBLISHED_STATUS,
  type Query,
  type Repository,
  type Versioned,
} from './contracts';

interface Row {
  key: string;
  collection: string;
  value: Versioned;
}

export class IndexedDbRepository implements Repository {
  private connection: Promise<IDBDatabase>;
  private listeners = new Map<string, Set<() => void>>();
  private channel?: BroadcastChannel;

  constructor(name = 'alco-local-v1') {
    this.connection = new Promise((resolve, reject) => {
      const request = indexedDB.open(name, 1);
      request.onupgradeneeded = () => {
        const store = request.result.createObjectStore('documents', { keyPath: 'key' });
        store.createIndex('collection', 'collection');
      };
      request.onsuccess = () => {
        request.result.onversionchange = () => request.result.close();
        resolve(request.result);
      };
      request.onerror = () => reject(request.error);
      request.onblocked = () =>
        reject(new Error('Close other ALCO tabs to upgrade local storage.'));
    });
    if (typeof BroadcastChannel !== 'undefined') {
      this.channel = new BroadcastChannel(name);
      this.channel.onmessage = (event) => this.notify(String(event.data), false);
    }
  }
  private notify(collection: string, broadcast = true) {
    this.listeners.get(collection)?.forEach((listener) => listener());
    if (broadcast) this.channel?.postMessage(collection);
  }
  async list<T extends Versioned>(collection: string, query?: Query): Promise<T[]> {
    const db = await this.connection;
    return new Promise((resolve, reject) => {
      const request = db
        .transaction('documents')
        .objectStore('documents')
        .index('collection')
        .getAll(collection);
      request.onsuccess = () =>
        resolve(
          (request.result as Row[])
            .map((row) => row.value as T)
            .filter((value) => matchesQuery(value, query)),
        );
      request.onerror = () => reject(request.error);
    });
  }
  async get<T extends Versioned>(collection: string, id: string): Promise<T | null> {
    const db = await this.connection;
    return new Promise((resolve, reject) => {
      const request = db
        .transaction('documents')
        .objectStore('documents')
        .get(`${collection}/${id}`);
      request.onsuccess = () => resolve(((request.result as Row | undefined)?.value as T) ?? null);
      request.onerror = () => reject(request.error);
    });
  }
  async write<T extends Versioned>(
    collection: string,
    value: T,
    expectedRevision?: number,
  ): Promise<T> {
    assertDocumentId(collection);
    assertDocumentId(value.id);
    const db = await this.connection;
    const result = await new Promise<T>((resolve, reject) => {
      const tx = db.transaction('documents', 'readwrite');
      const store = tx.objectStore('documents');
      const key = `${collection}/${value.id}`;
      const request = store.get(key);
      let saved: T;
      let failure: unknown;
      request.onsuccess = () => {
        try {
          const current = (request.result as Row | undefined)?.value.revision ?? 0;
          if (request.result && IMMUTABLE_COLLECTIONS.includes(collection))
            throw new Error('Published snapshots, assets and activity entries are immutable.');
          saved = { ...value, revision: nextRevision(current, expectedRevision) };
          store.put({ key, collection, value: saved });
          if (
            collection === 'releases' &&
            (saved as Versioned & { status?: string }).status === PUBLISHED_STATUS
          ) {
            const snapshot = {
              ...saved,
              id: `${value.id}--${saved.revision}`,
              releaseId: value.id,
            };
            store.add({
              key: `publishedReleases/${snapshot.id}`,
              collection: 'publishedReleases',
              value: snapshot,
            });
          }
        } catch (error) {
          failure = error;
          tx.abort();
        }
      };
      tx.oncomplete = () => resolve(saved);
      tx.onabort = tx.onerror = () =>
        reject(failure ?? tx.error ?? new Error('Local database write failed.'));
    });
    this.notify(collection);
    return result;
  }
  async remove(collection: string, id: string, expectedRevision?: number): Promise<void> {
    if (IMMUTABLE_COLLECTIONS.includes(collection))
      throw new Error('Published snapshots, assets and activity entries are immutable.');
    const db = await this.connection;
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction('documents', 'readwrite');
      const store = tx.objectStore('documents');
      const key = `${collection}/${id}`;
      const request = store.get(key);
      let failure: unknown;
      request.onsuccess = () => {
        try {
          nextRevision((request.result as Row | undefined)?.value.revision ?? 0, expectedRevision);
          store.delete(key);
        } catch (error) {
          failure = error;
          tx.abort();
        }
      };
      tx.oncomplete = () => resolve();
      tx.onabort = tx.onerror = () => reject(failure ?? tx.error);
    });
    this.notify(collection);
  }
  subscribe<T extends Versioned>(
    collection: string,
    update: (values: T[]) => void,
    error: (error: unknown) => void,
    query?: Query,
  ): () => void {
    let active = true;
    const refresh = () => {
      this.list<T>(collection, query)
        .then((values) => {
          if (active) update(values);
        })
        .catch(error);
    };
    const listeners = this.listeners.get(collection) ?? new Set();
    listeners.add(refresh);
    this.listeners.set(collection, listeners);
    refresh();
    return () => {
      active = false;
      listeners.delete(refresh);
    };
  }
  async close() {
    this.channel?.close();
    (await this.connection).close();
  }
  async importDocuments(records: { collection: string; value: Versioned }[]) {
    assertImportRecords(records);
    const db = await this.connection;
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction('documents', 'readwrite');
      const store = tx.objectStore('documents');
      const batch = crypto.randomUUID();
      let failure: unknown;
      records.forEach(({ collection, value }, index) => {
        const key = `${collection}/${value.id}`;
        const request = store.get(key);
        request.onsuccess = () => {
          try {
            const original = (request.result as Row | undefined)?.value ?? null;
            const id = `${batch}--${index}`;
            store.add({
              key: `migrationBackups/${id}`,
              collection: 'migrationBackups',
              value: { id, collection, documentId: value.id, original },
            });
            const saved = { ...value, revision: nextRevision(original?.revision ?? 0, undefined) };
            if (collection !== 'assets' || !original) store.put({ key, collection, value: saved });
            if (
              collection === 'releases' &&
              (saved as Versioned & { status?: string }).status === PUBLISHED_STATUS
            ) {
              const snapshot = {
                ...saved,
                id: `${value.id}--${saved.revision}`,
                releaseId: value.id,
              };
              store.add({
                key: `publishedReleases/${snapshot.id}`,
                collection: 'publishedReleases',
                value: snapshot,
              });
            }
          } catch (error) {
            failure = error;
            tx.abort();
          }
        };
      });
      tx.oncomplete = () => resolve();
      tx.onabort = tx.onerror = () =>
        reject(failure ?? tx.error ?? new Error('Import failed; no changes committed.'));
    });
    for (const collection of new Set(records.map((record) => record.collection)))
      this.notify(collection);
  }
}
