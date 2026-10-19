import type { SectionTemplate } from '../../../types';

export const reportSection: SectionTemplate = {
    id: 'report-section',
    name: 'REPORT',
    category: 'CONTENT',
    description: 'Pegadaian REPORT section with main title, primary button, and report document cards with download links.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="report-section-desktop w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 120px; display: inline-flex; box-sizing: border-box;">
        <div style="flex: 1 1 0; justify-content: flex-start; align-items: flex-end; gap: 20px; display: flex">
            <div style="width: 324px; height: 218px; position: relative">
                <div style="width: 267px; left: 0px; top: 0px; position: absolute; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="report-main-title">Laporan Keberlanjutan</div>
                <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Right" style="left: 0px; top: 170px; position: absolute; justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="report-btn">Text Button</div>
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div style="flex: 1 1 0; align-self: stretch; justify-content: flex-start; align-items: center; gap: 20px; display: flex">
                <div style="flex: 1 1 0; align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: flex-end; gap: 32px; display: flex">
                    <img style="width: 132.19px; height: 186px; border-radius: 8px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Report Cover 1" data-editable="report-card1-img" />
                    <div style="flex: 1 1 0; align-self: stretch; padding-top: 12px; padding-bottom: 12px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                        <div style="width: 246px; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="report-card1-title">Inovasi Inklusif, Dampak yang Berkelanjutan</div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; text-decoration: underline; line-height: 20px; word-wrap: break-word" data-editable="report-card1-link">Unduh Dokumen</div>
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="flex: 1 1 0; align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: flex-end; gap: 32px; display: flex">
                    <img style="width: 132.19px; height: 186px; border-radius: 8px; border: 0.82px rgba(203, 203, 205, 0.40) solid; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Report Cover 2" data-editable="report-card2-img" />
                    <div style="flex: 1 1 0; align-self: stretch; padding-top: 12px; padding-bottom: 12px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                        <div style="width: 246px; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="report-card2-title">Keuangan Terintegrasi dan Ekosistem Emas untuk Pembangunan Berkelanjutan</div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; text-decoration: underline; line-height: 20px; word-wrap: break-word" data-editable="report-card2-link">Unduh Dokumen</div>
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="report-section-mobile w-full overflow-hidden bg-[#F8F8F8] flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 48px; padding-bottom: 48px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 120px; display: inline-flex; box-sizing: border-box;">
        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 48px; display: inline-flex">
            <div style="width: 267px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="report-main-title">Laporan Keberlanjutan</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; display: flex">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: flex-end; gap: 32px; display: inline-flex">
                    <img style="width: 70px; height: 98px; border-radius: 8px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Report Cover 1" data-editable="report-card1-img" />
                    <div style="flex: 1 1 0; align-self: stretch; padding-top: 12px; padding-bottom: 12px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="report-card1-title">Inovasi Inklusif, Dampak yang Berkelanjutan</div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; text-decoration: underline; line-height: 20px; word-wrap: break-word" data-editable="report-card1-link">Unduh Dokumen</div>
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: flex-end; gap: 32px; display: inline-flex">
                    <img style="width: 70px; height: 98px; border-radius: 8px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Report Cover 2" data-editable="report-card2-img" />
                    <div style="flex: 1 1 0; align-self: stretch; padding-top: 12px; padding-bottom: 12px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="report-card2-title">Inovasi Inklusif, Dampak yang Berkelanjutan</div>
                        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; text-decoration: underline; line-height: 20px; word-wrap: break-word" data-editable="report-card2-link">Unduh Dokumen</div>
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-size="Small" data-state="Default" data-type="Primary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                <div data-size="Small" style="height: 36px; min-width: 120px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="report-btn">Text Button</div>
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
</div>`,
    editableFields: [
      { id: 'report-main-title', label: 'Main Title', defaultValue: 'Laporan Keberlanjutan' },
      { id: 'report-btn', label: 'Button Text', defaultValue: 'Text Button' },
      { id: 'report-card1-img', label: 'Card 1 Cover', defaultValue: '/background.png', type: 'image' },
      { id: 'report-card1-title', label: 'Card 1 Title', defaultValue: 'Inovasi Inklusif, Dampak yang Berkelanjutan' },
      { id: 'report-card1-link', label: 'Card 1 Link Text', defaultValue: 'Unduh Dokumen' },
      { id: 'report-card2-img', label: 'Card 2 Cover', defaultValue: '/background.png', type: 'image' },
      { id: 'report-card2-title', label: 'Card 2 Title', defaultValue: 'Keuangan Terintegrasi dan Ekosistem Emas untuk Pembangunan Berkelanjutan' },
      { id: 'report-card2-link', label: 'Card 2 Link Text', defaultValue: 'Unduh Dokumen' }
    ]
  };
