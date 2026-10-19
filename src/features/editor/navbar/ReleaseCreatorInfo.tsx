import { getInitials } from '../../../components/UserAvatar';
import { type ReleaseItem } from '../../../types';

export interface ReleaseCreatorInfoProps {
  currentRelease: ReleaseItem | null;
  isLight: boolean;
}

export function ReleaseCreatorInfo({ currentRelease, isLight }: ReleaseCreatorInfoProps) {
  return (
    <>
      {/* Simplified Creator & Division Info for Release */}
      {currentRelease && (
        <div className="hidden sm:inline-flex items-center gap-2 select-none animate-in fade-in duration-150">
          {/* Vertical Divider */}
          <div
            style={{
              width: '1px',
              height: '20px',
              backgroundColor: isLight ? '#E5E5E7' : 'rgba(255, 255, 255, 0.15)',
              marginLeft: '10px',
              marginRight: '6px',
            }}
          />

          {/* Simplified Creator Avatar & Name */}
          <div
            className="flex items-center gap-2"
            title={`Created by: ${currentRelease.authorName || 'Stella'}${currentRelease.division ? ` (${currentRelease.division})` : ''}`}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                background: isLight ? '#D1D1D6' : '#353535',
                borderRadius: '1000px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontSize: '9px',
                  fontFamily: "'Season Mix', serif",
                  fontWeight: 500,
                  color: isLight ? '#1C1C1E' : 'white',
                  lineHeight: 1,
                }}
              >
                {getInitials(currentRelease.authorName || 'Stella')}
              </span>
            </div>
            <span
              style={{
                color: isLight ? '#1C1C1E' : 'rgba(255, 255, 255, 0.75)',
                fontSize: '12px',
                fontFamily: "'Season Sans', sans-serif",
                fontWeight: 400,
              }}
              className="truncate max-w-[140px]"
            >
              {currentRelease.authorName || 'Stella'}
            </span>

            {/* Subtle division indicator */}
            {currentRelease.division && (
              <>
                <span
                  style={{
                    color: isLight ? '#C7C7CC' : 'rgba(255, 255, 255, 0.25)',
                    fontSize: '11px',
                  }}
                >
                  •
                </span>
                <span
                  style={{
                    color: isLight ? '#8E8E93' : 'rgba(255, 255, 255, 0.45)',
                    fontSize: '11px',
                    fontFamily: "'Season Sans', sans-serif",
                    fontWeight: 400,
                  }}
                  className="truncate max-w-[130px]"
                >
                  {currentRelease.division}
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
