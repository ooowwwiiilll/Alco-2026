import type { Dispatch, SetStateAction } from 'react';
import { X } from 'lucide-react';
import { type DivisionStatus } from '../../types';

export interface AddDivisionDialogProps {
  addDivisionForm: { name: string; status: 'Active' | 'Inactive' };
  isAddDivisionModalOpen: boolean;
  isSavingDivision: boolean;
  onAddDivision: (name: string, description?: string, status?: DivisionStatus) => Promise<void>;
  setAddDivisionForm: Dispatch<SetStateAction<{ name: string; status: 'Active' | 'Inactive' }>>;
  setDivisionFeedback: Dispatch<SetStateAction<string | null>>;
  setIsAddDivisionModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsSavingDivision: Dispatch<SetStateAction<boolean>>;
}

export function AddDivisionDialog({
  addDivisionForm,
  isAddDivisionModalOpen,
  isSavingDivision,
  onAddDivision,
  setAddDivisionForm,
  setDivisionFeedback,
  setIsAddDivisionModalOpen,
  setIsSavingDivision,
}: AddDivisionDialogProps) {
  return (
    <>
      {/* Add Division Modal */}
      {isAddDivisionModalOpen && (
        <div
          className="fixed inset-0 z-[100050] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsAddDivisionModalOpen(false)}
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
              <h3 className="text-lg font-semibold text-white">Add Division</h3>
              <button
                type="button"
                onClick={() => setIsAddDivisionModalOpen(false)}
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
                  value={addDivisionForm.name}
                  onChange={(e) =>
                    setAddDivisionForm((prev) => ({ ...prev, name: e.target.value }))
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
                    {addDivisionForm.status === 'Active'
                      ? 'Division is active and selectable'
                      : 'Division is inactive'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setAddDivisionForm((prev) => ({
                      ...prev,
                      status: prev.status === 'Active' ? 'Inactive' : 'Active',
                    }))
                  }
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                    addDivisionForm.status === 'Active' ? 'bg-[#00DF81]' : 'bg-[#444444]'
                  }`}
                >
                  <div
                    className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      addDivisionForm.status === 'Active' ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#333333]">
              <button
                type="button"
                onClick={() => setIsAddDivisionModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#333333] hover:bg-[#404040] text-stone-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!addDivisionForm.name.trim() || isSavingDivision}
                onClick={async () => {
                  const cleanName = addDivisionForm.name.trim();
                  if (!cleanName || !onAddDivision) return;
                  try {
                    setIsSavingDivision(true);
                    await onAddDivision(cleanName, undefined, addDivisionForm.status);
                    setDivisionFeedback(`Divisi "${cleanName}" berhasil ditambahkan.`);
                    setTimeout(() => setDivisionFeedback(null), 3500);
                    setIsAddDivisionModalOpen(false);
                    setAddDivisionForm({ name: '', status: 'Active' });
                  } catch (err) {
                    console.error('Add division error:', err);
                  } finally {
                    setIsSavingDivision(false);
                  }
                }}
                className="px-5 py-2 rounded-xl bg-white hover:bg-stone-200 text-black text-xs font-medium transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
              >
                {isSavingDivision ? (
                  <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <span>Save</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
