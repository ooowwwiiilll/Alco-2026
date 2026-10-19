import type { SectionTemplate } from '../../../types';

export const uspSection: SectionTemplate = {
    id: 'usp-section',
    name: '[USP]',
    category: 'CONTENT',
    description: 'Pegadaian Product USP section displaying key product advantages and benefits in 3 feature columns/cards with stacked layer icons.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="usp-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: white; flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="color: #01231B; font-size: 32px; font-family: Geist; font-weight: 600; line-height: 40px; text-align: center;" data-editable="usp-section-title">Keunggulan {Name Product}</div>
        <div style="width: 1296px; max-width: 100%; background: #F8F8F8; border-radius: 24px; padding-top: 48px; padding-bottom: 48px; padding-left: 16px; padding-right: 16px; justify-content: flex-start; align-items: stretch; display: inline-flex; flex-wrap: wrap; box-sizing: border-box;">
            <div style="flex: 1 1 0; min-width: 280px; padding-left: 32px; padding-right: 32px; border-right: 1px solid #E0E0E1; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex; box-sizing: border-box;">
                <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 4L20 8L12 12L4 8Z"/>
                        <path d="M4 12L12 16L20 12"/>
                    </svg>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; color: #01231B; font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="usp-item-title-1">Product’s USP (Max 42 character, Max 2 line)</div>
                    <div style="align-self: stretch; color: #01231B; font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="usp-item-desc-1">Clear and concise USP highlighting the product's main benefits to captivate the audience. (Max 120 character, Max 3 line).</div>
                </div>
            </div>
            <div style="flex: 1 1 0; min-width: 280px; padding-left: 32px; padding-right: 32px; border-right: 1px solid #E0E0E1; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex; box-sizing: border-box;">
                <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 4L20 8L12 12L4 8Z"/>
                        <path d="M4 12L12 16L20 12"/>
                    </svg>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; color: #01231B; font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="usp-item-title-2">Product’s USP (Max 42 character, Max 2 line)</div>
                    <div style="align-self: stretch; color: #01231B; font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="usp-item-desc-2">Clear and concise USP highlighting the product's main benefits to captivate the audience. (Max 120 character, Max 3 line).</div>
                </div>
            </div>
            <div style="flex: 1 1 0; min-width: 280px; padding-left: 32px; padding-right: 32px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex; box-sizing: border-box;">
                <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 4L20 8L12 12L4 8Z"/>
                        <path d="M4 12L12 16L20 12"/>
                    </svg>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; color: #01231B; font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="usp-item-title-3">Product’s USP (Max 42 character, Max 2 line)</div>
                    <div style="align-self: stretch; color: #01231B; font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="usp-item-desc-3">Clear and concise USP highlighting the product's main benefits to captivate the audience. (Max 120 character, Max 3 line).</div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="usp-section-mobile w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 600; line-height: 40px; word-wrap: break-word" data-editable="usp-section-title">Keunggulan {Name Product}</div>
        <div style="align-self: stretch; padding: 32px 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 24px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 32px; display: flex; box-sizing: border-box;">
            <div style="align-self: stretch; padding-bottom: 32px; border-bottom: 1px solid #E0E0E1; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex; box-sizing: border-box;">
                <div style="width: 48px; height: 48px; background: #E6EFED; border-radius: 999px; justify-content: center; align-items: center; display: flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 4L20 8L12 12L4 8Z"/>
                        <path d="M4 12L12 16L20 12"/>
                    </svg>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="usp-item-title-1">Product’s USP (Max 42 character, Max 2 line)</div>
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="usp-item-desc-1">Clear and concise USP highlighting the product's main benefits to captivate the audience. (Max 120 character, Max 3 line).</div>
                </div>
            </div>
            <div style="align-self: stretch; padding-bottom: 32px; border-bottom: 1px solid #E0E0E1; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex; box-sizing: border-box;">
                <div style="width: 48px; height: 48px; background: #E6EFED; border-radius: 999px; justify-content: center; align-items: center; display: flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 4L20 8L12 12L4 8Z"/>
                        <path d="M4 12L12 16L20 12"/>
                    </svg>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="usp-item-title-2">Product’s USP (Max 42 character, Max 2 line)</div>
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="usp-item-desc-2">Clear and concise USP highlighting the product's main benefits to captivate the audience. (Max 120 character, Max 3 line).</div>
                </div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex; box-sizing: border-box;">
                <div style="width: 48px; height: 48px; background: #E6EFED; border-radius: 999px; justify-content: center; align-items: center; display: flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 4L20 8L12 12L4 8Z"/>
                        <path d="M4 12L12 16L20 12"/>
                    </svg>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="usp-item-title-3">Product’s USP (Max 42 character, Max 2 line)</div>
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="usp-item-desc-3">Clear and concise USP highlighting the product's main benefits to captivate the audience. (Max 120 character, Max 3 line).</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'usp-section-title', label: 'Section Title', defaultValue: 'Keunggulan {Name Product}' },
      { id: 'usp-item-title-1', label: 'USP 1 Title', defaultValue: 'Product’s USP (Max 42 character, Max 2 line)' },
      { id: 'usp-item-desc-1', label: 'USP 1 Description', defaultValue: 'Clear and concise USP highlighting the product\'s main benefits to captivate the audience. (Max 120 character, Max 3 line).' },
      { id: 'usp-item-title-2', label: 'USP 2 Title', defaultValue: 'Product’s USP (Max 42 character, Max 2 line)' },
      { id: 'usp-item-desc-2', label: 'USP 2 Description', defaultValue: 'Clear and concise USP highlighting the product\'s main benefits to captivate the audience. (Max 120 character, Max 3 line).' },
      { id: 'usp-item-title-3', label: 'USP 3 Title', defaultValue: 'Product’s USP (Max 42 character, Max 2 line)' },
      { id: 'usp-item-desc-3', label: 'USP 3 Description', defaultValue: 'Clear and concise USP highlighting the product\'s main benefits to captivate the audience. (Max 120 character, Max 3 line).' }
    ]
  };
