import type { Dispatch, SetStateAction } from 'react';
import { Eye, MoreHorizontal, RotateCcw, XCircle, CheckCircle2, Trash2 } from 'lucide-react';
import { formatDateTime } from '../../../utils/format';
import {
  type SidebarViewMode,
  type ReleaseItem,
  type AppUser,
  type ReleaseStatus,
} from '../../../types';
import { DesktopScaledPreview } from './SidebarPreviews';

export interface ReleaseListProps {
  activeMoreMenuId: string | null;
  confirmDeleteAction: (
    title: string,
    description: string,
    onConfirm: () => void,
    confirmLabel?: string,
  ) => void;
  currentUser: AppUser;
  filteredReleases: ReleaseItem[];
  onApproveRelease: ((releaseId: string) => void) | undefined;
  onChangeReleaseStatus: ((releaseId: string, newStatus: ReleaseStatus) => void) | undefined;
  onDeleteRelease: (releaseId: string) => void;
  onLoadRelease: (release: ReleaseItem) => void;
  onRejectRelease: ((releaseId: string) => void) | undefined;
  setActiveMoreMenuId: Dispatch<SetStateAction<string | null>>;
  setDetailReleaseModal: Dispatch<SetStateAction<ReleaseItem | null>>;
  viewMode: SidebarViewMode;
}

