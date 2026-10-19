import type { SectionTemplate } from '../../../types';

export const promoSection: SectionTemplate = {
    id: 'promo-section',
    name: 'PROMO SECTION',
    category: 'CONTENT',
    description: 'Pegadaian PROMO SECTION with section title, 3 card promo items (image, category, title, date), and a "Lihat Semua" button.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="promo-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="promo-section-title">{Cross Section} Max 45 Character</div>
        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex; flex-wrap: wrap; align-content: flex-start">
            <div style="flex: 1 1 0; min-width: 300px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Promo 1" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-cat-1">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="promo-title-1">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-date-1">{DD Month YYYY}</div>
                    </div>
                </div>
            </div>
            <div style="flex: 1 1 0; min-width: 300px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Promo 2" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-cat-2">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="promo-title-2">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-date-2">{DD Month YYYY}</div>
                    </div>
                </div>
            </div>
            <div style="flex: 1 1 0; min-width: 300px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Promo 3" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-cat-3">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="promo-title-3">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-date-3">{DD Month YYYY}</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="padding-top: 12px; padding-bottom: 12px; padding-left: 24px; padding-right: 20px; background: var(--background-brand-primary-bold, #CCEA68); border-radius: 80px; justify-content: center; align-items: center; gap: 4px; display: inline-flex; cursor: pointer;">
            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="promo-btn">Lihat Semua</div>
            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="promo-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="promo-section-title">{Cross Section} Max 45 Character</div>
        <div style="width: 100%; max-width: 354px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <img style="align-self: stretch; width: 100%; height: 177px; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Promo" />
            <div style="align-self: stretch; padding-top: 20px; padding-bottom: 20px; padding-left: 4px; padding-right: 20px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="promo-cat-1">{Category}</div>
                <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="promo-title-1">{Card Title} <br/>Max 60 characters / 2 lines</div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                    <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                    <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="promo-date-1">{DD Month YYYY}</div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
            <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: flex-start; align-items: center; gap: 4px; display: flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="promo-btn">Lihat Semua</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Small" style="width: 40px; height: 40px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; display: flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                </div>
                <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Small" style="width: 40px; height: 40px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; display: flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'promo-section-title', label: 'Section Title', defaultValue: '{Cross Section} Max 45 Character' },
      { id: 'promo-cat-1', label: 'Card 1 Category', defaultValue: '{Category}' },
      { id: 'promo-title-1', label: 'Card 1 Title', defaultValue: '{Card Title}' },
      { id: 'promo-date-1', label: 'Card 1 Date', defaultValue: '{DD Month YYYY}' },
      { id: 'promo-btn', label: 'Button Text', defaultValue: 'Lihat Semua' }
    ]
  };
