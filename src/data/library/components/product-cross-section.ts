import type { SectionTemplate } from '../../../types';

export const productCrossSection: SectionTemplate = {
    id: 'product-cross-section',
    name: 'PRODUCT CROSS',
    category: 'PRODUCTS',
    description: 'Pegadaian PRODUCT CROSS section with product cards, badges, descriptions, and view all button.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="product-cross-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="product-cross-title">{Product Cross Section} Max 45 Character</div>
        <div style="width: 1296px; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
            <div style="width: 416px; height: 378px; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                <div style="align-self: stretch; height: 184px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                    <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">Text Badge</div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; height: 132px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="product-cross-card-title-1">Product Name.<br/>Max 42 char, 2 line.</div>
                    <div style="align-self: stretch; height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="product-cross-card-desc-1">Product description Max 76 characters and 2 Line Max.</div>
                </div>
            </div>
            <div style="width: 416px; height: 378px; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                <div style="align-self: stretch; height: 184px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                    <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">Text Badge</div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; height: 132px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="product-cross-card-title-2">Product Name.<br/>Max 42 char, 2 line.</div>
                    <div style="align-self: stretch; height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="product-cross-card-desc-2">Product description Max 76 characters and 2 Line Max.</div>
                </div>
            </div>
            <div style="width: 416px; height: 378px; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                <div style="align-self: stretch; height: 184px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                    <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">Text Badge</div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; height: 132px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="product-cross-card-title-3">Product Name.<br/>Max 42 char, 2 line.</div>
                    <div style="align-self: stretch; height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="product-cross-card-desc-3">Product description Max 76 characters and 2 Line Max.</div>
                </div>
            </div>
        </div>
        <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
            <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="product-cross-btn">Lihat Semua</div>
                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                    <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="product-cross-section-mobile w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="product-cross-title">{Product Cross Section} Max 45 Character</div>
        <div style="align-self: stretch; padding: 8px; background: var(--background-surface-primary-default, white); border-radius: 8px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
            <div style="align-self: stretch; height: 168px; padding: 12px; overflow: hidden; border-radius: 4px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                    <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">Text Badge</div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; height: 132px; padding: 4px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 2px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="product-cross-card-title-1">Product Name.<br/>Max 42 char, 2 line.</div>
                <div style="align-self: stretch; height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="product-cross-card-desc-1">Product description Max 76 characters and 2 Line Max.</div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
            <div data-size="Small" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Small" style="min-width: 120px; border-radius: 999px; justify-content: flex-start; align-items: center; gap: 2px; display: flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="product-cross-btn">Lihat Semua</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                    </div>
                </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: flex">
                <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                    <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 4px; height: 8px; left: 6px; top: 4px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                    </div>
                </div>
                <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                    <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 4px; height: 8px; left: 6px; top: 4px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'product-cross-title', label: 'Section Title', defaultValue: '{Product Cross Section} Max 45 Character' },
      { id: 'product-cross-btn', label: 'Button Text', defaultValue: 'Lihat Semua' },
      { id: 'product-cross-card-title-1', label: 'Card Title 1', defaultValue: 'Product Name. Max 42 char, 2 line.' },
      { id: 'product-cross-card-desc-1', label: 'Card Desc 1', defaultValue: 'Product description Max 76 characters and 2 Line Max.' }
    ]
  };
