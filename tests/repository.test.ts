import 'fake-indexeddb/auto';
import test from 'node:test';
import assert from 'node:assert/strict';
import { nextRevision, assertImportRecords, type Versioned } from '../src/persistence/contracts';
import { IndexedDbRepository } from '../src/persistence/indexedDbRepository';

test('confirmed saves survive closing and reopening the database', async () => {
  const name = `persist-${crypto.randomUUID()}`;
  const first = new IndexedDbRepository(name);
  const saved = await first.write<Versioned & { title: string }>(
    'pages',
    { id: 'page', title: 'Saved' },
    0,
  );
  assert.equal(saved.revision, 1);
  await first.close();
  const second = new IndexedDbRepository(name);
  assert.deepEqual(await second.get('pages', 'page'), saved);
  await second.close();
});
test('simultaneous sessions cannot silently overwrite the same revision', async () => {
  const name = `conflict-${crypto.randomUUID()}`;
  const first = new IndexedDbRepository(name),
    second = new IndexedDbRepository(name);
  await first.write('pages', { id: 'page', title: 'Initial' }, 0);
  const results = await Promise.allSettled([
    first.write('pages', { id: 'page', title: 'A' }, 1),
    second.write('pages', { id: 'page', title: 'B' }, 1),
  ]);
  assert.equal(results.filter((result) => result.status === 'fulfilled').length, 1);
  assert.equal(results.filter((result) => result.status === 'rejected').length, 1);
  assert.equal((await first.get('pages', 'page'))?.revision, 2);
  await first.close();
  await second.close();
});
test('publication creates a snapshot in the same transaction and later edits leave it intact', async () => {
  const repo = new IndexedDbRepository(`publish-${crypto.randomUUID()}`);
  await repo.write('releases', { id: 'release', status: 'approved', title: 'First' }, 0);
  await repo.write('releases', { id: 'release', status: 'draft', title: 'Changed' }, 1);
  const snapshot = await repo.get('publishedReleases', 'release--1');
  assert.equal((snapshot as unknown as { title: string }).title, 'First');
  assert.equal(snapshot?.revision, 1);
  await repo.close();
});
test('import commits all documents and retains originals for recovery', async () => {
  const repo = new IndexedDbRepository(`import-${crypto.randomUUID()}`);
  await repo.write('pages', { id: 'one', title: 'Original' }, 0);
  await repo.importDocuments([
    { collection: 'pages', value: { id: 'one', title: 'Imported' } },
    { collection: 'pages', value: { id: 'two', title: 'Second' } },
  ] as never);
  assert.equal((await repo.list('pages')).length, 2);
  const backups = await repo.list('migrationBackups');
  assert.equal(backups.length, 2);
  assert.ok(
    backups.some(
      (value) =>
        (value as unknown as { original?: { title: string } }).original?.title === 'Original',
    ),
  );
  await repo.close();
});
test('a transaction error aborts the entire import', async () => {
  const repo = new IndexedDbRepository(`abort-${crypto.randomUUID()}`);
  await assert.rejects(() =>
    repo.importDocuments([
      { collection: 'pages', value: { id: 'good' } },
      { collection: 'pages', value: { id: 'bad', illegal: () => {} } } as never,
    ]),
  );
  assert.equal((await repo.list('pages')).length, 0);
  assert.equal((await repo.list('migrationBackups')).length, 0);
  await repo.close();
});

test('duplicate imports and direct snapshot imports fail before changing existing records', async () => {
  const repo = new IndexedDbRepository(`duplicate-${crypto.randomUUID()}`);
  const original = await repo.write('pages', { id: 'one', title: 'Original' }, 0);
  const duplicate = [
    { collection: 'pages', value: { id: 'one', title: 'A' } },
    { collection: 'pages', value: { id: 'one', title: 'B' } },
  ];
  assert.throws(() => assertImportRecords(duplicate), /Duplicate/);
  await assert.rejects(() => repo.importDocuments(duplicate), /Duplicate/);
  await assert.rejects(
    () =>
      repo.importDocuments([{ collection: 'publishedReleases', value: { id: 'historical--1' } }]),
    /snapshots/,
  );
  assert.deepEqual(await repo.get('pages', 'one'), original);
  assert.deepEqual(await repo.list('migrationBackups'), []);
  await repo.close();
});

test('invalid and exhausted revision counters cannot enter a save transaction', () => {
  for (const revision of [-1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER, '1'])
    assert.throws(() => nextRevision(revision as number, undefined), /Invalid/);
  for (const expected of [-1, 1.5, NaN]) assert.throws(() => nextRevision(1, expected), /Invalid/);
  assert.equal(nextRevision(0, 0), 1);
});
