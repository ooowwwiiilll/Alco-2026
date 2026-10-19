import { DEFAULT_DIVISIONS } from '../data/divisions';
import { LOCAL_DEMO_USERS } from '../data/localUsers';
import { divisionId } from '../domain/ids';
import { normalizeRelease, validatePage, validateTemplate } from '../domain/validation';
import { readJSON } from '../lib/browserStorage';
import { isLocalWorkspace } from '../lib/runtime';
import type { Versioned } from './contracts';
import { repository } from './repository';

const MIGRATION_ID = 'local-seed-v2';
let initializing: Promise<void> | undefined;

/** Seeds the local workspace once per browser; a no-op in Firebase mode. */
export function initializeLocalWorkspace(): Promise<void> {
  return (initializing ??= (
    navigator.locks ? navigator.locks.request('alco-bootstrap-v2', initialize) : initialize()
  ).catch((error) => {
    initializing = undefined;
    throw error;
  }));
}

function reportSkipped(detail: string) {
  window.dispatchEvent(new CustomEvent('alco:error', { detail }));
}

async function writeIfMissing(collection: string, value: Versioned) {
  if (!(await repository.get(collection, value.id))) await repository.write(collection, value, 0);
}

async function initialize() {
  if (!isLocalWorkspace || (await repository.get('migrations', MIGRATION_ID))) return;
  // Keep an untouched copy of any prototype data found in this browser before importing it.
  const legacy: Record<string, string | null> = {};
  try {
    for (const key of Object.keys(localStorage).filter((key) => key.startsWith('csw_')))
      legacy[key] = localStorage.getItem(key);
  } catch {
    /* Storage may be disabled; IndexedDB remains the local repository. */
  }
  await writeIfMissing('backups', {
    id: 'before-local-seed-v2',
    createdAt: new Date().toISOString(),
    legacy,
  } as Versioned);
  const sources = [
    ['customTemplates', readJSON<unknown>('csw_custom_templates', []), validateTemplate],
    ['pageTemplates', readJSON<unknown>('csw_page_templates', []), validatePage],
    ['releases', readJSON<unknown>('csw_saved_releases', []), normalizeRelease],
  ] as const;
  for (const [collection, items, validate] of sources) {
    if (!Array.isArray(items)) {
      reportSkipped(
        `Ignored invalid cached ${collection}; the original is kept in the local backup.`,
      );
      continue;
    }
    for (const item of items) {
      try {
        const value = (validate(item) ?? item) as Versioned;
        await writeIfMissing(collection, { ...value, revision: undefined });
      } catch {
        reportSkipped(
          `Skipped an invalid ${collection} record; the original is kept in the local backup.`,
        );
      }
    }
  }
  for (const user of LOCAL_DEMO_USERS) await writeIfMissing('users', user);
  for (const division of DEFAULT_DIVISIONS)
    await writeIfMissing('divisions', { ...division, id: divisionId(division.name) });
  await repository.write('migrations', { id: MIGRATION_ID } as Versioned, 0);
}
