import { useMemo, useState } from 'react';
import { Bell, MessageSquare } from 'lucide-react';

import { getInitials } from '../../../components/UserAvatar';
import {
  canCommentOnRelease,
  isEditor,
  isProduct,
  isReleaseAuthor as isAuthorOf,
} from '../../../domain/access';
import type {
  AppNotification,
  AppTheme,
  AppUser,
  PageTemplate,
  ReleaseItem,
  ReleaseStatus,
} from '../../../types';
import { ProfileMenu } from '../../account/ProfileMenu';
import { RenameCanvasDialog } from './RenameCanvasDialog';
import { NavbarNotifications } from './NavbarNotifications';
import { SaveOptionsButton } from './SaveOptionsButton';
import { ReleaseActionButton } from './ReleaseActionButton';

import { CanvasTitleMenu } from './CanvasTitleMenu';
import { ReleaseCreatorInfo } from './ReleaseCreatorInfo';

export interface NavbarProps {
  onExportPdf: () => void;
  isExportingPdf: boolean;
  onOpenSaveReleaseModal: () => void;
  onOpenSavePageModal: () => void;
  onOpenUserManagement?: () => void;
  onOpenImageStorageManagement?: () => void;
  onOpenBackup?: () => void;
  currentUser: AppUser;
  users: AppUser[];
  pendingApprovalsCount: number;
  onLogout: () => void;
  theme: AppTheme;
  activeTemplateName: string | null;
  activeTemplateId: string | null;
  activeRelease: ReleaseItem | null;
  pageTemplates: PageTemplate[];
  releases: ReleaseItem[];
  onLoadRelease: (rel: ReleaseItem) => void;
  onSaveActiveRelease: () => void;
  onSaveChangesTemplate: () => void;
  onClearCanvas: () => void;
  onRenameCanvas: (newName: string) => void;
  hasSections: boolean;
  hasUnsavedChanges: boolean;
  unreadNotificationsCount: number;
  notifications: AppNotification[];
  onOpenDashboard: () => void;
  onOpenReleaseComments: () => void;
  onMarkAllNotificationsAsRead: () => void;
  onChangeReleaseStatus: (releaseId: string, newStatus: ReleaseStatus) => void;
  onShareRelease: (releaseId: string, device?: 'desktop' | 'mobile') => void;
}

