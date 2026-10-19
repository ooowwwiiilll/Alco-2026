import type { Dispatch, RefObject, SetStateAction } from 'react';
import { Monitor, Zap, Wifi, Battery, Smartphone } from 'lucide-react';
import { CanvasSectionBlock } from './CanvasSectionBlock';
import { type DeviceMode, type PlacedSection, type PreviewLanguage } from '../../../types';

export interface PrototypeViewProps {
  desktopInnerRef: RefObject<HTMLDivElement | null>;
  desktopScaledHeight: number;
  placedSections: PlacedSection[];
  previewLanguage: PreviewLanguage;
  prototypeMode: DeviceMode | null;
  prototypeScale: number;
  setPrototypeMode: Dispatch<SetStateAction<DeviceMode | null>>;
}

export function PrototypeView({
  desktopInnerRef,
  desktopScaledHeight,
  placedSections,
  previewLanguage,
  prototypeMode,
  prototypeScale,
  setPrototypeMode,
}: PrototypeViewProps) {
  return (
    <>
      {/* Prototype Fullscreen View (Figma-style Play Prototype) */}
      {prototypeMode && (
        <div className="fixed inset-0 z-[99999] bg-[#F8F8FA] flex flex-col text-stone-900 font-season-sans animate-in fade-in duration-200 overflow-hidden select-none">
          {/* Minimal Top Header Bar matching image.png specification */}
          <div className="w-full h-11 px-6 bg-[#F5F5F7] border-b border-stone-200/80 flex items-center justify-between shrink-0 select-none z-50">
            {/* Left: Tutup Prototype Button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPrototypeMode(null)}
                style={{
                  height: '32px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  background: '#EAEAEB',
                  borderRadius: '100px',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                className="hover:bg-stone-300 active:scale-95 transition-all text-black text-xs font-season-sans font-normal shadow-xs"
                title="Tutup Prototype"
              >
                <span>Tutup Prototype</span>
              </button>
            </div>

            {/* Center: Domain URL */}
            <div className="text-xs font-mono text-stone-600 tracking-wide select-all font-normal">
              https://www.pegadaian.co.id
            </div>

            {/* Right: Pixel Badge */}
            <div className="text-xs font-mono text-stone-400 font-normal">
              {prototypeMode === 'desktop' ? '1440 px' : '375 px'}
            </div>
          </div>

          {/* Prototype Body Content - Full edge-to-edge experience */}
          <div className="flex-1 overflow-y-auto custom-scrollbar bg-white relative">
            {prototypeMode === 'desktop' ? (
              <div className="w-full min-h-full bg-white flex flex-col items-center overflow-x-hidden">
                <div
                  style={{
                    width: '100%',
                    height: desktopScaledHeight
                      ? `${desktopScaledHeight * (prototypeScale || 1)}px`
                      : 'auto',
                    minHeight: '100%',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                  className="shrink-0 flex justify-center"
                >
                  <div
                    ref={desktopInnerRef}
                    style={{
                      width: '1440px',
                      transform: `scale(${prototypeScale || 1})`,
                      transformOrigin: 'top center',
                    }}
                    className="bg-white shrink-0 min-h-full"
                  >
                    {placedSections.length === 0 ? (
                      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center p-12 text-center font-season-sans">
                        <Monitor className="w-12 h-12 text-stone-300 mb-3 opacity-60" />
                        <p className="text-base font-medium text-stone-700">
                          Canvas Rilis Masih Kosong
                        </p>
                        <p className="text-xs text-stone-400 mt-1 max-w-sm leading-relaxed">
                          Belum ada komponen pada rilis ini. Tambahkan komponen dari sidebar untuk
                          melihat pratinjau prototype.
                        </p>
                      </div>
                    ) : (
                      placedSections.map((sec, idx) => (
                        <CanvasSectionBlock
                          key={`proto-desk-${sec.instanceId}`}
                          section={sec}
                          index={idx}
                          isActive={false}
                          isMobileVariant={false}
                          previewLanguage={previewLanguage}
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
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Realistic Mobile Phone Frame View */
              <div className="min-h-full w-full bg-[#121212] py-8 flex items-center justify-center">
                <div
                  style={{
                    width: '393px',
                    height: '844px',
                    transform: `scale(${prototypeScale})`,
                    transformOrigin: 'center center',
                    background: '#0a0a0a',
                    borderRadius: '52px',
                    boxShadow:
                      '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.15)',
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                  className="shrink-0 select-none animate-in zoom-in-95 duration-200"
                >
                  {/* Physical Buttons Simulation on Device Edges */}
                  <div className="absolute -left-[14px] top-28 w-[3px] h-10 bg-[#222222] rounded-l-sm" />
                  <div className="absolute -left-[14px] top-42 w-[3px] h-14 bg-[#222222] rounded-l-sm" />
                  <div className="absolute -left-[14px] top-60 w-[3px] h-14 bg-[#222222] rounded-l-sm" />
                  <div className="absolute -right-[14px] top-36 w-[3px] h-20 bg-[#222222] rounded-r-sm" />

                  {/* Inner Phone Screen Container */}
                  <div className="relative w-full h-full bg-white text-stone-900 rounded-[40px] overflow-hidden flex flex-col shadow-inner">
                    {/* Dynamic Island Pill at Screen Top */}
                    <div
                      style={{
                        width: '112px',
                        height: '28px',
                        backgroundColor: '#000000',
                        borderRadius: '20px',
                        position: 'absolute',
                        top: '10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 50,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '10px',
                        gap: '8px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
                      }}
                      className="pointer-events-none select-none"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#111111] border border-[#2a2a2a] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#003366]/60" />
                      </div>
                    </div>

                    {/* Mobile Screen Status Bar */}
                    <div className="w-full flex items-center justify-between px-7 pt-3.5 pb-2 bg-[#F5F5F7] text-stone-900 shrink-0 select-none z-40 border-b border-stone-200/50">
                      <span className="text-[13px] font-['Inter'] font-semibold tracking-tight">
                        9:41
                      </span>
                      <div className="w-20 h-3" />
                      <div className="flex items-center gap-1.5 text-stone-900">
                        <Zap className="w-3 h-3 fill-current" />
                        <Wifi className="w-3.5 h-3.5" />
                        <Battery className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Scrollable Screen Content Area */}
                    <div className="w-full flex-1 overflow-y-auto custom-scrollbar flex flex-col bg-white">
                      {placedSections.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-stone-400 font-season-sans">
                          <Smartphone className="w-12 h-12 text-stone-300 mb-3" />
                          <p className="text-sm font-medium text-stone-600">Canvas masih kosong</p>
                          <p className="text-xs text-stone-400 mt-1">
                            Tambahkan komponen untuk melihat simulasi prototype mobile.
                          </p>
                        </div>
                      ) : (
                        placedSections.map((sec, idx) => (
                          <CanvasSectionBlock
                            key={`proto-mob-${sec.instanceId}`}
                            section={sec}
                            index={idx}
                            isActive={false}
                            isMobileVariant={true}
                            previewLanguage={previewLanguage}
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
                          />
                        ))
                      )}
                    </div>

                    {/* Bottom Home Indicator Bar */}
                    <div className="w-full py-2 bg-gradient-to-t from-white/95 via-white/80 to-transparent flex items-center justify-center shrink-0 z-40 pointer-events-none">
                      <div className="w-32 h-1 bg-black/60 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
