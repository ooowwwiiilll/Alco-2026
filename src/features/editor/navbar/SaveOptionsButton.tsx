import type { Dispatch, SetStateAction } from 'react';

import { Save, RefreshCw, Download } from 'lucide-react';
import { type ReleaseItem } from '../../../types';

export interface SaveOptionsButtonProps {
  activeRelease: ReleaseItem | null;
  hasUnsavedChanges: boolean;
  isExportingPdf: boolean;
  isReleaseSaveMenuOpen: boolean;
  onExportPdf: () => void;
  onSaveActiveRelease: () => void;
  setIsReleaseSaveMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function SaveOptionsButton({
  activeRelease,
  hasUnsavedChanges,
  isExportingPdf,
  isReleaseSaveMenuOpen,
  onExportPdf,
  onSaveActiveRelease,
  setIsReleaseSaveMenuOpen,
}: SaveOptionsButtonProps) {
  return (
    <>
      {/* 3. Save Icon Button (di tengah-tengah antara status release dan notification) */}
      {activeRelease && (
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsReleaseSaveMenuOpen((prev) => !prev)}
            style={{
              width: '40px',
              height: '40px',
              background: '#353535',
              borderRadius: '1000px',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              border: 'none',
              cursor: 'pointer',
            }}
            className="hover:bg-[#404040] text-stone-200 hover:text-white transition-all duration-150 active:scale-95 relative"
            title="Save & Export Options"
          >
            <Save className="w-4 h-4 text-white" />
            {hasUnsavedChanges && (
              <span
                className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#DED522] ring-2 ring-[#212121]"
                title="Ada perubahan belum disimpan"
              />
            )}
          </button>

          {/* Save Options Popover (Save biasa dan Save as PDF) */}
          {isReleaseSaveMenuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsReleaseSaveMenuOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 bg-[#212121] text-white border border-[#3F3F3F] shadow-2xl font-season-sans">
                <div className="px-3 py-1.5 text-[10px] font-semibold text-stone-400 uppercase tracking-wider border-b border-white/5 mb-1">
                  Save Options
                </div>

                {/* Save Biasa */}
                <button
                  type="button"
                  onClick={() => {
                    setIsReleaseSaveMenuOpen(false);
                    onSaveActiveRelease();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs hover:bg-[#353535] text-left transition-colors cursor-pointer text-white font-medium group"
                >
                  <Save className="w-4 h-4 text-white shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Save</span>
                </button>

                <div className="h-px bg-white/10 my-1" />

                {/* Save as PDF */}
                <button
                  type="button"
                  onClick={() => {
                    setIsReleaseSaveMenuOpen(false);
                    onExportPdf();
                  }}
                  disabled={isExportingPdf}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs hover:bg-[#353535] text-left transition-colors cursor-pointer text-white font-medium group disabled:opacity-50"
                >
                  {isExportingPdf ? (
                    <RefreshCw className="w-4 h-4 text-white animate-spin shrink-0" />
                  ) : (
                    <Download className="w-4 h-4 text-white shrink-0 group-hover:scale-110 transition-transform" />
                  )}
                  <span>{isExportingPdf ? 'Exporting PDF...' : 'Save as PDF'}</span>
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
