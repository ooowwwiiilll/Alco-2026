import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { getFirebaseAuth } from '../lib/firebase';
import { isLocalWorkspace } from '../lib/runtime';
import { hasAssetUrl, registerAssetUrl } from '../preview/assetUrls';
import type { Versioned } from './contracts';
import { repository } from './repository';
export { resolveAssetUrl } from '../preview/assetUrls';

interface StoredAsset extends Versioned {
  blob: Blob;
  name: string;
}
export async function loadLocalAssets(): Promise<void> {
  if (!isLocalWorkspace) return;
  const assets = await repository.list<StoredAsset>('assets');
  for (const asset of assets)
    if (!hasAssetUrl(asset.id)) registerAssetUrl(asset.id, URL.createObjectURL(asset.blob));
}
export async function uploadAsset(file: File): Promise<string> {
  if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type))
    throw new Error('Use a PNG, JPEG, WebP, or GIF image.');
  if (file.size > 5 * 1024 * 1024)
    throw new Error('Image exceeds 5 MB. Resize it before uploading.');
  const id = crypto.randomUUID();
  if (isLocalWorkspace) {
    await repository.write<StoredAsset>('assets', { id, blob: file, name: file.name }, 0);
    registerAssetUrl(id, URL.createObjectURL(file));
    return `local-asset:${id}`;
  }
  const auth = getFirebaseAuth();
  if (!auth.currentUser) throw new Error('Sign in before uploading.');
  const object = ref(getStorage(auth.app), `assets/${auth.currentUser.uid}/${id}`);
  await uploadBytes(object, file, { contentType: file.type });
  return getDownloadURL(object);
}

export interface ExportedAsset {
  id: string;
  name: string;
  dataUrl: string;
}
export async function exportLocalAssets(): Promise<ExportedAsset[]> {
  if (!isLocalWorkspace) return [];
  const assets = await repository.list<StoredAsset>('assets');
  return Promise.all(
    assets.map(
      (asset) =>
        new Promise<ExportedAsset>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () =>
            resolve({ id: asset.id, name: asset.name, dataUrl: reader.result as string });
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(asset.blob);
        }),
    ),
  );
}
export function decodeAsset(asset: ExportedAsset): StoredAsset {
  const match = asset.dataUrl.match(/^data:(image\/(?:png|jpeg|webp|gif));base64,([a-z\d+/=]+)$/i);
  if (!match || asset.dataUrl.length > 7 * 1024 * 1024) throw new Error('Invalid backup image.');
  const bytes = Uint8Array.from(atob(match[2]), (char) => char.charCodeAt(0));
  return { id: asset.id, name: asset.name, blob: new Blob([bytes], { type: match[1] }) };
}
