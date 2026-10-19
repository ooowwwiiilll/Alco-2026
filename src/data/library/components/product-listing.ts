import type { SectionTemplate } from '../../../types';

export const productListing: SectionTemplate = {
    id: 'product-listing',
    name: 'PRODUCT LISTING',
    category: 'PRODUCTS',
    description: 'Pegadaian Product Listing with category selection, 4-product card grid using /background.png, and responsive desktop/mobile layouts.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="product-listing-desktop w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 1440px; min-height: 800px; padding-left: 72px; padding-right: 72px; position: relative; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-end; align-items: flex-start; gap: 48px; display: inline-flex; box-sizing: border-box;">
      
      <!-- Left: Headline Category & Pemilihan Category (440px) -->
      <div style="width: 440px; padding-top: 120px; padding-bottom: 120px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: inline-flex;">
        <div style="color: var(--text-neutral-default, #01231B); font-size: 28px; font-family: Geist, sans-serif; font-weight: 600; line-height: 36px; word-wrap: break-word;" data-editable="plp-category-headline">Kategori Produk</div>
        
        <!-- Pemilihan Category -->
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex;">
          <div style="justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex; cursor: pointer;">
            <div style="width: 12px; height: 12px; background: var(--background-brand-primary-bold, #00AB4E); border-radius: 999px; flex-shrink: 0;"></div>
            <div style="color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 28px; word-wrap: break-word;" data-editable="plp-cat-1">Semua Produk</div>
          </div>
          <div style="opacity: 0.60; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex; cursor: pointer;">
            <div style="color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 500; line-height: 28px; word-wrap: break-word;" data-editable="plp-cat-2">Gadai</div>
          </div>
          <div style="opacity: 0.60; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex; cursor: pointer;">
            <div style="color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 500; line-height: 28px; word-wrap: break-word;" data-editable="plp-cat-3">Investasi Emas</div>
          </div>
          <div style="opacity: 0.60; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex; cursor: pointer;">
            <div style="color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 500; line-height: 28px; word-wrap: break-word;" data-editable="plp-cat-4">Pinjaman Usaha</div>
          </div>
          <div style="opacity: 0.60; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex; cursor: pointer;">
            <div style="color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 500; line-height: 28px; word-wrap: break-word;" data-editable="plp-cat-5">Layanan Syariah</div>
          </div>
        </div>
      </div>

      <!-- Right Main Content: 808px Container -->
      <div style="width: 808px; padding-top: 120px; padding-bottom: 120px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex;">
        <div style="align-self: stretch; justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word;" data-editable="plp-product-count">X Produk Pilihan</div>
        
        <div style="align-self: stretch; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; width: 100%;">
          
          <!-- Card 1 -->
          <div style="padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex; box-sizing: border-box;">
            <div style="align-self: stretch; height: 184px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; position: relative;">
              <img src="/background.png" alt="Product Card 1" data-editable="plp-card1-img" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;" />
              <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; position: relative; z-index: 2;">
                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex;">
                  <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="plp-card1-badge">Text Badge</div>
                </div>
              </div>
            </div>
            <div style="align-self: stretch; min-height: 132px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex;">
              <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word;" data-editable="plp-card1-title">Product Name.<br/>Max 42 char, 2 line.</div>
              <div style="align-self: stretch; min-height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word;" data-editable="plp-card1-desc">Product description Max 76 characters and 2 Line Max.</div>
            </div>
          </div>

          <!-- Card 2 -->
          <div style="padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex; box-sizing: border-box;">
            <div style="align-self: stretch; height: 184px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; position: relative;">
              <img src="/background.png" alt="Product Card 2" data-editable="plp-card2-img" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;" />
              <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; position: relative; z-index: 2;">
                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex;">
                  <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="plp-card2-badge">Text Badge</div>
                </div>
              </div>
            </div>
            <div style="align-self: stretch; min-height: 132px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex;">
              <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word;" data-editable="plp-card2-title">Product Name.<br/>Max 42 char, 2 line.</div>
              <div style="align-self: stretch; min-height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word;" data-editable="plp-card2-desc">Product description Max 76 characters and 2 Line Max.</div>
            </div>
          </div>

          <!-- Card 3 -->
          <div style="padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex; box-sizing: border-box;">
            <div style="align-self: stretch; height: 184px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; position: relative;">
              <img src="/background.png" alt="Product Card 3" data-editable="plp-card3-img" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;" />
              <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; position: relative; z-index: 2;">
                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex;">
                  <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="plp-card3-badge">Text Badge</div>
                </div>
              </div>
            </div>
            <div style="align-self: stretch; min-height: 132px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex;">
              <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word;" data-editable="plp-card3-title">Product Name.<br/>Max 42 char, 2 line.</div>
              <div style="align-self: stretch; min-height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word;" data-editable="plp-card3-desc">Product description Max 76 characters and 2 Line Max.</div>
            </div>
          </div>

          <!-- Card 4 -->
          <div style="padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex; box-sizing: border-box;">
            <div style="align-self: stretch; height: 184px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; position: relative;">
              <img src="/background.png" alt="Product Card 4" data-editable="plp-card4-img" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;" />
              <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; position: relative; z-index: 2;">
                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex;">
                  <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="plp-card4-badge">Text Badge</div>
                </div>
              </div>
            </div>
            <div style="align-self: stretch; min-height: 132px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex;">
              <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word;" data-editable="plp-card4-title">Product Name.<br/>Max 42 char, 2 line.</div>
              <div style="align-self: stretch; min-height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word;" data-editable="plp-card4-desc">Product description Max 76 characters and 2 Line Max.</div>
            </div>
          </div>

          <!-- Card 5 -->
          <div style="padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex; box-sizing: border-box;">
            <div style="align-self: stretch; height: 184px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; position: relative;">
              <img src="/background.png" alt="Product Card 5" data-editable="plp-card5-img" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;" />
              <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; position: relative; z-index: 2;">
                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex;">
                  <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="plp-card5-badge">Text Badge</div>
                </div>
              </div>
            </div>
            <div style="align-self: stretch; min-height: 132px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex;">
              <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word;" data-editable="plp-card5-title">Product Name.<br/>Max 42 char, 2 line.</div>
              <div style="align-self: stretch; min-height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word;" data-editable="plp-card5-desc">Product description Max 76 characters and 2 Line Max.</div>
            </div>
          </div>

          <!-- Card 6 -->
          <div style="padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex; box-sizing: border-box;">
            <div style="align-self: stretch; height: 184px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; position: relative;">
              <img src="/background.png" alt="Product Card 6" data-editable="plp-card6-img" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;" />
              <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; position: relative; z-index: 2;">
                <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex;">
                  <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="plp-card6-badge">Text Badge</div>
                </div>
              </div>
            </div>
            <div style="align-self: stretch; min-height: 132px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex;">
              <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word;" data-editable="plp-card6-title">Product Name.<br/>Max 42 char, 2 line.</div>
              <div style="align-self: stretch; min-height: 48px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word;" data-editable="plp-card6-desc">Product description Max 76 characters and 2 Line Max.</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="product-listing-mobile w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 100%; max-width: 402px; min-height: 600px; padding: 24px 16px 40px 16px; background: #F8F8F8; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex; box-sizing: border-box;">
      
      <!-- Mobile Category Headline -->
      <div style="color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 700; line-height: 32px; word-wrap: break-word; max-width: 320px;" data-editable="plp-mobile-headline">Headline category Max 40 char and 2 Line Max.</div>

      <!-- Mobile Category Dropdown Selector -->
      <div style="align-self: stretch; padding-bottom: 16px; border-bottom: 1px solid var(--border-neutral-subtle, #E0E0E1); justify-content: space-between; align-items: center; display: flex; cursor: pointer;">
        <div style="color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word;" data-editable="plp-mobile-category">Category 1</div>
        <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      <!-- Mobile Count Label -->
      <div style="color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word;" data-editable="plp-product-count">X Produk Pilihan</div>

      <!-- Mobile Product Cards List (Exactly 3 cards) -->
      <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
        
        <!-- Mobile Card 1 -->
        <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="align-self: stretch; height: 184px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; position: relative;">
            <img src="/background.png" alt="Product Card 1" data-editable="plp-card1-img" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;" />
            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; position: relative; z-index: 2;">
              <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex;">
                <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="plp-card1-badge">Text Badge</div>
              </div>
            </div>
          </div>
          <div style="align-self: stretch; min-height: 100px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex;">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 28px; word-wrap: break-word;" data-editable="plp-card1-title">Product Name.<br/>Max 42 char, 2 line.</div>
            <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="plp-card1-desc">Product description Max 76 characters and 2 Line Max.</div>
          </div>
        </div>

        <!-- Mobile Card 2 -->
        <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="align-self: stretch; height: 184px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; position: relative;">
            <img src="/background.png" alt="Product Card 2" data-editable="plp-card2-img" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;" />
            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; position: relative; z-index: 2;">
              <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex;">
                <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="plp-card2-badge">Text Badge</div>
              </div>
            </div>
          </div>
          <div style="align-self: stretch; min-height: 100px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex;">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 28px; word-wrap: break-word;" data-editable="plp-card2-title">Product Name.<br/>Max 42 char, 2 line.</div>
            <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="plp-card2-desc">Product description Max 76 characters and 2 Line Max.</div>
          </div>
        </div>

        <!-- Mobile Card 3 -->
        <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="align-self: stretch; height: 184px; padding: 16px; overflow: hidden; border-radius: 8px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; position: relative;">
            <img src="/background.png" alt="Product Card 3" data-editable="plp-card3-img" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;" />
            <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; position: relative; z-index: 2;">
              <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex;">
                <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="plp-card3-badge">Text Badge</div>
              </div>
            </div>
          </div>
          <div style="align-self: stretch; min-height: 100px; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex;">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 28px; word-wrap: break-word;" data-editable="plp-card3-title">Product Name.<br/>Max 42 char, 2 line.</div>
            <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="plp-card3-desc">Product description Max 76 characters and 2 Line Max.</div>
          </div>
        </div>

      </div>

      <!-- Bottom Text Link Button "Lihat Lebih Banyak" -->
      <div style="align-self: stretch; padding-top: 32px; padding-bottom: 16px; justify-content: center; align-items: center; display: flex;">
        <div style="justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer; text-decoration: none;" class="hover:opacity-80 transition-opacity">
          <span style="color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; text-align: center;" data-editable="plp-mobile-see-more">Lihat Lebih Banyak</span>
          <div style="width: 18px; height: 18px; display: flex; align-items: center; justify-content: center;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'plp-category-headline', label: 'Category Headline', defaultValue: 'Kategori Produk' },
      { id: 'plp-cat-1', label: 'Category 1 (Active)', defaultValue: 'Semua Produk' },
      { id: 'plp-cat-2', label: 'Category 2', defaultValue: 'Gadai' },
      { id: 'plp-cat-3', label: 'Category 3', defaultValue: 'Investasi Emas' },
      { id: 'plp-cat-4', label: 'Category 4', defaultValue: 'Pinjaman Usaha' },
      { id: 'plp-cat-5', label: 'Category 5', defaultValue: 'Layanan Syariah' },
      { id: 'plp-mobile-headline', label: 'Mobile Category Headline', defaultValue: 'Headline category Max 40 char and 2 Line Max.' },
      { id: 'plp-mobile-category', label: 'Mobile Selected Category', defaultValue: 'Category 1' },
      { id: 'plp-mobile-see-more', label: 'Mobile See More Button', defaultValue: 'Lihat Lebih Banyak' },
      { id: 'plp-product-count', label: 'Product Count Label', defaultValue: 'X Produk Pilihan' },
      { id: 'plp-card1-badge', label: 'Card 1 Badge', defaultValue: 'Text Badge' },
      { id: 'plp-card1-title', label: 'Card 1 Title', defaultValue: 'Product Name.\nMax 42 char, 2 line.' },
      { id: 'plp-card1-desc', label: 'Card 1 Description', defaultValue: 'Product description Max 76 characters and 2 Line Max.' },
      { id: 'plp-card1-img', label: 'Card 1 Image', defaultValue: '/background.png', type: 'image' },
      { id: 'plp-card2-badge', label: 'Card 2 Badge', defaultValue: 'Text Badge' },
      { id: 'plp-card2-title', label: 'Card 2 Title', defaultValue: 'Product Name.\nMax 42 char, 2 line.' },
      { id: 'plp-card2-desc', label: 'Card 2 Description', defaultValue: 'Product description Max 76 characters and 2 Line Max.' },
      { id: 'plp-card2-img', label: 'Card 2 Image', defaultValue: '/background.png', type: 'image' },
      { id: 'plp-card3-badge', label: 'Card 3 Badge', defaultValue: 'Text Badge' },
      { id: 'plp-card3-title', label: 'Card 3 Title', defaultValue: 'Product Name.\nMax 42 char, 2 line.' },
      { id: 'plp-card3-desc', label: 'Card 3 Description', defaultValue: 'Product description Max 76 characters and 2 Line Max.' },
      { id: 'plp-card3-img', label: 'Card 3 Image', defaultValue: '/background.png', type: 'image' },
      { id: 'plp-card4-badge', label: 'Card 4 Badge (Desktop)', defaultValue: 'Text Badge' },
      { id: 'plp-card4-title', label: 'Card 4 Title (Desktop)', defaultValue: 'Product Name.\nMax 42 char, 2 line.' },
      { id: 'plp-card4-desc', label: 'Card 4 Description (Desktop)', defaultValue: 'Product description Max 76 characters and 2 Line Max.' },
      { id: 'plp-card4-img', label: 'Card 4 Image (Desktop)', defaultValue: '/background.png', type: 'image' },
      { id: 'plp-card5-badge', label: 'Card 5 Badge (Desktop)', defaultValue: 'Text Badge' },
      { id: 'plp-card5-title', label: 'Card 5 Title (Desktop)', defaultValue: 'Product Name.\nMax 42 char, 2 line.' },
      { id: 'plp-card5-desc', label: 'Card 5 Description (Desktop)', defaultValue: 'Product description Max 76 characters and 2 Line Max.' },
      { id: 'plp-card5-img', label: 'Card 5 Image (Desktop)', defaultValue: '/background.png', type: 'image' },
      { id: 'plp-card6-badge', label: 'Card 6 Badge (Desktop)', defaultValue: 'Text Badge' },
      { id: 'plp-card6-title', label: 'Card 6 Title (Desktop)', defaultValue: 'Product Name.\nMax 42 char, 2 line.' },
      { id: 'plp-card6-desc', label: 'Card 6 Description (Desktop)', defaultValue: 'Product description Max 76 characters and 2 Line Max.' },
      { id: 'plp-card6-img', label: 'Card 6 Image (Desktop)', defaultValue: '/background.png', type: 'image' }
    ]
  };
