import { cleanComponentName } from '../../../utils/format';
import { CanvasSectionBlock } from './CanvasSectionBlock';
import { Zap, Wifi, Battery } from 'lucide-react';
import { type ReleaseItem, type PlacedSection } from '../../../types';

export interface PdfExportPagesProps {
  activeRelease: ReleaseItem | null;
  activeTemplateName: string | null;
  isExportingPdf: boolean;
  placedSections: PlacedSection[];
}

export function PdfExportPages({
  activeRelease,
  activeTemplateName,
  isExportingPdf,
  placedSections,
}: PdfExportPagesProps) {
  return (
    <>
      {/* OFFSCREEN MULTI-PAGE PDF EXPORT CONTAINER (Page 1: ID, Page 2: EN with Desktop + Mobile Side-by-Side) */}
      {isExportingPdf && (
        <div
          style={{
            position: 'fixed',
            left: '-9999px',
            top: '-9999px',
            zIndex: -100,
            opacity: 1,
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          {/* PAGE 1: BAHASA INDONESIA (ID) - Side-by-Side Desktop (1440px) + Mobile (375px) */}
          <div
            id="export-pdf-page-id"
            style={{
              width: '1940px',
              backgroundColor: '#1e1e1e',
              color: '#ffffff',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              boxSizing: 'border-box',
            }}
            className="font-season-sans"
          >
            {/* Page Header */}
            <div className="w-full px-6 py-4 bg-[#262626] border border-white/10 rounded-[12px] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 className="font-season-mix text-[28px] font-[420] text-white leading-none">
                  {cleanComponentName(
                    activeRelease?.name ||
                      activeTemplateName ||
                      (placedSections.length > 0 ? placedSections[0]?.name : 'PDP Personal'),
                  ) || 'PDP Personal'}
                </h1>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#00EFAB] text-black">
                  Bahasa Indonesia (ID)
                </span>
                {activeRelease && (
                  <span
                    style={{
                      background:
                        activeRelease.status === 'approved'
                          ? '#00EFAB'
                          : activeRelease.status === 'in_review'
                            ? '#DED522'
                            : '#DE225A',
                      color: 'black',
                    }}
                    className="text-[11px] px-3 py-1 rounded-full font-medium"
                  >
                    {activeRelease.status === 'approved'
                      ? 'Approved'
                      : activeRelease.status === 'in_review'
                        ? 'Review'
                        : 'Reject'}
                  </span>
                )}
              </div>
              <div className="text-xs text-stone-400 font-normal">
                {placedSections.length} Komponen Section &bull; Halaman 1 dari 2
              </div>
            </div>

            {/* Side-by-Side Dual View: Left Desktop (1440px), Right Mobile (375px) */}
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
              {/* Left Column: Desktop (1440px) */}
              <div style={{ width: '1440px', flexShrink: 0 }}>
                <div className="mb-2 text-sm font-semibold text-stone-300 flex items-center gap-2">
                  <span>Desktop View (1440px)</span>
                </div>
                <div className="w-[1440px] rounded-[12px] overflow-hidden border border-white/10 bg-[#353535] shadow-2xl">
                  {/* Browser Address Header */}
                  <div className="w-full flex items-center justify-between px-4 py-2.5 bg-[#212121] border-b border-white/10">
                    <div className="flex items-center gap-[6px]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#737373]"></span>
                    </div>
                    <div className="w-[320px] px-3 py-1 bg-[#353535] text-white rounded-[6px] text-xs font-mono text-center truncate">
                      https://www.pegadaian.co.id
                    </div>
                    <div className="text-[10px] font-semibold text-[#6B7280]">1440 px</div>
                  </div>

                  {/* Desktop Sections List (Bahasa ID) */}
                  <div className="space-y-0 w-full bg-[#353535]">
                    {placedSections.map((sec, idx) => (
                      <CanvasSectionBlock
                        key={`pdf-id-d-${sec.instanceId}`}
                        section={sec}
                        index={idx}
                        isActive={false}
                        isMobileVariant={false}
                        previewLanguage="id"
                        draggedIndex={null}
                        dragOverIndex={null}
                        dragPosition={null}
                        onSelectSection={() => {}}
                        onMoveSection={() => {}}
                        onDuplicateSection={() => {}}
                        onRemoveSection={() => {}}
                        onOpenImageModal={() => {}}
                        onSetActiveInlineEditing={() => {}}
                        onItemDragStart={() => {}}
                        onItemDragOver={() => {}}
                        onItemDragLeave={() => {}}
                        onItemDrop={() => {}}
                        onItemDragEnd={() => {}}
                        totalSections={placedSections.length}
                        isEditable={false}
                        isExportingPdf={true}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Mobile (375px) */}
              <div style={{ width: '375px', flexShrink: 0 }}>
                <div className="mb-2 text-sm font-semibold text-stone-300 flex items-center gap-2">
                  <span>Mobile View (375px)</span>
                </div>
                <div className="w-[375px] rounded-[24px] overflow-hidden border-4 border-[#212121] bg-[#353535] shadow-2xl flex flex-col">
                  {/* Mobile Notch Status Bar */}
                  <div className="w-full flex items-center justify-between px-5 py-2.5 bg-[#212121] text-white">
                    <span className="text-[12px] font-semibold tracking-tight">9:41</span>
                    <div className="w-20 h-3 rounded-full bg-black/70"></div>
                    <div className="flex items-center gap-1.5 text-white">
                      <Zap className="w-3 h-3 fill-current" />
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Mobile Sections List (Bahasa ID) */}
                  <div className="space-y-0 w-full bg-[#353535]">
                    {placedSections.map((sec, idx) => (
                      <CanvasSectionBlock
                        key={`pdf-id-m-${sec.instanceId}`}
                        section={sec}
                        index={idx}
                        isActive={false}
                        isMobileVariant={true}
                        previewLanguage="id"
                        draggedIndex={null}
                        dragOverIndex={null}
                        dragPosition={null}
                        onSelectSection={() => {}}
                        onMoveSection={() => {}}
                        onDuplicateSection={() => {}}
                        onRemoveSection={() => {}}
                        onOpenImageModal={() => {}}
                        onSetActiveInlineEditing={() => {}}
                        onItemDragStart={() => {}}
                        onItemDragOver={() => {}}
                        onItemDragLeave={() => {}}
                        onItemDrop={() => {}}
                        onItemDragEnd={() => {}}
                        totalSections={placedSections.length}
                        isEditable={false}
                        isExportingPdf={true}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PAGE 2: BAHASA INGGRIS (EN) - Side-by-Side Desktop (1440px) + Mobile (375px) */}
          <div
            id="export-pdf-page-en"
            style={{
              width: '1940px',
              backgroundColor: '#1e1e1e',
              color: '#ffffff',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              boxSizing: 'border-box',
            }}
            className="font-season-sans"
          >
            {/* Page Header */}
            <div className="w-full px-6 py-4 bg-[#262626] border border-white/10 rounded-[12px] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 className="font-season-mix text-[28px] font-[420] text-white leading-none">
                  {cleanComponentName(
                    activeRelease?.name ||
                      activeTemplateName ||
                      (placedSections.length > 0 ? placedSections[0]?.name : 'PDP Personal'),
                  ) || 'PDP Personal'}
                </h1>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-black">
                  English Version (EN)
                </span>
                {activeRelease && (
                  <span
                    style={{
                      background:
                        activeRelease.status === 'approved'
                          ? '#00EFAB'
                          : activeRelease.status === 'in_review'
                            ? '#DED522'
                            : '#DE225A',
                      color: 'black',
                    }}
                    className="text-[11px] px-3 py-1 rounded-full font-medium"
                  >
                    {activeRelease.status === 'approved'
                      ? 'Approved'
                      : activeRelease.status === 'in_review'
                        ? 'Review'
                        : 'Reject'}
                  </span>
                )}
              </div>
              <div className="text-xs text-stone-400 font-normal">
                {placedSections.length} Komponen Section &bull; Halaman 2 dari 2
              </div>
            </div>

            {/* Side-by-Side Dual View: Left Desktop (1440px), Right Mobile (375px) */}
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
              {/* Left Column: Desktop (1440px) */}
              <div style={{ width: '1440px', flexShrink: 0 }}>
                <div className="mb-2 text-sm font-semibold text-stone-300 flex items-center gap-2">
                  <span>Desktop View (1440px) - English</span>
                </div>
                <div className="w-[1440px] rounded-[12px] overflow-hidden border border-white/10 bg-[#353535] shadow-2xl">
                  {/* Browser Address Header */}
                  <div className="w-full flex items-center justify-between px-4 py-2.5 bg-[#212121] border-b border-white/10">
                    <div className="flex items-center gap-[6px]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#737373]"></span>
                    </div>
                    <div className="w-[320px] px-3 py-1 bg-[#353535] text-white rounded-[6px] text-xs font-mono text-center truncate">
                      https://www.pegadaian.co.id
                    </div>
                    <div className="text-[10px] font-semibold text-[#6B7280]">1440 px</div>
                  </div>

                  {/* Desktop Sections List (Bahasa EN) */}
                  <div className="space-y-0 w-full bg-[#353535]">
                    {placedSections.map((sec, idx) => (
                      <CanvasSectionBlock
                        key={`pdf-en-d-${sec.instanceId}`}
                        section={sec}
                        index={idx}
                        isActive={false}
                        isMobileVariant={false}
                        previewLanguage="en"
                        draggedIndex={null}
                        dragOverIndex={null}
                        dragPosition={null}
                        onSelectSection={() => {}}
                        onMoveSection={() => {}}
                        onDuplicateSection={() => {}}
                        onRemoveSection={() => {}}
                        onOpenImageModal={() => {}}
                        onSetActiveInlineEditing={() => {}}
                        onItemDragStart={() => {}}
                        onItemDragOver={() => {}}
                        onItemDragLeave={() => {}}
                        onItemDrop={() => {}}
                        onItemDragEnd={() => {}}
                        totalSections={placedSections.length}
                        isEditable={false}
                        isExportingPdf={true}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Mobile (375px) */}
              <div style={{ width: '375px', flexShrink: 0 }}>
                <div className="mb-2 text-sm font-semibold text-stone-300 flex items-center gap-2">
                  <span>Mobile View (375px) - English</span>
                </div>
                <div className="w-[375px] rounded-[24px] overflow-hidden border-4 border-[#212121] bg-[#353535] shadow-2xl flex flex-col">
                  {/* Mobile Notch Status Bar */}
                  <div className="w-full flex items-center justify-between px-5 py-2.5 bg-[#212121] text-white">
                    <span className="text-[12px] font-semibold tracking-tight">9:41</span>
                    <div className="w-20 h-3 rounded-full bg-black/70"></div>
                    <div className="flex items-center gap-1.5 text-white">
                      <Zap className="w-3 h-3 fill-current" />
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Mobile Sections List (Bahasa EN) */}
                  <div className="space-y-0 w-full bg-[#353535]">
                    {placedSections.map((sec, idx) => (
                      <CanvasSectionBlock
                        key={`pdf-en-m-${sec.instanceId}`}
                        section={sec}
                        index={idx}
                        isActive={false}
                        isMobileVariant={true}
                        previewLanguage="en"
                        draggedIndex={null}
                        dragOverIndex={null}
                        dragPosition={null}
                        onSelectSection={() => {}}
                        onMoveSection={() => {}}
                        onDuplicateSection={() => {}}
                        onRemoveSection={() => {}}
                        onOpenImageModal={() => {}}
                        onSetActiveInlineEditing={() => {}}
                        onItemDragStart={() => {}}
                        onItemDragOver={() => {}}
                        onItemDragLeave={() => {}}
                        onItemDrop={() => {}}
                        onItemDragEnd={() => {}}
                        totalSections={placedSections.length}
                        isEditable={false}
                        isExportingPdf={true}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
