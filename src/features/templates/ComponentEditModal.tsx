import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Check,
  Monitor,
  Smartphone,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Image as ImageIcon,
  Type,
  Search,
  UploadCloud,
  Lock,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

import { componentRegistry } from '../../services/library';
import type { AppUser, MediaItem, SectionTemplate } from '../../types';
import { frameClass, renderComponent } from '../../preview/prepareSection';
import { cleanComponentName } from '../../utils/format';
import { ImageUploadModal } from '../media/ImageUploadModal';

export interface ComponentEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: SectionTemplate | null;
  onSave: (templateId: string, updatedHtml: string, updatedName: string) => Promise<void>;
  currentUser: AppUser;
  mediaLibrary: MediaItem[];
}

interface DetectedTextField {
  id: string;
  label: string;
  originalValue: string;
  currentValue: string;
  isHeading?: boolean;
  isButton?: boolean;
  tagName: string;
  maxLength: number;
}

interface DetectedImageField {
  id: string;
  label: string;
  originalSrc: string;
  currentSrc: string;
  altText?: string;
  isLogo?: boolean;
  isBackground?: boolean;
}

export const ComponentEditModal: React.FC<ComponentEditModalProps> = ({
  isOpen,
  onClose,
  template,
  onSave,
  currentUser,
  mediaLibrary,
}) => {
  const isRoleManager = currentUser?.role === 'manager';

  // Navigation & preview mode
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'all' | 'text' | 'image'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Editable fields state
  const [componentName, setComponentName] = useState('');
  const [textFields, setTextFields] = useState<DetectedTextField[]>([]);
  const [imageFields, setImageFields] = useState<DetectedImageField[]>([]);

  // Zoom / Scale state for live preview
  const [scale, setScale] = useState<number>(0.5);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, initialPanX: 0, initialPanY: 0 });
  const frameRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);

  // Image Upload / Selection modal
  const [activeImagePicker, setActiveImagePicker] = useState<{
    fieldId: string;
    label: string;
    currentSrc: string;
  } | null>(null);

  // Success indicator
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);
  const fieldRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Parse template HTML on open
  useEffect(() => {
    if (!template) return;
    setComponentName(cleanComponentName(template.name));
    setPan({ x: 0, y: 0 });
    setShowSavedFeedback(false);

    const parser = new DOMParser();
    const doc = parser.parseFromString(template.htmlContent, 'text/html');

    // 1. Detect Images
    const detectedImgs: DetectedImageField[] = [];
    const seenImgSrcs = new Set<string>();

    const imgElements = doc.querySelectorAll('img, [data-editable-image]');
    imgElements.forEach((el, index) => {
      const src = el.tagName === 'IMG' ? (el as HTMLImageElement).getAttribute('src') || '' : '';
      const editableKey =
        el.getAttribute('data-editable-image') ||
        el.getAttribute('data-editable') ||
        `img-${index}`;
      const alt = el.getAttribute('alt') || '';

      const srcLower = src.toLowerCase();
      const altLower = alt.toLowerCase();
      const keyLower = editableKey.toLowerCase();

      const isLogo =
        srcLower.includes('logo') ||
        altLower.includes('logo') ||
        keyLower.includes('logo') ||
        altLower.includes('pegadaian') ||
        srcLower.includes('pegadaian');

      const isBackground =
        srcLower.includes('background') ||
        srcLower.includes('bg') ||
        altLower.includes('background') ||
        keyLower.includes('bg');

      let label = isLogo
        ? 'Logo Pegadaian'
        : isBackground
          ? 'Background Gambar'
          : alt.trim()
            ? `Gambar: ${alt}`
            : `Gambar ${detectedImgs.length + 1}`;

      const fieldId = `img-field-${index}-${editableKey}`;

      if (src && !seenImgSrcs.has(src)) {
        seenImgSrcs.add(src);
        detectedImgs.push({
          id: fieldId,
          label,
          originalSrc: src,
          currentSrc: src,
          altText: alt,
          isLogo,
          isBackground,
        });
      }
    });

    // Also detect inline background-image: url(...) styles if no regular <img> or additional bg
    const elementsWithBg = doc.querySelectorAll(
      '[style*="background-image"], [style*="background: url"], [style*="background:url"]',
    );
    elementsWithBg.forEach((el, index) => {
      const style = el.getAttribute('style') || '';
      const match = style.match(/url\(['"]?([^'")]+)['"]?\)/);
      if (match && match[1]) {
        const bgUrl = match[1];
        if (!seenImgSrcs.has(bgUrl)) {
          seenImgSrcs.add(bgUrl);
          detectedImgs.push({
            id: `bg-style-${index}`,
            label: 'Background CSS Image',
            originalSrc: bgUrl,
            currentSrc: bgUrl,
            isBackground: true,
          });
        }
      }
    });

    setImageFields(detectedImgs);

    // 2. Detect Text Fields
    const detectedTexts: DetectedTextField[] = [];
    const seenTexts = new Set<string>();

    // First scan [data-editable] if present
    const explicitEditable = doc.querySelectorAll('[data-editable]');
    if (explicitEditable.length > 0) {
      explicitEditable.forEach((el, index) => {
        const key = el.getAttribute('data-editable') || `text-${index}`;
        const text = el.textContent?.trim() || '';
        if (text.length > 0 && !seenTexts.has(text)) {
          seenTexts.add(text);
          let label = key
            .replace(/^m-/, '')
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase());

          const tagName = el.tagName.toLowerCase();
          const isHeading = tagName.startsWith('h') || text.length < 50;
          const isButton = tagName === 'button' || tagName === 'a';

          detectedTexts.push({
            id: `txt-${index}-${key}`,
            label,
            originalValue: text,
            currentValue: text,
            isHeading,
            isButton,
            tagName,
            maxLength: Math.max(text.length * 2, 60),
          });
        }
      });
    }

    // Also scan headings, buttons, and paragraphs to ensure every editable text is detected
    const candidateNodes = doc.querySelectorAll(
      'h1, h2, h3, h4, h5, h6, button, a, [data-size], p',
    );
    candidateNodes.forEach((node, idx) => {
      const text = node.textContent?.trim() || '';
      // Only take leaf or near-leaf elements with clean text
      if (
        text.length > 0 &&
        text.length < 500 &&
        !seenTexts.has(text) &&
        node.children.length <= 1
      ) {
        seenTexts.add(text);
        const tag = node.tagName.toLowerCase();
        const isHeading = tag.startsWith('h') || (tag === 'div' && text.length <= 50);
        const isButton = tag === 'button' || tag === 'a';

        let label = isHeading
          ? `Judul: ${text.slice(0, 24)}...`
          : isButton
            ? `Tombol: ${text.slice(0, 20)}...`
            : `Teks ${detectedTexts.length + 1}: ${text.slice(0, 20)}...`;

        detectedTexts.push({
          id: `node-${idx}-${tag}`,
          label,
          originalValue: text,
          currentValue: text,
          isHeading,
          isButton,
          tagName: tag,
          maxLength: Math.max(text.length * 2, 80),
        });
      }
    });

    setTextFields(detectedTexts);
  }, [template]);

  // Compute modified HTML by applying changes from textFields and imageFields
  const updatedHtml = useMemo(() => {
    if (!template || !template.htmlContent) return '';
    let result = template.htmlContent;

    // Apply image replacements
    imageFields.forEach((img) => {
      if (img.currentSrc !== img.originalSrc && img.originalSrc.trim()) {
        const escapedOrig = img.originalSrc.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(escapedOrig, 'g');
        result = result.replace(regex, img.currentSrc);
      }
    });

    // Apply text replacements
    textFields.forEach((txt) => {
      if (txt.currentValue !== txt.originalValue && txt.originalValue.trim()) {
        // Safe replacement in HTML
        const origTrimmed = txt.originalValue.trim();
        const newTrimmed = txt.currentValue;

        // Replace exact occurrences
        const escaped = origTrimmed.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`(>|^|")\\s*${escaped}\\s*(<|$|")`, 'g');
        result = result.replace(regex, `$1${newTrimmed}$2`);
      }
    });

    return result;
  }, [template, textFields, imageFields]);

  // Viewport rendered HTML
  const renderedHtml = useMemo(() => {
    if (!updatedHtml) return '';
    return renderComponent(updatedHtml, { language: 'id', mobile: viewportMode === 'mobile' });
  }, [updatedHtml, viewportMode]);

  // Auto-fit scale calculation
  const calculateFitScale = useCallback(() => {
    if (!frameRef.current || !contentInnerRef.current) return;
    const frameW = frameRef.current.clientWidth;
    const frameH = frameRef.current.clientHeight;
    if (frameW <= 0 || frameH <= 0) return;

    const availableW = Math.max(frameW - 40, 100);
    const availableH = Math.max(frameH - 90, 100);

    const targetW = viewportMode === 'desktop' ? 1440 : 375;
    const rawH =
      contentInnerRef.current.scrollHeight ||
      contentInnerRef.current.offsetHeight ||
      (viewportMode === 'desktop' ? 500 : 667);

    setContentHeight(rawH);

    const scaleW = availableW / targetW;
    const scaleH = availableH / Math.max(rawH, 1);

    let fit = Math.min(scaleW, scaleH);
    if (viewportMode === 'desktop') {
      fit = Math.min(fit, 0.58);
    } else {
      fit = Math.min(fit, 0.72);
    }
    fit = Math.max(Number(fit.toFixed(2)), 0.15);
    setScale(fit);
    setPan({ x: 0, y: 0 });
  }, [viewportMode]);

  useEffect(() => {
    if (!isOpen || !template) return;
    const timer = setTimeout(() => {
      calculateFitScale();
    }, 40);

    const handleResize = () => calculateFitScale();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, template?.id, viewportMode, calculateFitScale]);

  // Handlers for modifying text and images
  const handleTextChange = (fieldId: string, val: string) => {
    if (!isRoleManager) return;
    setTextFields((prev) => prev.map((f) => (f.id === fieldId ? { ...f, currentValue: val } : f)));
  };

  const handleMaxLengthChange = (fieldId: string, newMax: number) => {
    if (!isRoleManager) return;
    setTextFields((prev) =>
      prev.map((f) => (f.id === fieldId ? { ...f, maxLength: Math.max(1, newMax) } : f)),
    );
  };

  const handleImageChange = (fieldId: string, newSrc: string) => {
    if (!isRoleManager) return;
    setImageFields((prev) =>
      prev.map((f) => (f.id === fieldId ? { ...f, currentSrc: newSrc } : f)),
    );
  };

  const handleResetToOriginal = () => {
    if (!template) return;
    const originalMaster = componentRegistry.get(template.id);

    // Reset fields
    setTextFields((prev) => prev.map((f) => ({ ...f, currentValue: f.originalValue })));
    setImageFields((prev) => prev.map((f) => ({ ...f, currentSrc: f.originalSrc })));
    setComponentName(originalMaster ? originalMaster.name : template.name);
  };

  const handleSave = async () => {
    if (!isRoleManager || !template) return;
    await onSave(template.id, updatedHtml, componentName.trim() || template.name);
    setShowSavedFeedback(true);
    setTimeout(() => {
      setShowSavedFeedback(false);
      onClose();
    }, 800);
  };

  // Dragging live preview canvas
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

  const handleMouseUp = () => setIsDragging(false);

  const handleWheel = (e: React.WheelEvent) => {
    const delta = e.deltaY < 0 ? 0.04 : -0.04;
    setScale((prev) => Math.min(Math.max(Number((prev + delta).toFixed(2)), 0.15), 2.0));
  };

  // Filter text and image fields based on active tab and search query
  const filteredTextFields = useMemo(() => {
    if (activeTab === 'image') return [];
    if (!searchQuery.trim()) return textFields;
    const q = searchQuery.toLowerCase();
    return textFields.filter(
      (f) => f.label.toLowerCase().includes(q) || f.currentValue.toLowerCase().includes(q),
    );
  }, [textFields, activeTab, searchQuery]);

  const filteredImageFields = useMemo(() => {
    if (activeTab === 'text') return [];
    if (!searchQuery.trim()) return imageFields;
    const q = searchQuery.toLowerCase();
    return imageFields.filter(
      (f) => f.label.toLowerCase().includes(q) || f.currentSrc.toLowerCase().includes(q),
    );
  }, [imageFields, activeTab, searchQuery]);

  if (!isOpen || !template) return null;

  const modalElement = (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '1360px',
          maxWidth: '98vw',
          height: '92vh',
          background: '#181818',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          position: 'relative',
        }}
        className="font-season-sans select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= HEADER BAR ================= */}
        <div className="h-16 px-6 bg-[#212121] border-b border-white/10 flex items-center justify-between shrink-0 gap-4">
          {/* Left: Component Title + Role Manager Mode Badge */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Sliders className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={componentName}
                  onChange={(e) => setComponentName(e.target.value)}
                  disabled={!isRoleManager}
                  className="text-base font-bold text-white bg-transparent hover:bg-white/5 focus:bg-white/10 px-2 py-0.5 rounded outline-none border border-transparent focus:border-white/20 transition-all truncate"
                  title="Klik untuk mengubah nama komponen"
                />
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Mode Edit Role Manager
                </span>
              </div>
              <p className="text-xs text-stone-400 px-2">
                Ubah teks dan gambar (seperti Logo Pegadaian & background) secara langsung
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Reset to Original Button */}
            {isRoleManager && (
              <button
                type="button"
                onClick={handleResetToOriginal}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer"
                title="Kembalikan semua nilai ke template bawaan"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset ke Bawaan</span>
              </button>
            )}

            {/* Save Button */}
            {isRoleManager && (
              <button
                type="button"
                onClick={handleSave}
                disabled={showSavedFeedback}
                className={`px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-lg ${
                  showSavedFeedback
                    ? 'bg-emerald-500 text-white shadow-emerald-500/30'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30 active:scale-95'
                }`}
              >
                {showSavedFeedback ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Perubahan Tersimpan!</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Simpan Perubahan</span>
                  </>
                )}
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Tutup (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= NON-ROLE-MANAGER WARNING ================= */}
        {!isRoleManager && (
          <div className="w-full bg-amber-500/10 border-b border-amber-500/30 px-6 py-2.5 flex items-center justify-between text-xs text-amber-200">
            <div className="flex items-center gap-2 font-medium">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>
                Akses Terbatas: Fitur Edit Teks & Gambar Komponen hanya dapat diakses oleh Role
                Manager.
              </span>
            </div>
            <span className="text-[11px] text-amber-300/80">
              Role Anda saat ini: {currentUser?.role || 'Guest'} (Mode Lihat)
            </span>
          </div>
        )}

        {/* ================= MAIN SPLIT CONTENT ================= */}
        <div className="flex-1 flex min-h-0 overflow-hidden">
          {/* ================= LEFT: LIVE PREVIEW CANVAS ================= */}
          <div className="flex-1 flex flex-col bg-[#121212] relative min-w-0 border-r border-white/10">
            {/* Top Toolbar inside Preview */}
            <div className="h-12 px-4 bg-[#1E1E1E]/80 border-b border-white/5 flex items-center justify-between shrink-0 gap-3 z-10">
              {/* Device Mode Switcher */}
              <div className="flex items-center gap-1 p-1 bg-[#2C2C2C] rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => {
                    setViewportMode('desktop');
                    setPan({ x: 0, y: 0 });
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    viewportMode === 'desktop'
                      ? 'bg-[#181818] text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop 1440</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setViewportMode('mobile');
                    setPan({ x: 0, y: 0 });
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    viewportMode === 'mobile'
                      ? 'bg-[#181818] text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile 375</span>
                </button>
              </div>

              {/* Zoom & Fit Toolbar */}
              <div className="flex items-center gap-1.5 bg-[#2C2C2C] px-2 py-1 rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() =>
                    setScale((prev) => Math.max(Number((prev - 0.05).toFixed(2)), 0.15))
                  }
                  className="p-1 rounded text-stone-300 hover:text-white hover:bg-white/10 cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-mono text-white min-w-[38px] text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setScale((prev) => Math.min(Number((prev + 0.05).toFixed(2)), 2.0))
                  }
                  className="p-1 rounded text-stone-300 hover:text-white hover:bg-white/10 cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <div className="w-px h-3 bg-white/20 mx-1" />
                <button
                  type="button"
                  onClick={calculateFitScale}
                  className="px-2 py-0.5 rounded text-[11px] text-stone-300 hover:text-white hover:bg-white/10 cursor-pointer flex items-center gap-1"
                  title="Fit to Screen"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Fit</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    calculateFitScale();
                    setPan({ x: 0, y: 0 });
                  }}
                  className="p-1 rounded text-stone-300 hover:text-white hover:bg-white/10 cursor-pointer"
                  title="Reset Posisi & Zoom"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Canvas Interactive Frame */}
            <div
              ref={frameRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
              className="flex-1 w-full h-full relative overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
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
                {/* Scaled Component Frame */}
                <div
                  style={{
                    width: `${Math.round((viewportMode === 'desktop' ? 1440 : 375) * scale)}px`,
                    height:
                      contentHeight > 0 ? `${Math.round(contentHeight * scale)}px` : undefined,
                    minHeight: contentHeight > 0 ? undefined : '100px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'white',
                    borderRadius: viewportMode === 'desktop' ? '8px' : '16px',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
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

              {/* Helper badge */}
              <div className="absolute bottom-3 left-4 px-3 py-1 bg-black/70 backdrop-blur-xs text-stone-300 text-[11px] rounded-full pointer-events-none border border-white/10 flex items-center gap-2">
                <span>Geser canvas untuk bergerak</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span>Scroll mouse untuk zoom</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: EDITING CONTROLS PANEL ================= */}
          <div className="w-[420px] bg-[#1E1E1E] flex flex-col shrink-0 overflow-hidden">
            {/* Panel Tabs & Quick Filter */}
            <div className="p-4 border-b border-white/10 space-y-3 bg-[#242424]">
              {/* Filter Tabs */}
              <div className="flex items-center gap-1 p-1 bg-[#151515] rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === 'all'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Semua ({textFields.length + imageFields.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('image')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === 'image'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Gambar ({imageFields.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('text')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === 'text'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <Type className="w-3.5 h-3.5" />
                  <span>Teks ({textFields.length})</span>
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Cari teks atau label gambar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#151515] text-xs text-white placeholder-stone-500 pl-8 pr-3 py-2 rounded-lg border border-white/5 focus:border-emerald-500/50 outline-none transition-all"
                />
              </div>
            </div>

            {/* Scrollable List of Fields */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {/* ================= IMAGES SECTION ================= */}
              {filteredImageFields.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Gambar & Logo ({filteredImageFields.length})</span>
                  </div>

                  {filteredImageFields.map((imgField) => (
                    <div
                      key={imgField.id}
                      ref={(el) => {
                        fieldRefs.current[imgField.id] = el;
                      }}
                      className="p-3.5 rounded-xl border transition-all bg-[#151515] border-white/5 hover:border-white/10"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-xs font-semibold text-white truncate">
                            {imgField.label}
                          </span>
                          {imgField.isLogo && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold uppercase">
                              Logo
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Image Thumbnail & Action */}
                      <div className="flex items-center gap-3">
                        <div
                          className="w-16 h-16 rounded-lg bg-black/60 border border-white/10 p-1 flex items-center justify-center shrink-0 overflow-hidden relative group"
                          style={{
                            backgroundImage:
                              'linear-gradient(45deg, #222 25%, transparent 25%), linear-gradient(-45deg, #222 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #222 75%), linear-gradient(-45deg, transparent 75%, #222 75%)',
                            backgroundSize: '12px 12px',
                            backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
                          }}
                        >
                          {imgField.currentSrc ? (
                            <img
                              src={imgField.currentSrc}
                              alt={imgField.label}
                              className="max-h-full max-w-full object-contain"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <span className="text-[10px] text-stone-500">No Image</span>
                          )}
                        </div>

                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center gap-2">
                            {isRoleManager ? (
                              <button
                                type="button"
                                onClick={() =>
                                  setActiveImagePicker({
                                    fieldId: imgField.id,
                                    label: imgField.label,
                                    currentSrc: imgField.currentSrc,
                                  })
                                }
                                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                              >
                                <UploadCloud className="w-3.5 h-3.5" />
                                <span>Ganti Gambar</span>
                              </button>
                            ) : (
                              <span className="text-xs text-stone-500 flex items-center gap-1">
                                <Lock className="w-3 h-3" /> Read-only
                              </span>
                            )}

                            {/* Quick Pegadaian Logo Reset Shortcut if it is a Logo */}
                            {imgField.isLogo && isRoleManager && (
                              <button
                                type="button"
                                onClick={() =>
                                  handleImageChange(imgField.id, '/logo-pegadaian.png')
                                }
                                className="px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white text-[11px] font-medium transition-all cursor-pointer"
                                title="Gunakan Logo Resmi Pegadaian"
                              >
                                Gunakan Logo Pegadaian
                              </button>
                            )}
                          </div>

                          <div
                            className="text-[11px] text-stone-400 truncate"
                            title={imgField.currentSrc}
                          >
                            {imgField.currentSrc || 'Belum ada URL'}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ================= TEXT SECTION ================= */}
              {filteredTextFields.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider">
                    <Type className="w-3.5 h-3.5" />
                    <span>Teks Komponen ({filteredTextFields.length})</span>
                  </div>

                  {filteredTextFields.map((txtField) => {
                    const isLongText =
                      txtField.currentValue.length > 60 || txtField.currentValue.includes('\n');
                    return (
                      <div
                        key={txtField.id}
                        ref={(el) => {
                          fieldRefs.current[txtField.id] = el;
                        }}
                        className="p-3.5 rounded-xl border transition-all bg-[#151515] border-white/5 hover:border-white/10"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-semibold text-white truncate max-w-[260px]">
                            {txtField.label}
                          </label>
                          <div className="flex items-center gap-1.5 text-[10px] text-stone-500 font-mono">
                            <span>{txtField.currentValue.length} /</span>
                            {isRoleManager ? (
                              <input
                                type="number"
                                min={1}
                                max={1000}
                                value={txtField.maxLength}
                                onChange={(e) =>
                                  handleMaxLengthChange(txtField.id, parseInt(e.target.value) || 1)
                                }
                                className="w-12 bg-[#202020] text-[10px] font-mono text-emerald-300 px-1 py-0.5 rounded border border-white/10 text-center outline-none focus:border-teal-500"
                                title="Ubah max character"
                              />
                            ) : (
                              <span>{txtField.maxLength}</span>
                            )}
                            <span>char</span>
                          </div>
                        </div>

                        {isLongText ? (
                          <textarea
                            rows={3}
                            value={txtField.currentValue}
                            disabled={!isRoleManager}
                            onChange={(e) => handleTextChange(txtField.id, e.target.value)}
                            className="w-full bg-[#202020] text-xs text-white p-2.5 rounded-lg border border-white/10 focus:border-teal-500/60 focus:bg-[#252525] outline-none transition-all resize-y disabled:opacity-60 disabled:cursor-not-allowed leading-relaxed"
                          />
                        ) : (
                          <input
                            type="text"
                            value={txtField.currentValue}
                            disabled={!isRoleManager}
                            onChange={(e) => handleTextChange(txtField.id, e.target.value)}
                            className="w-full bg-[#202020] text-xs text-white px-3 py-2 rounded-lg border border-white/10 focus:border-teal-500/60 focus:bg-[#252525] outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {filteredTextFields.length === 0 && filteredImageFields.length === 0 && (
                <div className="py-12 text-center text-stone-500 text-xs">
                  Tidak ada field yang cocok dengan pencarian "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL IMAGE PICKER ================= */}
      {activeImagePicker && (
        <ImageUploadModal
          isOpen={Boolean(activeImagePicker)}
          onClose={() => setActiveImagePicker(null)}
          onSelectImage={(newUrl) => {
            if (activeImagePicker) {
              handleImageChange(activeImagePicker.fieldId, newUrl);
            }
            setActiveImagePicker(null);
          }}
          mediaLibrary={mediaLibrary}
          fieldLabel={activeImagePicker.label}
          currentValue={activeImagePicker.currentSrc}
        />
      )}
    </div>
  );

  return createPortal(modalElement, document.body);
};
