import type { Dispatch, SetStateAction } from 'react';
import { type SidebarViewMode, type AppUser } from '../../../types';

export interface ReleaseFilterPanelProps {
  availableDivisions: string[];
  currentUser: AppUser;
  isFilterMenuOpen: boolean;
  releaseDateFilter: string;
  releaseDivisionFilter: string;
  setReleaseDateFilter: Dispatch<SetStateAction<string>>;
  setReleaseDivisionFilter: Dispatch<SetStateAction<string>>;
  viewMode: SidebarViewMode;
}

export function ReleaseFilterPanel({
  availableDivisions,
  currentUser,
  isFilterMenuOpen,
  releaseDateFilter,
  releaseDivisionFilter,
  setReleaseDateFilter,
  setReleaseDivisionFilter,
  viewMode,
}: ReleaseFilterPanelProps) {
  return (
    <>
      {/* Release Filter: Division & Calendar Date */}
      {isFilterMenuOpen && viewMode === 'releases' && (
        <div className="w-full bg-[#262626] border border-white/10 rounded-2xl p-3 space-y-2.5 animate-in fade-in duration-150 text-xs">
          {/* Division Filter (Manager only) */}
          {currentUser?.role === 'manager' && (
            <div>
              <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                Release Division
              </label>
              <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
                <button
                  type="button"
                  onClick={() => setReleaseDivisionFilter('all')}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-season-sans whitespace-nowrap cursor-pointer transition-colors ${
                    releaseDivisionFilter === 'all'
                      ? 'bg-white text-black font-semibold'
                      : 'bg-[#353535] text-white/70 hover:text-white'
                  }`}
                >
                  All Divisions
                </button>
                {availableDivisions.map((div) => (
                  <button
                    key={div}
                    type="button"
                    onClick={() => setReleaseDivisionFilter(div)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-season-sans whitespace-nowrap cursor-pointer transition-colors ${
                      releaseDivisionFilter === div
                        ? 'bg-white text-black font-semibold'
                        : 'bg-[#353535] text-white/70 hover:text-white'
                    }`}
                  >
                    {div}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Calendar / Date Filter */}
          <div>
            <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
              Filter Tanggal Release (Calendar)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={releaseDateFilter}
                onChange={(e) => setReleaseDateFilter(e.target.value)}
                className="bg-[#1e1e1e] border border-white/10 text-white rounded-xl px-2.5 py-1 text-xs focus:outline-none focus:border-white/50 flex-1 font-season-sans"
              />
              {releaseDateFilter && (
                <button
                  type="button"
                  onClick={() => setReleaseDateFilter('')}
                  className="text-stone-400 hover:text-white text-xs px-2 py-1 bg-[#353535] rounded-xl cursor-pointer"
                >
                  Reset Tanggal
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
