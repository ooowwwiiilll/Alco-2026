import type { PlacedSection, PreviewLanguage } from '../types';
import { safeAssetUrl, sanitizeHtml } from './sanitize';

export const PLACEHOLDER_IMAGE = '/background.png';

export interface PrepareOptions {
  language: PreviewLanguage;
  /** Shows `*-mobile` variant blocks and mobile-first styles instead of desktop ones. */
  mobile: boolean;
  /** Adds inline text editing and image replacement hooks. */
  editable?: boolean;
  /** The viewer may not edit locked content (product users). */
  respectLocks?: boolean;
  /** Replaces the library's placeholder image; configured by the Role Manager. */
  placeholderImage?: string;
}

const IMAGE_KEY = /logo|img|image|avatar|photo|pic|icon|bg|banner/i;
const IMAGE_VALUE =
  /^(?:data:image\/|https?:\/\/|\/|blob:|local-asset:)|\.(?:png|jpe?g|gif|svg|webp|ico)(?:\?.*)?$/i;
const LEGACY_LOGO = /alco|Logo\.svg|smbc|dash-logo/;

/** Desktop and mobile copies of a field share values: `m-title` falls back to `title`. */
const companionKey = (key: string) => (key.startsWith('m-') ? key.slice(2) : `m-${key}`);

function textValue(
  values: Record<string, string>,
  key: string,
  language: PreviewLanguage,
): string | undefined {
  const companion = companionKey(key);
  const localized = [values[`${key}_${language}`], values[`${companion}_${language}`]].find(
    (value) => value !== undefined && value.trim() !== '',
  );
  return localized ?? values[key] ?? values[companion];
}

function imageValue(
  values: Record<string, string>,
  key: string,
  source: string,
  placeholder: string,
): string {
  let value = values[key] || values[companionKey(key)] || source;
  if (!value || value === PLACEHOLDER_IMAGE) value = placeholder;
  if (key.includes('logo') && LEGACY_LOGO.test(value)) value = '/logo-pegadaian.png';
  return value;
}

function setText(element: Element, value: string) {
  const document = element.ownerDocument;
  element.replaceChildren(
    ...value
      .split('\n')
      .flatMap((line, index) =>
        index
          ? [document.createElement('br'), document.createTextNode(line)]
          : [document.createTextNode(line)],
      ),
  );
}

function setImage(element: Element, value: string, alt: string) {
  const image = element.ownerDocument.createElement('img');
  image.src = safeAssetUrl(value);
  image.alt = alt;
  image.setAttribute(
    'style',
    'max-height:100%;max-width:100%;object-fit:contain;display:inline-block;vertical-align:middle',
  );
  element.replaceChildren(image);
}

const editableKey = (element: Element) =>
  element.getAttribute('data-editable') || element.getAttribute('data-editable-image') || '';

function isImageField(element: Element, key: string) {
  return (
    element.tagName === 'IMG' ||
    element.hasAttribute('data-editable-image') ||
    IMAGE_KEY.test(key) ||
    element.querySelector('img') !== null
  );
}

/** Scales very large inline type down for the mobile frame. */
function scaleMobileType(style: string): string {
  const step = (size: number, sizes: [number, number][]) =>
    sizes.find(([minimum]) => size >= minimum)?.[1];
  return style
    .replace(/font-size:\s*([0-9.]+)px/gi, (match, value: string) => {
      const size = step(parseFloat(value), [
        [60, 28],
        [44, 24],
        [34, 22],
        [28, 20],
      ]);
      return size ? `font-size: ${size}px` : match;
    })
    .replace(/line-height:\s*([0-9.]+)px/gi, (match, value: string) => {
      const size = step(parseFloat(value), [
        [60, 34],
        [44, 30],
        [34, 28],
        [28, 26],
      ]);
      return size ? `line-height: ${size}px` : match;
    });
}

/** Sections without a mobile variant keep fixed desktop widths from overflowing the phone frame. */
function clampWidths(style: string): string {
  return style.replace(
    /(^|;)\s*width:\s*([0-9.]+)px/gi,
    (match, separator: string, value: string) =>
      parseFloat(value) > 375 ? `${separator} width: 100%; max-width: 100%` : match,
  );
}

function applyDevice(document: Document, mobile: boolean) {
  const [hidden, shown] = mobile ? ['-desktop', '-mobile'] : ['-mobile', '-desktop'];
  const hasMobileVariant = document.querySelector('[class*="-mobile"]') !== null;
  document
    .querySelectorAll<HTMLElement>(`[class*="${hidden}"]`)
    .forEach((element) => element.style.setProperty('display', 'none', 'important'));
  document
    .querySelectorAll<HTMLElement>(`[class*="${shown}"]`)
    .forEach((element) => element.style.removeProperty('display'));
  if (!mobile) return;
  // Mobile-first rendering: drop breakpoint and container-query variants.
  document.querySelectorAll<HTMLElement>('[class]').forEach((element) => {
    const classes = element.className;
    if (typeof classes === 'string' && /(?:^|\s)(?:sm|md|lg|xl|2xl|@\S+):/.test(classes))
      element.className = classes
        .split(/\s+/)
        .filter((name) => !/^(?:sm|md|lg|xl|2xl|@\S+):/.test(name))
        .join(' ');
    const style = element.getAttribute('style');
    if (!style) return;
    let next = style.includes('font-size') ? scaleMobileType(style) : style;
    if (!hasMobileVariant) next = clampWidths(next);
    if (next !== style) element.setAttribute('style', next);
  });
}

