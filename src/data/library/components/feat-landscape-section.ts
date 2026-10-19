import type { SectionTemplate } from '../../../types';

export const featLandscapeSection: SectionTemplate = {
    id: 'feat-landscape-section',
    name: '[FEAT LANDSCAPE]',
    category: 'CONTENT',
    description: 'Pegadaian FEAT LANDSCAPE section with headline category, primary feature card with description and action button, and landscape column tiles.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="feat-landscape-section-desktop w-full overflow-hidden bg-black flex justify-center">
    <div style="width: 1440px; height: 900px; position: relative; background: #D9D9D9; justify-content: flex-start; align-items: flex-start; display: inline-flex; box-sizing: border-box;">
        <!-- Feature Column 1 (Large) -->
        <div style="width: 708px; align-self: stretch; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: linear-gradient(180deg, rgba(10, 46, 31, 0.20) 0%, #0A2E1F 100%), url('/background.png'); background-size: cover; background-position: center; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex; box-sizing: border-box;">
            <div style="width: 205px; color: var(--text-neutral-onDark-default, white); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="feat-headline">Headline category Max 40 char and 2 Line.</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: flex">
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                        <div style="color: white; font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="feat-title-1">Title</div>
                    </div>
                    <div style="align-self: stretch; padding-right: 80px; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <div style="flex: 1 1 0; color: white; font-size: 18px; font-family: Geist; font-weight: 400; line-height: 26px; word-wrap: break-word" data-editable="feat-desc-1">Description with maximum character 160 and maximum line 3</div>
                    </div>
                </div>
                <div data-shape="Rectangle" data-size="Large" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; padding-left: 32px; padding-right: 32px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
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
        <!-- Feature Column 2 -->
        <div style="flex: 1 1 0; align-self: stretch; background: linear-gradient(180deg, rgba(10, 46, 31, 0.20) 0%, #0A2E1F 100%), url('/background.png'); background-size: cover; background-position: center; flex-direction: column; justify-content: center; align-items: center; display: inline-flex; cursor: pointer;">
            <div style="text-align: center; color: white; font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="feat-title-2">Title</div>
        </div>
        <!-- Feature Column 3 -->
        <div style="flex: 1 1 0; align-self: stretch; background: linear-gradient(180deg, rgba(10, 46, 31, 0.20) 0%, #0A2E1F 100%), url('/background.png'); background-size: cover; background-position: center; flex-direction: column; justify-content: center; align-items: center; display: inline-flex; cursor: pointer;">
            <div style="text-align: center; color: white; font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="feat-title-3">Title</div>
        </div>
        <!-- Feature Column 4 -->
        <div style="flex: 1 1 0; align-self: stretch; background: linear-gradient(180deg, rgba(10, 46, 31, 0.20) 0%, #0A2E1F 100%), url('/background.png'); background-size: cover; background-position: center; flex-direction: column; justify-content: center; align-items: center; display: inline-flex; cursor: pointer;">
            <div style="text-align: center; color: white; font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="feat-title-4">Title</div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="feat-landscape-section-mobile w-full overflow-hidden bg-black flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; min-height: 874px; background: linear-gradient(180deg, rgba(10, 46, 31, 0.20) 0%, #0A2E1F 100%); overflow: hidden; background-image: url('/background.png'); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex: 1 1 0; padding-left: 24px; padding-right: 24px; padding-top: 72px; padding-bottom: 72px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; box-sizing: border-box;">
            <div style="width: 205px; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-feat-headline">Headline category Max 40 char and 2 Line.</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: flex">
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                        <div style="color: white; font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="m-feat-title-1">Title</div>
                    </div>
                    <div style="align-self: stretch; padding-right: 80px; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <div style="flex: 1 1 0; color: white; font-size: 18px; font-family: Geist; font-weight: 400; line-height: 26px; word-wrap: break-word" data-editable="m-feat-desc-1">Description with maximum character 160 and maximum line 3</div>
                    </div>
                </div>
                <div style="overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </div>
                        </div>
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
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'feat-headline', label: 'Headline Category', defaultValue: 'Headline category Max 40 char and 2 Line.' },
      { id: 'feat-title-1', label: 'Title 1', defaultValue: 'Title' },
      { id: 'feat-desc-1', label: 'Description 1', defaultValue: 'Description with maximum character 160 and maximum line 3' },
      { id: 'feat-title-2', label: 'Title 2', defaultValue: 'Title' },
      { id: 'feat-title-3', label: 'Title 3', defaultValue: 'Title' },
      { id: 'feat-title-4', label: 'Title 4', defaultValue: 'Title' }
    ]
  };
