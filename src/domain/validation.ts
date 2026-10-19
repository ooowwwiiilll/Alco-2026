import type {
  ActivityLogEntry,
  AppConfig,
  AppNotification,
  ComponentOverride,
  DivisionItem,
  MediaItem,
  PageTemplate,
  PlacedSection,
  ReleaseComment,
  ReleaseItem,
  SectionTemplate,
} from '../types';
import { validateBindings, validateManifest } from './manifest';
import { normalizeReleaseStatus, RELEASE_STATUSES } from './releaseStatus';

type Record_ = Record<string, unknown>;

function object(value: unknown): asserts value is Record_ {
  if (!value || typeof value !== 'object' || Array.isArray(value))
    throw new Error('Expected an object.');
}
function text(value: unknown, field: string, max = 100_000): asserts value is string {
  if (typeof value !== 'string' || value.length > max) throw new Error(`Invalid ${field}.`);
}
function optionalText(value: Record_, field: string, max?: number): void {
  if (value[field] !== undefined) text(value[field], field, max);
}
function stringList(value: unknown, field: string): void {
  if (
    value !== undefined &&
    (!Array.isArray(value) || value.some((entry) => typeof entry !== 'string'))
  )
    throw new Error(`Invalid ${field}.`);
}
function revision(value: Record_): void {
  if (
    value.revision !== undefined &&
    (!Number.isSafeInteger(value.revision) || (value.revision as number) < 0)
  )
    throw new Error('Invalid document revision.');
}
function identified(value: unknown): asserts value is Record_ & { id: string } {
  object(value);
  revision(value);
  text(value.id, 'id', 500);
  if (!value.id) throw new Error('Document ID is required.');
}

export function validateSections(value: unknown): asserts value is PlacedSection[] {
  if (!Array.isArray(value) || value.length > 500)
    throw new Error('Invalid sections (maximum 500).');
  const ids = new Set<string>();
  for (const section of value) {
    object(section);
    for (const key of ['instanceId', 'templateId', 'name', 'htmlContent']) text(section[key], key);
    if (!section.instanceId || ids.has(section.instanceId as string))
      throw new Error('Section IDs must be unique.');
    ids.add(section.instanceId as string);
    object(section.customValues);
    for (const entry of Object.values(section.customValues)) text(entry, 'section property');
    if (section.bindings !== undefined) validateBindings(section.bindings);
    for (const key of ['isEditing', 'isOutOfScope', 'isLocked'])
      if (section[key] !== undefined && typeof section[key] !== 'boolean')
        throw new Error(`Invalid ${key}.`);
    if (section.lockedFields !== undefined) {
      object(section.lockedFields);
      if (Object.values(section.lockedFields).some((entry) => typeof entry !== 'boolean'))
        throw new Error('Invalid locked fields.');
    }
  }
}

export function validateTemplate(value: unknown): asserts value is SectionTemplate {
  identified(value);
  for (const key of ['name', 'htmlContent']) text(value[key], key);
  text(value.category, 'category', 40);
  if (!value.name || !value.category) throw new Error('Invalid component template.');
  if (value.editableFields !== undefined) {
    if (!Array.isArray(value.editableFields)) throw new Error('Invalid editable fields.');
    const ids = new Set<string>();
    for (const field of value.editableFields) {
      object(field);
      for (const key of ['id', 'label', 'defaultValue']) text(field[key], key);
      if (
        !field.id ||
        ids.has(field.id as string) ||
        (field.type !== undefined &&
          !['text', 'number', 'image', 'color'].includes(field.type as string))
      )
        throw new Error('Invalid or duplicate editable field.');
      ids.add(field.id as string);
    }
  }
}

export function validateOverride(value: unknown): asserts value is ComponentOverride {
  identified(value);
  optionalText(value, 'name', 200);
  optionalText(value, 'htmlContent');
  text(value.updatedAt, 'updatedAt', 40);
  text(value.updatedBy, 'updatedBy', 200);
}

export function validatePage(value: unknown): asserts value is PageTemplate {
  identified(value);
  for (const key of ['name', 'createdAt']) text(value[key], key);
  if (!value.name) throw new Error('Page name is required.');
  optionalText(value, 'category', 40);
  validateSections(value.sections);
  if (value.manifest !== undefined) validateManifest(value.manifest);
}

export function validateRelease(value: unknown): asserts value is ReleaseItem {
  validatePage(value);
  const release = value as unknown as ReleaseItem;
  if (!RELEASE_STATUSES.includes(release.status)) throw new Error('Invalid release status.');
  for (const field of ['version', 'authorId', 'authorName', 'authorRole', 'division'] as const)
    text(release[field], field);
}

/** Accepts releases written by earlier prototypes (legacy statuses, embedded comments). */
export function normalizeRelease(value: unknown): ReleaseItem {
  object(value);
  const { comments: _comments, date: _date, ...release } = value;
  const normalized = { ...release, status: normalizeReleaseStatus(release.status) };
  validateRelease(normalized);
  return normalized;
}

