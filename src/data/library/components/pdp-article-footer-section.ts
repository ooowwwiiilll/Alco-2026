import type { SectionTemplate } from '../../../types';

export const pdpArticleFooterSection: SectionTemplate = {
    id: 'pdp-article-footer-section',
    name: 'PDP ARTICLE FOOTER',
    category: 'CONTENT',
    description: 'Pegadaian PDP ARTICLE FOOTER section with reactions count, social sharing icons, and section label navigation tabs.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="pdp-article-footer-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; background: var(--background-page-default, white); justify-content: space-between; align-items: flex-start; display: inline-flex; box-sizing: border-box;">
        <div style="width: 467px; padding: 24px; justify-content: flex-start; align-items: center; gap: 16px; display: flex">
            <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                    <div style="width: 13.40px; height: 13.33px; left: 1.33px; top: 1.34px; position: absolute; outline: 1.50px var(--border-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                </div>
                <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="pdp-footer-reactions">{X Tanggapan}</div>
            </div>
            <div style="flex: 1 1 0; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                <div style="color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">Bagikan</div>
                <div style="padding: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 32px; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 12.32px; height: 12.32px; left: 1.84px; top: 1.84px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                    </div>
                </div>
                <div style="padding: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 32px; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                    <div style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 13.18px; height: 11.92px; left: 1.41px; top: 2.04px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                    </div>
                </div>
                <div style="padding: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 32px; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                    <div style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 1.44px; height: 1.44px; left: 10.48px; top: 4.08px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                        <div style="width: 6.16px; height: 6.16px; left: 4.92px; top: 4.92px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                        <div style="width: 12px; height: 12px; left: 2px; top: 2px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                    </div>
                </div>
                <div style="padding: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 32px; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                    <div style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 13.33px; height: 13.30px; left: 1.33px; top: 1.34px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 729px; align-self: stretch; padding-top: 24px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
            <div style="align-self: stretch; height: 32px; overflow: hidden; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex">
                <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Inter; font-weight: 600; word-wrap: break-word" data-editable="pdp-footer-label-1">{Section Label}</div>
                <div style="opacity: 0.50; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Inter; font-weight: 600; word-wrap: break-word" data-editable="pdp-footer-label-2">{Section Label}</div>
                <div style="opacity: 0.50; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="pdp-footer-label-3">{Section Label}</div>
                <div style="opacity: 0.50; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Inter; font-weight: 600; word-wrap: break-word" data-editable="pdp-footer-label-4">{Section Label}</div>
            </div>
            <div style="align-self: stretch; height: 4px; position: relative; background: var(--background-brand-secondary-subtlest, #E6EFED); overflow: hidden">
                <div style="width: 90px; height: 4px; left: 0px; top: 0px; position: absolute; background: var(--text-neutral-default, #01231B); border-radius: 100px"></div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="pdp-article-footer-section-mobile w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 72px; display: inline-flex; box-sizing: border-box;">
        <div style="width: 729px; align-self: stretch; padding-top: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
            <div style="align-self: stretch; height: 32px; overflow: hidden; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex">
                <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Inter; font-weight: 600; word-wrap: break-word" data-editable="pdp-footer-label-1">{Section Label}</div>
                <div style="opacity: 0.50; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Inter; font-weight: 600; word-wrap: break-word" data-editable="pdp-footer-label-2">{Section Label}</div>
                <div style="opacity: 0.50; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="pdp-footer-label-3">{Section Label}</div>
                <div style="opacity: 0.50; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Inter; font-weight: 600; word-wrap: break-word" data-editable="pdp-footer-label-4">{Section Label}</div>
            </div>
            <div style="align-self: stretch; height: 4px; position: relative; background: var(--background-brand-secondary-subtlest, #E6EFED); overflow: hidden">
                <div style="width: 90px; height: 4px; left: 0px; top: 0px; position: absolute; background: var(--text-neutral-default, #01231B); border-radius: 100px"></div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'pdp-footer-reactions', label: 'Reactions Text', defaultValue: '{X Tanggapan}' },
      { id: 'pdp-footer-label-1', label: 'Tab 1', defaultValue: '{Section Label}' },
      { id: 'pdp-footer-label-2', label: 'Tab 2', defaultValue: '{Section Label}' },
      { id: 'pdp-footer-label-3', label: 'Tab 3', defaultValue: '{Section Label}' },
      { id: 'pdp-footer-label-4', label: 'Tab 4', defaultValue: '{Section Label}' }
    ]
  };
