import type { Dispatch, SetStateAction } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export interface ClearCanvasDialogProps {
  isClearConfirmOpen: boolean;
  isLight: boolean;
  onClearAll: () => void;
  setIsClearConfirmOpen: Dispatch<SetStateAction<boolean>>;
}

export function ClearCanvasDialog({
  isClearConfirmOpen,
  isLight,
  onClearAll,
  setIsClearConfirmOpen,
}: ClearCanvasDialogProps) {
  return (
    <>
      {/* Confirmation Modal: Clear All Canvas Sections */}
      {isClearConfirmOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150 font-season-sans">
          <div
            className={`rounded-2xl p-5 max-w-sm w-full shadow-2xl border space-y-4 animate-in zoom-in-95 duration-150 ${
              isLight
                ? 'bg-white text-stone-900 border-stone-200'
                : 'bg-[#212121] text-white border-white/10'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded-xl shrink-0 ${
                    isLight
                      ? 'bg-rose-50 text-rose-600 border border-rose-200'
                      : 'bg-rose-950/80 text-rose-400 border border-rose-800/60'
                  }`}
                >
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className={`text-sm font-bold leading-snug ${isLight ? 'text-stone-900' : 'text-white'}`}
                  >
                    Clear All Sections?
                  </h3>
                  <p
                    className={`text-xs mt-0.5 leading-relaxed ${isLight ? 'text-stone-500' : 'text-[#6E6E6E]'}`}
                  >
                    Tindakan ini akan menghapus semua section yang ada di canvas saat ini. Tindakan
                    ini tidak dapat dibatalkan.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsClearConfirmOpen(false)}
                className={`p-1 rounded-lg transition-colors cursor-pointer shrink-0 ${
                  isLight
                    ? 'text-stone-400 hover:text-stone-900 hover:bg-stone-100'
                    : 'text-[#6E6E6E] hover:text-white hover:bg-[#353535]'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsClearConfirmOpen(false)}
                className={`flex-1 py-2.5 px-3 font-bold text-xs rounded-xl transition-all cursor-pointer text-center ${
                  isLight
                    ? 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    : 'bg-[#353535] hover:bg-[#404040] text-stone-300'
                }`}
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  onClearAll();
                  setIsClearConfirmOpen(false);
                }}
                className="flex-1 py-2.5 px-3 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer text-center bg-rose-600 hover:bg-rose-700 active:scale-[0.98]"
              >
                Ya, Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
