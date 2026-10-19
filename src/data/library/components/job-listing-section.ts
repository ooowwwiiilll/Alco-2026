import type { SectionTemplate } from '../../../types';

export const jobListingSection: SectionTemplate = {
    id: 'job-listing-section',
    name: 'JOB LISTING',
    category: 'CONTENT',
    description: 'Pegadaian JOB LISTING section with search bar, filter dropdowns (Departemen, Lokasi, Program), job count indicator, job card list, and load more button.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="job-listing-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 182px; padding-right: 182px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; justify-content: center; align-items: center; display: inline-flex">
            <div style="text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="job-section-title">{Job Section Title} Max. 45 Char</div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
            <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex; flex-wrap: wrap; gap: 16px;">
                <div style="width: 400px; max-width: 100%; padding-top: 8px; padding-bottom: 8px; padding-left: 24px; padding-right: 8px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 16px; display: flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-search-placeholder">{Search Placeholder}</div>
                    <div style="width: 40px; height: 40px; padding: 8px; background: var(--text-brand-primary, #CCEA68); border-radius: 100px; justify-content: center; align-items: center; gap: 10px; display: flex; cursor: pointer;">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                    </div>
                </div>
                <div style="justify-content: flex-start; align-items: center; gap: 16px; display: flex; flex-wrap: wrap;">
                    <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="job-filter-1">Departemen</div>
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="job-filter-2">Lokasi</div>
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="job-filter-3">Program</div>
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-count-text">Menampilkan XXX hasil</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="job-card1-dept">Departemen</div>
                                </div>
                            </div>
                        </div>
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="job-card1-title">{Job Title} Max 60 characters. Max 2 line</div>
                    </div>
                    <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 40px; display: flex">
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card1-location">Lokasi</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card1-program">Program</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card1-type">Employment Type</div>
                            </div>
                        </div>
                        <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                            <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="job-card2-dept">Departemen</div>
                                </div>
                            </div>
                        </div>
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="job-card2-title">{Job Title} Max 60 characters. Max 2 line</div>
                    </div>
                    <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 40px; display: flex">
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card2-location">Lokasi</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card2-program">Program</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card2-type">Employment Type</div>
                            </div>
                        </div>
                        <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                            <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="job-card3-dept">Departemen</div>
                                </div>
                            </div>
                        </div>
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="job-card3-title">{Job Title} Max 60 characters. Max 2 line</div>
                    </div>
                    <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 40px; display: flex">
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card3-location">Lokasi</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card3-program">Program</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card3-type">Employment Type</div>
                            </div>
                        </div>
                        <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                            <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="job-card4-dept">Departemen</div>
                                </div>
                            </div>
                        </div>
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="job-card4-title">{Job Title} Max 60 characters. Max 2 line</div>
                    </div>
                    <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 40px; display: flex">
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card4-location">Lokasi</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card4-program">Program</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card4-type">Employment Type</div>
                            </div>
                        </div>
                        <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                            <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="job-card5-dept">Departemen</div>
                                </div>
                            </div>
                        </div>
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="job-card5-title">{Job Title} Max 60 characters. Max 2 line</div>
                    </div>
                    <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 40px; display: flex">
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card5-location">Lokasi</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card5-program">Program</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card5-type">Employment Type</div>
                            </div>
                        </div>
                        <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                            <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Text Only" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
            <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="job-load-more">Muat Lebih Banyak</div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="job-listing-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; justify-content: center; align-items: center; display: inline-flex">
            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="job-section-title">{Job Section Title} Max. 45 Char</div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                <div style="flex: 1 1 0; padding-top: 4px; padding-bottom: 4px; padding-left: 20px; padding-right: 4px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 12px; display: flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="job-search-placeholder">{Search Placeholder}</div>
                    <div style="width: 40px; height: 40px; padding: 8px; background: var(--text-brand-primary, #CCEA68); border-radius: 100px; justify-content: center; align-items: center; gap: 10px; display: flex; cursor: pointer;">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                    </div>
                </div>
                <div data-shape="Rectangle" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--border-neutral-default, #CBCBCD) solid; justify-content: center; align-items: center; gap: 2px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line>
                                <line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line>
                                <line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="job-count-text">Menampilkan XXX hasil</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                <!-- Card 1 -->
                <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="job-card1-dept">Departemen</div>
                                </div>
                            </div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 500; line-height: 32px; word-wrap: break-word" data-editable="job-card1-title">{Job Title} Max 60 characters. Max 2 line</div>
                    </div>
                    <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex">
                        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card1-location">Lokasi</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card1-program">Program</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card1-type">Employment Type</div>
                            </div>
                        </div>
                        <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                            <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 2 -->
                <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="job-card2-dept">Departemen</div>
                                </div>
                            </div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 500; line-height: 32px; word-wrap: break-word" data-editable="job-card2-title">{Job Title} Max 60 characters. Max 2 line</div>
                    </div>
                    <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex">
                        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card2-location">Lokasi</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card2-program">Program</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card2-type">Employment Type</div>
                            </div>
                        </div>
                        <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                            <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 3 -->
                <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="job-card3-dept">Departemen</div>
                                </div>
                            </div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 500; line-height: 32px; word-wrap: break-word" data-editable="job-card3-title">{Job Title} Max 60 characters. Max 2 line</div>
                    </div>
                    <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex">
                        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card3-location">Lokasi</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card3-program">Program</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card3-type">Employment Type</div>
                            </div>
                        </div>
                        <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                            <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 4 -->
                <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="job-card4-dept">Departemen</div>
                                </div>
                            </div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 500; line-height: 32px; word-wrap: break-word" data-editable="job-card4-title">{Job Title} Max 60 characters. Max 2 line</div>
                    </div>
                    <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex">
                        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card4-location">Lokasi</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card4-program">Program</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card4-type">Employment Type</div>
                            </div>
                        </div>
                        <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                            <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 5 -->
                <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="job-card5-dept">Departemen</div>
                                </div>
                            </div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 500; line-height: 32px; word-wrap: break-word" data-editable="job-card5-title">{Job Title} Max 60 characters. Max 2 line</div>
                    </div>
                    <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex">
                        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card5-location">Lokasi</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card5-program">Program</div>
                            </div>
                            <div style="border-radius: 100px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
                                <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Inter; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="job-card5-type">Employment Type</div>
                            </div>
                        </div>
                        <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                            <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-size="Large" data-state="Default" data-type="Outline" data-variant="Text Only" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
            <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 20px; padding-right: 20px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 2px; display: flex">
                <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="job-load-more">Muat Lebih Banyak</div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'job-section-title', label: 'Section Title', defaultValue: '{Job Section Title} Max. 45 Char' },
      { id: 'job-search-placeholder', label: 'Search Placeholder', defaultValue: '{Search Placeholder}' },
      { id: 'job-filter-1', label: 'Filter 1', defaultValue: 'Departemen' },
      { id: 'job-filter-2', label: 'Filter 2', defaultValue: 'Lokasi' },
      { id: 'job-filter-3', label: 'Filter 3', defaultValue: 'Program' },
      { id: 'job-count-text', label: 'Results Count', defaultValue: 'Menampilkan XXX hasil' },
      { id: 'job-card1-title', label: 'Job 1 Title', defaultValue: '{Job Title} Max 60 characters. Max 2 line' },
      { id: 'job-card1-dept', label: 'Job 1 Department', defaultValue: 'Departemen' },
      { id: 'job-card1-location', label: 'Job 1 Location', defaultValue: 'Lokasi' },
      { id: 'job-card1-program', label: 'Job 1 Program', defaultValue: 'Program' },
      { id: 'job-card1-type', label: 'Job 1 Employment Type', defaultValue: 'Employment Type' },
      { id: 'job-load-more', label: 'Load More Text', defaultValue: 'Muat Lebih Banyak' }
    ]
  };
