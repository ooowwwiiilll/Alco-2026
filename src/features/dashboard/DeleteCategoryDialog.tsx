import type { Dispatch, SetStateAction } from 'react';
import { Trash2 } from 'lucide-react';

export interface DeleteCategoryDialogProps {
  deleteConfirmCategory: string | null;
  getTemplateCategoryCount: (category: string) => number;
  handleDeleteTemplateCategory: (catToDelete: string) => void;
  setDeleteConfirmCategory: Dispatch<SetStateAction<string | null>>;
}

export function DeleteCategoryDialog({
  deleteConfirmCategory,
  getTemplateCategoryCount,
  handleDeleteTemplateCategory,
  setDeleteConfirmCategory,
}: DeleteCategoryDialogProps) {
  return (
    <>
      {/* Pop-up Confirmation Delete Category */}
      {deleteConfirmCategory && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-150"
          onClick={() => setDeleteConfirmCategory(null)}
        >
          <div
            style={{
              background: '#212121',
              borderRadius: '20px',
              border: '1px solid #3F3F3F',
              width: '100%',
              maxWidth: '420px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
            className="shadow-2xl animate-in zoom-in-95 duration-150 select-none font-season-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-white">Hapus Kategori</h3>
                <p className="text-xs text-stone-300 mt-1.5 leading-relaxed">
                  Apakah Anda yakin ingin menghapus kategori{' '}
                  <span className="text-white font-semibold">"{deleteConfirmCategory}"</span>?
                  {getTemplateCategoryCount(deleteConfirmCategory) > 0 ? (
                    <span className="block mt-2 text-amber-300/90 bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-lg text-[11px] leading-normal">
                      Perhatian: {getTemplateCategoryCount(deleteConfirmCategory)} template dalam
                      kategori ini akan otomatis dialihkan ke kategori OTHERS.
                    </span>
                  ) : (
                    <span className="block mt-1 text-stone-400">
                      Kategori ini akan dihapus dari daftar kategori template.
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#3F3F3F]/80">
              <button
                type="button"
                onClick={() => setDeleteConfirmCategory(null)}
                className="px-4 py-2 rounded-xl bg-[#333333] hover:bg-[#404040] text-stone-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  handleDeleteTemplateCategory(deleteConfirmCategory);
                  setDeleteConfirmCategory(null);
                }}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-medium transition-colors cursor-pointer shadow-lg shadow-rose-900/30"
              >
                Hapus Kategori
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
