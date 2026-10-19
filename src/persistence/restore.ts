import { toManifest } from '../domain/manifest';
import { isPublishedStatus } from '../domain/releaseStatus';
import { validateBackup, type BackupData } from '../domain/validation';
import { isLocalWorkspace } from '../lib/runtime';
import { componentRegistry } from '../services/library';
import type { AppConfig, PageTemplate, ReleaseItem } from '../types';
import { decodeAsset, loadLocalAssets } from './assets';
import type { Versioned } from './contracts';
import { repository } from './repository';

/** Imports a backup atomically. Returns the revision to continue editing the active page at. */
export async function restoreBackup(backup: BackupData): Promise<number | undefined> {
  validateBackup(backup);
  if (
    backup.releases?.some(
      (release) =>
        isPublishedStatus(release.status) &&
        release.sections.some((section) => Object.keys(section.bindings ?? {}).length),
    )
  )
    throw new Error(
      'Resolve CMS bindings through a trusted server before importing approved releases.',
    );
  if (backup.assets?.length && !isLocalWorkspace)
    throw new Error(
      'Upload local backup images to your CMS or Storage before importing into Firebase mode.',
    );
  const records: { collection: string; value: Versioned }[] = [];
  for (const asset of backup.assets ?? [])
    records.push({ collection: 'assets', value: decodeAsset(asset) });
  for (const value of backup.customTemplates ?? [])
    records.push({ collection: 'customTemplates', value });
  for (const value of backup.pageTemplates ?? [])
    records.push({
      collection: 'pageTemplates',
      value: {
        ...value,
        manifest: toManifest(value.id, value.name, value.sections, componentRegistry),
      } as PageTemplate,
    });
  for (const value of backup.releases ?? [])
    records.push({
      collection: 'releases',
      value: {
        ...value,
        manifest: toManifest(value.id, value.name, value.sections, componentRegistry, value.status),
      } as ReleaseItem,
    });
  const config = await repository.get<AppConfig>('appConfig', 'global');
  const restoredConfig: AppConfig = {
    ...config,
    id: 'global',
    templateRenames: backup.templateRenames ?? config?.templateRenames ?? {},
    deletedTemplateIds: (backup.deletedTemplateIds ?? config?.deletedTemplateIds ?? []).filter(
      (id) => !backup.customTemplates?.some((value) => value.id === id),
    ),
    deletedPageIds: (backup.deletedPageIds ?? config?.deletedPageIds ?? []).filter(
      (id) => !backup.pageTemplates?.some((value) => value.id === id),
    ),
  };
  records.push({ collection: 'appConfig', value: restoredConfig });
  await repository.importDocuments(records);
  await loadLocalAssets();
  // Imports assign new revisions; continue editing against the imported version.
  const activeId = backup.activeTemplateId;
  const collection = backup.releases?.some((value) => value.id === activeId)
    ? 'releases'
    : backup.pageTemplates?.some((value) => value.id === activeId)
      ? 'pageTemplates'
      : null;
  if (activeId && collection) {
    const imported = await repository.get<Versioned>(collection, activeId);
    if (!imported) throw new Error('Imported active page is unavailable. Reload the workspace.');
    return imported.revision ?? 0;
  }
  return backup.activeTemplateRevision;
}
