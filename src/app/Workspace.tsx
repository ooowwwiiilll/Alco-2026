import { canManageMedia, canManageUsers } from '../domain/access';
import { DashboardPage } from '../features/dashboard/DashboardPage';
import { EditorView } from '../features/editor/EditorView';
import type { AppUser } from '../types';
import { useWorkspace } from './useWorkspace';
import { WorkspaceModals } from './WorkspaceModals';

/** Signed-in shell: the dashboard hub or the page editor, plus shared dialogs. */
export function Workspace({ user }: { user: AppUser }) {
  const workspace = useWorkspace(user);
  const { data, notifications, library, releases, setModal, run, findRelease, findPage } =
    workspace;
  const pendingApprovalsCount = data.users.filter((account) => account.status === 'pending').length;

  return (
    <>
      {workspace.view === 'dashboard' ? (
        <div className="h-screen min-h-screen w-screen relative overflow-hidden bg-black text-white font-season-sans tracking-[0.04em] alco-tools-ui flex flex-col">
          <DashboardPage
            currentUser={user}
            releases={data.releases}
            pageTemplates={data.pageTemplates}
            templates={data.components}
            divisions={data.divisions}
            users={data.users}
            templateCategories={data.templateCategories}
            onAddTemplateCategory={library.addCategory}
            onDeleteTemplateCategory={(category) => run(() => library.deleteCategory(category))}
            pendingApprovalsCount={pendingApprovalsCount}
            unreadNotificationsCount={notifications.unreadCount}
            notifications={notifications.notifications}
            onMarkAllNotificationsAsRead={() => run(notifications.markAllRead)}
            onApproveRelease={(id) => workspace.changeStatusNow(id, 'approved')}
            onRejectRelease={(id) => workspace.changeStatusNow(id, 'rejected')}
            onOpenNotifications={() => {
              run(notifications.markAllRead);
              setModal({ kind: 'notifications' });
            }}
            onOpenUserManagement={
              canManageUsers(user) ? () => setModal({ kind: 'users' }) : undefined
            }
            onOpenBackup={canManageUsers(user) ? () => setModal({ kind: 'backup' }) : undefined}
            onOpenImageStorageManagement={
              canManageMedia(user) ? () => setModal({ kind: 'media' }) : undefined
            }
            onOpenNewTemplateModal={() => setModal({ kind: 'newTemplate' })}
            onSelectRelease={(release) => workspace.openRelease(release)}
            onSelectPageTemplate={(page) => workspace.openPageTemplate(page)}
            onSelectComponent={workspace.addComponent}
            onRenameComponent={(id, name) => run(() => library.renameComponent(id, name))}
            onUpdateComponentTemplate={library.updateComponent}
            mediaLibrary={data.media}
            onEditPageTemplate={(id, name, description, category) =>
              run(() => library.editTemplate(id, { name, description, category }))
            }
            onCreateNewCanvas={workspace.newCanvas}
            onDuplicateRelease={(release) => run(() => releases.duplicate(release))}
            onDeleteRelease={(id) => {
              const release = findRelease(id);
              if (release) run(() => releases.remove(release));
            }}
            onDeletePageTemplate={(id) => {
              const page = findPage(id);
              if (page) run(() => library.removeTemplate(page));
            }}
            onShareRelease={workspace.share}
            onPreviewRelease={(release) => workspace.openRelease(release, true)}
            onLogout={workspace.logout}
          />
        </div>
      ) : (
        <EditorView workspace={workspace} />
      )}
      <WorkspaceModals workspace={workspace} />
    </>
  );
}
