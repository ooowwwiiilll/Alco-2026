import type { SectionTemplate } from '../../../types';

export const articleListing: SectionTemplate = {
    id: 'article-listing',
    name: 'ARTICLE LISTING',
    category: 'CONTENT',
    description: 'Pegadaian Article Listing section with category tabs, search input, filter controls, and 9-card article grid.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="article-listing-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; max-width: 1440px; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
      <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist, sans-serif; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="article-listing-title">{Article Section Title} Max. 45 Char</div>
      
      <!-- Tabs -->
      <div data-theme="On White" style="width: 500px; max-width: 100%; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; display: flex">
        <div style="align-self: stretch; overflow: hidden; justify-content: center; align-items: center; display: inline-flex">
          <div data-state="Selected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
            <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="article-listing-tab1">Tab</div>
          </div>
          <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
            <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-tab2">Tab</div>
          </div>
        </div>
      </div>

      <!-- Search & Filters Row -->
      <div style="width: 100%; max-width: 1328px; justify-content: space-between; align-items: center; display: inline-flex; flex-wrap: wrap; gap: 16px; margin: 0 auto;">
        <div style="width: 400px; max-width: 100%; padding-top: 8px; padding-bottom: 8px; padding-left: 24px; padding-right: 8px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 16px; display: flex">
          <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="article-listing-search">{Search Placeholder}</div>
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
              <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="article-listing-filter1">{Filter Label}</div>
              <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
            <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
              <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="article-listing-filter2">{Filter Label}</div>
              <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 9 Cards Grid (Desktop centered grid) -->
      <div style="width: 100%; max-width: 1328px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; justify-content: center; align-items: start; margin: 0 auto;">
        <!-- Card 1 -->
        <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; width: 416px; max-width: 100%;">
          <img style="width: 416px; max-width: 100%; height: 416px; padding: 10px; border-radius: 12px; object-fit: cover; display: block; box-sizing: border-box;" src="/background.png" onerror="this.src='/background.png'" alt="Article Card 1" data-editable="article-listing-card1-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card1-category">{Category}</div>
            <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="article-listing-card1-title">{Card Title} <br/>Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
              <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card1-date">{DD Month YYYY}</div>
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; width: 416px; max-width: 100%;">
          <img style="width: 416px; max-width: 100%; height: 416px; padding: 10px; border-radius: 12px; object-fit: cover; display: block; box-sizing: border-box;" src="/background.png" onerror="this.src='/background.png'" alt="Article Card 2" data-editable="article-listing-card2-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card2-category">{Category}</div>
            <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="article-listing-card2-title">{Card Title} <br/>Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
              <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card2-date">{DD Month YYYY}</div>
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; width: 416px; max-width: 100%;">
          <img style="width: 416px; max-width: 100%; height: 416px; padding: 10px; border-radius: 12px; object-fit: cover; display: block; box-sizing: border-box;" src="/background.png" onerror="this.src='/background.png'" alt="Article Card 3" data-editable="article-listing-card3-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card3-category">{Category}</div>
            <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="article-listing-card3-title">{Card Title} <br/>Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
              <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card3-date">{DD Month YYYY}</div>
            </div>
          </div>
        </div>
        <!-- Card 4 -->
        <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; width: 416px; max-width: 100%;">
          <img style="width: 416px; max-width: 100%; height: 416px; padding: 10px; border-radius: 12px; object-fit: cover; display: block; box-sizing: border-box;" src="/background.png" onerror="this.src='/background.png'" alt="Article Card 4" data-editable="article-listing-card4-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card4-category">{Category}</div>
            <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="article-listing-card4-title">{Card Title} <br/>Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
              <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card4-date">{DD Month YYYY}</div>
            </div>
          </div>
        </div>
        <!-- Card 5 -->
        <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; width: 416px; max-width: 100%;">
          <img style="width: 416px; max-width: 100%; height: 416px; padding: 10px; border-radius: 12px; object-fit: cover; display: block; box-sizing: border-box;" src="/background.png" onerror="this.src='/background.png'" alt="Article Card 5" data-editable="article-listing-card5-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card5-category">{Category}</div>
            <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="article-listing-card5-title">{Card Title} <br/>Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
              <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card5-date">{DD Month YYYY}</div>
            </div>
          </div>
        </div>
        <!-- Card 6 -->
        <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; width: 416px; max-width: 100%;">
          <img style="width: 416px; max-width: 100%; height: 416px; padding: 10px; border-radius: 12px; object-fit: cover; display: block; box-sizing: border-box;" src="/background.png" onerror="this.src='/background.png'" alt="Article Card 6" data-editable="article-listing-card6-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card6-category">{Category}</div>
            <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="article-listing-card6-title">{Card Title} <br/>Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
              <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card6-date">{DD Month YYYY}</div>
            </div>
          </div>
        </div>
        <!-- Card 7 -->
        <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; width: 416px; max-width: 100%;">
          <img style="width: 416px; max-width: 100%; height: 416px; padding: 10px; border-radius: 12px; object-fit: cover; display: block; box-sizing: border-box;" src="/background.png" onerror="this.src='/background.png'" alt="Article Card 7" data-editable="article-listing-card7-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card7-category">{Category}</div>
            <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="article-listing-card7-title">{Card Title} <br/>Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
              <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card7-date">{DD Month YYYY}</div>
            </div>
          </div>
        </div>
        <!-- Card 8 -->
        <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; width: 416px; max-width: 100%;">
          <img style="width: 416px; max-width: 100%; height: 416px; padding: 10px; border-radius: 12px; object-fit: cover; display: block; box-sizing: border-box;" src="/background.png" onerror="this.src='/background.png'" alt="Article Card 8" data-editable="article-listing-card8-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card8-category">{Category}</div>
            <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="article-listing-card8-title">{Card Title} <br/>Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
              <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card8-date">{DD Month YYYY}</div>
            </div>
          </div>
        </div>
        <!-- Card 9 -->
        <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; width: 416px; max-width: 100%;">
          <img style="width: 416px; max-width: 100%; height: 416px; padding: 10px; border-radius: 12px; object-fit: cover; display: block; box-sizing: border-box;" src="/background.png" onerror="this.src='/background.png'" alt="Article Card 9" data-editable="article-listing-card9-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card9-category">{Category}</div>
            <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="article-listing-card9-title">{Card Title} <br/>Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
              <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card9-date">{DD Month YYYY}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="article-listing-mobile w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; max-width: 402px; padding-left: 20px; padding-right: 20px; padding-top: 48px; padding-bottom: 48px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: inline-flex; box-sizing: border-box; margin: 0 auto;">
      <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 28px; font-family: Geist, sans-serif; font-weight: 500; line-height: 34px; word-wrap: break-word" data-editable="article-listing-title">{Article Section Title} Max. 45 Char</div>
      
      <!-- Mobile Tabs -->
      <div data-theme="On White" style="width: 100%; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; display: flex">
        <div style="align-self: stretch; overflow: hidden; justify-content: center; align-items: center; display: inline-flex">
          <div data-state="Selected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
            <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="article-listing-tab1">Tab</div>
          </div>
          <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
            <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-tab2">Tab</div>
          </div>
        </div>
      </div>

      <!-- Mobile Search Bar -->
      <div style="align-self: stretch; padding-top: 8px; padding-bottom: 8px; padding-left: 20px; padding-right: 8px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: space-between; align-items: center; gap: 12px; display: flex">
        <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 15px; font-family: Geist, sans-serif; font-weight: 400; line-height: 22px; word-wrap: break-word" data-editable="article-listing-search">{Search Placeholder}</div>
        <div style="width: 36px; height: 36px; padding: 6px; background: var(--text-brand-primary, #CCEA68); border-radius: 100px; justify-content: center; align-items: center; display: flex; cursor: pointer;">
          <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>

      <!-- Mobile Filters Row -->
      <div style="align-self: stretch; justify-content: space-between; align-items: center; gap: 10px; display: flex">
        <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Icon Right" style="flex: 1 1 0; justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
          <div data-size="Large" style="height: 44px; width: 100%; padding-left: 14px; padding-right: 14px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="article-listing-filter1">{Filter Label}</div>
            <div data-color="Brand" style="width: 14px; height: 14px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
        <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Icon Right" style="flex: 1 1 0; justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
          <div data-size="Large" style="height: 44px; width: 100%; padding-left: 14px; padding-right: 14px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="article-listing-filter2">{Filter Label}</div>
            <div data-color="Brand" style="width: 14px; height: 14px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Cards Stack (3 cards) -->
      <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 24px; display: flex">
        <!-- Mobile Card 1 -->
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; display: flex; width: 100%;">
          <div style="align-self: stretch; width: 100%; aspect-ratio: 1 / 1; border-radius: 12px; overflow: hidden; padding: 10px; box-sizing: border-box;">
            <img style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover; display: block;" src="/background.png" onerror="this.src='/background.png'" alt="Article Card 1" data-editable="article-listing-card1-img" />
          </div>
          <div style="align-self: stretch; padding-top: 16px; padding-bottom: 16px; padding-left: 8px; padding-right: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card1-category">{Category}</div>
            <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 28px; word-wrap: break-word" data-editable="article-listing-card1-title">{Card Title} <br/>Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
              <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card1-date">{DD Month YYYY}</div>
            </div>
          </div>
        </div>
        <!-- Mobile Card 2 -->
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; display: flex; width: 100%;">
          <div style="align-self: stretch; width: 100%; aspect-ratio: 1 / 1; border-radius: 12px; overflow: hidden; padding: 10px; box-sizing: border-box;">
            <img style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover; display: block;" src="/background.png" onerror="this.src='/background.png'" alt="Article Card 2" data-editable="article-listing-card2-img" />
          </div>
          <div style="align-self: stretch; padding-top: 16px; padding-bottom: 16px; padding-left: 8px; padding-right: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card2-category">{Category}</div>
            <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 28px; word-wrap: break-word" data-editable="article-listing-card2-title">{Card Title} <br/>Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
              <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card2-date">{DD Month YYYY}</div>
            </div>
          </div>
        </div>
        <!-- Mobile Card 3 -->
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; display: flex; width: 100%;">
          <div style="align-self: stretch; width: 100%; aspect-ratio: 1 / 1; border-radius: 12px; overflow: hidden; padding: 10px; box-sizing: border-box;">
            <img style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover; display: block;" src="/background.png" onerror="this.src='/background.png'" alt="Article Card 3" data-editable="article-listing-card3-img" />
          </div>
          <div style="align-self: stretch; padding-top: 16px; padding-bottom: 16px; padding-left: 8px; padding-right: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card3-category">{Category}</div>
            <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 28px; word-wrap: break-word" data-editable="article-listing-card3-title">{Card Title} <br/>Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
              <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-listing-card3-date">{DD Month YYYY}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile See More Button -->
      <div style="align-self: stretch; padding-top: 8px; padding-bottom: 8px; justify-content: center; align-items: center; display: flex;">
        <div style="justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer; text-decoration: none;" class="hover:opacity-80 transition-opacity">
          <span style="color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; text-align: center;" data-editable="article-listing-see-more">Lihat Lebih Banyak</span>
          <div style="width: 18px; height: 18px; display: flex; align-items: center; justify-content: center;">
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
      { id: 'article-listing-title', label: 'Section Title', defaultValue: '{Article Section Title} Max. 45 Char' },
      { id: 'article-listing-tab1', label: 'Active Tab', defaultValue: 'Tab' },
      { id: 'article-listing-tab2', label: 'Tab 2', defaultValue: 'Tab' },
      { id: 'article-listing-search', label: 'Search Placeholder', defaultValue: '{Search Placeholder}' },
      { id: 'article-listing-filter1', label: 'Filter Label 1', defaultValue: '{Filter Label}' },
      { id: 'article-listing-filter2', label: 'Filter Label 2', defaultValue: '{Filter Label}' },
      { id: 'article-listing-see-more', label: 'Mobile See More Button', defaultValue: 'Lihat Lebih Banyak' },
      { id: 'article-listing-card1-img', label: 'Card 1 Image', defaultValue: '/background.png', type: 'image' },
      { id: 'article-listing-card1-category', label: 'Card 1 Category', defaultValue: '{Category}' },
      { id: 'article-listing-card1-title', label: 'Card 1 Title', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'article-listing-card1-date', label: 'Card 1 Date', defaultValue: '{DD Month YYYY}' },
      { id: 'article-listing-card2-img', label: 'Card 2 Image', defaultValue: '/background.png', type: 'image' },
      { id: 'article-listing-card2-category', label: 'Card 2 Category', defaultValue: '{Category}' },
      { id: 'article-listing-card2-title', label: 'Card 2 Title', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'article-listing-card2-date', label: 'Card 2 Date', defaultValue: '{DD Month YYYY}' },
      { id: 'article-listing-card3-img', label: 'Card 3 Image', defaultValue: '/background.png', type: 'image' },
      { id: 'article-listing-card3-category', label: 'Card 3 Category', defaultValue: '{Category}' },
      { id: 'article-listing-card3-title', label: 'Card 3 Title', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'article-listing-card3-date', label: 'Card 3 Date', defaultValue: '{DD Month YYYY}' }
    ]
  };
