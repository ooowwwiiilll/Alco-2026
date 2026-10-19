export interface Versioned {
  id: string;
  revision?: number;
}
/** Single-field filter; Firestore rules require list queries to match their constraints. */
export interface Query {
  field: string;
  op: '==' | '>=';
  value: string | number | boolean;
}
export function matchesQuery(value: Versioned, query?: Query): boolean {
  if (!query) return true;
  const field = (value as unknown as Record<string, unknown>)[query.field];
  if (query.op === '==') return field === query.value;
  return (
    typeof field === typeof query.value &&
    (field as string | number) >= (query.value as string | number)
  );
}
/** Releases reaching this status are frozen into an immutable published snapshot. */
export const PUBLISHED_STATUS = 'approved';
export const IMMUTABLE_COLLECTIONS = ['publishedReleases', 'assets', 'activityLog'];

export interface Repository {
  importDocuments(records: { collection: string; value: Versioned }[]): Promise<void>;
  list<T extends Versioned>(collection: string, query?: Query): Promise<T[]>;
  get<T extends Versioned>(collection: string, id: string): Promise<T | null>;
  write<T extends Versioned>(collection: string, value: T, expectedRevision?: number): Promise<T>;
  remove(collection: string, id: string, expectedRevision?: number): Promise<void>;
  subscribe<T extends Versioned>(
    collection: string,
    update: (values: T[]) => void,
    error: (error: unknown) => void,
    query?: Query,
  ): () => void;
}
export class ConflictError extends Error {
  constructor() {
    super('This item changed in another session. Reload it before saving again.');
    this.name = 'ConflictError';
  }
}
/** Rejects a canvas save when the page content changed since the editor opened it. */
export function assertContentRevision(current: number | undefined, expected: number): number {
  if ((current ?? 0) !== expected) throw new ConflictError();
  return expected + 1;
}

export function nextRevision(current: number, expected: number | undefined): number {
  if (
    !Number.isSafeInteger(current) ||
    current < 0 ||
    current >= Number.MAX_SAFE_INTEGER ||
    (expected !== undefined && (!Number.isSafeInteger(expected) || expected < 0))
  )
    throw new Error('Invalid document revision.');
  if (expected !== undefined && expected !== current) throw new ConflictError();
  return current + 1;
}

export function assertDocumentId(id: string): void {
  if (
    typeof id !== 'string' ||
    !id ||
    id.includes('/') ||
    id.length > 500 ||
    ['.', '..'].includes(id)
  )
    throw new Error('Invalid document ID.');
}

export function assertImportRecords(records: { collection: string; value: Versioned }[]): void {
  if (records.length > 100) throw new Error('Import at most 100 documents per backup.');
  const keys = new Set<string>();
  for (const { collection, value } of records) {
    assertDocumentId(collection);
    assertDocumentId(value.id);
    if (collection === 'publishedReleases')
      throw new Error('Published snapshots cannot be imported directly.');
    const key = `${collection}/${value.id}`;
    if (keys.has(key)) throw new Error('Duplicate document in import.');
    keys.add(key);
  }
}

export function assertDocumentSize(value: Versioned): void {
  assertDocumentId(value.id);
  if (new TextEncoder().encode(JSON.stringify(value)).length > 900_000)
    throw new Error(
      'Document exceeds the safe storage limit. Split the page or move embedded media to asset storage.',
    );
}
