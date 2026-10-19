import type { SectionTemplate } from '../../../types';

export const heroPdp2Section: SectionTemplate = {
    id: 'hero-pdp-2-section',
    name: 'HERO PDP 2',
    category: 'HERO',
    description: 'Pegadaian HERO PDP 2 section with full background image, header top navigation, breadcrumbs, product title, description, and primary CTA button.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="hero-pdp-2-section-desktop w-full overflow-hidden bg-[#082117] flex justify-center">
    <div style="width: 1440px; height: 900px; position: relative; overflow: hidden; background: linear-gradient(180deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.12) 31%, rgba(0.31, 1.45, 0.98, 0) 50%, rgba(0.31, 1.45, 0.98, 0.12) 65%, rgba(10, 46, 31, 0.60) 100%); background-image: url('/background.png'); background-size: cover; background-position: center; box-sizing: border-box;">
        <div style="width: 1440px; height: 570px; padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; left: 0px; top: 330px; position: absolute; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 100%); backdrop-filter: blur(40px)"></div>
        <div style="width: 1296px; left: 72px; top: 656px; position: absolute; justify-content: space-between; align-items: flex-end; display: inline-flex">
            <div style="width: 638px; justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 56px; font-family: Geist; font-weight: 500; line-height: 64px; word-wrap: break-word" data-editable="hero-pdp-2-title">{Product Name}<br/>Max 2 Line</div>
            <div style="width: 418px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="hero-pdp-2-desc">Description Max 120 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex; cursor: pointer;">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="hero-pdp-2-button">Beli Emas di Tring!</div>
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
        <div data-device="Desktop" data-state="Default" data-theme="On Color" style="left: 0px; top: 0px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
            <div data-property-1="Dekstop" style="width: 1440px; padding-top: 20px; padding-left: 40px; padding-right: 40px; border-bottom: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <div style="align-self: stretch; padding-left: 32px; padding-right: 32px; border-radius: 999px; justify-content: space-between; align-items: center; display: inline-flex">
                    <div data-variant="White" style="width: 180px; align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                        <img src="/logo-pegadaian.png" alt="Pegadaian Logo" style="height: 32px; width: auto; object-fit: contain;" onerror="this.style.display='none'" />
                    </div>
                    <div data-theme="On Color" style="justify-content: flex-start; align-items: center; gap: 24px; display: flex">
                        <div data-state="Selected" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="hero-pdp-2-nav-1">Individu</div>
                            <div style="width: 24px; height: 4px; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                        <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="hero-pdp-2-nav-2">Bisnis</div>
                            <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                        <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="hero-pdp-2-nav-3">Hubungan Investor</div>
                            <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                        <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="hero-pdp-2-nav-4">Tentang Pegadaian</div>
                            <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                        <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="hero-pdp-2-nav-5">Karir</div>
                            <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                    </div>
                    <div style="justify-content: flex-end; align-items: center; gap: 24px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 16px; display: flex">
                            <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                                <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                                <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: flex; cursor: pointer;">
                            <div style="width: 20px; height: 14px; position: relative; border-radius: 2px; overflow: hidden;">
                                <div style="width: 20px; height: 7px; left: 0; top: 0; position: absolute; background: #ED4C5C"></div>
                                <div style="width: 20px; height: 7px; left: 0; top: 7px; position: absolute; background: #F9F9F9"></div>
                            </div>
                            <div data-color="White" style="width: 12px; height: 12px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 1440px; padding-left: 72px; padding-right: 72px; padding-top: 24px; padding-bottom: 24px; left: 0px; top: 84px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
            <div style="color: white; font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="hero-pdp-2-breadcrumb-1">Segment</div>
            <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">/</div>
            <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="hero-pdp-2-breadcrumb-2">Product or Title</div>
            <div style="color: var(--text-neutral-onDark-inverse-2, rgba(255, 255, 255, 0.50)); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">/</div>
            <div style="color: var(--text-neutral-onDark-inverse-2, rgba(255, 255, 255, 0.50)); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="hero-pdp-2-breadcrumb-3">Product Name</div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="hero-pdp-2-section-mobile w-full overflow-hidden bg-[#082117] flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; min-height: 780px; position: relative; background: linear-gradient(180deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.12) 31%, rgba(0.31, 1.45, 0.98, 0) 50%, rgba(0.31, 1.45, 0.98, 0.12) 65%, rgba(10, 46, 31, 0.60) 100%); overflow: hidden; background-image: url('/background.png'); background-size: cover; background-position: center; box-sizing: border-box;">
        <div style="width: 100%; height: 254px; padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; left: 0px; top: 526px; position: absolute; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 100%); backdrop-filter: blur(40px)"></div>
        <div data-device="Mobile" data-state="Default" data-theme="On Color" style="left: 0px; top: 0px; width: 100%; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
            <div data-property-1="Mobile" style="width: 100%; overflow: hidden; border-bottom: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <div style="width: 100%; height: 60px; padding-top: 14px; padding-bottom: 12px; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex">
                    <div style="align-self: stretch; padding-left: 12px; padding-right: 12px; justify-content: space-between; align-items: center; display: inline-flex">
                        <div style="width: 122px; text-align: center; color: var(--icon-neutral-onDark-default, white); font-size: 17px; font-family: SF Pro Text, sans-serif; font-weight: 700; word-wrap: break-word">9:41</div>
                        <div style="width: 125px; height: 37px; opacity: 0; background: var(--icon-neutral-onDark-default, white); border-radius: 18px"></div>
                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 7.33px; display: flex">
                            <div style="width: 19.33px; height: 12.33px; background: var(--icon-neutral-onDark-default, white)"></div>
                            <div style="width: 16.67px; height: 12.33px; background: var(--icon-neutral-onDark-default, white)"></div>
                            <div style="width: 27.33px; height: 13px; background: var(--icon-neutral-onDark-default, white)"></div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; padding-left: 4px; padding-right: 4px; padding-top: 12px; padding-bottom: 12px; backdrop-filter: blur(20px); justify-content: space-between; align-items: center; display: inline-flex">
                    <div style="flex: 1 1 0; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; justify-content: space-between; align-items: center; display: flex">
                        <div data-variant="White" style="overflow: hidden; justify-content: flex-start; align-items: center; gap: 4px; display: flex">
                            <img src="/logo-pegadaian.png" alt="Pegadaian Logo" style="height: 28px; width: auto; object-fit: contain;" onerror="this.style.display='none'" />
                        </div>
                        <div style="justify-content: flex-end; align-items: center; gap: 2px; display: flex">
                            <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                                <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                                <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                                <div data-size="Small" style="height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="3" y1="9" x2="21" y2="9"></line>
                                            <line x1="3" y1="15" x2="21" y2="15"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: calc(100% - 48px); left: 24px; top: 440px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: inline-flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                <div style="align-self: stretch; justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 48px; word-wrap: break-word" data-editable="m-hero-pdp-2-title">{Product Name}<br/>Max 2 Line</div>
                <div style="align-self: stretch; color: var(--text-neutral-onDark-inverse, rgba(255, 255, 255, 0.70)); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-hero-pdp-2-desc">Description Max 120 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
            </div>
            <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 20px; padding-right: 20px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex; cursor: pointer;">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="m-hero-pdp-2-button">Beli Emas di Tring!</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 100%; padding-left: 24px; padding-right: 24px; padding-top: 20px; padding-bottom: 20px; left: 0px; top: 132px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex; box-sizing: border-box;">
            <div style="color: white; font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-hero-pdp-2-breadcrumb-1">Segment</div>
            <div style="color: var(--text-neutral-onDark-default, white); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">/</div>
            <div style="color: var(--text-neutral-onDark-default, white); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-hero-pdp-2-breadcrumb-2">Product or Title</div>
            <div style="color: var(--text-neutral-onDark-inverse-2, rgba(255, 255, 255, 0.50)); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">/</div>
            <div style="color: var(--text-neutral-onDark-inverse-2, rgba(255, 255, 255, 0.50)); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-hero-pdp-2-breadcrumb-3">Product Name</div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'hero-pdp-2-title', label: 'Product Name Title', defaultValue: '{Product Name}\nMax 2 Line' },
      { id: 'hero-pdp-2-desc', label: 'Description', defaultValue: 'Description Max 120 characters and 3 Line Max.\nLorem Ipsum is simply dummy text of the printing and typesetting industry' },
      { id: 'hero-pdp-2-button', label: 'Button Text', defaultValue: 'Beli Emas di Tring!' },
      { id: 'hero-pdp-2-breadcrumb-1', label: 'Breadcrumb 1', defaultValue: 'Segment' },
      { id: 'hero-pdp-2-breadcrumb-2', label: 'Breadcrumb 2', defaultValue: 'Product or Title' },
      { id: 'hero-pdp-2-breadcrumb-3', label: 'Breadcrumb 3', defaultValue: 'Product Name' }
    ]
  };
