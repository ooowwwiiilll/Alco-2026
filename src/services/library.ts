import { COMPONENT_LIBRARY } from '../data/library';
import { DEFAULT_PAGE_TEMPLATES } from '../data/pageTemplates';
import { toManifest, type ComponentRegistry } from '../domain/manifest';
import { assertContentRevision } from '../persistence/contracts';
import type {
  AppConfig,
  ComponentOverride,
  PageTemplate,
  PublicConfig,
  SectionTemplate,
} from '../types';
import { cleanComponentName } from '../utils/format';
import * as store from './store';

/** Built-in components, pinned for manifests and renderers. */
export const componentRegistry: ComponentRegistry = new Map(
  COMPONENT_LIBRARY.map((component) => [component.id, component]),
);

export interface LibrarySources {
  customs: SectionTemplate[];
  overrides: ComponentOverride[];
  pages: PageTemplate[];
  config: AppConfig;
}

/** Built-ins with Role Manager edits applied, followed by custom components; hidden ones removed. */
export function composeComponents({
  customs,
  overrides,
  config,
}: LibrarySources): SectionTemplate[] {
  const edits = new Map(overrides.map((override) => [override.id, override]));
  const merged = new Map<string, SectionTemplate>();
  for (const component of [...COMPONENT_LIBRARY, ...customs]) {
    const edit = edits.get(component.id);
    merged.set(component.id, {
      ...component,
      ...(edit?.htmlContent ? { htmlContent: edit.htmlContent } : {}),
      ...(edit ? { updatedAt: edit.updatedAt } : {}),
      name: cleanComponentName(
        config.templateRenames?.[component.id] ?? edit?.name ?? component.name,
      ),
    });
  }
  const hidden = new Set(config.deletedTemplateIds ?? []);
  return [...merged.values()].filter((component) => !hidden.has(component.id));
}

/** Stored pages replace the built-in page of the same ID. */
export function composePages({ pages, config }: LibrarySources): PageTemplate[] {
  const stored = new Map(pages.map((page) => [page.id, page]));
  const builtIns = DEFAULT_PAGE_TEMPLATES.map((page) => stored.get(page.id) ?? page);
  const customs = pages.filter(
    (page) => !DEFAULT_PAGE_TEMPLATES.some((builtIn) => builtIn.id === page.id),
  );
  const hidden = new Set(config.deletedPageIds ?? []);
  return [...customs.sort((a, b) => b.createdAt.localeCompare(a.createdAt)), ...builtIns].filter(
    (page) => !hidden.has(page.id),
  );
}

export const subscribeCustomComponents = (update: (values: SectionTemplate[]) => void) =>
  store.subscribe<SectionTemplate>('customTemplates', update);
export const subscribeOverrides = (update: (values: ComponentOverride[]) => void) =>
  store.subscribe<ComponentOverride>('componentOverrides', update);
export const subscribePageTemplates = (update: (values: PageTemplate[]) => void) =>
  store.subscribe<PageTemplate>('pageTemplates', update);
export const subscribeConfig = (update: (value: AppConfig) => void) =>
  store.subscribe<AppConfig>('appConfig', (values) =>
    update(values.find((value) => value.id === 'global') ?? { id: 'global' }),
  );

export async function updateConfig(changes: Omit<Partial<AppConfig>, 'id'>): Promise<void> {
  const current = await store.get<AppConfig>('appConfig', 'global');
  await store.write<AppConfig>('appConfig', { ...current, ...changes, id: 'global' });
}

export function saveCustomComponent(component: SectionTemplate) {
  return store.create('customTemplates', { ...component, isCustom: true });
}
export const deleteCustomComponent = (id: string) => store.remove('customTemplates', id);

export async function saveComponentOverride(override: ComponentOverride): Promise<void> {
  const current = await store.get<ComponentOverride>('componentOverrides', override.id);
  await store.write('componentOverrides', { ...current, ...override });
}

function withManifest(page: PageTemplate): PageTemplate {
  return { ...page, manifest: toManifest(page.id, page.name, page.sections, componentRegistry) };
}

export const createPageTemplate = (page: PageTemplate) =>
  store.create('pageTemplates', withManifest({ ...page, contentRevision: 1 }));

async function storedOrBuiltIn(id: string): Promise<{ page: PageTemplate; stored: boolean }> {
  const stored = await store.get<PageTemplate>('pageTemplates', id);
  if (stored) return { page: stored, stored: true };
  const builtIn = DEFAULT_PAGE_TEMPLATES.find((page) => page.id === id);
  if (!builtIn) throw new Error('Page template not found. It may have been deleted.');
  return { page: { ...builtIn, isDefault: true }, stored: false };
}

async function persist(page: PageTemplate, stored: boolean, revision?: number) {
  const value = withManifest({ ...page, updatedAt: new Date().toISOString() });
  return stored
    ? store.write('pageTemplates', value, revision ?? 0)
    : store.create('pageTemplates', value);
}

/** Name, description and category changes; built-in pages get a stored copy on first edit. */
export async function updatePageTemplate(
  id: string,
  changes: Pick<Partial<PageTemplate>, 'name' | 'description' | 'category'>,
): Promise<PageTemplate> {
  const { page, stored } = await storedOrBuiltIn(id);
  return persist({ ...page, ...changes, id }, stored, page.revision);
}

/** Saves canvas content opened at `contentRevision`; fails if another session saved since. */
export async function savePageTemplateContent(
  id: string,
  sections: PageTemplate['sections'],
  contentRevision: number,
): Promise<PageTemplate> {
  const { page, stored } = await storedOrBuiltIn(id);
  return persist(
    {
      ...page,
      sections,
      contentRevision: assertContentRevision(page.contentRevision, contentRevision),
    },
    stored,
    page.revision,
  );
}

export async function deletePageTemplate(id: string, config: AppConfig): Promise<void> {
  if (await store.get('pageTemplates', id)) await store.remove('pageTemplates', id);
  if (DEFAULT_PAGE_TEMPLATES.some((page) => page.id === id))
    await updateConfig({ deletedPageIds: [...new Set([...(config.deletedPageIds ?? []), id])] });
}

export const subscribePublicConfig = (update: (value: PublicConfig) => void) =>
  store.subscribe<PublicConfig>('publicConfig', (values) =>
    update(values.find((value) => value.id === 'global') ?? { id: 'global' }),
  );

export async function updatePublicConfig(changes: Omit<Partial<PublicConfig>, 'id'>) {
  const current = await store.get<PublicConfig>('publicConfig', 'global');
  await store.write<PublicConfig>('publicConfig', { ...current, ...changes, id: 'global' });
}
