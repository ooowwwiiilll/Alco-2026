import type { SectionTemplate } from '../../../types';

export const branchLocatorSection: SectionTemplate = {
    id: 'branch-locator-section',
    name: '[BRANCH LOCATOR]',
    category: 'CONTENT',
    description: 'Pegadaian BRANCH LOCATOR section with title, location search filter controls, branch outlet list card items, map/image placeholder, and "Petunjuk Arah" action buttons.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="branch-locator-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 182px; padding-right: 182px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="branch-title">{Title Section} Max 45 Character</div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
            <!-- Search & Filters -->
            <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex; flex-wrap: wrap; gap: 16px;">
                <div style="width: 400px; max-width: 100%; padding-top: 8px; padding-bottom: 8px; padding-left: 24px; padding-right: 8px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 16px; display: flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="branch-search-placeholder">{Search Placeholder}</div>
                    <div style="width: 40px; height: 40px; padding: 8px; background: var(--text-brand-primary, #CCEA68); border-radius: 100px; justify-content: center; align-items: center; gap: 10px; display: flex; cursor: pointer;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
                <div style="justify-content: flex-start; align-items: center; gap: 16px; display: flex; flex-wrap: wrap;">
                    <div style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex; cursor: pointer;">
                        <div style="flex: 1 1 0; text-align: center; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px;" data-editable="branch-filter-province">Pilih Provinsi</div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                    <div style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex; cursor: pointer;">
                        <div style="flex: 1 1 0; text-align: center; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px;" data-editable="branch-filter-city">Pilih Kota</div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>
            </div>
            
            <!-- Main Grid with Map / Image and Outlets List -->
            <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex; flex-wrap: wrap;">
                <!-- Branch Outlets List Column -->
                <div style="flex: 1 1 480px; min-width: 320px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <!-- Branch Card 1 -->
                    <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 28px;" data-editable="branch-card-title-1">{Nama Cabang / Outlet 1}</div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px;" data-editable="branch-card-address-1">{Alamat Lengkap Branch Outlet Pegadaian}</div>
                        </div>
                        <div style="align-self: stretch; flex-direction: column; gap: 8px; display: flex;">
                            <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px;" data-editable="branch-card-hours-1">Senin - Jumat: 08.00 - 15.00 WIB</div>
                            </div>
                            <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px;" data-editable="branch-card-phone-1">(021) 1234567</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; justify-content: flex-end; align-items: center; display: flex">
                            <div style="padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;">
                                <div style="color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 700;" data-editable="branch-btn-directions">Petunjuk Arah</div>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </div>
                        </div>
                    </div>
                    <!-- Branch Card 2 -->
                    <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 28px;" data-editable="branch-card-title-2">{Nama Cabang / Outlet 2}</div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px;" data-editable="branch-card-address-2">{Alamat Lengkap Branch Outlet Pegadaian}</div>
                        </div>
                        <div style="align-self: stretch; flex-direction: column; gap: 8px; display: flex;">
                            <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px;" data-editable="branch-card-hours-2">Senin - Jumat: 08.00 - 15.00 WIB</div>
                            </div>
                            <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px;" data-editable="branch-card-phone-2">(021) 7654321</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; justify-content: flex-end; align-items: center; display: flex">
                            <div style="padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;">
                                <div style="color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 700;" data-editable="branch-btn-directions">Petunjuk Arah</div>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Map / System Image Column -->
                <div style="flex: 1 1 480px; min-width: 320px; height: 420px; border-radius: 16px; overflow: hidden; position: relative;">
                    <img src="/background.png" alt="Branch Map" style="width: 100%; height: 100%; object-fit: cover;" data-editable-image="branch-map-img" />
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="branch-locator-section-mobile w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="branch-title">{Title Section} Max 45 Character</div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <!-- Search & Filters -->
            <div style="align-self: stretch; padding-top: 8px; padding-bottom: 8px; padding-left: 20px; padding-right: 8px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 12px; display: flex">
                <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="branch-search-placeholder">{Search Placeholder}</div>
                <div style="width: 36px; height: 36px; padding: 6px; background: var(--text-brand-primary, #CCEA68); border-radius: 100px; justify-content: center; align-items: center; gap: 10px; display: flex">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
            </div>
            
            <!-- Map / System Image -->
            <div style="align-self: stretch; height: 240px; border-radius: 12px; overflow: hidden;">
                <img src="/background.png" alt="Branch Map" style="width: 100%; height: 100%; object-fit: cover;" data-editable-image="branch-map-img" />
            </div>

            <!-- Outlets List -->
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                <div style="align-self: stretch; padding: 16px; background: var(--background-page-grey, #F8F8F8); border-radius: 12px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 6px; display: flex">
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px;" data-editable="branch-card-title-1">{Nama Cabang / Outlet 1}</div>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px;" data-editable="branch-card-address-1">{Alamat Lengkap Branch Outlet Pegadaian}</div>
                    </div>
                    <div style="align-self: stretch; justify-content: flex-end; align-items: center; display: flex">
                        <div style="padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 6px; display: flex">
                            <div style="color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 700;" data-editable="branch-btn-directions">Petunjuk Arah</div>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'branch-title', label: 'Section Title', defaultValue: '{Title Section} Max 45 Character' },
      { id: 'branch-search-placeholder', label: 'Search Placeholder', defaultValue: '{Search Placeholder}' },
      { id: 'branch-filter-province', label: 'Filter Province', defaultValue: 'Pilih Provinsi' },
      { id: 'branch-filter-city', label: 'Filter City', defaultValue: 'Pilih Kota' },
      { id: 'branch-card-title-1', label: 'Branch Name 1', defaultValue: '{Nama Cabang / Outlet 1}' },
      { id: 'branch-card-address-1', label: 'Branch Address 1', defaultValue: '{Alamat Lengkap Branch Outlet Pegadaian}' },
      { id: 'branch-btn-directions', label: 'Directions Button Text', defaultValue: 'Petunjuk Arah' }
    ]
  };
