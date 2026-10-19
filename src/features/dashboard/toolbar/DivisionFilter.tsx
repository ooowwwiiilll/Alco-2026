import type { SidebarTab } from '../types';
import type { Dispatch, RefObject, SetStateAction } from 'react';

import { ChevronDown, Check } from 'lucide-react';
import { createPortal } from 'react-dom';

export interface DivisionFilterProps {
  activeTab: SidebarTab;
  availableDivisions: string[];
  divisionContainerRef: RefObject<HTMLDivElement | null>;
  divisionFilter: string;
  isDivisionDropdownOpen: boolean;
  isProductRole: boolean;
  setDivisionFilter: Dispatch<SetStateAction<string>>;
  setIsDivisionDropdownOpen: Dispatch<SetStateAction<boolean>>;
  userDivision: string;
}

export function DivisionFilter({
  activeTab,
  availableDivisions,
  divisionContainerRef,
  divisionFilter,
  isDivisionDropdownOpen,
  isProductRole,
  setDivisionFilter,
  setIsDivisionDropdownOpen,
  userDivision,
}: DivisionFilterProps) {
  return (
    <>
      {/* Division Dropdown Filter */}
      {activeTab === 'releases' && (
        <div ref={divisionContainerRef} className="relative">
          <button
            type="button"
            disabled={isProductRole}
            onClick={isProductRole ? undefined : () => setIsDivisionDropdownOpen((prev) => !prev)}
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
              gap: isProductRole ? '0px' : '12px',
              display: 'flex',
              border: 'none',
              cursor: isProductRole ? 'default' : 'pointer',
            }}
            className={
              isProductRole
                ? 'select-none text-white'
                : 'hover:bg-[#404040] select-none text-white transition-all'
            }
            title={isProductRole ? `Divisi: ${userDivision || 'Product Team'}` : 'Filter Divisi'}
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
              {isProductRole
                ? userDivision || 'Product Team'
                : divisionFilter === 'all'
                  ? 'All Divisions'
                  : divisionFilter}
            </div>
            {!isProductRole && (
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform ${
                  isDivisionDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            )}
          </button>

          {/* Division Popover Menu (Only for Non-Product Role / Manager & Admin) */}
          {!isProductRole && isDivisionDropdownOpen && (
            <>
              {createPortal(
                <div
                  className="fixed inset-0 z-40 bg-transparent"
                  onMouseDown={() => setIsDivisionDropdownOpen(false)}
                  onTouchStart={() => setIsDivisionDropdownOpen(false)}
                  onClick={() => setIsDivisionDropdownOpen(false)}
                />,
                document.body,
              )}
              <div
                style={{
                  background: '#212121',
                  border: '1px solid #3F3F3F',
                  borderRadius: '16px',
                  padding: '6px',
                }}
                className="absolute right-0 top-full mt-2 w-56 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 font-season-sans"
              >
                <button
                  type="button"
                  onClick={() => {
                    setDivisionFilter('all');
                    setIsDivisionDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                    divisionFilter === 'all'
                      ? 'bg-[#353535] text-white font-medium'
                      : 'text-stone-300 hover:bg-[#2c2c2c]'
                  }`}
                >
                  <span>All Divisions</span>
                  {divisionFilter === 'all' && <Check className="w-3.5 h-3.5 text-white" />}
                </button>

                {availableDivisions.map((div) => (
                  <button
                    key={div}
                    type="button"
                    onClick={() => {
                      setDivisionFilter(div);
                      setIsDivisionDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                      divisionFilter.toLowerCase() === div.toLowerCase()
                        ? 'bg-[#353535] text-white font-medium'
                        : 'text-stone-300 hover:bg-[#2c2c2c]'
                    }`}
                  >
                    <span className="truncate">{div}</span>
                    {divisionFilter.toLowerCase() === div.toLowerCase() && (
                      <Check className="w-3.5 h-3.5 text-white" />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
