import type { SectionTemplate } from '../../../types';

export const tringSection: SectionTemplate = {
    id: 'tring-section',
    name: '[TRING!]',
    category: 'PRODUCTS',
    description: 'Pegadaian TRING! showcase section with full background image, Pegadaian logo, typography, CTA button, and store downloads.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="tring-section-desktop w-full overflow-hidden bg-[#484E34] flex justify-center">
    <div style="width: 100%; max-width: 1440px; min-height: 762px; padding-left: 182px; padding-right: 182px; padding-top: 120px; padding-bottom: 120px; position: relative; background: #484E34; justify-content: center; align-items: center; gap: 140px; display: inline-flex; box-sizing: border-box; overflow: hidden; margin: 0 auto;">
      <img style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; object-fit: cover;" src="/background.png" alt="TRING Background Web" data-editable="tring-bg-desktop" />
      <div style="width: 1074px; max-width: 100%; padding: 80px 40px; border-radius: 24px; justify-content: flex-start; align-items: center; gap: 80px; display: flex; position: relative; z-index: 2; box-sizing: border-box;">
        <div style="width: 487px; max-width: 100%; min-height: 360px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex;">
          <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex;">
            <div data-variant="On Dark Background" style="height: 36px; display: inline-flex; align-items: center; justify-content: flex-start;">
              <img style="height: 36px; width: auto; object-fit: contain; max-width: 220px;" src="/dash-logo.png" alt="Pegadaian" data-editable="tring-logo" />
            </div>
            <div style="align-self: stretch; color: white; font-size: 40px; font-family: Geist, sans-serif; font-weight: 500; line-height: 44px; word-wrap: break-word;" data-editable="tring-title">Lorem Ipsum Dolor Dit Amet Consectetur Adipis</div>
            <div style="padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-onDark-default, white); border-radius: 80px; justify-content: center; align-items: center; gap: 6px; display: inline-flex; cursor: pointer;" class="hover:opacity-90 transition-opacity">
              <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <div style="width: 12px; height: 12px; left: 2px; top: 2px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px;"></div>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="position: relative; z-index: 1;">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </div>
              <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word;" data-editable="tring-btn-text">Download Tring!</div>
            </div>
          </div>
          <div style="justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex; margin-top: 32px;">
            <img style="width: 162px; height: 48px; background: #A7B184; border-radius: 8px; object-fit: cover; cursor: pointer;" src="/background.png" data-editable="tring-store-1" alt="Google Play" />
            <img style="width: 161px; height: 48px; background: #A7B184; border-radius: 8px; object-fit: cover; cursor: pointer;" src="/background.png" data-editable="tring-store-2" alt="App Store" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="tring-section-mobile w-full overflow-hidden bg-[#484E34] flex flex-col justify-start items-center">
    <div style="width: 100%; max-width: 480px; min-height: 920px; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; position: relative; background: #484E34; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 120px; display: inline-flex; box-sizing: border-box; margin: 0 auto;">
      <img style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; object-fit: cover;" src="/background.png" alt="TRING Background Mobile" data-editable="tring-bg-mobile" />
      <div style="align-self: stretch; min-height: 720px; padding-left: 16px; padding-right: 16px; padding-top: 48px; padding-bottom: 48px; border-radius: 20px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: flex; position: relative; z-index: 2; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: flex;">
          <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 16px; display: flex;">
            <div data-variant="On Dark Background" style="height: 44px; display: inline-flex; align-items: center; justify-content: center;">
              <img style="height: 40px; width: auto; object-fit: contain; max-width: 240px;" src="/dash-logo.png" alt="Pegadaian" data-editable="tring-logo" />
            </div>
            <div style="align-self: stretch; text-align: center; color: white; font-size: 40px; font-family: Geist, sans-serif; font-weight: 500; line-height: 44px; word-wrap: break-word;" data-editable="tring-title">Lorem Ipsum Dolor Dit Amet Consectetur Adipis</div>
          </div>
          <div style="padding-left: 32px; padding-right: 32px; padding-top: 16px; padding-bottom: 16px; background: var(--button-onDark-default, white); border-radius: 80px; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;" class="hover:opacity-90 transition-opacity">
            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              <div style="width: 12px; height: 12px; left: 2px; top: 2px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px;"></div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="position: relative; z-index: 1;">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word;" data-editable="tring-btn-text">Download Tring!</div>
          </div>
          <div style="justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex;">
            <img style="width: 149px; height: 44px; background: linear-gradient(0deg, #A7B184 0%, #A7B184 100%); border-radius: 8px; object-fit: cover; cursor: pointer;" src="/background.png" data-editable="tring-store-1" alt="Google Play" />
            <img style="width: 148px; height: 44px; background: linear-gradient(0deg, #A7B184 0%, #A7B184 100%); border-radius: 8px; object-fit: cover; cursor: pointer;" src="/background.png" data-editable="tring-store-2" alt="App Store" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'tring-logo', label: 'TRING! Brand Logo', defaultValue: '/dash-logo.png', type: 'image' },
      { id: 'tring-bg-desktop', label: 'Background Image (Web)', defaultValue: '/background.png', type: 'image' },
      { id: 'tring-bg-mobile', label: 'Background Image (Mobile)', defaultValue: '/background.png', type: 'image' },
      { id: 'tring-title', label: 'Section Title', defaultValue: 'Lorem Ipsum Dolor Dit Amet Consectetur Adipis' },
      { id: 'tring-btn-text', label: 'CTA Button Text', defaultValue: 'Download Tring!' },
      { id: 'tring-store-1', label: 'Store Badge 1', defaultValue: '/background.png', type: 'image' },
      { id: 'tring-store-2', label: 'Store Badge 2', defaultValue: '/background.png', type: 'image' }
    ]
  };
