import type { SectionTemplate } from '../../../types';

export const promoListingSection: SectionTemplate = {
    id: 'promo-listing-section',
    name: '[PROMO LISTING]',
    category: 'CONTENT',
    description: 'Pegadaian PROMO LISTING section with title, tabs, search bar, filter dropdowns, promo card grid, and load more button.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="promo-listing-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="promo-listing-title">{Promo Section Title} Max. 45 Char</div>
        <div data-theme="On White" style="width: 500px; max-width: 100%; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                <div data-state="Selected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="promo-listing-tab-1">Tab</div>
                </div>
                <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-listing-tab-2">Tab</div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex; flex-wrap: wrap; gap: 16px;">
            <div style="width: 400px; max-width: 100%; padding-top: 8px; padding-bottom: 8px; padding-left: 24px; padding-right: 8px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 16px; display: flex">
                <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="promo-listing-search">{Search Placeholder}</div>
                <div style="width: 40px; height: 40px; padding: 8px; background: var(--text-brand-primary, #CCEA68); border-radius: 100px; justify-content: center; align-items: center; gap: 10px; display: flex; cursor: pointer;">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 16px; display: flex; flex-wrap: wrap;">
                <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="promo-listing-filter-1">{Filter Label}</div>
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
                <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="promo-listing-filter-2">{Filter Label}</div>
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; width: 100%;">
            <!-- Promo Card 1 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Promo" data-editable-image="promo-img-1" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-category-1">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="promo-title-1">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-date-1">{DD Month YYYY} - {DD Month YYYY}</div>
                    </div>
                </div>
            </div>
            <!-- Promo Card 2 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Promo" data-editable-image="promo-img-2" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-category-2">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="promo-title-2">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-date-2">{DD Month YYYY} - {DD Month YYYY}</div>
                    </div>
                </div>
            </div>
            <!-- Promo Card 3 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Promo" data-editable-image="promo-img-3" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-category-3">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="promo-title-3">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-date-3">{DD Month YYYY} - {DD Month YYYY}</div>
                    </div>
                </div>
            </div>
            <!-- Promo Card 4 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Promo" data-editable-image="promo-img-4" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-category-4">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="promo-title-4">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-date-4">{DD Month YYYY} - {DD Month YYYY}</div>
                    </div>
                </div>
            </div>
            <!-- Promo Card 5 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Promo" data-editable-image="promo-img-5" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-category-5">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="promo-title-5">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-date-5">{DD Month YYYY} - {DD Month YYYY}</div>
                    </div>
                </div>
            </div>
            <!-- Promo Card 6 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Promo" data-editable-image="promo-img-6" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-category-6">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="promo-title-6">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-date-6">{DD Month YYYY} - {DD Month YYYY}</div>
                    </div>
                </div>
            </div>
            <!-- Promo Card 7 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Promo" data-editable-image="promo-img-7" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-category-7">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="promo-title-7">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-date-7">{DD Month YYYY} - {DD Month YYYY}</div>
                    </div>
                </div>
            </div>
            <!-- Promo Card 8 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Promo" data-editable-image="promo-img-8" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-category-8">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="promo-title-8">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-date-8">{DD Month YYYY} - {DD Month YYYY}</div>
                    </div>
                </div>
            </div>
            <!-- Promo Card 9 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Promo" data-editable-image="promo-img-9" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-category-9">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="promo-title-9">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="promo-date-9">{DD Month YYYY} - {DD Month YYYY}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="promo-listing-section-mobile w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="promo-listing-title">{Promo Section Title} Max. 45 Char</div>
        <div data-theme="On White" style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                <div data-state="Selected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 12px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 4px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="promo-listing-tab-1">Tab</div>
                </div>
                <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 12px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 4px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="promo-listing-tab-2">Tab</div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
            <div style="flex: 1 1 0; padding-top: 4px; padding-bottom: 4px; padding-left: 20px; padding-right: 4px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 12px; display: flex">
                <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="promo-listing-search">{Search Placeholder}</div>
                <div style="width: 40px; height: 40px; padding: 8px; background: var(--text-brand-primary, #CCEA68); border-radius: 100px; justify-content: center; align-items: center; gap: 10px; display: flex; cursor: pointer;">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </div>
            <div data-shape="Rectangle" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                <div data-size="Large" style="height: 48px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--border-neutral-default, #CBCBCD) solid; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                    </svg>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <!-- Mobile Promo Card 1 -->
            <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <img style="align-self: stretch; height: 177px; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Promo" data-editable-image="promo-img-1" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 4px; padding-right: 24px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="promo-category-1">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="promo-title-1">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="promo-date-1">{DD Month YYYY} - {DD Month YYYY}</div>
                    </div>
                </div>
            </div>
            <!-- Mobile Promo Card 2 -->
            <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <img style="align-self: stretch; height: 177px; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Promo" data-editable-image="promo-img-2" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 4px; padding-right: 24px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="promo-category-2">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="promo-title-2">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="promo-date-2">{DD Month YYYY} - {DD Month YYYY}</div>
                    </div>
                </div>
            </div>
            <!-- Mobile Promo Card 3 -->
            <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <img style="align-self: stretch; height: 177px; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Promo" data-editable-image="promo-img-3" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 4px; padding-right: 24px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="promo-category-3">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="promo-title-3">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="promo-date-3">{DD Month YYYY} - {DD Month YYYY}</div>
                    </div>
                </div>
            </div>
        </div>
        <div data-size="Large" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: center; align-items: center; display: inline-flex; cursor: pointer;">
            <div data-size="Large" style="min-width: 160px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="promo-listing-load-more">Lihat Lebih Banyak</div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'promo-listing-title', label: 'Section Title', defaultValue: '{Promo Section Title} Max. 45 Char' },
      { id: 'promo-listing-tab-1', label: 'Tab 1', defaultValue: 'Tab' },
      { id: 'promo-listing-tab-2', label: 'Tab 2', defaultValue: 'Tab' },
      { id: 'promo-listing-search', label: 'Search Placeholder', defaultValue: '{Search Placeholder}' },
      { id: 'promo-listing-filter-1', label: 'Filter Label 1', defaultValue: '{Filter Label}' },
      { id: 'promo-listing-filter-2', label: 'Filter Label 2', defaultValue: '{Filter Label}' },
      { id: 'promo-category-1', label: 'Category 1', defaultValue: '{Category}' },
      { id: 'promo-title-1', label: 'Promo Card Title 1', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'promo-date-1', label: 'Promo Date 1', defaultValue: '{DD Month YYYY} - {DD Month YYYY}' },
      { id: 'promo-category-2', label: 'Category 2', defaultValue: '{Category}' },
      { id: 'promo-title-2', label: 'Promo Card Title 2', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'promo-date-2', label: 'Promo Date 2', defaultValue: '{DD Month YYYY} - {DD Month YYYY}' },
      { id: 'promo-category-3', label: 'Category 3', defaultValue: '{Category}' },
      { id: 'promo-title-3', label: 'Promo Card Title 3', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'promo-date-3', label: 'Promo Date 3', defaultValue: '{DD Month YYYY} - {DD Month YYYY}' },
      { id: 'promo-listing-load-more', label: 'Load More Text', defaultValue: 'Lihat Lebih Banyak' }
    ]
  };
