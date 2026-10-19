import type { SectionTemplate } from '../../../types';

export const eventListingSection: SectionTemplate = {
    id: 'event-listing-section',
    name: '[EVENT LISTING]',
    category: 'CONTENT',
    description: 'Pegadaian EVENT LISTING section with title, tabs, search bar, filter dropdowns, and event cards grid.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="event-listing-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="event-listing-title">{Event Section Title} Max. 45 Char</div>
        <div data-theme="On White" style="width: 500px; max-width: 100%; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                <div data-state="Selected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="event-listing-tab-1">Tab</div>
                </div>
                <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-listing-tab-2">Tab</div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex; flex-wrap: wrap; gap: 16px;">
            <div style="width: 400px; max-width: 100%; padding-top: 8px; padding-bottom: 8px; padding-left: 24px; padding-right: 8px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 16px; display: flex">
                <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="event-listing-search">{Search Placeholder}</div>
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
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="event-listing-filter-1">{Filter Label}</div>
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
                <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="event-listing-filter-2">{Filter Label}</div>
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
            <!-- Event Card 1 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Event" data-editable-image="event-img-1" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-category-1">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="event-title-1">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-date-1">{DD Month YYYY}</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-location-1">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Event Card 2 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Event" data-editable-image="event-img-2" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-category-2">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="event-title-2">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-date-2">{DD Month YYYY}</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-location-2">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Event Card 3 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Event" data-editable-image="event-img-3" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-category-3">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="event-title-3">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-date-3">{DD Month YYYY}</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-location-3">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Event Card 4 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Event" data-editable-image="event-img-4" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-category-4">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="event-title-4">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-date-4">{DD Month YYYY}</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-location-4">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Event Card 5 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Event" data-editable-image="event-img-5" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-category-5">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="event-title-5">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-date-5">{DD Month YYYY}</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-location-5">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Event Card 6 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Event" data-editable-image="event-img-6" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-category-6">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="event-title-6">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-date-6">{DD Month YYYY}</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-location-6">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Event Card 7 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Event" data-editable-image="event-img-7" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-category-7">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="event-title-7">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-date-7">{DD Month YYYY}</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-location-7">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Event Card 8 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Event" data-editable-image="event-img-8" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-category-8">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="event-title-8">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-date-8">{DD Month YYYY}</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-location-8">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Event Card 9 -->
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <img style="width: 100%; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Event" data-editable-image="event-img-9" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-category-9">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="event-title-9">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-date-9">{DD Month YYYY}</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-location-9">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="event-listing-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="event-listing-title-m">{Event Section Title} Max. 45 Char</div>
        <div data-theme="On White" style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                <div data-state="Selected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 12px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 4px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="event-listing-tab-1-m">Tab</div>
                </div>
                <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 12px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 4px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-listing-tab-2-m">Tab</div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
            <div style="align-self: stretch; padding-top: 4px; padding-bottom: 4px; padding-left: 16px; padding-right: 4px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="event-listing-search-m">{Search Placeholder}</div>
                <div style="width: 32px; height: 32px; padding: 6px; background: var(--text-brand-primary, #CCEA68); border-radius: 100px; justify-content: center; align-items: center; gap: 10px; display: flex; cursor: pointer;">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                <div data-size="Medium" data-state="Default" data-type="Outline" data-variant="Icon Right" style="flex: 1 1 0; justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Medium" style="flex: 1 1 0; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="event-listing-filter-1-m">{Filter Label}</div>
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
                <div data-size="Medium" data-state="Default" data-type="Outline" data-variant="Icon Right" style="flex: 1 1 0; justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Medium" style="flex: 1 1 0; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="event-listing-filter-2-m">{Filter Label}</div>
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
            <!-- Event Card 1 Mobile -->
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <img style="align-self: stretch; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Event" data-editable-image="m-event-img-1" />
                <div style="align-self: stretch; padding-top: 16px; padding-bottom: 16px; padding-left: 8px; padding-right: 8px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 16px; word-wrap: break-word" data-editable="m-event-category-1">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-event-title-1">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 16px; word-wrap: break-word" data-editable="m-event-date-1">{DD Month YYYY}</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 16px; word-wrap: break-word" data-editable="m-event-location-1">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Event Card 2 Mobile -->
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <img style="align-self: stretch; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Event" data-editable-image="m-event-img-2" />
                <div style="align-self: stretch; padding-top: 16px; padding-bottom: 16px; padding-left: 8px; padding-right: 8px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 16px; word-wrap: break-word" data-editable="m-event-category-2">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-event-title-2">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 16px; word-wrap: break-word" data-editable="m-event-date-2">{DD Month YYYY}</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 16px; word-wrap: break-word" data-editable="m-event-location-2">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Event Card 3 Mobile -->
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <img style="align-self: stretch; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Event" data-editable-image="m-event-img-3" />
                <div style="align-self: stretch; padding-top: 16px; padding-bottom: 16px; padding-left: 8px; padding-right: 8px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 16px; word-wrap: break-word" data-editable="m-event-category-3">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-event-title-3">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 16px; word-wrap: break-word" data-editable="m-event-date-3">{DD Month YYYY}</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 16px; word-wrap: break-word" data-editable="m-event-location-3">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- See More Button Mobile -->
        <div style="align-self: stretch; justify-content: center; align-items: center; gap: 4px; display: inline-flex; cursor: pointer; padding-top: 8px;">
            <div style="color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="m-event-see-more">Lihat Lebih Banyak</div>
            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
            </div>
        </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'event-listing-title', label: 'Section Title', defaultValue: '{Event Section Title} Max. 45 Char' },
      { id: 'event-listing-tab-1', label: 'Tab 1', defaultValue: 'Tab' },
      { id: 'event-listing-tab-2', label: 'Tab 2', defaultValue: 'Tab' },
      { id: 'event-listing-search', label: 'Search Placeholder', defaultValue: '{Search Placeholder}' },
      { id: 'event-listing-filter-1', label: 'Filter Label 1', defaultValue: '{Filter Label}' },
      { id: 'event-listing-filter-2', label: 'Filter Label 2', defaultValue: '{Filter Label}' },
      { id: 'event-category-1', label: 'Category 1', defaultValue: '{Category}' },
      { id: 'event-title-1', label: 'Event Card Title 1', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'event-date-1', label: 'Event Date 1', defaultValue: '{DD Month YYYY}' },
      { id: 'event-location-1', label: 'Event Location 1', defaultValue: '{Location}' },
      { id: 'event-category-2', label: 'Category 2', defaultValue: '{Category}' },
      { id: 'event-title-2', label: 'Event Card Title 2', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'event-date-2', label: 'Event Date 2', defaultValue: '{DD Month YYYY}' },
      { id: 'event-location-2', label: 'Event Location 2', defaultValue: '{Location}' },
      { id: 'event-category-3', label: 'Category 3', defaultValue: '{Category}' },
      { id: 'event-title-3', label: 'Event Card Title 3', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'event-date-3', label: 'Event Date 3', defaultValue: '{DD Month YYYY}' },
      { id: 'event-location-3', label: 'Event Location 3', defaultValue: '{Location}' },
      { id: 'm-event-see-more', label: 'Mobile See More Text', defaultValue: 'Lihat Lebih Banyak' }
    ]
  };
