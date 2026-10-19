import type { Dispatch, SetStateAction } from 'react';
import { EmptyState } from '../../components/EmptyState';
import emptyStateImg from '../../assets/images/empty_state.png';
import { SectionThumbnail } from '../../components/SectionThumbnail';
import { pageTemplateCategory as getPageTemplateCategory } from '../../domain/templates';
import { createPortal } from 'react-dom';
import { Edit3, Trash2 } from 'lucide-react';
import { type PageTemplate } from '../../types';

export interface TemplateTableProps {
  activeMenuId: string | null;
  filteredTemplates: PageTemplate[];
  formatDateStr: (dateVal?: string) => string;
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

export function TemplateTable({
  activeMenuId,
  filteredTemplates,
  formatDateStr,
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
}: TemplateTableProps) {
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
            className="grid grid-cols-[minmax(240px,3fr)_minmax(120px,1.4fr)_minmax(130px,1.4fr)_minmax(130px,1.4fr)_minmax(140px,1.6fr)] gap-4 sm:gap-6 items-center px-4 sm:px-6 bg-[#1e1e1e]/60 select-none"
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
                Category
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
                Components
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
            <div className="text-right sm:text-left pr-2">
              <span
                style={{
                  color: '#999999',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Action
              </span>
            </div>
          </div>

          {/* Table Data Rows */}
          {filteredTemplates.length === 0 ? (
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
          ) : (
            filteredTemplates.map((pt, idx) => (
              <div
                key={pt.id}
                onClick={() => onSelectPageTemplate(pt)}
                style={{
                  height: '56px',
                  borderBottom: '1px #353535 solid',
                }}
                className="grid grid-cols-[minmax(240px,3fr)_minmax(120px,1.4fr)_minmax(130px,1.4fr)_minmax(130px,1.4fr)_minmax(140px,1.6fr)] gap-4 sm:gap-6 items-center px-4 sm:px-6 hover:bg-[#2b2b2b] transition-colors group select-none cursor-pointer"
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
                    <SectionThumbnail sections={pt.sections} />
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
                    {pt.name}
                  </span>
                </div>

                {/* Category Column */}
                <div className="min-w-0">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 uppercase tracking-wider font-semibold inline-block">
                    {getPageTemplateCategory(pt)}
                  </span>
                </div>

                {/* Components Column */}
                <div className="min-w-0">
                  <span className="text-[12px] px-2.5 py-1 rounded-full bg-white/10 text-stone-200 font-season-sans inline-block">
                    {pt.sections?.length || 0} Components
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
                    {formatDateStr(pt.createdAt)}
                  </span>
                </div>

                {/* Action Column */}
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewTemplate(pt);
                    }}
                    className="text-xs text-stone-300 hover:text-white transition-colors cursor-pointer px-2 py-1 rounded hover:bg-white/5"
                  >
                    Preview
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPageTemplate(pt);
                    }}
                    className="text-xs text-white hover:text-teal-300 font-medium transition-colors cursor-pointer px-2 py-1 rounded hover:bg-white/5"
                  >
                    Use
                  </button>

                  {/* 3-dots Menu for Role Manager & Admin */}
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
            ))
          )}
        </div>
      </div>
    </>
  );
}
