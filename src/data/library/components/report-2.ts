import type { SectionTemplate } from '../../../types';

export const report2: SectionTemplate = {
    id: 'report-2',
    name: '[REPORT 2]',
    category: 'CONTENT',
    description: 'Pegadaian [REPORT 2] section with title, view all button, and 6 report document cards with download links.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="report-2-desktop w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 120px; display: inline-flex; box-sizing: border-box;">
        <div style="flex: 1 1 0; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex; flex-wrap: wrap;">
            <div style="width: 324px; min-height: 218px; position: relative">
                <div style="width: 267px; left: 0px; top: 0px; position: absolute; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist, sans-serif; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="report-2-title">{Content Title} Max 45 Char</div>
                <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Right" style="left: 0px; top: 170px; position: absolute; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex; cursor: pointer;">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="report-2-btn">Lihat Semua</div>
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 952px; max-width: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                <div style="align-self: stretch; min-height: 218px; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex; flex-wrap: wrap;">
                    <div style="flex: 1 1 400px; align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: flex-end; gap: 32px; display: flex; box-sizing: border-box;">
                        <img style="width: 132.19px; align-self: stretch; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Report 1" data-editable-image="report-2-img-1" />
                        <div style="flex: 1 1 0; align-self: stretch; padding-top: 12px; padding-bottom: 12px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                            <div style="width: 246px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="report-2-card-title-1">{Card title} Maximum character 120, <br/>3 line limits</div>
                            <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                                <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                    </div>
                                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="report-2-dl-1">Unduh Dokumen</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="flex: 1 1 400px; align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: flex-end; gap: 32px; display: flex; box-sizing: border-box;">
                        <img style="width: 132.19px; align-self: stretch; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Report 2" data-editable-image="report-2-img-2" />
                        <div style="flex: 1 1 0; align-self: stretch; padding-top: 12px; padding-bottom: 12px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                            <div style="width: 246px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="report-2-card-title-2">{Card title} Maximum character 120, <br/>3 line limits</div>
                            <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                                <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                    </div>
                                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="report-2-dl-2">Unduh Dokumen</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; min-height: 218px; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex; flex-wrap: wrap;">
                    <div style="flex: 1 1 400px; align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: flex-end; gap: 32px; display: flex; box-sizing: border-box;">
                        <img style="width: 132.19px; align-self: stretch; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Report 3" data-editable-image="report-2-img-3" />
                        <div style="flex: 1 1 0; align-self: stretch; padding-top: 12px; padding-bottom: 12px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                            <div style="width: 246px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="report-2-card-title-3">{Card title} Maximum character 120, <br/>3 line limits</div>
                            <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                                <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                    </div>
                                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="report-2-dl-3">Unduh Dokumen</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="flex: 1 1 400px; align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: flex-end; gap: 32px; display: flex; box-sizing: border-box;">
                        <img style="width: 132.19px; align-self: stretch; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Report 4" data-editable-image="report-2-img-4" />
                        <div style="flex: 1 1 0; align-self: stretch; padding-top: 12px; padding-bottom: 12px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                            <div style="width: 246px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="report-2-card-title-4">{Card title} Maximum character 120, <br/>3 line limits</div>
                            <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                                <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                    </div>
                                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="report-2-dl-4">Unduh Dokumen</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; min-height: 218px; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex; flex-wrap: wrap;">
                    <div style="flex: 1 1 400px; align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: flex-end; gap: 32px; display: flex; box-sizing: border-box;">
                        <img style="width: 132.19px; align-self: stretch; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Report 5" data-editable-image="report-2-img-5" />
                        <div style="flex: 1 1 0; align-self: stretch; padding-top: 12px; padding-bottom: 12px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                            <div style="width: 246px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="report-2-card-title-5">{Card title} Maximum character 120, <br/>3 line limits</div>
                            <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                                <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                    </div>
                                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="report-2-dl-5">Unduh Dokumen</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="flex: 1 1 400px; align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: flex-end; gap: 32px; display: flex; box-sizing: border-box;">
                        <img style="width: 132.19px; align-self: stretch; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Report 6" data-editable-image="report-2-img-6" />
                        <div style="flex: 1 1 0; align-self: stretch; padding-top: 12px; padding-bottom: 12px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                            <div style="width: 246px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="report-2-card-title-6">{Card title} Maximum character 120, <br/>3 line limits</div>
                            <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                                <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                    </div>
                                    <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="report-2-dl-6">Unduh Dokumen</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="report-2-mobile w-full overflow-hidden bg-[#F8F8F8] flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 48px; padding-bottom: 48px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 120px; display: inline-flex; box-sizing: border-box;">
        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 40px; display: inline-flex">
            <div style="width: 267px; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist, sans-serif; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="m-report-2-title">{Content Title} Max 45 Char</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: flex">
                <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 8px; justify-content: flex-start; align-items: flex-end; gap: 24px; display: inline-flex; box-sizing: border-box;">
                    <img style="width: 70px; height: 98px; border-radius: 4px; object-fit: cover;" src="/background.png" alt="Report Mobile 1" data-editable-image="m-report-2-img-1" />
                    <div style="flex: 1 1 0; align-self: stretch; padding-top: 8px; padding-bottom: 8px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                        <div style="width: 246px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="m-report-2-card-title-1">{Card title} Maximum character 120,  3 line limits</div>
                        <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                            <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                                <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-report-2-dl-1">Unduh Dokumen</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 8px; justify-content: flex-start; align-items: flex-end; gap: 24px; display: inline-flex; box-sizing: border-box;">
                    <img style="width: 70px; height: 98px; border-radius: 4px; object-fit: cover;" src="/background.png" alt="Report Mobile 2" data-editable-image="m-report-2-img-2" />
                    <div style="flex: 1 1 0; align-self: stretch; padding-top: 8px; padding-bottom: 8px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                        <div style="width: 246px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="m-report-2-card-title-2">{Card title} Maximum character 120,  3 line limits</div>
                        <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                            <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                                <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-report-2-dl-2">Unduh Dokumen</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 8px; justify-content: flex-start; align-items: flex-end; gap: 24px; display: inline-flex; box-sizing: border-box;">
                    <img style="width: 70px; height: 98px; border-radius: 4px; object-fit: cover;" src="/background.png" alt="Report Mobile 3" data-editable-image="m-report-2-img-3" />
                    <div style="flex: 1 1 0; align-self: stretch; padding-top: 8px; padding-bottom: 8px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                        <div style="width: 246px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="m-report-2-card-title-3">{Card title} Maximum character 120,  3 line limits</div>
                        <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                            <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                                <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-report-2-dl-3">Unduh Dokumen</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 8px; justify-content: flex-start; align-items: flex-end; gap: 24px; display: inline-flex; box-sizing: border-box;">
                    <img style="width: 70px; height: 98px; border-radius: 4px; object-fit: cover;" src="/background.png" alt="Report Mobile 4" data-editable-image="m-report-2-img-4" />
                    <div style="flex: 1 1 0; align-self: stretch; padding-top: 8px; padding-bottom: 8px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                        <div style="width: 246px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="m-report-2-card-title-4">{Card title} Maximum character 120,  3 line limits</div>
                        <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                            <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                                <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-report-2-dl-4">Unduh Dokumen</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 8px; justify-content: flex-start; align-items: flex-end; gap: 24px; display: inline-flex; box-sizing: border-box;">
                    <img style="width: 70px; height: 98px; border-radius: 4px; object-fit: cover;" src="/background.png" alt="Report Mobile 5" data-editable-image="m-report-2-img-5" />
                    <div style="flex: 1 1 0; align-self: stretch; padding-top: 8px; padding-bottom: 8px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                        <div style="width: 246px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="m-report-2-card-title-5">{Card title} Maximum character 120,  3 line limits</div>
                        <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                            <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                                <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-report-2-dl-5">Unduh Dokumen</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 8px; justify-content: flex-start; align-items: flex-end; gap: 24px; display: inline-flex; box-sizing: border-box;">
                    <img style="width: 70px; height: 98px; border-radius: 4px; object-fit: cover;" src="/background.png" alt="Report Mobile 6" data-editable-image="m-report-2-img-6" />
                    <div style="flex: 1 1 0; align-self: stretch; padding-top: 8px; padding-bottom: 8px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                        <div style="width: 246px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="m-report-2-card-title-6">{Card title} Maximum character 120,  3 line limits</div>
                        <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                            <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                                <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-report-2-dl-6">Unduh Dokumen</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-size="Small" data-state="Default" data-type="Primary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <div data-size="Small" style="height: 36px; min-width: 120px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex; cursor: pointer;">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-report-2-btn">Lihat Semua</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
      { id: 'report-2-title', label: 'Section Title', defaultValue: '{Content Title} Max 45 Char' },
      { id: 'report-2-btn', label: 'Button Text', defaultValue: 'Lihat Semua' },
      { id: 'report-2-card-title-1', label: 'Card 1 Title', defaultValue: '{Card title} Maximum character 120, \n3 line limits' },
      { id: 'report-2-card-title-2', label: 'Card 2 Title', defaultValue: '{Card title} Maximum character 120, \n3 line limits' },
      { id: 'report-2-card-title-3', label: 'Card 3 Title', defaultValue: '{Card title} Maximum character 120, \n3 line limits' },
      { id: 'report-2-card-title-4', label: 'Card 4 Title', defaultValue: '{Card title} Maximum character 120, \n3 line limits' },
      { id: 'report-2-card-title-5', label: 'Card 5 Title', defaultValue: '{Card title} Maximum character 120, \n3 line limits' },
      { id: 'report-2-card-title-6', label: 'Card 6 Title', defaultValue: '{Card title} Maximum character 120, \n3 line limits' }
    ]
  };
