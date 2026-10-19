import type { SectionTemplate } from '../../../types';

export const accordionSection: SectionTemplate = {
    id: 'accordion-section',
    name: 'ACCORDION',
    category: 'CONTENT',
    description: 'Pegadaian ACCORDION section with main section title, description, and list of expandable/collapsible FAQ items.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="accordion-section-desktop w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 72px; display: inline-flex; box-sizing: border-box;">
        <div style="flex: 1 1 0; align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="accordion-title">Accordion Section Max 45 Character, 2 Line Max</div>
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="accordion-desc">Description Max 180 characters and 4 Line Max.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.</div>
        </div>
        <div style="width: 748px; max-width: 100%; flex-direction: column; justify-content: center; align-items: center; gap: 32px; display: inline-flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                <!-- Expanded Active Item -->
                <div style="align-self: stretch; padding: 32px; background: var(--background-brand-secondary-bold, #015743); border-radius: 24px; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: center; align-items: flex-start; gap: 8px; display: inline-flex">
                        <div style="align-self: stretch; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="accordion-item-1-title">Accordion Item<br/>(Max 120 Character, 2 Line Max)</div>
                        <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-onDark-default, white); font-size: 18px; font-family: Geist; font-weight: 400; line-height: 26px; word-wrap: break-word" data-editable="accordion-item-1-desc">Accordion description goes here. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it. Palo santo microdosing lyft. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it. Palo santo microdosing lyft. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it. Palo santo microdosing lyft. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it. Palo santo microdosing lyft.</div>
                    </div>
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Collapsed Item 2 -->
                <div style="align-self: stretch; padding-left: 32px; padding-right: 32px; padding-top: 24px; padding-bottom: 24px; background: var(--background-surface-primary-default, white); border-radius: 24px; justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="accordion-item-2-title">Accordion Item<br/>(Max 120 Character, 2 Line Max)</div>
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Collapsed Item 3 -->
                <div style="align-self: stretch; padding-left: 32px; padding-right: 32px; padding-top: 24px; padding-bottom: 24px; background: var(--background-surface-primary-default, white); border-radius: 24px; justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="accordion-item-3-title">Accordion Item<br/>(Max 120 Character, 2 Line Max)</div>
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Collapsed Item 4 -->
                <div style="align-self: stretch; padding-left: 32px; padding-right: 32px; padding-top: 24px; padding-bottom: 24px; background: var(--background-surface-primary-default, white); border-radius: 24px; justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="accordion-item-4-title">Accordion Item<br/>(Max 120 Character, 2 Line Max)</div>
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Collapsed Item 5 -->
                <div style="align-self: stretch; padding-left: 32px; padding-right: 32px; padding-top: 24px; padding-bottom: 24px; background: var(--background-surface-primary-default, white); border-radius: 24px; justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="accordion-item-5-title">Accordion Item<br/>(Max 120 Character, 2 Line Max)</div>
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Load More Button -->
            <div data-size="Large" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: center; align-items: center; display: inline-flex; cursor: pointer;">
                <div data-size="Large" style="min-width: 160px; border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="accordion-more-btn">Lihat Lebih Banyak</div>
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
  </div>

  <!-- Mobile Layout -->
  <div class="accordion-section-mobile w-full overflow-hidden bg-[#F8F8F8] flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="accordion-title">Accordion Section Max 45 character, 2 Line </div>
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="accordion-desc">Description Max 180 characters and 4 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.</div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: center; gap: 24px; display: flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                <div style="align-self: stretch; padding: 24px; background: var(--background-brand-secondary-bold, #015743); border-radius: 16px; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: center; align-items: flex-start; gap: 4px; display: inline-flex">
                        <div style="align-self: stretch; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="accordion-item-1-title">Accordion Item<br/>(Max 120 Character, 2 Line Max)</div>
                        <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="accordion-item-1-desc">Accordion description goes here. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it. Palo santo microdosing lyft. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it. Palo santo microdosing lyft. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it. Palo santo microdosing lyft. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it. Palo santo microdosing lyft.</div>
                    </div>
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding-left: 24px; padding-right: 24px; padding-top: 20px; padding-bottom: 20px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex">
                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="accordion-item-2-title">Accordion Item<br/>(Max 120 Character, 2 Line Max)</div>
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding-left: 24px; padding-right: 24px; padding-top: 20px; padding-bottom: 20px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex">
                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="accordion-item-3-title">Accordion Item<br/>(Max 120 Character, 2 Line Max)</div>
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding-left: 24px; padding-right: 24px; padding-top: 20px; padding-bottom: 20px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex">
                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="accordion-item-4-title">Accordion Item<br/>(Max 120 Character, 2 Line Max)</div>
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding-left: 24px; padding-right: 24px; padding-top: 20px; padding-bottom: 20px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex">
                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="accordion-item-5-title">Accordion Item<br/>(Max 120 Character, 2 Line Max)</div>
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-size="Large" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: center; align-items: center; display: inline-flex; cursor: pointer;">
                <div data-size="Large" style="min-width: 160px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="accordion-more-btn">Lihat Lebih Banyak</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'accordion-title', label: 'Section Title', defaultValue: 'Accordion Section Max 45 Character, 2 Line Max' },
      { id: 'accordion-desc', label: 'Section Description', defaultValue: 'Description Max 180 characters and 4 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { id: 'accordion-item-1-title', label: 'Active Item Title', defaultValue: 'Accordion Item (Max 120 Character, 2 Line Max)' },
      { id: 'accordion-item-1-desc', label: 'Active Item Description', defaultValue: 'Accordion description goes here. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it. Palo santo microdosing lyft.' },
      { id: 'accordion-more-btn', label: 'More Button Text', defaultValue: 'Lihat Lebih Banyak' }
    ]
  };
