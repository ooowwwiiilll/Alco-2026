import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Edit3 } from 'lucide-react';

interface NewTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (templateName: string, category: string) => Promise<void>;
  categories: string[];
  onAddCategory: (category: string) => void;
  onDeleteCategory: (category: string) => void;
}

export const NewTemplateModal: React.FC<NewTemplateModalProps> = ({
  isOpen,
  onClose,
  onSave,
  categories,
  onAddCategory,
  onDeleteCategory,
}) => {
  const [templateName, setTemplateName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('LANDING');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryInput, setNewCategoryInput] = useState('');
  const [isEditCategoryMode, setIsEditCategoryMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTemplateName('');
      setIsAddingCategory(false);
      setNewCategoryInput('');
      setIsEditCategoryMode(false);
      setSelectedCategory(categories[0] || 'LANDING');
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
    // Categories may change while open; only reset the form when it opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAddCategory = () => {
    const trimmed = newCategoryInput.trim().toUpperCase();
    if (trimmed) {
      if (!categories.some((category) => category.toUpperCase() === trimmed))
        onAddCategory(trimmed);
      setSelectedCategory(trimmed);
    }
    setNewCategoryInput('');
    setIsAddingCategory(false);
  };

  const handleDeleteCategory = (catToDelete: string) => {
    if (categories.length <= 1) return;
    onDeleteCategory(catToDelete);
    if (selectedCategory.toUpperCase() === catToDelete.toUpperCase()) {
      setSelectedCategory(
        categories.find((c) => c.toUpperCase() !== catToDelete.toUpperCase()) || 'LANDING',
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = templateName.trim();
    if (!trimmed || isSaving) return;
    setIsSaving(true);
    try {
      await onSave(trimmed, selectedCategory || 'LANDING');
      onClose();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200 select-none cursor-pointer"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative z-10 max-w-[480px] w-full cursor-default"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: '16px',
          background: '#272727',
          borderRadius: '20px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          gap: '24px',
          display: 'inline-flex',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Header: Title & Close Button */}
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '24px',
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              flex: '1 1 0',
              color: 'white',
              fontSize: '27px',
              fontFamily: 'Season Mix, sans-serif',
              fontWeight: 420,
              wordWrap: 'break-word',
            }}
          >
            New Template
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            title="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form
          onSubmit={handleSubmit}
          style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            gap: '24px',
            display: 'flex',
          }}
        >
          {/* Input Block */}
          <div
            style={{
              alignSelf: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '16px',
              display: 'flex',
            }}
          >
            {/* Nama Template */}
            <div
              style={{
                alignSelf: 'stretch',
                minHeight: '72px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '12px',
                paddingBottom: '12px',
                background: '#202020',
                borderRadius: '12px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                display: 'flex',
                gap: '4px',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  color: 'rgba(255, 255, 255, 0.50)',
                  fontSize: '12px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '18px',
                  wordWrap: 'break-word',
                }}
              >
                Nama Template
              </div>
              <input
                ref={inputRef}
                type="text"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                placeholder=""
                autoFocus
                style={{
                  alignSelf: 'stretch',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '24px',
                  wordWrap: 'break-word',
                }}
                className="w-full text-white placeholder-white/20"
              />
            </div>

            {/* Kategori Template */}
            <div
              style={{
                alignSelf: 'stretch',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '12px',
                paddingBottom: '14px',
                background: '#202020',
                borderRadius: '12px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                display: 'flex',
                gap: '8px',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    fontSize: '12px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '18px',
                  }}
                >
                  Kategori Template
                </div>
                {categories.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setIsEditCategoryMode((prev) => !prev)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      isEditCategoryMode
                        ? 'bg-teal-500/20 text-teal-300 border border-teal-500/50 shadow-sm'
                        : 'text-stone-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                    title={isEditCategoryMode ? 'Selesai edit kategori' : 'Edit kategori'}
                  >
                    {isEditCategoryMode ? (
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
              <div className="flex items-center gap-2 flex-wrap w-full">
                {categories.map((cat) => {
                  const isSelected = selectedCategory.toUpperCase() === cat.toUpperCase();
                  return (
                    <div
                      key={cat}
                      className={`group inline-flex items-center rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                        isSelected
                          ? 'bg-teal-500/30 text-teal-300 border border-teal-500/50 shadow-sm'
                          : 'bg-[#141414] text-stone-400 hover:text-white border border-[#3F3F3F]'
                      } ${isEditCategoryMode && categories.length > 1 ? 'border-dashed border-stone-500' : ''}`}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`py-1.5 cursor-pointer transition-colors ${
                          isEditCategoryMode && categories.length > 1 ? 'pl-3 pr-1' : 'px-3'
                        }`}
                      >
                        {cat}
                      </button>
                      {isEditCategoryMode && categories.length > 1 && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteCategory(cat);
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
                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={newCategoryInput}
                      onChange={(e) => setNewCategoryInput(e.target.value)}
                      className="px-2.5 py-1.5 rounded-lg bg-[#141414] border border-[#3F3F3F] text-white text-xs w-28 focus:outline-none focus:border-teal-500"
                      placeholder="New category"
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddCategory();
                        } else if (e.key === 'Escape') {
                          setIsAddingCategory(false);
                          setNewCategoryInput('');
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleAddCategory}
                      className="p-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-black cursor-pointer transition-colors"
                      title="Tambah Kategori"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                alignSelf: 'stretch',
                height: '0px',
                outline: '1px #353535 solid',
                outlineOffset: '-0.50px',
                marginTop: '4px',
              }}
            />
          </div>

          {/* Simpan Button */}
          <button
            type="submit"
            disabled={!templateName.trim()}
            style={{
              width: '180px',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '12px',
              paddingBottom: '12px',
              background: 'white',
              borderRadius: '76px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              display: 'inline-flex',
              cursor: templateName.trim() ? 'pointer' : 'not-allowed',
              border: 'none',
              opacity: templateName.trim() ? 1 : 0.6,
            }}
            className="hover:bg-stone-200 active:scale-95 transition-all select-none"
          >
            <div
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: '16px',
                fontFamily: 'Season Sans, sans-serif',
                fontWeight: 400,
                wordWrap: 'break-word',
              }}
            >
              Simpan
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};
