import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Edit2,
  Edit3,
  Check,
  Monitor,
  Smartphone,
  Plus,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
} from 'lucide-react';
import type { AppUser, SectionTemplate } from '../../types';
import { frameClass, renderComponent } from '../../preview/prepareSection';

interface ComponentPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: SectionTemplate | null;
  onAddToCanvas?: (template: SectionTemplate) => void;
  showAddToCanvas?: boolean;
  onRename?: (templateId: string, newName: string) => void;
  hideRename?: boolean;
  currentUser?: AppUser;
  onOpenEdit?: (template: SectionTemplate) => void;
}

export const ComponentPreviewModal: React.FC<ComponentPreviewModalProps> = ({
  isOpen,
  onClose,
  template,
  onAddToCanvas,
  showAddToCanvas,
  onRename,
  hideRename,
  currentUser,
  onOpenEdit,
}) => {
  const isRoleManager = currentUser?.role === 'manager';
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isRenaming, setIsRenaming] = useState(false);
  const [nameInput, setNameInput] = useState('');

  // Zoom / Scale state
  const [scale, setScale] = useState<number>(0.52);
  const [contentHeight, setContentHeight] = useState<number>(0);

  // Draggable / Pannable frame state
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, initialPanX: 0, initialPanY: 0 });
  const frameRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);

  // HTML content prepared for active viewport mode
  const renderedHtml = useMemo(() => {
    if (!template || !template.htmlContent) return '';
    return renderComponent(template.htmlContent, {
      language: 'id',
      mobile: viewportMode === 'mobile',
    });
  }, [template, viewportMode]);

  // Measure content and calculate optimal fit scale to ensure nothing is cut off
  const calculateFitScale = useCallback(() => {
    if (!frameRef.current || !contentInnerRef.current) return;
    const frameW = frameRef.current.clientWidth;
    const frameH = frameRef.current.clientHeight;
    if (frameW <= 0 || frameH <= 0) return;

    // Available preview space inside frame
    const availableW = Math.max(frameW - 48, 120);
    const availableH = Math.max(frameH - 110, 120); // space for top floating pill and padding

    const targetW = viewportMode === 'desktop' ? 1440 : 375;
    const rawH =
      contentInnerRef.current.scrollHeight ||
      contentInnerRef.current.offsetHeight ||
      (viewportMode === 'desktop' ? 500 : 667);

    setContentHeight(rawH);

    const scaleW = availableW / targetW;
    const scaleH = availableH / Math.max(rawH, 1);

    // Fit whichever dimension is more constrained to prevent any cropping ("jangan ada yang terpotong")
    let fit = Math.min(scaleW, scaleH);

    // Keep within comfortable bounds
    if (viewportMode === 'desktop') {
      fit = Math.min(fit, 0.58);
    } else {
      // Mobile proportion: scale nicely to look like a realistic device preview, not oversized
      fit = Math.min(fit, 0.75);
    }

    fit = Math.max(Number(fit.toFixed(2)), 0.15);
    setScale(fit);
    setPan({ x: 0, y: 0 });
  }, [viewportMode]);

  // Reset when a new template opens (only depends on template?.id, NOT on calculateFitScale)
  useEffect(() => {
    if (template) {
      setNameInput(template.name);
      setIsRenaming(false);
      setPan({ x: 0, y: 0 });
      setViewportMode('desktop');
    }
  }, [template?.id]);

  // Recalculate fit scale on viewport switch, template change, or window resize
  useEffect(() => {
    if (!isOpen || !template) return;
    const timer = setTimeout(() => {
      calculateFitScale();
    }, 30);

    const handleResize = () => {
      calculateFitScale();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, template?.id, viewportMode, calculateFitScale]);

  const handleSwitchToDesktop = () => {
    setViewportMode('desktop');
    setPan({ x: 0, y: 0 });
  };

  const handleSwitchToMobile = () => {
    setViewportMode('mobile');
    setPan({ x: 0, y: 0 });
  };

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

  const handleWheel = (e: React.WheelEvent) => {
    const delta = e.deltaY < 0 ? 0.04 : -0.04;
    setScale((prev) => Math.min(Math.max(Number((prev + delta).toFixed(2)), 0.15), 2.0));
  };

  const handleSaveRename = () => {
    const trimmed = nameInput.trim();
    if (trimmed && onRename && template) {
      onRename(template.id, trimmed);
    }
    setIsRenaming(false);
  };

  const showAddButton = showAddToCanvas ?? Boolean(onAddToCanvas);

  const modalElement = (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 sm:p-6"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 99999,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '860px',
          maxWidth: '96vw',
          maxHeight: '94vh',
          padding: '20px',
          background: '#212121',
          borderRadius: '20px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          gap: '20px',
          display: 'flex',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Row: Title with Rename Icon + Close Icon */}
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
              gap: '12px',
              display: 'flex',
              minWidth: 0,
              flex: 1,
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
                    fontSize: '24px',
                    fontFamily: "'Season Mix', serif",
                    fontWeight: 420,
                    wordWrap: 'break-word',
                  }}
                  className="truncate"
                >
                  {template.name}
                </div>
                {onRename && !hideRename && (
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
                    title="Edit Component Name"
                  >
                    <Edit2 className="w-4 h-4 text-white" />
                  </button>
                )}
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            {onOpenEdit && isRoleManager && (
              <button
                type="button"
                onClick={() => {
                  onOpenEdit(template);
                  onClose();
                }}
                className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/35 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95"
                title="Buka Mode Edit Komponen (Ubah Teks & Gambar)"
              >
                <Edit3 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mode Edit</span>
              </button>
            )}

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
        </div>

        {/* Frame Preview: Height with Desktop 1440 / Mobile 375 Switcher, Zoom Controls & Auto-fit Scaled Canvas */}
        <div
          ref={frameRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          style={{
            alignSelf: 'stretch',
            height: '460px',
            position: 'relative',
            background: '#191919',
            overflow: 'hidden',
            borderRadius: '16px',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Top Control Bar: Viewport Switcher + Zoom Controls */}
          <div
            style={{
              position: 'absolute',
              top: '14px',
              left: '16px',
              right: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 50,
              pointerEvents: 'none',
              gap: '12px',
            }}
          >
            {/* Viewport Switcher Pill */}
            <div
              style={{
                height: '40px',
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
              onTouchStart={(e) => e.stopPropagation()}
            >
              {/* Desktop 1440 Tab */}
              <button
                type="button"
                onClick={handleSwitchToDesktop}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                style={{
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  paddingTop: viewportMode === 'desktop' ? '7px' : '5px',
                  paddingBottom: viewportMode === 'desktop' ? '7px' : '5px',
                  background: viewportMode === 'desktop' ? '#212121' : 'transparent',
                  borderRadius: '1000px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  opacity: viewportMode === 'desktop' ? 1 : 0.75,
                }}
                className="hover:opacity-100"
              >
                <Monitor
                  className={`w-3.5 h-3.5 ${viewportMode === 'desktop' ? 'text-white' : 'text-stone-300'}`}
                />
                <span
                  style={{
                    color: viewportMode === 'desktop' ? 'white' : '#d6d6d6',
                    fontSize: '12px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: viewportMode === 'desktop' ? 500 : 400,
                    letterSpacing: '0.24px',
                  }}
                >
                  Desktop 1440
                </span>
              </button>

              {/* Mobile 375 Tab */}
              <button
                type="button"
                onClick={handleSwitchToMobile}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                style={{
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  paddingTop: viewportMode === 'mobile' ? '7px' : '5px',
                  paddingBottom: viewportMode === 'mobile' ? '7px' : '5px',
                  background: viewportMode === 'mobile' ? '#212121' : 'transparent',
                  borderRadius: '1000px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  opacity: viewportMode === 'mobile' ? 1 : 0.75,
                }}
                className="hover:opacity-100"
              >
                <Smartphone
                  className={`w-3.5 h-3.5 ${viewportMode === 'mobile' ? 'text-white' : 'text-stone-300'}`}
                />
                <span
                  style={{
                    color: viewportMode === 'mobile' ? 'white' : '#d6d6d6',
                    fontSize: '12px',
                    fontFamily: 'Season Sans, sans-serif',
                    fontWeight: viewportMode === 'mobile' ? 500 : 400,
                    letterSpacing: '0.24px',
                  }}
                >
                  Mobile 375
                </span>
              </button>
            </div>

            {/* Zoom & Fit Control Pill */}
            <div
              style={{
                height: '40px',
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
              onTouchStart={(e) => e.stopPropagation()}
            >
              {/* Zoom Out Button */}
              <button
                type="button"
                onClick={() => setScale((prev) => Math.max(Number((prev - 0.05).toFixed(2)), 0.15))}
                className="p-1 rounded-full hover:bg-white/10 text-stone-200 hover:text-white transition-colors cursor-pointer"
                title="Perkecil (Zoom Out)"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              {/* Current Zoom Percentage */}
              <span
                className="text-xs font-mono text-white font-medium min-w-[36px] text-center select-none"
                title="Skala saat ini"
              >
                {Math.round(scale * 100)}%
              </span>

              {/* Zoom In Button */}
              <button
                type="button"
                onClick={() => setScale((prev) => Math.min(Number((prev + 0.05).toFixed(2)), 2.0))}
                className="p-1 rounded-full hover:bg-white/10 text-stone-200 hover:text-white transition-colors cursor-pointer"
                title="Perbesar (Zoom In)"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>

              <div className="w-px h-3.5 bg-white/20" />

              {/* Auto Fit Button */}
              <button
                type="button"
                onClick={calculateFitScale}
                className="px-2 py-0.5 text-[11px] rounded-full hover:bg-white/10 text-stone-200 hover:text-white transition-colors cursor-pointer font-season-sans flex items-center gap-1"
                title="Sesuaikan agar seluruh komponen terlihat (Fit Contain)"
              >
                <Maximize2 className="w-3 h-3 text-white" />
                <span>Fit</span>
              </button>

              {/* Reset Zoom & Pan Button */}
              <button
                type="button"
                onClick={() => {
                  calculateFitScale();
                  setPan({ x: 0, y: 0 });
                }}
                className="p-1 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
                title="Reset Posisi & Skala"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Centered Canvas Viewport */}
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              paddingTop: '24px',
            }}
          >
            <div
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.08s ease-out',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Scaled Bounding Box matching EXACT scaled dimensions - prevents cropping or phantom margins */}
              <div
                style={{
                  width: `${Math.round((viewportMode === 'desktop' ? 1440 : 375) * scale)}px`,
                  height: contentHeight > 0 ? `${Math.round(contentHeight * scale)}px` : undefined,
                  minHeight: contentHeight > 0 ? undefined : '100px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'white',
                  borderRadius: viewportMode === 'desktop' ? '8px' : '16px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.55)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  pointerEvents: 'none',
                  flexShrink: 0,
                }}
              >
                <div
                  ref={contentInnerRef}
                  className={frameClass(viewportMode === 'mobile')}
                  style={{
                    width: `${viewportMode === 'desktop' ? 1440 : 375}px`,
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    background: 'white',
                  }}
                  dangerouslySetInnerHTML={{ __html: renderedHtml }}
                />
              </div>
            </div>
          </div>

          {/* Drag & Wheel Hint */}
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-xs text-white/80 text-[11px] rounded-full pointer-events-none font-season-sans flex items-center gap-2 border border-white/10">
            <span>Tahan & geser untuk navigasi</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>Scroll mouse untuk zoom</span>
          </div>
        </div>

        {/* Bottom Action: Tambah Komponen ke Canvas (Removed on Dashboard preview) */}
        {showAddButton && onAddToCanvas && (
          <div className="flex justify-end w-full">
            <button
              type="button"
              onClick={() => {
                onAddToCanvas(template);
                onClose();
              }}
              style={{
                paddingLeft: '18px',
                paddingRight: '18px',
                paddingTop: '11px',
                paddingBottom: '11px',
                background: 'white',
                borderRadius: '76px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                display: 'inline-flex',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease',
              }}
              className="hover:bg-stone-200 active:scale-98"
            >
              <Plus className="w-4 h-4 text-black" />
              <span
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '15px',
                  fontFamily: 'Season Sans, sans-serif',
                  fontWeight: 400,
                }}
              >
                Add Component to Canvas
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalElement, document.body);
};
