import { useCallback } from 'react';
import type { Feedback } from '../components/Feedback';
import { canEditLibraryComponents, canManagePageTemplates } from '../domain/access';
import { createId, nowIso } from '../domain/ids';
import { cloneSections, pageTemplateCategory } from '../domain/templates';
import {
  createPageTemplate,
  deleteCustomComponent,
  deletePageTemplate,
  saveComponentOverride,
  saveCustomComponent,
  savePageTemplateContent,
  updateConfig,
  updatePageTemplate,
  updatePublicConfig,
} from '../services/library';
import { addMedia, deleteMedia } from '../services/media';
import type { AppConfig, AppUser, PageTemplate, SectionTemplate } from '../types';
import { cleanComponentName } from '../utils/format';
import type { EditorState } from './useEditorDocument';

interface Options {
  user: AppUser;
  config: AppConfig;
  components: SectionTemplate[];
  pageTemplates: PageTemplate[];
  templateCategories: string[];
  editor: EditorState;
  feedback: Feedback;
}

/** Component library, page templates, template categories and media management. */
export function useLibraryActions({
  user,
  config,
  components,
  pageTemplates,
  templateCategories,
  editor,
  feedback,
}: Options) {
  const { load, markSaved } = editor;

  const requireTemplateRights = useCallback(() => {
    if (canManagePageTemplates(user)) return true;
    feedback.warn('Hanya Admin dan Role Manager yang dapat mengelola template.');
    return false;
  }, [user, feedback]);

  /** Opens a page template on the canvas with fresh section instances. */
  const openPageTemplate = useCallback(
    (page: PageTemplate, fileName?: string) =>
      load({
        sections: cloneSections(page.sections),
        id: page.id,
        name: cleanComponentName(fileName || page.name),
        revision: page.contentRevision ?? 0,
      }),
    [load],
  );

  const newCanvas = useCallback(
    () => load({ sections: [], id: null, name: null, revision: 0 }),
    [load],
  );

  /** Creates an empty page template and opens it. */
  const createTemplate = useCallback(
    async (name: string, category: string) => {
      if (!requireTemplateRights()) return;
      const page = await createPageTemplate({
        id: createId('page-tpl'),
        name: cleanComponentName(name) || 'New Template',
        description: `Template kategori ${category.toUpperCase()}`,
        category: category.toUpperCase(),
        createdAt: nowIso(),
        sections: [],
      });
      openPageTemplate(page);
      feedback.notify(`Template "${page.name}" (${page.category}) berhasil dibuat.`);
    },
    [requireTemplateRights, openPageTemplate, feedback],
  );

  /** Saves the current canvas as a new page template. */
  const saveCanvasAsTemplate = useCallback(
    async (name: string, description: string, category: string) => {
      if (!requireTemplateRights()) return;
      const page = await createPageTemplate({
        id: createId('page-tpl'),
        name: cleanComponentName(name) || 'Custom Template',
        description,
        category: category.toUpperCase(),
        createdAt: nowIso(),
        sections: structuredClone(editor.sections),
      });
      markSaved({ id: page.id, name: page.name, revision: page.contentRevision ?? 1 });
      feedback.notify(`Template "${page.name}" berhasil disimpan.`);
    },
    [requireTemplateRights, editor.sections, markSaved, feedback],
  );

  /** Saves canvas changes back to the open page template. */
  const saveTemplateContent = useCallback(
    async (page: PageTemplate) => {
      if (!requireTemplateRights()) return;
      const saved = await savePageTemplateContent(
        page.id,
        structuredClone(editor.sections),
        editor.revision,
      );
      markSaved({ revision: saved.contentRevision ?? 0 });
      feedback.notify(`Perubahan berhasil disimpan ke template "${page.name}".`);
    },
    [requireTemplateRights, editor.sections, editor.revision, markSaved, feedback],
  );

  const editTemplate = useCallback(
    async (
      id: string,
      changes: Pick<Partial<PageTemplate>, 'name' | 'description' | 'category'>,
    ) => {
      if (!requireTemplateRights()) return;
      const saved = await updatePageTemplate(id, {
        ...changes,
        ...(changes.name !== undefined ? { name: cleanComponentName(changes.name) } : {}),
      });
      if (editor.id === id) markSaved({ name: saved.name });
    },
    [requireTemplateRights, editor.id, markSaved],
  );

  const duplicateTemplate = useCallback(
    async (page: PageTemplate) => {
      if (!requireTemplateRights()) return;
      await createPageTemplate({
        ...structuredClone(page),
        id: createId('page-tpl'),
        name: `${page.name} (Copy)`,
        createdAt: nowIso(),
        updatedAt: undefined,
        revision: undefined,
        isDefault: false,
      });
      feedback.notify(`Template "${page.name}" berhasil diduplikasi.`);
    },
    [requireTemplateRights, feedback],
  );

  const removeTemplate = useCallback(
    async (page: PageTemplate) => {
      if (!requireTemplateRights()) return;
      await deletePageTemplate(page.id, config);
      feedback.notify(`Template "${page.name}" berhasil dihapus.`);
    },
    [requireTemplateRights, config, feedback],
  );

  const addCategory = useCallback(
    (category: string) =>
      void updateConfig({
        templateCategories: [...templateCategories, category.toUpperCase()],
      }).catch(feedback.fail),
    [templateCategories, feedback],
  );

  /** Removes a category; its templates move to the first remaining category. */
  const deleteCategory = useCallback(
    async (category: string) => {
      if (!requireTemplateRights()) return;
      const name = category.toUpperCase();
      const remaining = templateCategories.filter((item) => item.toUpperCase() !== name);
      const fallback = remaining[0] ?? 'LANDING';
      await updateConfig({ templateCategories: remaining.length ? remaining : [fallback] });
      await Promise.all(
        pageTemplates
          .filter((page) => pageTemplateCategory(page) === name)
          .map((page) => updatePageTemplate(page.id, { category: fallback })),
      );
      feedback.notify(`Kategori "${category}" berhasil dihapus.`);
    },
    [requireTemplateRights, templateCategories, pageTemplates, feedback],
  );

  const addCustomComponent = useCallback(
    async (component: SectionTemplate) => {
      await saveCustomComponent({ ...component, createdAt: nowIso() });
      feedback.notify(`Komponen "${component.name}" berhasil ditambahkan.`);
    },
    [feedback],
  );

  const removeCustomComponent = useCallback(
    async (component: SectionTemplate) => {
      if (component.isCustom) await deleteCustomComponent(component.id);
      else
        await updateConfig({
          deletedTemplateIds: [...new Set([...(config.deletedTemplateIds ?? []), component.id])],
        });
      feedback.notify(`Komponen "${component.name}" berhasil dihapus.`);
    },
    [config, feedback],
  );

  const restoreBuiltInComponents = useCallback(async () => {
    await updateConfig({ deletedTemplateIds: [], templateRenames: {} });
    feedback.notify('Komponen bawaan berhasil dipulihkan.');
  }, [feedback]);

  const restoreBuiltInPages = useCallback(async () => {
    await updateConfig({ deletedPageIds: [] });
    feedback.notify('Template bawaan berhasil dipulihkan.');
  }, [feedback]);

  const renameComponent = useCallback(
    async (id: string, name: string) => {
      const clean = cleanComponentName(name);
      if (!clean) return;
      await updateConfig({ templateRenames: { ...config.templateRenames, [id]: clean } });
    },
    [config.templateRenames],
  );

  /** Role Manager edits a library component's default text and images. */
  const updateComponent = useCallback(
    async (id: string, htmlContent: string, name: string) => {
      if (!canEditLibraryComponents(user)) {
        feedback.warn('Akses Terbatas: Hanya Role Manager yang dapat mengedit template komponen.');
        return;
      }
      await saveComponentOverride({
        id,
        htmlContent,
        name: cleanComponentName(name),
        updatedAt: nowIso(),
        updatedBy: user.id,
      });
      feedback.notify(`Komponen "${name || id}" berhasil diperbarui oleh Role Manager.`);
    },
    [user, feedback],
  );

  const uploadMedia = useCallback(
    (file: File, name: string) => addMedia(file, name, user.name),
    [user.name],
  );

  const removeMedia = useCallback(
    async (id: string) => {
      await deleteMedia(id);
      feedback.notify('Gambar berhasil dihapus dari storage.');
    },
    [feedback],
  );

  /** Default image for library placeholders and the landing page background. */
  const setHomepageBackground = useCallback(
    async (url: string) => {
      await Promise.all([
        updateConfig({ homepageBackground: url }),
        updatePublicConfig({ authBackground: url }),
      ]);
      feedback.notify('Background halaman utama berhasil diubah');
    },
    [feedback],
  );

  return {
    components,
    openPageTemplate,
    newCanvas,
    createTemplate,
    saveCanvasAsTemplate,
    saveTemplateContent,
    editTemplate,
    duplicateTemplate,
    removeTemplate,
    addCategory,
    deleteCategory,
    addCustomComponent,
    removeCustomComponent,
    restoreBuiltInComponents,
    restoreBuiltInPages,
    renameComponent,
    updateComponent,
    uploadMedia,
    removeMedia,
    setHomepageBackground,
  };
}

export type LibraryActions = ReturnType<typeof useLibraryActions>;
