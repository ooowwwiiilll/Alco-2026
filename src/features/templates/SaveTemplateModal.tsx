import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Edit3, Plus } from 'lucide-react';
import { PlacedSection } from '../../types';
import { cleanComponentName } from '../../utils/format';
import { SectionThumbnail } from '../../components/SectionThumbnail';

interface SaveTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  placedSections: PlacedSection[];
  onSaveTemplate: (name: string, description: string, category: string) => Promise<void>;
  activeCanvasName: string | null;
  categories: string[];
  onAddCategory: (category: string) => void;
  onDeleteCategory: (category: string) => void;
}

export const SaveTemplateModal: React.FC<SaveTemplateModalProps> = ({
  isOpen,
  onClose,
  placedSections,
  onSaveTemplate,
  activeCanvasName,
  categories,
  onAddCategory,
  onDeleteCategory,
}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('LANDING');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryInput, setNewCategoryInput] = useState('');
  const [isEditCategoryMode, setIsEditCategoryMode] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const addCategoryInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (activeCanvasName && activeCanvasName !== 'New Canvas') {
        setName(activeCanvasName);
      } else if (placedSections.length > 0) {
        setName(cleanComponentName(placedSections[0]?.name) + ' Template');
      } else {
        setName('');
      }
      setError('');
      setIsAddingCategory(false);
      setNewCategoryInput('');
      setIsEditCategoryMode(false);
      setSelectedCategory(categories[0] || 'LANDING');

      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }, 50);
      return () => clearTimeout(timer);
    }
    // Only reset the form when it opens; categories may change while it is open.
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

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const finalName = cleanComponentName(name.trim());
    if (!finalName) {
      setError('Nama template harus diisi');
      return;
    }
    if (isSaving) return;
    setIsSaving(true);
    try {
      await onSaveTemplate(finalName, 'Template disimpan dari canvas', selectedCategory);
      setName('');
      setError('');
      onClose();
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : 'Gagal menyimpan template.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100000] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 select-none font-season-sans"
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          maxHeight: '90vh',
          padding: '24px',
          background: '#272727',
          borderRadius: '20px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          gap: '24px',
          display: 'inline-flex',
        }}
        className="shadow-2xl text-white relative animate-in zoom-in-95 duration-150 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Row */}
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
              fontFamily: "'Season Mix', serif",
              fontWeight: 420,
              wordWrap: 'break-word',
            }}
          >
            Save as Template
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              width: '24px',
              height: '24px',
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
            className="hover:opacity-75 transition-opacity"
            title="Tutup"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Content Section */}
        <form
          onSubmit={handleSubmit}
          style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '20px',
            display: 'flex',
            width: '100%',
          }}
          className="overflow-hidden"
        >
          <div
            style={{
              alignSelf: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '16px',
              display: 'flex',
              width: '100%',
              maxHeight: 'calc(90vh - 180px)',
              overflowY: 'auto',
              paddingRight: '4px',
            }}
            className="custom-scrollbar"
          >
            {/* Input Nama Template */}
            <div
              style={{
                alignSelf: 'stretch',
                height: '72px',
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
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Masukkan nama template..."
                style={{
                  alignSelf: 'stretch',
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '24px',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  padding: 0,
                  marginTop: '2px',
                }}
                className="placeholder-white/30"
              />
            </div>

            {error && <div className="text-xs text-red-400 font-medium px-1">{error}</div>}

            {/* Kategori Template Section */}
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

                {isAddingCategory ? (
                  <div className="flex items-center gap-1.5 bg-[#141414] border border-teal-500/50 rounded-lg px-2 py-1">
                    <input
                      ref={addCategoryInputRef}
                      type="text"
                      value={newCategoryInput}
                      onChange={(e) => setNewCategoryInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddCategory();
                        } else if (e.key === 'Escape') {
                          setIsAddingCategory(false);
                          setNewCategoryInput('');
                        }
                      }}
                      placeholder="Nama kategori..."
                      className="bg-transparent text-xs text-white outline-none w-24"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={handleAddCategory}
                      className="text-teal-400 hover:text-teal-300 p-0.5 cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsAddingCategory(false);
                        setNewCategoryInput('');
                      }}
                      className="text-stone-400 hover:text-white p-0.5 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingCategory(true);
                      setTimeout(() => addCategoryInputRef.current?.focus(), 50);
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase bg-[#141414] text-teal-400 hover:bg-teal-500/10 border border-teal-500/30 transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>ADD</span>
                  </button>
                )}
              </div>
            </div>

            {/* List Komponen yang Terpasang */}
            <div
              style={{
                alignSelf: 'stretch',
                overflow: 'hidden',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '16px',
                display: 'flex',
              }}
            >
              {/* Header Komponen */}
              <div
                style={{
                  alignSelf: 'stretch',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  display: 'inline-flex',
                }}
              >
                <div
                  style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '8px',
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '24px',
                      letterSpacing: '0.28px',
                      wordWrap: 'break-word',
                    }}
                  >
                    Komponen
                  </div>
                  <div
                    style={{
                      paddingLeft: '6px',
                      paddingRight: '6px',
                      background: 'rgba(255, 255, 255, 0.25)',
                      borderRadius: '24px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px',
                      display: 'flex',
                      minWidth: '16px',
                      height: '16px',
                    }}
                  >
                    <div
                      style={{
                        color: 'white',
                        fontSize: '8px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '16px',
                        letterSpacing: '0.80px',
                        wordWrap: 'break-word',
                      }}
                    >
                      {placedSections.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrollable List Items with Component Images / Thumbnail Previews */}
              <div
                style={{
                  alignSelf: 'stretch',
                  maxHeight: '220px',
                  overflowY: 'auto',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '12px',
                  display: 'flex',
                  paddingRight: '4px',
                }}
                className="custom-scrollbar"
              >
                {placedSections.length > 0 ? (
                  placedSections.map((sec, idx) => (
                    <div
                      key={sec.instanceId + idx}
                      style={{
                        alignSelf: 'stretch',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '12px',
                        display: 'inline-flex',
                        background: '#202020',
                        padding: '8px 12px',
                        borderRadius: '12px',
                      }}
                    >
                      {/* Section Thumbnail Box with Component Image Preview */}
                      <div
                        style={{
                          width: '80px',
                          height: '56px',
                          position: 'relative',
                          overflow: 'hidden',
                          borderRadius: '10px',
                          background: '#141414',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                        }}
                      >
                        <SectionThumbnail sections={[sec]} />
                      </div>
                      <div
                        style={{
                          flex: '1 1 0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          gap: '12px',
                          display: 'flex',
                        }}
                      >
                        <div
                          style={{
                            flex: '1 1 0',
                            color: 'white',
                            fontSize: '15px',
                            fontFamily: 'Season Sans, sans-serif',
                            fontWeight: 400,
                            lineHeight: '22px',
                            letterSpacing: '0.30px',
                            wordWrap: 'break-word',
                          }}
                          className="truncate"
                        >
                          {cleanComponentName(sec.name)}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-white/50 py-2">
                    Belum ada komponen di dalam canvas.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              alignSelf: 'stretch',
              height: '0px',
              outline: '1px #353535 solid',
              outlineOffset: '-0.50px',
            }}
          />

          {/* Simpan Button Row */}
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <button
              type="submit"
              disabled={!name.trim()}
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
                border: 'none',
                cursor: name.trim() ? 'pointer' : 'not-allowed',
                opacity: name.trim() ? 1 : 0.5,
              }}
              className="hover:opacity-90 active:scale-95 transition-all select-none"
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
          </div>
        </form>
      </div>
    </div>
  );
};
