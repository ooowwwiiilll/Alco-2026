import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { renderComponent } from '../../../preview/prepareSection';

// Custom Preview Icon SVG requested by user
export const CustomPreviewIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11.75 8.75C13.821 8.75 15.5 10.75 15.5 11.75C15.5 12.75 13.821 14.75 11.75 14.75C9.679 14.75 8 12.75 8 11.75C8 10.75 9.679 8.75 11.75 8.75ZM12.25 1.5C12.8467 1.5 13.419 1.73705 13.841 2.15901C14.2629 2.58097 14.5 3.15326 14.5 3.75V8.982C14.1902 8.74653 13.8547 8.54692 13.5 8.387V5.5H2.5V12.25C2.5 12.5815 2.6317 12.8995 2.86612 13.1339C3.10054 13.3683 3.41848 13.5 3.75 13.5H7.971C8.26046 13.8765 8.59877 14.2128 8.977 14.5H3.75C3.15326 14.5 2.58097 14.2629 2.15901 13.841C1.73705 13.419 1.5 12.8467 1.5 12.25V3.75C1.5 3.15326 1.73705 2.58097 2.15901 2.15901C2.58097 1.73705 3.15326 1.5 3.75 1.5H12.25ZM11.75 9.75C11.2196 9.75 10.7109 9.96071 10.3358 10.3358C9.96071 10.7109 9.75 11.2196 9.75 11.75C9.75 12.2804 9.96071 12.7891 10.3358 13.1642C10.7109 13.5393 11.2196 13.75 11.75 13.75C12.2804 13.75 12.7891 13.5393 13.1642 13.1642C13.5393 12.7891 13.75 12.2804 13.75 11.75C13.75 11.2196 13.5393 10.7109 13.1642 10.3358C12.7891 9.96071 12.2804 9.75 11.75 9.75ZM11.75 10.5C12.0815 10.5 12.3995 10.6317 12.6339 10.8661C12.8683 11.1005 13 11.4185 13 11.75C13 12.0815 12.8683 12.3995 12.6339 12.6339C12.3995 12.8683 12.0815 13 11.75 13C11.4185 13 11.1005 12.8683 10.8661 12.6339C10.6317 12.3995 10.5 12.0815 10.5 11.75C10.5 11.4185 10.6317 11.1005 10.8661 10.8661C11.1005 10.6317 11.4185 10.5 11.75 10.5ZM3.75 2.5C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V4.5H13.5V3.75C13.5 3.41848 13.3683 3.10054 13.1339 2.86612C12.8995 2.6317 12.5815 2.5 12.25 2.5H3.75Z"
      fill="white"
    />
  </svg>
);

interface DesktopScaledPreviewProps {
  htmlContent: string;
  desktopWidth?: number;
  fixedHeight?: number;
}

export const DesktopScaledPreview: React.FC<DesktopScaledPreviewProps> = ({
  htmlContent,
  desktopWidth = 1440,
  fixedHeight,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prepared = useMemo(
    () => renderComponent(htmlContent, { language: 'id', mobile: false }),
    [htmlContent],
  );
  const [scale, setScale] = useState(0.24);
  const [previewHeight, setPreviewHeight] = useState<number>(fixedHeight || 120);

  const calculateSize = () => {
    if (!containerRef.current || !contentRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    if (containerWidth <= 0) return;

    const newScale = containerWidth / desktopWidth;
    setScale((prev) => (Math.abs(prev - newScale) > 0.001 ? newScale : prev));

    if (fixedHeight) {
      setPreviewHeight(fixedHeight);
    } else {
      const firstChild = contentRef.current.firstElementChild as HTMLElement | null;
      let rawH = 120;
      if (firstChild) {
        rawH = Math.max(
          firstChild.offsetHeight,
          firstChild.scrollHeight,
          contentRef.current.scrollHeight,
        );
      } else {
        rawH = contentRef.current.offsetHeight || contentRef.current.scrollHeight || 120;
      }
      const scaledH = Math.max(48, Math.min(220, Math.round(rawH * newScale)));
      setPreviewHeight((prev) => (prev !== scaledH ? scaledH : prev));
    }
  };

  useLayoutEffect(() => {
    calculateSize();
  }, [htmlContent, desktopWidth, fixedHeight]);

  useEffect(() => {
    calculateSize();
    const t1 = setTimeout(calculateSize, 60);
    const t2 = setTimeout(calculateSize, 250);

    if (!containerRef.current || !contentRef.current) {
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }

    const resizeObserver = new ResizeObserver(() => {
      calculateSize();
    });

    resizeObserver.observe(containerRef.current);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
      if (contentRef.current.firstElementChild) {
        resizeObserver.observe(contentRef.current.firstElementChild);
      }
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      resizeObserver.disconnect();
    };
  }, [htmlContent, desktopWidth, fixedHeight]);

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden rounded-[16px] bg-[#686868] select-none pointer-events-none"
      style={{
        height: `${previewHeight}px`,
      }}
    >
      <div
        ref={contentRef}
        className="absolute top-0 left-0 origin-top-left desktop-preview-frame"
        style={{
          width: `${desktopWidth}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
        dangerouslySetInnerHTML={{ __html: prepared }}
      />
    </div>
  );
};
