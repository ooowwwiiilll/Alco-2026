import type { ReactElement } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { EmptyState } from '../../components/EmptyState';
import emptyStateImg from '../../assets/images/empty_state.png';
import { createPortal } from 'react-dom';
import { Trash2 } from 'lucide-react';
import { SectionThumbnail } from '../../components/SectionThumbnail';
import { type ReleaseItem, type PageTemplate } from '../../types';

export interface ReleaseGridProps {
  activeMenuId: string | null;
  filteredReleases: ReleaseItem[];
  formatDateStr: (dateVal?: string) => string;
  gridResponsiveClass:
    | 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 min-[1920px]:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 w-full animate-in fade-in duration-200'
    | 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[1920px]:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 w-full animate-in fade-in duration-200';
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

export function ReleaseGrid({
  activeMenuId,
  filteredReleases,
  formatDateStr,
  gridResponsiveClass,
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
}: ReleaseGridProps) {
  return (
    <>
      <div className={gridResponsiveClass}>
        {filteredReleases.length === 0 ? (
          <div className="col-span-full">
            <EmptyState
              headline={searchQuery.trim() ? 'No releases found' : 'No releases available'}
              subheadline={
                searchQuery.trim()
                  ? 'No releases match your search criteria'
                  : 'No releases match the current filter'
              }
              imageSrc={emptyStateImg}
            />
          </div>
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
                    width: '100%',
                    padding: '16px',
                    background: '#1A1A1A',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                  }}
                  className="group hover:ring-1 hover:ring-white/20 transition-all relative select-none shadow-lg"
                >
                  {/* Top Row: Title + Status Pill + 3-dots Menu */}
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        alignSelf: 'stretch',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '16px',
                        display: 'inline-flex',
                      }}
                    >
                      {/* Title */}
                      <div
                        style={{
                          flex: '1 1 0',
                          color: 'white',
                          fontSize: '14px',
                          fontFamily: "'Season Sans', sans-serif",
                          fontWeight: 400,
                          lineHeight: '20px',
                          letterSpacing: '0.28px',
                          wordWrap: 'break-word',
                        }}
                        className="truncate"
                        title={rel.name}
                      >
                        {rel.name}
                      </div>

                      {/* Status Pill Badge */}
                      <div style={{ flexShrink: 0 }}>{renderStatusPill(rel.status)}</div>

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

                  {/* Middle Preview: Black outer container with 157px height and scaled canvas page preview */}
                  <div
                    style={{
                      alignSelf: 'stretch',
                      height: '157px',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      backgroundColor: 'black',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: 'calc(100% - 20px)',
                        height: '148px',
                        marginTop: '9px',
                        borderRadius: '11px',
                        overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: '#0a0a0a',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.7)',
                      }}
                    >
                      <SectionThumbnail sections={rel.sections} />
                    </div>
                  </div>

                  {/* Bottom Row: Author Avatar + Name + Division + Dot + Date & Preview CTA */}
                  <div
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '8px',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        flex: '1 1 0',
                        borderRadius: '12px',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '8px',
                        display: 'flex',
                        minWidth: 0,
                      }}
                    >
                      {/* Author Avatar circle (32x32) with Season Mix 420 Initials */}
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          paddingLeft: '8px',
                          paddingRight: '8px',
                          paddingTop: '6px',
                          paddingBottom: '6px',
                          background: '#353535',
                          borderRadius: '1000px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '8px',
                          display: 'flex',
                          flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: '12px',
                            fontFamily: "'Season Mix', serif",
                            fontWeight: 420,
                            wordWrap: 'break-word',
                            lineHeight: 1,
                          }}
                        >
                          {(() => {
                            const name = rel.authorName || 'Stella';
                            const parts = name.trim().split(/\s+/).filter(Boolean);
                            if (parts.length === 0) return 'SA';
                            if (parts.length === 1)
                              return parts[0].length >= 2
                                ? parts[0].substring(0, 2).toUpperCase()
                                : parts[0].toUpperCase();
                            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
                          })()}
                        </div>
                      </div>

                      {/* Author Name and Subtitle (Division • Date) */}
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
                            fontFamily: "'Season Sans', sans-serif",
                            fontWeight: 400,
                            lineHeight: '20px',
                            letterSpacing: '0.28px',
                            wordWrap: 'break-word',
                          }}
                          className="truncate max-w-full"
                        >
                          {rel.authorName || 'Stella'}
                        </div>
                        <div
                          style={{
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '4px',
                            display: 'inline-flex',
                            maxWidth: '100%',
                          }}
                        >
                          <div
                            style={{
                              color: 'rgba(255, 255, 255, 0.50)',
                              fontSize: '12px',
                              fontFamily: "'Season Sans', sans-serif",
                              fontWeight: 400,
                              letterSpacing: '0.24px',
                              wordWrap: 'break-word',
                            }}
                            className="truncate"
                          >
                            {rel.division || 'Wealth & Investment'}
                          </div>
                          <div
                            style={{
                              width: '2px',
                              height: '2px',
                              background: '#D9D9D9',
                              borderRadius: '9999px',
                              flexShrink: 0,
                            }}
                          />
                          <div
                            style={{
                              color: 'rgba(255, 255, 255, 0.50)',
                              fontSize: '12px',
                              fontFamily: "'Season Sans', sans-serif",
                              fontWeight: 400,
                              letterSpacing: '0.24px',
                              wordWrap: 'break-word',
                              flexShrink: 0,
                            }}
                          >
                            {formatDateStr(rel.createdAt)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Text link "Preview" or "Edit" */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
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
                      className="text-stone-300 hover:text-white transition-colors text-xs font-medium cursor-pointer shrink-0 py-1 px-1.5 rounded hover:bg-white/5"
                    >
                      {isAuthor ? 'Edit' : 'Preview'}
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
