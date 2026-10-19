import { canChangeReleaseStatus, canCommentOnRelease } from '../domain/access';
import { DataMigrationModal } from '../features/backup/DataMigrationModal';
import { ImageStorageManagementModal } from '../features/media/ImageStorageManagementModal';
import { NotificationsModal } from '../features/releases/NotificationsModal';
import { ReleaseCommentsModal } from '../features/releases/ReleaseCommentsModal';
import { ReleaseHistoryModal } from '../features/releases/ReleaseHistoryModal';
import { ReleaseStatusReviewModal } from '../features/releases/ReleaseStatusReviewModal';
import { SaveReleaseModal } from '../features/releases/SaveReleaseModal';
import { AddCustomModal } from '../features/templates/AddCustomModal';
import { NewTemplateModal } from '../features/templates/NewTemplateModal';
import { SaveTemplateModal } from '../features/templates/SaveTemplateModal';
import { UseTemplateModal } from '../features/templates/UseTemplateModal';
import { UserManagementModal } from '../features/users/UserManagementModal';
import { useActivityLog, useReleaseComments } from '../hooks/useCollaboration';
import { restoreBackup } from '../persistence/restore';
import type { WorkspaceController } from './useWorkspace';

/** Every workspace dialog, driven by the single `modal` state. */
export function WorkspaceModals({ workspace }: { workspace: WorkspaceController }) {
  const { user, data, editor, modal, setModal, releases, library, accounts, run, activeRelease } =
    workspace;
  const close = () => setModal(null);
  const comments = useReleaseComments(
    modal?.kind === 'comments' ? (activeRelease?.id ?? null) : null,
  );
  const history = useActivityLog(modal?.kind === 'history');
  if (!modal) return null;

  switch (modal.kind) {
    case 'notifications':
      return (
        <NotificationsModal
          isOpen
          onClose={close}
          notifications={workspace.notifications.notifications}
          releases={data.releases}
          onSelectRelease={(release) => workspace.openRelease(release)}
          onMarkAllAsRead={() => run(workspace.notifications.markAllRead)}
          onApproveRelease={(id) => workspace.changeStatusNow(id, 'approved')}
          onRejectRelease={(id) => workspace.changeStatusNow(id, 'rejected')}
          canReview={canChangeReleaseStatus(user)}
        />
      );
    case 'users':
      return (
        <UserManagementModal
          isOpen
          onClose={close}
          currentUser={user}
          users={data.users}
          divisions={data.divisions}
          onApproveUser={accounts.approve}
          onRejectUser={accounts.reject}
          onUpdateUserRole={accounts.changeRole}
          onUpdateUserDivision={accounts.changeDivision}
          onUpdateUserName={accounts.rename}
          onDeleteUser={accounts.remove}
          onAddDivision={accounts.addDivision}
          onUpdateDivision={accounts.editDivision}
          onDeleteDivision={accounts.removeDivision}
        />
      );
    case 'newTemplate':
      return (
        <NewTemplateModal
          isOpen
          onClose={close}
          onSave={async (name, category) => {
            await library.createTemplate(name, category);
            workspace.setSidebarViewMode('components');
            workspace.setView('editor');
          }}
          categories={data.templateCategories}
          onAddCategory={library.addCategory}
          onDeleteCategory={(category) => run(() => library.deleteCategory(category))}
        />
      );
    case 'media':
      return (
        <ImageStorageManagementModal
          isOpen
          onClose={close}
          mediaLibrary={data.media}
          onAddMedia={library.uploadMedia}
          onDeleteMedia={library.removeMedia}
          onUpdateHomepageBackground={library.setHomepageBackground}
          currentHomepageBackground={data.config.homepageBackground ?? '/background.png'}
        />
      );
    case 'saveRelease':
      return (
        <SaveReleaseModal
          isOpen
          onClose={close}
          placedSections={editor.sections}
          currentUser={user}
          pageTemplates={data.pageTemplates}
          activeCanvasName={editor.name}
          sourceTemplateId={workspace.sourceTemplate?.id}
          sourceTemplateName={workspace.sourceTemplate?.name}
          onSaveRelease={async (input) => {
            await releases.create(input);
            workspace.setSidebarViewMode('releases');
          }}
        />
      );
    case 'saveTemplate':
      return (
        <SaveTemplateModal
          isOpen
          onClose={close}
          placedSections={editor.sections}
          onSaveTemplate={async (name, description, category) => {
            await library.saveCanvasAsTemplate(name, description, category);
            workspace.setSidebarViewMode('templates');
          }}
          activeCanvasName={editor.name}
          categories={data.templateCategories}
          onAddCategory={library.addCategory}
          onDeleteCategory={(category) => run(() => library.deleteCategory(category))}
        />
      );
    case 'addComponent':
      return <AddCustomModal isOpen onClose={close} onSave={library.addCustomComponent} />;
    case 'useTemplate':
      return (
        <UseTemplateModal
          isOpen
          template={modal.template}
          onClose={close}
          onConfirm={(template, fileName) => {
            workspace.openPageTemplate(template, fileName);
            close();
          }}
        />
      );
    case 'backup':
      return (
        <DataMigrationModal
          isOpen
          onClose={close}
          placedSections={editor.sections}
          pageTemplates={data.pageTemplates}
          releases={data.releases}
          customTemplates={data.customComponents}
          config={data.config}
          activeTemplateName={editor.name}
          activeTemplateId={editor.id}
          activeTemplateRevision={editor.revision}
          onRestoreData={async (backup) => {
            const revision = await restoreBackup(backup);
            if (backup.placedSections)
              editor.load({
                sections: backup.placedSections,
                id: backup.activeTemplateId ?? null,
                name: backup.activeTemplateName ?? null,
                revision: revision ?? 0,
              });
            workspace.feedback.notify('Semua data berhasil dipulihkan dari file backup!');
          }}
        />
      );
    case 'comments':
      return (
        <ReleaseCommentsModal
          isOpen
          onClose={close}
          release={activeRelease}
          comments={comments}
          currentUser={user}
          users={data.users}
          canComment={canCommentOnRelease(user, activeRelease)}
          onAddComment={async (text) => {
            if (activeRelease) await releases.comment(activeRelease, text, comments);
          }}
          onDeleteComment={(id) => run(() => releases.removeComment(id))}
        />
      );
    case 'history':
      return <ReleaseHistoryModal isOpen onClose={close} historyLogs={history} />;
    case 'statusReview': {
      const leave = () => {
        close();
        if (modal.isExit) workspace.setView('dashboard');
      };
      return (
        <ReleaseStatusReviewModal
          isOpen
          onClose={close}
          release={modal.release}
          targetStatus={modal.targetStatus}
          currentUser={user}
          users={data.users}
          isExitAction={modal.isExit}
          onConfirm={async (status, notes) => {
            await releases.changeStatus(modal.release, status, notes);
            close();
            workspace.setView('dashboard');
          }}
          onExitWithoutNotes={leave}
        />
      );
    }
  }
}
