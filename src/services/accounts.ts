import { divisionId } from '../domain/ids';
import type { AppUser, DivisionItem, DivisionStatus } from '../types';
import * as store from './store';

export const subscribeUsers = (update: (values: AppUser[]) => void, error?: () => void) =>
  store.subscribe<AppUser>('users', update, error);

export const updateUser = (id: string, changes: Partial<AppUser>) =>
  store.update<AppUser>('users', id, changes);

export const deleteUser = (id: string) => store.remove('users', id);

export const subscribeDivisions = (update: (values: DivisionItem[]) => void, error?: () => void) =>
  store.subscribe<DivisionItem>(
    'divisions',
    (values) => update(values.sort((a, b) => a.name.localeCompare(b.name))),
    error,
  );

export async function createDivision(
  name: string,
  description: string,
  status: DivisionStatus,
  createdBy: string,
): Promise<DivisionItem> {
  const clean = name.trim();
  if (!clean) throw new Error('Division name is required.');
  if (await store.get('divisions', divisionId(clean)))
    throw new Error(`Divisi "${clean}" sudah ada.`);
  return store.create<DivisionItem>('divisions', {
    id: divisionId(clean),
    name: clean,
    description: description.trim(),
    status,
    createdAt: new Date().toISOString(),
    createdBy,
  });
}

export const updateDivision = (id: string, changes: Partial<DivisionItem>) =>
  store.update<DivisionItem>('divisions', id, changes);

export const deleteDivision = (id: string) => store.remove('divisions', id);
