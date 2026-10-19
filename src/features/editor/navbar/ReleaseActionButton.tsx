import type { Dispatch, SetStateAction } from 'react';

import {
  ChevronDown,
  CheckCircle2,
  RotateCcw,
  XCircle,
  Save,
  Layers,
  RefreshCw,
  Download,
} from 'lucide-react';
import { type ReleaseItem, type ReleaseStatus } from '../../../types';

export interface ReleaseActionButtonProps {
  activeRelease: ReleaseItem | null;
  canSaveChanges: boolean;
  hasSections: boolean;
  isEditingOwnRelease: boolean;
  isExportingPdf: boolean;
  isProductRole: boolean;
  isRMOrAdmin: boolean;
  isSaveMenuOpen: boolean;
  isStatusMenuOpen: boolean;
  onChangeReleaseStatus: (releaseId: string, newStatus: ReleaseStatus) => void;
  onExportPdf: () => void;
  onOpenSavePageModal: () => void;
  onOpenSaveReleaseModal: () => void;
  onSaveActiveRelease: () => void;
  onSaveChangesTemplate: () => void;
  setIsSaveMenuOpen: Dispatch<SetStateAction<boolean>>;
  setIsStatusMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function ReleaseActionButton({
  activeRelease,
  canSaveChanges,
  hasSections,
  isEditingOwnRelease,
  isExportingPdf,
  isProductRole,
  isRMOrAdmin,
  isSaveMenuOpen,
  isStatusMenuOpen,
  onChangeReleaseStatus,
  onExportPdf,
  onOpenSavePageModal,
  onOpenSaveReleaseModal,
  onSaveActiveRelease,
  onSaveChangesTemplate,
  setIsSaveMenuOpen,
  setIsStatusMenuOpen,
}: ReleaseActionButtonProps) {
  return (
    <>
      {/* 2. Primary Action Button: Approve vs Review vs Reject vs Save */}
      {activeRelease ? (
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              if (isProductRole) return;
              setIsStatusMenuOpen(!isStatusMenuOpen);
            }}
            style={{
              height: '40px',
              paddingTop: '8px',
              paddingBottom: '8px',
              paddingLeft: isProductRole ? '20px' : '24px',
              paddingRight: isProductRole ? '20px' : '16px',
              background:
                activeRelease.status === 'approved'
                  ? '#00EFAB'
                  : activeRelease.status === 'in_review'
                    ? '#DED522'
                    : '#DE225A',
              borderRadius: '100px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              display: 'inline-flex',
              border: 'none',
              cursor: isProductRole ? 'default' : 'pointer',
            }}
            className={
              isProductRole
                ? 'shadow-md select-none'
                : 'hover:opacity-90 active:scale-95 transition-all shadow-md select-none'
            }
            title={
              isProductRole
                ? `Status Release: ${
                    activeRelease.status === 'approved'
                      ? 'Approved'
                      : activeRelease.status === 'in_review'
                        ? 'Review'
                        : 'Reject'
                  }`
                : activeRelease.status === 'approved'
                  ? 'Approve'
                  : activeRelease.status === 'in_review'
                    ? 'Review'
                    : 'Reject'
            }
          >
            <div
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: '14px',
                fontFamily: "'Season Sans', sans-serif",
                fontWeight: 400,
                wordWrap: 'break-word',
              }}
            >
              {activeRelease.status === 'approved'
                ? 'Approve'
                : activeRelease.status === 'in_review'
                  ? 'Review'
                  : 'Reject'}
            </div>
            {!isProductRole && (
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
                  className={`w-3.5 h-3.5 text-black transition-transform duration-150 ${
                    isStatusMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            )}
          </button>

          {/* Status Dropdown Popover (Only for Release Manager / Admin) */}
          {isStatusMenuOpen && !isProductRole && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsStatusMenuOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-56 bg-[#212121] border border-[#3F3F3F] rounded-2xl p-1.5 z-50 shadow-2xl animate-in fade-in zoom-in-95 font-season-sans">
                {isRMOrAdmin && (
                  <>
                    <div className="px-3 py-1.5 text-[10px] font-semibold text-stone-400 uppercase tracking-wider border-b border-white/5 mb-1">
                      Change Status
                    </div>
                    {activeRelease.status !== 'approved' && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsStatusMenuOpen(false);
                          onChangeReleaseStatus(activeRelease.id, 'approved');
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-[#00EFAB] hover:bg-[#353535] text-left transition-colors cursor-pointer font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00EFAB] shrink-0" />
                        <span>Approve Release</span>
                      </button>
                    )}
                    {activeRelease.status !== 'in_review' && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsStatusMenuOpen(false);
                          onChangeReleaseStatus(activeRelease.id, 'in_review');
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-[#DED522] hover:bg-[#353535] text-left transition-colors cursor-pointer font-medium"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-[#DED522] shrink-0" />
                        <span>Change to In Review</span>
                      </button>
                    )}
                    {activeRelease.status !== 'rejected' && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsStatusMenuOpen(false);
                          onChangeReleaseStatus(activeRelease.id, 'rejected');
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-[#DE225A] hover:bg-[#353535] text-left transition-colors cursor-pointer font-medium"
                      >
                        <XCircle className="w-3.5 h-3.5 text-[#DE225A] shrink-0" />
                        <span>Tolak (Reject)</span>
                      </button>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      ) : (
        /* HTML yang Save */
        (hasSections || !activeRelease) && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsSaveMenuOpen(!isSaveMenuOpen)}
              style={{
                height: '40px',
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: '24px',
                paddingRight: '16px',
                background: 'white',
                borderRadius: '100px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                display: 'flex',
                border: 'none',
                cursor: 'pointer',
              }}
              className="hover:opacity-90 active:scale-95 transition-all shadow-md select-none"
              title="Save"
            >
              <div
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '14px',
                  fontFamily: "'Season Sans', sans-serif",
                  fontWeight: 400,
                  wordWrap: 'break-word',
                }}
              >
                Save
              </div>
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
                  className={`w-3.5 h-3.5 text-black transition-transform duration-150 ${
                    isSaveMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>

            {/* Save Menu Popover */}
            {isSaveMenuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsSaveMenuOpen(false)} />
                <div className="absolute right-0 mt-2 w-64 rounded-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 bg-[#212121] text-white border border-[#3F3F3F] shadow-2xl font-season-sans">
                  <div className="px-3 py-1.5 text-[10px] font-semibold text-stone-400 uppercase tracking-wider border-b border-white/5 mb-1">
                    Save Options
                  </div>

                  {isEditingOwnRelease ? (
                    <button
                      type="button"
                      onClick={() => {
                        setIsSaveMenuOpen(false);
                        onSaveActiveRelease();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs hover:bg-[#353535] text-left transition-colors cursor-pointer text-white font-medium"
                    >
                      <Save className="w-4 h-4 text-white shrink-0" />
                      <span>Save Release</span>
                    </button>
                  ) : (
                    <>
                      {canSaveChanges && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsSaveMenuOpen(false);
                            onSaveChangesTemplate();
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs hover:bg-[#353535] text-left transition-colors cursor-pointer text-white font-medium"
                        >
                          <Save className="w-4 h-4 text-white shrink-0" />
                          <span>Save Changes</span>
                        </button>
                      )}

                      {isRMOrAdmin && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsSaveMenuOpen(false);
                            onOpenSavePageModal();
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs hover:bg-[#353535] text-left transition-colors cursor-pointer text-white"
                        >
                          <Layers className="w-4 h-4 text-white shrink-0" />
                          <span>{canSaveChanges ? 'Save as New Template' : 'Save Template'}</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => {
                          setIsSaveMenuOpen(false);
                          onOpenSaveReleaseModal();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs hover:bg-[#353535] text-left transition-colors cursor-pointer text-white"
                      >
                        <Save className="w-4 h-4 text-white shrink-0" />
                        <span>Save to Release</span>
                      </button>

                      <div className="h-px bg-white/10 my-1" />
                      <button
                        type="button"
                        onClick={() => {
                          setIsSaveMenuOpen(false);
                          onExportPdf();
                        }}
                        disabled={isExportingPdf}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs hover:bg-[#353535] text-left transition-colors cursor-pointer text-white font-medium disabled:opacity-50"
                      >
                        {isExportingPdf ? (
                          <RefreshCw className="w-4 h-4 text-white animate-spin shrink-0" />
                        ) : (
                          <Download className="w-4 h-4 text-white shrink-0" />
                        )}
                        <span>Save as pdf</span>
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        )
      )}
    </>
  );
}
