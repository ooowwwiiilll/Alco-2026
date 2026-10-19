import type { Dispatch, SetStateAction } from 'react';

import { X } from 'lucide-react';
import { UserAvatar } from '../../../components/UserAvatar';
import { type AppNotification, type ReleaseItem, type AppUser } from '../../../types';

export interface NavbarNotificationsProps {
  currentUser: AppUser;
  isNotificationsDropdownOpen: boolean;
  notifications: AppNotification[];
  onLoadRelease: (rel: ReleaseItem) => void;
  releases: ReleaseItem[];
  setIsNotificationsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

export function NavbarNotifications({
  currentUser,
  isNotificationsDropdownOpen,
  notifications,
  onLoadRelease,
  releases,
  setIsNotificationsDropdownOpen,
}: NavbarNotificationsProps) {
  return (
    <>
      {/* Right-Aligned Notifications Dropdown Popover */}
      {isNotificationsDropdownOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsNotificationsDropdownOpen(false)}
          />
          <div
            style={{
              width: '440px',
              maxWidth: 'calc(100vw - 24px)',
              maxHeight: '480px',
              padding: '16px',
              background: '#212121',
              borderRadius: '20px',
              border: '1px solid #3F3F3F',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              gap: '24px',
              display: 'flex',
            }}
            className="absolute right-0 mt-2 z-50 shadow-2xl select-none font-season-sans animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dropdown Header */}
            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '24px',
                display: 'inline-flex',
              }}
            >
              <div
                style={{
                  flex: '1 1 0',
                  color: 'white',
                  fontSize: '27px',
                  fontFamily: "'Season Mix', serif",
                  fontWeight: 420,
                  wordWrap: 'break-word',
                }}
              >
                Notifications
              </div>
              <button
                type="button"
                onClick={() => setIsNotificationsDropdownOpen(false)}
                style={{
                  width: '24px',
                  height: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="hover:opacity-80 transition-opacity"
                title="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Notifications List */}
            <div
              style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                maxHeight: '380px',
                overflowY: 'auto',
                width: '100%',
              }}
              className="custom-scrollbar"
            >
              {notifications.length === 0 ? (
                <div className="py-8 text-center text-xs text-white/50 w-full">
                  No new notifications.
                </div>
              ) : (
                notifications.map((notif) => {
                  const notifDate = new Date(notif.createdAt);
                  const dateStr = !isNaN(notifDate.getTime())
                    ? `${notifDate.getDate()}/${notifDate.getMonth() + 1}/${notifDate.getFullYear()}`
                    : '10/5/2026';

                  const targetRelease = releases.find(
                    (r) => r.id === notif.releaseId || r.name === notif.releaseName,
                  );

                  return (
                    <div
                      key={notif.id}
                      onClick={() => {
                        if (targetRelease && onLoadRelease) {
                          onLoadRelease(targetRelease);
                        }
                        setIsNotificationsDropdownOpen(false);
                      }}
                      style={{
                        alignSelf: 'stretch',
                        paddingTop: '16px',
                        paddingBottom: '16px',
                        borderRadius: '16px',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: '8px',
                        display: 'flex',
                        cursor: targetRelease ? 'pointer' : 'default',
                      }}
                      className="hover:bg-[#2c2c2c] transition-colors p-2"
                    >
                      <div
                        style={{
                          alignSelf: 'stretch',
                          borderRadius: '12px',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          gap: '16px',
                          display: 'inline-flex',
                        }}
                      >
                        <UserAvatar name={notif.senderName} seed={notif.senderName} size={24} />
                        <div
                          style={{
                            flex: '1 1 0',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '8px',
                            display: 'flex',
                          }}
                        >
                          <div
                            style={{
                              color: 'white',
                              fontSize: '14px',
                              fontFamily: 'Season Sans, sans-serif',
                              fontWeight: 400,
                              lineHeight: '20px',
                              letterSpacing: '0.28px',
                              wordWrap: 'break-word',
                            }}
                          >
                            {notif.senderName || 'Puguh'}
                          </div>
                          <div
                            style={{
                              color: 'rgba(255, 255, 255, 0.50)',
                              fontSize: '14px',
                              fontFamily: 'Season Sans, sans-serif',
                              fontWeight: 400,
                              lineHeight: '20px',
                              letterSpacing: '0.28px',
                              wordWrap: 'break-word',
                            }}
                          >
                            {currentUser?.division || 'Retail & Daily Banking'}
                          </div>
                        </div>
                        <div
                          style={{
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: '8px',
                            display: 'flex',
                          }}
                        >
                          <div
                            style={{
                              color: 'rgba(255, 255, 255, 0.50)',
                              fontSize: '14px',
                              fontFamily: 'Season Sans, sans-serif',
                              fontWeight: 400,
                              lineHeight: '20px',
                              letterSpacing: '0.24px',
                              wordWrap: 'break-word',
                            }}
                          >
                            {dateStr}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: 'stretch',
                          paddingLeft: '40px',
                          paddingRight: '20px',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          gap: '10px',
                          display: 'inline-flex',
                        }}
                      >
                        <div
                          style={{
                            color: 'white',
                            fontSize: '14px',
                            fontFamily: 'Season Sans, sans-serif',
                            fontWeight: 400,
                            lineHeight: '20px',
                            letterSpacing: '0.28px',
                            wordWrap: 'break-word',
                          }}
                        >
                          {notif.text ||
                            `${notif.senderName || 'User'} commented on Release “${notif.releaseName || 'Release'}”`}
                        </div>
                      </div>
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