export function ReleaseList({
  activeMoreMenuId,
  confirmDeleteAction,
  currentUser,
  filteredReleases,
  onApproveRelease,
  onChangeReleaseStatus,
  onDeleteRelease,
  onLoadRelease,
  onRejectRelease,
  setActiveMoreMenuId,
  setDetailReleaseModal,
  viewMode,
}: ReleaseListProps) {
  return (
    <>
      {/* VIEW 3: Releases List */}
      {viewMode === 'releases' && (
        <>
          {filteredReleases.length === 0 ? (
            <div className="py-12 text-center w-full space-y-2">
              <p className="text-sm text-stone-400 font-season-sans">No releases found</p>
            </div>
          ) : (
            filteredReleases.map((rel) => {
              const combinedHtml =
                rel.sections && rel.sections.length > 0
                  ? rel.sections.map((s) => s.htmlContent).join('')
                  : '<div class="p-8 text-white">Release Preview</div>';

              return (
                <div
                  key={rel.id}
                  style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '12px',
                    display: 'flex',
                  }}
                >
                  {/* Preview Box (240px height with #686868 background) */}
                  <div
                    onClick={() => onLoadRelease(rel)}
                    style={{
                      alignSelf: 'stretch',
                      height: '240px',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '16px',
                      backgroundColor: '#686868',
                      cursor: 'pointer',
                    }}
                    className="group border border-white/5 hover:ring-1 hover:ring-white/20 transition-all"
                  >
                    <DesktopScaledPreview
                      htmlContent={combinedHtml}
                      desktopWidth={1440}
                      fixedHeight={240}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-[16px] flex items-center justify-center pointer-events-none">
                      <div
                        style={{
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          paddingTop: '8px',
                          paddingBottom: '8px',
                          background: 'black',
                          borderRadius: '76px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '8px',
                          display: 'inline-flex',
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.6)',
                        }}
                      >
                        <Eye className="w-4 h-4 text-white shrink-0" />
                        <div
                          style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: '14px',
                            fontFamily: 'Season Sans, sans-serif',
                            fontWeight: 400,
                            lineHeight: '24px',
                            wordWrap: 'break-word',
                          }}
                        >
                          Lihat Release
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Metadata block matching prompt design */}
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
                    <div
                      style={{
                        alignSelf: 'stretch',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                      }}
                    >
                      {rel.status === 'in_review' && (
                        <div
                          style={{
                            alignSelf: 'stretch',
                            color: '#DED522',
                            fontSize: '10px',
                            fontFamily: 'Season Sans, sans-serif',
                            fontWeight: 400,
                            lineHeight: '24px',
                            letterSpacing: '0.20px',
                            wordWrap: 'break-word',
                          }}
                        >
                          Review
                        </div>
                      )}
                      {rel.status === 'approved' && (
                        <div
                          style={{
                            alignSelf: 'stretch',
                            color: '#00EFAB',
                            fontSize: '10px',
                            fontFamily: 'Season Sans, sans-serif',
                            fontWeight: 400,
                            lineHeight: '24px',
                            letterSpacing: '0.20px',
                            wordWrap: 'break-word',
                          }}
                        >
                          Approved
                        </div>
                      )}
                      {rel.status === 'rejected' && (
                        <div
                          style={{
                            alignSelf: 'stretch',
                            color: '#DE225A',
                            fontSize: '10px',
                            fontFamily: 'Season Sans, sans-serif',
                            fontWeight: 400,
                            lineHeight: '24px',
                            letterSpacing: '0.20px',
                            wordWrap: 'break-word',
                          }}
                        >
                          Rejected
                        </div>
                      )}
                      <div
                        style={{
                          alignSelf: 'stretch',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          gap: '16px',
                          display: 'inline-flex',
                        }}
                      >
                        <div
                          style={{
                            flex: '1 1 0',
                            color: 'white',
                            fontSize: '14px',
                            fontFamily: 'Season Sans, sans-serif',
                            fontWeight: 400,
                            lineHeight: '24px',
                            letterSpacing: '0.28px',
                            wordWrap: 'break-word',
                          }}
                          className="truncate"
                          title={rel.name}
                        >
                          {rel.name}
                        </div>

                        {/* More Options / 3 dots menu for releases */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMoreMenuId(activeMoreMenuId === rel.id ? null : rel.id);
                            }}
                            style={{
                              width: '16px',
                              height: '16px',
                              position: 'relative',
                              overflow: 'hidden',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              padding: 0,
                            }}
                            className="text-stone-300 hover:text-white transition-colors"
                            title="Menu Lainnya"
                          >
                            <MoreHorizontal className="w-4 h-4 text-white" />
                          </button>

                          {activeMoreMenuId === rel.id && (
                            <div
                              className="absolute right-0 bottom-full mb-1 w-44 bg-[#2a2a2a] border border-white/10 rounded-xl shadow-xl p-1 z-30 animate-in fade-in zoom-in-95 font-season-sans"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveMoreMenuId(null);
                                  setDetailReleaseModal(rel);
                                }}
                                className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-white hover:bg-white/10 rounded-lg cursor-pointer text-left font-normal"
                              >
                                <Eye className="w-3.5 h-3.5 text-white" />
                                <span>Lihat Detail</span>
                              </button>

                              {/* Status Change Options for Admin & Role Manager */}
                              {(currentUser?.role === 'admin' ||
                                currentUser?.role === 'manager') && (
                                <>
                                  <div className="h-px bg-white/10 my-1" />
                                  {rel.status === 'approved' && (
                                    <>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setActiveMoreMenuId(null);
                                          if (onChangeReleaseStatus) {
                                            onChangeReleaseStatus(rel.id, 'in_review');
                                          }
                                        }}
                                        className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-amber-400 hover:bg-amber-500/10 rounded-lg cursor-pointer text-left font-medium"
                                      >
                                        <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                                        <span>Ubah ke Review</span>
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setActiveMoreMenuId(null);
                                          if (onChangeReleaseStatus) {
                                            onChangeReleaseStatus(rel.id, 'rejected');
                                          } else if (onRejectRelease) {
                                            onRejectRelease(rel.id);
                                          }
                                        }}
                                        className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-red-400 hover:bg-red-500/10 rounded-lg cursor-pointer text-left font-medium"
                                      >
                                        <XCircle className="w-3.5 h-3.5 text-red-400" />
                                        <span>Tolak (Reject)</span>
                                      </button>
                                    </>
                                  )}

                                  {rel.status === 'in_review' && (
                                    <>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setActiveMoreMenuId(null);
                                          if (onChangeReleaseStatus) {
                                            onChangeReleaseStatus(rel.id, 'approved');
                                          } else if (onApproveRelease) {
                                            onApproveRelease(rel.id);
                                          }
                                        }}
                                        className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-emerald-400 hover:bg-emerald-500/10 rounded-lg cursor-pointer text-left font-medium"
                                      >
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                        <span>Approve Release</span>
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setActiveMoreMenuId(null);
                                          if (onChangeReleaseStatus) {
                                            onChangeReleaseStatus(rel.id, 'rejected');
                                          } else if (onRejectRelease) {
                                            onRejectRelease(rel.id);
                                          }
                                        }}
                                        className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-red-400 hover:bg-red-500/10 rounded-lg cursor-pointer text-left font-medium"
                                      >
                                        <XCircle className="w-3.5 h-3.5 text-red-400" />
                                        <span>Tolak (Reject)</span>
                                      </button>
                                    </>
                                  )}

                                  {rel.status === 'rejected' && (
                                    <>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setActiveMoreMenuId(null);
                                          if (onChangeReleaseStatus) {
                                            onChangeReleaseStatus(rel.id, 'approved');
                                          } else if (onApproveRelease) {
                                            onApproveRelease(rel.id);
                                          }
                                        }}
                                        className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-emerald-400 hover:bg-emerald-500/10 rounded-lg cursor-pointer text-left font-medium"
                                      >
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                        <span>Approve Release</span>
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setActiveMoreMenuId(null);
                                          if (onChangeReleaseStatus) {
                                            onChangeReleaseStatus(rel.id, 'in_review');
                                          }
                                        }}
                                        className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-amber-400 hover:bg-amber-500/10 rounded-lg cursor-pointer text-left font-medium"
                                      >
                                        <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                                        <span>Ubah ke Review</span>
                                      </button>
                                    </>
                                  )}
                                </>
                              )}

                              {Boolean(currentUser && rel.authorId === currentUser.id) && (
                                <>
                                  <div className="h-px bg-white/10 my-1" />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setActiveMoreMenuId(null);
                                      confirmDeleteAction(
                                        'Delete',
                                        'Are you sure you want to delete? This action cannot be undone.',
                                        () => onDeleteRelease(rel.id),
                                        'Delete',
                                      );
                                    }}
                                    className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-red-400 hover:bg-red-500/10 rounded-lg cursor-pointer text-left"
                                  >
                                    <Trash2 className="w-3.5 h-3.5 text-red-400" />
                                    <span>Delete</span>
                                  </button>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Creator info: simplified avatar & name */}
                    {rel.authorName && (
                      <div
                        style={{
                          alignSelf: 'stretch',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          gap: '6px',
                          display: 'inline-flex',
                        }}
                      >
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            background: '#353535',
                            borderRadius: '1000px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <span
                            style={{
                              fontSize: '8px',
                              fontFamily: "'Season Mix', serif",
                              fontWeight: 500,
                              color: 'white',
                              lineHeight: 1,
                            }}
                          >
                            {(() => {
                              const name = rel.authorName.trim();
                              const parts = name.split(/\s+/).filter(Boolean);
                              if (parts.length === 0) return 'U';
                              if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
                              return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
                            })()}
                          </span>
                        </div>
                        <span
                          style={{
                            color: 'rgba(255, 255, 255, 0.60)',
                            fontSize: '11px',
                            fontFamily: 'Season Sans, sans-serif',
                            fontWeight: 400,
                          }}
                          className="truncate"
                          title={rel.authorName}
                        >
                          {rel.authorName}
                        </span>
                      </div>
                    )}

                    {/* Metadata Row: Divisi | Time (13:00) | Date (24/09/2026) */}
                    {(() => {
                      const divisionStr = rel.division || '-';
                      const [dateStr, timeStr = ''] = formatDateTime(
                        rel.updatedAt ?? rel.createdAt,
                      ).split(' ');

                      return (
                        <div
                          style={{
                            alignSelf: 'stretch',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            display: 'inline-flex',
                          }}
                        >
                          <div
                            style={{
                              flex: '1 1 0',
                              color: 'rgba(255, 255, 255, 0.50)',
                              fontSize: '12px',
                              fontFamily: 'Season Sans, sans-serif',
                              fontWeight: 400,
                              lineHeight: '24px',
                              letterSpacing: '0.24px',
                              wordWrap: 'break-word',
                            }}
                            className="truncate"
                            title={divisionStr}
                          >
                            {divisionStr}
                          </div>
                          <div
                            style={{
                              color: 'rgba(255, 255, 255, 0.50)',
                              fontSize: '12px',
                              fontFamily: 'Season Sans, sans-serif',
                              fontWeight: 400,
                              lineHeight: '24px',
                              letterSpacing: '0.24px',
                              wordWrap: 'break-word',
                            }}
                          >
                            {timeStr}
                          </div>
                          <div
                            style={{
                              color: 'rgba(255, 255, 255, 0.50)',
                              fontSize: '12px',
                              fontFamily: 'Season Sans, sans-serif',
                              fontWeight: 400,
                              lineHeight: '24px',
                              letterSpacing: '0.24px',
                              wordWrap: 'break-word',
                            }}
                          >
                            {dateStr}
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Divider Line */}
                  <div
                    style={{
                      alignSelf: 'stretch',
                      height: '1px',
                      backgroundColor: '#2A2A2A',
                    }}
                  />
                </div>
              );
            })
          )}
        </>
      )}
    </>
  );
}
