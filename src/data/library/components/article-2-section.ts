import type { SectionTemplate } from '../../../types';

export const article2Section: SectionTemplate = {
    id: 'article-2-section',
    name: 'ARTICLE 2',
    category: 'CONTENT',
    description: 'Pegadaian ARTICLE 2 section with background image banner, whistleblowing title, supporting description, and white pill button.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="article-2-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding: 72px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="width: 1296px; max-width: 100%; height: 400px; padding: 40px; background: linear-gradient(90deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0) 50%), url(/background.png) center/cover no-repeat; overflow: hidden; border-radius: 24px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; box-sizing: border-box;">
            <div style="width: 407px; max-width: 100%; color: var(--text-neutral-onDark-default, white); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="article-2-title">Whistleblowing</div>
            <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex; flex-wrap: wrap; gap: 16px;">
                <div style="width: 495px; max-width: 100%; opacity: 0.70; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="article-2-desc">Description that supports the title in section ARTICLE 2 (Max 120 character, 3 Line Max)</div>
                <div data-size="Large" data-state="Default" data-type="Secondary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="article-2-btn">Text Button</div>
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="article-2-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding: 72px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; height: 544px; padding: 40px; overflow: hidden; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; box-sizing: border-box;">
            <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="article-2-title">Whistleblowing</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="article-2-desc">Description that supports the title in section ARTICLE 2 (Max 120 character, 3 Line Max)</div>
                <div data-theme="On Dark" style="border-radius: 9999px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div style="padding-left: 20px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; background: var(--button-primary-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: inline-flex">
                        <div style="text-align: center; color: var(--button-primary-label, #015743); font-size: 14px; font-family: Geist; font-weight: 500; line-height: 18px; word-wrap: break-word" data-editable="article-2-btn">Text Button</div>
                        <div style="width: 16px; height: 16px; position: relative">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="#015743" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
      { id: 'article-2-title', label: 'Title', defaultValue: 'Whistleblowing' },
      { id: 'article-2-desc', label: 'Description', defaultValue: 'Description that supports the title in section ARTICLE 2 (Max 120 character, 3 Line Max)' },
      { id: 'article-2-btn', label: 'Button Text', defaultValue: 'Text Button' }
    ]
  };
