import type { SectionTemplate } from '../../../types';

export const namaSection: SectionTemplate = {
    id: 'nama-section',
    name: '[HERO PLP]',
    category: 'HERO',
    description: 'Pegadaian [HERO PLP] header with background visual, breadcrumb segment, navigation bar, title and description.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="nama-section-desktop w-full overflow-hidden bg-[#0A2E1F] flex justify-center">
    <div style="width: 1440px; height: 500px; position: relative; background: linear-gradient(180deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.12) 31%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.12) 65%, rgba(10, 46, 31, 0.60) 100%); overflow: hidden; background-image: url(/background.png); background-size: cover; background-position: center; margin: 0 auto; box-sizing: border-box;">
      <img
        src="/background.png"
        onerror="this.src='/background.png'"
        alt="Background Visual"
        data-editable="nama-section-bg"
        style="width: 1440px; height: 500px; left: 0px; top: 0px; position: absolute; object-fit: cover; z-index: 1;"
      />
      <div style="width: 1440px; height: 500px; left: 0px; top: 0px; position: absolute; background: linear-gradient(180deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.12) 31%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.12) 65%, rgba(10, 46, 31, 0.60) 100%); pointer-events: none; z-index: 2;"></div>
      <div style="width: 1440px; height: 254px; padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; left: 0px; top: 246px; position: absolute; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 100%); backdrop-filter: blur(40px); z-index: 3;"></div>
      <div style="width: 1440px; padding-left: 72px; padding-right: 72px; padding-top: 24px; padding-bottom: 24px; left: 0px; top: 84px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex; z-index: 10;">
        <div style="color: white; font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="nama-section-segment">Segment</div>
        <div style="color: var(--text-neutral-onDark-inverse-2, rgba(255, 255, 255, 0.50)); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word">/</div>
        <div style="color: var(--text-neutral-onDark-inverse-2, rgba(255, 255, 255, 0.50)); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="nama-section-crumb">Product or Title</div>
      </div>
      <div data-device="Desktop" data-state="Default" data-theme="On Color" style="left: 0px; top: 0px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; z-index: 20;">
        <div data-property-1="Dekstop" style="width: 1440px; padding-top: 20px; padding-left: 40px; padding-right: 40px; border-bottom: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
          <div style="align-self: stretch; padding-left: 32px; padding-right: 32px; border-radius: 999px; justify-content: space-between; align-items: center; display: inline-flex">
            <div data-variant="White" style="height: 36px; align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; display: flex">
              <img
                src="/logo-pegadaian.png"
                alt="Pegadaian"
                data-editable="nama-section-logo"
                style="height: 32px; width: auto; max-height: 100%; object-fit: contain; cursor: pointer; display: block;"
              />
            </div>
            <div data-theme="On Color" style="justify-content: flex-start; align-items: center; gap: 24px; display: flex">
              <div data-state="Selected" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Individu</div>
                <div style="width: 24px; height: 4px; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
              </div>
              <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Bisnis</div>
                <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
              </div>
              <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Hubungan Investor</div>
                <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
              </div>
              <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Tentang Pegadaian</div>
                <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
              </div>
              <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Karir</div>
                <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
              </div>
            </div>
            <div style="justify-content: flex-end; align-items: center; gap: 24px; display: flex">
              <div style="justify-content: flex-start; align-items: center; gap: 16px; display: flex">
                <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                  <div data-size="Small" style="width: 40px; height: 40px; padding-left: 11px; padding-right: 11px; padding-top: 11px; padding-bottom: 11px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; display: flex">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                    </svg>
                  </div>
                </div>
                <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                  <div data-size="Small" style="width: 40px; height: 40px; padding-left: 11px; padding-right: 11px; padding-top: 11px; padding-bottom: 11px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; display: flex">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
              </div>
              <div style="width: 1px; height: 24px; background: rgba(255, 255, 255, 0.2); margin: 0 4px;"></div>
              <div style="justify-content: flex-start; align-items: center; gap: 6px; display: flex; cursor: pointer;">
                <div style="width: 20px; height: 20px; position: relative; overflow: hidden; border-radius: 50%;">
                  <div style="width: 20px; height: 10px; left: 0px; top: 10px; position: absolute; background: var(--background-surface-neutral-grey, #EEEEEF)"></div>
                  <div style="width: 20px; height: 10px; left: 0px; top: 0px; position: absolute; background: var(--background-feedback-error-bold, #F15F43)"></div>
                </div>
                <div data-color="White" style="width: 12px; height: 12px; position: relative; display: flex; align-items: center; justify-content: center;">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 1296px; left: 72px; top: 308px; position: absolute; justify-content: space-between; align-items: flex-end; display: inline-flex; z-index: 10;">
        <div style="width: 638px; justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 48px; font-family: Geist, sans-serif; font-weight: 500; line-height: 56px; word-wrap: break-word" data-editable="nama-section-title">{Product or Tittle}<br/>Max 2 Line</div>
        <div style="width: 418px; color: var(--text-neutral-onDark-inverse, rgba(255, 255, 255, 0.70)); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="nama-section-desc">Description Max 120 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
      </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="nama-section-mobile w-full overflow-hidden bg-[#0A2E1F] flex justify-center">
    <div style="width: 100%; max-width: 402px; min-height: 498px; position: relative; background: linear-gradient(180deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.12) 31%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.12) 65%, rgba(10, 46, 31, 0.60) 100%); overflow: hidden; background-image: url(/background.png); background-size: cover; background-position: center; margin: 0 auto; box-sizing: border-box;">
      <img
        src="/background.png"
        onerror="this.src='/background.png'"
        alt="Background Visual"
        data-editable="nama-section-bg"
        style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; object-fit: cover; z-index: 1;"
      />
      <div style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; background: linear-gradient(180deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.12) 31%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.12) 65%, rgba(10, 46, 31, 0.60) 100%); pointer-events: none; z-index: 2;"></div>
      <div style="width: 1440px; height: 254px; padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; left: 0px; top: 244px; position: absolute; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 100%); backdrop-filter: blur(40px); z-index: 3;"></div>
      <div data-device="Mobile" data-state="Default" data-theme="On Color" style="width: 100%; left: 0px; top: 0px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; z-index: 20;">
        <div data-property-1="Mobile" style="width: 100%; max-width: 402px; overflow: hidden; border-bottom: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
          <div style="width: 100%; height: 60px; padding-top: 14px; padding-bottom: 12px; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex">
            <div style="align-self: stretch; padding-left: 12px; padding-right: 12px; justify-content: space-between; align-items: center; display: inline-flex">
              <div style="width: 122px; text-align: center; color: var(--icon-neutral-onDark-default, white); font-size: 17px; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif; font-weight: 700; word-wrap: break-word">9:41</div>
              <div style="width: 125px; height: 37px; opacity: 0; background: var(--icon-neutral-onDark-default, white); border-radius: 18px"></div>
              <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 7.33px; display: flex">
                <div style="width: 19.33px; height: 12.33px; background: var(--icon-neutral-onDark-default, white); border-radius: 2px;"></div>
                <div style="width: 16.67px; height: 12.33px; background: var(--icon-neutral-onDark-default, white); border-radius: 2px;"></div>
                <div style="width: 27.33px; height: 13px; border: 1.5px solid white; border-radius: 4px; padding: 1.5px; position: relative;">
                  <div style="width: 18px; height: 100%; background: white; border-radius: 1.5px;"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 12px; justify-content: space-between; align-items: center; display: inline-flex">
            <div data-variant="White" style="height: 30px; align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; display: flex">
              <img
                src="/logo-pegadaian.png"
                alt="Pegadaian"
                data-editable="nama-section-logo"
                style="height: 26px; width: auto; max-height: 100%; object-fit: contain; cursor: pointer; display: block;"
              />
            </div>
            <div style="justify-content: flex-end; align-items: center; gap: 8px; display: flex">
              <div data-shape="Square" data-size="Small" style="width: 36px; height: 36px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; display: flex; cursor: pointer;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <div data-shape="Square" data-size="Small" style="width: 36px; height: 36px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; display: flex; cursor: pointer;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <div data-shape="Square" data-size="Small" style="width: 36px; height: 36px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; display: flex; cursor: pointer;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7"></line>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="17" x2="20" y2="17"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 100%; padding-left: 20px; padding-right: 20px; padding-top: 130px; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex; z-index: 10; position: relative;">
        <div style="color: white; font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="nama-section-segment">Segment</div>
        <div style="color: var(--text-neutral-onDark-inverse-2, rgba(255, 255, 255, 0.50)); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word">/</div>
        <div style="color: var(--text-neutral-onDark-inverse-2, rgba(255, 255, 255, 0.50)); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="nama-section-crumb">Product or Title</div>
      </div>
      <div style="width: 100%; padding-left: 20px; padding-right: 20px; padding-top: 24px; padding-bottom: 32px; display: flex; flex-direction: column; gap: 12px; z-index: 10; position: relative;">
        <div style="color: var(--text-neutral-onDark-default, white); font-size: 32px; font-family: Geist, sans-serif; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="nama-section-title">{Product or Tittle}<br/>Max 2 Line</div>
        <div style="color: var(--text-neutral-onDark-inverse, rgba(255, 255, 255, 0.70)); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="nama-section-desc">Description Max 120 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
      </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'nama-section-logo', label: 'Logo Image', defaultValue: '/logo-pegadaian.png', type: 'image' },
      { id: 'nama-section-bg', label: 'Background Image', defaultValue: '/background.png', type: 'image' },
      { id: 'nama-section-segment', label: 'Breadcrumb Segment', defaultValue: 'Segment' },
      { id: 'nama-section-crumb', label: 'Breadcrumb Product/Title', defaultValue: 'Product or Title' },
      { id: 'nama-section-title', label: 'Main Title', defaultValue: '{Product or Tittle}\nMax 2 Line' },
      { id: 'nama-section-desc', label: 'Description', defaultValue: 'Description Max 120 characters and 3 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry' }
    ]
  };