export function validateComment(value: unknown): asserts value is ReleaseComment {
  identified(value);
  for (const key of ['releaseId', 'userId', 'userName', 'userRole', 'createdAt'])
    text(value[key], key, 500);
  text(value.text, 'comment', 2000);
  if (!value.text.trim()) throw new Error('Comment is empty.');
  optionalText(value, 'componentTag', 200);
}

export function validateNotification(value: unknown): asserts value is AppNotification {
  identified(value);
  for (const key of ['recipientId', 'senderId', 'senderName', 'type', 'createdAt'])
    text(value[key], key, 500);
  text(value.text, 'notification', 1000);
  if (typeof value.read !== 'boolean') throw new Error('Invalid notification state.');
}

export function validateActivity(value: unknown): asserts value is ActivityLogEntry {
  identified(value);
  for (const key of ['actorId', 'actorName', 'timestamp', 'expireAt']) text(value[key], key, 500);
  if (!['create', 'edit', 'delete'].includes(value.action as string))
    throw new Error('Invalid activity action.');
}

export function validateMedia(value: unknown): asserts value is MediaItem {
  identified(value);
  for (const key of ['name', 'uploadedBy', 'createdAt']) text(value[key], key, 500);
  text(value.url, 'url', 2_000_000);
}

export function validateDivision(value: unknown): asserts value is DivisionItem {
  identified(value);
  text(value.name, 'name', 200);
  if (!value.name.trim()) throw new Error('Division name is required.');
  optionalText(value, 'description', 1000);
  if (value.status !== undefined && !['Active', 'Inactive'].includes(value.status as string))
    throw new Error('Invalid division status.');
}

export function validateConfig(value: unknown): asserts value is AppConfig {
  identified(value);
  stringList(value.deletedTemplateIds, 'deleted template IDs');
  stringList(value.deletedPageIds, 'deleted page IDs');
  stringList(value.templateCategories, 'template categories');
  optionalText(value, 'homepageBackground', 2_000_000);
  if (value.templateRenames !== undefined) {
    object(value.templateRenames);
    for (const entry of Object.values(value.templateRenames)) text(entry, 'component rename');
  }
}

export interface BackupData {
  assets?: { id: string; name: string; dataUrl: string }[];
  placedSections?: PlacedSection[];
  pageTemplates?: PageTemplate[];
  releases?: ReleaseItem[];
  customTemplates?: SectionTemplate[];
  templateRenames?: Record<string, string>;
  deletedTemplateIds?: string[];
  deletedPageIds?: string[];
  activeTemplateName?: string | null;
  activeTemplateId?: string | null;
  activeTemplateRevision?: number;
}

/** Validates a backup in place, upgrading releases written by earlier prototypes. */
export function validateBackup(value: unknown): asserts value is BackupData {
  object(value);
  if (
    !['placedSections', 'pageTemplates', 'releases', 'customTemplates'].some((key) => key in value)
  )
    throw new Error('Backup has no page data.');
  if (value.placedSections !== undefined) validateSections(value.placedSections);
  if (Array.isArray(value.releases)) value.releases = value.releases.map(normalizeRelease);
  for (const [key, validate] of [
    ['pageTemplates', validatePage],
    ['releases', validateRelease],
    ['customTemplates', validateTemplate],
  ] as const) {
    if (value[key] !== undefined) {
      if (!Array.isArray(value[key])) throw new Error(`Invalid ${key}.`);
      const ids = new Set<string>();
      for (const item of value[key] as unknown[]) {
        object(item);
        validate(item);
        if (ids.has(item.id as string)) throw new Error(`Duplicate ID in ${key}.`);
        ids.add(item.id as string);
      }
    }
  }
  if (value.assets !== undefined) {
    if (!Array.isArray(value.assets)) throw new Error('Invalid backup assets.');
    const ids = new Set<string>();
    for (const asset of value.assets) {
      object(asset);
      for (const field of ['id', 'name', 'dataUrl']) text(asset[field], field, 8_000_000);
      if (!asset.id || ids.has(asset.id as string))
        throw new Error('Duplicate or empty backup asset ID.');
      ids.add(asset.id as string);
      if (!/^data:image\/(png|jpeg|webp|gif);base64,[a-z\d+/=]+$/i.test(asset.dataUrl as string))
        throw new Error('Invalid backup image.');
    }
  }
  if (value.templateRenames !== undefined) {
    object(value.templateRenames);
    for (const entry of Object.values(value.templateRenames)) text(entry, 'template rename');
  }
  stringList(value.deletedTemplateIds, 'deletedTemplateIds');
  stringList(value.deletedPageIds, 'deletedPageIds');
  for (const key of ['activeTemplateName', 'activeTemplateId'])
    if (value[key] != null) text(value[key], key);
  if (
    value.activeTemplateRevision !== undefined &&
    (!Number.isSafeInteger(value.activeTemplateRevision) ||
      (value.activeTemplateRevision as number) < 0)
  )
    throw new Error('Invalid active template revision.');
}
