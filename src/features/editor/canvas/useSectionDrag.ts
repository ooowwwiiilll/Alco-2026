import type React from 'react';
import { useState } from 'react';
import { SECTION_DRAG_TYPE } from '../../../hooks/useCanvasActions';
import type { PlacedSection } from '../../../types';

type DropPosition = 'above' | 'below';

interface Options {
  sections: PlacedSection[];
  isEditable: boolean;
  onReorder: (from: number, to: number) => void;
  /** Library component dropped onto the canvas (optionally at an index). */
  onDrop: (event: React.DragEvent, index?: number) => void;
}

/** Drag-and-drop state for reordering sections and dropping library components. */
export function useSectionDrag({ sections, isEditable, onReorder, onDrop }: Options) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [dragPosition, setDragPosition] = useState<DropPosition | null>(null);

  const reset = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
    setDragPosition(null);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    const related = event.relatedTarget as Node | null;
    if (related && event.currentTarget.contains(related)) return;
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
    if (isEditable) onDrop(event);
  };

  const handleItemDragStart = (event: React.DragEvent, index: number) => {
    const target = event.target as HTMLElement;
    const section = sections[index];
    if (target.closest('[data-editable]') || target.isContentEditable || section?.isLocked) {
      event.preventDefault();
      return;
    }
    event.stopPropagation();
    event.dataTransfer.setData(SECTION_DRAG_TYPE, String(index));
    event.dataTransfer.effectAllowed = 'move';
    const element = section && document.getElementById(`section-${section.instanceId}`);
    if (element) event.dataTransfer.setDragImage(element, 60, 30);
    setDraggedIndex(index);
  };

  const handleItemDragOver = (event: React.DragEvent, index: number) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'move';
    const rect = event.currentTarget.getBoundingClientRect();
    setDragOverIndex(index);
    setDragPosition(event.clientY < rect.top + rect.height / 2 ? 'above' : 'below');
  };

  const handleItemDragLeave = (event: React.DragEvent) => {
    event.stopPropagation();
    const related = event.relatedTarget as Node | null;
    if (related && event.currentTarget.contains(related)) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (inside) return;
    setDragOverIndex(null);
    setDragPosition(null);
  };

  const handleItemDrop = (event: React.DragEvent, targetIndex: number) => {
    event.preventDefault();
    event.stopPropagation();
    const index = dragPosition === 'below' ? targetIndex + 1 : targetIndex;
    const from = event.dataTransfer.getData(SECTION_DRAG_TYPE);
    if (from !== '') {
      const fromIndex = Number(from);
      onReorder(fromIndex, Math.max(0, fromIndex < index ? index - 1 : index));
    } else onDrop(event, index);
    reset();
  };

  return {
    isDragOver,
    draggedIndex,
    dragOverIndex,
    dragPosition,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleItemDragStart,
    handleItemDragOver,
    handleItemDragLeave,
    handleItemDrop,
    handleItemDragEnd: reset,
  };
}

export type SectionDrag = ReturnType<typeof useSectionDrag>;