export function Navbar({
  onExportPdf,
  isExportingPdf,
  onOpenSaveReleaseModal,
  onOpenSavePageModal,
  onOpenUserManagement,
  onOpenImageStorageManagement,
  onOpenBackup,
  currentUser,
  users,
  pendingApprovalsCount,
  onLogout,
  theme,
  activeTemplateName,
  activeTemplateId,
  activeRelease,
  pageTemplates,
  releases,
  onLoadRelease,
  onSaveActiveRelease,
  onSaveChangesTemplate,
  onClearCanvas,
  onRenameCanvas,
  hasSections,
  hasUnsavedChanges,
  unreadNotificationsCount,
  notifications,
  onOpenDashboard,
  onOpenReleaseComments,
  onMarkAllNotificationsAsRead,
  onChangeReleaseStatus,
  onShareRelease,
}: NavbarProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSaveMenuOpen, setIsSaveMenuOpen] = useState(false);
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);
  const [isReleaseSaveMenuOpen, setIsReleaseSaveMenuOpen] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] = useState(false);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [renameInput, setRenameInput] = useState('');

  const isLight = theme === 'light';

  const pendingUsers = users.filter((u) => u.status === 'pending');
  const actualPendingCount = pendingUsers.length || pendingApprovalsCount;
  const latestPendingUser = pendingUsers[0];

  // A canvas without a template or release is shown as "New Canvas" without a type chip.
  const hasTemplate = Boolean(activeTemplateName?.trim() && activeTemplateName !== 'New Canvas');
  const canvasDisplayName = hasTemplate ? (activeTemplateName as string) : 'New Canvas';
  const currentRelease = useMemo(
    () => activeRelease ?? releases.find((r) => r.id === activeTemplateId) ?? null,
    [activeRelease, activeTemplateId, releases],
  );
  const isReleaseDoc = Boolean(currentRelease);
  const isEmptyNewCanvas =
    (canvasDisplayName === 'New Canvas' || (!hasTemplate && !isReleaseDoc)) && !hasSections;

  // An existing saved template is open when its ID matches a page template.
  const isExistingSavedTemplate = Boolean(
    activeTemplateId && pageTemplates.some((pt) => pt.id === activeTemplateId),
  );

  // Role Manager & Admin: Rename and New Canvas. Product: New Canvas only.
  const isRMOrAdmin = isEditor(currentUser);
  const isProductRole = isProduct(currentUser);
  // Only the creator of a release can rename, clear or save it.
  const isReleaseAuthor = isAuthorOf(currentUser, activeRelease);
  const isEditingOwnRelease = Boolean(activeRelease && isReleaseAuthor);
  // Saving back to a library template is reserved for Role Manager & Admin.
  const canSaveChanges = !activeRelease && isExistingSavedTemplate && isRMOrAdmin;
  const canRename = activeRelease ? isReleaseAuthor : isRMOrAdmin;
  const canNewCanvas = !isEmptyNewCanvas;
  const hasActions = canRename || canNewCanvas;
  // Product users only see the discussion of their own releases.
  const canViewReleaseDiscussion =
    canCommentOnRelease(currentUser, activeRelease) || !activeRelease;

  const handleOpenRename = () => {
    setIsActionMenuOpen(false);
    setRenameInput(canvasDisplayName === 'New Canvas' ? '' : canvasDisplayName);
    setIsRenameModalOpen(true);
  };

  const handleOpenNewCanvas = () => {
    setIsActionMenuOpen(false);
    onClearCanvas();
  };

  const handleConfirmRename = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = renameInput.trim();
    if (trimmed) onRenameCanvas(trimmed);
    setIsRenameModalOpen(false);
  };

  return (
    <header
      style={{
        width: '100%',
        height: '68px',
        background: isLight ? '#FFFFFF' : 'rgba(0, 0, 0, 0.50)',
        backgroundColor: isLight ? '#FFFFFF' : '#141414',
        borderBottom: isLight ? '1px solid #E5E5E7' : '1px solid #262626',
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
      className="flex items-center justify-between relative z-50 shrink-0 select-none font-season-sans transition-colors duration-200"
    >
      {/* Left: Brand Logo + Vertical Divider + Canvas Name Dropdown */}
      <div className="flex items-center">
        {/* Brand Logo (89x32 with 8px horizontal padding) - Clickable to open Dashboard */}
        <div
          onClick={onOpenDashboard}
          style={{
            width: 'auto',
            minWidth: '89px',
            height: '32px',
            paddingLeft: '8px',
            paddingRight: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            cursor: 'pointer',
          }}
          className="hover:opacity-80 transition-opacity"
          title="Back to Dashboard / Workspace Hub"
        >
          <img
            src="/logo-pegadaian.png"
            alt="Pegadaian"
            style={{ maxHeight: '28px', width: 'auto', objectFit: 'contain' }}
            className="select-none pointer-events-none"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.parentElement) {
                const fallback = document.createElement('span');
                fallback.innerText = 'Pegadaian';
                fallback.style.fontFamily = "'Geist', sans-serif";
                fallback.style.fontSize = '18px';
                fallback.style.fontWeight = 'bold';
                fallback.style.color = isLight ? '#000' : '#fff';
                target.parentElement.appendChild(fallback);
              }
            }}
          />
        </div>

        {/* Vertical Divider Line */}
        <div
          style={{
            width: '1px',
            height: '32px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            marginLeft: '16px',
            marginRight: '16px',
          }}
        />

        <CanvasTitleMenu
          canNewCanvas={canNewCanvas}
          canRename={canRename}
          canvasDisplayName={canvasDisplayName}
          handleOpenNewCanvas={handleOpenNewCanvas}
          handleOpenRename={handleOpenRename}
          hasActions={hasActions}
          hasTemplate={hasTemplate}
          isActionMenuOpen={isActionMenuOpen}
          isReleaseDoc={isReleaseDoc}
          setIsActionMenuOpen={setIsActionMenuOpen}
        />

        <ReleaseCreatorInfo currentRelease={currentRelease} isLight={isLight} />
      </div>

      {/* Right: Actions */}
      <div
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '8px',
          display: 'inline-flex',
        }}
      >
        {/* 1. Comment Button */}
        {canViewReleaseDiscussion && (
          <button
            type="button"
            onClick={onOpenReleaseComments}
            style={{
              height: '40px',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '6px',
              paddingBottom: '6px',
              background: '#353535',
              borderRadius: '1000px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              display: 'flex',
              border: 'none',
              cursor: 'pointer',
            }}
            className="hover:bg-[#404040] active:scale-95 transition-all select-none"
            title="Comment"
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <div
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '14px',
                fontFamily: "'Season Sans', sans-serif",
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0.28px',
                wordWrap: 'break-word',
              }}
            >
              Comment
            </div>
          </button>
        )}

        <ReleaseActionButton
          activeRelease={activeRelease}
          canSaveChanges={canSaveChanges}
          hasSections={hasSections}
          isEditingOwnRelease={isEditingOwnRelease}
          isExportingPdf={isExportingPdf}
          isProductRole={isProductRole}
          isRMOrAdmin={isRMOrAdmin}
          isSaveMenuOpen={isSaveMenuOpen}
          isStatusMenuOpen={isStatusMenuOpen}
          onChangeReleaseStatus={onChangeReleaseStatus}
          onExportPdf={onExportPdf}
          onOpenSavePageModal={onOpenSavePageModal}
          onOpenSaveReleaseModal={onOpenSaveReleaseModal}
          onSaveActiveRelease={onSaveActiveRelease}
          onSaveChangesTemplate={onSaveChangesTemplate}
          setIsSaveMenuOpen={setIsSaveMenuOpen}
          setIsStatusMenuOpen={setIsStatusMenuOpen}
        />

        <SaveOptionsButton
          activeRelease={activeRelease}
          hasUnsavedChanges={hasUnsavedChanges}
          isExportingPdf={isExportingPdf}
          isReleaseSaveMenuOpen={isReleaseSaveMenuOpen}
          onExportPdf={onExportPdf}
          onSaveActiveRelease={onSaveActiveRelease}
          setIsReleaseSaveMenuOpen={setIsReleaseSaveMenuOpen}
        />

        {/* 1. Notification Bell Button (40x40 circle) */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              const nextOpen = !isNotificationsDropdownOpen;
              setIsNotificationsDropdownOpen(nextOpen);
              if (nextOpen && onMarkAllNotificationsAsRead) {
                onMarkAllNotificationsAsRead();
              }
            }}
            style={{
              width: '40px',
              height: '40px',
              paddingLeft: '8px',
              paddingRight: '8px',
              paddingTop: '6px',
              paddingBottom: '6px',
              background: '#353535',
              borderRadius: '1000px',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              border: 'none',
              cursor: 'pointer',
            }}
            className="hover:bg-[#404040] active:scale-95 transition-all text-white relative"
            title="Notifications"
          >
            <Bell className="w-5 h-5 text-white" />
            {unreadNotificationsCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#FF0052] rounded-full border-2 border-[#353535]" />
            )}
          </button>

          <NavbarNotifications
            currentUser={currentUser}
            isNotificationsDropdownOpen={isNotificationsDropdownOpen}
            notifications={notifications}
            onLoadRelease={onLoadRelease}
            releases={releases}
            setIsNotificationsDropdownOpen={setIsNotificationsDropdownOpen}
          />
        </div>

        {/* 2. User Profile Capsule (40x40 circle) */}
        {currentUser && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              style={{
                width: '40px',
                height: '40px',
                paddingLeft: '8px',
                paddingRight: '8px',
                paddingTop: '6px',
                paddingBottom: '6px',
                background: '#353535',
                borderRadius: '1000px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                border: 'none',
                cursor: 'pointer',
              }}
              className="hover:bg-[#404040] active:scale-95 transition-all select-none"
              title={`${currentUser.name}`}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: "'Season Mix', serif",
                  fontWeight: 420,
                  wordWrap: 'break-word',
                  lineHeight: 1,
                }}
              >
                {getInitials(currentUser.name)}
              </div>
            </button>

            <ProfileMenu
              actualPendingCount={actualPendingCount}
              currentUser={currentUser}
              isProductRole={isProductRole}
              isUserMenuOpen={isUserMenuOpen}
              latestPendingUser={latestPendingUser}
              onLogout={onLogout}
              onOpenImageStorageManagement={onOpenImageStorageManagement}
              onOpenBackup={onOpenBackup}
              onOpenUserManagement={onOpenUserManagement}
              setIsUserMenuOpen={setIsUserMenuOpen}
            />
          </div>
        )}
      </div>

      <RenameCanvasDialog
        handleConfirmRename={handleConfirmRename}
        isRenameModalOpen={isRenameModalOpen}
        renameInput={renameInput}
        setIsRenameModalOpen={setIsRenameModalOpen}
        setRenameInput={setRenameInput}
      />
    </header>
  );
}
