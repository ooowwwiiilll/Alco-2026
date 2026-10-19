import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query as filtered,
  runTransaction,
  where,
  type Firestore,
} from 'firebase/firestore';
import {
  assertImportRecords,
  assertDocumentSize,
  nextRevision,
  PUBLISHED_STATUS,
  type Query,
  type Repository,
  type Versioned,
} from './contracts';

export class FirestoreRepository implements Repository {
  constructor(
    private db: Firestore,
    private connectionChanged: (connected: boolean) => void = () => {},
  ) {}
  async importDocuments(records: { collection: string; value: Versioned }[]) {
    assertImportRecords(records);
    records.forEach((record) => assertDocumentSize(record.value));
    const batch = crypto.randomUUID();
    await runTransaction(this.db, async (transaction) => {
      const snapshots = await Promise.all(
        records.map((record) => transaction.get(doc(this.db, record.collection, record.value.id))),
      );
      records.forEach(({ collection: name, value }, index) => {
        const original = snapshots[index].data() ?? null;
        const id = `${batch}--${index}`;
        transaction.set(doc(this.db, 'migrationBackups', id), {
          id,
          collection: name,
          documentId: value.id,
          original,
        });
        const saved = JSON.parse(
          JSON.stringify({ ...value, revision: nextRevision(original?.revision ?? 0, undefined) }),
        );
        transaction.set(doc(this.db, name, value.id), saved);
        if (name === 'releases' && saved.status === PUBLISHED_STATUS) {
          const snapshotId = `${value.id}--${saved.revision}`;
          transaction.set(doc(this.db, 'publishedReleases', snapshotId), {
            ...saved,
            id: snapshotId,
            releaseId: value.id,
          });
        }
      });
    });
  }
  private source(name: string, query?: Query) {
    const reference = collection(this.db, name);
    return query ? filtered(reference, where(query.field, query.op, query.value)) : reference;
  }
  async list<T extends Versioned>(name: string, query?: Query): Promise<T[]> {
    return (await getDocs(this.source(name, query))).docs.map(
      (snapshot) => ({ ...snapshot.data(), id: snapshot.id }) as T,
    );
  }
  async get<T extends Versioned>(name: string, id: string): Promise<T | null> {
    const snapshot = await getDoc(doc(this.db, name, id));
    return snapshot.exists() ? ({ ...snapshot.data(), id: snapshot.id } as T) : null;
  }
  async write<T extends Versioned>(name: string, value: T, expectedRevision?: number): Promise<T> {
    assertDocumentSize(value);
    const ref = doc(this.db, name, value.id);
    return runTransaction(this.db, async (transaction) => {
      const snapshot = await transaction.get(ref);
      const revision = nextRevision(snapshot.data()?.revision ?? 0, expectedRevision);
      const saved = JSON.parse(JSON.stringify({ ...value, revision })) as T;
      transaction.set(ref, saved);
      if (
        name === 'releases' &&
        (saved as Versioned & { status?: string }).status === PUBLISHED_STATUS
      ) {
        const id = `${saved.id}--${revision}`;
        transaction.set(doc(this.db, 'publishedReleases', id), {
          ...saved,
          id,
          releaseId: saved.id,
        });
      }
      return saved;
    });
  }
  async remove(name: string, id: string, expectedRevision?: number): Promise<void> {
    const ref = doc(this.db, name, id);
    await runTransaction(this.db, async (transaction) => {
      const snapshot = await transaction.get(ref);
      nextRevision(snapshot.data()?.revision ?? 0, expectedRevision);
      transaction.delete(ref);
    });
  }
  subscribe<T extends Versioned>(
    name: string,
    update: (values: T[]) => void,
    error: (error: unknown) => void,
    query?: Query,
  ) {
    return onSnapshot(
      this.source(name, query),
      { includeMetadataChanges: true },
      (snapshot) => {
        this.connectionChanged(!snapshot.metadata.fromCache);
        update(snapshot.docs.map((row) => ({ ...row.data(), id: row.id }) as T));
      },
      error,
    );
  }
}
