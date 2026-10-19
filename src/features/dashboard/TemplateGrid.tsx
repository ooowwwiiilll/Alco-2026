import type { Dispatch, SetStateAction } from 'react';
import { EmptyState } from '../../components/EmptyState';
import emptyStateImg from '../../assets/images/empty_state.png';
import { pageTemplateCategory as getPageTemplateCategory } from '../../domain/templates';
import { createPortal } from 'react-dom';
import { Edit3, Trash2 } from 'lucide-react';
import { SectionThumbnail } from '../../components/SectionThumbnail';
import { type PageTemplate } from '../../types';

export interface TemplateGridProps {
  activeMenuId: string | null;
  filteredTemplates: PageTemplate[];
  gridResponsiveClass:
    | 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 min-[1920px]:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 w-full animate-in fade-in duration-200'
    | 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[1920px]:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 w-full animate-in fade-in duration-200';
  isManagerOrAdmin: boolean;
  onSelectPageTemplate: (pt: PageTemplate) => void;
  searchQuery: string;
  setActiveMenuId: Dispatch<SetStateAction<string | null>>;
  setDeleteConfirmTemplate: Dispatch<SetStateAction<PageTemplate | null>>;
  setEditTemplateCategory: Dispatch<SetStateAction<string>>;
  setEditTemplateDesc: Dispatch<SetStateAction<string>>;
  setEditTemplateName: Dispatch<SetStateAction<string>>;
  setEditingTemplate: Dispatch<SetStateAction<PageTemplate | null>>;
  setPreviewTemplate: Dispatch<SetStateAction<PageTemplate | null>>;
  templateCategoryFilter: string;
}

export function TemplateGrid({
  activeMenuId,
  filteredTemplates,
  gridResponsiveClass,
  isManagerOrAdmin,
  onSelectPageTemplate,
  searchQuery,
  setActiveMenuId,
  setDeleteConfirmTemplate,
  setEditTemplateCategory,
  setEditTemplateDesc,
  setEditTemplateName,
  setEditingTemplate,
  setPreviewTemplate,
  templateCategoryFilter,
}: TemplateGridProps) {
  return (
    <>
      <div className={gridResponsiveClass}>
        {filteredTemplates.length === 0 ? (
          <div className="col-span-full">
            <EmptyState
              headline={
                searchQuery.trim() || templateCategoryFilter !== 'all'
                  ? 'No templates found'
                  : 'No templates available'
              }
              subheadline={
                searchQuery.trim() || templateCategoryFilter !== 'all'
                  ? 'No templates match your filter or search criteria'
                  : 'No templates available yet'
              }
              imageSrc={emptyStateImg}
            />
          </div>
        ) : (
          filteredTemplates.map((pt, idx) => (
            <div
              key={pt.id}
              style={{
                width: '100%',
                padding: '16px',
                background: '#1A1A1A',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
              className="group hover:ring-1 hover:ring-white/20 transition-all relative select-none shadow-lg"
            >
              <div className="flex items-center justify-between gap-3">
                <div
                  style={{
                    color: 'white',
                    fontSize: '14px',
                    fontFamily: "'Season Sans', sans-serif",
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '0.28px',
                  }}
                  className="truncate flex-1"
                  title={pt.name}
                >
                  {pt.name}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 uppercase tracking-wider font-semibold shrink-0">
                    {getPageTemplateCategory(pt)}
                  </span>

                  {/* 3-dots Menu Button for Role Manager & Admin */}
                  {isManagerOrAdmin && (
                    <div
                      className="relative flex-shrink-0"
                      data-card-menu="true"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenuId(activeMenuId === pt.id ? null : pt.id);
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

                      {activeMenuId === pt.id && (
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
                            <button
                              type="button"
                              onClick={() => {
                                setActiveMenuId(null);
                                setEditingTemplate(pt);
                                setEditTemplateName(pt.name);
                                setEditTemplateDesc(pt.description || '');
                                setEditTemplateCategory(getPageTemplateCategory(pt));
                              }}
                              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-stone-200 hover:text-white hover:bg-white/10 text-left cursor-pointer transition-colors"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              <span>Edit</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setActiveMenuId(null);
                                setDeleteConfirmTemplate(pt);
                              }}
                              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-rose-400 hover:bg-rose-500/10 text-left cursor-pointer transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Delete</span>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div
                style={{
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
                  <SectionThumbnail sections={pt.sections} />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-400">
                {/* Label Jumlah Komponen di Kiri Bawah */}
                <div className="flex items-center">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-stone-300">
                    {pt.sections?.length || 0} Components
                  </span>
                </div>

                {/* Actions Preview, Use di Kanan Bawah */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPreviewTemplate(pt)}
                    className="text-stone-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectPageTemplate(pt)}
                    className="text-white hover:text-teal-300 font-medium transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Use
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
