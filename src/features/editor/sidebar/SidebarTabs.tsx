import {
  type SidebarViewMode,
  type PageTemplate,
  type SectionTemplate,
  type ReleaseItem,
} from '../../../types';

export interface SidebarTabsProps {
  accountReleases: ReleaseItem[];
  activeTemplateId: string | null | undefined;
  filteredReleases: ReleaseItem[];
  isProductRole: boolean;
  pageTemplates: PageTemplate[];
  setViewMode: (mode: SidebarViewMode) => void;
  templates: SectionTemplate[];
  viewMode: SidebarViewMode;
}

export function SidebarTabs({
  accountReleases,
  activeTemplateId,
  filteredReleases,
  isProductRole,
  pageTemplates,
  setViewMode,
  templates,
  viewMode,
}: SidebarTabsProps) {
  return (
    <>
      {/* Top Navigation Tabs - Hidden when inside canvas (Edit & Use mode where activeRelease or activeTemplateId is present) */}
      {!activeTemplateId && (
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <div
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '4px',
              width: '100%',
              display: 'flex',
            }}
          >
            {/* If product role: order is Template - Component - Release */}
            {isProductRole ? (
              <>
                {/* Template Tab */}
                <div
                  onClick={() => setViewMode('templates')}
                  style={{
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    paddingLeft: '8px',
                    paddingRight: '8px',
                    background: viewMode === 'templates' ? '#353535' : 'transparent',
                    borderRadius: '76px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                    display: 'flex',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                  className="transition-all duration-150"
                >
                  <div
                    style={{
                      textAlign: 'center',
                      color: viewMode === 'templates' ? 'white' : 'rgba(255, 255, 255, 0.50)',
                      fontSize: '14px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '20px',
                      letterSpacing: '0.28px',
                      wordWrap: 'break-word',
                    }}
                  >
                    Template
                  </div>
                  <div
                    style={{
                      minWidth: '16px',
                      paddingLeft: '5px',
                      paddingRight: '5px',
                      background: viewMode === 'templates' ? 'white' : 'rgba(255, 255, 255, 0.25)',
                      borderRadius: '24px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        color: viewMode === 'templates' ? 'black' : 'white',
                        fontSize: '8px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '16px',
                        letterSpacing: '0.80px',
                        wordWrap: 'break-word',
                      }}
                    >
                      {pageTemplates.length}
                    </div>
                  </div>
                </div>

                {/* Component Tab */}
                <div
                  onClick={() => setViewMode('components')}
                  style={{
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    paddingLeft: '8px',
                    paddingRight: '8px',
                    background: viewMode === 'components' ? '#353535' : 'transparent',
                    borderRadius: '76px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                    display: 'flex',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                  className="transition-all duration-150"
                >
                  <div
                    style={{
                      textAlign: 'center',
                      color: viewMode === 'components' ? 'white' : 'rgba(255, 255, 255, 0.50)',
                      fontSize: '14px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '20px',
                      letterSpacing: '0.28px',
                      wordWrap: 'break-word',
                    }}
                  >
                    Component
                  </div>
                  <div
                    style={{
                      minWidth: '16px',
                      paddingLeft: '5px',
                      paddingRight: '5px',
                      background: viewMode === 'components' ? 'white' : 'rgba(255, 255, 255, 0.25)',
                      borderRadius: '24px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        color: viewMode === 'components' ? 'black' : 'white',
                        fontSize: '8px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '16px',
                        letterSpacing: '0.80px',
                        wordWrap: 'break-word',
                      }}
                    >
                      {templates.length}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Component Tab */}
                <div
                  onClick={() => setViewMode('components')}
                  style={{
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    paddingLeft: '8px',
                    paddingRight: '8px',
                    background: viewMode === 'components' ? '#353535' : 'transparent',
                    borderRadius: '76px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                    display: 'flex',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                  className="transition-all duration-150"
                >
                  <div
                    style={{
                      textAlign: 'center',
                      color: viewMode === 'components' ? 'white' : 'rgba(255, 255, 255, 0.50)',
                      fontSize: '14px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '20px',
                      letterSpacing: '0.28px',
                      wordWrap: 'break-word',
                    }}
                  >
                    Component
                  </div>
                  <div
                    style={{
                      minWidth: '16px',
                      paddingLeft: '5px',
                      paddingRight: '5px',
                      background: viewMode === 'components' ? 'white' : 'rgba(255, 255, 255, 0.25)',
                      borderRadius: '24px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        color: viewMode === 'components' ? 'black' : 'white',
                        fontSize: '8px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '16px',
                        letterSpacing: '0.80px',
                        wordWrap: 'break-word',
                      }}
                    >
                      {templates.length}
                    </div>
                  </div>
                </div>

                {/* Template Tab */}
                <div
                  onClick={() => setViewMode('templates')}
                  style={{
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    paddingLeft: '8px',
                    paddingRight: '8px',
                    background: viewMode === 'templates' ? '#353535' : 'transparent',
                    borderRadius: '76px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                    display: 'flex',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                  className="transition-all duration-150"
                >
                  <div
                    style={{
                      textAlign: 'center',
                      color: viewMode === 'templates' ? 'white' : 'rgba(255, 255, 255, 0.50)',
                      fontSize: '14px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      lineHeight: '20px',
                      letterSpacing: '0.28px',
                      wordWrap: 'break-word',
                    }}
                  >
                    Template
                  </div>
                  <div
                    style={{
                      minWidth: '16px',
                      paddingLeft: '5px',
                      paddingRight: '5px',
                      background: viewMode === 'templates' ? 'white' : 'rgba(255, 255, 255, 0.25)',
                      borderRadius: '24px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        color: viewMode === 'templates' ? 'black' : 'white',
                        fontSize: '8px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '16px',
                        letterSpacing: '0.80px',
                        wordWrap: 'break-word',
                      }}
                    >
                      {pageTemplates.length}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Release Tab */}
            <div
              onClick={() => setViewMode('releases')}
              style={{
                paddingTop: '6px',
                paddingBottom: '6px',
                paddingLeft: '8px',
                paddingRight: '8px',
                background: viewMode === 'releases' ? '#353535' : 'transparent',
                borderRadius: '76px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4px',
                display: 'flex',
                cursor: 'pointer',
                flexShrink: 0,
              }}
              className="transition-all duration-150"
            >
              <div
                style={{
                  textAlign: 'center',
                  color: viewMode === 'releases' ? 'white' : 'rgba(255, 255, 255, 0.50)',
                  fontSize: '14px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.28px',
                  wordWrap: 'break-word',
                }}
              >
                Release
              </div>
              <div
                style={{
                  minWidth: '16px',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  background: viewMode === 'releases' ? 'white' : 'rgba(255, 255, 255, 0.25)',
                  borderRadius: '24px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    color: viewMode === 'releases' ? 'black' : 'white',
                    fontSize: '8px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: 400,
                    lineHeight: '16px',
                    letterSpacing: '0.80px',
                    wordWrap: 'break-word',
                  }}
                >
                  {viewMode === 'releases' ? filteredReleases.length : accountReleases.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
