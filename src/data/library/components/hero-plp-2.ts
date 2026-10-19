import type { SectionTemplate } from '../../../types';

export const heroPlp2: SectionTemplate = {
    id: 'hero-plp-2',
    name: 'HERO PLP 2',
    category: 'LANDING',
    description: 'Pegadaian Hero PLP 2 with desktop and mobile layouts, breadcrumbs, navigation header with custom logo, and centered page title and description.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
    <!-- Desktop Layout -->
    <div class="hero-plp-2-desktop w-full overflow-hidden" style="background: var(--background-page-brand-secondary, #01231B); min-height: 600px; position: relative;">
        <div style="width: 1440px; padding-left: 72px; padding-right: 72px; padding-top: 24px; padding-bottom: 24px; left: 0px; top: 84px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
            <div style="color: white; font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="hero-plp-2-segment">Segment</div>
            <div style="color: var(--text-neutral-onDark-inverse-2, rgba(255, 255, 255, 0.50)); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word">/</div>
            <div style="color: var(--text-neutral-onDark-inverse-2, rgba(255, 255, 255, 0.50)); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="hero-plp-2-pagetitle-breadcrumb">Page Title</div>
        </div>
        <div data-device="Desktop" data-state="Default" data-theme="On Color" style="left: 0px; top: 0px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; width: 100%;">
            <div data-property-1="Dekstop" style="width: 1440px; max-width: 100%; padding-top: 20px; padding-left: 40px; padding-right: 40px; border-bottom: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding-left: 32px; padding-right: 32px; border-radius: 999px; justify-content: space-between; align-items: center; display: inline-flex">
                    <div data-variant="White" style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                        <img style="height: 36px; object-fit: contain; display: block;" src="/media_1792223670210_b13a8ab4.png" alt="Pegadaian Logo" data-editable="hero-plp-2-logo" />
                    </div>
                    <div data-theme="On Color" style="justify-content: flex-start; align-items: center; gap: 24px; display: flex">
                        <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Individu</div>
                            <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                        <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Bisnis</div>
                            <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                        <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Hubungan Investor</div>
                            <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                        <div data-state="Selected" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Tentang Pegadaian</div>
                            <div style="width: 24px; height: 4px; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                        <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex; cursor: pointer;">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Karir</div>
                            <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                    </div>
                    <div style="justify-content: flex-end; align-items: center; gap: 24px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 16px; display: flex">
                            <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                                <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="14" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                                <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: flex; cursor: pointer;">
                            <div style="width: 20px; height: 20px; position: relative; overflow: hidden; border-radius: 50%;">
                                <div style="width: 18.75px; height: 9.38px; left: 0.56px; top: 10px; position: absolute; background: var(--background-surface-neutral-grey, #EEEEEF)"></div>
                                <div style="width: 18.75px; height: 9.38px; left: 0.56px; top: 0.63px; position: absolute; background: var(--background-feedback-error-bold, #F15F43)"></div>
                            </div>
                            <div data-color="White" style="width: 12px; height: 12px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="10" height="6" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 100%; max-width: 1296px; padding-left: 72px; padding-right: 72px; left: 0px; top: 236px; position: absolute; flex-direction: column; justify-content: center; align-items: center; gap: 24px; display: inline-flex; box-sizing: border-box; margin: 0 auto; right: 0; margin-left: auto; margin-right: auto;">
            <div style="width: 540px; max-width: 100%; text-align: center; justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 48px; font-family: Geist, sans-serif; font-weight: 500; line-height: 56px; word-wrap: break-word" data-editable="hero-plp-2-title">{Page Title} Max 60 Characters, 2 Lines</div>
            <div style="width: 540px; max-width: 100%; text-align: center; color: var(--text-neutral-onDark-inverse, rgba(255, 255, 255, 0.70)); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="hero-plp-2-desc">{Page Description} Max 120 characters, 2 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>
    </div>

    <!-- Mobile Layout -->
    <div class="hero-plp-2-mobile w-full overflow-hidden" style="background: var(--background-page-brand-secondary, #01231B); min-height: 600px; position: relative;">
        <div style="left: 24px; top: 156px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
            <div style="color: white; font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="hero-plp-2-segment">Segment</div>
            <div style="color: var(--text-neutral-onDark-inverse-2, rgba(255, 255, 255, 0.50)); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word">/</div>
            <div style="color: var(--text-neutral-onDark-inverse-2, rgba(255, 255, 255, 0.50)); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="hero-plp-2-pagetitle-breadcrumb">Page Title</div>
        </div>
        <div data-device="Mobile" data-state="Default" data-theme="On Color" style="left: 0px; top: 0px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; width: 100%;">
            <div data-property-1="Mobile" style="width: 402px; max-width: 100%; overflow: hidden; border-bottom: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <div style="width: 402px; max-width: 100%; height: 60px; padding-top: 14px; padding-bottom: 12px; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex">
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
                            <img style="height: 32px; object-fit: contain; display: block;" src="/media_1792223670210_b13a8ab4.png" alt="Pegadaian Logo" data-editable="hero-plp-2-logo" />
                        </div>
                        <div style="justify-content: flex-end; align-items: center; gap: 2px; display: flex">
                            <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                                <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="14" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                                <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                                <div data-size="Small" style="height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="14" height="6" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="3" y1="12" x2="21" y2="12"></line>
                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                            <line x1="3" y1="18" x2="21" y2="18"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 100%; max-width: 354px; padding-left: 24px; padding-right: 24px; left: 0px; top: 314px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; box-sizing: border-box; margin: 0 auto; right: 0; margin-left: auto; margin-right: auto;">
            <div style="align-self: stretch; text-align: center; justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 40px; font-family: Geist, sans-serif; font-weight: 500; line-height: 48px; word-wrap: break-word" data-editable="hero-plp-2-title">{Page Title} Max 60 char / 2 lines</div>
            <div style="align-self: stretch; text-align: center; color: var(--text-neutral-onDark-inverse, rgba(255, 255, 255, 0.70)); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="hero-plp-2-desc">{Page Description} Max 120 characters, 2 lines. Lorem Ipsum is simply dummy text .</div>
        </div>
    </div>
</div>`,
    editableFields: [
      { id: 'hero-plp-2-segment', label: 'Segment Breadcrumb', defaultValue: 'Segment' },
      { id: 'hero-plp-2-pagetitle-breadcrumb', label: 'Page Title Breadcrumb', defaultValue: 'Page Title' },
      { id: 'hero-plp-2-logo', label: 'Logo Image', defaultValue: '/media_1792223670210_b13a8ab4.png', type: 'image' },
      { id: 'hero-plp-2-title', label: 'Page Title', defaultValue: '{Page Title} Max 60 Characters, 2 Lines' },
      { id: 'hero-plp-2-desc', label: 'Page Description', defaultValue: '{Page Description} Max 120 characters, 2 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
    ]
  };
