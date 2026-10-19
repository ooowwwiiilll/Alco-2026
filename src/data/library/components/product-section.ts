import type { SectionTemplate } from '../../../types';

export const productSection: SectionTemplate = {
    id: 'product-section',
    name: 'PRODUCT SECTION',
    category: 'PRODUCTS',
    description: 'Pegadaian Product Section with categories, product cards slider, and customizable images and texts.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="product-section-desktop w-full overflow-hidden bg-[#082117] flex justify-center">
    <div style="width: 1440px; min-height: 940px; padding-left: 72px; padding-right: 72px; padding-top: 160px; padding-bottom: 160px; background-image: url(/background.png); background-size: cover; background-position: center; background-repeat: no-repeat; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: inline-flex; position: relative;">
      <div style="align-self: stretch; flex: 1 1 0; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; gap: 40px;">
        <div style="max-width: 280px; color: var(--text-neutral-onDark-default, white); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="product-top-title">Lorem ipsum dolor sit amet consectetur </div>
        <div style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: inline-flex; gap: 32px;">
          <!-- Left Categories Menu -->
          <div style="width: 309px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: inline-flex;">
            <div style="align-self: stretch; opacity: 0.80; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex; cursor: pointer;">
              <div style="flex: 1 1 0; color: var(--text-neutral-onDark-default, white); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="product-tab-1">Lorem Ipsum Dolor</div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex; cursor: pointer;">
              <div style="width: 16px; height: 16px; padding: 4px; background: var(--background-brand-primary-bold, #CCEA68); border-radius: 80px; flex-shrink: 0;"></div>
              <div style="color: var(--text-neutral-onDark-default, white); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="product-tab-2">Lorem Ipsum Dolor</div>
            </div>
            <div style="align-self: stretch; opacity: 0.80; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex; cursor: pointer;">
              <div style="flex: 1 1 0; color: var(--text-neutral-onDark-default, white); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="product-tab-3">Lorem Ipsum Dolor</div>
            </div>
            <div style="align-self: stretch; opacity: 0.80; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex; cursor: pointer;">
              <div style="flex: 1 1 0; color: var(--text-neutral-onDark-default, white); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="product-tab-4">Lorem Ipsum Dolor</div>
            </div>
          </div>

          <!-- Right Content: Header & 3 Product Cards -->
          <div style="flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 40px; display: inline-flex; flex: 1 1 0;">
            <div style="align-self: stretch; height: 40px; justify-content: space-between; align-items: center; display: inline-flex;">
              <div style="width: 338px; justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="product-count-label">10 Produk Pilihan</div>
              <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex;">
                <div style="padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-neutral-inverse, rgba(255, 255, 255, 0.12)); border-radius: 80px; backdrop-filter: blur(20px); justify-content: center; align-items: center; display: flex; cursor: pointer;" title="Previous product">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </div>
                <div style="padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-primary-default, white); border-radius: 80px; backdrop-filter: blur(20px); justify-content: center; align-items: center; display: flex; cursor: pointer;" title="Next product">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <!-- 3 Product Cards -->
            <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex;">
              <!-- Card 1 -->
              <div style="width: 280px; padding: 12px; background: var(--background-surface-neutral-inverse, rgba(255, 255, 255, 0.12)); border-radius: 12px; outline: 1px rgba(255, 255, 255, 0.10) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex;">
                <div style="align-self: stretch; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex;">
                  <div style="align-self: stretch; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="product-card1-title">Lorem Ipsum Dolor Sit Amet</div>
                  <div style="align-self: stretch; opacity: 0.70; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="product-card1-desc">Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                </div>
                <div style="width: 254px; height: 154.88px; position: relative; background: #A7B184; border-radius: 8px; overflow: hidden;">
                  <img src="/background.png" alt="Product Card 1" data-editable="product-card1-img" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;" />
                </div>
              </div>

              <!-- Card 2 -->
              <div style="width: 280px; align-self: stretch; padding: 12px; background: var(--background-surface-neutral-inverse, rgba(255, 255, 255, 0.12)); border-radius: 12px; outline: 1px rgba(255, 255, 255, 0.10) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex;">
                <div style="align-self: stretch; flex: 1 1 0; padding: 8px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex;">
                  <div style="align-self: stretch; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="product-card2-title">Lorem Ipsum Dolor Sit Amet</div>
                  <div style="align-self: stretch; opacity: 0.70; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="product-card2-desc">Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                </div>
                <div style="width: 254px; height: 154.88px; position: relative; background: #A7B184; border-radius: 8px; overflow: hidden;">
                  <img src="/background.png" alt="Product Card 2" data-editable="product-card2-img" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;" />
                </div>
              </div>

              <!-- Card 3 -->
              <div style="width: 280px; padding: 12px; background: var(--background-surface-neutral-inverse, rgba(255, 255, 255, 0.12)); border-radius: 12px; outline: 1px rgba(255, 255, 255, 0.10) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex;">
                <div style="align-self: stretch; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex;">
                  <div style="align-self: stretch; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="product-card3-title">Lorem Ipsum Dolor Sit Amet</div>
                  <div style="align-self: stretch; opacity: 0.70; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="product-card3-desc">Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                </div>
                <div style="width: 254px; height: 154.88px; position: relative; background: #A7B184; border-radius: 8px; overflow: hidden;">
                  <img src="/background.png" alt="Product Card 3" data-editable="product-card3-img" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="product-section-mobile w-full overflow-hidden bg-[#082117] flex justify-center">
    <div style="width: 100%; max-width: 375px; min-height: 812px; padding-left: 24px; padding-right: 24px; padding-top: 60px; padding-bottom: 60px; background-image: url(/background.png); background-size: cover; background-position: center; background-repeat: no-repeat; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex; position: relative;">
      <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
        <div style="color: white; font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="product-top-title">Lorem ipsum dolor sit amet consectetur </div>
      </div>
      <div style="align-self: stretch; flex: 1 1 0; border-radius: 24px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 24px; display: flex;">
        <!-- Mobile Category Accordion Selector -->
        <div style="width: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
          <div style="align-self: stretch; height: 56px; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
            <div style="color: var(--text-neutral-onDark-default, white); font-size: 28px; font-family: Geist, sans-serif; font-weight: 500; line-height: 34px; word-wrap: break-word" data-editable="product-tab-2">Lorem Ipsum Dolor</div>
            <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <div style="justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="product-count-label">10 Produk Pilihan</div>

        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex;">
          <!-- Mobile Product Card -->
          <div style="width: 100%; padding: 12px; background: var(--background-surface-neutral-inverse, rgba(255, 255, 255, 0.12)); border-radius: 8px; outline: 1px rgba(255, 255, 255, 0.10) solid; outline-offset: -1px; backdrop-filter: blur(75px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex;">
            <div style="align-self: stretch; padding: 8px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex;">
              <div style="align-self: stretch; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="product-card1-title">Lorem Ipsum Dolor Sit Amet</div>
              <div style="align-self: stretch; opacity: 0.70; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="product-card1-desc">Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            </div>
            <div style="align-self: stretch; height: 160px; position: relative; background: #A7B184; border-radius: 8px; overflow: hidden;">
              <img src="/background.png" alt="Mobile Product Card" data-editable="product-card1-img" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;" />
            </div>
          </div>

          <!-- Mobile Slider Arrow Buttons -->
          <div style="align-self: stretch; justify-content: flex-start; align-items: center; display: inline-flex;">
            <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex;">
              <div style="padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-neutral-inverse, rgba(255, 255, 255, 0.12)); border-radius: 80px; backdrop-filter: blur(20px); justify-content: center; align-items: center; display: flex; cursor: pointer;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
              <div style="padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-primary-default, white); border-radius: 80px; backdrop-filter: blur(20px); justify-content: center; align-items: center; display: flex; cursor: pointer;">
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
      { id: 'product-top-title', label: 'Top Subtitle', defaultValue: 'Lorem ipsum dolor sit amet consectetur' },
      { id: 'product-tab-1', label: 'Category Tab 1', defaultValue: 'Lorem Ipsum Dolor' },
      { id: 'product-tab-2', label: 'Category Tab 2 (Active)', defaultValue: 'Lorem Ipsum Dolor' },
      { id: 'product-tab-3', label: 'Category Tab 3', defaultValue: 'Lorem Ipsum Dolor' },
      { id: 'product-tab-4', label: 'Category Tab 4', defaultValue: 'Lorem Ipsum Dolor' },
      { id: 'product-count-label', label: 'Product Count Label', defaultValue: '10 Produk Pilihan' },
      { id: 'product-card1-title', label: 'Card 1 Title', defaultValue: 'Lorem Ipsum Dolor Sit Amet' },
      { id: 'product-card1-desc', label: 'Card 1 Description', defaultValue: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
      { id: 'product-card1-img', label: 'Card 1 Image', defaultValue: '/background.png', type: 'image' },
      { id: 'product-card2-title', label: 'Card 2 Title', defaultValue: 'Lorem Ipsum Dolor Sit Amet' },
      { id: 'product-card2-desc', label: 'Card 2 Description', defaultValue: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
      { id: 'product-card2-img', label: 'Card 2 Image', defaultValue: '/background.png', type: 'image' },
      { id: 'product-card3-title', label: 'Card 3 Title', defaultValue: 'Lorem Ipsum Dolor Sit Amet' },
      { id: 'product-card3-desc', label: 'Card 3 Description', defaultValue: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
      { id: 'product-card3-img', label: 'Card 3 Image', defaultValue: '/background.png', type: 'image' }
    ]
  };
