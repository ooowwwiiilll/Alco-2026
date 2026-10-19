import type { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { X, Bell } from 'lucide-react';
import { UserAvatar } from '../../components/UserAvatar';
import { type AppNotification, type ReleaseItem, type AppUser } from '../../types';

export interface NotificationMenuProps {
  currentUser: AppUser;
  isNotificationsDropdownOpen: boolean;
  notifications: AppNotification[];
  onApproveRelease: (releaseId: string) => void;
  onRejectRelease: (releaseId: string) => void;
  onSelectRelease: (release: ReleaseItem) => void;
  releases: ReleaseItem[];
  setIsNotificationsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

export function NotificationMenu({
  currentUser,
  isNotificationsDropdownOpen,
  notifications,
  onApproveRelease,
  onRejectRelease,
  onSelectRelease,
  releases,
  setIsNotificationsDropdownOpen,
}: NotificationMenuProps) {
  return (
    <>
      {/* Notification Pop-up Dropdown - Identical placement & styling to Profile Pop-up */}
      {isNotificationsDropdownOpen && (
        <>
          {createPortal(
            <div
              className="fixed inset-0 z-40 bg-transparent"
              onMouseDown={() => setIsNotificationsDropdownOpen(false)}
              onTouchStart={() => setIsNotificationsDropdownOpen(false)}
              onClick={() => setIsNotificationsDropdownOpen(false)}
            />,
            document.body,
          )}
          <div
            className="absolute right-0 mt-2 z-50 animate-in fade-in zoom-in-95 duration-150 shadow-2xl font-season-sans"
            style={{
              width: '380px',
              maxWidth: 'calc(100vw - 24px)',
              maxHeight: '480px',
              padding: '16px',
              background: '#212121',
              borderRadius: '20px',
              border: '1px solid #3F3F3F',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'stretch',
              gap: '16px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dropdown Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div
                style={{
                  color: 'white',
                  fontSize: '20px',
                  fontFamily: "'Season Mix', serif",
                  fontWeight: 420,
                }}
              >
                Notifications
              </div>
              <button
                type="button"
                onClick={() => setIsNotificationsDropdownOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Notifications List */}
            <div className="flex flex-col gap-2 max-h-[360px] overflow-y-auto custom-scrollbar pr-1">
              {notifications.length === 0 ? (
                <div className="py-10 text-center space-y-2">
                  <Bell className="w-8 h-8 text-stone-600 mx-auto" />
                  <p className="text-xs text-stone-400">No new notifications.</p>
                </div>
              ) : (
                notifications.map((notif) => {
                  const notifDate = new Date(notif.createdAt);
                  const dateStr = !isNaN(notifDate.getTime())
                    ? `${notifDate.getDate()}/${notifDate.getMonth() + 1}/${notifDate.getFullYear()}`
                    : 'Recent';

                  const targetRelease = releases.find(
                    (r) => r.id === notif.releaseId || r.name === notif.releaseName,
                  );

                  return (
                    <div
                      key={notif.id}
                      onClick={() => {
                        if (targetRelease) {
                          onSelectRelease(targetRelease);
                        }
                        setIsNotificationsDropdownOpen(false);
                      }}
                      className={`p-3 rounded-xl border transition-all flex flex-col gap-2 ${
                        targetRelease ? 'cursor-pointer hover:bg-[#2c2c2c]' : 'cursor-default'
                      } ${
                        notif.read
                          ? 'bg-[#262626] border-white/5 opacity-80 hover:opacity-100'
                          : 'bg-[#2b2b2b] border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <UserAvatar
                            name={notif.senderName}
                            seed={notif.senderName}
                            size={24}
                            fontSize={10}
                          />
                          <span className="text-xs font-bold text-white">
                            {notif.senderName || 'User'}
                          </span>
                        </div>
                        <span className="text-[11px] text-stone-400">{dateStr}</span>
                      </div>
                      <p className="text-xs text-stone-300 leading-snug">
                        {notif.text ||
                          `${notif.senderName || 'User'} commented on Release “${
                            notif.releaseName || 'Release'
                          }”`}
                      </p>
                      {currentUser?.role === 'admin' &&
                        notif.text?.includes('approval') &&
                        targetRelease &&
                        targetRelease.status === 'in_review' && (
                          <div className="flex items-center gap-2 pt-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onApproveRelease) onApproveRelease(targetRelease.id);
                              }}
                              className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-sm"
                            >
                              Approve
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onRejectRelease) onRejectRelease(targetRelease.id);
                              }}
                              className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-sm"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
