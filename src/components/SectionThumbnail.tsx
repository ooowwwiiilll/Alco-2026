import { useEffect, useMemo, useRef, useState } from 'react';
import { prepareSection } from '../preview/prepareSection';
import type { PlacedSection } from '../types';

const DESKTOP_WIDTH = 1440;

interface SectionThumbnailProps {
  /** Page sections; the first three are shown. */
  sections?: PlacedSection[];
  /** A single component's markup, when no sections are given. */
  htmlContent?: string;
  className?: string;
}

/** Scaled, non-interactive desktop rendering used for library and page cards. */
export function SectionThumbnail({ sections, htmlContent, className = '' }: SectionThumbnailProps) {
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(280);
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new ResizeObserver(() => {
      if (element.clientWidth > 0) setWidth(element.clientWidth);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const html = useMemo(() => {
    const source: PlacedSection[] = sections?.length
      ? sections.slice(0, 3)
      : htmlContent
        ? [
            {
              instanceId: 'thumbnail',
              templateId: 'thumbnail',
              name: '',
              htmlContent,
              customValues: {},
            },
          ]
        : [];
    return source
      .map((section) => prepareSection(section, { language: 'id', mobile: false }))
      .join('\n');
  }, [sections, htmlContent]);
  return (
    <div
      ref={container}
      aria-hidden="true"
      className={`relative h-full w-full select-none overflow-hidden bg-black pointer-events-none ${className}`}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: DESKTOP_WIDTH, transform: `scale(${width / DESKTOP_WIDTH})` }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
