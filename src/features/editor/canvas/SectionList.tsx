import { Layers } from 'lucide-react';
import { canRemoveSection } from '../../../domain/canvasPolicy';
import type { AppUser, PlacedSection, PreviewLanguage } from '../../../types';
import { CanvasSectionBlock } from './CanvasSectionBlock';
import type { SectionDrag } from './useSectionDrag';

export interface InlineEditingTarget {
  instanceId: string;
  key: string;
  label: string;
}

export interface SectionListProps {
  sections: PlacedSection[];
  activeSectionId: string | null;
  isMobileVariant: boolean;
  isLight: boolean;
  currentScale: number;
  previewLanguage: PreviewLanguage;
  drag: SectionDrag;
  currentUser: AppUser;
  isEditable: boolean;
  isExportingPdf: boolean;
  canLockPositions: boolean;
  placeholderImage?: string;
  onSelectSection: (instanceId: string) => void;
  onUpdateSection: (instanceId: string, values: Record<string, string>, html?: string) => void;
  onMoveSection: (index: number, direction: 'up' | 'down') => void;
  onDuplicateSection: (instanceId: string) => void;
  onRemoveSection: (instanceId: string) => void;
  onToggleSectionLock: (instanceId: string) => void;
  onOpenImagePicker: (instanceId: string, fieldKey: string, currentSrc: string) => void;
  onSetActiveInlineEditing: (target: InlineEditingTarget | null) => void;
  onUnauthorizedEdit: () => void;
}

/** The placed sections of one device frame, or the empty drop target. */
export function SectionList({
  sections,
  activeSectionId,
  isMobileVariant,
  isLight,
  currentScale,
  previewLanguage,
  drag,
  currentUser,
  isEditable,
  isExportingPdf,
  canLockPositions,
  placeholderImage,
  onSelectSection,
  onUpdateSection,
  onMoveSection,
  onDuplicateSection,
  onRemoveSection,
  onToggleSectionLock,
  onOpenImagePicker,
  onSetActiveInlineEditing,
  onUnauthorizedEdit,
}: SectionListProps) {
  if (sections.length === 0)
    return (
      <div
        className={`flex-1 w-full flex flex-col items-center justify-center text-center my-auto ${
          isMobileVariant ? 'p-6 min-h-[460px]' : 'p-10 min-h-[500px]'
        } ${isLight ? 'bg-stone-50' : 'bg-[#353535]'}`}
      >
        <div
          className={`p-3 rounded-full flex items-center justify-center shadow-inner ${
            isLight ? 'bg-stone-200 text-stone-800' : 'bg-[#212121] text-white'
          }`}
        >
          <Layers
            className={`${isMobileVariant ? 'w-5 h-5' : 'w-6 h-6'} text-white stroke-[1.5]`}
          />
        </div>
        <div className="flex flex-col items-center gap-1.5 mt-4">
          <p
            className={`font-season-mix font-[420] text-white ${
              isMobileVariant ? 'text-lg' : 'text-[27px]'
            } leading-tight`}
          >
            Drop your component here
          </p>
          <p
            className={`font-season-sans font-normal text-[#6E6E6E] ${
              isMobileVariant ? 'text-[10px] max-w-[220px]' : 'text-[12px] w-[320px]'
            } text-center leading-relaxed`}
          >
            Drag HTML sections from the left sidebar or click components to build your page
            structure.
          </p>
        </div>
      </div>
    );

  return (
    <div className="space-y-0 flex-1 w-full">
      {sections.map((section, index) => (
        <CanvasSectionBlock
          key={`${section.instanceId}-${isMobileVariant ? 'm' : 'd'}`}
          section={section}
          index={index}
          isActive={activeSectionId === section.instanceId}
          isMobileVariant={isMobileVariant}
          currentScale={currentScale}
          previewLanguage={previewLanguage}
          draggedIndex={drag.draggedIndex}
          dragOverIndex={drag.dragOverIndex}
          dragPosition={drag.dragPosition}
          onSelectSection={onSelectSection}
          onUpdateSection={onUpdateSection}
          onMoveSection={onMoveSection}
          onDuplicateSection={onDuplicateSection}
          onRemoveSection={onRemoveSection}
          onOpenImageModal={onOpenImagePicker}
          onSetActiveInlineEditing={onSetActiveInlineEditing}
          onItemDragStart={drag.handleItemDragStart}
          onItemDragOver={drag.handleItemDragOver}
          onItemDragLeave={drag.handleItemDragLeave}
          onItemDrop={drag.handleItemDrop}
          onItemDragEnd={drag.handleItemDragEnd}
          totalSections={sections.length}
          isEditable={isEditable}
          canEditComponent
          onUnauthorizedEdit={onUnauthorizedEdit}
          isExportingPdf={isExportingPdf}
          canLock={canLockPositions}
          onToggleLock={onToggleSectionLock}
          canDelete={canRemoveSection(currentUser, section)}
          currentUser={currentUser}
          placeholderImage={placeholderImage}
        />
      ))}
    </div>
  );
}
