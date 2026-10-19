import type React from 'react';
import { useCallback } from 'react';
import type { Feedback } from '../components/Feedback';
import { canEditReleaseContent } from '../domain/access';
import {
  applySectionUpdate,
  canEditSection,
  canRemoveSection,
  reorderSections,
  sectionsAfterClear,
} from '../domain/canvasPolicy';
import { createId } from '../domain/ids';
import { isComponentInScope, placeComponent } from '../domain/templates';
import type { AppUser, PageTemplate, PlacedSection, ReleaseItem, SectionTemplate } from '../types';
import type { EditorState } from './useEditorDocument';

export const SECTION_DRAG_TYPE = 'application/x-section-index';
export const COMPONENT_DRAG_TYPE = 'application/x-alco-component';

interface Options {
  editor: EditorState;
  user: AppUser;
  release: ReleaseItem | null;
  sourceTemplate: PageTemplate | null;
  components: SectionTemplate[];
  feedback: Feedback;
  activeSectionId: string | null;
  setActiveSectionId: (id: string | null) => void;
}

/** Canvas editing commands with release ownership, lock and template-scope rules applied. */
export function useCanvasActions({
  editor,
  user,
  release,
  sourceTemplate,
  components,
  feedback,
  activeSectionId,
  setActiveSectionId,
}: Options) {
  const { updateSections } = editor;
  const readOnly = !canEditReleaseContent(user, release);

  const guard = useCallback((): boolean => {
    if (!readOnly) return true;
    feedback.warn(
      `Mode Read-Only: Hanya Releaser (${release?.authorName}) yang dapat mengubah canvas rilis ini. Anda dapat meninggalkan komentar.`,
    );
    return false;
  }, [readOnly, release, feedback]);

  const insert = useCallback(
    (component: SectionTemplate, index?: number) => {
      if (!guard()) return;
      const inScope = isComponentInScope(component, user, { release, sourceTemplate });
      if (!inScope)
        feedback.warn(
          'Menambahkan komponen pada canvas akan membuat desain menyimpang dari template standar.',
        );
      const section = placeComponent(component, !inScope);
      updateSections((sections) => {
        const next = [...sections];
        next.splice(index ?? next.length, 0, section);
        return next;
      });
      setActiveSectionId(section.instanceId);
    },
    [guard, user, release, sourceTemplate, feedback, updateSections, setActiveSectionId],
  );

  const reorder = useCallback(
    (from: number, to: number) => {
      if (!guard()) return;
      const { sections } = editor;
      if (sections[from]?.isLocked || sections[to]?.isLocked) {
        feedback.warn('Posisi komponen terkunci.');
        return;
      }
      updateSections((current) => reorderSections(current, from, to) ?? current);
    },
    [guard, editor, updateSections, feedback],
  );

  const move = useCallback(
    (index: number, direction: 'up' | 'down') =>
      reorder(index, direction === 'up' ? index - 1 : index + 1),
    [reorder],
  );

  /** Handles both section reordering and components dropped from the library. */
  const drop = useCallback(
    (event: React.DragEvent, index?: number) => {
      const from = event.dataTransfer.getData(SECTION_DRAG_TYPE);
      if (from !== '' && index !== undefined) {
        reorder(Number(from), index);
        return;
      }
      const id =
        event.dataTransfer.getData(COMPONENT_DRAG_TYPE) || event.dataTransfer.getData('text/plain');
      const component = components.find((item) => item.id === id);
      if (component) insert(component, index);
    },
    [components, insert, reorder],
  );

  const toggleLock = useCallback(
    (instanceId: string) => {
      const section = editor.sections.find((item) => item.instanceId === instanceId);
      if (!section) return;
      updateSections((sections) =>
        sections.map((item) =>
          item.instanceId === instanceId ? { ...item, isLocked: !item.isLocked } : item,
        ),
      );
      feedback.notify(
        section.isLocked
          ? `Kunci posisi komponen "${section.name}" dibuka (Unlocked).`
          : `Posisi komponen "${section.name}" berhasil dikunci (Lock).`,
      );
    },
    [editor.sections, updateSections, feedback],
  );

  const remove = useCallback(
    (instanceId: string) => {
      if (!guard()) return;
      const section = editor.sections.find((item) => item.instanceId === instanceId);
      if (section && !canRemoveSection(user, section)) {
        feedback.warn(
          `Komponen "${section.name}" berposisi terkunci dan tidak dapat dihapus oleh pengguna Product.`,
        );
        return;
      }
      updateSections((sections) => sections.filter((item) => item.instanceId !== instanceId));
      if (activeSectionId === instanceId) setActiveSectionId(null);
    },
    [guard, editor.sections, user, feedback, updateSections, activeSectionId, setActiveSectionId],
  );

  const duplicate = useCallback(
    (instanceId: string) => {
      if (!guard()) return;
      const copy: PlacedSection | undefined = editor.sections.find(
        (item) => item.instanceId === instanceId,
      );
      if (!copy) return;
      const duplicateSection = {
        ...structuredClone(copy),
        instanceId: createId('inst'),
        name: `${copy.name} (Copy)`,
      };
      updateSections((sections) => {
        const next = [...sections];
        next.splice(
          sections.findIndex((item) => item.instanceId === instanceId) + 1,
          0,
          duplicateSection,
        );
        return next;
      });
      setActiveSectionId(duplicateSection.instanceId);
    },
    [guard, editor.sections, updateSections, setActiveSectionId],
  );

  const updateSection = useCallback(
    (
      instanceId: string,
      values: Record<string, string>,
      html?: string,
      lockedFields?: Record<string, boolean>,
    ) => {
      const section = editor.sections.find((item) => item.instanceId === instanceId);
      if (!section) return;
      if (!canEditSection(user, section)) {
        feedback.warn(
          'Komponen ini telah dikunci oleh Team Admin dan tidak dapat diedit oleh Team Product.',
        );
        return;
      }
      if (!guard()) return;
      updateSections((sections) =>
        sections.map((item) =>
          item.instanceId === instanceId
            ? applySectionUpdate(item, user, values, html, lockedFields)
            : item,
        ),
      );
    },
    [editor.sections, user, feedback, guard, updateSections],
  );

  const clear = useCallback(() => {
    if (!guard()) return;
    if (sectionsAfterClear(editor.sections, user).length)
      feedback.notify(
        'Komponen terkunci tetap dipertahankan dan tidak dapat dihapus oleh pengguna Product.',
      );
    updateSections((sections) => sectionsAfterClear(sections, user));
    setActiveSectionId(null);
  }, [guard, editor.sections, updateSections, user, feedback, setActiveSectionId]);

  return {
    readOnly,
    insert,
    reorder,
    move,
    drop,
    toggleLock,
    remove,
    duplicate,
    updateSection,
    clear,
  };
}

export type CanvasActions = ReturnType<typeof useCanvasActions>;
