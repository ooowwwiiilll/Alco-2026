import React, { useEffect, useRef } from 'react';
import {
  GripVertical,
  ChevronUp,
  ChevronDown,
  Edit3,
  Copy,
  Trash2,
  AlertTriangle,
  Lock,
  Unlock,
} from 'lucide-react';
import { isProduct } from '../../../domain/access';
import { prepareSection } from '../../../preview/prepareSection';
import type { AppUser, PlacedSection, PreviewLanguage } from '../../../types';

interface CanvasSectionBlockProps {
  section: PlacedSection;
  index: number;
  isActive: boolean;
  isMobileVariant: boolean;
  currentScale?: number;
  previewLanguage?: PreviewLanguage;
  draggedIndex: number | null;
  dragOverIndex: number | null;
  dragPosition: 'above' | 'below' | null;
  onSelectSection: (instanceId: string) => void;
  onUpdateSection?: (
    instanceId: string,
    updatedValues: Record<string, string>,
    newHtml?: string,
  ) => void;
  onMoveSection: (index: number, direction: 'up' | 'down') => void;
  onDuplicateSection: (instanceId: string) => void;
  onRemoveSection: (instanceId: string) => void;
  onOpenImageModal: (instanceId: string, fieldKey: string, currentSrc: string) => void;
  onSetActiveInlineEditing: (
    info: { instanceId: string; key: string; label: string } | null,
  ) => void;
  onItemDragStart: (e: React.DragEvent, index: number) => void;
  onItemDragOver: (e: React.DragEvent, index: number) => void;
  onItemDragLeave: (e: React.DragEvent) => void;
  onItemDrop: (e: React.DragEvent, index: number) => void;
  onItemDragEnd: () => void;
  totalSections: number;
  isEditable?: boolean;
  isExportingPdf?: boolean;
  canLock?: boolean;
  onToggleLock?: (instanceId: string) => void;
  canDelete?: boolean;
  canEditComponent?: boolean;
  onUnauthorizedEdit?: () => void;
  currentUser?: AppUser | null;
  /** Replaces the library placeholder image (Role Manager setting). */
  placeholderImage?: string;
}

