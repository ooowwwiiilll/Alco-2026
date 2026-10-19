import type { SectionTemplate } from '../../../types';

export const listCard: SectionTemplate = {
    id: 'list-card',
    name: '[LIST CARD]',
    category: 'CONTENT',
    description: 'Pegadaian [LIST CARD] section with section title, search bar, filter buttons, and list card items.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="list-card-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist, sans-serif; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="list-card-title">{List Section Title} Max. 45 Char</div>
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex; flex-wrap: wrap; gap: 16px;">
            <div style="width: 400px; max-width: 100%; padding-top: 8px; padding-bottom: 8px; padding-left: 24px; padding-right: 8px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 16px; display: flex">
                <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="list-card-search-ph">{Search Placeholder}</div>
                <div style="width: 40px; height: 40px; padding: 8px; background: var(--text-brand-primary, #CCEA68); border-radius: 100px; justify-content: center; align-items: center; gap: 10px; display: flex; cursor: pointer;">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 16px; display: flex; flex-wrap: wrap;">
                <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="list-card-filter-1">{Filter Label}</div>
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
                <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="list-card-filter-2">{Filter Label}</div>
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex; flex-wrap: wrap; align-content: flex-start">
            <div style="width: 636px; max-width: 100%; padding: 12px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 24px; display: flex; box-sizing: border-box;">
                <img style="width: 116px; height: 150px; position: relative; border-radius: 12px; object-fit: cover;" src="/background.png" alt="List Item 1" data-editable-image="list-card-img-1" />
                <div style="flex: 1 1 0; min-height: 140px; padding: 8px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="list-card-item-title-1">{Card title} Maximum character 120, <br/>3 line limits<br/></div>
                    </div>
                    <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                        <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                            <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="list-card-dl-1">Unduh Dokumen</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 636px; max-width: 100%; padding: 12px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 24px; display: flex; box-sizing: border-box;">
                <img style="width: 116px; height: 150px; position: relative; border-radius: 12px; object-fit: cover;" src="/background.png" alt="List Item 2" data-editable-image="list-card-img-2" />
                <div style="flex: 1 1 0; min-height: 140px; padding: 8px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="list-card-item-title-2">{Card title} Maximum character 120, <br/>3 line limits<br/></div>
                    </div>
                    <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                        <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                            <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="list-card-dl-2">Unduh Dokumen</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 636px; max-width: 100%; padding: 12px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 24px; display: flex; box-sizing: border-box;">
                <img style="width: 116px; height: 150px; position: relative; border-radius: 12px; object-fit: cover;" src="/background.png" alt="List Item 3" data-editable-image="list-card-img-3" />
                <div style="flex: 1 1 0; min-height: 140px; padding: 8px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="list-card-item-title-3">{Card title} Maximum character 120, <br/>3 line limits<br/></div>
                    </div>
                    <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                        <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                            <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="list-card-dl-3">Unduh Dokumen</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 636px; max-width: 100%; padding: 12px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 24px; display: flex; box-sizing: border-box;">
                <img style="width: 116px; height: 150px; position: relative; border-radius: 12px; object-fit: cover;" src="/background.png" alt="List Item 4" data-editable-image="list-card-img-4" />
                <div style="flex: 1 1 0; min-height: 140px; padding: 8px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="list-card-item-title-4">{Card title} Maximum character 120, <br/>3 line limits<br/></div>
                    </div>
                    <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                        <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                            <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="list-card-dl-4">Unduh Dokumen</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 636px; max-width: 100%; padding: 12px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 24px; display: flex; box-sizing: border-box;">
                <img style="width: 116px; height: 150px; position: relative; border-radius: 12px; object-fit: cover;" src="/background.png" alt="List Item 5" data-editable-image="list-card-img-5" />
                <div style="flex: 1 1 0; min-height: 140px; padding: 8px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="list-card-item-title-5">{Card title} Maximum character 120, <br/>3 line limits<br/></div>
                    </div>
                    <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                        <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                            <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="list-card-dl-5">Unduh Dokumen</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 636px; max-width: 100%; padding: 12px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 24px; display: flex; box-sizing: border-box;">
                <img style="width: 116px; height: 150px; position: relative; border-radius: 12px; object-fit: cover;" src="/background.png" alt="List Item 6" data-editable-image="list-card-img-6" />
                <div style="flex: 1 1 0; min-height: 140px; padding: 8px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="list-card-item-title-6">{Card title} Maximum character 120, <br/>3 line limits<br/></div>
                    </div>
                    <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                        <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                            <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="list-card-dl-6">Unduh Dokumen</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="list-card-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist, sans-serif; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="m-list-card-title">{List Section Title} Max. 45 Char</div>
        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
            <div style="flex: 1 1 0; padding-top: 4px; padding-bottom: 4px; padding-left: 20px; padding-right: 4px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 12px; display: flex">
                <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-list-card-search-ph">{Search Placeholder}</div>
                <div style="width: 40px; height: 40px; padding: 8px; background: var(--text-brand-primary, #CCEA68); border-radius: 100px; justify-content: center; align-items: center; gap: 10px; display: flex; cursor: pointer;">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </div>
            <div data-shape="Rectangle" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                <div data-size="Large" style="height: 48px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--border-neutral-default, #CBCBCD) solid; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="4" y1="21" x2="4" y2="14"></line>
                            <line x1="4" y1="10" x2="4" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12" y2="3"></line>
                            <line x1="20" y1="21" x2="20" y2="16"></line>
                            <line x1="20" y1="12" x2="20" y2="3"></line>
                            <line x1="1" y1="14" x2="7" y2="14"></line>
                            <line x1="9" y1="8" x2="15" y2="8"></line>
                            <line x1="17" y1="16" x2="23" y2="16"></line>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
            <div style="align-self: stretch; padding: 8px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex; box-sizing: border-box;">
                <img style="width: 116px; height: 150px; position: relative; border-radius: 8px; object-fit: cover;" src="/background.png" alt="List Mobile Item 1" data-editable-image="m-list-card-img-1" />
                <div style="flex: 1 1 0; min-height: 140px; padding: 4px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; display: inline-flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="m-list-card-item-title-1">{Card title} Maximum character 120, <br/>3 line limits<br/></div>
                    </div>
                    <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                        <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                            <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-list-card-dl-1">Unduh Dokumen</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; padding: 8px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex; box-sizing: border-box;">
                <img style="width: 116px; height: 150px; position: relative; border-radius: 8px; object-fit: cover;" src="/background.png" alt="List Mobile Item 2" data-editable-image="m-list-card-img-2" />
                <div style="flex: 1 1 0; min-height: 140px; padding: 4px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; display: inline-flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="m-list-card-item-title-2">{Card title} Maximum character 120, <br/>3 line limits<br/></div>
                    </div>
                    <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                        <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                            <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-list-card-dl-2">Unduh Dokumen</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; padding: 8px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex; box-sizing: border-box;">
                <img style="width: 116px; height: 150px; position: relative; border-radius: 8px; object-fit: cover;" src="/background.png" alt="List Mobile Item 3" data-editable-image="m-list-card-img-3" />
                <div style="flex: 1 1 0; min-height: 140px; padding: 4px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; display: inline-flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="m-list-card-item-title-3">{Card title} Maximum character 120, <br/>3 line limits<br/></div>
                    </div>
                    <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
                        <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                            <div style="flex: 1 1 0; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-list-card-dl-3">Unduh Dokumen</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-size="Large" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: center; align-items: center; display: inline-flex; cursor: pointer;">
            <div data-size="Large" style="min-width: 160px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="m-list-card-more">Lihat Lebih Banyak</div>
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
</div>`,
    editableFields: [
      { id: 'list-card-title', label: 'Section Title', defaultValue: '{List Section Title} Max. 45 Char' },
      { id: 'list-card-search-ph', label: 'Search Placeholder', defaultValue: '{Search Placeholder}' },
      { id: 'list-card-filter-1', label: 'Filter Label 1', defaultValue: '{Filter Label}' },
      { id: 'list-card-filter-2', label: 'Filter Label 2', defaultValue: '{Filter Label}' },
      { id: 'list-card-item-title-1', label: 'Item 1 Title', defaultValue: '{Card title} Maximum character 120, \n3 line limits' },
      { id: 'list-card-item-title-2', label: 'Item 2 Title', defaultValue: '{Card title} Maximum character 120, \n3 line limits' },
      { id: 'list-card-item-title-3', label: 'Item 3 Title', defaultValue: '{Card title} Maximum character 120, \n3 line limits' },
      { id: 'list-card-item-title-4', label: 'Item 4 Title', defaultValue: '{Card title} Maximum character 120, \n3 line limits' },
      { id: 'list-card-item-title-5', label: 'Item 5 Title', defaultValue: '{Card title} Maximum character 120, \n3 line limits' },
      { id: 'list-card-item-title-6', label: 'Item 6 Title', defaultValue: '{Card title} Maximum character 120, \n3 line limits' }
    ]
  };
