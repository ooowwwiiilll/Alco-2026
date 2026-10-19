// Shared data access: every read is validated, every write is revision-checked and awaited.
import {
  validateActivity,
  validateComment,
  validateConfig,
  validateDivision,
  validateMedia,
  validateNotification,
  validateOverride,
  validatePage,
  validateRelease,
  validateTemplate,
} from '../domain/validation';
import { initializeLocalWorkspace } from '../persistence/bootstrap';
import type { Query, Versioned } from '../persistence/contracts';
import { repository } from '../persistence/repository';

export type Collection =
  | 'customTemplates'
  | 'componentOverrides'
  | 'pageTemplates'
  | 'releases'
  | 'publishedReleases'
  | 'users'
  | 'divisions'
  | 'appConfig'
  | 'publicConfig'
  | 'releaseComments'
  | 'notifications'
  | 'activityLog'
  | 'mediaLibrary';

const validators: Partial<Record<Collection, (value: unknown) => void>> = {
  customTemplates: validateTemplate,
  componentOverrides: validateOverride,
  pageTemplates: validatePage,
  releases: validateRelease,
  divisions: validateDivision,
  appConfig: validateConfig,
  releaseComments: validateComment,
  notifications: validateNotification,
  activityLog: validateActivity,
  mediaLibrary: validateMedia,
};

/** Last revision seen per document; writes are rejected if another session changed it since. */
const observed = new Map<string, number>();
const key = (name: Collection, id: string) => `${name}/${id}`;

function track<T extends Versioned>(name: Collection, value: T): T {
  validators[name]?.(value);
  observed.set(key(name, value.id), value.revision ?? 0);
  return value;
}

export function reportFailure(failure: unknown): void {
  window.dispatchEvent(
    new CustomEvent('alco:error', {
      detail: failure instanceof Error ? failure.message : String(failure),
    }),
  );
}

export function subscribe<T extends Versioned>(
  name: Collection,
  update: (values: T[]) => void,
  error?: (error: unknown) => void,
  query?: Query,
): () => void {
  let active = true;
  let stop = () => {};
  const failed = (failure: unknown) => {
    error?.(failure);
    reportFailure(failure);
  };
  initializeLocalWorkspace()
    .then(() => {
      if (!active) return;
      stop = repository.subscribe<T>(
        name,
        (values) => {
          try {
            update(values.map((value) => track(name, value)));
          } catch (failure) {
            failed(failure);
          }
        },
        failed,
        query,
      );
    })
    .catch(failed);
  return () => {
    active = false;
    stop();
  };
}

export async function list<T extends Versioned>(name: Collection, query?: Query): Promise<T[]> {
  await initializeLocalWorkspace();
  return (await repository.list<T>(name, query)).map((value) => track(name, value));
}

export async function get<T extends Versioned>(name: Collection, id: string): Promise<T | null> {
  await initializeLocalWorkspace();
  const value = await repository.get<T>(name, id);
  return value ? track(name, value) : null;
}

/** Saves against the last observed revision (0 creates; a conflict throws ConflictError). */
export async function write<T extends Versioned>(
  name: Collection,
  value: T,
  expected = observed.get(key(name, value.id)) ?? value.revision ?? 0,
): Promise<T> {
  validators[name]?.(value);
  await initializeLocalWorkspace();
  return track(name, await repository.write(name, value, expected));
}

export function create<T extends Versioned>(name: Collection, value: T): Promise<T> {
  return write(name, { ...value, revision: undefined }, 0);
}

/** Merges changes into the stored document; fails if it no longer exists. */
export async function update<T extends Versioned>(
  name: Collection,
  id: string,
  changes: Partial<T>,
): Promise<T> {
  const current = await repository.get<T>(name, id);
  if (!current) throw new Error('This item no longer exists. Reload the workspace.');
  return write(name, { ...current, ...changes, id });
}

export async function remove(name: Collection, id: string): Promise<void> {
  await repository.remove(name, id, observed.get(key(name, id)) ?? 0);
  observed.delete(key(name, id));
}
