import type { Dispatch, RefObject, SetStateAction } from 'react';

export interface SearchToggleProps {
  isSearchInputOpen: boolean;
  searchContainerRef: RefObject<HTMLDivElement | null>;
  searchInputRef: RefObject<HTMLInputElement | null>;
  searchQuery: string;
  setIsSearchInputOpen: Dispatch<SetStateAction<boolean>>;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export function SearchToggle({
  isSearchInputOpen,
  searchContainerRef,
  searchInputRef,
  searchQuery,
  setIsSearchInputOpen,
  setSearchQuery,
}: SearchToggleProps) {
  return (
    <>
      {/* Search Toggle / Expanded Input */}
      {!isSearchInputOpen ? (
        <button
          type="button"
          onClick={() => setIsSearchInputOpen(true)}
          style={{
            width: '44px',
            height: '44px',
            background: '#353535',
            borderRadius: '1000px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
          }}
          className="hover:bg-[#404040] active:scale-95 transition-all text-white shrink-0"
          title="Search"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="select-none pointer-events-none"
          >
            <circle
              cx="8.75"
              cy="8.75"
              r="5.75"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.25 13.25L17.25 17.25"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : (
        <div
          ref={searchContainerRef}
          style={{
            height: '44px',
            paddingLeft: '14px',
            paddingRight: '14px',
            paddingTop: '8px',
            paddingBottom: '8px',
            background: '#353535',
            borderRadius: '76px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '10px',
            display: 'inline-flex',
          }}
          className="w-48 sm:w-64 max-w-full animate-in fade-in zoom-in-95 duration-150 relative shrink-0"
        >
          <button
            type="button"
            onClick={() => {
              setIsSearchInputOpen(false);
              setSearchQuery('');
            }}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            className="shrink-0 hover:opacity-80 transition-opacity"
            title="Close Search"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="select-none pointer-events-none"
            >
              <circle
                cx="8.75"
                cy="8.75"
                r="5.75"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.25 13.25L17.25 17.25"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '14px',
              width: '100%',
              outline: 'none',
              fontFamily: "'Season Sans', sans-serif",
              lineHeight: '20px',
            }}
            className="placeholder:text-stone-400"
            autoFocus
            onBlur={(e) => {
              const isInside = searchContainerRef.current?.contains(e.relatedTarget as Node);
              if (!isInside && (!searchQuery || searchQuery.trim() === '')) {
                setIsSearchInputOpen(false);
                setSearchQuery('');
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setIsSearchInputOpen(false);
                setSearchQuery('');
              }
              if (e.key === 'Enter' && (!searchQuery || searchQuery.trim() === '')) {
                setIsSearchInputOpen(false);
              }
            }}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                searchInputRef.current?.focus();
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#a8a8a8',
                cursor: 'pointer',
                padding: '2px',
                fontSize: '12px',
                lineHeight: 1,
              }}
              className="hover:text-white transition-colors"
              title="Clear text"
            >
              ✕
            </button>
          )}
        </div>
      )}
    </>
  );
}
