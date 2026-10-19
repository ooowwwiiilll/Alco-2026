const localUrls = new Map<string, string>();
export function registerAssetUrl(id: string, url: string) {
  localUrls.set(id, url);
}
export function resolveAssetUrl(value: string): string {
  return value.startsWith('local-asset:') ? (localUrls.get(value.slice(12)) ?? '') : value;
}
export function hasAssetUrl(id: string) {
  return localUrls.has(id);
}
