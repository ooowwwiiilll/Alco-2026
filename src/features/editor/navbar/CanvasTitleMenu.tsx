import type { Dispatch, SetStateAction } from 'react';

import { ChevronDown, Edit2, Plus } from 'lucide-react';

export interface CanvasTitleMenuProps {
  canNewCanvas: boolean;
  canRename: boolean;
  canvasDisplayName: string;
  handleOpenNewCanvas: () => void;
  handleOpenRename: () => void;
  hasActions: boolean;
  hasTemplate: boolean;
  isActionMenuOpen: boolean;
  isReleaseDoc: boolean;
  setIsActionMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function CanvasTitleMenu({
  canNewCanvas,
  canRename,
  canvasDisplayName,
  handleOpenNewCanvas,
  handleOpenRename,
  hasActions,
  hasTemplate,
  isActionMenuOpen,
  isReleaseDoc,
  setIsActionMenuOpen,
}: CanvasTitleMenuProps) {
  return (
    <>
      {/* Canvas Name & Action Chevron Dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            if (hasActions) setIsActionMenuOpen(!isActionMenuOpen);
          }}
          disabled={!hasActions}
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4px',
            display: 'inline-flex',
            cursor: hasActions ? 'pointer' : 'default',
            padding: '4px 6px',
            borderRadius: '8px',
            background: 'transparent',
            border: 'none',
            transition: 'background-color 150ms ease',
          }}
          className={`${hasActions ? 'hover:bg-white/5 cursor-pointer' : 'cursor-default'} select-none`}
          title={hasActions ? 'Menu Aksi Canvas' : canvasDisplayName}
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
                textAlign: 'center',
                color: 'white',
                fontSize: '14px',
                fontFamily: 'Season Sans, sans-serif',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0.28px',
                wordWrap: 'break-word',
              }}
              className="truncate max-w-[280px]"
            >
              {canvasDisplayName}
            </div>

            {/* Chip / Badge: TEMPLATE / RELEASE */}
            {hasTemplate && (
              <div
                style={{
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  background: 'black',
                  borderRadius: '24px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    color: 'white',
                    fontSize: '8px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '16px',
                    letterSpacing: '0.80px',
                    wordWrap: 'break-word',
                  }}
                >
                  {isReleaseDoc ? 'RELEASE' : 'TEMPLATE'}
                </div>
              </div>
            )}
          </div>
          {hasActions && (
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
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#888888] transition-transform duration-150 ${
                  isActionMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          )}
        </button>

        {/* Action Dropdown Menu based on user role */}
        {isActionMenuOpen && hasActions && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsActionMenuOpen(false)} />
            <div className="absolute left-0 mt-2 w-56 rounded-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 bg-[#212121] text-white border border-[#3F3F3F] shadow-2xl font-season-sans">
              <div className="px-3 py-1.5 text-[10px] font-semibold text-stone-400 uppercase tracking-wider border-b border-white/5 mb-1">
                Aksi Canvas
              </div>

              {/* Rename Canvas: Only the creator of the release if activeRelease, or RM & Admin if !activeRelease */}
              {canRename && (
                <button
                  type="button"
                  onClick={handleOpenRename}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs hover:bg-[#353535] text-left transition-colors cursor-pointer text-white"
                >
                  <Edit2 className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="font-normal">Rename Canvas</span>
                </button>
              )}

              {/* New Canvas Action */}
              {canNewCanvas && (
                <button
                  type="button"
                  onClick={handleOpenNewCanvas}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs hover:bg-[#353535] text-left transition-colors cursor-pointer text-white"
                  title="New Canvas"
                >
                  <Plus className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="font-normal">New Canvas</span>
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
