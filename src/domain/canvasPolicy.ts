import type { AppUser, PlacedSection } from '../types';
import { isProduct } from './access';

type Actor = Pick<AppUser, 'role'>;

export const canEditSection = (user: Actor, section: PlacedSection): boolean =>
  !(isProduct(user) && section.isLocked);

export const canRemoveSection = canEditSection;

export const canToggleLocks = (user: Actor): boolean => !isProduct(user);

/**
 * Applies an editor change. Product users cannot change lock settings or any locked field
 * (including its per-language variants).
 */
export function applySectionUpdate(
  section: PlacedSection,
  user: Actor,
  values: Record<string, string>,
  html?: string,
  lockedFields?: Record<string, boolean>,
): PlacedSection {
  const productUser = isProduct(user);
  const nextValues = { ...values };
  if (productUser)
    for (const [key, locked] of Object.entries(section.lockedFields ?? {})) {
      if (!locked) continue;
      for (const variant of [key, `${key}_id`, `${key}_en`]) {
        const previous = section.customValues[variant];
        if (previous === undefined) delete nextValues[variant];
        else nextValues[variant] = previous;
      }
    }
  return {
    ...section,
    customValues: nextValues,
    htmlContent: html ?? section.htmlContent,
    lockedFields: productUser ? section.lockedFields : (lockedFields ?? section.lockedFields),
  };
}

/** Product users clearing the canvas keep sections an admin locked in place. */
export function sectionsAfterClear(sections: PlacedSection[], user: Actor): PlacedSection[] {
  return isProduct(user) ? sections.filter((section) => section.isLocked) : [];
}

/** Moves a section unless either end of the move is locked. Returns null when refused. */
export function reorderSections(
  sections: PlacedSection[],
  from: number,
  to: number,
): PlacedSection[] | null {
  if (from === to || from < 0 || to < 0 || from >= sections.length || to >= sections.length)
    return null;
  if (sections[from]!.isLocked || sections[to]!.isLocked) return null;
  const next = [...sections];
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved!);
  return next;
}
