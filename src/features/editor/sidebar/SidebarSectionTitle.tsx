import { Plus } from 'lucide-react';
import { type SidebarViewMode, type PageTemplate, type ReleaseItem } from '../../../types';

export interface SidebarSectionTitleProps {
  activeTemplateId: string | null | undefined;
  isProductRole: boolean;
  onOpenNewTemplateModal: (() => void) | undefined;
  onOpenReleaseHistory: (() => void) | undefined;
  onOpenSavePageModal: () => void;
  onOpenSaveReleaseModal: () => void;
  pageTemplates: PageTemplate[];
  releases: ReleaseItem[];
  viewMode: SidebarViewMode;
}

export function SidebarSectionTitle({
  activeTemplateId,
  isProductRole,
  onOpenNewTemplateModal,
  onOpenReleaseHistory,
  onOpenSavePageModal,
  onOpenSaveReleaseModal,
  pageTemplates,
  releases,
  viewMode,
}: SidebarSectionTitleProps) {
  return (
    <>
      {/* Section Title Row with count badge (Hidden for Components in all canvases per user request) */}
      {viewMode !== 'components' && (
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
              color: '#8C8C8C',
              fontSize: '14px',
              fontFamily: 'Season Sans, sans-serif',
              fontWeight: 400,
              lineHeight: '20px',
              letterSpacing: '0.28px',
              wordWrap: 'break-word',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>{viewMode === 'templates' ? 'Templates' : 'Releases'}</span>
            {activeTemplateId && (
              <span
                style={{
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  background: 'rgba(255, 255, 255, 0.25)',
                  borderRadius: '24px',
                  color: 'white',
                  fontSize: '10px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 500,
                  lineHeight: '16px',
                }}
                className="inline-flex items-center justify-center min-w-[20px]"
              >
                {viewMode === 'templates' ? pageTemplates.length : releases.length}
              </span>
            )}
          </div>

          {viewMode === 'templates' && !isProductRole && (
            <div
              onClick={() => {
                if (onOpenNewTemplateModal) {
                  onOpenNewTemplateModal();
                } else {
                  onOpenSavePageModal();
                }
              }}
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '6px',
                display: 'flex',
                cursor: 'pointer',
              }}
              className="hover:opacity-80 transition-opacity"
              title="Buat Baru"
            >
              <Plus className="w-4 h-4 text-white" />
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                }}
              >
                Buat Baru
              </span>
            </div>
          )}

          {viewMode === 'releases' && (
            <div
              onClick={() => {
                if (onOpenReleaseHistory) {
                  onOpenReleaseHistory();
                } else {
                  onOpenSaveReleaseModal();
                }
              }}
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
                display: 'flex',
                cursor: 'pointer',
              }}
              className="hover:opacity-80 transition-opacity"
              title="Lihat Riwayat Release"
            >
              <div
                style={{
                  textAlign: 'right',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                }}
              >
                History
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
