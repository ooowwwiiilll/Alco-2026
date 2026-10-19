import type { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { UserAvatar } from '../../components/UserAvatar';
import { Image as ImageIcon, LogOut } from 'lucide-react';
import { type AppUser } from '../../types';

import { AccountManagementCard } from './AccountManagementCard';
import { MemberProfilePopover } from './MemberProfilePopover';

export interface ProfileMenuProps {
  actualPendingCount: number;
  currentUser: AppUser;
  isProductRole: boolean;
  isUserMenuOpen: boolean;
  latestPendingUser: AppUser;
  onLogout: () => void;
  onOpenImageStorageManagement: (() => void) | undefined;
  onOpenBackup?: () => void;
  onOpenUserManagement: (() => void) | undefined;
  setIsUserMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function ProfileMenu({
  actualPendingCount,
  currentUser,
  isProductRole,
  isUserMenuOpen,
  latestPendingUser,
  onLogout,
  onOpenImageStorageManagement,
  onOpenBackup,
  onOpenUserManagement,
  setIsUserMenuOpen,
}: ProfileMenuProps) {
  return (
    <>
      {/* Profile Menu Popover */}
      {isUserMenuOpen && (
        <>
          {/* Invisible backdrop to dismiss menu on click outside */}
          {createPortal(
            <div
              className="fixed inset-0 z-40 bg-transparent"
              onMouseDown={() => setIsUserMenuOpen(false)}
              onTouchStart={() => setIsUserMenuOpen(false)}
              onClick={() => setIsUserMenuOpen(false)}
            />,
            document.body,
          )}

          {/* Role Manager & General User Profile Popover */}
          {currentUser.role === 'manager' ? (
            <div
              className="absolute right-0 mt-2 z-50 animate-in fade-in zoom-in-95 duration-150 shadow-2xl font-season-sans"
              style={{
                width: '320px',
                maxWidth: 'calc(100vw - 24px)',
                padding: '16px',
                background: '#212121',
                borderRadius: '20px',
                border: '1px solid #3F3F3F',
                display: 'inline-flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                gap: '24px',
              }}
            >
              {/* Top Group: Profile Card + Manajemen Akun Card */}
              <div
                style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '12px',
                  display: 'flex',
                }}
              >
                {/* Card 1: Active User Info */}
                <div
                  style={{
                    alignSelf: 'stretch',
                    padding: '12px',
                    background: '#353535',
                    borderRadius: '12px',
                    outline: '1px #3F3F3F solid',
                    outlineOffset: '-0.50px',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '16px',
                    display: 'inline-flex',
                  }}
                >
                  <UserAvatar
                    name={currentUser.name}
                    seed={currentUser.id || currentUser.name}
                    size={40}
                  />
                  <div
                    style={{
                      width: '208px',
                      alignSelf: 'stretch',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
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
                        {currentUser.name}
                      </div>
                      <div
                        style={{
                          color: 'rgba(255, 255, 255, 0.50)',
                          fontSize: '12px',
                          fontFamily: 'Season Sans, sans-serif',
                          fontWeight: 400,
                          lineHeight: '20px',
                          letterSpacing: '0.24px',
                          wordWrap: 'break-word',
                        }}
                      >
                        {currentUser.email}
                      </div>
                    </div>
                    <div
                      style={{
                        paddingLeft: '8px',
                        paddingRight: '8px',
                        paddingTop: '4px',
                        paddingBottom: '4px',
                        background: 'black',
                        borderRadius: '100px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          color: 'rgba(255, 255, 255, 0.50)',
                          fontSize: '12px',
                          fontFamily: 'Season Sans, sans-serif',
                          fontWeight: 400,
                          lineHeight: '20px',
                          letterSpacing: '0.24px',
                          wordWrap: 'break-word',
                        }}
                      >
                        Role Manager
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card: Image Storage Management */}
                <button
                  type="button"
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    if (onOpenImageStorageManagement) {
                      onOpenImageStorageManagement();
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#353535',
                    borderRadius: '12px',
                    outline: '1px #3F3F3F solid',
                    outlineOffset: '-0.50px',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '8px',
                    display: 'flex',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  className="hover:bg-[#3d3d3d] transition-colors"
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
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
                    Image Storage Management
                  </div>
                </button>
                {/* Card: Backup & Restore (data migration) */}
                <button
                  type="button"
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    onOpenBackup?.();
                  }}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#353535',
                    borderRadius: '12px',
                    outline: '1px #3F3F3F solid',
                    outlineOffset: '-0.50px',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '8px',
                    display: 'flex',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  className="hover:bg-[#3d3d3d] transition-colors"
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
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
                    Backup & Restore
                  </div>
                </button>

                <AccountManagementCard
                  actualPendingCount={actualPendingCount}
                  latestPendingUser={latestPendingUser}
                  onOpenUserManagement={onOpenUserManagement}
                  setIsUserMenuOpen={setIsUserMenuOpen}
                />
              </div>

              {/* Bottom Logout Action */}
              <div
                style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '16px',
                  display: 'flex',
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    if (onLogout) onLogout();
                  }}
                  style={{
                    alignSelf: 'stretch',
                    paddingTop: '16px',
                    paddingBottom: '4px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    background: '#212121',
                    borderTop: '1px rgba(255, 255, 255, 0.10) solid',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom: 'none',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '16px',
                    display: 'inline-flex',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  className="hover:opacity-85 transition-opacity"
                >
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
                        width: '20px',
                        height: '20px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <LogOut className="w-4 h-4 text-[#FF0052]" />
                    </div>
                    <div
                      style={{
                        flex: '1 1 0',
                        color: '#FF0052',
                        fontSize: '14px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0.28px',
                        wordWrap: 'break-word',
                      }}
                    >
                      Logout
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ) : isProductRole ? (
            <div
              className="absolute right-0 mt-2 z-50 animate-in fade-in zoom-in-95 duration-150 shadow-2xl font-season-sans"
              style={{
                width: '320px',
                maxWidth: 'calc(100vw - 24px)',
                padding: '16px',
                background: '#212121',
                borderRadius: '20px',
                border: '1px solid #3F3F3F',
                display: 'inline-flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                gap: '24px',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '12px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    alignSelf: 'stretch',
                    padding: '12px',
                    background: '#353535',
                    borderRadius: '12px',
                    outline: '1px #3F3F3F solid',
                    outlineOffset: '-0.50px',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '16px',
                    display: 'inline-flex',
                  }}
                >
                  <UserAvatar
                    name={currentUser.name}
                    seed={currentUser.id || currentUser.name}
                    size={40}
                  />
                  <div
                    style={{
                      width: '208px',
                      alignSelf: 'stretch',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'inline-flex',
                    }}
                  >
                    <div
                      style={{
                        alignSelf: 'stretch',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        display: 'inline-flex',
                      }}
                    >
                      <div
                        style={{
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
                          {currentUser.name}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        color: 'rgba(255, 255, 255, 0.50)',
                        fontSize: '12px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0.24px',
                        wordWrap: 'break-word',
                      }}
                    >
                      {currentUser.email}
                    </div>
                    <div
                      style={{
                        color: 'rgba(255, 255, 255, 0.50)',
                        fontSize: '12px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0.24px',
                        wordWrap: 'break-word',
                      }}
                    >
                      {currentUser.division || 'Nama Divisi'}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '16px',
                  display: 'flex',
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    if (onLogout) onLogout();
                  }}
                  style={{
                    alignSelf: 'stretch',
                    paddingTop: '16px',
                    paddingBottom: '4px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    background: '#212121',
                    borderTop: '1px rgba(255, 255, 255, 0.10) solid',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom: 'none',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '16px',
                    display: 'inline-flex',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  className="hover:opacity-85 transition-opacity"
                >
                  <div
                    style={{
                      flex: '1 1 0',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '8px',
                      display: 'flex',
                    }}
                  >
                    <LogOut className="w-4 h-4 text-[#FF0052] shrink-0" />
                    <div
                      style={{
                        color: '#FF0052',
                        fontSize: '14px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0.28px',
                        wordWrap: 'break-word',
                      }}
                    >
                      Logout
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            /* Admin Popover */
            <MemberProfilePopover
              currentUser={currentUser}
              onLogout={onLogout}
              setIsUserMenuOpen={setIsUserMenuOpen}
            />
          )}
        </>
      )}
    </>
  );
}
