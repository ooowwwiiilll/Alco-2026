import type { PageTemplate, PlacedSection } from '../types';
import { COMPONENT_LIBRARY } from './library';

function section(instanceId: string, templateId: string, name: string): PlacedSection {
  const component = COMPONENT_LIBRARY.find((item) => item.id === templateId);
  if (!component) throw new Error(`Unknown library component ${templateId}.`);
  return { instanceId, templateId, name, htmlContent: component.htmlContent, customValues: {} };
}

export const DEFAULT_PAGE_TEMPLATES: readonly PageTemplate[] = [
  {
    id: 'page-tpl-hero-section-showcase',
    name: 'Pegadaian Hero Showcase',
    description: 'Pegadaian Hero landing page section with articles showcase.',
    createdAt: '2026-09-06T12:00:00Z',
    isDefault: true,
    category: 'LANDING',
    thumbnailBg: 'bg-gradient-to-br from-[#082117] via-[#013428] to-[#011E0E]',
    sections: [
      section('inst-hero-section', 'hero-section', 'HERO SECTION'),
      section('inst-product-section', 'product-section', 'PRODUCT SECTION'),
      section('inst-for-you-section', 'for-you-section', 'FOR YOU'),
      section('inst-tring-section', 'tring-section', '[TRING!]'),
      section('inst-gold-price-section', 'gold-price-section', '[GOLD PRICE]'),
      section('inst-articel-section', 'articel-section', 'ARTICLE SECTION'),
      section('inst-hero-content-highlight', 'content-highlight', 'CONTENT HIGHLIGHT'),
      section('inst-footer-section', 'footer-section', 'FOOTER SECTION'),
    ],
  },
  {
    id: 'page-tpl-plp-showcase',
    name: 'Pegadaian PLP (Product Listing Page)',
    description: 'Pegadaian Product Listing Page with Product Listing grid and Footer.',
    createdAt: '2026-09-06T12:00:00Z',
    isDefault: true,
    category: 'LANDING',
    thumbnailBg: 'bg-gradient-to-br from-[#0A2E1F] via-[#015743] to-[#F8F8F8]',
    sections: [
      section('inst-plp-products', 'product-listing', 'PRODUCT LISTING'),
      section('inst-plp-content-highlight', 'content-highlight', 'CONTENT HIGHLIGHT'),
      section('inst-plp-article-listing', 'article-listing', 'ARTICLE LISTING'),
      section('inst-plp-footer', 'footer-section', 'FOOTER SECTION'),
    ],
  },
];
