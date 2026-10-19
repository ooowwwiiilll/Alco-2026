import type { Dispatch, SetStateAction } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { type DivisionItem, type AppUser } from '../../types';

export interface DeleteDivisionDialogProps {
  deleteDivisionTarget: DivisionItem | null;
  isDeletingDivision: boolean;
  onDeleteDivision: (id: string) => Promise<void>;
  setDeleteDivisionTarget: Dispatch<SetStateAction<DivisionItem | null>>;
  setDivisionFeedback: Dispatch<SetStateAction<string | null>>;
  setIsDeletingDivision: Dispatch<SetStateAction<boolean>>;
  users: AppUser[];
}

export function DeleteDivisionDialog({
  deleteDivisionTarget,
  isDeletingDivision,
  onDeleteDivision,
  setDeleteDivisionTarget,
  setDivisionFeedback,
  setIsDeletingDivision,
  users,
}: DeleteDivisionDialogProps) {
  return (
    <>
      {/* Delete Division Modal */}
      {deleteDivisionTarget && (
        <div
          className="fixed inset-0 z-[100050] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setDeleteDivisionTarget(null)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '440px',
              background: '#212121',
              borderRadius: '20px',
              border: '1px solid #3F3F3F',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
            className="shadow-2xl animate-in zoom-in-95 duration-150 font-season-sans text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white">Delete Division</h3>
              </div>
              <button
                type="button"
                onClick={() => setDeleteDivisionTarget(null)}
                className="text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-stone-300 leading-relaxed flex flex-col gap-2">
              <p>
                Are you sure you want to delete division{' '}
                <span className="font-semibold text-white">"{deleteDivisionTarget.name}"</span>?
                This action cannot be undone.
              </p>
              {(() => {
                const affectedUsers = users.filter((u) => u.division === deleteDivisionTarget.name);
                if (affectedUsers.length > 0) {
                  return (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">
                      ⚠️ Note: <span className="font-semibold">{affectedUsers.length} user(s)</span>{' '}
                      currently assigned to this division.
                    </div>
                  );
                }
                return null;
              })()}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteDivisionTarget(null)}
                className="px-4 py-2 rounded-xl bg-[#333333] hover:bg-[#404040] text-stone-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeletingDivision}
                onClick={async () => {
                  if (!onDeleteDivision || !deleteDivisionTarget) return;
                  try {
                    setIsDeletingDivision(true);
                    await onDeleteDivision(deleteDivisionTarget.id);
                    setDivisionFeedback(`Divisi "${deleteDivisionTarget.name}" berhasil dihapus.`);
                    setTimeout(() => setDivisionFeedback(null), 3500);
                    setDeleteDivisionTarget(null);
                  } catch (err) {
                    console.error('Delete division error:', err);
                  } finally {
                    setIsDeletingDivision(false);
                  }
                }}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-medium transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
              >
                {isDeletingDivision ? (
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <span>Delete</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
