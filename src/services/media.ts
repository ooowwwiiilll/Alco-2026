import { createId, nowIso } from '../domain/ids';
import { uploadAsset } from '../persistence/assets';
import type { MediaItem } from '../types';
import { formatFileSize } from '../utils/format';
import * as store from './store';

/** Bundled assets every workspace starts with; they cannot be deleted. */
export const SYSTEM_MEDIA: readonly MediaItem[] = [
  {
    id: 'sys-bg-1',
    name: 'Background System Default',
    url: '/background.png',
    uploadedBy: 'Role Manager',
    createdAt: '2026-10-18T00:00:00Z',
    isSystemDefault: true,
  },
  {
    id: 'sys-logo-1',
    name: 'Logo Pegadaian Green',
    url: '/logo-pegadaian.png',
    uploadedBy: 'Role Manager',
    createdAt: '2026-10-18T00:00:00Z',
    isSystemDefault: true,
  },
];

export const subscribeMedia = (update: (values: MediaItem[]) => void) =>
  store.subscribe<MediaItem>('mediaLibrary', (values) =>
    update([...values.sort((a, b) => b.createdAt.localeCompare(a.createdAt)), ...SYSTEM_MEDIA]),
  );

/** Uploads to asset storage (IndexedDB locally, Firebase Storage in cloud mode) and catalogs it. */
export async function addMedia(file: File, name: string, uploadedBy: string): Promise<MediaItem> {
  const url = await uploadAsset(file);
  return store.create<MediaItem>('mediaLibrary', {
    id: createId('media'),
    name: name.trim() || file.name,
    url,
    uploadedBy,
    createdAt: nowIso(),
    size: formatFileSize(file.size),
  });
}

/** Removes the catalog entry; stored objects stay immutable for published snapshots. */
export const deleteMedia = (id: string) => store.remove('mediaLibrary', id);

/** Stores an image for use inside page content and returns its stable URL. */
export const uploadImage = (file: File): Promise<string> => uploadAsset(file);
