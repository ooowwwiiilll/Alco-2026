import type { Dispatch, SetStateAction } from 'react';

import { Users } from 'lucide-react';
import { UserAvatar } from '../../components/UserAvatar';
import { type AppUser } from '../../types';

export interface AccountManagementCardProps {
  actualPendingCount: number;
  latestPendingUser: AppUser;
  onOpenUserManagement: (() => void) | undefined;
  setIsUserMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function AccountManagementCard({
  actualPendingCount,
  latestPendingUser,
  onOpenUserManagement,
  setIsUserMenuOpen,
}: AccountManagementCardProps) {
  return (
    <>
      {/* Card 2: Manajemen Akun (with Pending Approval if > 0) */}
      {actualPendingCount > 0 ? (
        <div
          style={{
            width: '100%',
            padding: '12px',
            background: '#353535',
            borderRadius: '12px',
            outline: '1px #3F3F3F solid',
            outlineOffset: '-0.50px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '16px',
            display: 'flex',
          }}
        >
          {/* Manajemen Akun Clickable Header */}
          <button
            type="button"
            onClick={() => {
              setIsUserMenuOpen(false);
              if (onOpenUserManagement) onOpenUserManagement();
            }}
            style={{
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '8px',
              display: 'inline-flex',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              textAlign: 'left',
            }}
            className="hover:opacity-80 transition-opacity"
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
              <Users className="w-4 h-4 text-white" />
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
              Account Management
            </div>
          </button>

          {/* Divider Line */}
          <div
            style={{
              alignSelf: 'stretch',
              height: '0px',
              outline: '1px #494949 solid',
              outlineOffset: '-0.50px',
            }}
          />

          {/* Pending Approval Section */}
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
            <div
              style={{
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'inline-flex',
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
                  {actualPendingCount}
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsUserMenuOpen(false);
                  if (onOpenUserManagement) onOpenUserManagement();
                }}
                style={{
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.24px',
                  wordWrap: 'break-word',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
                className="hover:underline"
              >
                View All
              </button>
            </div>

            <div
              onClick={() => {
                setIsUserMenuOpen(false);
                if (onOpenUserManagement) onOpenUserManagement();
              }}
              style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
                display: 'inline-flex',
                cursor: 'pointer',
              }}
              className="hover:opacity-85 transition-opacity"
            >
              <UserAvatar
                name={latestPendingUser?.name}
                seed={latestPendingUser?.id || latestPendingUser?.name}
                size={40}
              />
              <div
                style={{
                  flex: '1 1 0',
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                }}
              >
                {actualPendingCount === 1
                  ? `${latestPendingUser?.name || '1 user'} pending approval`
                  : `${latestPendingUser?.name || '1 user'} and ${
                      actualPendingCount - 1
                    } others pending approval`}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => {
            setIsUserMenuOpen(false);
            if (onOpenUserManagement) onOpenUserManagement();
          }}
          style={{
            width: '100%',
            padding: '12px',
            background: '#353535',
            borderRadius: '12px',
            outline: '1px #3F3F3F solid',
            outlineOffset: '-0.50px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '16px',
            display: 'inline-flex',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
          }}
          className="hover:bg-[#3d3d3d] transition-colors"
        >
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '8px',
              display: 'inline-flex',
            }}
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
              <Users className="w-4 h-4 text-white" />
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
              Account Management
            </div>
          </div>
        </button>
      )}
    </>
  );
}
