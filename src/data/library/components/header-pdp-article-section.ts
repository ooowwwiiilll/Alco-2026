import type { SectionTemplate } from '../../../types';

export const headerPdpArticleSection: SectionTemplate = {
    id: 'header-pdp-article-section',
    name: 'HEADER PDP ARTICLE',
    category: 'HERO',
    description: 'Pegadaian HEADER PDP ARTICLE section with header navigation, breadcrumbs (Parent Page / Current Page), and article page title.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="header-pdp-article-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-bottom: 72px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 64px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
            <div data-device="Desktop" data-state="Default" data-theme="On Color" style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; width: 100%;">
                <div data-property-1="Dekstop" style="width: 100%; padding-top: 20px; padding-left: 40px; padding-right: 40px; border-bottom: 1px var(--border-neutral-disabled, #F8F8F8) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; padding-left: 32px; padding-right: 32px; border-radius: 999px; justify-content: space-between; align-items: center; display: inline-flex">
                        <div data-variant="White" style="width: 180px; align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                            <div style="width: 50px; height: 22px; position: relative">
                                <div style="width: 17.90px; height: 22px; left: 0px; top: 0px; position: absolute; background: var(--background-brand-Logo-Tring!-green-3, #BFD730)"></div>
                                <div style="width: 17.90px; height: 22px; left: 17.89px; top: 0px; position: absolute; background: var(--background-brand-Logo-Tring!-green-2, #72BF44)"></div>
                                <div style="width: 7.69px; height: 16.79px; left: 14.05px; top: 2.61px; position: absolute; background: var(--background-brand-Logo-Tring!-green-1, #00AB4E)"></div>
                                <div style="width: 21.75px; height: 22px; left: 28.25px; top: 0px; position: absolute; background: var(--background-brand-Logo-Tring!-green-1, #00AB4E)"></div>
                                <div style="width: 12.66px; height: 2.27px; left: 32.80px; top: 5.32px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                <div style="width: 7.89px; height: 2.60px; left: 39.78px; top: 14.09px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                <div style="width: 7.87px; height: 8.19px; left: 39.80px; top: 6.53px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                <div style="width: 7.89px; height: 2.60px; left: 30.58px; top: 14.09px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                <div style="width: 7.87px; height: 8.19px; left: 30.58px; top: 6.53px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                            </div>
                            <div style="width: 92px; height: 20px; position: relative">
                                <div style="width: 10.26px; height: 15.45px; left: 0px; top: 0px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                <div style="width: 8.73px; height: 11.91px; left: 10.98px; top: 3.70px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                <div style="width: 9.17px; height: 16.29px; left: 21.44px; top: 3.70px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                <div style="width: 9.17px; height: 15.10px; left: 43.26px; top: 0.18px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                <div style="width: 9.86px; height: 11.82px; left: 32.20px; top: 3.72px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                <div style="width: 2.32px; height: 11.21px; left: 66.61px; top: 4.07px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                <div style="width: 2.86px; height: 2.86px; left: 66.34px; top: 0.01px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                <div style="width: 8.82px; height: 11.50px; left: 83.17px; top: 3.78px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                <div style="width: 9.86px; height: 11.82px; left: 54.64px; top: 3.72px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                <div style="width: 9.86px; height: 11.82px; left: 71.35px; top: 3.72px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                            </div>
                        </div>
                        <div data-theme="On Color" style="justify-content: flex-start; align-items: center; gap: 24px; display: flex">
                            <div data-state="Selected" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex">
                                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-disabled, #646467); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word">Individu</div>
                                <div style="width: 24px; height: 4px; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                            </div>
                            <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex">
                                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-disabled, #646467); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word">Bisnis</div>
                                <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                            </div>
                            <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex">
                                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-disabled, #646467); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word">Hubungan Investor</div>
                                <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                            </div>
                            <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex">
                                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-disabled, #646467); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word">Tentang Pegadaian</div>
                                <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                            </div>
                            <div data-state="Default" data-theme="On Color" style="height: 64px; padding-top: 22px; flex-direction: column; justify-content: space-between; align-items: center; display: inline-flex">
                                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-disabled, #646467); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word">Karir</div>
                                <div style="width: 24px; height: 4px; opacity: 0; background: var(--border-brand-primary, #CCEA68); border-top-left-radius: 32px; border-top-right-radius: 32px"></div>
                            </div>
                        </div>
                        <div style="justify-content: flex-end; align-items: center; gap: 24px; display: flex">
                            <div style="justify-content: flex-start; align-items: center; gap: 16px; display: flex">
                                <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--border-neutral-disabled, #F8F8F8) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                        <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                            <div style="width: 12px; height: 13.33px; left: 2px; top: 1.34px; position: absolute; outline: 1.50px var(--icon-neutral-default, #323234) solid; outline-offset: -0.75px"></div>
                                        </div>
                                    </div>
                                </div>
                                <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--border-neutral-disabled, #F8F8F8) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                        <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                            <div style="width: 12px; height: 12px; left: 2px; top: 2px; position: absolute; outline: 1.50px var(--icon-neutral-default, #323234) solid; outline-offset: -0.75px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: flex">
                                <div style="width: 20px; height: 20px; position: relative; overflow: hidden">
                                    <div style="width: 18.75px; height: 9.38px; left: 0.56px; top: 10px; position: absolute; background: var(--background-surface-neutral-grey, #EEEEEF)"></div>
                                    <div style="width: 18.75px; height: 9.38px; left: 0.56px; top: 0.63px; position: absolute; background: var(--background-feedback-error-bold, #F15F43)"></div>
                                </div>
                                <div data-color="White" style="width: 12px; height: 12px; position: relative; overflow: hidden">
                                    <div style="width: 6px; height: 3px; left: 3px; top: 4.50px; position: absolute; outline: 1.50px var(--icon-neutral-default, #323234) solid; outline-offset: -0.75px"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; padding-left: 72px; padding-right: 72px; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                <div style="color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="header-pdp-art-parent">Parent Page</div>
                <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">/</div>
                <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="header-pdp-art-current">Current Page</div>
            </div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 24px; display: flex">
            <div style="width: 540px; text-align: center; justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 48px; font-family: Geist; font-weight: 500; line-height: 56px; word-wrap: break-word" data-editable="header-pdp-art-title">{Page Title} Max 60 characters / 2 lines</div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="header-pdp-article-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-bottom: 48px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 56px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
            <div data-device="Mobile" data-state="Default" data-theme="On Color" style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; width: 100%;">
                <div data-property-1="Mobile" style="width: 100%; overflow: hidden; border-bottom: 1px var(--border-neutral-disabled, #F8F8F8) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                    <div style="width: 100%; height: 60px; padding-top: 14px; padding-bottom: 12px; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex; box-sizing: border-box;">
                        <div style="align-self: stretch; padding-left: 12px; padding-right: 12px; justify-content: space-between; align-items: center; display: inline-flex">
                            <div style="width: 122px; text-align: center; color: var(--icon-neutral-onDark-default, white); font-size: 17px; font-family: SF Pro Text; font-weight: 700; word-wrap: break-word">9:41</div>
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
                                <div style="width: 50px; height: 22px; position: relative">
                                    <div style="width: 17.90px; height: 22px; left: 0px; top: 0px; position: absolute; background: var(--background-brand-Logo-Tring!-green-3, #BFD730)"></div>
                                    <div style="width: 17.90px; height: 22px; left: 17.89px; top: 0px; position: absolute; background: var(--background-brand-Logo-Tring!-green-2, #72BF44)"></div>
                                    <div style="width: 7.69px; height: 16.79px; left: 14.05px; top: 2.61px; position: absolute; background: var(--background-brand-Logo-Tring!-green-1, #00AB4E)"></div>
                                    <div style="width: 21.75px; height: 22px; left: 28.25px; top: 0px; position: absolute; background: var(--background-brand-Logo-Tring!-green-1, #00AB4E)"></div>
                                    <div style="width: 12.66px; height: 2.27px; left: 32.80px; top: 5.32px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                    <div style="width: 7.89px; height: 2.60px; left: 39.78px; top: 14.09px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                    <div style="width: 7.87px; height: 8.19px; left: 39.80px; top: 6.53px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                    <div style="width: 7.89px; height: 2.60px; left: 30.58px; top: 14.09px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                    <div style="width: 7.87px; height: 8.19px; left: 30.58px; top: 6.53px; position: absolute; background: var(--icon-neutral-onDark-default, white)"></div>
                                </div>
                                <div style="width: 92px; height: 20px; position: relative">
                                    <div style="width: 10.26px; height: 15.45px; left: 0px; top: 0px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                    <div style="width: 8.73px; height: 11.91px; left: 10.98px; top: 3.70px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                    <div style="width: 9.17px; height: 16.29px; left: 21.44px; top: 3.70px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                    <div style="width: 9.17px; height: 15.10px; left: 43.26px; top: 0.18px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                    <div style="width: 9.86px; height: 11.82px; left: 32.20px; top: 3.72px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                    <div style="width: 2.32px; height: 11.21px; left: 66.61px; top: 4.07px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                    <div style="width: 2.86px; height: 2.86px; left: 66.34px; top: 0.01px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                    <div style="width: 8.82px; height: 11.50px; left: 83.17px; top: 3.78px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                    <div style="width: 9.86px; height: 11.82px; left: 54.64px; top: 3.72px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                    <div style="width: 9.86px; height: 11.82px; left: 71.35px; top: 3.72px; position: absolute; background: var(--background-page-brand-secondary, #01231B)"></div>
                                </div>
                            </div>
                            <div style="justify-content: flex-end; align-items: center; gap: 2px; display: flex">
                                <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--border-neutral-disabled, #F8F8F8) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                        <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                            <div style="width: 12px; height: 13.33px; left: 2px; top: 1.34px; position: absolute; outline: 1.50px var(--icon-neutral-default, #323234) solid; outline-offset: -0.75px"></div>
                                        </div>
                                    </div>
                                </div>
                                <div data-shape="Square" data-size="Small" data-state="Default" data-type="Inverse" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--border-neutral-disabled, #F8F8F8) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                        <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                            <div style="width: 12px; height: 12px; left: 2px; top: 2px; position: absolute; outline: 1.50px var(--icon-neutral-default, #323234) solid; outline-offset: -0.75px"></div>
                                        </div>
                                    </div>
                                </div>
                                <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                            <div style="width: 12px; height: 4.67px; left: 2px; top: 5.66px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; padding-left: 24px; padding-right: 24px; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                <div style="color: var(--text-neutral-disabled, #B1B1B3); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="header-pdp-art-parent">Parent Page</div>
                <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">/</div>
                <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="header-pdp-art-current">Current Page</div>
            </div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 24px; display: flex">
            <div style="width: 340px; text-align: center; justify-content: flex-end; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 48px; word-wrap: break-word" data-editable="header-pdp-art-title">{Page Title} <br/>Max 60 char</div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'header-pdp-art-parent', label: 'Parent Page Text', defaultValue: 'Parent Page' },
      { id: 'header-pdp-art-current', label: 'Current Page Text', defaultValue: 'Current Page' },
      { id: 'header-pdp-art-title', label: 'Page Title', defaultValue: '{Page Title} Max 60 characters / 2 lines' }
    ]
  };
