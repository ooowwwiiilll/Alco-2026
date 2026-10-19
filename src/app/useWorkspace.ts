import { useCallback, useMemo, useState } from 'react';
import { logout } from '../auth/service';
import { useFeedback } from '../components/Feedback';
import { canChangeReleaseStatus, canEditReleaseContent, isEditor } from '../domain/access';
import { resolveSourceTemplate } from '../domain/templates';
import { useAccountActions } from '../hooks/useAccountActions';
import { useCanvasActions } from '../hooks/useCanvasActions';
import { useNotifications } from '../hooks/useCollaboration';
import { useEditorDocument } from '../hooks/useEditorDocument';
import { useLibraryActions } from '../hooks/useLibraryActions';
import { useReleaseActions } from '../hooks/useReleaseActions';
import { useWorkspaceData } from '../hooks/useWorkspaceData';
import { browserStorage } from '../lib/browserStorage';
import { updateRelease } from '../services/releases';
import type {
  AppTheme,
  AppUser,
  DeviceMode,
  PageTemplate,
  PreviewLanguage,
  ReleaseItem,
  ReleaseStatus,
  SectionTemplate,
  SidebarViewMode,
  ViewportMode,
} from '../types';
import { slugifyName } from '../utils/format';
import { exportPagesToPdf } from '../utils/pdfExport';

export type WorkspaceView = 'dashboard' | 'editor';

/** Dialogs are mutually exclusive, so a single discriminated value describes what is open. */
export type WorkspaceModal =
  | { kind: 'notifications' }
  | { kind: 'users' }
  | { kind: 'newTemplate' }
  | { kind: 'media' }
  | { kind: 'saveRelease' }
  | { kind: 'saveTemplate' }
  | { kind: 'addComponent' }
  | { kind: 'useTemplate'; template: PageTemplate }
  | { kind: 'backup' }
  | { kind: 'comments' }
  | { kind: 'history' }
  | { kind: 'statusReview'; release: ReleaseItem; targetStatus: ReleaseStatus; isExit: boolean };

const preference = <T extends string>(key: string, fallback: T, allowed: readonly T[]): T => {
  const value = browserStorage.getItem(key) as T | null;
  return value && allowed.includes(value) ? value : fallback;
};

