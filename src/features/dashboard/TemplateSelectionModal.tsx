import type { Dispatch, SetStateAction } from 'react';
import { X, Plus, ExternalLink } from 'lucide-react';
import { SectionThumbnail } from '../../components/SectionThumbnail';
import { type PageTemplate } from '../../types';

export interface TemplateSelectionModalProps {
  isTemplateSelectionOpen: boolean;
  onCreateNewCanvas: () => void;
  onSelectPageTemplate: (pt: PageTemplate) => void;
  pageTemplates: PageTemplate[];
  setIsTemplateSelectionOpen: Dispatch<SetStateAction<boolean>>;
}

export function TemplateSelectionModal({
  isTemplateSelectionOpen,
  onCreateNewCanvas,
  onSelectPageTemplate,
  pageTemplates,
  setIsTemplateSelectionOpen,
}: TemplateSelectionModalProps) {
  return (
    <>
      {/* ========================================================
          TEMPLATE SELECTION MODAL
          ======================================================== */}
      {isTemplateSelectionOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setIsTemplateSelectionOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#212121',
              borderRadius: '24px',
              border: '1px solid #3F3F3F',
              width: '100%',
              maxWidth: '800px',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
            className="shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="p-6 border-b border-[#3F3F3F] flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Use Template</h2>
                <p className="text-xs text-stone-400 mt-0.5">
                  Select a page template to start canvas
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsTemplateSelectionOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-stone-400 hover:text-white transition-colors cursor-pointer"
                title="Close"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Option 1: Blank Canvas */}
              <button
                type="button"
                onClick={() => {
                  onCreateNewCanvas();
                  setIsTemplateSelectionOpen(false);
                }}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: '#1A1A1A',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  cursor: 'pointer',
                  border: '1px dashed #555555',
                }}
                className="group hover:ring-1 hover:ring-white/20 hover:border-white/40 transition-all relative select-none shadow-lg text-left"
              >
                <div className="flex items-center justify-between gap-4 w-full">
                  <div
                    style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: "'Season Sans', sans-serif",
                      fontWeight: 500,
                      lineHeight: '20px',
                      letterSpacing: '0.28px',
                    }}
                    className="truncate flex-1"
                  >
                    Blank Canvas
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-stone-300">
                    New Canvas
                  </span>
                </div>
                <div
                  style={{
                    height: '157px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    backgroundColor: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                  className="group-hover:bg-[#111] transition-colors"
                >
                  <div className="flex flex-col items-center gap-2 text-stone-400 group-hover:text-white transition-colors">
                    <Plus className="w-8 h-8" />
                    <span className="text-xs">Mulai dari canvas kosong</span>
                  </div>
                </div>
              </button>

              {pageTemplates.map((pt) => (
                <button
                  key={pt.id}
                  onClick={() => {
                    onSelectPageTemplate(pt);
                    setIsTemplateSelectionOpen(false);
                  }}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: '#1A1A1A',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    cursor: 'pointer',
                    border: '1px solid #3F3F3F',
                  }}
                  className="group hover:ring-1 hover:ring-white/20 transition-all relative select-none shadow-lg text-left"
                >
                  <div className="flex items-center justify-between gap-4 w-full">
                    <div
                      style={{
                        color: 'white',
                        fontSize: '14px',
                        fontFamily: "'Season Sans', sans-serif",
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0.28px',
                      }}
                      className="truncate flex-1"
                    >
                      {pt.name}
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-stone-300">
                      {pt.sections?.length || 0} Components
                    </span>
                  </div>

                  <div
                    style={{
                      height: '157px',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      backgroundColor: 'black',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        width: 'calc(100% - 20px)',
                        height: '148px',
                        marginTop: '9px',
                        borderRadius: '11px',
                        overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: '#0a0a0a',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.7)',
                      }}
                    >
                      <SectionThumbnail sections={pt.sections} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-stone-400 w-full">
                    <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.50)' }}>
                      {pt.isDefault ? 'Standard Template' : 'Custom Template'}
                    </span>
                    <span className="text-white font-medium group-hover:underline flex items-center gap-1">
                      Select <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
