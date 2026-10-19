import type { SidebarTab, StatusFilter } from '../types';
import type { Dispatch, SetStateAction } from 'react';

export interface StatusFilterPillsProps {
  activeTab: SidebarTab;
  reviewTemplatesCount: number;
  setStatusFilter: Dispatch<SetStateAction<StatusFilter>>;
  statusFilter: StatusFilter;
}

export function StatusFilterPills({
  activeTab,
  reviewTemplatesCount,
  setStatusFilter,
  statusFilter,
}: StatusFilterPillsProps) {
  return (
    <>
      {/* Status Filter Pill Container */}
      {activeTab === 'releases' && (
        <div
          style={{
            height: '44px',
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            background: '#353535',
            borderRadius: '1000px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '8px',
            display: 'flex',
          }}
          className="select-none shrink-0 overflow-x-auto scrollbar-none max-w-full py-0.5"
        >
          {/* 1. Review (with count indicator) */}
          <button
            type="button"
            onClick={() => setStatusFilter('review')}
            style={{
              paddingLeft: '12px',
              paddingRight: '10px',
              paddingTop: '8px',
              paddingBottom: '8px',
              background: statusFilter === 'review' ? '#212121' : 'transparent',
              borderRadius: '1000px',
              backdropFilter: statusFilter === 'review' ? 'blur(5px)' : 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            className="transition-all hover:bg-white/5"
          >
            <span
              style={{
                color: 'white',
                fontSize: '12px',
                fontFamily: "'Season Sans', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.24px',
                wordWrap: 'break-word',
              }}
            >
              Review
            </span>
            <span
              style={{
                paddingLeft: '6px',
                paddingRight: '6px',
                paddingTop: '1px',
                paddingBottom: '1px',
                background: '#DED522',
                color: '#000000',
                borderRadius: '1000px',
                fontSize: '10px',
                fontFamily: "'Season Sans', sans-serif",
                fontWeight: 700,
                lineHeight: '16px',
                minWidth: '18px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.35)',
              }}
            >
              {reviewTemplatesCount}
            </span>
          </button>

          {/* 2. Approved */}
          <button
            type="button"
            onClick={() => setStatusFilter('approved')}
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '8px',
              paddingBottom: '8px',
              background: statusFilter === 'approved' ? '#212121' : 'transparent',
              borderRadius: '1000px',
              backdropFilter: statusFilter === 'approved' ? 'blur(5px)' : 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            className="transition-all hover:bg-white/5"
          >
            <div
              style={{
                color: 'white',
                fontSize: '12px',
                fontFamily: "'Season Sans', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.24px',
                wordWrap: 'break-word',
              }}
            >
              Approved
            </div>
          </button>

          {/* 3. Reject */}
          <button
            type="button"
            onClick={() => setStatusFilter('reject')}
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '8px',
              paddingBottom: '8px',
              background: statusFilter === 'reject' ? '#212121' : 'transparent',
              borderRadius: '1000px',
              backdropFilter: statusFilter === 'reject' ? 'blur(5px)' : 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            className="transition-all hover:bg-white/5"
          >
            <div
              style={{
                color: 'white',
                fontSize: '12px',
                fontFamily: "'Season Sans', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.24px',
                wordWrap: 'break-word',
              }}
            >
              Reject
            </div>
          </button>

          {/* 4. All Status */}
          <button
            type="button"
            onClick={() => setStatusFilter('all')}
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '8px',
              paddingBottom: '8px',
              background: statusFilter === 'all' ? '#212121' : 'transparent',
              borderRadius: '1000px',
              backdropFilter: statusFilter === 'all' ? 'blur(5px)' : 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            className="transition-all hover:bg-white/5"
          >
            <div
              style={{
                color: 'white',
                fontSize: '12px',
                fontFamily: "'Season Sans', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.24px',
                wordWrap: 'break-word',
              }}
            >
              All Status
            </div>
          </button>
        </div>
      )}
    </>
  );
}
