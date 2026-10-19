import type { Dispatch, SetStateAction } from 'react';
import { Search } from 'lucide-react';
import { type AppUser } from '../../types';

export interface MemberSearchProps {
  approvedUsers: AppUser[];
  isActionActive: boolean;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export function MemberSearch({
  approvedUsers,
  isActionActive,
  searchQuery,
  setSearchQuery,
}: MemberSearchProps) {
  return (
    <>
      {/* Section 2: Search Box */}
      {approvedUsers.length > 0 && (
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '24px',
            display: 'inline-flex',
            opacity: isActionActive ? 0.35 : 1,
            pointerEvents: isActionActive ? 'none' : 'auto',
            transition: 'opacity 0.2s ease',
          }}
        >
          <div
            style={{
              flex: '1 1 0',
              height: '52px',
              paddingLeft: '24px',
              paddingRight: '24px',
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
            <Search className="w-5 h-5 text-white/50 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name, email, division..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: '14px',
                fontFamily: 'Season Sans, sans-serif',
                fontWeight: 400,
                lineHeight: '20px',
              }}
              className="placeholder:text-white/50"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-white/40 hover:text-white text-xs cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
