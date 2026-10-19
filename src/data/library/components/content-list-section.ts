import type { SectionTemplate } from '../../../types';

export const contentListSection: SectionTemplate = {
    id: 'content-list-section',
    name: 'CONTENT LIST',
    category: 'CONTENT',
    description: 'Pegadaian CONTENT LIST section with left column title and description, and right column list of checkmark content cards.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="content-list-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 182px; padding-right: 182px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 72px; display: inline-flex; box-sizing: border-box;">
        <div style="flex: 1 1 0; align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="content-list-title">Content Section Max 40 character, 2 Line</div>
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="content-list-desc">Description Max 180 characters and 4 Line Max.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.</div>
        </div>
        <div style="width: 620px; max-width: 100%; flex-direction: column; justify-content: center; align-items: center; gap: 16px; display: inline-flex">
            <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
                <div style="padding: 12px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="content-list-item-1">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
                <div style="padding: 12px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="content-list-item-2">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
                <div style="padding: 12px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="content-list-item-3">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
                <div style="padding: 12px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="content-list-item-4">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
                <div style="padding: 12px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="content-list-item-5">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
                <div style="padding: 12px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="content-list-item-6">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
                <div style="padding: 12px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="content-list-item-7">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
                <div style="padding: 12px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="content-list-item-8">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="content-list-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 48px; padding-bottom: 48px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 28px; font-family: Geist; font-weight: 500; line-height: 34px; word-wrap: break-word" data-editable="content-list-title">Content Section Max 40 character, 2 Line</div>
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="content-list-desc">Description Max 180 characters and 4 Line Max.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.</div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: center; gap: 12px; display: flex">
            <div style="align-self: stretch; padding: 16px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                <div style="padding: 10px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; display: flex">
                    <div data-color="White" style="width: 14px; height: 14px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="content-list-item-1">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 16px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                <div style="padding: 10px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; display: flex">
                    <div data-color="White" style="width: 14px; height: 14px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="content-list-item-2">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 16px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                <div style="padding: 10px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; display: flex">
                    <div data-color="White" style="width: 14px; height: 14px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="content-list-item-3">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 16px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                <div style="padding: 10px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; display: flex">
                    <div data-color="White" style="width: 14px; height: 14px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="content-list-item-4">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 16px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                <div style="padding: 10px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; display: flex">
                    <div data-color="White" style="width: 14px; height: 14px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="content-list-item-5">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 16px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                <div style="padding: 10px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; display: flex">
                    <div data-color="White" style="width: 14px; height: 14px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="content-list-item-6">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 16px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                <div style="padding: 10px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; display: flex">
                    <div data-color="White" style="width: 14px; height: 14px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="content-list-item-7">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; padding: 16px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                <div style="padding: 10px; background: var(--background-brand-secondary-bold, #015743); border-radius: 999px; justify-content: flex-start; align-items: center; display: flex">
                    <div data-color="White" style="width: 14px; height: 14px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="content-list-item-8">Content Text (Max 120 Character) Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'content-list-title', label: 'Section Title', defaultValue: 'Content Section Max 40 character, 2 Line' },
      { id: 'content-list-desc', label: 'Section Description', defaultValue: 'Description Max 180 characters and 4 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
    ]
  };
