import type { SidebarTab } from '../types';
import type { Dispatch, RefObject, SetStateAction } from 'react';

import { ChevronDown, Check, Trash2, Plus, X, Edit3 } from 'lucide-react';
import { createPortal } from 'react-dom';
import { type PageTemplate } from '../../../types';

export interface TemplateCategoryFilterProps {
  activeTab: SidebarTab;
  availableTemplateCategories: string[];
  getTemplateCategoryCount: (category: string) => number;
  handleAddCategoryFromDropdown: () => void;
  isAddingCategoryDropdown: boolean;
  isEditCategoryFilterDropdownMode: boolean;
  isTemplateCategoryDropdownOpen: boolean;
  newCategoryDropdownInput: string;
  pageTemplates: PageTemplate[];
  setDeleteConfirmCategory: Dispatch<SetStateAction<string | null>>;
  setIsAddingCategoryDropdown: Dispatch<SetStateAction<boolean>>;
  setIsEditCategoryFilterDropdownMode: Dispatch<SetStateAction<boolean>>;
  setIsTemplateCategoryDropdownOpen: Dispatch<SetStateAction<boolean>>;
  setNewCategoryDropdownInput: Dispatch<SetStateAction<string>>;
  setTemplateCategoryFilter: Dispatch<SetStateAction<string>>;
  templateCategoryContainerRef: RefObject<HTMLDivElement | null>;
  templateCategoryFilter: string;
}

