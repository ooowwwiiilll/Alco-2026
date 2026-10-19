import type { ReactElement } from 'react';
import type { Dispatch, DragEvent, RefObject, SetStateAction } from 'react';
import { Play, Zap, Wifi, Battery } from 'lucide-react';
import { type ViewportMode, type DeviceMode } from '../../../types';

export interface CanvasViewportsProps {
  baseTargetWidth: number;
  contentMeasureRef: RefObject<HTMLDivElement | null>;
  currentScale: number;
  handleDragLeave: (event: DragEvent) => void;
  handleDragOver: (event: DragEvent) => void;
  handleDrop: (event: DragEvent) => void;
  isDragOver: boolean;
  isLight: boolean;
  measuredHeight: number;
  renderBrowserAddressBar: () => ReactElement;
  renderSectionList: (isMobileVariant?: boolean) => ReactElement;
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  setPrototypeMode: Dispatch<SetStateAction<DeviceMode | null>>;
  viewportMode: ViewportMode;
}

export function CanvasViewports({
  baseTargetWidth,
  contentMeasureRef,
  currentScale,
  handleDragLeave,
  handleDragOver,
  handleDrop,
  isDragOver,
  isLight,
  measuredHeight,
  renderBrowserAddressBar,
  renderSectionList,
  scrollContainerRef,
  setPrototypeMode,
  viewportMode,
}: CanvasViewportsProps) {
  return (
    <>
      {/* Main Canvas Scroll Area with Scaling Engine */}
      <div
        ref={scrollContainerRef}
        className="flex-1 w-full h-full overflow-auto pt-8 px-4 pb-28 sm:px-8 flex items-start justify-center relative bg-transparent"
      >
        {/* Scaled Sizer Wrapper: takes up the exact visual scaled width and height in document flow */}
        <div
          style={{
            width: `${baseTargetWidth * currentScale}px`,
            minHeight: measuredHeight ? `${measuredHeight * currentScale}px` : undefined,
          }}
          className="relative shrink-0 transition-[width,min-height] duration-150"
        >
          {/* Scaled Content Container: fixed base widths (1440px / 375px), scaled via transform */}
          <div
            ref={contentMeasureRef}
            style={{
              width: `${baseTargetWidth}px`,
              transform: `scale(${currentScale})`,
              transformOrigin: 'top left',
            }}
            className="absolute top-0 left-0 transition-transform duration-150"
          >
            {/* VIEWPORT MODE: BOTH (Side by Side Reference Design) */}
            {viewportMode === 'both' && (
              <div className="flex items-start gap-12">
                {/* Left Column: Desktop (1440px static) */}
                <div className="w-[1440px] shrink-0">
                  <div
                    style={{
                      height: `${32 / currentScale}px`,
                      marginBottom: `${16 / currentScale}px`,
                    }}
                    className="w-full relative"
                  >
                    <div
                      style={{
                        transform: `scale(${1 / currentScale})`,
                        transformOrigin: 'top left',
                      }}
                      className="inline-flex items-center justify-start gap-[10px] select-none absolute top-0 left-0"
                    >
                      <div
                        className={`font-season-mix text-[27px] font-[420] leading-none ${isLight ? 'text-stone-900' : 'text-white'}`}
                      >
                        Desktop
                      </div>
                      <button
                        type="button"
                        onClick={() => setPrototypeMode('desktop')}
                        className="w-[24px] h-[24px] relative overflow-hidden shrink-0 cursor-pointer hover:scale-105 active:scale-95 transition-transform border-none bg-transparent p-0 flex items-center justify-center group"
                        title="Play Prototype (Desktop)"
                      >
                        <div className="w-[21px] h-[21px] left-[1.50px] top-[1.50px] absolute bg-white rounded-[4px] flex items-center justify-center group-hover:bg-stone-200 transition-colors">
                          <Play className="w-3 h-3 text-black fill-black ml-[1px]" />
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* Desktop Frame Target */}
                  <div
                    id="export-canvas-target"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`w-[1440px] min-h-[600px] rounded-[12px] overflow-hidden transition-all shadow-[0px_12px_24px_rgba(0,0,0,0.06)] border ${
                      isLight ? 'bg-white border-stone-200' : 'bg-[#353535] border-white/5'
                    } ${isDragOver ? 'ring-4 ring-white/40 border-dashed border-white/70' : ''}`}
                  >
                    {/* Browser Address Header */}
                    <div
                      className={`w-full flex items-center justify-between px-4 py-2.5 ${
                        isLight ? 'bg-[#F5F5F7] border-b border-stone-200' : 'bg-[#212121]'
                      }`}
                    >
                      <div className="flex items-center gap-[6px]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#737373]"></span>
                      </div>
                      {renderBrowserAddressBar()}
                      <div className="text-[10px] font-['Inter'] font-semibold text-[#6B7280]">
                        1440 px
                      </div>
                    </div>

                    {renderSectionList(false)}
                  </div>
                </div>

                {/* Right Column: Mobile (375px static) */}
                <div className="w-[375px] shrink-0">
                  <div
                    style={{
                      height: `${32 / currentScale}px`,
                      marginBottom: `${16 / currentScale}px`,
                    }}
                    className="w-full relative"
                  >
                    <div
                      style={{
                        transform: `scale(${1 / currentScale})`,
                        transformOrigin: 'top left',
                      }}
                      className="inline-flex items-center justify-start gap-[10px] select-none absolute top-0 left-0"
                    >
                      <div
                        className={`font-season-mix text-[27px] font-[420] leading-none ${isLight ? 'text-stone-900' : 'text-white'}`}
                      >
                        Mobile
                      </div>
                      <button
                        type="button"
                        onClick={() => setPrototypeMode('mobile')}
                        className="w-[24px] h-[24px] relative overflow-hidden shrink-0 cursor-pointer hover:scale-105 active:scale-95 transition-transform border-none bg-transparent p-0 flex items-center justify-center group"
                        title="Play Prototype (Mobile)"
                      >
                        <div className="w-[21px] h-[21px] left-[1.50px] top-[1.50px] absolute bg-white rounded-[4px] flex items-center justify-center group-hover:bg-stone-200 transition-colors">
                          <Play className="w-3 h-3 text-black fill-black ml-[1px]" />
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* Mobile Frame */}
                  <div
                    className={`w-[375px] min-h-[600px] rounded-[24px] overflow-hidden transition-all shadow-2xl flex flex-col ${
                      isLight
                        ? 'bg-white border-4 border-stone-300'
                        : 'bg-[#353535] border-4 border-[#212121]'
                    }`}
                  >
                    {/* Mobile Screen Notch Header */}
                    <div
                      className={`w-full flex items-center justify-between px-5 py-2.5 ${
                        isLight ? 'bg-[#F5F5F7] text-stone-900' : 'bg-[#212121] text-white'
                      }`}
                    >
                      <span
                        className={`text-[12px] font-['Inter'] font-semibold tracking-tight ${isLight ? 'text-stone-900' : 'text-white'}`}
                      >
                        9:41
                      </span>
                      <div
                        className={`w-20 h-3 rounded-full ${isLight ? 'bg-stone-300' : 'bg-black/70'}`}
                      ></div>
                      <div
                        className={`flex items-center gap-1.5 ${isLight ? 'text-stone-900' : 'text-white'}`}
                      >
                        <Zap className="w-3 h-3 fill-current" />
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Section List for Mobile (Full-width edge-to-edge) */}
                    <div className="w-full flex-1 flex flex-col">{renderSectionList(true)}</div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEWPORT MODE: DESKTOP ONLY (1440px static width) */}
            {viewportMode === 'desktop' && (
              <div className="w-[1440px]">
                <div
                  style={{
                    height: `${32 / currentScale}px`,
                    marginBottom: `${16 / currentScale}px`,
                  }}
                  className="w-full relative"
                >
                  <div
                    style={{
                      transform: `scale(${1 / currentScale})`,
                      transformOrigin: 'top left',
                    }}
                    className="inline-flex items-center justify-start gap-[10px] select-none absolute top-0 left-0"
                  >
                    <div
                      className={`font-season-mix text-[27px] font-[420] leading-none ${isLight ? 'text-stone-900' : 'text-white'}`}
                    >
                      Desktop
                    </div>
                    <button
                      type="button"
                      onClick={() => setPrototypeMode('desktop')}
                      className="w-[24px] h-[24px] relative overflow-hidden shrink-0 cursor-pointer hover:scale-105 active:scale-95 transition-transform border-none bg-transparent p-0 flex items-center justify-center group"
                      title="Play Prototype (Desktop)"
                    >
                      <div className="w-[21px] h-[21px] left-[1.50px] top-[1.50px] absolute bg-white rounded-[4px] flex items-center justify-center group-hover:bg-stone-200 transition-colors">
                        <Play className="w-3 h-3 text-black fill-black ml-[1px]" />
                      </div>
                    </button>
                  </div>
                </div>
                {/* Desktop 1440px Frame */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`w-[1440px] min-h-[680px] rounded-[12px] overflow-hidden transition-all shadow-[0px_12px_24px_rgba(0,0,0,0.06)] border ${
                    isLight ? 'bg-white border-stone-200' : 'bg-[#353535] border-white/5'
                  } ${isDragOver ? 'ring-4 ring-white/40 border-dashed border-white/70' : ''}`}
                >
                  {/* Browser Address Header */}
                  <div
                    className={`w-full flex items-center justify-between px-4 py-2.5 ${
                      isLight ? 'bg-[#F5F5F7] border-b border-stone-200' : 'bg-[#212121]'
                    }`}
                  >
                    <div className="flex items-center gap-[6px]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#737373]"></span>
                    </div>
                    {renderBrowserAddressBar()}
                    <div className="text-[10px] font-['Inter'] font-semibold text-[#6B7280]">
                      1440 px
                    </div>
                  </div>

                  {/* Placed Sections */}
                  {renderSectionList(false)}
                </div>
              </div>
            )}

            {/* VIEWPORT MODE: MOBILE ONLY (375px static width) */}
            {viewportMode === 'mobile' && (
              <div className="w-[375px] mx-auto">
                <div
                  style={{
                    height: `${32 / currentScale}px`,
                    marginBottom: `${16 / currentScale}px`,
                  }}
                  className="w-full relative"
                >
                  <div
                    style={{
                      transform: `scale(${1 / currentScale})`,
                      transformOrigin: 'top left',
                    }}
                    className="inline-flex items-center justify-start gap-[10px] select-none absolute top-0 left-0"
                  >
                    <div
                      className={`font-season-mix text-[27px] font-[420] leading-none ${isLight ? 'text-stone-900' : 'text-white'}`}
                    >
                      Mobile
                    </div>
                    <button
                      type="button"
                      onClick={() => setPrototypeMode('mobile')}
                      className="w-[24px] h-[24px] relative overflow-hidden shrink-0 cursor-pointer hover:scale-105 active:scale-95 transition-transform border-none bg-transparent p-0 flex items-center justify-center group"
                      title="Play Prototype (Mobile)"
                    >
                      <div className="w-[21px] h-[21px] left-[1.50px] top-[1.50px] absolute bg-white rounded-[4px] flex items-center justify-center group-hover:bg-stone-200 transition-colors">
                        <Play className="w-3 h-3 text-black fill-black ml-[1px]" />
                      </div>
                    </button>
                  </div>
                </div>
                {/* Mobile 375px Frame */}
                <div
                  className={`w-[375px] min-h-[680px] rounded-[24px] overflow-hidden transition-all shadow-2xl flex flex-col ${
                    isLight
                      ? 'bg-white border-4 border-stone-300'
                      : 'bg-[#353535] border-4 border-[#212121]'
                  }`}
                >
                  {/* Mobile Screen Notch Header */}
                  <div
                    className={`w-full flex items-center justify-between px-5 py-2.5 ${
                      isLight ? 'bg-[#F5F5F7] text-stone-900' : 'bg-[#212121] text-white'
                    }`}
                  >
                    <span
                      className={`text-[12px] font-['Inter'] font-semibold tracking-tight ${isLight ? 'text-stone-900' : 'text-white'}`}
                    >
                      9:41
                    </span>
                    <div
                      className={`w-20 h-3 rounded-full ${isLight ? 'bg-stone-300' : 'bg-black/70'}`}
                    ></div>
                    <div
                      className={`flex items-center gap-1.5 ${isLight ? 'text-stone-900' : 'text-white'}`}
                    >
                      <Zap className="w-3 h-3 fill-current" />
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Placed Sections */}
                  <div className="w-full flex-1 flex flex-col">{renderSectionList(true)}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
