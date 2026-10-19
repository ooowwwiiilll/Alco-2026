import DOMPurify from 'dompurify';
import { resolveAssetUrl } from './assetUrls';

const UNSAFE_STYLE = /expression\s*\(|@import|behavior\s*:|javascript:|\\/i;
const STYLE_URL = /url\(\s*(['"]?)(.*?)\1\s*\)/gi;

// Inline styles may reference images (library backgrounds) but never scripts or remote CSS.
DOMPurify.addHook('afterSanitizeAttributes', (element) => {
  const style = element.getAttribute('style');
  if (!style) return;
  if (UNSAFE_STYLE.test(style)) {
    element.removeAttribute('style');
    return;
  }
  const safe = style.replace(STYLE_URL, (match, _quote: string, url: string) => {
    const resolved = safeAssetUrl(url);
    return resolved ? `url("${resolved}")` : match.replace(/url\(.*\)/i, 'none');
  });
  if (safe !== style) element.setAttribute('style', safe);
});

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true, svg: true, svgFilters: true },
    FORBID_TAGS: [
      'style',
      'form',
      'input',
      'textarea',
      'select',
      'iframe',
      'object',
      'embed',
      'foreignObject',
    ],
    FORBID_ATTR: ['srcset', 'formaction', 'target', 'autofocus'],
    ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|tel|blob):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  });
}

/** Same-origin paths, http(s), same-origin blobs and inline raster images only. */
export function safeAssetUrl(value: string): string {
  value = resolveAssetUrl(value.trim());
  if (value.startsWith(`blob:${location.origin}/`)) return value;
  if (/^(?:\/(?!\/)|\.\/|https?:\/\/)/i.test(value)) return value.replace(/["\\]/g, '');
  if (/^data:image\/(?:png|jpeg|webp|gif);base64,[a-z\d+/=]+$/i.test(value)) return value;
  return '';
}
