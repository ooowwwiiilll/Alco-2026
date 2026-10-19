import type { Dispatch, SetStateAction } from 'react';
import { EmptyState } from '../../components/EmptyState';
import emptyStateImg from '../../assets/images/empty_state.png';
import { SectionThumbnail } from '../../components/SectionThumbnail';
import { cleanComponentName } from '../../utils/format';
import { Edit3 } from 'lucide-react';
import { type SectionTemplate } from '../../types';

export interface ComponentTableProps {
  componentCategoryFilter: string;
  filteredComponents: SectionTemplate[];
  isRoleManager: boolean;
  searchQuery: string;
  setEditingComponentTemplate: Dispatch<SetStateAction<SectionTemplate | null>>;
  setPreviewComponent: Dispatch<SetStateAction<SectionTemplate | null>>;
}

export function ComponentTable({
  componentCategoryFilter,
  filteredComponents,
  isRoleManager,
  searchQuery,
  setEditingComponentTemplate,
  setPreviewComponent,
}: ComponentTableProps) {
  return (
    <>
      <div
        style={{
          outline: '1px #353535 solid',
          outlineOffset: '-1px',
          borderRadius: '12px',
          width: '100%',
        }}
        className="flex flex-col animate-in fade-in duration-200 bg-black/40 overflow-x-auto custom-scrollbar"
      >
        <div className="min-w-[850px] flex flex-col">
          {/* Header Row */}
          <div
            style={{
              height: '44px',
              borderBottom: '1px rgba(255, 255, 255, 0.10) solid',
            }}
            className="grid grid-cols-[minmax(260px,3.2fr)_minmax(130px,1.5fr)_minmax(130px,1.5fr)_minmax(150px,1.6fr)_minmax(100px,1.2fr)] gap-4 sm:gap-6 items-center px-4 sm:px-6 bg-[#1e1e1e]/60 select-none"
          >
            <div>
              <span
                style={{
                  color: '#999999',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Name
              </span>
            </div>
            <div>
              <span
                style={{
                  color: '#999999',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Category
              </span>
            </div>
            <div>
              <span
                style={{
                  color: '#999999',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Type
              </span>
            </div>
            <div>
              <span
                style={{
                  color: '#999999',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Interactive Elements
              </span>
            </div>
            <div className="text-right sm:text-left pr-2">
              <span
                style={{
                  color: '#999999',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Action
              </span>
            </div>
          </div>

          {/* Table Data Rows */}
          {filteredComponents.length === 0 ? (
            <EmptyState
              headline={
                searchQuery.trim() || componentCategoryFilter !== 'all'
                  ? 'No components found'
                  : 'No components available'
              }
              subheadline={
                searchQuery.trim() || componentCategoryFilter !== 'all'
                  ? 'No components match your filter or search criteria'
                  : 'No components have been added yet'
              }
              imageSrc={emptyStateImg}
            />
          ) : (
            filteredComponents.map((tpl, idx) => (
              <div
                key={tpl.id}
                onClick={() => setPreviewComponent(tpl)}
                style={{
                  height: '56px',
                  borderBottom: '1px #353535 solid',
                }}
                className="grid grid-cols-[minmax(260px,3.2fr)_minmax(130px,1.5fr)_minmax(130px,1.5fr)_minmax(150px,1.6fr)_minmax(100px,1.2fr)] gap-4 sm:gap-6 items-center px-4 sm:px-6 hover:bg-[#2b2b2b] transition-colors group select-none cursor-pointer"
              >
                {/* Name Column with Image Preview */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div
                    style={{
                      width: '48px',
                      height: '34px',
                      backgroundColor: '#0a0a0a',
                      overflow: 'hidden',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      border: '1px solid #3F3F3F',
                    }}
                    className="shrink-0 shadow-sm"
                  >
                    <SectionThumbnail htmlContent={tpl.htmlContent} />
                  </div>
                  <span
                    style={{
                      color: 'white',
                      fontSize: '15px',
                      fontFamily: "'Season Mix', serif",
                      fontWeight: 420,
                      wordWrap: 'break-word',
                    }}
                    className="truncate group-hover:text-teal-300 transition-colors"
                  >
                    {cleanComponentName(tpl.name)}
                  </span>
                </div>

                {/* Kategori Column */}
                <div className="min-w-0">
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 uppercase tracking-wider font-semibold inline-block">
                    {tpl.category}
                  </span>
                </div>

                {/* Tipe Column */}
                <div className="min-w-0">
                  <span
                    style={{
                      color: '#999999',
                      fontSize: '14px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 400,
                    }}
                    className="truncate block"
                  >
                    Section Block
                  </span>
                </div>

                {/* Interactive Elements Column */}
                <div className="min-w-0">
                  <span
                    style={{
                      color: '#999999',
                      fontSize: '14px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 400,
                    }}
                    className="truncate block"
                  >
                    {tpl.editableFields && tpl.editableFields.length > 0
                      ? `${tpl.editableFields.length} Fields`
                      : 'Standard'}
                  </span>
                </div>

                {/* Aksi Column */}
                <div className="flex items-center gap-2 min-w-0 pr-2">
                  {isRoleManager && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingComponentTemplate(tpl);
                      }}
                      className="px-2 py-1 rounded bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-xs active:scale-95"
                      title="Mode Edit: Ubah Teks & Gambar Komponen (Khusus Role Manager)"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Edit</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewComponent(tpl);
                    }}
                    className="text-xs text-stone-300 group-hover:text-white font-medium flex items-center gap-1.5 transition-colors hover:underline cursor-pointer px-2 py-1 rounded hover:bg-white/5"
                  >
                    Preview
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
