import type { Dispatch, SetStateAction } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { type SidebarViewMode, type PageTemplate } from '../../../types';

export interface SidebarSearchBarProps {
  activeFilterTemplate: PageTemplate | undefined;
  pageTemplates: PageTemplate[];
  releaseDateFilter: string;
  releaseDivisionFilter: string;
  searchQuery: string;
  selectedTemplateFilterId: string;
  setIsFilterMenuOpen: Dispatch<SetStateAction<boolean>>;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  viewMode: SidebarViewMode;
}

export function SidebarSearchBar({
  activeFilterTemplate,
  pageTemplates,
  releaseDateFilter,
  releaseDivisionFilter,
  searchQuery,
  selectedTemplateFilterId,
  setIsFilterMenuOpen,
  setSearchQuery,
  viewMode,
}: SidebarSearchBarProps) {
  return (
    <>
      {/* Search & Filter Bar */}
      <div
        style={{
          alignSelf: 'stretch',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          display: 'inline-flex',
        }}
      >
        {/* Search Input Box */}
        <div
          style={{
            flex: '1 1 0',
            paddingLeft: '12px',
            paddingRight: '12px',
            paddingTop: '8px',
            paddingBottom: '8px',
            background: '#353535',
            borderRadius: '76px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '12px',
            display: 'flex',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Search className="w-4 h-4 text-white shrink-0" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              viewMode === 'components'
                ? 'Search Components'
                : viewMode === 'templates'
                  ? 'Search Templates'
                  : 'Search Releases'
            }
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'white',
              fontSize: '14px',
              fontFamily: 'Season Sans, sans-serif',
              fontWeight: 400,
              lineHeight: '20px',
              wordWrap: 'break-word',
              width: '100%',
            }}
            className="placeholder:text-white/50"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-white/50 hover:text-white cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Button (Hidden in templates mode per requirement; hidden in components mode if no templates exist) */}
        {viewMode !== 'templates' && (viewMode !== 'components' || pageTemplates.length > 0) && (
          <div
            onClick={() => setIsFilterMenuOpen((prev) => !prev)}
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '8px',
              paddingBottom: '8px',
              background: '#353535',
              borderRadius: '100px',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '10px',
              display: 'inline-flex',
              cursor: 'pointer',
            }}
            className="hover:bg-[#404040] transition-colors shrink-0"
            title="Filter"
          >
            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '4px',
                display: 'inline-flex',
              }}
            >
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SlidersHorizontal className="w-3 h-3 text-white" />
              </div>
              <div
                style={{
                  color:
                    (viewMode === 'components' && selectedTemplateFilterId !== 'all') ||
                    (viewMode === 'releases' &&
                      (releaseDivisionFilter !== 'all' || releaseDateFilter !== ''))
                      ? '#FFFFFF'
                      : 'rgba(255, 255, 255, 0.50)',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                }}
                className="max-w-[130px] truncate"
              >
                {viewMode === 'components' &&
                selectedTemplateFilterId !== 'all' &&
                activeFilterTemplate
                  ? activeFilterTemplate.name
                  : 'Filter'}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