function markEditable(document: Document, section: PlacedSection, respectLocks: boolean) {
  const locked = (key: string) =>
    respectLocks && (Boolean(section.isLocked) || Boolean(section.lockedFields?.[key]));
  const editables = document.querySelectorAll('[data-editable], [data-editable-image]');
  editables.forEach((element) => {
    const key = editableKey(element);
    const html = element as HTMLElement;
    if (isImageField(element, key)) {
      element.removeAttribute('contenteditable');
      if (locked(key)) {
        element.setAttribute('title', 'Gambar terkunci oleh Team Admin');
        html.style.cursor = 'not-allowed';
      } else {
        element.setAttribute('title', 'Klik untuk ganti gambar');
        element.setAttribute('data-canvas-editable-img', 'true');
        html.style.cursor = 'pointer';
      }
    } else if (locked(key)) {
      element.removeAttribute('contenteditable');
      element.setAttribute('title', 'Teks terkunci oleh Team Admin');
    } else {
      element.setAttribute('contenteditable', 'plaintext-only');
      element.setAttribute('spellcheck', 'false');
      element.setAttribute('title', 'Klik untuk edit teks');
      element.setAttribute('data-canvas-editable', 'true');
    }
  });
  document.querySelectorAll<HTMLImageElement>('img').forEach((image) => {
    if (locked(editableKey(image))) {
      image.removeAttribute('data-canvas-editable-img');
      image.style.cursor = 'not-allowed';
    } else {
      image.setAttribute('data-canvas-editable-img', 'true');
      image.style.cursor = 'pointer';
    }
  });
  // Imported markup without annotations: plain text leaves become editable.
  if (editables.length === 0 && !(respectLocks && section.isLocked))
    document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,button,a,span,li').forEach((element) => {
      if (element.children.length === 0 && element.textContent?.trim()) {
        element.setAttribute('contenteditable', 'plaintext-only');
        element.setAttribute('spellcheck', 'false');
        element.setAttribute('data-canvas-editable', 'true');
      }
    });
}

/** Produces sanitized markup for one section, shared by the canvas, previews and exports. */
export function prepareSection(section: PlacedSection, options: PrepareOptions): string {
  const placeholder = options.placeholderImage || PLACEHOLDER_IMAGE;
  const document = new DOMParser().parseFromString(sanitizeHtml(section.htmlContent), 'text/html');
  const values = section.customValues;
  document.querySelectorAll('[data-editable], [data-editable-image]').forEach((element) => {
    const key = editableKey(element);
    if (!key) return;
    if (element.tagName === 'IMG') {
      const source = element.getAttribute('src') ?? '';
      element.setAttribute('src', safeAssetUrl(imageValue(values, key, source, placeholder)));
      return;
    }
    const value = textValue(values, key, options.language);
    if (value === undefined) return;
    const child = element.querySelector('img');
    if (isImageField(element, key) && child) child.setAttribute('src', safeAssetUrl(value));
    else if (isImageField(element, key) && IMAGE_VALUE.test(value)) setImage(element, value, key);
    else setText(element, value);
  });
  // Unannotated placeholder images follow the configured default image.
  document
    .querySelectorAll('img:not([data-editable]):not([data-editable-image])')
    .forEach((image) => {
      const source = image.getAttribute('src') ?? '';
      if (!source || source === PLACEHOLDER_IMAGE)
        image.setAttribute('src', safeAssetUrl(placeholder));
    });
  if (options.editable) markEditable(document, section, Boolean(options.respectLocks));
  else
    document
      .querySelectorAll('[contenteditable]')
      .forEach((element) => element.removeAttribute('contenteditable'));
  applyDevice(document, options.mobile);
  return document.body.innerHTML;
}

/** Wrapper class that enforces the matching device variant (see index.css). */
export const frameClass = (mobile: boolean): string =>
  mobile ? 'mobile-preview-frame' : 'desktop-preview-frame';

export function renderSections(sections: PlacedSection[], options: PrepareOptions): string {
  return sections.map((section) => prepareSection(section, options)).join('\n');
}

/** Renders a single component's markup outside of a page (library previews and editors). */
export function renderComponent(htmlContent: string, options: PrepareOptions): string {
  return prepareSection(
    { instanceId: 'preview', templateId: 'preview', name: '', htmlContent, customValues: {} },
    options,
  );
}
