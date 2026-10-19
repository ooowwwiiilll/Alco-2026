import type { SectionTemplate } from '../../../types';

export const promo2Section: SectionTemplate = {
    id: 'promo-2-section',
    name: 'PROMO 2',
    category: 'CONTENT',
    description: 'Pegadaian PROMO 2 section with title section and full-width promo banner image.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="promo-2-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: white; flex-direction: column; justify-content: center; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="promo2-title">{Title Section} Max 45 Character</div>
        <img style="align-self: stretch; height: 703px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" />
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="promo-2-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: white; flex-direction: column; justify-content: center; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="promo2-title">{Title Section} Max 45 Character</div>
        <img style="align-self: stretch; height: 703px; padding: 10px; border-radius: 16px; object-fit: cover;" src="/background.png" />
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'promo2-title', label: 'Section Title', defaultValue: '{Title Section} Max 45 Character' }
    ]
  };
