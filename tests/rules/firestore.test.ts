import { after, beforeEach, test } from 'node:test';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { ref, uploadBytes, getBytes, deleteObject } from 'firebase/storage';
import { FirestoreRepository } from '../../src/persistence/firestoreRepository';
import { ConflictError } from '../../src/persistence/contracts';
import {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
} from '@firebase/rules-unit-testing';
import {
  doc,
  getDoc,
  getDocs,
  collection,
  setDoc,
  updateDoc,
  deleteDoc,
  runTransaction,
  type Firestore,
} from 'firebase/firestore';
const env = await initializeTestEnvironment({
  projectId: 'demo-alco',
  firestore: { host: '127.0.0.1', port: 8086, rules: readFileSync('firestore.rules', 'utf8') },
  storage: { host: '127.0.0.1', port: 9196, rules: readFileSync('storage.rules', 'utf8') },
});
// The rules test SDK returns a compat instance; modular Firestore APIs unwrap it.
function repositoryFor(uid: string) {
  return new FirestoreRepository(env.authenticatedContext(uid).firestore() as unknown as Firestore);
}
after(async () => {
  await env?.cleanup();
});
beforeEach(async () => {
  await env.clearFirestore();
  await env.clearStorage();
  await env.withSecurityRulesDisabled(async (context) => {
    const db = context.firestore();
    for (const [id, role, status] of [
      ['manager', 'manager', 'approved'],
      ['admin', 'admin', 'approved'],
      ['product', 'product', 'approved'],
      ['pending', 'product', 'pending'],
    ])
      await setDoc(doc(db, 'users', id), {
        id,
        email: `${id}@example.test`,
        role,
        status,
        revision: 1,
      });
  });
});

test('Storage denies anonymous, pending and missing profiles', async () => {
  for (const context of [
    env.unauthenticatedContext(),
    env.authenticatedContext('pending'),
    env.authenticatedContext('missing'),
  ]) {
    await assertFails(
      uploadBytes(ref(context.storage(), 'assets/pending/image'), new Uint8Array([1]), {
        contentType: 'image/png',
      }),
    );
    await assertFails(getBytes(ref(context.storage(), 'assets/product/image')));
  }
});

test('Storage uploads are owned, bounded raster images and immutable', async () => {
  const storage = env.authenticatedContext('product').storage();
  const image = ref(storage, 'assets/product/owned-image');
  const bytes = new Uint8Array([1, 2, 3]);
  await assertSucceeds(uploadBytes(image, bytes, { contentType: 'image/png' }));
  assert.deepEqual(new Uint8Array(await getBytes(image)), bytes);
  await assertFails(uploadBytes(image, bytes, { contentType: 'image/png' }));
  await assertFails(deleteObject(image));
  await assertFails(
    uploadBytes(ref(storage, 'assets/admin/foreign'), bytes, { contentType: 'image/png' }),
  );
  await assertFails(
    uploadBytes(ref(storage, 'assets/product/svg'), bytes, { contentType: 'image/svg+xml' }),
  );
  await assertFails(
    uploadBytes(ref(storage, 'assets/product/large'), new Uint8Array(5 * 1024 * 1024 + 1), {
      contentType: 'image/png',
    }),
  );
});

test('Storage approval revocation blocks reads and new uploads', async () => {
  const storage = env.authenticatedContext('product').storage();
  const image = ref(storage, 'assets/product/revoked-image');
  await assertSucceeds(uploadBytes(image, new Uint8Array([1]), { contentType: 'image/webp' }));
  await assertSucceeds(
    getBytes(ref(env.authenticatedContext('admin').storage(), 'assets/product/revoked-image')),
  );
  await updateDoc(doc(env.authenticatedContext('manager').firestore(), 'users', 'product'), {
    status: 'rejected',
    revision: 2,
  });
  await assertFails(getBytes(image));
  await assertFails(
    uploadBytes(ref(storage, 'assets/product/new'), new Uint8Array([1]), {
      contentType: 'image/png',
    }),
  );
});

