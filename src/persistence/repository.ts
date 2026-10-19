import { isLocalWorkspace } from '../lib/runtime';
import { db } from '../lib/firebase';
import type { Repository } from './contracts';
import { FirestoreRepository } from './firestoreRepository';
import { IndexedDbRepository } from './indexedDbRepository';

export const repository: Repository = isLocalWorkspace
  ? new IndexedDbRepository('alco-local-v2')
  : new FirestoreRepository(db, (connected) => {
      window.dispatchEvent(new CustomEvent('alco:connection', { detail: connected }));
    });
