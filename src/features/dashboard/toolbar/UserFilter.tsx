import type { SidebarTab } from '../types';
import type { Dispatch, RefObject, SetStateAction } from 'react';

import { ChevronDown, Check } from 'lucide-react';
import { createPortal } from 'react-dom';

export interface UserFilterProps {
  activeTab: SidebarTab;
  availableUsers: string[];
  isUserDropdownOpen: boolean;
  setIsUserDropdownOpen: Dispatch<SetStateAction<boolean>>;
  setUserFilter: Dispatch<SetStateAction<string>>;
  userContainerRef: RefObject<HTMLDivElement | null>;
  userFilter: string;
}

export function UserFilter({
  activeTab,
  availableUsers,
  isUserDropdownOpen,
  setIsUserDropdownOpen,
  setUserFilter,
  userContainerRef,
  userFilter,
}: UserFilterProps) {
  return (
    <>
      {/* User Dropdown Filter */}
      {activeTab === 'releases' && (
        <div ref={userContainerRef} className="relative">
          <button
            type="button"
            onClick={() => setIsUserDropdownOpen((prev) => !prev)}
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
              {userFilter === 'all' ? 'All Users' : userFilter}
            </div>
            <ChevronDown
              className={`w-4 h-4 text-white transition-transform ${
                isUserDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* User Popover Menu */}
          {isUserDropdownOpen && (
            <>
              {createPortal(
                <div
                  className="fixed inset-0 z-40 bg-transparent"
                  onMouseDown={() => setIsUserDropdownOpen(false)}
                  onTouchStart={() => setIsUserDropdownOpen(false)}
                  onClick={() => setIsUserDropdownOpen(false)}
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
                    setUserFilter('all');
                    setIsUserDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                    userFilter === 'all'
                      ? 'bg-[#353535] text-white font-medium'
                      : 'text-stone-300 hover:bg-[#2c2c2c]'
                  }`}
                >
                  <span>All Users</span>
                  {userFilter === 'all' && <Check className="w-3.5 h-3.5 text-white" />}
                </button>

                {availableUsers.map((usr) => (
                  <button
                    key={usr}
                    type="button"
                    onClick={() => {
                      setUserFilter(usr);
                      setIsUserDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                      userFilter.toLowerCase() === usr.toLowerCase()
                        ? 'bg-[#353535] text-white font-medium'
                        : 'text-stone-300 hover:bg-[#2c2c2c]'
                    }`}
                  >
                    <span className="truncate">{usr}</span>
                    {userFilter.toLowerCase() === usr.toLowerCase() && (
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
