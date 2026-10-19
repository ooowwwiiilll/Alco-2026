import html2canvas from 'html2canvas-pro';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

const BACKGROUND = '#202020';

interface Capture {
  data: string;
  width: number;
  height: number;
}

async function loadImage(source: string): Promise<HTMLImageElement> {
  const image = new Image();
  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject(new Error('Captured page could not be decoded.'));
    image.src = source;
  });
  return image;
}

/** Rasterizes an element at 2× scale; falls back to SVG-based capture if canvas capture fails. */
async function capture(element: HTMLElement): Promise<Capture> {
  await document.fonts.ready;
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: BACKGROUND,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });
    return {
      data: canvas.toDataURL('image/jpeg', 0.95),
      width: canvas.width,
      height: canvas.height,
    };
  } catch {
    const image = await loadImage(
      await toPng(element, { pixelRatio: 2, backgroundColor: BACKGROUND, cacheBust: true }),
    );
    const canvas = document.createElement('canvas');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Canvas rendering is unavailable in this browser.');
    context.fillStyle = BACKGROUND;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0);
    return {
      data: canvas.toDataURL('image/jpeg', 0.95),
      width: canvas.width,
      height: canvas.height,
    };
  }
}

/** One PDF page per element, each sized to its capture. */
export async function exportPagesToPdf(elementIds: string[], filename: string): Promise<void> {
  let pdf: jsPDF | null = null;
  for (const id of elementIds) {
    const element = document.getElementById(id);
    if (!element) throw new Error(`Export page #${id} is not rendered.`);
    const { data, width, height } = await capture(element);
    const orientation = width > height ? 'landscape' : 'portrait';
    if (pdf) pdf.addPage([width, height], orientation);
    else pdf = new jsPDF({ orientation, unit: 'pt', format: [width, height] });
    pdf.addImage(data, 'JPEG', 0, 0, width, height);
  }
  pdf?.save(filename);
}
