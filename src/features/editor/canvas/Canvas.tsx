import { useEffect, useState } from 'react';
import { isEditor, isManager } from '../../../domain/access';
import type {
  AppTheme,
  AppUser,
  DeviceMode,
  MediaItem,
  PlacedSection,
  PreviewLanguage,
  ReleaseItem,
  ViewportMode,
} from '../../../types';
import { ImageUploadModal } from '../../media/ImageUploadModal';
import { SidebarToggleIcon } from '../SidebarToggleIcon';

import { BrowserAddressBar } from './BrowserAddressBar';

import { SectionList, type InlineEditingTarget } from './SectionList';
import { useCanvasScale, usePrototypeScale } from './useCanvasScale';
import { useSectionDrag } from './useSectionDrag';
import { PdfExportPages } from './PdfExportPages';
import { PrototypeView } from './PrototypeView';
import { CanvasBottomBar } from './CanvasBottomBar';
import { ClearCanvasDialog } from './ClearCanvasDialog';
import { CanvasViewports } from './CanvasViewports';

export interface CanvasProps {
  placedSections: PlacedSection[];
  activeSectionId: string | null;
  viewportMode: ViewportMode;
  setViewportMode: (mode: ViewportMode) => void;
  previewLanguage: PreviewLanguage;
  onSetPreviewLanguage: (lang: PreviewLanguage) => void;
  onSelectSection: (instanceId: string) => void;
  onMoveSection: (index: number, direction: 'up' | 'down') => void;
  onReorderSections: (fromIndex: number, toIndex: number) => void;
  onRemoveSection: (instanceId: string) => void;
  onDuplicateSection: (instanceId: string) => void;
  onDropTemplate: (e: React.DragEvent, targetIndex?: number) => void;
  onClearAll: () => void;
  onUpdateSection: (
    instanceId: string,
    updatedValues: Record<string, string>,
    newHtml?: string,
  ) => void;
  onToggleSectionLock: (instanceId: string) => void;
  activeTemplateName: string | null;
  activeRelease: ReleaseItem | null;
  isExportingPdf: boolean;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  theme: AppTheme;
  currentUser: AppUser;
  /** False when viewing someone else's release or a read-only preview. */
  isReleaser: boolean;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  autoPlayPrototypeDevice: DeviceMode | null;
  setActiveInlineEditing: (target: InlineEditingTarget | null) => void;
  mediaLibrary: MediaItem[];
  placeholderImage?: string;
  onUnauthorizedEdit: () => void;
}

