import type { SectionTemplate } from '../../../types';

export const heroPdpSection: SectionTemplate = {
    id: 'hero-pdp-section',
    name: 'HERO PDP',
    category: 'HERO',
    description: 'Pegadaian HERO PDP section with top navigation bar, gradient background with /background.png image, product name title, and description.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="hero-pdp-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 900px; position: relative; overflow: hidden">
        <img style="width: 100%; height: 900px; left: 0px; top: 0px; position: absolute; object-fit: cover; background: linear-gradient(180deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.12) 31%, rgba(0.31, 1.45, 0.98, 0) 50%, rgba(0.31, 1.45, 0.98, 0.12) 65%, rgba(10, 46, 31, 0.60) 100%)" src="/background.png" alt="Hero PDP Background" />
        <div style="width: 100%; height: 570px; padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; left: 0px; top: 330px; position: absolute; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 100%); backdrop-filter: blur(40px)"></div>
        <div data-device="Desktop" data-state="Default" data-theme="On Color" style="left: 0px; top: 0px; position: absolute; width: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; z-index: 10;">
            <div data-property-1="Dekstop" style="width: 100%; padding-top: 20px; padding-left: 40px; padding-right: 40px; border-bottom: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding-left: 32px; padding-right: 32px; border-radius: 999px; justify-content: space-between; align-items: center; display: inline-flex">
                    <div data-variant="White" style="width: 180px; align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                        <div style="width: 50px; height: 22px; position: relative">
                            <div style="width: 17.90px; height: 22px; left: 0px; top: 0px; position: absolute; background: var(--background-brand-Logo-Tring!-green-3, #BFD730)"></div>
                            <div style="width: 17.90px; height: 22px; left: 17.90px; top: 0px; position: absolute; background: var(--background-brand-Logo-Tring!-green-2, #72BF44)"></div>
                            <div style="width: 7.69px; height: 16.79px; left: 14.05px; top: 2.61px; position: absolute; background: var(--background-brand-Logo-Tring!-green-1, #00AB4E)"></div>
                            <div style="width: 21.75px; height: 22px; left: 28.25px; top: 0px; position: absolute; background: var(--background-brand-Logo-Tring!-green-1, #00AB4E)"></div>
                            <div style="width: 12.66px; height: 2.27px; left: 32.80px; top: 5.32px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                            <div style="width: 7.89px; height: 2.60px; left: 39.78px; top: 14.09px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                            <div style="width: 7.87px; height: 8.19px; left: 39.80px; top: 6.53px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                            <div style="width: 7.89px; height: 2.60px; left: 30.58px; top: 14.09px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                            <div style="width: 7.87px; height: 8.19px; left: 30.58px; top: 6.53px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                        </div>
                        <div style="width: 92px; height: 20px; position: relative">
                            <div style="width: 10.26px; height: 15.45px; left: 0px; top: 0px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                            <div style="width: 8.73px; height: 11.91px; left: 10.99px; top: 3.70px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                            <div style="width: 9.17px; height: 16.29px; left: 21.44px; top: 3.70px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                            <div style="width: 9.17px; height: 15.10px; left: 43.26px; top: 0.18px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                            <div style="width: 9.86px; height: 11.82px; left: 32.20px; top: 3.72px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                            <div style="width: 2.32px; height: 11.21px; left: 66.61px; top: 4.07px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                            <div style="width: 2.86px; height: 2.86px; left: 66.34px; top: 0.01px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                            <div style="width: 8.82px; height: 11.50px; left: 83.17px; top: 3.78px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                            <div style="width: 9.86px; height: 11.82px; left: 54.64px; top: 3.72px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                            <div style="width: 9.86px; height: 11.82px; left: 71.35px; top: 3.72px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                        </div>
                    </div>
                    <div data-theme="On Color" style="justify-content: flex-start; align-items: center; gap: 24px; display: flex">
                        <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word">Individu</div>
                            <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                        <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word">Bisnis</div>
                            <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                        <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word">Hubungan Investor</div>
                            <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                        <div data-state="Selected" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word">Tentang Pegadaian</div>
                            <div style="width: 24px; height: 4px; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                        <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex">
                            <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word">Karir</div>
                            <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                        </div>
                    </div>
                    <div style="justify-content: flex-end; align-items: center; gap: 24px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 16px; display: flex">
                            <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </div>
                                </div>
                            </div>
                            <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: flex">
                            <div style="width: 20px; height: 20px; position: relative; overflow: hidden; border-radius: 50%;">
                                <div style="width: 20px; height: 10px; left: 0px; top: 10px; position: absolute; background: var(--background-surface-neutral-grey, #EEEEEF)"></div>
                                <div style="width: 20px; height: 10px; left: 0px; top: 0px; position: absolute; background: var(--background-feedback-error-bold, #F15F43)"></div>
                            </div>
                            <div data-color="White" style="width: 12px; height: 12px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 1296px; left: 72px; top: 692px; position: absolute; justify-content: space-between; align-items: flex-end; display: inline-flex; z-index: 10;">
            <div style="width: 638px; justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 56px; font-family: Geist; font-weight: 500; line-height: 64px; word-wrap: break-word" data-editable="hero-pdp-title">{Product Name}<br/>Max 2 Line</div>
            <div style="width: 418px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="hero-pdp-desc">Description Max 120 characters and 3 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="hero-pdp-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; min-height: 780px; position: relative; background: linear-gradient(180deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.12) 31%, rgba(0.31, 1.45, 0.98, 0) 50%, rgba(0.31, 1.45, 0.98, 0.12) 65%, rgba(10, 46, 31, 0.60) 100%); overflow: hidden; background-image: url(/background.png); background-size: cover; background-position: center;">
        <div style="width: 100%; height: 254px; padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; left: 0px; top: 526px; position: absolute; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 100%); backdrop-filter: blur(40px)"></div>
        <div data-device="Mobile" data-state="Default" data-theme="On Color" style="left: 0px; top: 0px; position: absolute; width: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex; z-index: 10;">
            <div data-property-1="Mobile" style="width: 100%; overflow: hidden; border-bottom: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
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
                <div style="align-self: stretch; padding-left: 4px; padding-right: 4px; padding-top: 12px; padding-bottom: 12px; backdrop-filter: blur(20px); justify-content: space-between; align-items: center; display: inline-flex; width: 100%; box-sizing: border-box;">
                    <div style="flex: 1 1 0; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; justify-content: space-between; align-items: center; display: flex">
                        <div data-variant="White" style="overflow: hidden; justify-content: flex-start; align-items: center; gap: 4px; display: flex">
                            <div style="width: 50px; height: 22px; position: relative">
                                <div style="width: 17.90px; height: 22px; left: 0px; top: 0px; position: absolute; background: var(--background-brand-Logo-Tring!-green-3, #BFD730)"></div>
                                <div style="width: 17.90px; height: 22px; left: 17.90px; top: 0px; position: absolute; background: var(--background-brand-Logo-Tring!-green-2, #72BF44)"></div>
                                <div style="width: 7.69px; height: 16.79px; left: 14.05px; top: 2.61px; position: absolute; background: var(--background-brand-Logo-Tring!-green-1, #00AB4E)"></div>
                                <div style="width: 21.75px; height: 22px; left: 28.25px; top: 0px; position: absolute; background: var(--background-brand-Logo-Tring!-green-1, #00AB4E)"></div>
                                <div style="width: 12.66px; height: 2.27px; left: 32.80px; top: 5.32px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                <div style="width: 7.89px; height: 2.60px; left: 39.78px; top: 14.09px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                <div style="width: 7.87px; height: 8.19px; left: 39.80px; top: 6.53px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                <div style="width: 7.89px; height: 2.60px; left: 30.58px; top: 14.09px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                <div style="width: 7.87px; height: 8.19px; left: 30.58px; top: 6.53px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                            </div>
                            <div style="width: 92px; height: 20px; position: relative">
                                <div style="width: 10.26px; height: 15.45px; left: 0px; top: 0px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                                <div style="width: 8.73px; height: 11.91px; left: 10.99px; top: 3.70px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                                <div style="width: 9.17px; height: 16.29px; left: 21.44px; top: 3.70px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                                <div style="width: 9.17px; height: 15.10px; left: 43.26px; top: 0.18px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                                <div style="width: 9.86px; height: 11.82px; left: 32.20px; top: 3.72px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                                <div style="width: 2.32px; height: 11.21px; left: 66.61px; top: 4.07px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                                <div style="width: 2.86px; height: 2.86px; left: 66.34px; top: 0.01px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                                <div style="width: 8.82px; height: 11.50px; left: 83.17px; top: 3.78px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                                <div style="width: 9.86px; height: 11.82px; left: 54.64px; top: 3.72px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                                <div style="width: 9.86px; height: 11.82px; left: 71.35px; top: 3.72px; position: absolute; background: var(--background-surface-primary-default, white)"></div>
                            </div>
                        </div>
                        <div style="justify-content: flex-end; align-items: center; gap: 2px; display: flex">
                            <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </div>
                                </div>
                            </div>
                            <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--border-neutral-onDark, rgba(255, 255, 255, 0.12)) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                <div data-size="Small" style="height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: calc(100% - 48px); left: 24px; top: 536px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: inline-flex; z-index: 10;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                <div style="align-self: stretch; justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 48px; word-wrap: break-word" data-editable="hero-pdp-title">{Product Name}<br/>Max 2 Line</div>
                <div style="align-self: stretch; color: var(--text-neutral-onDark-inverse, rgba(255, 255, 255, 0.70)); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="hero-pdp-desc">Description Max 120 characters and 3 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'hero-pdp-title', label: 'Product Name', defaultValue: '{Product Name} Max 2 Line' },
      { id: 'hero-pdp-desc', label: 'Description', defaultValue: 'Description Max 120 characters and 3 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry' }
    ]
  };
