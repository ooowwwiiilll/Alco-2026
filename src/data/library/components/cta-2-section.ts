import type { SectionTemplate } from '../../../types';

export const cta2Section: SectionTemplate = {
    id: 'cta-2-section',
    name: 'CTA 2',
    category: 'CONTENT',
    description: 'Pegadaian CTA 2 section with hero image and directional & locator action buttons.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="cta-2-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); overflow: hidden; justify-content: center; align-items: center; gap: 20px; display: inline-flex; box-sizing: border-box;">
        <div style="width: 528px; height: 454px; overflow: hidden; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
            <img style="align-self: stretch; height: 454px; object-fit: cover;" src="/background.png" />
        </div>
        <div style="flex: 1 1 0; align-self: stretch; padding-left: 48px; padding-right: 48px; padding-top: 24px; padding-bottom: 24px; border-radius: 16px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: flex">
                <div data-size="Large" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                    <div data-size="Large" style="height: 40px; min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="cta2-badge">Text Badge</div>
                    </div>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="cta2-title">Title Content Max 64 character,  2 Line Max</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="cta2-desc">Description Max 180 characters and 2 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg </div>
                </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
                <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="cta2-btn-direction">Tunjukkan Arah</div>
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
                <div data-size="Large" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="min-width: 160px; border-radius: 999px; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="cta2-btn-location">Cari Lokasi Pegadaian</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="cta-2-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 16px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; height: 304.39px; overflow: hidden; border-radius: 16px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <img style="align-self: stretch; height: 304.39px; object-fit: cover;" src="/background.png" />
        </div>
        <div style="align-self: stretch; padding-top: 20px; padding-bottom: 20px; border-radius: 8px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: flex">
                <div data-size="Large" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                    <div data-size="Large" style="height: 40px; min-width: 100px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="cta2-badge">Text Badge</div>
                    </div>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="cta2-title">Title Content Max 64 character, 2 Line Max</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="cta2-desc">Description Max 180 characters and 3 Line Max.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.</div>
                </div>
            </div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex">
                <div data-size="Small" data-state="Default" data-type="Primary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Small" style="height: 36px; min-width: 120px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="cta2-btn-direction">Tunjukkan Arah</div>
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
                <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="cta2-btn-location">Cari Lokasi Pegadaian</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'cta2-badge', label: 'Badge Text', defaultValue: 'Text Badge' },
      { id: 'cta2-title', label: 'Section Title', defaultValue: 'Title Content Max 64 character, 2 Line Max' },
      { id: 'cta2-desc', label: 'Section Description', defaultValue: 'Description Max 180 characters and 2 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { id: 'cta2-btn-direction', label: 'Direction Button Text', defaultValue: 'Tunjukkan Arah' },
      { id: 'cta2-btn-location', label: 'Location Button Text', defaultValue: 'Cari Lokasi Pegadaian' }
    ]
  };