/** All workspace state and commands for one signed-in account. */
export function useWorkspace(user: AppUser) {
  const feedback = useFeedback();
  const data = useWorkspaceData(user);
  const editor = useEditorDocument(user.id);
  const notifications = useNotifications(user.id);

  // Always land on the dashboard after signing in.
  const [view, setView] = useState<WorkspaceView>('dashboard');
  const [modal, setModal] = useState<WorkspaceModal | null>(null);
  const [theme, setThemeState] = useState<AppTheme>(() =>
    preference('alco:theme', 'dark', ['dark', 'light']),
  );
  const [previewLanguage, setPreviewLanguageState] = useState<PreviewLanguage>(() =>
    preference('alco:preview-language', 'id', ['id', 'en']),
  );
  const [viewportMode, setViewportMode] = useState<ViewportMode>('both');
  const [sidebarViewMode, setSidebarViewMode] = useState<SidebarViewMode>('components');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [activeInlineKey, setActiveInlineKey] = useState<string | null>(null);
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  /** Read-only canvas opened from the dashboard's "preview" action. */
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [autoPlayDevice, setAutoPlayDevice] = useState<DeviceMode | null>(null);

  const setTheme = (value: AppTheme) => {
    setThemeState(value);
    browserStorage.setItem('alco:theme', value);
  };
  const setPreviewLanguage = (value: PreviewLanguage) => {
    setPreviewLanguageState(value);
    browserStorage.setItem('alco:preview-language', value);
  };

  const activeRelease = useMemo(
    () => data.releases.find((release) => release.id === editor.id) ?? null,
    [data.releases, editor.id],
  );
  const activePageTemplate = useMemo(
    () => data.pageTemplates.find((page) => page.id === editor.id) ?? null,
    [data.pageTemplates, editor.id],
  );
  const sourceTemplate = activeRelease
    ? resolveSourceTemplate(activeRelease, data.pageTemplates)
    : activePageTemplate;
  const isReleaser = canEditReleaseContent(user, activeRelease) && !isPreviewMode;
  const activeSection =
    editor.sections.find((section) => section.instanceId === activeSectionId) ?? null;

  /** Runs a command and reports failures; dialogs await the promise to keep their own state. */
  const run = useCallback(
    (task: () => Promise<unknown>) => void task().catch(feedback.fail),
    [feedback],
  );

  const canvas = useCanvasActions({
    editor,
    user,
    release: isPreviewMode ? null : activeRelease,
    sourceTemplate,
    components: data.components,
    feedback,
    activeSectionId,
    setActiveSectionId,
  });
  const releases = useReleaseActions({ user, users: data.users, editor, feedback });
  const library = useLibraryActions({
    user,
    config: data.config,
    components: data.components,
    pageTemplates: data.pageTemplates,
    templateCategories: data.templateCategories,
    editor,
    feedback,
  });
  const accounts = useAccountActions({
    user,
    users: data.users,
    divisions: data.divisions,
    feedback,
  });

  const findRelease = (id: string) => data.releases.find((release) => release.id === id);
  const findPage = (id: string) => data.pageTemplates.find((page) => page.id === id);

  const enterEditor = (sidebar: SidebarViewMode, preview = false) => {
    setActiveSectionId(null);
    setSidebarViewMode(sidebar);
    setIsPreviewMode(preview);
    setIsSidebarOpen(!preview);
    setView('editor');
  };

  const openRelease = (release: ReleaseItem, preview = false) => {
    releases.open(release);
    enterEditor('releases', preview);
  };

  const openPageTemplate = (page: PageTemplate, fileName?: string) => {
    library.openPageTemplate(page, fileName);
    enterEditor('components');
  };

  const newCanvas = () => {
    library.newCanvas();
    enterEditor('components');
  };

  const addComponent = (component: SectionTemplate) => {
    if (view !== 'editor') enterEditor('components');
    canvas.insert(component);
  };

  /** Reviewers explain status changes; everyone else changes status directly. */
  const requestStatusChange = (releaseId: string, status: ReleaseStatus) => {
    const release = findRelease(releaseId);
    if (!release) return;
    if (canChangeReleaseStatus(user))
      setModal({ kind: 'statusReview', release, targetStatus: status, isExit: false });
    else run(() => releases.changeStatus(release, status));
  };

  const changeStatusNow = (releaseId: string, status: ReleaseStatus) => {
    const release = findRelease(releaseId);
    if (release) run(() => releases.changeStatus(release, status));
  };

  /** Reviewers leaving a release are asked for review notes first. */
  const openDashboard = () => {
    if (view === 'editor' && isEditor(user) && activeRelease && !isPreviewMode)
      setModal({
        kind: 'statusReview',
        release: activeRelease,
        targetStatus: activeRelease.status,
        isExit: true,
      });
    else setView('dashboard');
  };

  const share = (releaseId: string, device: DeviceMode = 'desktop') => {
    const release = findRelease(releaseId);
    if (release) run(() => releases.share(release, device));
  };

  const saveCanvas = () => {
    if (activeRelease) run(() => releases.saveContent(activeRelease));
    else if (activePageTemplate) run(() => library.saveTemplateContent(activePageTemplate));
    else setModal({ kind: 'saveTemplate' });
  };

  const renameCanvas = (name: string) => {
    if (activeRelease) run(() => updateRelease(activeRelease.id, { name }));
    else if (activePageTemplate) run(() => library.editTemplate(activePageTemplate.id, { name }));
    editor.markSaved({ name });
    feedback.notify(`Nama canvas diubah menjadi "${name}"`);
  };

  const exportPdf = async () => {
    setIsExportingPdf(true);
    try {
      // Let React render the off-screen export pages before capturing them.
      await new Promise((resolve) => setTimeout(resolve, 250));
      await exportPagesToPdf(
        ['export-pdf-page-id', 'export-pdf-page-en'],
        `${slugifyName(editor.name ?? 'content-structure-web')}.pdf`,
      );
      feedback.notify(
        'PDF (Halaman 1: Bahasa Indonesia, Halaman 2: Bahasa Inggris) berhasil diekspor.',
      );
    } finally {
      setIsExportingPdf(false);
    }
  };

  return {
    user,
    data,
    editor,
    notifications,
    feedback,
    view,
    setView,
    modal,
    setModal,
    theme,
    setTheme,
    previewLanguage,
    setPreviewLanguage,
    viewportMode,
    setViewportMode,
    sidebarViewMode,
    setSidebarViewMode,
    isSidebarOpen,
    setIsSidebarOpen,
    activeSectionId,
    setActiveSectionId,
    activeSection,
    activeInlineKey,
    setActiveInlineKey,
    isExportingPdf,
    isPreviewMode,
    autoPlayDevice,
    setAutoPlayDevice,
    activeRelease,
    activePageTemplate,
    sourceTemplate,
    isReleaser,
    canvas,
    releases,
    library,
    accounts,
    run,
    findRelease,
    findPage,
    openRelease,
    openPageTemplate,
    newCanvas,
    addComponent,
    requestStatusChange,
    changeStatusNow,
    openDashboard,
    share,
    saveCanvas,
    renameCanvas,
    exportPdf: () => run(exportPdf),
    logout: () => run(logout),
  };
}

export type WorkspaceController = ReturnType<typeof useWorkspace>;
