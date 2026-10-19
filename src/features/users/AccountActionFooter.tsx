import type { Dispatch, SetStateAction } from 'react';
import { UserAvatar } from '../../components/UserAvatar';
import { Trash2 } from 'lucide-react';
import { type AppUser } from '../../types';

export interface AccountActionFooterProps {
  deleteTargetUser: AppUser | null;
  handleCancelRoleChanges: () => void;
  handleSaveAll: () => Promise<void>;
  isRoleEditingActive: boolean;
  isSaving: boolean;
  onDeleteUser: (userId: string) => Promise<void>;
  setDeleteTargetUser: Dispatch<SetStateAction<AppUser | null>>;
}

export function AccountActionFooter({
  deleteTargetUser,
  handleCancelRoleChanges,
  handleSaveAll,
  isRoleEditingActive,
  isSaving,
  onDeleteUser,
  setDeleteTargetUser,
}: AccountActionFooterProps) {
  return (
    <>
      {/* Fixed Stationary Bottom Action Footer Bar: Always anchored at modal bottom */}
      {deleteTargetUser ? (
        <div
          className="shrink-0 w-full animate-fadeIn"
          style={{
            width: '100%',
            paddingBottom: '16px',
            background: '#212121',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            display: 'inline-flex',
          }}
        >
          {/* Top Divider */}
          <div
            style={{
              alignSelf: 'stretch',
              height: '0px',
              outline: '1px #353535 solid',
              outlineOffset: '-0.50px',
            }}
          />
          <div
            style={{
              alignSelf: 'stretch',
              paddingLeft: '16px',
              paddingRight: '16px',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              display: 'inline-flex',
            }}
          >
            {/* Left Column: Title + Member Avatar/Info */}
            <div
              style={{
                width: '272px',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '16px',
                display: 'inline-flex',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.32px',
                  wordWrap: 'break-word',
                }}
              >
                Delete 1 account?
              </div>
              <div
                style={{
                  alignSelf: 'stretch',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '16px',
                  display: 'inline-flex',
                }}
              >
                <UserAvatar
                  name={deleteTargetUser.name}
                  seed={deleteTargetUser.id || deleteTargetUser.name}
                  size={40}
                />
                <div
                  style={{
                    width: '216px',
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
                    className="truncate max-w-full"
                  >
                    {deleteTargetUser.name}
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
                    {deleteTargetUser.email}
                  </div>
                  <div
                    style={{
                      color: '#A3A3A3',
                      fontSize: '11px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '16px',
                      marginTop: '2px',
                    }}
                  >
                    Templates & releases of this account will remain in Alco
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Actions Cancel & Delete */}
            <div
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '16px',
                display: 'flex',
              }}
            >
              <button
                type="button"
                onClick={() => setDeleteTargetUser(null)}
                style={{
                  textAlign: 'right',
                  color: '#909090',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
                className="hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={async () => {
                  const userToDelete = deleteTargetUser;
                  setDeleteTargetUser(null);
                  await onDeleteUser(userToDelete.id);
                }}
                style={{
                  width: '140px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  background: 'white',
                  borderRadius: '76px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  display: 'flex',
                  cursor: 'pointer',
                  border: 'none',
                }}
                className="hover:bg-stone-200 active:scale-95 transition-all"
              >
                <div
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: '16px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    wordWrap: 'break-word',
                  }}
                >
                  Delete
                </div>
                <Trash2 className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          </div>
        </div>
      ) : isRoleEditingActive ? (
        /* Fixed Stationary Bottom Action for Save (matching the same design with top divider line) */
        <div
          className="shrink-0 w-full animate-fadeIn"
          style={{
            width: '100%',
            paddingBottom: '16px',
            background: '#212121',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            display: 'inline-flex',
          }}
        >
          {/* Top Divider */}
          <div
            style={{
              alignSelf: 'stretch',
              height: '0px',
              outline: '1px #353535 solid',
              outlineOffset: '-0.50px',
            }}
          />
          <div
            style={{
              alignSelf: 'stretch',
              paddingLeft: '16px',
              paddingRight: '16px',
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'inline-flex',
            }}
          >
            <div
              style={{
                color: 'white',
                fontSize: '16px',
                fontFamily: 'Season Sans, sans-serif',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0.32px',
                wordWrap: 'break-word',
              }}
            >
              Save changes?
            </div>

            {/* Right Action: Cancel & Save */}
            <div
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '16px',
                display: 'flex',
              }}
            >
              <button
                type="button"
                onClick={handleCancelRoleChanges}
                style={{
                  textAlign: 'right',
                  color: '#909090',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
                className="hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveAll}
                disabled={isSaving}
                style={{
                  width: '140px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  background: 'white',
                  borderRadius: '76px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  display: 'flex',
                  cursor: 'pointer',
                  border: 'none',
                }}
                className="hover:bg-stone-200 active:scale-95 transition-all"
              >
                <div
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: '16px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    wordWrap: 'break-word',
                  }}
                >
                  {isSaving ? 'Saving...' : 'Save'}
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
