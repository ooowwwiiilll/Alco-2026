import type { Dispatch, SetStateAction } from 'react';
import { Trash2 } from 'lucide-react';
import { type PageTemplate } from '../../types';

export interface DeletePageTemplateDialogProps {
  deleteConfirmTemplate: PageTemplate | null;
  onDeletePageTemplate: (templateId: string) => void;
  setDeleteConfirmTemplate: Dispatch<SetStateAction<PageTemplate | null>>;
}

export function DeletePageTemplateDialog({
  deleteConfirmTemplate,
  onDeletePageTemplate,
  setDeleteConfirmTemplate,
}: DeletePageTemplateDialogProps) {
  return (
    <>
      {/* Pop-up Confirmation Delete Page Template */}
      {deleteConfirmTemplate && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-150"
          onClick={() => setDeleteConfirmTemplate(null)}
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
                <h3 className="text-base font-semibold text-white">Delete</h3>
                <p className="text-xs text-stone-300 mt-1.5 leading-relaxed">
                  Are you sure you want to delete template{' '}
                  <span className="text-white font-semibold">"{deleteConfirmTemplate.name}"</span>?
                  This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#3F3F3F]/80">
              <button
                type="button"
                onClick={() => setDeleteConfirmTemplate(null)}
                className="px-4 py-2 rounded-xl bg-[#333333] hover:bg-[#404040] text-stone-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onDeletePageTemplate && deleteConfirmTemplate) {
                    onDeletePageTemplate(deleteConfirmTemplate.id);
                  }
                  setDeleteConfirmTemplate(null);
                }}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-medium transition-colors cursor-pointer shadow-lg shadow-rose-900/30"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
