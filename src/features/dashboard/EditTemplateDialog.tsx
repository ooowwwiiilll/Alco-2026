import type { Dispatch, SetStateAction } from 'react';
import { X, Check, Edit3 } from 'lucide-react';
import { type PageTemplate } from '../../types';

export interface EditTemplateDialogProps {
  editTemplateCategory: string;
  editTemplateDesc: string;
  editTemplateName: string;
  editingTemplate: PageTemplate | null;
  isAddingCategory: boolean;
  isEditTemplateCategoryMode: boolean;
  newCategoryInput: string;
  onAddTemplateCategory: (category: string) => void;
  onEditPageTemplate: (
    templateId: string,
    newName: string,
    newDesc?: string,
    newCategory?: string,
  ) => void;
  onSelectPageTemplate: (pt: PageTemplate) => void;
  setDeleteConfirmCategory: Dispatch<SetStateAction<string | null>>;
  setEditTemplateCategory: Dispatch<SetStateAction<string>>;
  setEditTemplateDesc: Dispatch<SetStateAction<string>>;
  setEditTemplateName: Dispatch<SetStateAction<string>>;
  setEditingTemplate: Dispatch<SetStateAction<PageTemplate | null>>;
  setIsAddingCategory: Dispatch<SetStateAction<boolean>>;
  setIsEditTemplateCategoryMode: Dispatch<SetStateAction<boolean>>;
  setNewCategoryInput: Dispatch<SetStateAction<string>>;
  templateCategories: string[];
}

export function EditTemplateDialog({
  editTemplateCategory,
  editTemplateDesc,
  editTemplateName,
  editingTemplate,
  isAddingCategory,
  isEditTemplateCategoryMode,
  newCategoryInput,
  onAddTemplateCategory,
  onEditPageTemplate,
  onSelectPageTemplate,
  setDeleteConfirmCategory,
  setEditTemplateCategory,
  setEditTemplateDesc,
  setEditTemplateName,
  setEditingTemplate,
  setIsAddingCategory,
  setIsEditTemplateCategoryMode,
  setNewCategoryInput,
  templateCategories,
}: EditTemplateDialogProps) {
  return (
    <>
      {/* Edit Template Modal for Manager / Admin */}
      {editingTemplate && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-150"
          onClick={() => setEditingTemplate(null)}
        >
          <div
            style={{
              background: '#212121',
              borderRadius: '20px',
              border: '1px solid #3F3F3F',
              width: '100%',
              maxWidth: '460px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
            className="shadow-2xl animate-in zoom-in-95 duration-150 select-none font-season-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-white">Edit Template</h3>
                <p className="text-xs text-stone-400 mt-1">
                  Change template name or description, or open in Canvas to edit components.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEditingTemplate(null)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-3.5">
              <div>
                <label className="text-xs text-stone-300 font-medium block mb-1.5">
                  Nama Template
                </label>
                <input
                  type="text"
                  value={editTemplateName}
                  onChange={(e) => setEditTemplateName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141414] border border-[#3F3F3F] text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="Nama template..."
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs text-stone-300 font-medium block">
                    Kategori Template
                  </label>
                  {templateCategories.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setIsEditTemplateCategoryMode((prev) => !prev)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        isEditTemplateCategoryMode
                          ? 'bg-teal-500/20 text-teal-300 border border-teal-500/50 shadow-sm'
                          : 'text-stone-400 hover:text-white hover:bg-white/5 border border-transparent'
                      }`}
                      title={isEditTemplateCategoryMode ? 'Selesai edit kategori' : 'Edit kategori'}
                    >
                      {isEditTemplateCategoryMode ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-teal-400" />
                          <span>Selesai</span>
                        </>
                      ) : (
                        <>
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {templateCategories.map((cat) => {
                    const isSelected = editTemplateCategory.toUpperCase() === cat;
                    return (
                      <div
                        key={cat}
                        className={`group inline-flex items-center rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                          isSelected
                            ? 'bg-teal-500/30 text-teal-300 border border-teal-500/50 shadow-sm'
                            : 'bg-[#141414] text-stone-400 hover:text-white border border-[#3F3F3F]'
                        } ${isEditTemplateCategoryMode && templateCategories.length > 1 ? 'border-dashed border-stone-500' : ''}`}
                      >
                        <button
                          type="button"
                          onClick={() => setEditTemplateCategory(cat)}
                          className={`py-1.5 cursor-pointer transition-colors ${
                            isEditTemplateCategoryMode && templateCategories.length > 1
                              ? 'pl-3 pr-1'
                              : 'px-3'
                          }`}
                        >
                          {cat}
                        </button>
                        {isEditTemplateCategoryMode && templateCategories.length > 1 && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteConfirmCategory(cat);
                            }}
                            className={`pr-2 pl-0.5 py-1.5 cursor-pointer hover:text-rose-400 transition-all ${
                              isSelected
                                ? 'text-teal-300 hover:text-rose-400'
                                : 'text-stone-400 hover:text-rose-400'
                            }`}
                            title={`Hapus kategori ${cat}`}
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                  {!isAddingCategory ? (
                    <button
                      type="button"
                      onClick={() => setIsAddingCategory(true)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase bg-[#141414] text-teal-400 hover:text-teal-300 border border-teal-500/50 transition-all cursor-pointer"
                    >
                      + Add
                    </button>
                  ) : (
                    <div className="flex items-center gap-1">
                      <input
                        type="text"
                        value={newCategoryInput}
                        onChange={(e) => setNewCategoryInput(e.target.value)}
                        className="px-2 py-1.5 rounded-lg bg-[#141414] border border-[#3F3F3F] text-white text-xs w-24 focus:outline-none focus:border-teal-500"
                        placeholder="New category"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && newCategoryInput.trim()) {
                            const newCat = newCategoryInput.trim().toUpperCase();
                            if (!templateCategories.includes(newCat)) onAddTemplateCategory(newCat);
                            setEditTemplateCategory(newCat);
                            setNewCategoryInput('');
                            setIsAddingCategory(false);
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (newCategoryInput.trim()) {
                            const newCat = newCategoryInput.trim().toUpperCase();
                            if (!templateCategories.includes(newCat)) onAddTemplateCategory(newCat);
                            setEditTemplateCategory(newCat);
                          }
                          setNewCategoryInput('');
                          setIsAddingCategory(false);
                        }}
                        className="p-1.5 rounded-lg bg-teal-500 text-black cursor-pointer"
                      >
                        <Check className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="text-xs text-stone-300 font-medium block mb-1.5">
                  Deskripsi (Opsional)
                </label>
                <textarea
                  value={editTemplateDesc}
                  onChange={(e) => setEditTemplateDesc(e.target.value)}
                  rows={3}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141414] border border-[#3F3F3F] text-white text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  placeholder="Deskripsi template..."
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-2.5 pt-3 border-t border-[#3F3F3F]/80">
              <button
                type="button"
                onClick={() => {
                  const tpl = editingTemplate;
                  setEditingTemplate(null);
                  onSelectPageTemplate(tpl);
                }}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-stone-200 hover:text-white text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Edit di Canvas</span>
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditingTemplate(null)}
                  className="px-3.5 py-2 rounded-xl bg-[#333333] hover:bg-[#404040] text-stone-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (onEditPageTemplate && editingTemplate) {
                      onEditPageTemplate(
                        editingTemplate.id,
                        editTemplateName,
                        editTemplateDesc,
                        editTemplateCategory,
                      );
                    }
                    setEditingTemplate(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-medium transition-colors cursor-pointer shadow-lg shadow-teal-900/30"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
