import type { Dispatch, SetStateAction } from 'react';
import { Search, X, Plus, ArrowUp, ArrowDown, Pencil, Trash2 } from 'lucide-react';
import { type DivisionItem } from '../../types';

export interface DivisionsTabProps {
  activeTab: 'account' | 'division';
  divisionSearchQuery: string;
  divisionSortOrder: 'asc' | 'desc';
  filteredDivisions: DivisionItem[];
  setAddDivisionForm: Dispatch<SetStateAction<{ name: string; status: 'Active' | 'Inactive' }>>;
  setDeleteDivisionTarget: Dispatch<SetStateAction<DivisionItem | null>>;
  setDivisionSearchQuery: Dispatch<SetStateAction<string>>;
  setDivisionSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>;
  setEditDivisionForm: Dispatch<SetStateAction<{ name: string; status: 'Active' | 'Inactive' }>>;
  setEditingDivision: Dispatch<SetStateAction<DivisionItem | null>>;
  setIsAddDivisionModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsEditDivisionModalOpen: Dispatch<SetStateAction<boolean>>;
}

export function DivisionsTab({
  activeTab,
  divisionSearchQuery,
  divisionSortOrder,
  filteredDivisions,
  setAddDivisionForm,
  setDeleteDivisionTarget,
  setDivisionSearchQuery,
  setDivisionSortOrder,
  setEditDivisionForm,
  setEditingDivision,
  setIsAddDivisionModalOpen,
  setIsEditDivisionModalOpen,
}: DivisionsTabProps) {
  return (
    <>
      {/* Division Tab Content */}
      {activeTab === 'division' && (
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden bg-[#212121]">
          {/* Action Bar: Search & Add Division */}
          <div className="shrink-0 px-6 pt-5 pb-4 flex items-center justify-between gap-4 border-b border-[#2C2C2C]">
            {/* Search input */}
            <div className="relative flex-1 max-w-sm">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={divisionSearchQuery}
                onChange={(e) => setDivisionSearchQuery(e.target.value)}
                placeholder="Search division..."
                className="w-full pl-10 pr-8 py-2 bg-[#2D2D2D] text-white text-xs rounded-xl border border-[#3E3E3E] focus:outline-none focus:border-white transition-colors placeholder:text-stone-500"
              />
              {divisionSearchQuery && (
                <button
                  type="button"
                  onClick={() => setDivisionSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Add Division Button */}
            <button
              type="button"
              onClick={() => {
                setAddDivisionForm({ name: '', status: 'Active' });
                setIsAddDivisionModalOpen(true);
              }}
              className="px-4 py-2 bg-white hover:bg-stone-200 text-black text-xs font-medium rounded-full flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add Division</span>
            </button>
          </div>

          {/* Division Table Container */}
          <div className="flex-1 min-h-0 overflow-y-auto px-6 py-4 custom-scrollbar">
            <div className="w-full border border-[#333333] rounded-xl overflow-hidden bg-[#262626]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#2D2D2D] text-[11px] font-semibold text-stone-400 uppercase tracking-wider border-b border-[#383838]">
                    <th className="py-3 px-4 w-14 text-center">No</th>
                    <th
                      className="py-3 px-4 cursor-pointer hover:text-white select-none transition-colors"
                      onClick={() =>
                        setDivisionSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
                      }
                    >
                      <div className="flex items-center gap-1.5">
                        <span>Division</span>
                        {divisionSortOrder === 'asc' ? (
                          <ArrowUp className="w-3.5 h-3.5 text-stone-300" />
                        ) : (
                          <ArrowDown className="w-3.5 h-3.5 text-stone-300" />
                        )}
                      </div>
                    </th>
                    <th className="py-3 px-4 w-28 text-center">Status</th>
                    <th className="py-3 px-4 w-24 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#333333] text-xs">
                  {filteredDivisions.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-12 text-center text-stone-400">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-[#303030] flex items-center justify-center text-stone-400">
                            <Search className="w-5 h-5" />
                          </div>
                          <span className="font-medium text-stone-300 text-sm">
                            No divisions found
                          </span>
                          <span className="text-xs text-stone-500">
                            {divisionSearchQuery
                              ? `No results matching "${divisionSearchQuery}"`
                              : 'No divisions have been added yet.'}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredDivisions.map((div, idx) => {
                      const isActive = (div.status || 'Active') === 'Active';
                      return (
                        <tr
                          key={div.id || div.name}
                          className="hover:bg-[#2C2C2C] transition-colors group"
                        >
                          <td className="py-3.5 px-4 text-center text-stone-400 font-mono text-[11px]">
                            {idx + 1}
                          </td>
                          <td className="py-3.5 px-4 font-medium text-white">{div.name}</td>
                          <td className="py-3.5 px-4 text-center">
                            <span
                              className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium border ${
                                isActive
                                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                                  : 'bg-stone-500/10 text-stone-400 border-stone-500/25'
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                  isActive ? 'bg-emerald-400' : 'bg-stone-400'
                                }`}
                              />
                              {isActive ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingDivision(div);
                                  setEditDivisionForm({
                                    name: div.name,
                                    status: div.status || 'Active',
                                  });
                                  setIsEditDivisionModalOpen(true);
                                }}
                                title="Edit Division"
                                className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-[#383838] transition-colors cursor-pointer"
                              >
                                <Pencil className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => setDeleteDivisionTarget(div)}
                                title="Delete Division"
                                className="p-1.5 rounded-lg text-stone-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
