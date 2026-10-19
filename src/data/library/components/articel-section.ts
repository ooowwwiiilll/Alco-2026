import type { SectionTemplate } from '../../../types';

export const articelSection: SectionTemplate = {
    id: 'articel-section',
    name: 'ARTICLE SECTION',
    category: 'CONTENT',
    description: 'Berita & Artikel grid for desktop and single-card swipeable horizontal slider for mobile.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="articel-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 1440px; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: flex; box-sizing: border-box;">
      <!-- Header -->
      <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: flex; flex-wrap: wrap; gap: 24px;">
        <div style="width: 336px; max-width: 100%; color: var(--text-neutral-default, #013428); font-size: 40px; font-family: Geist, sans-serif; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="article-section-title">Berita & Artikel</div>
        <div style="width: 637px; max-width: 100%; color: var(--text-neutral-disabled, #B1B1B3); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="article-section-subtitle">Pelajari emas dari dasar sampai<br/>strategi mengembangkannya</div>
      </div>

      <!-- Cards Row -->
      <div style="width: 100%; max-width: 1296px; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex; flex-wrap: wrap;">
        <!-- Card 1 (Height 426px) -->
        <div style="flex: 1 1 260px; min-width: 250px; flex-direction: column; justify-content: center; align-items: flex-start; display: flex;">
          <img style="align-self: stretch; width: 100%; height: 426px; border-radius: 24px; object-fit: cover; display: block; cursor: pointer;" src="/background.png" onerror="this.src='/background.png'" alt="Article 1" data-editable="article-card1-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-card1-category">Investasi</div>
              <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="article-card1-title">5 Alasan Investasi Emas Cocok untuk Pemula</div>
            </div>
          </div>
        </div>

        <!-- Card 2 (Height 325px) -->
        <div style="flex: 1 1 260px; min-width: 250px; flex-direction: column; justify-content: center; align-items: flex-start; display: flex;">
          <img style="align-self: stretch; width: 100%; height: 325px; border-radius: 24px; object-fit: cover; display: block; cursor: pointer;" src="/background.png" onerror="this.src='/background.png'" alt="Article 2" data-editable="article-card2-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-card2-category">Market Insight</div>
              <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="article-card2-title">Update Harga Emas Agustus 2026</div>
            </div>
          </div>
        </div>

        <!-- Card 3 (Height 426px) -->
        <div style="flex: 1 1 260px; min-width: 250px; flex-direction: column; justify-content: center; align-items: flex-start; display: flex;">
          <img style="align-self: stretch; width: 100%; height: 426px; border-radius: 24px; object-fit: cover; display: block; cursor: pointer;" src="/background.png" onerror="this.src='/background.png'" alt="Article 3" data-editable="article-card3-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-card3-category">Tips Finansial</div>
              <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="article-card3-title">Cara Menebus Gadai Tanpa Surat di Pegadaian, Apakah Bisa?</div>
            </div>
          </div>
        </div>

        <!-- Card 4 (Height 325px) -->
        <div style="flex: 1 1 260px; min-width: 250px; flex-direction: column; justify-content: center; align-items: flex-start; display: flex;">
          <img style="align-self: stretch; width: 100%; height: 325px; border-radius: 24px; object-fit: cover; display: block; cursor: pointer;" src="/background.png" onerror="this.src='/background.png'" alt="Article 4" data-editable="article-card4-img" />
          <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-card4-category">Gold Insight</div>
              <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="article-card4-title">Apa yang Sedang Terjadi di Pasar Emas Global?</div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div style="padding-top: 12px; padding-bottom: 12px; padding-left: 24px; padding-right: 20px; background: var(--background-brand-primary-bold, #CCEA68); border-radius: 80px; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="article-cta-text">Lihat Semua</div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: block;">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  </div>

  <!-- Mobile Layout (Single Card Carousel / Slider) -->
  <div class="articel-section-mobile w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; max-width: 375px; padding-left: 24px; padding-right: 24px; padding-top: 60px; padding-bottom: 60px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: inline-flex; box-sizing: border-box;">
      <!-- Mobile Header -->
      <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 8px; display: flex;">
        <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 32px; font-family: Geist, sans-serif; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="article-section-title">Berita & Artikel</div>
        <div style="align-self: stretch; color: var(--text-neutral-disabled, #B1B1B3); font-size: 15px; font-family: Geist, sans-serif; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="article-section-subtitle">Pelajari emas dari dasar sampai strategi mengembangkannya</div>
      </div>

      <!-- Mobile Horizontal Slider (1 card shown at a time, scrollable left/right) -->
      <div class="article-mobile-slider" style="align-self: stretch; width: 100%; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex; flex-direction: row; flex-wrap: nowrap; overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;">
        <!-- Card 1 -->
        <div style="flex: 0 0 100%; min-width: 100%; max-width: 100%; scroll-snap-align: start; flex-direction: column; justify-content: center; align-items: flex-start; display: flex; box-sizing: border-box;">
          <img style="align-self: stretch; width: 100%; height: 380px; max-height: 480px; background: #A7B184; border-radius: 20px; object-fit: cover; display: block; cursor: pointer;" src="/background.png" onerror="this.src='/background.png'" alt="Article 1" data-editable="article-card1-img" />
          <div style="align-self: stretch; padding-top: 20px; padding-bottom: 12px; padding-right: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-card1-category">Investasi</div>
              <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="article-card1-title">5 Alasan Investasi Emas Cocok untuk Pemula</div>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div style="flex: 0 0 100%; min-width: 100%; max-width: 100%; scroll-snap-align: start; flex-direction: column; justify-content: center; align-items: flex-start; display: flex; box-sizing: border-box;">
          <img style="align-self: stretch; width: 100%; height: 380px; max-height: 480px; background: #A7B184; border-radius: 20px; object-fit: cover; display: block; cursor: pointer;" src="/background.png" onerror="this.src='/background.png'" alt="Article 2" data-editable="article-card2-img" />
          <div style="align-self: stretch; padding-top: 20px; padding-bottom: 12px; padding-right: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-card2-category">Market Insight</div>
              <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="article-card2-title">Update Harga Emas Agustus 2026</div>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div style="flex: 0 0 100%; min-width: 100%; max-width: 100%; scroll-snap-align: start; flex-direction: column; justify-content: center; align-items: flex-start; display: flex; box-sizing: border-box;">
          <img style="align-self: stretch; width: 100%; height: 380px; max-height: 480px; background: #A7B184; border-radius: 20px; object-fit: cover; display: block; cursor: pointer;" src="/background.png" onerror="this.src='/background.png'" alt="Article 3" data-editable="article-card3-img" />
          <div style="align-self: stretch; padding-top: 20px; padding-bottom: 12px; padding-right: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-card3-category">Tips Finansial</div>
              <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="article-card3-title">Cara Menebus Gadai Tanpa Surat di Pegadaian, Apakah Bisa?</div>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div style="flex: 0 0 100%; min-width: 100%; max-width: 100%; scroll-snap-align: start; flex-direction: column; justify-content: center; align-items: flex-start; display: flex; box-sizing: border-box;">
          <img style="align-self: stretch; width: 100%; height: 380px; max-height: 480px; background: #A7B184; border-radius: 20px; object-fit: cover; display: block; cursor: pointer;" src="/background.png" onerror="this.src='/background.png'" alt="Article 4" data-editable="article-card4-img" />
          <div style="align-self: stretch; padding-top: 20px; padding-bottom: 12px; padding-right: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
              <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="article-card4-category">Gold Insight</div>
              <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="article-card4-title">Apa yang Sedang Terjadi di Pasar Emas Global?</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Bottom Navigation & CTA Row -->
      <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex; gap: 12px;">
        <!-- Left & Right Arrow Buttons (with click action to slide horizontally) -->
        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex;">
          <button type="button" onclick="const s = this.closest('.articel-section-mobile').querySelector('.article-mobile-slider'); if(s) s.scrollBy({left: -s.clientWidth, behavior: 'smooth'});" style="padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 80px; backdrop-filter: blur(20px); justify-content: center; align-items: center; gap: 10px; display: flex; border: none; cursor: pointer;" title="Previous Article">
            <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B1B1B3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
          </button>
          <button type="button" onclick="const s = this.closest('.articel-section-mobile').querySelector('.article-mobile-slider'); if(s) s.scrollBy({left: s.clientWidth, behavior: 'smooth'});" style="padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 80px; backdrop-filter: blur(20px); justify-content: center; align-items: center; gap: 10px; display: flex; border: none; cursor: pointer;" title="Next Article">
            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </button>
        </div>

        <!-- "Lihat Semua" CTA Button -->
        <div style="padding-top: 12px; padding-bottom: 12px; padding-left: 24px; padding-right: 20px; background: var(--background-brand-primary-bold, #CCEA68); border-radius: 80px; justify-content: center; align-items: center; gap: 4px; display: flex; cursor: pointer;">
          <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="article-cta-text">Lihat Semua</div>
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
</div>`,
    editableFields: [
      { id: 'article-section-title', label: 'Section Title', defaultValue: 'Berita & Artikel' },
      { id: 'article-section-subtitle', label: 'Section Subtitle', defaultValue: 'Pelajari emas dari dasar sampai<br/>strategi mengembangkannya' },
      { id: 'article-card1-img', label: 'Card 1 Image (Upload / URL)', defaultValue: '/background.png', type: 'image' },
      { id: 'article-card1-category', label: 'Card 1 Category', defaultValue: 'Investasi' },
      { id: 'article-card1-title', label: 'Card 1 Title', defaultValue: '5 Alasan Investasi Emas Cocok untuk Pemula' },
      { id: 'article-card2-img', label: 'Card 2 Image (Upload / URL)', defaultValue: '/background.png', type: 'image' },
      { id: 'article-card2-category', label: 'Card 2 Category', defaultValue: 'Market Insight' },
      { id: 'article-card2-title', label: 'Card 2 Title', defaultValue: 'Update Harga Emas Agustus 2026' },
      { id: 'article-card3-img', label: 'Card 3 Image (Upload / URL)', defaultValue: '/background.png', type: 'image' },
      { id: 'article-card3-category', label: 'Card 3 Category', defaultValue: 'Tips Finansial' },
      { id: 'article-card3-title', label: 'Card 3 Title', defaultValue: 'Cara Menebus Gadai Tanpa Surat di Pegadaian, Apakah Bisa?' },
      { id: 'article-card4-img', label: 'Card 4 Image (Upload / URL)', defaultValue: '/background.png', type: 'image' },
      { id: 'article-card4-category', label: 'Card 4 Category', defaultValue: 'Gold Insight' },
      { id: 'article-card4-title', label: 'Card 4 Title', defaultValue: 'Apa yang Sedang Terjadi di Pasar Emas Global?' },
      { id: 'article-cta-text', label: 'CTA Button Text', defaultValue: 'Lihat Semua' }
    ]
  };
