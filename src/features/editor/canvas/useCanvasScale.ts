import { useEffect, useRef, useState } from 'react';
import type { DeviceMode, PlacedSection, ViewportMode } from '../../../types';

export const DESKTOP_WIDTH = 1440;
export const MOBILE_WIDTH = 375;
const GAP = 48;

/** Fits the fixed-width desktop/mobile frames into the visible canvas area. */
export function useCanvasScale(viewportMode: ViewportMode, sections: PlacedSection[]) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentMeasureRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [measuredHeight, setMeasuredHeight] = useState(800);

  useEffect(() => {
    const element = scrollContainerRef.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry && entry.contentRect.width > 0) setContainerWidth(entry.contentRect.width);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = contentMeasureRef.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry && entry.contentRect.height > 0) setMeasuredHeight(entry.contentRect.height);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [sections, viewportMode]);

  const baseTargetWidth =
    viewportMode === 'both'
      ? DESKTOP_WIDTH + GAP + MOBILE_WIDTH
      : viewportMode === 'desktop'
        ? DESKTOP_WIDTH
        : MOBILE_WIDTH;
  const currentScale = Math.min(1, Math.max(0.2, (containerWidth - 64) / baseTargetWidth));

  return { scrollContainerRef, contentMeasureRef, measuredHeight, baseTargetWidth, currentScale };
}

/** Full-screen "play prototype" sizing: desktop fills the width, mobile fits a phone frame. */
export function usePrototypeScale(mode: DeviceMode | null, sections: PlacedSection[]) {
  const desktopInnerRef = useRef<HTMLDivElement>(null);
  const [prototypeScale, setPrototypeScale] = useState(() => window.innerWidth / DESKTOP_WIDTH);
  const [desktopScaledHeight, setDesktopScaledHeight] = useState(0);

  useEffect(() => {
    if (mode !== 'desktop') return;
    const element = desktopInnerRef.current;
    if (!element) return;
    const update = () => setDesktopScaledHeight(element.offsetHeight || element.scrollHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [mode, sections]);

  useEffect(() => {
    if (!mode) return;
    const calculate = () => {
      if (mode === 'desktop') setPrototypeScale(window.innerWidth / DESKTOP_WIDTH);
      else {
        const byHeight = (window.innerHeight - 44) / 880;
        const byWidth = (window.innerWidth - 48) / 420;
        setPrototypeScale(Math.max(0.35, Math.min(byHeight, byWidth, 1.2)));
      }
    };
    calculate();
    window.addEventListener('resize', calculate);
    return () => window.removeEventListener('resize', calculate);
  }, [mode]);

  return { desktopInnerRef, prototypeScale, desktopScaledHeight };
}
