import type { SectionTemplate } from '../../../types';

export const productCatalogSection: SectionTemplate = {
    id: 'product-catalog-section',
    name: '[PRODUCT CATALOG SECTION]',
    category: 'CONTENT',
    description: 'Pegadaian PRODUCT CATALOG section with section title, description, features count indicator, carousel navigation buttons, and product cards with text badges.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="product-catalog-section-desktop w-full overflow-hidden bg-[#E6F6EA] flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 160px; padding-bottom: 160px; background: var(--background-brand-Tring!-green--70, #E6F6EA); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex: 1 1 0; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex">
            <div style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: inline-flex; flex-wrap: wrap; gap: 24px;">
                <div style="width: 594px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="pc-title">{Title Section} Max 45 Character</div>
                <div style="width: 416px; max-width: 100%; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="pc-desc">Description Max 180 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 40px; display: flex; margin-top: 40px;">
                <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                    <div style="justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="pc-feature-count">X Fitur Pilihan</div>
                    <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                        <div data-shape="Rectangle" data-size="Small" data-state="Disable" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: not-allowed;">
                            <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-disabled, #E0E0E1); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                <div data-color="Disable" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B1B1B3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                            <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex; width: 100%;">
                    <!-- Product Card 1 -->
                    <div style="flex: 1 1 0; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex; box-sizing: border-box;">
                        <div style="align-self: stretch; height: 195px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url('/background.png'); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;" data-editable-image="pc-img-1">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="pc-badge-1">Text Badge</div>
                                </div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 132px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="pc-title-1">Product Name.<br/>Max 42 char, 2 line.</div>
                            <div style="align-self: stretch; height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="pc-desc-1">Product description Max 76 characters and 2 Line Max.</div>
                        </div>
                    </div>
                    <!-- Product Card 2 -->
                    <div style="flex: 1 1 0; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex; box-sizing: border-box;">
                        <div style="align-self: stretch; height: 195px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url('/background.png'); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;" data-editable-image="pc-img-2">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="pc-badge-2">Text Badge</div>
                                </div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 132px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="pc-title-2">Product Name.<br/>Max 42 char, 2 line.</div>
                            <div style="align-self: stretch; height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="pc-desc-2">Product description Max 76 characters and 2 Line Max.</div>
                        </div>
                    </div>
                    <!-- Product Card 3 -->
                    <div style="flex: 1 1 0; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex; box-sizing: border-box;">
                        <div style="align-self: stretch; height: 195px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url('/background.png'); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;" data-editable-image="pc-img-3">
                            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="pc-badge-3">Text Badge</div>
                                </div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 132px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="pc-title-3">Product Name.<br/>Max 42 char, 2 line.</div>
                            <div style="align-self: stretch; height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="pc-desc-3">Product description Max 76 characters and 2 Line Max.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="product-catalog-section-mobile w-full overflow-hidden bg-[#E6F6EA] flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-brand-Tring!-green--70, #E6F6EA); flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="m-pc-title">{Title Section} Max 45 Character</div>
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="m-pc-desc">Description Max 180 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>
        <div style="align-self: stretch; border-radius: 24px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 24px; display: flex; margin-top: 24px;">
            <div style="justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="m-pc-feature-count">X Fitur Pilihan</div>
            <div style="align-self: stretch; padding: 8px; background: var(--background-surface-primary-default, white); border-radius: 8px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex; box-sizing: border-box;">
                <div style="align-self: stretch; height: 168px; padding: 12px; overflow: hidden; border-radius: 4px; background-image: url('/background.png'); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;" data-editable-image="m-pc-img">
                    <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-pc-badge">Text Badge</div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; height: 132px; padding: 4px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 2px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-pc-card-title">Product Name.<br/>Max 42 char, 2 line.</div>
                    <div style="align-self: stretch; height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-pc-card-desc">Product description Max 76 characters and 2 Line Max.</div>
                </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                <div data-shape="Rectangle" data-size="Small" data-state="Disable" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: not-allowed;">
                    <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-disabled, #E0E0E1); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                        <div data-color="Disable" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B1B1B3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
                <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'pc-title', label: 'Section Title', defaultValue: '{Title Section} Max 45 Character' },
      { id: 'pc-desc', label: 'Section Description', defaultValue: 'Description Max 180 characters and 3 Line Max.\nLorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { id: 'pc-feature-count', label: 'Feature Count', defaultValue: 'X Fitur Pilihan' },
      { id: 'pc-badge-1', label: 'Card 1 Badge', defaultValue: 'Text Badge' },
      { id: 'pc-title-1', label: 'Card 1 Title', defaultValue: 'Product Name.\nMax 42 char, 2 line.' },
      { id: 'pc-desc-1', label: 'Card 1 Description', defaultValue: 'Product description Max 76 characters and 2 Line Max.' },
      { id: 'pc-badge-2', label: 'Card 2 Badge', defaultValue: 'Text Badge' },
      { id: 'pc-title-2', label: 'Card 2 Title', defaultValue: 'Product Name.\nMax 42 char, 2 line.' },
      { id: 'pc-desc-2', label: 'Card 2 Description', defaultValue: 'Product description Max 76 characters and 2 Line Max.' },
      { id: 'pc-badge-3', label: 'Card 3 Badge', defaultValue: 'Text Badge' },
      { id: 'pc-title-3', label: 'Card 3 Title', defaultValue: 'Product Name.\nMax 42 char, 2 line.' },
      { id: 'pc-desc-3', label: 'Card 3 Description', defaultValue: 'Product description Max 76 characters and 2 Line Max.' }
    ]
  };
