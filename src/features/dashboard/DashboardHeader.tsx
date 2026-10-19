import type { Dispatch, RefObject, SetStateAction } from 'react';
import { Plus, Bell } from 'lucide-react';

import { type AppNotification, type ReleaseItem, type AppUser } from '../../types';
import { ProfileMenu } from '../account/ProfileMenu';
import { NotificationMenu } from './NotificationMenu';
import { CreatePageMenu } from './CreatePageMenu';

export interface DashboardHeaderProps {
  actualPendingCount: number;
  createPageContainerRef: RefObject<HTMLDivElement | null>;
  currentUser: AppUser;
  isCreatePageMenuOpen: boolean;
  isManagerOrAdmin: boolean;
  isNotificationsDropdownOpen: boolean;
  isProductRole: boolean;
  isUserMenuOpen: boolean;
  latestPendingUser: AppUser;
  notifications: AppNotification[];
  notificationsContainerRef: RefObject<HTMLDivElement | null>;
  onApproveRelease: (releaseId: string) => void;
  onLogout: () => void;
  onMarkAllNotificationsAsRead: () => void;
  onOpenImageStorageManagement: (() => void) | undefined;
  onOpenBackup?: () => void;
  onOpenNewTemplateModal: () => void;
  onOpenUserManagement: (() => void) | undefined;
  onRejectRelease: (releaseId: string) => void;
  onSelectRelease: (release: ReleaseItem) => void;
  releases: ReleaseItem[];
  setIsCreatePageMenuOpen: Dispatch<SetStateAction<boolean>>;
  setIsNotificationsDropdownOpen: Dispatch<SetStateAction<boolean>>;
  setIsTemplateSelectionOpen: Dispatch<SetStateAction<boolean>>;
  setIsUserMenuOpen: Dispatch<SetStateAction<boolean>>;
  unreadNotificationsCount: number;
  userInitials: string;
  userMenuContainerRef: RefObject<HTMLDivElement | null>;
}

export function DashboardHeader({
  actualPendingCount,
  createPageContainerRef,
  currentUser,
  isCreatePageMenuOpen,
  isManagerOrAdmin,
  isNotificationsDropdownOpen,
  isProductRole,
  isUserMenuOpen,
  latestPendingUser,
  notifications,
  notificationsContainerRef,
  onApproveRelease,
  onLogout,
  onMarkAllNotificationsAsRead,
  onOpenImageStorageManagement,
  onOpenBackup,
  onOpenNewTemplateModal,
  onOpenUserManagement,
  onRejectRelease,
  onSelectRelease,
  releases,
  setIsCreatePageMenuOpen,
  setIsNotificationsDropdownOpen,
  setIsTemplateSelectionOpen,
  setIsUserMenuOpen,
  unreadNotificationsCount,
  userInitials,
  userMenuContainerRef,
}: DashboardHeaderProps) {
  return (
    <>
      {/* ========================================================
          TOP HEADER BAR (Matching Canvas Navbar Clean Flow)
         ======================================================== */}
      <header
        style={{
          width: '100%',
          height: '68px',
          background: 'rgba(0, 0, 0, 0.50)',
          backgroundColor: '#141414',
          borderBottom: '1px solid #262626',
          paddingLeft: '16px',
          paddingRight: '16px',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          flexShrink: 0,
        }}
        className="flex items-center justify-between relative z-50 shrink-0 select-none font-season-sans sticky top-0 backdrop-blur-md px-3 sm:px-6"
      >
        {/* Left: Brand Logo + Vertical Divider + Workspace/Template Dropdown */}
        <div className="flex items-center">
          {/* Brand Logo */}
          <div
            style={{
              width: 'auto',
              minWidth: '89px',
              height: '32px',
              paddingLeft: '8px',
              paddingRight: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
            title="Pegadaian"
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
                  fallback.style.color = '#fff';
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
            className="hidden sm:block"
          />
        </div>

        {/* Right Side: Buat Halaman + Notifikasi + Avatar */}
        <div className="flex items-center gap-2">
          {/* Button: Buat Halaman */}
          <div ref={createPageContainerRef} className="relative">
            <button
              type="button"
              onClick={() => {
                if (isManagerOrAdmin) {
                  setIsCreatePageMenuOpen((prev) => !prev);
                } else {
                  setIsTemplateSelectionOpen(true);
                }
              }}
              style={{
                height: '40px',
                paddingTop: '8px',
                paddingBottom: '8px',
                background: 'white',
                borderRadius: '100px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                display: 'flex',
                border: 'none',
                cursor: 'pointer',
              }}
              className="hover:opacity-90 active:scale-95 transition-all shadow-md select-none px-3 sm:px-5"
              title="Create New Page / Canvas"
            >
              <div
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '14px',
                  fontFamily: "'Season Sans', sans-serif",
                  fontWeight: 400,
                  wordWrap: 'break-word',
                }}
              >
                Create Page
              </div>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Plus className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
              </div>
            </button>

            <CreatePageMenu
              isCreatePageMenuOpen={isCreatePageMenuOpen}
              isManagerOrAdmin={isManagerOrAdmin}
              onOpenNewTemplateModal={onOpenNewTemplateModal}
              setIsCreatePageMenuOpen={setIsCreatePageMenuOpen}
              setIsTemplateSelectionOpen={setIsTemplateSelectionOpen}
            />
          </div>

          {/* Button: Notification Capsule with Pop-up Dropdown (placed like Profile Pop-up) */}
          <div ref={notificationsContainerRef} className="relative">
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
              className="hover:bg-[#404040] active:scale-95 transition-all relative select-none shadow-sm"
              title="Notifications"
            >
              <Bell className="w-4 h-4 text-white" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF0052] rounded-full" />
              )}
            </button>

            <NotificationMenu
              currentUser={currentUser}
              isNotificationsDropdownOpen={isNotificationsDropdownOpen}
              notifications={notifications}
              onApproveRelease={onApproveRelease}
              onRejectRelease={onRejectRelease}
              onSelectRelease={onSelectRelease}
              releases={releases}
              setIsNotificationsDropdownOpen={setIsNotificationsDropdownOpen}
            />
          </div>

          {/* Avatar Profile (40x40 circle with Season Mix 420 Initials) */}
          <div ref={userMenuContainerRef} className="relative">
            <button
              type="button"
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
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
              className="hover:bg-[#404040] active:scale-95 transition-all select-none shadow-sm"
              title={currentUser?.name || 'User Profile'}
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
                {userInitials}
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
        </div>
      </header>
    </>
  );
}
