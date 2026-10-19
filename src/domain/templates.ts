import type { AppUser, PageTemplate, PlacedSection, ReleaseItem, SectionTemplate } from '../types';
import { isEditor } from './access';
import { createId } from './ids';
import { cleanComponentName } from '../utils/format';

export const DEFAULT_TEMPLATE_CATEGORIES = ['LANDING', 'PLP', 'PDP', 'OTHERS'] as const;

/** Category of a page template, inferred from its name for legacy records. */
export function pageTemplateCategory(template: Pick<PageTemplate, 'category' | 'name'>): string {
  const explicit = template.category?.trim();
  if (explicit) return explicit.toUpperCase();
  const name = template.name.toLowerCase();
  if (/landing|corporate|enterprise/.test(name)) return 'LANDING';
  if (/plp|catalog|ecosystem|showcase/.test(name)) return 'PLP';
  if (/pdp|detail|product/.test(name)) return 'PDP';
  return 'OTHERS';
}

/** Resolves the page template a release was built from (ID, name, then section overlap). */
export function resolveSourceTemplate(
  release:
    Pick<ReleaseItem, 'sourceTemplateId' | 'sourceTemplateName' | 'sections'> | null | undefined,
  pageTemplates: PageTemplate[],
): PageTemplate | null {
  if (!release || pageTemplates.length === 0) return null;
  const byId = pageTemplates.find((template) => template.id === release.sourceTemplateId);
  if (byId) return byId;
  const sourceName = release.sourceTemplateName?.toLowerCase();
  const byName =
    sourceName && pageTemplates.find((template) => template.name.toLowerCase() === sourceName);
  if (byName) return byName;
  const ids = new Set(release.sections.map((section) => section.templateId));
  const names = new Set(release.sections.map((section) => section.name.toLowerCase()));
  let best: PageTemplate | null = null;
  let bestScore = 0;
  for (const template of pageTemplates) {
    const score = template.sections.reduce(
      (total, section) =>
        total + (ids.has(section.templateId) ? 2 : names.has(section.name.toLowerCase()) ? 1 : 0),
      0,
    );
    if (score > bestScore) [best, bestScore] = [template, score];
  }
  return best ?? pageTemplates[0] ?? null;
}

/**
 * Non-editors may only use components belonging to the page's source template (or already in
 * the release). Anything else is still allowed but flagged as out of scope.
 */
export function isComponentInScope(
  component: Pick<SectionTemplate, 'id' | 'name'>,
  user: Pick<AppUser, 'role'>,
  context: { release: ReleaseItem | null; sourceTemplate: PageTemplate | null },
): boolean {
  if (isEditor(user)) return true;
  const allowed = [
    ...(context.sourceTemplate?.sections ?? []),
    ...(context.release?.sections ?? []),
  ];
  const name = component.name.toLowerCase();
  return allowed.some(
    (section) => section.templateId === component.id || section.name.toLowerCase() === name,
  );
}

export function placeComponent(component: SectionTemplate, isOutOfScope = false): PlacedSection {
  return {
    instanceId: createId('inst'),
    templateId: component.id,
    name: cleanComponentName(component.name),
    htmlContent: component.htmlContent,
    customValues: {},
    ...(isOutOfScope ? { isOutOfScope } : {}),
  };
}

/** Fresh instance IDs so a loaded page never shares section identity with its source. */
export function cloneSections(sections: PlacedSection[]): PlacedSection[] {
  return sections.map((section) => ({
    ...structuredClone(section),
    instanceId: createId('inst'),
    name: cleanComponentName(section.name),
  }));
}
