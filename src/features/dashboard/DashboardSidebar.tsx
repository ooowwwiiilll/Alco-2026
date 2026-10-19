import type { SidebarTab } from './types';
import type { Dispatch, SetStateAction } from 'react';
import { FileText, Layers, Box } from 'lucide-react';
import { type ReleaseItem, type PageTemplate, type SectionTemplate } from '../../types';

export interface DashboardSidebarProps {
  activeTab: SidebarTab;
  isSidebarOpen: boolean;
  pageTemplates: PageTemplate[];
  setActiveTab: Dispatch<SetStateAction<SidebarTab>>;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  templates: SectionTemplate[];
  visibleReleases: ReleaseItem[];
}

export function DashboardSidebar({
  activeTab,
  isSidebarOpen,
  pageTemplates,
  setActiveTab,
  setIsSidebarOpen,
  templates,
  visibleReleases,
}: DashboardSidebarProps) {
  return (
    <>
      {/* ----------------------------------------------------
            LEFT SIDEBAR (Tabs: Releases, Templates, Components)
           ---------------------------------------------------- */}
      <aside
        style={{
          width: isSidebarOpen ? '320px' : '0px',
          transition: 'width 250ms ease, opacity 250ms ease, transform 250ms ease',
          backgroundColor: '#1A1A1A',
          borderRight: isSidebarOpen ? '1px solid #353535' : 'none',
          position: 'relative',
          height: '100%',
          minHeight: '100%',
          alignSelf: 'stretch',
          overflow: 'hidden',
          overscrollBehavior: 'none',
        }}
        className={`shrink-0 flex flex-col z-40 lg:z-20 overflow-hidden select-none h-full bg-[#1A1A1A] max-lg:fixed max-lg:top-[68px] max-lg:bottom-0 max-lg:left-0 max-lg:shadow-2xl ${
          isSidebarOpen
            ? 'opacity-100 max-lg:translate-x-0'
            : 'opacity-0 pointer-events-none max-lg:-translate-x-full'
        }`}
      >
        <div
          style={{
            width: '320px',
            height: '100%',
            minHeight: '100%',
            paddingTop: '24px',
            paddingBottom: '32px',
            paddingLeft: '16px',
            paddingRight: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            overflowY: 'auto',
            backgroundColor: '#1A1A1A',
          }}
          className="custom-scrollbar"
        >
          {/* Nav Tab Buttons */}
          <div className="flex flex-col gap-2 sticky top-0 z-10 bg-[#1A1A1A]">
            {/* Tab 1: Releases */}
            <button
              type="button"
              onClick={() => {
                setActiveTab('releases');
                if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                  setIsSidebarOpen(false);
                }
              }}
              style={{
                width: '100%',
                padding: '8px 12px',
                background: activeTab === 'releases' ? '#353535' : 'transparent',
                borderRadius: '8px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
                display: 'inline-flex',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
              className="hover:bg-[#353535]/70 transition-colors"
            >
              <FileText className="w-4 h-4 text-white shrink-0" />
              <div
                style={{
                  flex: '1 1 0',
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: "'Season Sans', sans-serif",
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                }}
              >
                Releases
              </div>
              <div
                style={{
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  background: activeTab === 'releases' ? 'white' : 'rgba(255, 255, 255, 0.25)',
                  borderRadius: '24px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  minWidth: '20px',
                }}
              >
                <div
                  style={{
                    color: activeTab === 'releases' ? 'black' : 'white',
                    fontSize: '8px',
                    fontFamily: "'Season Sans', sans-serif",
                    fontWeight: 400,
                    lineHeight: '16px',
                    letterSpacing: '0.80px',
                    wordWrap: 'break-word',
                  }}
                >
                  {visibleReleases.length}
                </div>
              </div>
            </button>

            {/* Tab 2: Templates */}
            <button
              type="button"
              onClick={() => {
                setActiveTab('templates');
                if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                  setIsSidebarOpen(false);
                }
              }}
              style={{
                width: '100%',
                padding: '8px 12px',
                background: activeTab === 'templates' ? '#353535' : 'transparent',
                borderRadius: '8px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
                display: 'inline-flex',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
              className="hover:bg-[#353535]/70 transition-colors"
            >
              <Layers className="w-4 h-4 text-white shrink-0" />
              <div
                style={{
                  flex: '1 1 0',
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: "'Season Sans', sans-serif",
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                }}
              >
                Templates
              </div>
              <div
                style={{
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  background: activeTab === 'templates' ? 'white' : 'rgba(255, 255, 255, 0.25)',
                  borderRadius: '24px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  minWidth: '20px',
                }}
              >
                <div
                  style={{
                    color: activeTab === 'templates' ? 'black' : 'white',
                    fontSize: '8px',
                    fontFamily: "'Season Sans', sans-serif",
                    fontWeight: 400,
                    lineHeight: '16px',
                    letterSpacing: '0.80px',
                    wordWrap: 'break-word',
                  }}
                >
                  {pageTemplates.length}
                </div>
              </div>
            </button>

            {/* Tab 3: Components */}
            <button
              type="button"
              onClick={() => {
                setActiveTab('components');
                if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                  setIsSidebarOpen(false);
                }
              }}
              style={{
                width: '100%',
                padding: '8px 12px',
                background: activeTab === 'components' ? '#353535' : 'transparent',
                borderRadius: '8px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
                display: 'inline-flex',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
              className="hover:bg-[#353535]/70 transition-colors"
            >
              <Box className="w-4 h-4 text-white shrink-0" />
              <div
                style={{
                  flex: '1 1 0',
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: "'Season Sans', sans-serif",
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                }}
              >
                Components
              </div>
              <div
                style={{
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  background: activeTab === 'components' ? 'white' : 'rgba(255, 255, 255, 0.25)',
                  borderRadius: '24px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  minWidth: '20px',
                }}
              >
                <div
                  style={{
                    color: activeTab === 'components' ? 'black' : 'white',
                    fontSize: '8px',
                    fontFamily: "'Season Sans', sans-serif",
                    fontWeight: 400,
                    lineHeight: '16px',
                    letterSpacing: '0.80px',
                    wordWrap: 'break-word',
                  }}
                >
                  {templates.length}
                </div>
              </div>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
