import type { SectionTemplate } from '../../../types';

export const howToSection: SectionTemplate = {
    id: 'how-to-section',
    name: 'HOW TO',
    category: 'CONTENT',
    description: 'Pegadaian HOW TO section with section title, tab navigation, step number indicators (1, 2, 3), step titles and descriptions, and navigation controls.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="how-to-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="how-to-title">How to Section Max 40 character, 1 Line Max</div>
        <div data-theme="On White" style="width: 500px; max-width: 100%; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                <div data-state="Selected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="how-to-tab-1">Tab</div>
                </div>
                <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="how-to-tab-2">Tab</div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; flex-wrap: wrap;">
            <div style="flex: 1 1 0; min-width: 260px; padding-top: 24px; padding-bottom: 24px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 48px; display: inline-flex">
                <div style="width: 64px; height: 64px; background: var(--background-brand-secondary-subtlest, #E6EFED); border-radius: 999px; flex-direction: column; justify-content: center; align-items: center; display: flex">
                    <div style="color: var(--text-brand-secondary, #015743); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="how-to-step-1-num">1</div>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="how-to-step-1-title">Title Step Selected to Support (Max 48 character, 2 Line Max)</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="how-to-step-1-desc">Description that supports the title, providing further detail for the user (Max 180 characters and 3 Line Max)</div>
                </div>
            </div>
            <div style="flex: 1 1 0; min-width: 260px; padding-top: 24px; padding-bottom: 24px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 48px; display: inline-flex">
                <div style="width: 64px; height: 64px; background: var(--background-brand-secondary-subtlest, #E6EFED); border-radius: 999px; flex-direction: column; justify-content: center; align-items: center; display: flex">
                    <div style="color: var(--text-brand-secondary, #015743); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="how-to-step-2-num">2</div>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="how-to-step-2-title">Title Step Selected to Support (Max 48 character, 2 Line Max)</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="how-to-step-2-desc">Description that supports the title, providing further detail for the user (Max 180 characters and 3 Line Max)</div>
                </div>
            </div>
            <div style="flex: 1 1 0; min-width: 260px; padding-top: 24px; padding-bottom: 24px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 48px; display: inline-flex">
                <div style="width: 64px; height: 64px; background: var(--background-brand-secondary-subtlest, #E6EFED); border-radius: 999px; flex-direction: column; justify-content: center; align-items: center; display: flex">
                    <div style="color: var(--text-brand-secondary, #015743); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="how-to-step-3-num">3</div>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="how-to-step-3-title">Title Step Selected to Support (Max 48 character, 2 Line Max)</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="how-to-step-3-desc">Description that supports the title, providing further detail for the user (Max 180 characters and 3 Line Max)</div>
                </div>
            </div>
        </div>
        <div style="justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex">
            <div data-shape="Rectangle" data-size="Small" data-state="Disable" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-disabled, #E0E0E1); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div data-color="Disable" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B1B1B3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: flex">
                <div style="width: 48px; height: 8px; background: var(--icon-brand-secondary, #015743); border-radius: 999px"></div>
                <div style="width: 8px; height: 8px; background: var(--icon-neutral-onDark-disabled, #B1B1B3); border-radius: 999px"></div>
                <div style="width: 8px; height: 8px; background: var(--icon-neutral-onDark-disabled, #B1B1B3); border-radius: 999px"></div>
                <div style="width: 8px; height: 8px; background: var(--icon-neutral-onDark-disabled, #B1B1B3); border-radius: 999px"></div>
            </div>
            <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="how-to-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 60px; padding-bottom: 60px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 32px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="how-to-title">How to Section Max 40 character, 1 Line Max</div>
        <div data-theme="On White" style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                <div data-state="Selected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="how-to-mobile-tab-1">Tab</div>
                </div>
                <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="how-to-mobile-tab-2">Tab</div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: center; align-items: flex-start; gap: 32px; display: flex">
            <div style="align-self: stretch; padding-top: 16px; padding-bottom: 16px; flex-direction: column; justify-content: center; align-items: center; gap: 24px; display: flex">
                <div style="width: 64px; height: 64px; background: var(--background-brand-secondary-subtlest, #E6EFED); border-radius: 999px; flex-direction: column; justify-content: center; align-items: center; display: flex">
                    <div style="color: var(--text-brand-secondary, #015743); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="how-to-mobile-step-num">1</div>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 28px; word-wrap: break-word" data-editable="how-to-mobile-step-title">Title Step Selected to Support (Max 48 character, 2 Line Max)</div>
                    <div style="align-self: stretch; text-align: center; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="how-to-mobile-step-desc">Description that supports the title, providing further detail for the user (Max 180 characters and 3 Line Max)</div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
            <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                <div style="width: 8px; height: 8px; background: var(--icon-neutral-onDark-disabled, #B1B1B3); border-radius: 999px"></div>
                <div style="width: 32px; height: 8px; background: var(--icon-brand-secondary, #015743); border-radius: 999px"></div>
                <div style="width: 8px; height: 8px; background: var(--icon-neutral-onDark-disabled, #B1B1B3); border-radius: 999px"></div>
                <div style="width: 8px; height: 8px; background: var(--icon-neutral-onDark-disabled, #B1B1B3); border-radius: 999px"></div>
            </div>
            <div style="justify-content: center; align-items: center; gap: 12px; display: flex">
                <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Small" style="height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
                <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Small" style="height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'how-to-title', label: 'Section Title', defaultValue: 'How to Section Max 40 character, 1 Line Max' },
      { id: 'how-to-tab-1', label: 'Tab 1', defaultValue: 'Tab' },
      { id: 'how-to-tab-2', label: 'Tab 2', defaultValue: 'Tab' },
      { id: 'how-to-step-1-title', label: 'Step 1 Title', defaultValue: 'Title Step Selected to Support (Max 48 character, 2 Line Max)' },
      { id: 'how-to-step-1-desc', label: 'Step 1 Description', defaultValue: 'Description that supports the title, providing further detail for the user (Max 180 characters and 3 Line Max)' },
      { id: 'how-to-step-2-title', label: 'Step 2 Title', defaultValue: 'Title Step Selected to Support (Max 48 character, 2 Line Max)' },
      { id: 'how-to-step-2-desc', label: 'Step 2 Description', defaultValue: 'Description that supports the title, providing further detail for the user (Max 180 characters and 3 Line Max)' },
      { id: 'how-to-step-3-title', label: 'Step 3 Title', defaultValue: 'Title Step Selected to Support (Max 48 character, 2 Line Max)' },
      { id: 'how-to-step-3-desc', label: 'Step 3 Description', defaultValue: 'Description that supports the title, providing further detail for the user (Max 180 characters and 3 Line Max)' }
    ]
  };
