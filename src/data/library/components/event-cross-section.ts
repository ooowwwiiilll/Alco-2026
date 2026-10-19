import type { SectionTemplate } from '../../../types';

export const eventCrossSection: SectionTemplate = {
    id: 'event-cross-section',
    name: 'EVENT CROSS',
    category: 'CONTENT',
    description: 'Pegadaian EVENT CROSS section with event cards, category labels, date, location, card titles, and "Lihat Semua" action button.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="event-cross-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="event-cross-title">{Event Cross Section} Max 45 Character</div>
        <div style="width: 1296px; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
            <div style="flex: 1 1 0; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <img style="align-self: stretch; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 4px; padding-right: 24px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-cross-category-1">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="event-cross-card-title-1">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                        <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 13.33px; height: 14.67px; left: 1.33px; top: 0.66px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-cross-date-1">{DD Month YYYY} - {DD Month YYYY} </div>
                        </div>
                        <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 10.67px; height: 13.33px; left: 2.67px; top: 1.34px; position: absolute; outline: 1.50px var(--border-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-cross-location-1">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="flex: 1 1 0; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <img style="align-self: stretch; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 4px; padding-right: 24px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-cross-category-2">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="event-cross-card-title-2">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                        <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 13.33px; height: 14.67px; left: 1.33px; top: 0.66px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-cross-date-2">{DD Month YYYY} - {DD Month YYYY} </div>
                        </div>
                        <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 10.67px; height: 13.33px; left: 2.67px; top: 1.34px; position: absolute; outline: 1.50px var(--border-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-cross-location-2">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="flex: 1 1 0; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <img style="align-self: stretch; height: 208px; border-radius: 12px; object-fit: cover;" src="/background.png" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 4px; padding-right: 24px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-cross-category-3">{Category}</div>
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="event-cross-card-title-3">{Card Title} <br/>Max 60 characters / 2 lines</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                        <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 13.33px; height: 14.67px; left: 1.33px; top: 0.66px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-cross-date-3">{DD Month YYYY} - {DD Month YYYY} </div>
                        </div>
                        <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                            <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 10.67px; height: 13.33px; left: 2.67px; top: 1.34px; position: absolute; outline: 1.50px var(--border-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="event-cross-location-3">{Location}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
            <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="event-cross-btn">Lihat Semua</div>
                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                    <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="event-cross-section-mobile w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="event-cross-title">{Event Cross Section} Max 45 Character</div>
        <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <img style="align-self: stretch; height: 177px; padding: 10px; border-radius: 8px; object-fit: cover;" src="/background.png" />
            <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 4px; padding-right: 24px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="event-cross-category-1">{Category}</div>
                <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="event-cross-card-title-1">{Card Title} <br/>Max 60 characters / 2 lines</div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                    <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <div style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 13.33px; height: 14.67px; left: 1.33px; top: 0.66px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                        </div>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="event-cross-date-1">{DD Month YYYY} - {DD Month YYYY} </div>
                    </div>
                    <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 10.67px; height: 13.33px; left: 2.67px; top: 1.34px; position: absolute; outline: 1.50px var(--border-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="event-cross-location-1">{Location}</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
            <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: flex-start; align-items: center; gap: 2px; display: flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="event-cross-btn">Lihat Semua</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                    </div>
                </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: flex">
                <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                    <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 4px; height: 8px; left: 6px; top: 4px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                    </div>
                </div>
                <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                    <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 4px; height: 8px; left: 6px; top: 4px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'event-cross-title', label: 'Section Title', defaultValue: '{Event Cross Section} Max 45 Character' },
      { id: 'event-cross-btn', label: 'Button Text', defaultValue: 'Lihat Semua' },
      { id: 'event-cross-category-1', label: 'Category 1', defaultValue: '{Category}' },
      { id: 'event-cross-card-title-1', label: 'Card Title 1', defaultValue: '{Card Title} Max 60 characters / 2 lines' },
      { id: 'event-cross-date-1', label: 'Date Range 1', defaultValue: '{DD Month YYYY} - {DD Month YYYY}' },
      { id: 'event-cross-location-1', label: 'Location 1', defaultValue: '{Location}' }
    ]
  };
