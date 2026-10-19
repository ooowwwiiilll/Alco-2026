import type { SidebarTab } from '../types';
import type { Dispatch, RefObject, SetStateAction } from 'react';

import { ChevronDown, Check } from 'lucide-react';
import { createPortal } from 'react-dom';
import { type SectionTemplate } from '../../../types';

export interface ComponentCategoryFilterProps {
  activeTab: SidebarTab;
  availableComponentCategories: string[];
  componentCategoryContainerRef: RefObject<HTMLDivElement | null>;
  componentCategoryFilter: string;
  getCategoryCount: (category: string) => number;
  isComponentCategoryDropdownOpen: boolean;
  setComponentCategoryFilter: Dispatch<SetStateAction<string>>;
  setIsComponentCategoryDropdownOpen: Dispatch<SetStateAction<boolean>>;
  templates: SectionTemplate[];
}

export function ComponentCategoryFilter({
  activeTab,
  availableComponentCategories,
  componentCategoryContainerRef,
  componentCategoryFilter,
  getCategoryCount,
  isComponentCategoryDropdownOpen,
  setComponentCategoryFilter,
  setIsComponentCategoryDropdownOpen,
  templates,
}: ComponentCategoryFilterProps) {
  return (
    <>
      {/* Component Category Dropdown Filter */}
      {activeTab === 'components' && (
        <div ref={componentCategoryContainerRef} className="relative">
          <button
            type="button"
            onClick={() => setIsComponentCategoryDropdownOpen((prev) => !prev)}
            style={{
              height: '44px',
              paddingLeft: '16px',
              paddingRight: '16px',
              background: '#353535',
              borderRadius: '48px',
              outline: '1px #353535 solid',
              outlineOffset: '-1px',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '12px',
              display: 'flex',
              border: 'none',
              cursor: 'pointer',
            }}
            className="hover:bg-[#404040] select-none text-white transition-all"
          >
            <div
              style={{
                color: 'white',
                fontSize: '14px',
                fontFamily: "'Season Sans', sans-serif",
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0.28px',
                wordWrap: 'break-word',
              }}
            >
              {componentCategoryFilter === 'all'
                ? 'All Categories'
                : componentCategoryFilter.toUpperCase()}
            </div>
            <ChevronDown
              className={`w-4 h-4 text-white transition-transform ${
                isComponentCategoryDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Category Popover Menu */}
          {isComponentCategoryDropdownOpen && (
            <>
              {createPortal(
                <div
                  className="fixed inset-0 z-40 bg-transparent"
                  onMouseDown={() => setIsComponentCategoryDropdownOpen(false)}
                  onTouchStart={() => setIsComponentCategoryDropdownOpen(false)}
                  onClick={() => setIsComponentCategoryDropdownOpen(false)}
                />,
                document.body,
              )}
              <div
                style={{
                  background: '#212121',
                  border: '1px solid #3F3F3F',
                  borderRadius: '16px',
                  padding: '6px',
                  maxHeight: '340px',
                }}
                className="absolute right-0 top-full mt-2 w-56 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 font-season-sans overflow-y-auto scrollbar-thin"
              >
                <button
                  type="button"
                  onClick={() => {
                    setComponentCategoryFilter('all');
                    setIsComponentCategoryDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                    componentCategoryFilter === 'all'
                      ? 'bg-[#353535] text-white font-medium'
                      : 'text-stone-300 hover:bg-[#2c2c2c]'
                  }`}
                >
                  <span>All Categories</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-stone-300">
                      {templates.length}
                    </span>
                    {componentCategoryFilter === 'all' && (
                      <Check className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>
                </button>

                {availableComponentCategories.map((cat) => {
                  const count = getCategoryCount(cat);
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setComponentCategoryFilter(cat);
                        setIsComponentCategoryDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                        componentCategoryFilter.toLowerCase() === cat.toLowerCase()
                          ? 'bg-[#353535] text-white font-medium'
                          : 'text-stone-300 hover:bg-[#2c2c2c]'
                      }`}
                    >
                      <span className="truncate font-semibold tracking-wider text-[11px]">
                        {cat.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-semibold">
                          {count}
                        </span>
                        {componentCategoryFilter.toLowerCase() === cat.toLowerCase() && (
                          <Check className="w-3.5 h-3.5 text-white" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
