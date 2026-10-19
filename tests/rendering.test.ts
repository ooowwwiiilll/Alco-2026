import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost/' });
Object.assign(globalThis, {
  window: dom.window,
  DOMParser: dom.window.DOMParser,
  location: dom.window.location,
});
const { sanitizeHtml } = await import('../src/preview/sanitize');
const { prepareSection } = await import('../src/preview/prepareSection');

const section = (htmlContent: string, customValues: Record<string, string> = {}) => ({
  instanceId: 's',
  templateId: 't',
  name: 'S',
  htmlContent,
  customValues,
});

test('sanitizer strips scripts and unsafe styles but keeps safe background images', () => {
  const html = sanitizeHtml(
    '<img src="/a.png" onerror="alert(1)"><div style="width: 10px; background: url(/bg.png)"></div><div style="background: url(javascript:alert(1))"></div><script>x</script>',
  );
  assert.ok(
    !html.includes('onerror') && !html.includes('<script') && !html.includes('javascript:'),
  );
  assert.ok(html.includes('/bg.png') && html.includes('width: 10px'));
});

test('device variants: desktop hides *-mobile blocks and mobile hides *-desktop blocks', () => {
  const html = '<div class="x-desktop">D</div><div class="x-mobile">M</div>';
  const desktop = prepareSection(section(html), { language: 'id', mobile: false });
  const mobile = prepareSection(section(html), { language: 'id', mobile: true });
  assert.match(desktop, /x-mobile" style="display: none/);
  assert.match(mobile, /x-desktop" style="display: none/);
});

test('values: language variants, m- companions, placeholders and locked fields', () => {
  const html =
    '<h1 data-editable="title">T</h1><p data-editable="m-title">T</p><img data-editable="hero-bg" src="/background.png">';
  const values = { title: 'Halo', title_en: 'Hello' };
  const en = prepareSection(section(html, values), {
    language: 'en',
    mobile: false,
    placeholderImage: '/custom.png',
  });
  assert.equal((en.match(/Hello/g) ?? []).length, 2);
  assert.ok(en.includes('src="/custom.png"'));
  const locked = prepareSection(
    { ...section(html, values), lockedFields: { title: true } },
    { language: 'id', mobile: false, editable: true, respectLocks: true },
  );
  assert.ok(/data-editable="title"[^>]*title="Teks terkunci/.test(locked));
  assert.ok(/data-editable="m-title"[^>]*contenteditable="plaintext-only"/.test(locked));
});
