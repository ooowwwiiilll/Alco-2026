/** Collision-resistant document ID with a readable prefix, e.g. `rel-3f2a…`. */
export function createId(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

export const nowIso = (): string => new Date().toISOString();

/** Stable division document ID derived from its name. */
export function divisionId(name: string): string {
  return `div-${name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}`;
}