export function Canvas({
  placedSections,
  activeSectionId,
  viewportMode,
  setViewportMode,
  previewLanguage,
  onSetPreviewLanguage,
  onSelectSection,
  onMoveSection,
  onReorderSections,
  onRemoveSection,
  onDuplicateSection,
  onDropTemplate,
  onClearAll,
  onUpdateSection,
  onToggleSectionLock,
  activeTemplateName,
  activeRelease,
  isExportingPdf,
  isSidebarOpen,
  onToggleSidebar,
  theme,
  currentUser,
  isReleaser,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  autoPlayPrototypeDevice,
  setActiveInlineEditing,
  mediaLibrary,
  placeholderImage,
  onUnauthorizedEdit,
}: CanvasProps) {
  const isRoleManager = isManager(currentUser);
  const isManagerOrAdmin = isEditor(currentUser);
  const isEditable = isReleaser && !isExportingPdf;
  const isLight = theme === 'light';
  const hideSidebarAndActions = isManagerOrAdmin && !!activeRelease;
  // Positions can be locked while building templates, not inside releases.
  const canLockPositions = isManagerOrAdmin && !activeRelease;

  const [prototypeMode, setPrototypeMode] = useState<DeviceMode | null>(null);
  useEffect(() => {
    if (autoPlayPrototypeDevice) setPrototypeMode(autoPlayPrototypeDevice);
  }, [autoPlayPrototypeDevice]);
  const { desktopInnerRef, prototypeScale, desktopScaledHeight } = usePrototypeScale(
    prototypeMode,
    placedSections,
  );
  const { scrollContainerRef, contentMeasureRef, measuredHeight, baseTargetWidth, currentScale } =
    useCanvasScale(viewportMode, placedSections);
  const drag = useSectionDrag({
    sections: placedSections,
    isEditable,
    onReorder: onReorderSections,
    onDrop: onDropTemplate,
  });
  const { isDragOver, handleDragOver, handleDragLeave, handleDrop } = drag;

  const [imageModal, setImageModal] = useState<{
    isOpen: boolean;
    instanceId: string;
    fieldKey: string;
    imageUrl: string;
  } | null>(null);
  const [isClearConfirmOpen, setIsClearConfirmOpen] = useState(false);

  const openImagePicker = (instanceId: string, fieldKey: string, imageUrl: string) => {
    const section = placedSections.find((item) => item.instanceId === instanceId);
    const locked = Boolean(section?.isLocked || section?.lockedFields?.[fieldKey]);
    if (!isEditable || (currentUser.role === 'product' && locked)) {
      onUnauthorizedEdit();
      return;
    }
    setImageModal({ isOpen: true, instanceId, fieldKey, imageUrl });
  };

  const renderSectionList = (isMobileVariant = false) => (
    <SectionList
      sections={placedSections}
      activeSectionId={activeSectionId}
      isMobileVariant={isMobileVariant}
      isLight={isLight}
      currentScale={currentScale}
      previewLanguage={previewLanguage}
      drag={drag}
      currentUser={currentUser}
      isEditable={isEditable}
      isExportingPdf={isExportingPdf}
      canLockPositions={canLockPositions}
      placeholderImage={placeholderImage}
      onSelectSection={onSelectSection}
      onUpdateSection={onUpdateSection}
      onMoveSection={onMoveSection}
      onDuplicateSection={onDuplicateSection}
      onRemoveSection={onRemoveSection}
      onToggleSectionLock={onToggleSectionLock}
      onOpenImagePicker={openImagePicker}
      onSetActiveInlineEditing={setActiveInlineEditing}
      onUnauthorizedEdit={onUnauthorizedEdit}
    />
  );
  const renderBrowserAddressBar = () => <BrowserAddressBar isLight={isLight} />;

  return (
    <main
      className={`flex-1 flex flex-col h-full w-full overflow-hidden transition-colors duration-200 relative ${
        isLight ? 'bg-[#F0F2F5]' : 'bg-alco-canvas'
      }`}
    >
      {/* Sidebar Re-open Floating Button when Sidebar is Collapsed */}
      {onToggleSidebar && !isSidebarOpen && !hideSidebarAndActions && (
        <div className="absolute top-4 left-4 z-40 animate-in fade-in zoom-in-95 duration-150">
          <button
            type="button"
            onClick={onToggleSidebar}
            style={{
              width: '36px',
              height: '36px',
              background: '#1A1A1A',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
            }}
            className="hover:bg-[#262626] text-white transition-colors"
            title="Buka Sidebar"
          >
            <SidebarToggleIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      )}

      <CanvasViewports
        baseTargetWidth={baseTargetWidth}
        contentMeasureRef={contentMeasureRef}
        currentScale={currentScale}
        handleDragLeave={handleDragLeave}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        isDragOver={isDragOver}
        isLight={isLight}
        measuredHeight={measuredHeight}
        renderBrowserAddressBar={renderBrowserAddressBar}
        renderSectionList={renderSectionList}
        scrollContainerRef={scrollContainerRef}
        setPrototypeMode={setPrototypeMode}
        viewportMode={viewportMode}
      />

      {/* Pop-up Upload Image with Image Storage */}
      {imageModal && imageModal.isOpen && (
        <ImageUploadModal
          isOpen={imageModal.isOpen}
          onClose={() => setImageModal(null)}
          onSelectImage={(imageUrl) => {
            if (onUpdateSection) {
              const section = placedSections.find((s) => s.instanceId === imageModal.instanceId);
              if (section) {
                onUpdateSection(section.instanceId, {
                  ...(section.customValues || {}),
                  [imageModal.fieldKey]: imageUrl,
                });
              }
            }
            setImageModal(null);
          }}
          mediaLibrary={mediaLibrary}
          fieldLabel={imageModal.fieldKey}
          currentValue={imageModal.imageUrl}
        />
      )}

      <ClearCanvasDialog
        isClearConfirmOpen={isClearConfirmOpen}
        isLight={isLight}
        onClearAll={onClearAll}
        setIsClearConfirmOpen={setIsClearConfirmOpen}
      />

      <CanvasBottomBar
        canRedo={canRedo}
        canUndo={canUndo}
        hideSidebarAndActions={hideSidebarAndActions}
        isRoleManager={isRoleManager}
        onRedo={onRedo}
        onSetPreviewLanguage={onSetPreviewLanguage}
        onUndo={onUndo}
        previewLanguage={previewLanguage}
        setViewportMode={setViewportMode}
        viewportMode={viewportMode}
      />

      <PrototypeView
        desktopInnerRef={desktopInnerRef}
        desktopScaledHeight={desktopScaledHeight}
        placedSections={placedSections}
        previewLanguage={previewLanguage}
        prototypeMode={prototypeMode}
        prototypeScale={prototypeScale}
        setPrototypeMode={setPrototypeMode}
      />

      <PdfExportPages
        activeRelease={activeRelease}
        activeTemplateName={activeTemplateName}
        isExportingPdf={isExportingPdf}
        placedSections={placedSections}
      />
    </main>
  );
}
