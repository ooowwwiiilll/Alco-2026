import type { Dispatch, SetStateAction } from 'react';
import { EmptyState } from '../../components/EmptyState';
import emptyStateImg from '../../assets/images/empty_state.png';
import { cleanComponentName } from '../../utils/format';
import { SectionThumbnail } from '../../components/SectionThumbnail';
import { Edit3 } from 'lucide-react';
import { type SectionTemplate } from '../../types';

export interface ComponentGridProps {
  componentCategoryFilter: string;
  filteredComponents: SectionTemplate[];
  gridResponsiveClass:
    | 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 min-[1920px]:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 w-full animate-in fade-in duration-200'
    | 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[1920px]:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 w-full animate-in fade-in duration-200';
  isRoleManager: boolean;
  searchQuery: string;
  setEditingComponentTemplate: Dispatch<SetStateAction<SectionTemplate | null>>;
  setPreviewComponent: Dispatch<SetStateAction<SectionTemplate | null>>;
}

export function ComponentGrid({
  componentCategoryFilter,
  filteredComponents,
  gridResponsiveClass,
  isRoleManager,
  searchQuery,
  setEditingComponentTemplate,
  setPreviewComponent,
}: ComponentGridProps) {
  return (
    <>
      <div className={gridResponsiveClass}>
        {filteredComponents.length === 0 ? (
          <div className="col-span-full">
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
          </div>
        ) : (
          filteredComponents.map((tpl, idx) => (
            <div
              key={tpl.id}
              onClick={() => setPreviewComponent(tpl)}
              style={{
                width: '100%',
                padding: '16px',
                background: '#1A1A1A',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                cursor: 'pointer',
              }}
              className="group hover:ring-1 hover:ring-white/20 transition-all relative select-none shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <div
                  style={{
                    color: 'white',
                    fontSize: '14px',
                    fontFamily: "'Season Sans', sans-serif",
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '0.28px',
                  }}
                  className="truncate flex-1"
                >
                  {cleanComponentName(tpl.name)}
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 uppercase tracking-wider font-semibold">
                  {tpl.category}
                </span>
              </div>

              <div
                style={{
                  height: '157px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  backgroundColor: 'black',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: 'calc(100% - 20px)',
                    height: '148px',
                    marginTop: '9px',
                    borderRadius: '11px',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#0a0a0a',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.7)',
                  }}
                >
                  <SectionThumbnail htmlContent={tpl.htmlContent} />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-400">
                <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.50)' }}>
                  Section Block
                </span>
                <div className="flex items-center gap-2">
                  {isRoleManager && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingComponentTemplate(tpl);
                      }}
                      className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95"
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
                    className="text-stone-300 hover:text-white font-medium group-hover:underline flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