export function TemplateCategoryFilter({
  activeTab,
  availableTemplateCategories,
  getTemplateCategoryCount,
  handleAddCategoryFromDropdown,
  isAddingCategoryDropdown,
  isEditCategoryFilterDropdownMode,
  isTemplateCategoryDropdownOpen,
  newCategoryDropdownInput,
  pageTemplates,
  setDeleteConfirmCategory,
  setIsAddingCategoryDropdown,
  setIsEditCategoryFilterDropdownMode,
  setIsTemplateCategoryDropdownOpen,
  setNewCategoryDropdownInput,
  setTemplateCategoryFilter,
  templateCategoryContainerRef,
  templateCategoryFilter,
}: TemplateCategoryFilterProps) {
  return (
    <>
      {/* Template Category Dropdown Filter */}
      {activeTab === 'templates' && (
        <div ref={templateCategoryContainerRef} className="relative">
          <button
            type="button"
            onClick={() => setIsTemplateCategoryDropdownOpen((prev) => !prev)}
            style={{
              height: '44px',
              paddingLeft: '16px',
              paddingRight: '16px',
              background: '#353535',
              borderRadius: '48px',
              outline: '1px #353535 solid',
              outlineOffset: '-1px',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '12px',
              display: 'flex',
              border: 'none',
              cursor: 'pointer',
            }}
            className="hover:bg-[#404040] select-none text-white transition-all"
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
            >
              {templateCategoryFilter === 'all'
                ? 'All Categories'
                : templateCategoryFilter.toUpperCase()}
            </div>
            <ChevronDown
              className={`w-4 h-4 text-white transition-transform ${
                isTemplateCategoryDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Template Category Popover Menu */}
          {isTemplateCategoryDropdownOpen && (
            <>
              {createPortal(
                <div
                  className="fixed inset-0 z-40 bg-transparent"
                  onMouseDown={() => {
                    setIsTemplateCategoryDropdownOpen(false);
                    setIsEditCategoryFilterDropdownMode(false);
                  }}
                  onTouchStart={() => {
                    setIsTemplateCategoryDropdownOpen(false);
                    setIsEditCategoryFilterDropdownMode(false);
                  }}
                  onClick={() => {
                    setIsTemplateCategoryDropdownOpen(false);
                    setIsEditCategoryFilterDropdownMode(false);
                  }}
                />,
                document.body,
              )}
              <div
                style={{
                  background: '#212121',
                  border: '1px solid #3F3F3F',
                  borderRadius: '16px',
                  padding: '6px',
                  maxHeight: '340px',
                }}
                className="absolute right-0 top-full mt-2 w-60 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 font-season-sans overflow-y-auto scrollbar-thin"
              >
                <button
                  type="button"
                  onClick={() => {
                    setTemplateCategoryFilter('all');
                    setIsTemplateCategoryDropdownOpen(false);
                    setIsEditCategoryFilterDropdownMode(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                    templateCategoryFilter === 'all'
                      ? 'bg-[#353535] text-white font-medium'
                      : 'text-stone-300 hover:bg-[#2c2c2c]'
                  }`}
                >
                  <span>All Categories</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-stone-300">
                      {pageTemplates.length}
                    </span>
                    {templateCategoryFilter === 'all' && (
                      <Check className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>
                </button>

                {availableTemplateCategories.map((cat) => {
                  const count = getTemplateCategoryCount(cat);
                  const isSelected = templateCategoryFilter.toLowerCase() === cat.toLowerCase();
                  return (
                    <div
                      key={cat}
                      onClick={() => {
                        setTemplateCategoryFilter(cat);
                        setIsTemplateCategoryDropdownOpen(false);
                        setIsEditCategoryFilterDropdownMode(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer text-left group ${
                        isSelected
                          ? 'bg-[#353535] text-white font-medium'
                          : 'text-stone-300 hover:bg-[#2c2c2c]'
                      }`}
                    >
                      <span className="truncate font-semibold tracking-wider text-[11px] pr-2">
                        {cat.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300">
                          {count}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                        {isEditCategoryFilterDropdownMode && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteConfirmCategory(cat);
                            }}
                            title={`Hapus kategori ${cat}`}
                            className="p-1 rounded text-stone-400 hover:text-rose-400 hover:bg-rose-500/20 transition-all cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Add and Edit Category Section inside Dropdown */}
                <div className="border-t border-[#3F3F3F]/60 mt-1 pt-1 flex items-center justify-between gap-1">
                  {!isAddingCategoryDropdown ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsAddingCategoryDropdown(true);
                      }}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-teal-400 hover:bg-teal-500/10 rounded-lg transition-colors cursor-pointer font-medium"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Tambah</span>
                    </button>
                  ) : (
                    <div
                      className="flex items-center gap-1.5 p-1 flex-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="text"
                        value={newCategoryDropdownInput}
                        onChange={(e) => setNewCategoryDropdownInput(e.target.value)}
                        placeholder="Nama kategori..."
                        autoFocus
                        className="w-full px-2 py-1 text-xs bg-[#141414] border border-[#3F3F3F] rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-teal-500"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddCategoryFromDropdown();
                          } else if (e.key === 'Escape') {
                            setIsAddingCategoryDropdown(false);
                            setNewCategoryDropdownInput('');
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={handleAddCategoryFromDropdown}
                        className="p-1 rounded-lg bg-teal-500 hover:bg-teal-400 text-black cursor-pointer transition-colors shrink-0"
                        title="Simpan Kategori"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsAddingCategoryDropdown(false);
                          setNewCategoryDropdownInput('');
                        }}
                        className="p-1 rounded-lg bg-[#333] hover:bg-[#444] text-stone-300 hover:text-white cursor-pointer transition-colors shrink-0"
                        title="Batal"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {!isAddingCategoryDropdown && availableTemplateCategories.length > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEditCategoryFilterDropdownMode((prev) => !prev);
                      }}
                      className={`flex items-center gap-1 px-2.5 py-1.5 text-xs rounded-lg transition-colors cursor-pointer font-medium ${
                        isEditCategoryFilterDropdownMode
                          ? 'bg-teal-500/20 text-teal-300 border border-teal-500/50'
                          : 'text-stone-400 hover:text-white hover:bg-[#353535]'
                      }`}
                      title={
                        isEditCategoryFilterDropdownMode ? 'Selesai edit kategori' : 'Edit kategori'
                      }
                    >
                      {isEditCategoryFilterDropdownMode ? (
                        <>
                          <Check className="w-3 h-3 text-teal-400" />
                          <span>Selesai</span>
                        </>
                      ) : (
                        <>
                          <Edit3 className="w-3 h-3" />
                          <span>Edit</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
