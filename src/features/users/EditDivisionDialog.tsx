import type { Dispatch, SetStateAction } from 'react';
import { X } from 'lucide-react';
import { type DivisionItem } from '../../types';

export interface EditDivisionDialogProps {
  editDivisionForm: { name: string; status: 'Active' | 'Inactive' };
  editingDivision: DivisionItem | null;
  isEditDivisionModalOpen: boolean;
  isSavingDivision: boolean;
  onUpdateDivision: (id: string, updates: Partial<DivisionItem>) => Promise<void>;
  setDivisionFeedback: Dispatch<SetStateAction<string | null>>;
  setEditDivisionForm: Dispatch<SetStateAction<{ name: string; status: 'Active' | 'Inactive' }>>;
  setIsEditDivisionModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsSavingDivision: Dispatch<SetStateAction<boolean>>;
}

export function EditDivisionDialog({
  editDivisionForm,
  editingDivision,
  isEditDivisionModalOpen,
  isSavingDivision,
  onUpdateDivision,
  setDivisionFeedback,
  setEditDivisionForm,
  setIsEditDivisionModalOpen,
  setIsSavingDivision,
}: EditDivisionDialogProps) {
  return (
    <>
      {/* Edit Division Modal */}
      {isEditDivisionModalOpen && editingDivision && (
        <div
          className="fixed inset-0 z-[100050] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsEditDivisionModalOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '460px',
              background: '#212121',
              borderRadius: '20px',
              border: '1px solid #3F3F3F',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
            className="shadow-2xl animate-in zoom-in-95 duration-150 font-season-sans text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#333333] pb-3">
              <h3 className="text-lg font-semibold text-white">Edit Division</h3>
              <button
                type="button"
                onClick={() => setIsEditDivisionModalOpen(false)}
                className="text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {/* Division Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-stone-300 font-medium flex items-center gap-1">
                  <span>Division Name</span>
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={editDivisionForm.name}
                  onChange={(e) =>
                    setEditDivisionForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="e.g. Risk Management & Compliance"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#2D2D2D] text-white text-xs border border-[#404040] focus:outline-none focus:border-white transition-colors placeholder:text-stone-500"
                  autoFocus
                />
              </div>

              {/* Status Switch */}
              <div className="flex items-center justify-between py-1">
                <div>
                  <label className="text-xs text-stone-300 font-medium block">Status</label>
                  <span className="text-[11px] text-stone-400">
                    {editDivisionForm.status === 'Active'
                      ? 'Division is active and selectable'
                      : 'Division is inactive'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setEditDivisionForm((prev) => ({
                      ...prev,
                      status: prev.status === 'Active' ? 'Inactive' : 'Active',
                    }))
                  }
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                    editDivisionForm.status === 'Active' ? 'bg-[#00DF81]' : 'bg-[#444444]'
                  }`}
                >
                  <div
                    className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      editDivisionForm.status === 'Active' ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#333333]">
              <button
                type="button"
                onClick={() => setIsEditDivisionModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#333333] hover:bg-[#404040] text-stone-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!editDivisionForm.name.trim() || isSavingDivision}
                onClick={async () => {
                  const cleanName = editDivisionForm.name.trim();
                  if (!cleanName || !onUpdateDivision || !editingDivision) return;
                  try {
                    setIsSavingDivision(true);
                    await onUpdateDivision(editingDivision.id, {
                      name: cleanName,
                      status: editDivisionForm.status,
                    });
                    setDivisionFeedback(`Divisi "${cleanName}" berhasil diperbarui.`);
                    setTimeout(() => setDivisionFeedback(null), 3500);
                    setIsEditDivisionModalOpen(false);
                  } catch (err) {
                    console.error('Update division error:', err);
                  } finally {
                    setIsSavingDivision(false);
                  }
                }}
                className="px-5 py-2 rounded-xl bg-white hover:bg-stone-200 text-black text-xs font-medium transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
              >
                {isSavingDivision ? (
                  <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <span>Save Changes</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
