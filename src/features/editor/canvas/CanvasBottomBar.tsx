import { Undo2, Redo2, Monitor, Smartphone, Columns2, Lock } from 'lucide-react';
import { type PreviewLanguage, type ViewportMode } from '../../../types';

export interface CanvasBottomBarProps {
  canRedo: boolean;
  canUndo: boolean;
  hideSidebarAndActions: boolean;
  isRoleManager: boolean;
  onRedo: () => void;
  onSetPreviewLanguage: (lang: PreviewLanguage) => void;
  onUndo: () => void;
  previewLanguage: PreviewLanguage;
  setViewportMode: (mode: ViewportMode) => void;
  viewportMode: ViewportMode;
}

export function CanvasBottomBar({
  canRedo,
  canUndo,
  hideSidebarAndActions,
  isRoleManager,
  onRedo,
  onSetPreviewLanguage,
  onUndo,
  previewLanguage,
  setViewportMode,
  viewportMode,
}: CanvasBottomBarProps) {
  return (
    <>
      {/* Floating Bottom Navigation Controls matching screenshot */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 select-none pointer-events-auto font-season-sans transition-all duration-300">
        {/* Undo / Redo Controls next to ID-EN floating bar */}
        {!hideSidebarAndActions && (
          <div
            style={{
              height: '40px',
              padding: '4px',
              background: '#212121',
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            <button
              type="button"
              onClick={canUndo ? onUndo : undefined}
              disabled={!canUndo}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                background: 'transparent',
                cursor: canUndo ? 'pointer' : 'not-allowed',
                color: canUndo ? 'white' : 'rgba(255, 255, 255, 0.25)',
                transition: 'all 150ms ease',
              }}
              className={canUndo ? 'hover:bg-[#353535] active:scale-95' : ''}
              title="Undo (Ctrl+Z)"
            >
              <Undo2 className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={canRedo ? onRedo : undefined}
              disabled={!canRedo}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                background: 'transparent',
                cursor: canRedo ? 'pointer' : 'not-allowed',
                color: canRedo ? 'white' : 'rgba(255, 255, 255, 0.25)',
                transition: 'all 150ms ease',
              }}
              className={canRedo ? 'hover:bg-[#353535] active:scale-95' : ''}
              title="Redo (Ctrl+Y)"
            >
              <Redo2 className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Language Switcher Pill */}
        {onSetPreviewLanguage && (
          <div
            style={{
              height: '40px',
              padding: '4px',
              background: '#212121',
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            <button
              type="button"
              onClick={() => onSetPreviewLanguage('id')}
              style={{
                paddingLeft: '14px',
                paddingRight: '14px',
                paddingTop: '6px',
                paddingBottom: '6px',
                background: previewLanguage === 'id' ? '#353535' : 'transparent',
                borderRadius: '76px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: 'none',
                cursor: 'pointer',
                color: previewLanguage === 'id' ? 'white' : 'rgba(255, 255, 255, 0.6)',
                fontSize: '12px',
                fontWeight: 500,
                transition: 'all 150ms ease',
              }}
              className="hover:text-white"
            >
              <span>🇮🇩</span>
              <span>ID</span>
            </button>

            <button
              type="button"
              onClick={() => onSetPreviewLanguage('en')}
              style={{
                paddingLeft: '14px',
                paddingRight: '14px',
                paddingTop: '6px',
                paddingBottom: '6px',
                background: previewLanguage === 'en' ? '#353535' : 'transparent',
                borderRadius: '76px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: 'none',
                cursor: 'pointer',
                color: previewLanguage === 'en' ? 'white' : 'rgba(255, 255, 255, 0.6)',
                fontSize: '12px',
                fontWeight: 500,
                transition: 'all 150ms ease',
              }}
              className="hover:text-white"
            >
              <span>🇬🇧</span>
              <span>EN</span>
            </button>
          </div>
        )}

        {/* Viewport Mode Switcher Pill */}
        {setViewportMode && (
          <div
            style={{
              height: '40px',
              padding: '4px',
              background: '#212121',
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            <button
              type="button"
              onClick={() => setViewportMode('desktop')}
              style={{
                paddingLeft: '14px',
                paddingRight: '14px',
                paddingTop: '6px',
                paddingBottom: '6px',
                background: viewportMode === 'desktop' ? '#353535' : 'transparent',
                borderRadius: '76px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: 'none',
                cursor: 'pointer',
                color: viewportMode === 'desktop' ? 'white' : 'rgba(255, 255, 255, 0.6)',
                fontSize: '12px',
                fontWeight: 500,
                transition: 'all 150ms ease',
              }}
              className="hover:text-white"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop 1440</span>
            </button>

            <button
              type="button"
              onClick={() => setViewportMode('mobile')}
              style={{
                paddingLeft: '14px',
                paddingRight: '14px',
                paddingTop: '6px',
                paddingBottom: '6px',
                background: viewportMode === 'mobile' ? '#353535' : 'transparent',
                borderRadius: '76px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: 'none',
                cursor: 'pointer',
                color: viewportMode === 'mobile' ? 'white' : 'rgba(255, 255, 255, 0.6)',
                fontSize: '12px',
                fontWeight: 500,
                transition: 'all 150ms ease',
              }}
              className="hover:text-white"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile 375</span>
            </button>

            <button
              type="button"
              onClick={() => setViewportMode('both' as any)}
              style={{
                paddingLeft: '14px',
                paddingRight: '14px',
                paddingTop: '6px',
                paddingBottom: '6px',
                background:
                  (viewportMode as string) === 'both' || (viewportMode as string) === 'split'
                    ? '#353535'
                    : 'transparent',
                borderRadius: '76px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: 'none',
                cursor: 'pointer',
                color:
                  (viewportMode as string) === 'both' || (viewportMode as string) === 'split'
                    ? 'white'
                    : 'rgba(255, 255, 255, 0.6)',
                fontSize: '12px',
                fontWeight: 500,
                transition: 'all 150ms ease',
              }}
              className="hover:text-white"
            >
              <Columns2 className="w-3.5 h-3.5" />
              <span>Side by Side</span>
            </button>
          </div>
        )}

        {/* Role Manager Edit Indicator Pill */}
        <div
          style={{
            height: '40px',
            paddingLeft: '14px',
            paddingRight: '14px',
            background: isRoleManager ? 'rgba(16, 185, 129, 0.15)' : '#212121',
            borderRadius: '100px',
            border: isRoleManager
              ? '1px solid rgba(16, 185, 129, 0.35)'
              : '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          }}
          title={
            isRoleManager
              ? 'Mode Edit Komponen Aktif (Khusus Role Manager)'
              : 'Mode Baca (Hanya Role Manager yang dapat mengedit komponen)'
          }
        >
          {isRoleManager ? (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-300">
                Edit Komponen: Role Manager Aktif
              </span>
            </>
          ) : (
            <>
              <Lock className="w-3.5 h-3.5 text-stone-400" />
              <span className="text-xs text-stone-400">
                Mode Baca (Edit Komponen: Khusus Role Manager)
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
