import type { SectionTemplate } from '../../../types';

export const newsArticleSection: SectionTemplate = {
    id: 'news-article-section',
    name: 'NEWS & ARTICLE',
    category: 'CONTENT',
    description: 'Pegadaian NEWS & ARTICLE banner featuring title, description, white button, and full-width background image with gradient overlay.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="news-article-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding: 72px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="width: 1296px; max-width: 100%; height: 400px; padding: 40px; background: linear-gradient(90deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0) 50%), url('/background.png'); background-size: cover; background-position: center; overflow: hidden; border-radius: 24px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; box-sizing: border-box;">
            <div style="width: 407px; max-width: 100%; color: var(--text-neutral-onDark-default, white); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="news-article-title">Driving Sustainable Growth</div>
            <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex; flex-wrap: wrap; gap: 16px;">
                <div style="width: 495px; max-width: 100%; opacity: 0.70; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="news-article-desc">Description that supports the title, providing further detail for the user (Max 180 characters and 3 Line Max)</div>
                <div data-size="Large" data-state="Default" data-type="Secondary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="news-article-btn">Text Button</div>
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
  <div class="news-article-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding: 72px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; height: 544px; padding: 40px; background: linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0) 50%), url('/background.png'); background-size: cover; background-position: center; overflow: hidden; border-radius: 24px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; box-sizing: border-box;">
            <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="news-article-title">Driving Sustainable Growth</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
                <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="news-article-desc">Description that supports the title, providing further detail for the user (Max 180 characters and 3 Line Max)</div>
                <div data-size="Small" data-state="Default" data-type="Secondary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                    <div data-size="Small" style="height: 36px; min-width: 120px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="news-article-btn">Text Button</div>
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
</div>`,
    editableFields: [
      { id: 'news-article-title', label: 'Main Title', defaultValue: 'Driving Sustainable Growth' },
      { id: 'news-article-desc', label: 'Description', defaultValue: 'Description that supports the title, providing further detail for the user (Max 180 characters and 3 Line Max)' },
      { id: 'news-article-btn', label: 'Button Text', defaultValue: 'Text Button' },
      { id: 'news-article-bg', label: 'Background Image', defaultValue: '/background.png', type: 'image' }
    ]
  };
