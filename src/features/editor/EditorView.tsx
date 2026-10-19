import { ChevronLeft } from 'lucide-react';
import type { WorkspaceController } from '../../app/useWorkspace';
import { canManageMedia, canManageUsers } from '../../domain/access';
import { isLocalWorkspace } from '../../lib/runtime';
import { updateRelease } from '../../services/releases';
import { Canvas } from './canvas/Canvas';
import { EditDrawer } from './EditDrawer';
import { Navbar } from './navbar/Navbar';
import { Sidebar } from './sidebar/Sidebar';

/** Page editor: attached header, component/template/release sidebar, canvas and inspector. */
export function EditorView({ workspace }: { workspace: WorkspaceController }) {
  const {
    user,
    data,
    editor,
    notifications,
    canvas,
    releases,
    library,
    run,
    setModal,
    theme,
    activeRelease,
    isPreviewMode,
    isSidebarOpen,
    setIsSidebarOpen,
    activeSection,
    findRelease,
    findPage,
  } = workspace;
  const isLight = theme === 'light';
  const pendingApprovalsCount = data.users.filter((account) => account.status === 'pending').length;

  return (
    <div
      className={`h-screen w-screen relative overflow-hidden ${isLight ? 'bg-[#F2F2F7] text-stone-900' : 'bg-alco-canvas text-white'} font-season-sans tracking-[0.04em] alco-tools-ui flex flex-col`}
    >
      {isLocalWorkspace && (
        <div className="fixed bottom-1 left-2 z-50 text-[10px] text-stone-500 pointer-events-none">
          Local workspace · stored in this browser
        </div>
      )}
      <Navbar
        onExportPdf={workspace.exportPdf}
        isExportingPdf={workspace.isExportingPdf}
        onOpenSaveReleaseModal={() => setModal({ kind: 'saveRelease' })}
        onOpenSavePageModal={() => setModal({ kind: 'saveTemplate' })}
        onOpenUserManagement={canManageUsers(user) ? () => setModal({ kind: 'users' }) : undefined}
        onOpenBackup={canManageUsers(user) ? () => setModal({ kind: 'backup' }) : undefined}
        onOpenImageStorageManagement={
          canManageMedia(user) ? () => setModal({ kind: 'media' }) : undefined
        }
        currentUser={user}
        users={data.users}
        pendingApprovalsCount={pendingApprovalsCount}
        onLogout={workspace.logout}
        theme={theme}
        activeTemplateName={editor.name}
        activeTemplateId={editor.id}
        activeRelease={activeRelease}
        pageTemplates={data.pageTemplates}
        releases={data.releases}
        onLoadRelease={(release) => workspace.openRelease(release)}
        onSaveActiveRelease={workspace.saveCanvas}
        onSaveChangesTemplate={workspace.saveCanvas}
        onClearCanvas={workspace.newCanvas}
        onRenameCanvas={workspace.renameCanvas}
        hasSections={editor.sections.length > 0}
        hasUnsavedChanges={editor.isDirty}
        unreadNotificationsCount={notifications.unreadCount}
        notifications={notifications.notifications}
        onOpenDashboard={workspace.openDashboard}
        onOpenReleaseComments={() => setModal({ kind: 'comments' })}
        onMarkAllNotificationsAsRead={() => run(notifications.markAllRead)}
        onChangeReleaseStatus={workspace.requestStatusChange}
        onShareRelease={workspace.share}
      />

      <div className="flex-1 h-[calc(100vh-68px)] w-full flex overflow-hidden relative">
        <div
          className={`shrink-0 z-40 h-full relative transition-[width] duration-300 ease-[cubic-bezier(0.2,0,0,1)] will-change-[width] ${
            isSidebarOpen ? 'w-[338px]' : 'w-0'
          }`}
        >
          <div
            className={`w-[338px] h-full flex flex-col border-r ${
              isLight ? 'border-[#E5E5E7] bg-white' : 'border-[#262626] bg-[#1A1A1A]'
            } overflow-hidden shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] will-change-transform ${
              isSidebarOpen
                ? 'translate-x-0 pointer-events-auto'
                : '-translate-x-full pointer-events-none'
            }`}
          >
            <Sidebar
              templates={data.components}
              pageTemplates={data.pageTemplates}
              releases={data.releases}
              currentUser={user}
              users={data.users}
              placedSections={editor.sections}
              viewMode={workspace.sidebarViewMode}
              setViewMode={workspace.setSidebarViewMode}
              onSelectTemplate={canvas.insert}
              onLoadPageTemplate={(page) => workspace.openPageTemplate(page)}
              onDuplicatePageTemplate={(id) => {
                const page = findPage(id);
                if (page) run(() => library.duplicateTemplate(page));
              }}
              onEditPageTemplate={(id, name) => run(() => library.editTemplate(id, { name }))}
              onDeletePageTemplate={(id) => {
                const page = findPage(id);
                if (page) run(() => library.removeTemplate(page));
              }}
              onLoadRelease={(release) => workspace.openRelease(release)}
              onDuplicateRelease={(id) => {
                const release = findRelease(id);
                if (release) run(() => releases.duplicate(release));
              }}
              onDeleteRelease={(id) => {
                const release = findRelease(id);
                if (release) run(() => releases.remove(release));
              }}
              onEditRelease={(id, changes) => run(() => updateRelease(id, changes))}
              onApproveRelease={(id) => workspace.requestStatusChange(id, 'approved')}
              onRejectRelease={(id) => workspace.requestStatusChange(id, 'rejected')}
              onChangeReleaseStatus={workspace.requestStatusChange}
              onShareRelease={workspace.share}
              onOpenSavePageModal={() => setModal({ kind: 'saveTemplate' })}
              onOpenNewTemplateModal={() => setModal({ kind: 'newTemplate' })}
              onOpenSaveReleaseModal={() => setModal({ kind: 'saveRelease' })}
              onOpenReleaseHistory={() => setModal({ kind: 'history' })}
              onDeleteCustomTemplate={(id) => {
                const component = data.components.find((item) => item.id === id);
                if (component) run(() => library.removeCustomComponent(component));
              }}
              onRenameTemplate={(id, name) => run(() => library.renameComponent(id, name))}
              activeTemplateId={editor.id}
              activeTemplateName={editor.name}
              onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
            />
          </div>

          <button
            type="button"
            onClick={() => !isPreviewMode && setIsSidebarOpen((open) => !open)}
            className={`absolute left-full top-7 z-50 flex items-center justify-center rounded-r-lg border border-l-0 py-2 pl-1 pr-1.5 transition-colors select-none ${
              isLight
                ? 'bg-white border-[#E5E5E7] shadow-[4px_0_12px_rgba(0,0,0,0.08)] hover:bg-stone-100 text-stone-700'
                : 'bg-[#1A1A1A] border-[#353535] shadow-[4px_0_12px_rgba(0,0,0,0.4)] hover:bg-[#262626] text-white'
            }`}
            title={isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
            aria-label={isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
          >
            <ChevronLeft
              className={`w-3.5 h-3.5 transition-transform duration-300 ${isSidebarOpen ? '' : 'rotate-180'}`}
            />
          </button>
        </div>

        <Canvas
          placedSections={editor.sections}
          activeSectionId={workspace.activeSectionId}
          viewportMode={workspace.viewportMode}
          setViewportMode={workspace.setViewportMode}
          previewLanguage={workspace.previewLanguage}
          onSetPreviewLanguage={workspace.setPreviewLanguage}
          onSelectSection={workspace.setActiveSectionId}
          onMoveSection={canvas.move}
          onReorderSections={canvas.reorder}
          onRemoveSection={canvas.remove}
          onDuplicateSection={canvas.duplicate}
          onDropTemplate={canvas.drop}
          onClearAll={canvas.clear}
          onUpdateSection={canvas.updateSection}
          onToggleSectionLock={canvas.toggleLock}
          activeTemplateName={editor.name}
          activeRelease={activeRelease}
          isExportingPdf={workspace.isExportingPdf}
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
          theme={theme}
          currentUser={user}
          isReleaser={workspace.isReleaser}
          onUndo={editor.undo}
          onRedo={editor.redo}
          canUndo={editor.canUndo}
          canRedo={editor.canRedo}
          autoPlayPrototypeDevice={workspace.autoPlayDevice}
          setActiveInlineEditing={(target) => workspace.setActiveInlineKey(target?.key ?? null)}
          mediaLibrary={data.media}
          placeholderImage={data.config.homepageBackground}
          onUnauthorizedEdit={() =>
            workspace.feedback.warn(
              'Akses Terbatas: Fitur edit teks dan gambar hanya dapat diakses oleh pemilik rilis atau saat menggunakan template.',
            )
          }
        />

        {activeSection && !isPreviewMode && (
          <div className="w-[338px] sm:w-[360px] h-full flex flex-col relative shrink-0 z-30 animate-in slide-in-from-right duration-200">
            <EditDrawer
              section={activeSection}
              onClose={() => workspace.setActiveSectionId(null)}
              onUpdateSection={canvas.updateSection}
              currentUser={user}
              activeInlineKey={workspace.activeInlineKey}
              mediaLibrary={data.media}
            />
          </div>
        )}
      </div>
    </div>
  );
}
