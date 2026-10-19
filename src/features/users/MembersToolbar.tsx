import type { Dispatch, RefObject, SetStateAction } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface MembersToolbarProps {
  adminCount: number;
  availableDivisions: string[];
  divisionFilter: string;
  filterRef: RefObject<HTMLDivElement | null>;
  isActionActive: boolean;
  isFilterActive: boolean;
  isFilterOpen: boolean;
  isSortActive: boolean;
  isSortOpen: boolean;
  productCount: number;
  roleFilter: 'admin' | 'product' | 'all';
  setDivisionFilter: Dispatch<SetStateAction<string>>;
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
  setIsSortOpen: Dispatch<SetStateAction<boolean>>;
  setRoleFilter: Dispatch<SetStateAction<'admin' | 'product' | 'all'>>;
  setSortBy: Dispatch<
    SetStateAction<'default' | 'name-asc' | 'name-desc' | 'division-asc' | 'division-desc'>
  >;
  sortBy: 'default' | 'name-asc' | 'name-desc' | 'division-asc' | 'division-desc';
  sortRef: RefObject<HTMLDivElement | null>;
}

export function MembersToolbar({
  adminCount,
  availableDivisions,
  divisionFilter,
  filterRef,
  isActionActive,
  isFilterActive,
  isFilterOpen,
  isSortActive,
  isSortOpen,
  productCount,
  roleFilter,
  setDivisionFilter,
  setIsFilterOpen,
  setIsSortOpen,
  setRoleFilter,
  setSortBy,
  sortBy,
  sortRef,
}: MembersToolbarProps) {
  return (
    <>
      {/* Section 3: Members Header & Buttons */}
      <div
        style={{
          alignSelf: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '16px',
          display: 'flex',
        }}
      >
        {/* Header Line with Counts on Left and Filter/Urutkan on Right */}
        <div
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'inline-flex',
            opacity: isActionActive ? 0.35 : 1,
            pointerEvents: isActionActive ? 'none' : 'auto',
            transition: 'opacity 0.2s ease',
          }}
        >
          {/* Left Counts */}
          <div
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '16px',
              display: 'flex',
            }}
          >
            <div
              style={{
                color: 'rgba(255, 255, 255, 0.50)',
                fontSize: '14px',
                fontFamily: 'Season Sans, sans-serif',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0.28px',
                wordWrap: 'break-word',
              }}
            >
              Members
            </div>
            <div
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '4px',
                display: 'flex',
              }}
            >
              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.50)',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                }}
              >
                Admin:
              </div>
              <div
                style={{
                  color: '#00D88C',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                }}
              >
                {adminCount}
              </div>
            </div>
            <div
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '4px',
                display: 'flex',
              }}
            >
              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.50)',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                }}
              >
                Product:
              </div>
              <div
                style={{
                  color: '#00D88C',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                }}
              >
                {productCount}
              </div>
            </div>
          </div>

          {/* Right Filter and Urutkan Buttons */}
          <div
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '16px',
              display: 'flex',
            }}
          >
            {/* Filter Button & Popover */}
            <div className="relative" ref={filterRef}>
              <button
                type="button"
                onClick={() => {
                  setIsFilterOpen(!isFilterOpen);
                  setIsSortOpen(false);
                }}
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '4px',
                  display: 'flex',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
                className="hover:opacity-80 transition-opacity"
                title="Open Filter"
              >
                <div
                  style={{
                    color: isFilterActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.50)',
                    fontSize: '14px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: isFilterActive ? 600 : 400,
                    lineHeight: '20px',
                    letterSpacing: '0.28px',
                    wordWrap: 'break-word',
                  }}
                >
                  Filter
                </div>
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 2H11L7 6.7V10.5L5 11.5V6.7L1 2Z"
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeWidth="0.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Filter Dropdown Popover */}
              {isFilterOpen && (
                <div
                  className="absolute right-0 top-full mt-2 z-30 shadow-2xl animate-fadeIn"
                  style={{
                    width: '260px',
                    padding: '16px',
                    background: '#2c2c2c',
                    borderRadius: '16px',
                    border: '1px solid #3d3d3d',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  {/* Filter by Role */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label
                      style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '12px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Role
                    </label>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {(['all', 'admin', 'product'] as const).map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRoleFilter(r)}
                          style={{
                            flex: 1,
                            padding: '6px 8px',
                            borderRadius: '8px',
                            fontSize: '12px',
                            fontFamily: 'Season Sans, sans-serif',
                            cursor: 'pointer',
                            border: '1px solid',
                            borderColor: roleFilter === r ? '#FFFFFF' : '#404040',
                            background: roleFilter === r ? 'rgba(255, 255, 255, 0.15)' : '#353535',
                            color: roleFilter === r ? '#FFFFFF' : 'white',
                            fontWeight: roleFilter === r ? 600 : 400,
                            textTransform: 'capitalize',
                          }}
                        >
                          {r === 'all' ? 'All' : r === 'admin' ? 'Admin' : 'Product'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Filter by Division */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label
                      style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '12px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Division
                    </label>
                    <div
                      className="relative"
                      style={{
                        width: '100%',
                        height: '36px',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        background: '#353535',
                        borderRadius: '8px',
                        border: '1px solid #404040',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <select
                        value={divisionFilter}
                        onChange={(e) => setDivisionFilter(e.target.value)}
                        style={{
                          width: '100%',
                          color: 'white',
                          fontSize: '12px',
                          fontFamily: 'Season Sans, sans-serif',
                          background: 'transparent',
                          border: 'none',
                          outline: 'none',
                          appearance: 'none',
                          cursor: 'pointer',
                          paddingRight: '16px',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <option value="all" className="bg-[#2c2c2c] text-white">
                          All Divisions
                        </option>
                        {availableDivisions.map((d) => (
                          <option key={d} value={d} className="bg-[#2c2c2c] text-white">
                            {d}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-white/50 absolute right-2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Reset filter action */}
                  {isFilterActive && (
                    <button
                      type="button"
                      onClick={() => {
                        setRoleFilter('all');
                        setDivisionFilter('all');
                      }}
                      style={{
                        color: '#F87171',
                        fontSize: '11px',
                        fontFamily: 'Season Sans, sans-serif',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'right',
                        padding: 0,
                      }}
                      className="hover:underline"
                    >
                      Reset Filter
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Urutkan Button & Popover */}
            <div className="relative" ref={sortRef}>
              <button
                type="button"
                onClick={() => {
                  setIsSortOpen(!isSortOpen);
                  setIsFilterOpen(false);
                }}
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '4px',
                  display: 'flex',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
                className="hover:opacity-80 transition-opacity"
                title="Open Sort Options"
              >
                <div
                  style={{
                    color: isSortActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.50)',
                    fontSize: '14px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: isSortActive ? 600 : 400,
                    lineHeight: '20px',
                    letterSpacing: '0.28px',
                    wordWrap: 'break-word',
                  }}
                >
                  Sort
                </div>
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 2V10M3.5 2L1.5 4M3.5 2L5.5 4M8.5 10V2M8.5 10L6.5 8M8.5 10L10.5 8"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Sort Dropdown Popover */}
              {isSortOpen && (
                <div
                  className="absolute right-0 top-full mt-2 z-30 shadow-2xl animate-fadeIn"
                  style={{
                    width: '230px',
                    padding: '8px',
                    background: '#2c2c2c',
                    borderRadius: '16px',
                    border: '1px solid #3d3d3d',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  {[
                    { id: 'default', label: 'Default (Role, Division, Name)' },
                    { id: 'name-asc', label: 'Name (A - Z)' },
                    { id: 'name-desc', label: 'Name (Z - A)' },
                    { id: 'division-asc', label: 'Division (A - Z)' },
                    { id: 'division-desc', label: 'Division (Z - A)' },
                  ].map((item) => {
                    const isSelected = sortBy === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setSortBy(item.id as any);
                          setIsSortOpen(false);
                        }}
                        style={{
                          width: '100%',
                          padding: '8px 10px',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                          fontFamily: 'Season Sans, sans-serif',
                          color: isSelected ? '#FFFFFF' : 'white',
                          fontWeight: isSelected ? 600 : 400,
                          background: isSelected ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                        className="hover:bg-white/10 transition-colors"
                      >
                        <span>{item.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
