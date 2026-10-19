import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Edit2,
  Check,
  Monitor,
  Smartphone,
  Plus,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
} from 'lucide-react';
import { PageTemplate, SectionTemplate } from '../../types';
import { cleanComponentName } from '../../utils/format';
import { frameClass, renderComponent, renderSections } from '../../preview/prepareSection';

interface TemplatePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: PageTemplate | null;
  templates: SectionTemplate[];
  onUseTemplate: (template: PageTemplate) => void;
  onDuplicateTemplate?: (templateId: string) => void;
  onRenameTemplate?: (templateId: string, newName: string) => void;
  readOnly?: boolean;
}

export const TemplatePreviewModal: React.FC<TemplatePreviewModalProps> = ({
  isOpen,
  onClose,
  template,
  templates,
  onUseTemplate,
  onDuplicateTemplate,
  onRenameTemplate,
  readOnly = false,
}) => {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isRenaming, setIsRenaming] = useState(false);
  const [nameInput, setNameInput] = useState('');

  // Zoom / Scale state (from 0.15 up to 2.0)
  const [scale, setScale] = useState<number>(0.42);

  // Draggable / Pannable frame state
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, initialPanX: 0, initialPanY: 0 });
  const frameRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);

  // Helper to find HTML content for a single section
  const getSectionHtml = (sec: { templateId?: string; name: string; htmlContent?: string }) => {
    if (sec.htmlContent && sec.htmlContent.trim()) {
      return sec.htmlContent;
    }
    const found =
      templates.find((t) => t.id === sec.templateId) ||
      templates.find((t) => t.name.toLowerCase() === sec.name.toLowerCase());
    return found ? found.htmlContent : '';
  };

  // Combined HTML of all sections in the page template for the active device.
  const renderedHtml = useMemo(() => {
    if (!template) return '';
    const sections = template.sections.map((section) => ({
      ...section,
      htmlContent: getSectionHtml(section),
    }));
    return renderSections(sections, { language: 'id', mobile: viewportMode === 'mobile' });
  }, [template, templates, viewportMode]);

  // Reset state when template changes
  useEffect(() => {
    if (template) {
      setNameInput(template.name);
      setIsRenaming(false);
      setPan({ x: 0, y: 0 });
      setViewportMode('desktop');
      setScale(0.42);
    }
  }, [template]);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isRenaming) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, isRenaming, onClose]);

  // Zoom controls
  const handleZoomIn = () => {
    setScale((prev) => Math.min(Number((prev + 0.05).toFixed(2)), 2.0));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(Number((prev - 0.05).toFixed(2)), 0.15));
  };

  const handleResetZoom = () => {
    setScale(viewportMode === 'desktop' ? 0.42 : 0.85);
    setPan({ x: 0, y: 0 });
  };

  const handleFitHeight = useCallback(() => {
    if (!frameRef.current || !contentInnerRef.current) return;
    const availableHeight = frameRef.current.clientHeight - 130;
    const rawHeight = contentInnerRef.current.offsetHeight || 1600;
    if (rawHeight > 0 && availableHeight > 0) {
      const fitScale = Math.min(
        Math.max(Number((availableHeight / rawHeight).toFixed(2)), 0.15),
        1.5,
      );
      setScale(fitScale);
      setPan({ x: 0, y: 0 });
    }
  }, []);

  const handleFitWidth = useCallback(() => {
    if (!frameRef.current) return;
    const availableWidth = frameRef.current.clientWidth - 48;
    const targetW = viewportMode === 'desktop' ? 1440 : 375;
    if (availableWidth > 0) {
      const fitScale = Math.min(Math.max(Number((availableWidth / targetW).toFixed(2)), 0.15), 1.5);
      setScale(fitScale);
      setPan({ x: 0, y: 0 });
    }
  }, [viewportMode]);

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    // Zoom with mouse wheel smoothly
    const delta = e.deltaY < 0 ? 0.04 : -0.04;
    setScale((prev) => Math.min(Math.max(Number((prev + delta).toFixed(2)), 0.15), 2.0));
  };

  if (!isOpen || !template) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      initialPanX: pan.x,
      initialPanY: pan.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPan({
      x: dragStartRef.current.initialPanX + dx,
      y: dragStartRef.current.initialPanY + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSaveRename = () => {
    const trimmed = nameInput.trim();
    if (trimmed && onRenameTemplate && template) {
      onRenameTemplate(template.id, trimmed);
    }
    setIsRenaming(false);
  };

  const hasDescription = Boolean(template.description && template.description.trim());

  const modalElement = (
    <div
      className="fixed inset-0 flex items-center justify-center p-3 sm:p-5"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
        backdropFilter: 'blur(10px)',
        zIndex: 99999,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '1240px',
          maxWidth: '96vw',
          height: '88vh',
          maxHeight: '940px',
          minHeight: 'min(560px, 90vh)',
          padding: '20px',
          background: '#212121',
          borderRadius: '20px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          gap: '16px',
          display: 'flex',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Row: Title with Rename Icon + Close Icon */}
        <div
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '12px',
              display: 'flex',
              minWidth: 0,
            }}
          >
            {isRenaming ? (
              <div className="flex items-center gap-2 flex-1">
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSaveRename();
                    if (e.key === 'Escape') setIsRenaming(false);
                  }}
                  autoFocus
                  style={{
                    color: 'white',
                    fontSize: '22px',
                    fontFamily: "'Season Mix', serif",
                    fontWeight: 420,
                    background: '#353535',
                    borderRadius: '8px',
                    border: '1px solid #FFFFFF',
                    padding: '4px 10px',
                    outline: 'none',
                    width: '100%',
                    maxWidth: '420px',
                  }}
                />
                <button
                  type="button"
                  onClick={handleSaveRename}
                  className="p-1.5 rounded-lg bg-white text-black hover:bg-stone-200 transition-colors cursor-pointer"
                  title="Save Name"
                >
                  <Check className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsRenaming(false)}
                  className="p-1.5 rounded-lg bg-[#353535] text-stone-300 hover:text-white transition-colors cursor-pointer"
                  title="Cancel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <div
                  style={{
                    color: 'white',
                    fontSize: '26px',
                    fontFamily: "'Season Mix', serif",
                    fontWeight: 420,
                    wordWrap: 'break-word',
                  }}
                  className="truncate"
                >
                  {template.name}
                </div>
                {template.category && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 uppercase tracking-wider font-semibold shrink-0">
                    {template.category}
                  </span>
                )}
                {onRenameTemplate && (
                  <button
                    type="button"
                    onClick={() => {
                      setNameInput(template.name);
                      setIsRenaming(true);
                    }}
                    style={{
                      width: '24px',
                      height: '24px',
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 0,
                    }}
                    className="text-stone-300 hover:text-white transition-colors"
                    title="Edit Template Name"
                  >
                    <Edit2 className="w-4 h-4 text-white" />
                  </button>
                )}
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              width: '28px',
              height: '28px',
              position: 'relative',
              overflow: 'hidden',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
            className="text-stone-300 hover:text-white transition-colors"
            title="Close (Esc)"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* 2-Column Content Body (Spacious & Responsive) */}
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            gap: '20px',
            display: 'flex',
            minHeight: 0,
            flex: '1 1 0',
            width: '100%',
          }}
        >
          {/* Left Column: Full-Height Viewport Frame Preview with Zoom & Pan */}
          <div
            ref={frameRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            style={{
              flex: '1 1 0',
              height: '100%',
              minHeight: 0,
              position: 'relative',
              background: '#1a1a1a',
              overflow: 'hidden',
              borderRadius: '16px',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            {/* Top Control Bar: Viewport Switcher (Left) + Zoom / Scale Controls (Right) */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                right: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 40,
                pointerEvents: 'none',
                gap: '12px',
              }}
            >
              {/* Viewport Switcher Pill */}
              <div
                style={{
                  height: '42px',
                  padding: '4px 6px',
                  background: '#353535',
                  borderRadius: '1000px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                  pointerEvents: 'auto',
                }}
                onMouseDown={(e) => e.stopPropagation()}
              >
                {/* Desktop 1440 Tab */}
                <button
                  type="button"
                  onClick={() => {
                    setViewportMode('desktop');
                    setPan({ x: 0, y: 0 });
                    setScale(0.42);
                  }}
                  style={{
                    padding: '6px 12px',
                    background: viewportMode === 'desktop' ? '#212121' : 'transparent',
                    borderRadius: '1000px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Monitor className="w-3.5 h-3.5 text-white" />
                  <span
                    style={{
                      color: 'white',
                      fontSize: '12px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.24px',
                    }}
                  >
                    Desktop 1440
                  </span>
                </button>

                {/* Mobile 375 Tab */}
                <button
                  type="button"
                  onClick={() => {
                    setViewportMode('mobile');
                    setPan({ x: 0, y: 0 });
                    setScale(0.85);
                  }}
                  style={{
                    padding: '6px 12px',
                    background: viewportMode === 'mobile' ? '#212121' : 'transparent',
                    borderRadius: '1000px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Smartphone className="w-3.5 h-3.5 text-white" />
                  <span
                    style={{
                      color: 'white',
                      fontSize: '12px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.24px',
                    }}
                  >
                    Mobile 375
                  </span>
                </button>
              </div>

              {/* Zoom & Scale Control Pill */}
              <div
                style={{
                  height: '42px',
                  padding: '4px 8px',
                  background: '#353535',
                  borderRadius: '1000px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                  pointerEvents: 'auto',
                }}
                onMouseDown={(e) => e.stopPropagation()}
              >
                {/* Zoom Out Button */}
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-full hover:bg-white/10 text-stone-200 hover:text-white transition-colors cursor-pointer"
                  title="Perkecil (Zoom Out)"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>

                {/* Current Zoom Percentage */}
                <span
                  className="text-xs font-mono text-white font-medium min-w-[40px] text-center select-none"
                  title="Skala saat ini"
                >
                  {Math.round(scale * 100)}%
                </span>

                {/* Zoom In Button */}
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-full hover:bg-white/10 text-stone-200 hover:text-white transition-colors cursor-pointer"
                  title="Perbesar (Zoom In)"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <div className="w-px h-4 bg-white/20" />

                {/* Fit Width Button */}
                <button
                  type="button"
                  onClick={handleFitWidth}
                  className="px-2.5 py-1 text-[11px] rounded-full hover:bg-white/10 text-stone-200 hover:text-white transition-colors cursor-pointer font-season-sans"
                  title="Sesuaikan dengan lebar frame"
                >
                  Fit Width
                </button>

                {/* Fit Height Button */}
                <button
                  type="button"
                  onClick={handleFitHeight}
                  className="px-2.5 py-1 text-[11px] rounded-full hover:bg-white/10 text-stone-200 hover:text-white transition-colors cursor-pointer font-season-sans flex items-center gap-1"
                  title="Sesuaikan seluruh tinggi template ke layar"
                >
                  <Maximize2 className="w-3 h-3 text-white" />
                  <span>Fit Height</span>
                </button>

                {/* Reset / Default Zoom Button */}
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
                  title="Reset Zoom & Pan"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Interactive Draggable Canvas Plane */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '76px',
                transform: `translate(calc(-50% + ${pan.x}px), ${pan.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.08s ease-out',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              {/* Scalable Template Canvas Box */}
              <div
                style={{
                  width: viewportMode === 'desktop' ? '1440px' : '375px',
                  transform: `scale(${scale})`,
                  transformOrigin: 'top center',
                  background: 'white',
                  borderRadius: viewportMode === 'desktop' ? '10px' : '16px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                  overflow: 'hidden',
                  pointerEvents: 'none',
                }}
              >
                {renderedHtml ? (
                  <div
                    ref={contentInnerRef}
                    className={`w-full ${frameClass(viewportMode === 'mobile')}`}
                    style={{
                      width: viewportMode === 'desktop' ? '1440px' : '375px',
                      minHeight: '400px',
                      background: 'white',
                    }}
                    dangerouslySetInnerHTML={{ __html: renderedHtml }}
                  />
                ) : (
                  <div className="w-full h-80 flex items-center justify-center text-stone-500 font-season-sans text-sm">
                    Tidak ada konten template untuk ditampilkan
                  </div>
                )}
              </div>
            </div>

            {/* Drag & Wheel Hint */}
            <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/70 backdrop-blur-xs text-white/80 text-[11px] rounded-full pointer-events-none font-season-sans flex items-center gap-2 border border-white/10">
              <span>Tahan & geser untuk navigasi</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>Scroll mouse untuk zoom</span>
            </div>
          </div>

          {/* Right Column: Template Details & Components list + Actions (Pinned at Right) */}
          <div
            style={{
              width: '320px',
              flexShrink: 0,
              alignSelf: 'stretch',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'stretch',
              display: 'flex',
              minWidth: 0,
              minHeight: 0,
            }}
          >
            {/* Top Details & Component List */}
            <div
              style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '14px',
                display: 'flex',
                overflow: 'hidden',
                flex: '1 1 0',
                minHeight: 0,
              }}
            >
              {/* Optional Description Section (hidden if template has no description) */}
              {hasDescription && (
                <>
                  <div
                    style={{
                      alignSelf: 'stretch',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      gap: '4px',
                      display: 'flex',
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        alignSelf: 'stretch',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '16px',
                        display: 'inline-flex',
                      }}
                    >
                      <div
                        style={{
                          flex: '1 1 0',
                          color: 'white',
                          fontSize: '14px',
                          fontFamily: 'Season Sans, sans-serif',
                          fontWeight: 400,
                          lineHeight: '20px',
                          letterSpacing: '0.28px',
                          wordWrap: 'break-word',
                        }}
                      >
                        Detail Template
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: 'stretch',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          alignSelf: 'stretch',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '10px',
                          display: 'inline-flex',
                        }}
                      >
                        <div
                          style={{
                            flex: '1 1 0',
                            color: 'rgba(255, 255, 255, 0.50)',
                            fontSize: '12px',
                            fontFamily: 'Season Sans, sans-serif',
                            fontWeight: 400,
                            lineHeight: '20px',
                            letterSpacing: '0.24px',
                            wordWrap: 'break-word',
                          }}
                        >
                          {template.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: 'stretch',
                      height: '0px',
                      outline: '1px #353535 solid',
                      outlineOffset: '-0.50px',
                      flexShrink: 0,
                    }}
                  />
                </>
              )}

              {/* Komponen Header */}
              <div
                style={{
                  alignSelf: 'stretch',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  display: 'inline-flex',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '8px',
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: 'Season Sans, sans-serif',
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
                      minWidth: '16px',
                      paddingLeft: '6px',
                      paddingRight: '6px',
                      background: 'rgba(255, 255, 255, 0.25)',
                      borderRadius: '24px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        color: 'white',
                        fontSize: '8px',
                        fontFamily: 'Season Sans, sans-serif',
                        fontWeight: 400,
                        lineHeight: '16px',
                        letterSpacing: '0.80px',
                        wordWrap: 'break-word',
                      }}
                    >
                      {template.sections.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Komponen List */}
              <div
                style={{
                  alignSelf: 'stretch',
                  overflowY: 'auto',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '12px',
                  display: 'flex',
                  flex: '1 1 0',
                  minHeight: 0,
                }}
                className="scrollbar-thin scrollbar-thumb-stone-700 pr-1.5"
              >
                {template.sections.map((sec, idx) => {
                  const sectionHtml = getSectionHtml(sec);
                  const secHtml = sectionHtml
                    ? renderComponent(sectionHtml, { language: 'id', mobile: false })
                    : '';
                  return (
                    <div
                      key={`${sec.templateId || sec.name}-${idx}`}
                      style={{
                        alignSelf: 'stretch',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '12px',
                        display: 'inline-flex',
                        flexShrink: 0,
                      }}
                    >
                      {/* Section Thumbnail */}
                      <div
                        style={{
                          width: '72px',
                          height: '48px',
                          position: 'relative',
                          overflow: 'hidden',
                          borderRadius: '10px',
                          background: '#686868',
                          flexShrink: 0,
                        }}
                      >
                        {secHtml ? (
                          <div
                            className="desktop-preview-frame"
                            style={{
                              width: '1280px',
                              transform: 'scale(0.05625)', // 72 / 1280 = 0.05625
                              transformOrigin: 'top left',
                              background: 'white',
                              pointerEvents: 'none',
                            }}
                            dangerouslySetInnerHTML={{ __html: secHtml }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[10px] text-white/50">
                            Preview
                          </div>
                        )}
                      </div>

                      {/* Section Name */}
                      <div
                        style={{
                          flex: '1 1 0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          gap: '16px',
                          display: 'flex',
                          minWidth: 0,
                        }}
                      >
                        <div
                          style={{
                            flex: '1 1 0',
                            color: 'white',
                            fontSize: '15px',
                            fontFamily: 'Season Sans, sans-serif',
                            fontWeight: 400,
                            lineHeight: '22px',
                            letterSpacing: '0.3px',
                            wordWrap: 'break-word',
                          }}
                          className="truncate"
                        >
                          {cleanComponentName(sec.name)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '12px',
                display: 'flex',
                paddingTop: '16px',
                borderTop: '1px solid #353535',
                flexShrink: 0,
              }}
            >
              {readOnly ? (
                <div
                  style={{
                    paddingLeft: '18px',
                    paddingRight: '18px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    background: '#2A2A2A',
                    borderRadius: '76px',
                    color: '#A0A0A0',
                    fontSize: '13px',
                    fontFamily: 'Season Sans, sans-serif',
                    border: '1px solid #3F3F3F',
                  }}
                  className="select-none flex items-center gap-2"
                >
                  <span>Preview Only (File Tim)</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    onUseTemplate(template);
                    onClose();
                  }}
                  style={{
                    paddingLeft: '18px',
                    paddingRight: '18px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    background: 'white',
                    borderRadius: '76px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    display: 'flex',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  className="hover:bg-stone-200 transition-colors active:scale-98"
                >
                  <Plus className="w-4 h-4 text-black" />
                  <div
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '14px',
                      fontFamily: 'Season Sans, sans-serif',
                      fontWeight: 400,
                      wordWrap: 'break-word',
                    }}
                  >
                    Use Template
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, document.body);
};
