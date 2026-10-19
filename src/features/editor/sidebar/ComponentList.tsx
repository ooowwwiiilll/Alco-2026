import type { Dispatch, DragEvent, SetStateAction } from 'react';
import { Plus, MoreHorizontal, Edit2, Trash2 } from 'lucide-react';
import { type SidebarViewMode, type SectionTemplate } from '../../../types';
import { DesktopScaledPreview, CustomPreviewIcon } from './SidebarPreviews';

export interface ComponentListProps {
  activeMoreMenuId: string | null;
  confirmDeleteAction: (
    title: string,
    description: string,
    onConfirm: () => void,
    confirmLabel?: string,
  ) => void;
  editItemName: string;
  editingItemId: string | null;
  filteredTemplates: SectionTemplate[];
  handleDragStart: (e: DragEvent, template: SectionTemplate) => void;
  handleSaveRename: (id: string, type: 'component' | 'template') => void;
  isProductRole: boolean;
  onDeleteCustomTemplate: ((templateId: string) => void) | undefined;
  onSelectTemplate: (template: SectionTemplate) => void;
  setActiveMoreMenuId: Dispatch<SetStateAction<string | null>>;
  setEditItemName: Dispatch<SetStateAction<string>>;
  setEditingItemId: Dispatch<SetStateAction<string | null>>;
  setPreviewModalTemplate: Dispatch<SetStateAction<SectionTemplate | null>>;
  viewMode: SidebarViewMode;
}

export function ComponentList({
  activeMoreMenuId,
  confirmDeleteAction,
  editItemName,
  editingItemId,
  filteredTemplates,
  handleDragStart,
  handleSaveRename,
  isProductRole,
  onDeleteCustomTemplate,
  onSelectTemplate,
  setActiveMoreMenuId,
  setEditItemName,
  setEditingItemId,
  setPreviewModalTemplate,
  viewMode,
}: ComponentListProps) {
  return (
    <>
      {/* VIEW 1: Components List */}
      {viewMode === 'components' && (
        <>
          {isProductRole && (
            <div
              style={{
                width: '100%',
                padding: '16px',
                background: '#2A2215',
                borderRadius: '24px',
                outline: '1px #484848 solid',
                outlineOffset: '-1px',
                backdropFilter: 'blur(20px)',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '16px',
                display: 'inline-flex',
              }}
              className="mb-3 shrink-0 select-none"
            >
              <div
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '16px',
                  display: 'flex',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: '21px',
                      height: '18.38px',
                      left: '1.50px',
                      top: '2.81px',
                      position: 'absolute',
                    }}
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.5 0.5L20.5 18.5H0.5L10.5 0.5Z" fill="white" />
                    <path
                      d="M10.5 6.5V11.5M10.5 14.5V15"
                      stroke="#2A2215"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    width: '307px',
                    color: 'white',
                    fontSize: '14px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    wordWrap: 'break-word',
                    lineHeight: '20px',
                  }}
                >
                  Adding components to the canvas will make the design deviate from the standard
                  template.
                </div>
              </div>
            </div>
          )}
          {filteredTemplates.length === 0 ? (
            <div className="py-12 text-center w-full space-y-2">
              <p className="text-sm text-stone-400 font-season-sans">No components available</p>
            </div>
          ) : (
            filteredTemplates.map((template) => {
              const isRenaming = editingItemId === template.id;

              return (
                <div
                  key={template.id}
                  style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '12px',
                    display: 'flex',
                  }}
                >
                  {/* Preview Box with Hover Drag Overlay */}
                  <div
                    draggable
                    onDragStart={(e) => handleDragStart(e, template)}
                    onClick={() => onSelectTemplate(template)}
                    style={{
                      alignSelf: 'stretch',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '16px',
                      cursor: 'grab',
                    }}
                    className="group active:cursor-grabbing border border-white/5 hover:ring-1 hover:ring-white/20 transition-all"
                  >
                    <DesktopScaledPreview htmlContent={template.htmlContent} desktopWidth={1440} />

                    {/* Hover Overlay Button */}
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
                          Click / drag to Canvas
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Action Icons Row */}
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
                        onBlur={() => handleSaveRename(template.id, 'component')}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSaveRename(template.id, 'component');
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
                        className="truncate"
                        title={template.name}
                      >
                        {template.name}
                      </div>
                    )}

                    {/* Eye / Preview Icon (16x16) with Tooltip Preview */}
                    <div className="relative group/preview flex items-center justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewModalTemplate(template);
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

                    {/* More Options Icon (16x16 with 3 dots) - Hidden for product role */}
                    {!isProductRole && (
                      <div className="relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMoreMenuId(
                              activeMoreMenuId === template.id ? null : template.id,
                            );
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

                        {/* Dropdown Options */}
                        {activeMoreMenuId === template.id && (
                          <div
                            className="absolute right-0 bottom-full mb-1 w-36 bg-[#2a2a2a] border border-white/10 rounded-xl shadow-xl p-1 z-30 animate-in fade-in zoom-in-95 font-season-sans"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                setActiveMoreMenuId(null);
                                setEditingItemId(template.id);
                                setEditItemName(template.name);
                              }}
                              className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-white hover:bg-white/10 rounded-lg cursor-pointer text-left"
                            >
                              <Edit2 className="w-3.5 h-3.5 text-white" />
                              <span>Rename</span>
                            </button>
                            {template.isCustom && onDeleteCustomTemplate && (
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveMoreMenuId(null);
                                  confirmDeleteAction(
                                    'Delete',
                                    'Are you sure you want to delete? This action cannot be undone.',
                                    () => onDeleteCustomTemplate(template.id),
                                    'Delete',
                                  );
                                }}
                                className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-red-400 hover:bg-red-500/10 rounded-lg cursor-pointer text-left"
                              >
                                <Trash2 className="w-3.5 h-3.5 text-red-400" />
                                <span>Delete</span>
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Divider Line between items */}
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
