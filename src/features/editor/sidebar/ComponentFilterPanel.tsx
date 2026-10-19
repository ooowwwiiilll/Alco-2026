import type { Dispatch, SetStateAction } from 'react';
import { X } from 'lucide-react';
import { type SidebarViewMode, type PageTemplate } from '../../../types';

export interface ComponentFilterPanelProps {
  activeFilterTemplate: PageTemplate | undefined;
  isFilterMenuOpen: boolean;
  pageTemplates: PageTemplate[];
  selectedTemplateFilterId: string;
  setIsFilterMenuOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedTemplateFilterId: Dispatch<SetStateAction<string>>;
  viewMode: SidebarViewMode;
}

export function ComponentFilterPanel({
  activeFilterTemplate,
  isFilterMenuOpen,
  pageTemplates,
  selectedTemplateFilterId,
  setIsFilterMenuOpen,
  setSelectedTemplateFilterId,
  viewMode,
}: ComponentFilterPanelProps) {
  return (
    <>
      {/* Quick Filter Template Row when Filter toggled for Components */}
      {isFilterMenuOpen && viewMode === 'components' && pageTemplates.length > 0 && (
        <div className="w-full flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none animate-in fade-in duration-150">
          <button
            type="button"
            onClick={() => {
              setSelectedTemplateFilterId('all');
              setIsFilterMenuOpen(false);
            }}
            className={`px-3 py-1 rounded-full text-xs font-season-sans whitespace-nowrap cursor-pointer transition-colors ${
              selectedTemplateFilterId === 'all'
                ? 'bg-white text-black font-semibold'
                : 'bg-[#353535] text-white/70 hover:text-white'
            }`}
          >
            All
          </button>
          {pageTemplates.map((pt) => (
            <button
              key={pt.id}
              type="button"
              onClick={() => {
                setSelectedTemplateFilterId(pt.id);
                setIsFilterMenuOpen(false);
              }}
              className={`px-3 py-1 rounded-full text-xs font-season-sans whitespace-nowrap cursor-pointer transition-colors ${
                selectedTemplateFilterId === pt.id
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#353535] text-white/70 hover:text-white'
              }`}
              title={pt.name}
            >
              {pt.name}
            </button>
          ))}
        </div>
      )}

      {/* Active Template Filter Indicator with Reset option */}
      {viewMode === 'components' && selectedTemplateFilterId !== 'all' && activeFilterTemplate && (
        <div className="w-full flex items-center justify-between bg-[#2A2A2A] border border-white/20 rounded-xl px-3 py-1.5 text-xs text-stone-300">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-[11px] text-stone-400">Template:</span>
            <span className="text-white font-medium truncate">{activeFilterTemplate.name}</span>
          </div>
          <button
            type="button"
            onClick={() => setSelectedTemplateFilterId('all')}
            className="text-stone-400 hover:text-white p-0.5 rounded cursor-pointer shrink-0 ml-2"
            title="Reset Filter"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </>
  );
}
