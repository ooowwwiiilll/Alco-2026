import type { SectionTemplate } from '../../../types';

export const heroSection: SectionTemplate = {
    id: 'hero-section',
    name: 'HERO SECTION',
    category: 'HERO',
    description: 'Pegadaian Hero Section with gold investment slider, price banner, navigation tabs, and dark green background.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout (1440px x 900px) -->
  <div class="hero-personal-desktop w-full overflow-hidden bg-[#082117] flex justify-center">
    <div style="width: 1440px; height: 900px; position: relative; overflow: hidden; background: #082117;">
      <!-- Background Image (Editable URL / Uploadable) -->
      <img
        src="/background.png"
        onerror="this.src='/background.png'"
        alt="Hero Background"
        data-editable="hero-section-bg"
        style="width: 1440.50px; height: 900px; left: 0px; top: 0px; position: absolute; object-fit: cover; z-index: 1;"
        title="Click to replace background image"
      />

      <!-- Dark Gradient Overlay -->
      <div style="width: 1440px; height: 900px; left: 0px; top: 0px; position: absolute; background: linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(8, 33, 23, 0.75) 100%); pointer-events: none; z-index: 2;"></div>

      <!-- Header Top Navigation -->
      <div style="width: 1440px; padding-top: 20px; left: 0px; top: 0px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: center; display: inline-flex; z-index: 30;">
        <div data-variant="Default" style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; background: rgba(255, 255, 255, 0); border-radius: 80px; justify-content: space-between; align-items: center; display: inline-flex">
          <div style="justify-content: flex-start; align-items: center; gap: 80px; display: flex">
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 40px; display: flex">
              <img src="/logo-pegadaian.png" alt="Pegadaian Logo" data-editable="hero-section-logo" style="height: 32px; width: auto; max-height: 100%; object-fit: contain; cursor: pointer; display: block;" />
            </div>
          </div>
          <div style="justify-content: flex-start; align-items: center; gap: 40px; display: flex">
            <div data-state="Selected" data-theme="On Color" style="padding-top: 22px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 18px; display: inline-flex; cursor: pointer;">
              <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px;" data-editable="hero-section-nav1">Individu</div>
              <div style="width: 24px; height: 4px; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
            </div>
            <div data-state="Default" data-theme="On Color" style="padding-top: 22px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 18px; display: inline-flex; cursor: pointer;">
              <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px;" data-editable="hero-section-nav2">Bisnis</div>
              <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
            </div>
            <div data-state="Default" data-theme="On Color" style="padding-top: 22px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 18px; display: inline-flex; cursor: pointer;">
              <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px;" data-editable="hero-section-nav3">Hubungan Investor</div>
              <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
            </div>
            <div data-state="Default" data-theme="On Color" style="padding-top: 22px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 18px; display: inline-flex; cursor: pointer;">
              <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px;" data-editable="hero-section-nav4">Tentang Pegadaian</div>
              <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
            </div>
            <div data-state="Default" data-theme="On Color" style="padding-top: 22px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 18px; display: inline-flex; cursor: pointer;">
              <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px;" data-editable="hero-section-nav5">Karir</div>
              <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
            </div>
          </div>
          <div style="justify-content: flex-end; align-items: center; gap: 24px; display: flex">
            <div style="height: 24px; padding-right: 24px; border-right: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; justify-content: center; align-items: center; gap: 12px; display: flex">
              <div style="width: 36px; height: 36px; border-radius: 80px; border: 1px solid rgba(255, 255, 255, 0.12); display: flex; justify-content: center; align-items: center; cursor: pointer;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <div style="width: 36px; height: 36px; border-radius: 80px; border: 1px solid rgba(255, 255, 255, 0.12); display: flex; justify-content: center; align-items: center; cursor: pointer;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 6px; display: flex; cursor: pointer;">
              <div style="width: 20px; height: 14px; position: relative; border-radius: 2px; overflow: hidden;">
                <div style="width: 20px; height: 7px; left: 0; top: 0; position: absolute; background: #ED4C5C"></div>
                <div style="width: 20px; height: 7px; left: 0; top: 7px; position: absolute; background: #F9F9F9"></div>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Price Ticker Bar -->
      <div style="left: 1020px; top: 110px; position: absolute; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; z-index: 30;">
        <div style="padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; background: rgba(0, 0, 0, 0.35); overflow: hidden; border-radius: 70px; backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1); justify-content: space-between; align-items: center; display: flex">
          <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
            <span style="font-size: 14px;">🔥</span>
            <span style="color: white; font-size: 13px; font-weight: 500;" data-editable="hero-section-gold-price">Harga Jual Emas Pegadaian: Rp 25.880/0.01gr</span>
          </div>
        </div>
      </div>

      <!-- Main Central Headline & Interactive Slider Widget -->
      <div style="width: 1297px; left: 72px; top: 320px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: center; gap: 36px; display: inline-flex; z-index: 20;">
        <div style="flex-direction: column; justify-content: center; align-items: center; gap: 24px; display: flex">
          <div style="text-align: center; color: white; font-size: 68px; font-weight: 500; line-height: 78px;" data-editable="hero-section-main-title">Saya Ingin Membeli Emas</div>
        </div>
        <div style="width: 880px; padding-top: 16px; padding-bottom: 16px; padding-left: 24px; padding-right: 16px; background: rgba(255, 255, 255, 0.10); border-radius: 80px; backdrop-filter: blur(40px); justify-content: space-between; align-items: center; display: inline-flex">
            <div style="width: 617px; height: 4px; justify-content: space-between; align-items: center; display: flex; position: relative;">
                <div style="width: 617px; height: 4px; background: rgba(255,255,255,0.2); border-radius: 999px; position: absolute; left: 0; top: 0;"></div>
                <div style="width: 250px; height: 4px; background: linear-gradient(90deg, rgba(191, 215, 48, 0) 0%, #BFD730 100%); border-radius: 999px; position: absolute; left: 0; top: 0;"></div>
                <div style="width: 74px; height: 40px; position: absolute; left: 220px; top: -18px; background: var(--background-surface-primary-default, white); overflow: hidden; border-radius: 80px; box-shadow: 0px 4px 40px rgba(204, 234, 104, 0.40); display: flex; justify-content: center; align-items: center; cursor: pointer;">
                    <div style="justify-content: flex-start; align-items: flex-end; gap: 2px; display: inline-flex">
                        <div style="color: var(--text-neutral-default, #013428); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="hero-section-slider-val">5</div>
                        <div style="width: 13px; padding-top: 7px; padding-bottom: 7px; flex-direction: column; justify-content: center; align-items: center; gap: 11px; display: inline-flex">
                            <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 10px; font-family: Geist, sans-serif; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="hero-section-slider-unit">gr</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="padding-top: 12px; padding-bottom: 12px; padding-left: 24px; padding-right: 20px; background: var(--background-brand-primary-bold, #CCEA68); border-radius: 80px; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;">
                <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="hero-section-cta">Temukan Jalan</div>
                <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 3.33px; top: 3.34px; width: 9.33px; height: 9.33px;">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>
        </div>
      </div>

      <!-- Bottom Floating Segmented Navigation Bar -->
      <div style="padding: 8px; left: 50%; transform: translateX(-50%); top: 780px; position: absolute; background: rgba(255, 255, 255, 0.10); border-radius: 60px; border: 1px solid rgba(255, 255, 255, 0.15); backdrop-filter: blur(40px); justify-content: center; align-items: center; gap: 6px; display: inline-flex; z-index: 20;">
        <div style="width: 50px; height: 40px; padding: 8px 16px; background: rgba(204, 234, 104, 0.25); box-shadow: 0px 4px 44px rgba(191, 215, 48, 0.60); border-radius: 80px; outline: 0.50px #CCEA68 solid; display: inline-flex; justify-content: center; align-items: center; cursor: pointer;">
          <div style="width: 14px; height: 14px; border-radius: 50%; background: #00AB4E;"></div>
        </div>
        <div style="height: 40px; padding: 8px 20px; background: rgba(255, 255, 255, 0.18); border-radius: 20px; backdrop-filter: blur(40px); display: flex; align-items: center; cursor: pointer;">
          <div style="color: white; font-size: 15px; font-weight: 600;" data-editable="hero-section-pill1">Mulai Investasi</div>
        </div>
        <div style="height: 40px; padding: 8px 20px; border-radius: 20px; backdrop-filter: blur(40px); display: flex; align-items: center; cursor: pointer;">
          <div style="color: white; font-size: 15px; font-weight: 600;" data-editable="hero-section-pill2">Kembangkan</div>
        </div>
        <div style="height: 40px; padding: 8px 20px; border-radius: 20px; backdrop-filter: blur(40px); display: flex; align-items: center; cursor: pointer;">
          <div style="color: white; font-size: 15px; font-weight: 600;" data-editable="hero-section-pill3">Butuh Dana</div>
        </div>
        <div style="height: 40px; padding: 8px 20px; border-radius: 20px; backdrop-filter: blur(40px); display: flex; align-items: center; cursor: pointer;">
          <div style="color: white; font-size: 15px; font-weight: 600;" data-editable="hero-section-pill4">Bangun Usaha</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Layout (375px) -->
  <div class="hero-personal-mobile w-full overflow-hidden bg-[#082117] flex justify-center">
    <div class="w-full max-w-[375px] min-h-[812px] relative shrink-0 overflow-hidden bg-[#082117] rounded-[36px]">
      <!-- Background Image -->
      <img src="/background.png" alt="Mobile Hero Background" data-editable="hero-section-bg" style="width: 100%; height: 100%; position: absolute; inset: 0; object-fit: cover; z-index: 1;" />
      
      <!-- Gradient Atmosphere -->
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.40) 0%, rgba(8,33,23,0.85) 100%); z-index: 2; pointer-events: none;"></div>

      <!-- Mobile Top Nav -->
      <div style="width: 100%; position: absolute; top: 12px; left: 0; z-index: 30;">
        <div style="width: 100%; height: 100%; padding-left: 16px; padding-right: 16px; padding-top: 14px; padding-bottom: 14px; backdrop-filter: blur(20px); justify-content: space-between; align-items: center; display: inline-flex">
          <img src="/logo-pegadaian.png" alt="Pegadaian Logo" data-editable="hero-section-logo" style="height: 24px; width: auto; max-height: 100%; object-fit: contain; cursor: pointer; display: block;" />
          <div style="justify-content: flex-end; align-items: center; gap: 8px; display: flex">
            <div style="padding: 10px; border-radius: 80px; outline: 1px rgba(255, 255, 255, 0.12) solid; outline-offset: -1px; justify-content: center; align-items: center; display: flex; cursor: pointer;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
              </svg>
            </div>
            <div style="padding: 10px; border-radius: 80px; outline: 1px rgba(255, 255, 255, 0.12) solid; outline-offset: -1px; justify-content: center; align-items: center; display: flex; cursor: pointer;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div style="height: 36px; padding-left: 14px; padding-right: 14px; background: white; border-radius: 80px; backdrop-filter: blur(20px); justify-content: center; align-items: center; display: flex; cursor: pointer;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Price Banner Mobile -->
      <div style="position: absolute; top: 76px; left: 50%; transform: translateX(-50%); width: 90%; padding: 8px 16px; background: rgba(0,0,0,0.35); border-radius: 40px; backdrop-filter: blur(10px); display: flex; justify-content: center; align-items: center; gap: 6px; z-index: 20;">
        <span style="font-size: 13px;">🔥</span>
        <span style="color: white; font-size: 11px; font-family: Geist, sans-serif;" data-editable="hero-section-gold-price">Harga Jual Emas Pegadaian: Rp 25.880/0.01gr</span>
      </div>

      <!-- Main Headline Mobile -->
      <div style="position: absolute; top: 160px; left: 0; width: 100%; padding: 0 20px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 20px; z-index: 20;">
        <div style="color: white; font-size: 32px; font-weight: 600; line-height: 40px; font-family: Geist, sans-serif;" data-editable="hero-section-main-title">
          Saya Ingin Membeli Emas
        </div>
        <!-- Slider Box Mobile -->
        <div style="width: 100%; padding-top: 42px; padding-bottom: 16px; padding-left: 16px; padding-right: 16px; position: relative; background: rgba(255, 255, 255, 0.10); border-radius: 16px; backdrop-filter: blur(40px); flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex; border: 1px solid rgba(255,255,255,0.15);">
            <div style="align-self: stretch; height: 4px; justify-content: space-between; align-items: center; display: inline-flex; position: relative;">
                <div style="width: 100%; height: 4px; background: rgba(255,255,255,0.2); border-radius: 999px; position: absolute; left: 0; top: 0;"></div>
                <div style="width: 40%; height: 4px; background: linear-gradient(90deg, rgba(191, 215, 48, 0) 0%, #BFD730 100%); border-radius: 999px; position: absolute; left: 0; top: 0;"></div>
            </div>
            <div style="align-self: stretch; padding-top: 12px; padding-bottom: 12px; padding-left: 24px; padding-right: 20px; background: var(--background-brand-primary-bold, #CCEA68); border-radius: 80px; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="hero-section-cta">Temukan Jalan</div>
                <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 3.33px; top: 3.34px; width: 9.33px; height: 9.33px;">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>
            <div style="width: 64px; height: 20px; left: 16px; top: 34px; position: absolute; background: linear-gradient(90deg, rgba(191, 215, 48, 0) 0%, #BFD730 100%); box-shadow: 0px 4px 40px rgba(204, 234, 104, 0.40); border-radius: 999px"></div>
            <div style="width: 74px; height: 40px; left: 54px; top: 24px; position: absolute; background: var(--background-surface-primary-default, white); overflow: hidden; border-radius: 80px; display: flex; justify-content: center; align-items: center; cursor: pointer;">
                <div style="justify-content: flex-start; align-items: flex-end; gap: 2px; display: inline-flex">
                    <div style="color: var(--text-neutral-default, #013428); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="hero-section-slider-val">5</div>
                    <div style="width: 13px; padding-top: 7px; padding-bottom: 7px; flex-direction: column; justify-content: center; align-items: center; gap: 11px; display: inline-flex">
                        <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 10px; font-family: Geist, sans-serif; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="hero-section-slider-unit">gr</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <!-- Bottom Segment Pills Mobile -->
      <div style="position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); width: 92%; padding: 6px; background: rgba(255,255,255,0.1); border-radius: 40px; backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.15); display: flex; overflow-x: auto; gap: 6px; z-index: 20;">
        <div style="padding: 8px 14px; background: rgba(255,255,255,0.2); border-radius: 20px; color: white; font-size: 13px; font-weight: 600; white-space: nowrap;" data-editable="hero-section-pill1">Mulai Investasi</div>
        <div style="padding: 8px 14px; border-radius: 20px; color: white; font-size: 13px; font-weight: 600; white-space: nowrap;" data-editable="hero-section-pill2">Kembangkan</div>
        <div style="padding: 8px 14px; border-radius: 20px; color: white; font-size: 13px; font-weight: 600; white-space: nowrap;" data-editable="hero-section-pill3">Butuh Dana</div>
        <div style="padding: 8px 14px; border-radius: 20px; color: white; font-size: 13px; font-weight: 600; white-space: nowrap;" data-editable="hero-section-pill4">Bangun Usaha</div>
      </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'hero-section-logo', label: 'Logo PNG / SVG', defaultValue: '/logo-pegadaian.png', type: 'image' },
      { id: 'hero-section-bg', label: 'Background Image (Upload / URL)', defaultValue: '/background.png', type: 'image' },
      { id: 'hero-section-nav1', label: 'Nav 1', defaultValue: 'Individu' },
      { id: 'hero-section-nav2', label: 'Nav 2', defaultValue: 'Bisnis' },
      { id: 'hero-section-nav3', label: 'Nav 3', defaultValue: 'Hubungan Investor' },
      { id: 'hero-section-nav4', label: 'Nav 4', defaultValue: 'Tentang Pegadaian' },
      { id: 'hero-section-nav5', label: 'Nav 5', defaultValue: 'Karir' },
      { id: 'hero-section-gold-price', label: 'Gold Price Ticker', defaultValue: 'Harga Jual Emas Pegadaian: Rp 25.880/0.01gr' },
      { id: 'hero-section-main-title', label: 'Main Title', defaultValue: 'Saya Ingin Membeli Emas' },
      { id: 'hero-section-slider-val', label: 'Slider Default Value', defaultValue: '5' },
      { id: 'hero-section-slider-unit', label: 'Slider Unit', defaultValue: 'gr' },
      { id: 'hero-section-cta', label: 'CTA Button Text', defaultValue: 'Temukan Jalan' },
      { id: 'hero-section-pill1', label: 'Pill 1 Text', defaultValue: 'Mulai Investasi' },
      { id: 'hero-section-pill2', label: 'Pill 2 Text', defaultValue: 'Kembangkan' },
      { id: 'hero-section-pill3', label: 'Pill 3 Text', defaultValue: 'Butuh Dana' },
      { id: 'hero-section-pill4', label: 'Pill 4 Text', defaultValue: 'Bangun Usaha' }
    ]
  };
