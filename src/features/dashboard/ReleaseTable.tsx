import type { ReactElement } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { EmptyState } from '../../components/EmptyState';
import emptyStateImg from '../../assets/images/empty_state.png';
import { SectionThumbnail } from '../../components/SectionThumbnail';
import { createPortal } from 'react-dom';
import { Trash2 } from 'lucide-react';
import { type ReleaseItem, type PageTemplate } from '../../types';

export interface ReleaseTableProps {
  activeMenuId: string | null;
  filteredReleases: ReleaseItem[];
  formatDateStr: (dateVal?: string) => string;
  isManagerOrAdmin: boolean;
  isProductRole: boolean;
  isReleaseAuthor: (rel: ReleaseItem) => boolean;
  onPreviewRelease: (release: ReleaseItem) => void;
  onSelectRelease: (release: ReleaseItem) => void;
  renderStatusPill: (status?: string) => ReactElement;
  searchQuery: string;
  setActiveMenuId: Dispatch<SetStateAction<string | null>>;
  setDeleteConfirmItem: Dispatch<SetStateAction<ReleaseItem | null>>;
  setPreviewTemplate: Dispatch<SetStateAction<PageTemplate | null>>;
}

export function ReleaseTable({
  activeMenuId,
  filteredReleases,
  formatDateStr,
  isManagerOrAdmin,
  isProductRole,
  isReleaseAuthor,
  onPreviewRelease,
  onSelectRelease,
  renderStatusPill,
  searchQuery,
  setActiveMenuId,
  setDeleteConfirmItem,
  setPreviewTemplate,
}: ReleaseTableProps) {
  return (
    <>
      <div
        style={{
          outline: '1px #353535 solid',
          outlineOffset: '-1px',
          borderRadius: '12px',
          width: '100%',
        }}
        className="flex flex-col animate-in fade-in duration-200 bg-black/40 overflow-x-auto custom-scrollbar"
      >
        <div className="min-w-[850px] flex flex-col">
          {/* Header Row */}
          <div
            style={{
              height: '44px',
              borderBottom: '1px rgba(255, 255, 255, 0.10) solid',
            }}
            className="grid grid-cols-[minmax(240px,2.5fr)_minmax(120px,1.2fr)_minmax(140px,1.4fr)_minmax(140px,1.4fr)_minmax(180px,1.8fr)] gap-4 sm:gap-6 items-center px-4 sm:px-6 bg-[#1e1e1e]/60 select-none"
          >
            <div>
              <span
                style={{
                  color: '#999999',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Name
              </span>
            </div>
            <div>
              <span
                style={{
                  color: '#999999',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Last Update
              </span>
            </div>
            <div>
              <span
                style={{
                  color: '#999999',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Created By
              </span>
            </div>
            <div>
              <span
                style={{
                  color: '#999999',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Division
              </span>
            </div>
            <div className="flex items-center justify-between pr-2">
              <span
                style={{
                  color: '#999999',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Status
              </span>
              <span
                style={{
                  color: '#999999',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Actions
              </span>
            </div>
          </div>

          {/* Table Data Rows */}
          {filteredReleases.length === 0 ? (
            <EmptyState
              headline={searchQuery.trim() ? 'No releases found' : 'No releases available'}
              subheadline={
                searchQuery.trim()
                  ? 'No releases match your search criteria'
                  : 'No releases match the current filter'
              }
              imageSrc={emptyStateImg}
            />
          ) : (
            <>
              {filteredReleases.map((rel, idx) => {
                const isAuthor = isReleaseAuthor(rel);
                return (
                  <div
                    key={rel.id}
                    onClick={() => {
                      if (isAuthor) {
                        onSelectRelease(rel);
                      } else {
                        if (onPreviewRelease) {
                          onPreviewRelease(rel);
                        } else {
                          setPreviewTemplate({
                            id: rel.id,
                            name: rel.name,
                            description: rel.description,
                            createdAt: rel.createdAt,
                            sections: rel.sections || [],
                            thumbnail: rel.thumbnail,
                            thumbnailBg: rel.thumbnailBg,
                          });
                        }
                      }
                    }}
                    style={{
                      height: '56px',
                      borderBottom: '1px #353535 solid',
                    }}
                    className="grid grid-cols-[minmax(240px,2.5fr)_minmax(120px,1.2fr)_minmax(140px,1.4fr)_minmax(140px,1.4fr)_minmax(180px,1.8fr)] gap-4 sm:gap-6 items-center px-4 sm:px-6 hover:bg-[#2b2b2b] transition-colors group select-none cursor-pointer"
                  >
                    {/* Name Column with Image Preview */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div
                        style={{
                          width: '48px',
                          height: '34px',
                          backgroundColor: '#0a0a0a',
                          overflow: 'hidden',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          border: '1px solid #3F3F3F',
                        }}
                        className="shrink-0 shadow-sm"
                      >
                        <SectionThumbnail sections={rel.sections} />
                      </div>
                      <span
                        style={{
                          color: 'white',
                          fontSize: '15px',
                          fontFamily: "'Season Mix', serif",
                          fontWeight: 420,
                          wordWrap: 'break-word',
                        }}
                        className="truncate group-hover:text-teal-300 transition-colors"
                      >
                        {rel.name}
                      </span>
                    </div>

                    {/* Last Update Column */}
                    <div className="min-w-0">
                      <span
                        style={{
                          color: '#999999',
                          fontSize: '14px',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 400,
                        }}
                        className="truncate block"
                      >
                        {formatDateStr(rel.updatedAt || rel.createdAt)}
                      </span>
                    </div>

                    {/* Created By Column with Avatar Initial */}
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
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
                            fontSize: '10px',
                            fontFamily: "'Season Mix', serif",
                            fontWeight: 420,
                            color: 'white',
                          }}
                        >
                          {(() => {
                            const name = rel.authorName || 'Rian';
                            const parts = name.trim().split(/\s+/).filter(Boolean);
                            if (parts.length === 0) return 'SA';
                            if (parts.length === 1)
                              return parts[0].length >= 2
                                ? parts[0].substring(0, 2).toUpperCase()
                                : parts[0].toUpperCase();
                            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
                          })()}
                        </span>
                      </div>
                      <span
                        style={{
                          color: '#999999',
                          fontSize: '14px',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 400,
                        }}
                        className="truncate"
                      >
                        {rel.authorName || 'Rian'}
                      </span>
                    </div>

                    {/* Division Column */}
                    <div className="min-w-0">
                      <span
                        style={{
                          color: '#999999',
                          fontSize: '14px',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 400,
                        }}
                        className="truncate block pr-2"
                      >
                        {rel.division || 'Wealth & Investment'}
                      </span>
                    </div>

                    {/* Status Column & Preview CTA & 3-dots Menu */}
                    <div className="flex items-center justify-between gap-3 min-w-0 pr-2">
                      <div className="shrink-0">{renderStatusPill(rel.status)}</div>
                      <div className="flex items-center gap-3 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isAuthor) {
                              onSelectRelease(rel);
                            } else {
                              setPreviewTemplate({
                                id: rel.id,
                                name: rel.name,
                                description: rel.description,
                                createdAt: rel.createdAt,
                                sections: rel.sections || [],
                                thumbnail: rel.thumbnail,
                                thumbnailBg: rel.thumbnailBg,
                              });
                            }
                          }}
                          className="text-xs text-stone-300 hover:text-white transition-colors cursor-pointer px-2 py-1 rounded hover:bg-white/5"
                        >
                          {isAuthor ? 'Edit' : 'Preview'}
                        </button>

                        {/* 3-dots Menu Button */}
                        {!isProductRole && (
                          <div
                            className="relative flex-shrink-0"
                            data-card-menu="true"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveMenuId(activeMenuId === rel.id ? null : rel.id);
                              }}
                              style={{
                                width: '16px',
                                height: '16px',
                                position: 'relative',
                                overflow: 'hidden',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                              className="text-stone-400 hover:text-white transition-colors"
                              title="Menu Aksi"
                            >
                              <div
                                style={{
                                  width: '16px',
                                  height: '16px',
                                  position: 'relative',
                                  overflow: 'hidden',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '2px',
                                }}
                              >
                                <div
                                  style={{
                                    width: '2px',
                                    height: '2px',
                                    background: 'white',
                                    borderRadius: '50%',
                                  }}
                                />
                                <div
                                  style={{
                                    width: '2px',
                                    height: '2px',
                                    background: 'white',
                                    borderRadius: '50%',
                                  }}
                                />
                                <div
                                  style={{
                                    width: '2px',
                                    height: '2px',
                                    background: 'white',
                                    borderRadius: '50%',
                                  }}
                                />
                              </div>
                            </button>

                            {activeMenuId === rel.id && (
                              <>
                                {createPortal(
                                  <div
                                    className="fixed inset-0 z-40 bg-transparent"
                                    onMouseDown={() => setActiveMenuId(null)}
                                    onTouchStart={() => setActiveMenuId(null)}
                                    onClick={() => setActiveMenuId(null)}
                                  />,
                                  document.body,
                                )}
                                <div
                                  style={{
                                    background: '#212121',
                                    border: '1px solid #3F3F3F',
                                    borderRadius: '12px',
                                    padding: '6px',
                                    width: '180px',
                                  }}
                                  className="absolute right-0 top-full mt-1 shadow-2xl z-50 animate-in fade-in zoom-in-95 font-season-sans"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {isManagerOrAdmin && (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setActiveMenuId(null);
                                        setDeleteConfirmItem(rel);
                                      }}
                                      className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-rose-400 hover:bg-rose-500/10 text-left cursor-pointer transition-colors"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                      <span>Delete</span>
                                    </button>
                                  )}
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
