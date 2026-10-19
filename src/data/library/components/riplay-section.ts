import type { SectionTemplate } from '../../../types';

export const riplaySection: SectionTemplate = {
    id: 'riplay-section',
    name: 'RIPLAY',
    category: 'CONTENT',
    description: 'Pegadaian RIPLAY section with product document download container and PDF download button.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="riplay-section-desktop w-full overflow-hidden bg-[#EDF8CA] flex justify-center">
    <div style="width: 100%; height: 100%; padding: 72px; background: var(--background-brand-primary-subtle, #EDF8CA); overflow: hidden; justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex; box-sizing: border-box;">
        <div style="flex: 1 1 0; padding: 48px; background: var(--background-brand-primary-subtlest, #F8FCEB); border-radius: 24px; justify-content: flex-start; align-items: center; gap: 24px; display: flex">
            <div style="flex: 1 1 0; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="riplay-title">RIPLAY {Product Name}</div>
            <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: flex">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </div>
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="riplay-btn">Unduh PDF</div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="riplay-section-mobile w-full overflow-hidden bg-[#EDF8CA] flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 48px; padding-bottom: 48px; background: var(--background-brand-primary-subtle, #EDF8CA); flex-direction: column; justify-content: center; align-items: center; gap: 20px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="riplay-title">RIPLAY {Product Name}</div>
        <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
            <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 20px; padding-right: 20px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                </div>
                <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="riplay-btn">Unduh PDF</div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'riplay-title', label: 'Section Title', defaultValue: 'RIPLAY {Product Name}' },
      { id: 'riplay-btn', label: 'Button Text', defaultValue: 'Unduh PDF' }
    ]
  };
