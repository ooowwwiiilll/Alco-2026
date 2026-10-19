import type { SectionTemplate } from '../../../types';

export const ctaSection: SectionTemplate = {
    id: 'cta-section',
    name: 'CTA SECTION',
    category: 'CONTENT',
    description: 'Pegadaian CTA section with newsletter subscribe form card and contact & branch locator actions.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="cta-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); overflow: hidden; justify-content: center; align-items: center; gap: 20px; display: inline-flex; box-sizing: border-box;">
        <div style="width: 528px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 24px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
            <div style="align-self: stretch; padding: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="cta-form-text">Isi data Anda di bawah untuk dapat kabar terbaru newsletter, promo, event, dan produk secara langsung.</div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; display: inline-flex">
                        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="cta-input-label-1">Label</div>
                            <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="cta-input-ph-1">Input Text</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; display: inline-flex">
                        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="cta-input-label-2">Label</div>
                            <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="cta-input-ph-2">Input Text</div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                    <div style="width: 24px; height: 24px; border-radius: 8px; border: 2px var(--border-neutral-default, #CBCBCD) solid"></div>
                    <div><span style="color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="cta-terms-prefix">Saya setuju dengan </span><span style="color: var(--text-brand-secondary, #015743); font-size: 16px; font-family: Geist; font-weight: 600; text-decoration: underline; line-height: 24px; word-wrap: break-word" data-editable="cta-terms-link">Syarat dan Ketentuan</span><span style="color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="cta-terms-suffix"> yang berlaku</span></div>
                </div>
            </div>
            <div style="align-self: stretch; padding: 24px; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="width: 160px; height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="cta-primary-btn">Primary CTA</div>
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
        <div style="flex: 1 1 0; align-self: stretch; padding-left: 48px; padding-right: 48px; padding-top: 24px; padding-bottom: 24px; border-radius: 16px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: flex">
                <div data-size="Large" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                    <div data-size="Large" style="height: 40px; min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="cta-badge">Text Badge</div>
                    </div>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="cta-title">Title Content Max 64 character, 2 Line Max</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="cta-desc">Description Max 180 characters and 3 Line Max.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.</div>
                </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex; flex-wrap: wrap;">
                <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="cta-contact-btn">Hubungi Kami</div>
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
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="cta-location-btn">Cari Lokasi Pegadaian</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="cta-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 16px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
            <div style="align-self: stretch; padding: 20px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 500; line-height: 22px; word-wrap: break-word" data-editable="cta-mobile-form-title">Title max 45 character</div>
                <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="cta-form-text">Isi data Anda di bawah untuk dapat kabar terbaru newsletter, promo, event, dan produk secara langsung.</div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 8px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: flex-start; align-items: center; display: inline-flex">
                        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 14px; word-wrap: break-word" data-editable="cta-input-label-1">Label</div>
                            <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="cta-input-ph-1">Input Text</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 8px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: flex-start; align-items: center; display: inline-flex">
                        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 14px; word-wrap: break-word" data-editable="cta-input-label-2">Label</div>
                            <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="cta-input-ph-2">Input Text</div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                    <div style="width: 16px; height: 16px; border-radius: 4px; border: 1.50px var(--border-neutral-default, #CBCBCD) solid"></div>
                    <div style="flex: 1 1 0;"><span style="color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 14px; word-wrap: break-word" data-editable="cta-terms-prefix">Saya menyetujui </span><span style="color: var(--text-brand-secondary, #015743); font-size: 10px; font-family: Geist; font-weight: 400; text-decoration: underline; line-height: 14px; word-wrap: break-word" data-editable="cta-terms-link">Syarat & Ketentuan</span><span style="color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 14px; word-wrap: break-word" data-editable="cta-terms-suffix"> dan Kebijakan Privasi yang berlaku.</span></div>
                </div>
            </div>
            <div style="align-self: stretch; padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 20px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Right" style="align-self: stretch; width: 100%; justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="width: 100%; height: 36px; padding-left: 14px; padding-right: 14px; padding-top: 6px; padding-bottom: 6px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 16px; word-wrap: break-word" data-editable="cta-form-btn">Daftar Newsletter</div>
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
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <div data-size="Small" style="height: 28px; min-width: 70px; padding-left: 10px; padding-right: 10px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-brand-secondary-subtle, #E6EFED); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 10px; font-family: Geist; font-weight: 500; line-height: 14px; word-wrap: break-word" data-editable="cta-badge">Tag Badge</div>
                </div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 12px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="cta-title">Title Content Max 64 character, 2 Line Max</div>
                <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="cta-desc">At paragraph length, 120-140 characters is a good length to aim for. Body copy includes a summary of the page's content.</div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="cta-contact-btn">Hubungi Kami</div>
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
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="cta-location-btn">Cari Lokasi Pegadaian</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'cta-badge', label: 'Badge Text', defaultValue: 'Text Badge' },
      { id: 'cta-title', label: 'Section Title', defaultValue: 'Title Content Max 64 character, 2 Line Max' },
      { id: 'cta-desc', label: 'Section Description', defaultValue: 'Description Max 180 characters and 3 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { id: 'cta-contact-btn', label: 'Contact Button Text', defaultValue: 'Hubungi Kami' },
      { id: 'cta-location-btn', label: 'Location Button Text', defaultValue: 'Cari Lokasi Pegadaian' },
      { id: 'cta-form-text', label: 'Form Heading Text', defaultValue: 'Isi data Anda di bawah untuk dapat kabar terbaru newsletter, promo, event, dan produk secara langsung.' },
      { id: 'cta-primary-btn', label: 'Form Submit Button Text', defaultValue: 'Primary CTA' }
    ]
  };
