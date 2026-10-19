import { UserAvatar } from '../../components/UserAvatar';
import { type AppUser } from '../../types';

export interface PendingApprovalsProps {
  isActionActive: boolean;
  onApproveUser: (userId: string, targetRole?: 'admin' | 'product') => Promise<void>;
  onRejectUser: (userId: string, reason?: string) => Promise<void>;
  pendingUsers: AppUser[];
}

export function PendingApprovals({
  isActionActive,
  onApproveUser,
  onRejectUser,
  pendingUsers,
}: PendingApprovalsProps) {
  return (
    <>
      {/* Section 1: Pending Approvals (Rendered when pending users exist) */}
      {pendingUsers.length > 0 && (
        <>
          <div
            style={{
              alignSelf: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '16px',
              display: 'flex',
              opacity: isActionActive ? 0.35 : 1,
              pointerEvents: isActionActive ? 'none' : 'auto',
              transition: 'opacity 0.2s ease',
            }}
          >
            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '16px',
                display: 'inline-flex',
              }}
            >
              <div
                style={{
                  flex: '1 1 0',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '16px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '4px',
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
                      letterSpacing: '0.28px',
                      wordWrap: 'break-word',
                    }}
                  >
                    Pending Approval
                  </div>
                  <div
                    style={{
                      color: '#F59E0B',
                      fontSize: '14px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '20px',
                      letterSpacing: '0.28px',
                      wordWrap: 'break-word',
                    }}
                  >
                    {pendingUsers.length}
                  </div>
                </div>
              </div>
              <div style={{ width: '78px', height: '20px' }}></div>
            </div>

            {/* Pending Rows */}
            <div
              style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '4px',
                display: 'flex',
              }}
            >
              {pendingUsers.map((user) => (
                <div
                  key={user.id}
                  style={{
                    alignSelf: 'stretch',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    borderRadius: '12px',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '16px',
                    display: 'inline-flex',
                  }}
                  className="hover:bg-white/5 transition-colors"
                >
                  {/* Avatar */}
                  <UserAvatar name={user.name} seed={user.id || user.name} size={40} />

                  {/* Info Column */}
                  <div
                    style={{
                      flex: '1 1 0',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'inline-flex',
                      minWidth: 0,
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
                      {user.name}
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
                      className="truncate max-w-full"
                    >
                      {user.email}
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
                      {user.division || 'Retail & Daily Banking'}
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '16px',
                      display: 'flex',
                      flexShrink: 0,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => onRejectUser(user.id)}
                      style={{
                        textAlign: 'right',
                        color: '#909090',
                        fontSize: '14px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0.28px',
                        wordWrap: 'break-word',
                        cursor: 'pointer',
                        background: 'transparent',
                        border: 'none',
                      }}
                      className="hover:text-red-400 transition-colors"
                    >
                      Reject
                    </button>
                    <button
                      type="button"
                      onClick={() => onApproveUser(user.id, 'product')}
                      style={{
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        background: '#00DF81',
                        borderRadius: '76px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                        display: 'flex',
                        cursor: 'pointer',
                        border: 'none',
                      }}
                      className="hover:brightness-110 active:scale-95 transition-all shadow-sm"
                    >
                      <div
                        style={{
                          width: '60px',
                          textAlign: 'center',
                          color: 'black',
                          fontSize: '14px',
                          fontFamily: 'Season Sans, sans-serif',
                          fontWeight: 400,
                          wordWrap: 'break-word',
                        }}
                      >
                        Approve
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              alignSelf: 'stretch',
              height: '0px',
              outline: '1px #353535 solid',
              outlineOffset: '-0.50px',
            }}
          />
        </>
      )}
    </>
  );
}