test('repository multi-client writes reject stale revisions and notify subscribers', async () => {
  const first = repositoryFor('product');
  const second = repositoryFor('product');
  const release = await first.write(
    'releases',
    { id: 'sync', authorId: 'product', status: 'draft', title: 'Original', revision: 0 },
    0,
  );
  let unsubscribe = () => {};
  const received = new Promise<void>((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error('Second client did not receive the confirmed edit.')),
      10000,
    );
    unsubscribe = second.subscribe<typeof release>(
      'releases',
      (values) => {
        if (values.some((value) => value.id === 'sync' && value.revision === 2)) {
          clearTimeout(timer);
          resolve();
        }
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
  try {
    await first.write('releases', { ...release, title: 'Confirmed' }, 1);
    await assert.rejects(
      second.write('releases', { ...release, title: 'Stale' }, 1),
      ConflictError,
    );
    await received;
    assert.equal((await second.get<typeof release>('releases', 'sync'))?.title, 'Confirmed');
  } finally {
    unsubscribe();
  }
});

test('repository publication is atomic and old snapshots survive later edits', async () => {
  const repo = repositoryFor('product');
  const manifest = {
    schemaVersion: 1,
    id: 'repo',
    title: 'Original',
    locale: 'id',
    status: 'approved',
    sections: [],
  };
  const release = await repo.write(
    'releases',
    { id: 'repo', authorId: 'product', status: 'approved', manifest },
    0,
  );
  await repo.write('releases', { ...release, manifest: { ...manifest, title: 'Updated' } }, 1);
  assert.equal(
    (await repo.get<typeof release>('publishedReleases', 'repo--1'))?.manifest.title,
    'Original',
  );
  assert.equal(
    (await repo.get<typeof release>('publishedReleases', 'repo--2'))?.manifest.title,
    'Updated',
  );
});

test('repository denied writes reject; failed imports commit no partial records', async () => {
  const repo = repositoryFor('admin');
  await assertSucceeds(repo.write('pageTemplates', { id: 'existing', title: 'Original' }, 0));
  await assertFails(
    repo.importDocuments([
      {
        collection: 'pageTemplates',
        value: Object.assign({ id: 'existing' }, { title: 'Changed' }),
      },
      { collection: 'users', value: Object.assign({ id: 'unauthorized' }, { role: 'manager' }) },
    ]),
  );
  assert.equal(
    (await repo.get<{ id: string; title: string }>('pageTemplates', 'existing'))?.title,
    'Original',
  );
  assert.equal((await repo.list('migrationBackups')).length, 0);
  await assertFails(repositoryFor('pending').write('pageTemplates', { id: 'denied' }, 0));
});

test('repository successful imports preserve originals for recovery', async () => {
  const repo = repositoryFor('manager');
  await repo.write('pageTemplates', { id: 'existing', title: 'Original' }, 0);
  await repo.importDocuments([
    {
      collection: 'pageTemplates',
      value: Object.assign({ id: 'existing' }, { title: 'Imported' }),
    },
  ]);
  assert.equal(
    (await repo.get<{ id: string; title: string; revision?: number }>('pageTemplates', 'existing'))
      ?.revision,
    2,
  );
  const backups = await repo.list<{ id: string; original: { title: string } }>('migrationBackups');
  assert.equal(backups[0].original.title, 'Original');
});
test('anonymous users cannot read or write any workspace collection', async () => {
  const db = env.unauthenticatedContext().firestore();
  for (const name of [
    'users',
    'customTemplates',
    'pageTemplates',
    'releases',
    'appConfig',
    'publishedReleases',
  ]) {
    await assertFails(getDocs(collection(db, name)));
    await assertFails(setDoc(doc(db, name, 'evil'), { id: 'evil', revision: 1 }));
  }
});
test('pending users cannot access pages; products cannot manage users or components', async () => {
  await assertFails(
    getDocs(collection(env.authenticatedContext('pending').firestore(), 'pageTemplates')),
  );
  const db = env.authenticatedContext('product').firestore();
  await assertFails(getDocs(collection(db, 'users')));
  await assertFails(updateDoc(doc(db, 'users', 'product'), { role: 'manager', revision: 2 }));
  await assertFails(setDoc(doc(db, 'customTemplates', 'new'), { id: 'new', revision: 1 }));
  await assertSucceeds(getDocs(collection(db, 'pageTemplates')));
});
test('registration can only create its own pending product profile without credentials', async () => {
  const db = env.authenticatedContext('new-user', { email: 'new@example.test' }).firestore();
  const profile = {
    id: 'new-user',
    email: 'new@example.test',
    name: 'New',
    role: 'product',
    status: 'pending',
    division: 'CRD',
    createdAt: '2026-10-02',
    canAccessComponents: false,
    revision: 1,
  };
  await assertFails(setDoc(doc(db, 'users', 'new-user'), { ...profile, role: 'admin' }));
  await assertFails(setDoc(doc(db, 'users', 'new-user'), { ...profile, passwordHash: 'bad' }));
  await assertSucceeds(setDoc(doc(db, 'users', 'new-user'), profile));
});
test('manager can approve profiles but cannot store passwords or ignore revisions', async () => {
  const db = env.authenticatedContext('manager').firestore();
  await assertSucceeds(updateDoc(doc(db, 'users', 'pending'), { status: 'approved', revision: 2 }));
  await assertFails(updateDoc(doc(db, 'users', 'pending'), { revision: 2, role: 'admin' }));
  await assertFails(updateDoc(doc(db, 'users', 'pending'), { revision: 3, password: 'bad' }));
  await assertFails(deleteDoc(doc(db, 'users', 'manager')));
});
test('release ownership and revision checks prevent foreign edits and stale writes', async () => {
  const db = env.authenticatedContext('product').firestore();
  await assertSucceeds(
    setDoc(doc(db, 'releases', 'r'), {
      id: 'r',
      authorId: 'product',
      status: 'draft',
      revision: 1,
    }),
  );
  await assertFails(updateDoc(doc(db, 'releases', 'r'), { revision: 1 }));
  await assertFails(
    setDoc(doc(db, 'releases', 'foreign'), {
      id: 'foreign',
      authorId: 'admin',
      status: 'draft',
      revision: 1,
    }),
  );
  await assertFails(
    updateDoc(doc(env.authenticatedContext('pending').firestore(), 'releases', 'r'), {
      revision: 2,
    }),
  );
});
test('publication requires a matching atomic snapshot and snapshots cannot change', async () => {
  const db = env.authenticatedContext('product').firestore();
  const manifest = {
    schemaVersion: 1,
    id: 'r',
    title: 'Page',
    locale: 'id',
    status: 'approved',
    sections: [],
  };
  const release = { id: 'r', authorId: 'product', status: 'approved', manifest, revision: 1 };
  await assertFails(setDoc(doc(db, 'releases', 'r'), release));
  await assertSucceeds(
    runTransaction(db, async (transaction) => {
      transaction.set(doc(db, 'releases', 'r'), release);
      transaction.set(doc(db, 'publishedReleases', 'r--1'), {
        ...release,
        id: 'r--1',
        releaseId: 'r',
      });
    }),
  );
  await assertFails(
    setDoc(doc(db, 'publishedReleases', 'wrong-path'), {
      ...release,
      id: 'wrong-path',
      releaseId: 'r',
    }),
  );
  await assertFails(
    setDoc(doc(env.authenticatedContext('admin').firestore(), 'publishedReleases', 'r--1'), {
      ...release,
      id: 'r--1',
      releaseId: 'r',
      authorId: 'admin',
    }),
  );
  await assertFails(updateDoc(doc(db, 'publishedReleases', 'r--1'), { title: 'changed' }));
  await assertFails(deleteDoc(doc(db, 'publishedReleases', 'r--1')));
  await assertSucceeds(getDoc(doc(db, 'publishedReleases', 'r--1')));
});
