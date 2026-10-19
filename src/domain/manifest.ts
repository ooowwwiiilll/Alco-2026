import type { PlacedSection, ReleaseStatus, SectionTemplate } from '../types';
import { RELEASE_STATUSES } from './releaseStatus';

export interface ContentReference {
  source: 'strapi';
  documentId: string;
  field: string;
  locale?: string;
  kind: 'text' | 'asset';
}

export interface ManifestSection {
  id: string;
  name: string;
  component: { id: string; version: number };
  props: Record<string, string>;
  bindings?: Record<string, ContentReference>;
  // Compatibility only, for imported/custom markup or historical template variants.
  legacy?: { name: string; html: string };
}

export interface PageManifest {
  schemaVersion: 1;
  id: string;
  title: string;
  locale: 'id' | 'en';
  status: ReleaseStatus;
  sections: ManifestSection[];
}

export type ComponentRegistry = ReadonlyMap<string, SectionTemplate>;

export function validateBindings(
  input: unknown,
): asserts input is Record<string, ContentReference> {
  if (!input || typeof input !== 'object' || Array.isArray(input))
    throw new Error('Invalid CMS bindings.');
  for (const [field, binding] of Object.entries(input)) {
    if (
      !field ||
      !binding ||
      typeof binding !== 'object' ||
      Array.isArray(binding) ||
      binding.source !== 'strapi' ||
      !['text', 'asset'].includes(binding.kind) ||
      typeof binding.documentId !== 'string' ||
      !/^[a-zA-Z0-9_-]+$/.test(binding.documentId) ||
      typeof binding.field !== 'string' ||
      !/^[a-zA-Z][a-zA-Z0-9_]*$/.test(binding.field) ||
      (binding.locale !== undefined && (typeof binding.locale !== 'string' || !binding.locale))
    )
      throw new Error('Invalid CMS binding.');
  }
}

export function toManifest(
  id: string,
  title: string,
  sections: PlacedSection[],
  registry: ComponentRegistry,
  status: ReleaseStatus = 'draft',
): PageManifest {
  const manifest: PageManifest = {
    schemaVersion: 1,
    id,
    title,
    locale: 'id',
    status,
    sections: sections.map((section) => {
      const definition = registry.get(section.templateId);
      return {
        id: section.instanceId,
        name: section.name,
        component: { id: section.templateId, version: 1 },
        props: { ...section.customValues },
        ...(section.bindings ? { bindings: section.bindings } : {}),
        ...(definition?.htmlContent === section.htmlContent
          ? {}
          : { legacy: { name: section.name, html: section.htmlContent } }),
      };
    }),
  };
  validateManifest(manifest);
  return manifest;
}

export function validateManifest(input: unknown): asserts input is PageManifest {
  if (!input || typeof input !== 'object') throw new Error('Page manifest must be an object.');
  const value = input as PageManifest;
  if (
    value.schemaVersion !== 1 ||
    typeof value.id !== 'string' ||
    !value.id ||
    typeof value.title !== 'string' ||
    !RELEASE_STATUSES.includes(value.status) ||
    !['id', 'en'].includes(value.locale) ||
    !Array.isArray(value.sections) ||
    value.sections.length > 500
  ) {
    throw new Error('Unsupported or invalid page manifest.');
  }
  const ids = new Set<string>();
  for (const section of value.sections) {
    if (
      !section ||
      typeof section.id !== 'string' ||
      !section.id ||
      typeof section.name !== 'string' ||
      ids.has(section.id) ||
      !section.component ||
      typeof section.component.id !== 'string' ||
      !section.component.id ||
      section.component.version !== 1 ||
      !section.props ||
      typeof section.props !== 'object' ||
      Array.isArray(section.props) ||
      Object.values(section.props).some((prop) => typeof prop !== 'string') ||
      (section.legacy !== undefined &&
        (!section.legacy ||
          typeof section.legacy !== 'object' ||
          Array.isArray(section.legacy) ||
          typeof section.legacy.html !== 'string' ||
          typeof section.legacy.name !== 'string')) ||
      (section.bindings !== undefined &&
        (!section.bindings ||
          typeof section.bindings !== 'object' ||
          Array.isArray(section.bindings)))
    ) {
      throw new Error('Invalid section or unsupported component version.');
    }
    ids.add(section.id);
    if (section.bindings !== undefined) validateBindings(section.bindings);
  }
}

export function fromManifest(manifest: PageManifest, registry: ComponentRegistry): PlacedSection[] {
  validateManifest(manifest);
  return manifest.sections.map((section) => {
    const definition = registry.get(section.component.id);
    if (!definition && !section.legacy)
      throw new Error(
        `Renderer does not support component ${section.component.id}@${section.component.version}.`,
      );
    return {
      instanceId: section.id,
      templateId: section.component.id,
      name: section.name,
      htmlContent: section.legacy?.html ?? definition!.htmlContent,
      customValues: { ...section.props },
      ...(section.bindings ? { bindings: section.bindings } : {}),
    };
  });
}

export interface ContentResolver {
  resolve(reference: ContentReference): Promise<string>;
}

// Resolve content when publishing; a published snapshot must not drift with CMS edits.
export async function resolveManifest(
  manifest: PageManifest,
  resolver: ContentResolver,
): Promise<PageManifest> {
  validateManifest(manifest);
  // Capture the input before awaiting; concurrent edits must not change publication.
  const snapshot = structuredClone(manifest);
  const references = new Map<string, ContentReference>();
  const key = (reference: ContentReference) =>
    JSON.stringify([
      reference.source,
      reference.documentId,
      reference.field,
      reference.locale ?? '',
      reference.kind,
    ]);
  for (const section of snapshot.sections)
    for (const reference of Object.values(section.bindings ?? {}))
      references.set(key(reference), reference);
  const queue = [...references.entries()];
  const resolved = new Map<string, string>();
  let cursor = 0;
  let failure: unknown;
  await Promise.all(
    Array.from({ length: Math.min(8, queue.length) }, async () => {
      while (failure === undefined && cursor < queue.length) {
        const [id, reference] = queue[cursor++];
        try {
          const value = await resolver.resolve(reference);
          if (typeof value !== 'string') throw new Error('CMS resolver returned invalid content.');
          resolved.set(id, value);
        } catch (error) {
          failure = error ?? new Error('CMS resolution failed.');
        }
      }
    }),
  );
  if (failure !== undefined) throw failure;
  for (const section of snapshot.sections)
    section.props = Object.fromEntries([
      ...Object.entries(section.props),
      ...Object.entries(section.bindings ?? {}).map(([field, reference]) => [
        field,
        resolved.get(key(reference))!,
      ]),
    ]);
  return snapshot;
}
