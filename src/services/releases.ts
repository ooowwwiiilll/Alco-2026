import { toManifest } from '../domain/manifest';
import { isPublishedStatus } from '../domain/releaseStatus';
import { assertContentRevision } from '../persistence/contracts';
import type { PlacedSection, ReleaseItem } from '../types';
import { componentRegistry } from './library';
import * as store from './store';

function prepare(release: ReleaseItem): ReleaseItem {
  if (
    isPublishedStatus(release.status) &&
    release.sections.some((section) => Object.keys(section.bindings ?? {}).length)
  )
    throw new Error(
      'CMS bindings need server-side resolution before approval. Configure the CMS adapter first.',
    );
  return {
    ...release,
    manifest: toManifest(
      release.id,
      release.name,
      release.sections,
      componentRegistry,
      release.status,
    ),
  };
}

export const subscribeReleases = (update: (values: ReleaseItem[]) => void, error?: () => void) =>
  store.subscribe<ReleaseItem>(
    'releases',
    (values) => update(values.sort((a, b) => b.createdAt.localeCompare(a.createdAt))),
    error,
  );

export const createRelease = (release: ReleaseItem) =>
  store.create('releases', prepare({ ...release, contentRevision: 1 }));

async function current(id: string): Promise<ReleaseItem> {
  const release = await store.get<ReleaseItem>('releases', id);
  if (!release) throw new Error('Release not found. It may have been deleted.');
  return release;
}

/** Metadata and status changes; never touches canvas content. */
export async function updateRelease(
  id: string,
  changes: Omit<Partial<ReleaseItem>, 'sections' | 'contentRevision'>,
): Promise<ReleaseItem> {
  const release = await current(id);
  return store.write(
    'releases',
    prepare({ ...release, ...changes, id, updatedAt: new Date().toISOString() }),
    release.revision ?? 0,
  );
}

/** Saves canvas content opened at `contentRevision`; fails if another session saved since. */
export async function saveReleaseContent(
  id: string,
  sections: PlacedSection[],
  contentRevision: number,
  changes: Omit<Partial<ReleaseItem>, 'sections' | 'contentRevision'> = {},
): Promise<ReleaseItem> {
  const release = await current(id);
  return store.write(
    'releases',
    prepare({
      ...release,
      ...changes,
      id,
      sections,
      contentRevision: assertContentRevision(release.contentRevision, contentRevision),
      updatedAt: new Date().toISOString(),
    }),
    release.revision ?? 0,
  );
}

export const deleteRelease = (id: string) => store.remove('releases', id);

/**
 * Read-only preview link. Approved releases point at their immutable snapshot; others at the
 * live release (both require an approved account).
 */
export function previewPath(
  release: Pick<ReleaseItem, 'id' | 'revision' | 'status'>,
  device: 'desktop' | 'mobile' = 'desktop',
): string {
  const base = `/preview/${encodeURIComponent(release.id)}`;
  const path = isPublishedStatus(release.status) ? `${base}/${release.revision ?? 0}` : base;
  return device === 'mobile' ? `${path}?device=mobile` : path;
}
