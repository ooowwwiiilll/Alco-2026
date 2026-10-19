import type { Dispatch, SetStateAction } from 'react';
import { Plus, MoreHorizontal, Edit2, Copy, Trash2 } from 'lucide-react';
import { type SidebarViewMode, type PageTemplate } from '../../../types';
import { DesktopScaledPreview, CustomPreviewIcon } from './SidebarPreviews';

export interface TemplateListProps {
  activeMoreMenuId: string | null;
  confirmDeleteAction: (
    title: string,
    description: string,
    onConfirm: () => void,
    confirmLabel?: string,
  ) => void;
  editItemName: string;
  editingItemId: string | null;
  filteredPageTemplates: PageTemplate[];
  handleSaveRename: (id: string, type: 'component' | 'template') => void;
  isProductRole: boolean;
  onDeletePageTemplate: (templateId: string) => void;
  onDuplicatePageTemplate: (templateId: string) => void;
  onLoadPageTemplate: (pageTemplate: PageTemplate) => void;
  setActiveMoreMenuId: Dispatch<SetStateAction<string | null>>;
  setEditItemName: Dispatch<SetStateAction<string>>;
  setEditingItemId: Dispatch<SetStateAction<string | null>>;
  setPreviewTemplateModal: Dispatch<SetStateAction<PageTemplate | null>>;
  viewMode: SidebarViewMode;
}

export function TemplateList({
  activeMoreMenuId,
  confirmDeleteAction,
  editItemName,
  editingItemId,
  filteredPageTemplates,
  handleSaveRename,
  isProductRole,
  onDeletePageTemplate,
  onDuplicatePageTemplate,
  onLoadPageTemplate,
  setActiveMoreMenuId,
  setEditItemName,
  setEditingItemId,
  setPreviewTemplateModal,
  viewMode,
}: TemplateListProps) {
  return (
    <>
      {/* VIEW 2: Templates List */}
      {viewMode === 'templates' && (
        <>
          {filteredPageTemplates.length === 0 ? (
            <div className="py-12 text-center w-full space-y-2">
              <p className="text-sm text-stone-400 font-season-sans">No templates found</p>
            </div>
          ) : (
            filteredPageTemplates.map((pt) => {
              const isRenaming = editingItemId === pt.id;
              const combinedHtml =
                pt.sections && pt.sections.length > 0
                  ? pt.sections.map((s) => s.htmlContent).join('')
                  : '';

              return (
                <div
                  key={pt.id}
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
                    onClick={() => onLoadPageTemplate(pt)}
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
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Plus className="w-3.5 h-3.5 text-white" />
                        </div>
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
                          Gunakan
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Action Icons */}
                  <div
                    style={{
                      alignSelf: 'stretch',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '16px',
                      display: 'inline-flex',
                    }}
                  >
                    {isRenaming ? (
                      <input
                        type="text"
                        autoFocus
                        value={editItemName}
                        onChange={(e) => setEditItemName(e.target.value)}
                        onBlur={() => handleSaveRename(pt.id, 'template')}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSaveRename(pt.id, 'template');
                          if (e.key === 'Escape') setEditingItemId(null);
                        }}
                        className="flex-1 bg-black/60 border border-white text-white text-xs px-2 py-1 rounded outline-none font-season-sans"
                      />
                    ) : (
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
                        className="truncate flex items-center gap-2"
                        title={pt.name}
                      >
                        <span className="truncate">{pt.name}</span>
                        {pt.category && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-teal-500/20 text-teal-300 uppercase tracking-wider font-semibold shrink-0">
                            {pt.category}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Eye / Preview Icon with Tooltip Preview */}
                    <div className="relative group/preview flex items-center justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewTemplateModal(pt);
                        }}
                        className="text-stone-300 hover:text-white transition-colors cursor-pointer"
                        title="Preview"
                      >
                        <CustomPreviewIcon className="w-4 h-4 text-white" />
                      </button>
                      <div className="absolute bottom-full mb-2 hidden group-hover/preview:flex items-center px-2 py-0.5 bg-[#222222] text-white text-[10px] font-season-sans rounded-md shadow-xl border border-white/10 whitespace-nowrap z-50 pointer-events-none animate-in fade-in duration-150">
                        Preview
                      </div>
                    </div>

                    {/* More Options Icon - Hidden for product role */}
                    {!isProductRole && (
                      <div className="relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMoreMenuId(activeMoreMenuId === pt.id ? null : pt.id);
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

                        {activeMoreMenuId === pt.id && (
                          <div
                            className="absolute right-0 bottom-full mb-1 w-36 bg-[#2a2a2a] border border-white/10 rounded-xl shadow-xl p-1 z-30 animate-in fade-in zoom-in-95 font-season-sans"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                setActiveMoreMenuId(null);
                                setEditingItemId(pt.id);
                                setEditItemName(pt.name);
                              }}
                              className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-white hover:bg-white/10 rounded-lg cursor-pointer text-left"
                            >
                              <Edit2 className="w-3.5 h-3.5 text-white" />
                              <span>Ubah Nama</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setActiveMoreMenuId(null);
                                onDuplicatePageTemplate(pt.id);
                              }}
                              className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-white hover:bg-white/10 rounded-lg cursor-pointer text-left"
                            >
                              <Copy className="w-3.5 h-3.5 text-stone-300" />
                              <span>Duplicate</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setActiveMoreMenuId(null);
                                confirmDeleteAction(
                                  'Delete',
                                  'Are you sure you want to delete? This action cannot be undone.',
                                  () => onDeletePageTemplate(pt.id),
                                  'Delete',
                                );
                              }}
                              className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-red-400 hover:bg-red-500/10 rounded-lg cursor-pointer text-left"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-red-400" />
                              <span>Delete</span>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
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
