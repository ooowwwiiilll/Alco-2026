import type { SectionTemplate } from '../../../types';

export const contentHighlight: SectionTemplate = {
    id: 'content-highlight',
    name: 'CONTENT HIGHLIGHT',
    category: 'CONTENT',
    description: 'Pegadaian Content Highlight section with featured visual card, category tag, publication date, content title, description, Read More link, and navigation arrow controls.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="content-highlight-desktop w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 100%; max-width: 1440px; padding: 72px; background: var(--background-page-grey, #F8F8F8); justify-content: flex-start; align-items: flex-start; gap: 64px; display: inline-flex; box-sizing: border-box;">
      <img style="width: 748px; height: 374px; border-radius: 12px; object-fit: cover; display: block;" src="/background.png" onerror="this.src='/background.png'" alt="Content Highlight" data-editable="content-highlight-img" />
      <div style="flex: 1 1 0; min-width: 0; align-self: stretch; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
          <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex;">
            <div style="color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word;" data-editable="content-highlight-category">{Category}</div>
            <div style="color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word;">•</div>
            <div style="color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word;" data-editable="content-highlight-date">{DD Month YYYY}</div>
          </div>
          <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist, sans-serif; font-weight: 500; line-height: 38px; word-wrap: break-word;" data-editable="content-highlight-title">{Content Title} Max 60 characters / 2 lines</div>
          <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word;" data-editable="content-highlight-desc">{Description} Max 160 characters / 3 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
            <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: flex-start; align-items: center; gap: 4px; display: flex;" class="hover:opacity-80 transition-opacity">
              <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word;" data-editable="content-highlight-cta">Baca Selengkapnya</div>
              <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex;">
          <div data-shape="Rectangle" data-size="Large" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
            <div data-size="Large" style="width: 48px; height: 48px; padding: 12px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; display: flex;" class="hover:opacity-90 transition-opacity shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </div>
          </div>
          <div data-shape="Rectangle" data-size="Large" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
            <div data-size="Large" style="width: 48px; height: 48px; padding: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; display: flex;" class="hover:opacity-90 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile Layout -->
  <div class="content-highlight-mobile w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 100%; max-width: 402px; padding-left: 24px; padding-right: 24px; padding-top: 48px; padding-bottom: 48px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: flex; box-sizing: border-box;">
      <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex;">
        <img style="align-self: stretch; width: 100%; height: 177px; border-radius: 8px; object-fit: cover; display: block;" src="/background.png" onerror="this.src='/background.png'" alt="Content Highlight" data-editable="content-highlight-img" />
        <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex;">
          <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex;">
            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="content-highlight-category">{Category}</div>
            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word;">•</div>
            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="content-highlight-date">{DD Month YYYY}</div>
          </div>
          <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 500; line-height: 32px; word-wrap: break-word;" data-editable="content-highlight-title">{Content Title} Max 60 characters / 2 lines</div>
          <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="content-highlight-desc">{Description} Max 160 characters / 3 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
            <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: flex-start; align-items: center; gap: 4px; display: flex;">
              <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word;" data-editable="content-highlight-cta">Baca Selengkapnya</div>
              <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex;">
        <div data-shape="Rectangle" data-size="Large" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
          <div data-size="Large" style="width: 48px; height: 48px; padding: 12px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex;" class="hover:opacity-90 transition-opacity shadow-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </div>
        </div>
        <div data-shape="Rectangle" data-size="Large" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
          <div data-size="Large" style="width: 48px; height: 48px; padding: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex;" class="hover:opacity-90 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'content-highlight-img', label: 'Featured Image', defaultValue: '/background.png', type: 'image' },
      { id: 'content-highlight-category', label: 'Category', defaultValue: '{Category}' },
      { id: 'content-highlight-date', label: 'Date', defaultValue: '{DD Month YYYY}' },
      { id: 'content-highlight-title', label: 'Content Title', defaultValue: '{Content Title} Max 60 characters / 2 lines' },
      { id: 'content-highlight-desc', label: 'Description', defaultValue: '{Description} Max 160 characters / 3 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { id: 'content-highlight-cta', label: 'CTA Text', defaultValue: 'Baca Selengkapnya' }
    ]
  };