export const CanvasSectionBlock: React.FC<CanvasSectionBlockProps> = ({
  section,
  index,
  isActive,
  isMobileVariant,
  currentScale = 1,
  previewLanguage = 'id',
  draggedIndex,
  dragOverIndex,
  dragPosition,
  onSelectSection,
  onUpdateSection,
  onMoveSection,
  onDuplicateSection,
  onRemoveSection,
  onOpenImageModal,
  onSetActiveInlineEditing,
  onItemDragStart,
  onItemDragOver,
  onItemDragLeave,
  onItemDrop,
  onItemDragEnd,
  totalSections,
  isEditable = true,
  isExportingPdf = false,
  canLock = false,
  onToggleLock,
  canDelete = true,
  canEditComponent = true,
  onUnauthorizedEdit,
  currentUser,
  placeholderImage,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isUserEditingRef = useRef<boolean>(false);
  const lastSectionIdRef = useRef<string>(section.instanceId);
  const isLocked = !!section.isLocked;

  const isProductRole = isProduct(currentUser);

  // Sanitized markup for this frame; locked fields stay read-only for product users.
  const prepareHtml = () =>
    prepareSection(section, {
      language: previewLanguage,
      mobile: isMobileVariant,
      editable: isEditable,
      respectLocks: isProductRole,
      placeholderImage,
    });

  // Sync DOM with state when section props change (unless user is actively typing in this block)
  useEffect(() => {
    if (!contentRef.current) return;

    // If the instanceId changed, always reset
    if (lastSectionIdRef.current !== section.instanceId) {
      lastSectionIdRef.current = section.instanceId;
      isUserEditingRef.current = false;
    }

    // Only update innerHTML if the user is NOT actively typing inside this specific section
    if (!isUserEditingRef.current) {
      contentRef.current.innerHTML = prepareHtml();
    }
    // prepareHtml reads exactly these inputs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section, isMobileVariant, previewLanguage, isEditable, isProductRole, placeholderImage]);

  // Attach direct DOM event listeners for fast, reliable on-canvas inline editing
  useEffect(() => {
    if (!isEditable) return;
    const container = contentRef.current;
    if (!container) return;

    const handleFocusIn = (e: FocusEvent) => {
      const target = (e.target as HTMLElement).closest(
        '[data-canvas-editable]',
      ) as HTMLElement | null;
      if (!target) return;

      isUserEditingRef.current = true;
      onSelectSection(section.instanceId);

      const key = target.getAttribute('data-editable') || target.tagName.toLowerCase();
      const label = key.replace(/[-_]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

      onSetActiveInlineEditing({
        instanceId: section.instanceId,
        key,
        label,
      });
    };

    const handleInput = (e: Event) => {
      const target = (e.target as HTMLElement).closest(
        '[data-canvas-editable]',
      ) as HTMLElement | null;
      if (!target) return;

      isUserEditingRef.current = true;
      const key = target.getAttribute('data-editable');
      const newText = target.innerText !== undefined ? target.innerText : target.textContent || '';

      if (key && onUpdateSection) {
        const isEn = previewLanguage === 'en';
        const updated = {
          ...(section.customValues || {}),
        };
        if (isEn) {
          updated[`${key}_en`] = newText;
        } else {
          updated[key] = newText;
          updated[`${key}_id`] = newText;
        }
        onUpdateSection(section.instanceId, updated);
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      setTimeout(() => {
        if (!container.contains(document.activeElement)) {
          isUserEditingRef.current = false;
          onSetActiveInlineEditing(null);

          // Re-sync DOM from updated customValues to ensure all copies (desktop & mobile) stay identical
          if (contentRef.current) {
            contentRef.current.innerHTML = prepareHtml();
          }
        }
      }, 70);
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // 1. Check for explicit change-image trigger buttons (e.g. data-change-img="rec-card1-img")
      const changeImgBtn = target.closest('[data-change-img]') as HTMLElement | null;
      if (changeImgBtn) {
        e.preventDefault();
        e.stopPropagation();
        const key = changeImgBtn.getAttribute('data-change-img');
        if (key) {
          const matchedImg = container.querySelector(
            `img[data-editable="${key}"]`,
          ) as HTMLImageElement | null;
          const currentSrc = matchedImg?.src || section.customValues?.[key] || '';
          onOpenImageModal(section.instanceId, key, currentSrc);
          return;
        }
      }

      // 2. Direct or nested Image / Logo Container Click
      const logoOrImgContainer = target.closest(
        '[data-canvas-editable-img="true"], [data-editable*="logo"], [data-editable*="img"], [data-editable*="image"], [data-editable*="avatar"]',
      ) as HTMLElement | null;
      if (logoOrImgContainer) {
        e.preventDefault();
        e.stopPropagation();
        const key =
          logoOrImgContainer.getAttribute('data-editable') ||
          logoOrImgContainer.getAttribute('data-editable-image') ||
          logoOrImgContainer.getAttribute('data-change-img') ||
          'logo';
        const childImg =
          logoOrImgContainer.tagName === 'IMG'
            ? (logoOrImgContainer as HTMLImageElement)
            : logoOrImgContainer.querySelector('img');
        const currentSrc = childImg?.src || section.customValues?.[key] || '';
        onOpenImageModal(section.instanceId, key, currentSrc);
        return;
      }

      let img = target.closest('img') as HTMLImageElement | null;

      // 3. Card/Container Click: If user clicks on an image card/container (and is NOT actively editing text or clicking an anchor/button)
      const isEditableText = target.closest('[data-canvas-editable]') as HTMLElement | null;
      const isAnchor = target.closest('a') as HTMLElement | null;
      if (!img && !isEditableText && !isAnchor) {
        // Look inside the clicked card or wrapper (excluding the root section container)
        const card = target.closest(
          '[data-editable-card], .group, .relative',
        ) as HTMLElement | null;
        if (card && card !== container) {
          const cardKey = card.getAttribute('data-editable-card');
          if (cardKey) {
            const cardImg = container.querySelector(
              `img[data-editable="${cardKey}"]`,
            ) as HTMLImageElement | null;
            if (cardImg) {
              img = cardImg;
            }
          } else {
            const cardImg = card.querySelector(
              'img[data-editable], img[data-canvas-editable-img="true"]',
            ) as HTMLImageElement | null;
            if (cardImg) {
              img = cardImg;
            }
          }
        }
      }

      if (img) {
        e.preventDefault();
        e.stopPropagation();
        const key = img.getAttribute('data-editable') || 'avatar-img';
        onOpenImageModal(section.instanceId, key, img.src);
        return;
      }

      // Handle Contenteditable elements (including buttons and links)
      const editable = target.closest('[data-canvas-editable]') as HTMLElement | null;
      if (editable) {
        onSelectSection(section.instanceId);
        // Prevent button submission or link navigation so text cursor is placed cleanly
        if (editable.tagName === 'BUTTON' || editable.tagName === 'A') {
          e.preventDefault();
        }
        return;
      }

      onSelectSection(section.instanceId);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = (e.target as HTMLElement).closest(
        '[data-canvas-editable]',
      ) as HTMLElement | null;
      if (!target) return;

      if (e.key === 'Escape') {
        target.blur();
      }
    };

    container.addEventListener('focusin', handleFocusIn);
    container.addEventListener('input', handleInput);
    container.addEventListener('focusout', handleFocusOut);
    container.addEventListener('click', handleClick);
    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('focusin', handleFocusIn);
      container.removeEventListener('input', handleInput);
      container.removeEventListener('focusout', handleFocusOut);
      container.removeEventListener('click', handleClick);
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    section.instanceId,
    section.customValues,
    onSelectSection,
    onUpdateSection,
    onOpenImageModal,
    onSetActiveInlineEditing,
  ]);

  const isBeingDragged = draggedIndex === index;
  const isTargeted = dragOverIndex === index;

  return (
    <React.Fragment>
      {/* Top Drop Indicator */}
      {isTargeted && dragPosition === 'above' && (
        <div className="relative py-1.5 flex items-center justify-center animate-in fade-in duration-100 z-50">
          <div className="h-1.5 w-full bg-white rounded-full shadow-lg border border-stone-300 animate-pulse" />
          <span className="absolute px-2.5 py-0.5 bg-stone-900 text-white text-[10px] font-bold rounded-full shadow-md border border-white/40 whitespace-nowrap">
            ↓ Drop & Insert Here
          </span>
        </div>
      )}

      <div
        id={`section-${section.instanceId}`}
        data-section-id={section.instanceId}
        onDragOver={isEditable ? (e) => onItemDragOver(e, index) : undefined}
        onDragLeave={isEditable ? onItemDragLeave : undefined}
        onDrop={isEditable ? (e) => onItemDrop(e, index) : undefined}
        onDragEnd={isEditable ? onItemDragEnd : undefined}
        className={`group relative w-full transition-all duration-150 ${
          isBeingDragged
            ? 'opacity-40 ring-2 ring-dashed ring-white/60 bg-white/10 scale-[0.98]'
            : isActive && isEditable
              ? 'ring-2 ring-white/80 shadow-lg'
              : isEditable
                ? 'hover:ring-2 hover:ring-white/40 hover:shadow-md'
                : ''
        }`}
      >
        {/* Drag Handle, Component Name Tag & Out-Of-Scope Tag on Top Left */}
        <div
          style={{
            transform: `scale(${currentScale > 0 ? 1 / currentScale : 1})`,
            transformOrigin: 'top left',
          }}
          className="absolute top-3 left-3 flex items-center gap-2 z-50 select-none pointer-events-auto"
        >
          {isEditable && !isLocked && (
            <div
              draggable
              onDragStart={(e) => onItemDragStart(e, index)}
              style={{ height: '32px' }}
              className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#212121]/95 hover:bg-[#2c2c2c] text-white text-[12px] font-season-sans font-medium px-3 rounded-[8px] shadow-2xl border border-white/15 flex items-center gap-1.5 cursor-grab active:cursor-grabbing shrink-0"
            >
              <GripVertical className="w-4 h-4 text-stone-300" />
              <span>Drag to reorder</span>
            </div>
          )}

          {/* Locked Position Badge Indicator */}
          {isLocked && (
            <div
              style={{ height: '32px' }}
              className="bg-amber-500/90 hover:bg-amber-500 text-stone-950 text-[11px] font-season-sans font-semibold px-2.5 rounded-[8px] shadow-lg border border-amber-300/80 flex items-center gap-1.5 shrink-0 transition-all animate-in fade-in duration-200"
              title="Posisi komponen terkunci (Lock) — tidak dapat dipindahkan atau di-drag"
            >
              <Lock className="w-3.5 h-3.5 text-stone-950 shrink-0" />
              <span>Posisi Terkunci</span>
            </div>
          )}

          {/* Component Name Badge - ONLY rendered when exporting to PDF */}
          {isExportingPdf && (
            <div
              style={{ height: '32px' }}
              className="bg-[#212121]/95 text-white text-[12px] font-season-sans font-medium px-3 rounded-[8px] shadow-lg border border-white/15 flex items-center gap-1.5 shrink-0"
              title={`Komponen: ${section.name}`}
            >
              <span className="w-2 h-2 rounded-full bg-[#00EFAB]"></span>
              <span>{section.name}</span>
            </div>
          )}

          {section.isOutOfScope && (
            <div
              style={{ height: '32px' }}
              className="bg-amber-500 text-stone-950 font-season-sans font-semibold text-[11px] px-2.5 rounded-[8px] shadow-md border border-amber-300 flex items-center gap-1.5 animate-in fade-in duration-200 shrink-0"
            >
              <AlertTriangle className="w-4 h-4 text-stone-950 shrink-0" />
              <span>Luar Template</span>
            </div>
          )}
        </div>

        {/* Section Content Direct Container */}
        <div
          ref={contentRef}
          style={{
            pointerEvents: 'auto',
            userSelect: 'auto',
          }}
          className={`w-full overflow-hidden ${isMobileVariant ? 'mobile-preview-frame' : 'desktop-preview-frame'}`}
        />

        {/* Floating Control Toolbar on Hover or Active (Only when editable) */}
        {isEditable && (
          <div
            style={{
              transform: `scale(${currentScale > 0 ? 1 / currentScale : 1})`,
              transformOrigin: 'top right',
              height: '32px',
            }}
            className={`absolute top-3 right-3 transition-all bg-[#212121]/95 backdrop-blur-md text-white rounded-[8px] p-0.5 shadow-2xl ring-1 ring-white/15 border border-stone-700/60 flex items-center gap-0.5 z-50 select-none pointer-events-auto ${
              isActive
                ? 'opacity-100 ring-2 ring-white/60 shadow-2xl'
                : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            {/* Drag Handle: Hidden or disabled when locked */}
            {isLocked ? (
              <div
                style={{ width: '32px', height: '32px' }}
                className="opacity-40 rounded-[6px] text-stone-400 cursor-not-allowed flex items-center justify-center shrink-0"
                title="Posisi terkunci - Tidak dapat di-drag"
              >
                <GripVertical className="w-4 h-4 text-stone-500" />
              </div>
            ) : (
              <div
                draggable
                onDragStart={(e) => onItemDragStart(e, index)}
                style={{ width: '32px', height: '32px' }}
                className="hover:bg-white/20 rounded-[6px] text-stone-200 cursor-grab active:cursor-grabbing transition-colors flex items-center justify-center shrink-0"
                title="Drag & Drop to reorder"
              >
                <GripVertical className="w-4 h-4 text-stone-300" />
              </div>
            )}

            {/* Move Up */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (!isLocked) {
                  onMoveSection(index, 'up');
                }
              }}
              disabled={isLocked || index === 0}
              style={{ width: '32px', height: '32px' }}
              className={`rounded-[6px] transition-colors flex items-center justify-center shrink-0 border-none bg-transparent p-0 ${
                isLocked
                  ? 'opacity-30 cursor-not-allowed text-stone-500'
                  : 'hover:bg-white/20 text-white disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer'
              }`}
              title={isLocked ? 'Posisi terkunci' : 'Move Up'}
            >
              <ChevronUp className="w-4 h-4 text-stone-200 hover:text-white" />
            </button>

            {/* Move Down */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (!isLocked) {
                  onMoveSection(index, 'down');
                }
              }}
              disabled={isLocked || index === totalSections - 1}
              style={{ width: '32px', height: '32px' }}
              className={`rounded-[6px] transition-colors flex items-center justify-center shrink-0 border-none bg-transparent p-0 ${
                isLocked
                  ? 'opacity-30 cursor-not-allowed text-stone-500'
                  : 'hover:bg-white/20 text-white disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer'
              }`}
              title={isLocked ? 'Posisi terkunci' : 'Move Down'}
            >
              <ChevronDown className="w-4 h-4 text-stone-200 hover:text-white" />
            </button>

            {/* Lock / Unlock Toggle Button (For Role Manager & Admin during template creation/editing) */}
            {canLock && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onToggleLock) {
                    onToggleLock(section.instanceId);
                  }
                }}
                style={{ width: '32px', height: '32px' }}
                className={`rounded-[6px] cursor-pointer transition-colors flex items-center justify-center shrink-0 border-none p-0 ${
                  isLocked
                    ? 'bg-amber-500 text-stone-950 hover:bg-amber-400 font-semibold shadow-sm'
                    : 'hover:bg-white/20 text-stone-200 hover:text-white bg-transparent'
                }`}
                title={
                  isLocked
                    ? 'Buka Kunci Posisi (Unlock Position)'
                    : 'Kunci Posisi Komponen (Lock Position)'
                }
              >
                {isLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
              </button>
            )}

            {/* Edit Component (Sidebar Content Editing) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (!canEditComponent && onUnauthorizedEdit) {
                  onUnauthorizedEdit();
                  return;
                }
                onSelectSection(section.instanceId);
              }}
              style={{ height: '32px' }}
              className={`px-2.5 rounded-[6px] text-xs font-semibold cursor-pointer transition-all flex items-center gap-1.5 shrink-0 border ${
                canEditComponent
                  ? isLocked && isProductRole
                    ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/30 shadow-xs'
                    : 'bg-emerald-500/25 hover:bg-emerald-500 text-emerald-300 hover:text-stone-950 border-emerald-500/40 shadow-xs'
                  : 'bg-white/5 text-stone-400 hover:bg-white/10 border-white/10'
              }`}
              title={
                isLocked && isProductRole
                  ? 'Komponen Terkunci oleh Team Admin (Buka sidebar untuk melihat detail)'
                  : canEditComponent
                    ? 'Edit Konten di Sidebar'
                    : 'Akses Terbatas: Hanya Role Manager dan Team Product pada template yang dapat mengedit'
              }
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {isLocked && isProductRole ? 'Terkunci' : 'Edit Konten'}
              </span>
              {isLocked && <Lock className="w-3 h-3 text-amber-400 ml-0.5" />}
            </button>

            {/* Duplicate Section */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDuplicateSection(section.instanceId);
              }}
              style={{ width: '32px', height: '32px' }}
              className="hover:bg-white/20 rounded-[6px] text-white cursor-pointer transition-colors flex items-center justify-center shrink-0 border-none bg-transparent p-0"
              title="Duplicate Section"
            >
              <Copy className="w-4 h-4 text-stone-200 hover:text-white" />
            </button>

            {/* Delete Section */}
            {canDelete ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveSection(section.instanceId);
                }}
                style={{ width: '32px', height: '32px' }}
                className="bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white rounded-[6px] cursor-pointer transition-colors shadow-sm border border-rose-500/30 flex items-center justify-center shrink-0 p-0 ml-0.5"
                title="Delete Section"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveSection(section.instanceId);
                }}
                style={{ width: '32px', height: '32px' }}
                className="bg-stone-800/60 text-stone-500 hover:text-stone-400 rounded-[6px] cursor-not-allowed transition-colors border border-stone-700/40 flex items-center justify-center shrink-0 p-0 ml-0.5"
                title="Komponen terkunci tidak dapat dihapus oleh pengguna Product"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Bottom Drop Indicator */}
      {isTargeted && dragPosition === 'below' && (
        <div className="relative py-1.5 flex items-center justify-center animate-in fade-in duration-100 z-50">
          <div className="h-1.5 w-full bg-white rounded-full shadow-lg border border-stone-300 animate-pulse" />
          <span className="absolute px-2.5 py-0.5 bg-stone-900 text-white text-[10px] font-bold rounded-full shadow-md border border-white/40 whitespace-nowrap">
            ↓ Drop & Insert Here
          </span>
        </div>
      )}
    </React.Fragment>
  );
};
