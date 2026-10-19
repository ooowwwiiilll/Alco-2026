import type { SectionTemplate } from '../../../types';

export const forYouSection: SectionTemplate = {
    id: 'for-you-section',
    name: '[FOR YOU]',
    category: 'PRODUCTS',
    description: 'Pegadaian For You section with curated events and promos showcase for desktop and mobile.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="for-you-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 182px; padding-right: 182px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 48px; display: flex; box-sizing: border-box;">
        <div style="width: 1076px; max-width: 100%; overflow: hidden; justify-content: space-between; align-items: flex-end; display: flex; box-sizing: border-box;">
            <div style="width: 449px; max-width: 100%; color: var(--text-neutral-default, #013428); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word;" data-editable="foryou-title">Lorem Ipsum Dolor</div>
            <div style="width: 528px; max-width: 100%; color: var(--text-neutral-disabled, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word;" data-editable="foryou-subtitle">Lorem ipsum dolor sit amet<br/>consectetur adipiscing elit</div>
        </div>
        <div style="width: 1076px; max-width: 100%; justify-content: center; align-items: flex-start; gap: 20px; display: flex; box-sizing: border-box; flex-wrap: wrap;">
            <div style="flex: 1 1 450px; min-width: 0; padding-top: 16px; padding-bottom: 24px; padding-left: 16px; padding-right: 16px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 24px; flex-direction: column; justify-content: center; align-items: center; gap: 24px; display: flex; box-sizing: border-box;">
                <div style="align-self: stretch; height: 496px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
                    <div style="align-self: stretch; flex: 1 1 0; position: relative; overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex;">
                        <img style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; object-fit: cover;" src="/background.png" alt="Card Background 1" data-editable="foryou-bg1" />
                        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.60) 100%); pointer-events: none;"></div>
                        <div style="align-self: stretch; flex: 1 1 0; padding: 32px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 24px; display: flex; position: relative; z-index: 2;">
                            <div style="width: 100%; max-width: 432px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: flex;">
                                <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word;" data-editable="foryou-card1-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .</div>
                            </div>
                        </div>
                    </div>
                    <div style="align-self: stretch; flex: 1 1 0; position: relative; overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex;">
                        <img style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; object-fit: cover;" src="/background.png" alt="Event Background" data-editable="foryou-bg2" />
                        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.60) 100%); pointer-events: none;"></div>
                        <div style="align-self: stretch; flex: 1 1 0; padding: 32px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; position: relative; z-index: 2;">
                            <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="foryou-card2-badge">Event</div>
                            <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: flex;">
                                <div style="flex: 1 1 0; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: flex;">
                                    <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word;" data-editable="foryou-card2-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    <div style="justify-content: center; align-items: center; gap: 8px; display: flex;">
                                        <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden;">
                                            <div style="width: 13.33px; height: 13.33px; left: 1.33px; top: 1.34px; position: absolute; outline: 1px var(--icon-neutral-onDark-default, white) solid; outline-offset: -0.50px;"></div>
                                        </div>
                                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="foryou-card2-date">1 - 30 Jan 2026</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;" class="hover:opacity-80 transition-opacity">
                    <div style="color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word;" data-editable="foryou-btn1">Lihat Event Lainnya</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px;"></div>
                    </div>
                </div>
            </div>
            <div style="flex: 1 1 450px; min-width: 0; padding-top: 16px; padding-bottom: 24px; padding-left: 16px; padding-right: 16px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 24px; flex-direction: column; justify-content: center; align-items: center; gap: 24px; display: flex; box-sizing: border-box;">
                <div style="align-self: stretch; height: 496px; position: relative; overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex;">
                    <img style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; object-fit: cover;" src="/background.png" alt="Promo Background" data-editable="foryou-promo-bg" />
                    <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.60) 100%); pointer-events: none;"></div>
                    <div style="align-self: stretch; flex: 1 1 0; padding: 32px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; position: relative; z-index: 2; width: 100%;">
                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="foryou-promo-badge">Promo</div>
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
                            <div style="align-self: stretch; justify-content: center; align-items: center; gap: 8px; display: flex; flex-direction: column; width: 100%;">
                                <div style="width: 100%; max-width: 432px; padding: 24px; background: var(--background-surface-neutral-inverse, rgba(255, 255, 255, 0.12)); border-radius: 16px; backdrop-filter: blur(12px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex; box-sizing: border-box;">
                                    <div style="align-self: stretch; color: white; font-size: 20px; font-family: 'Nunito Sans', sans-serif; font-weight: 700; line-height: 28px; word-wrap: break-word;" data-editable="foryou-promo1-title">Manfaatkan Asetmu<br/>dan Dapatkan Cashback Hingga 50rb</div>
                                    <div style="justify-content: center; align-items: center; gap: 8px; display: flex;">
                                        <div style="width: 20px; height: 20px; position: relative; overflow: hidden;">
                                            <div style="width: 16.67px; height: 16.67px; left: 1.66px; top: 1.67px; position: absolute; outline: 1.67px rgba(255, 255, 255, 0.70) solid; outline-offset: -0.83px;"></div>
                                            <div style="width: 2.50px; height: 8.33px; left: 10px; top: 5px; position: absolute; outline: 1.67px rgba(255, 255, 255, 0.70) solid; outline-offset: -0.83px;"></div>
                                        </div>
                                        <div style="color: rgba(255, 255, 255, 0.70); font-size: 14px; font-family: 'Nunito Sans', sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="foryou-promo1-date">24 - 31 Sep 2026</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;" class="hover:opacity-80 transition-opacity">
                    <div style="color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word;" data-editable="foryou-btn2">Lihat Promo Lainnya</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="for-you-section-mobile w-full overflow-hidden bg-white flex flex-col justify-start items-center">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 32px; display: flex; box-sizing: border-box;">
        <div style="width: 100%; max-width: 354px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
            <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #013428); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word;" data-editable="foryou-title">Lorem Ipsum Dolor</div>
            <div style="align-self: stretch; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word;" data-editable="foryou-subtitle">Lorem ipsum dolor sit amet consectetur adipiscing elit</div>
        </div>
        <div style="width: 100%; max-width: 354px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 16px; display: flex;">
            <div style="align-self: stretch; padding-top: 8px; padding-bottom: 16px; padding-left: 8px; padding-right: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 12px; flex-direction: column; justify-content: center; align-items: center; gap: 16px; display: flex;">
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
                    <div style="align-self: stretch; height: 170px; position: relative; overflow: hidden; border-radius: 8px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex;">
                        <img style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; object-fit: cover;" src="/background.png" alt="Card Background 1" data-editable="foryou-bg1" />
                        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.60) 100%); pointer-events: none;"></div>
                        <div style="align-self: stretch; flex: 1 1 0; padding: 24px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 24px; display: flex; position: relative; z-index: 2;">
                            <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: flex;">
                                <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word;" data-editable="foryou-card1-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                            </div>
                        </div>
                    </div>
                    <div style="align-self: stretch; height: 170px; position: relative; overflow: hidden; border-radius: 8px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex;">
                        <img style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; object-fit: cover;" src="/background.png" alt="Event Background" data-editable="foryou-bg2" />
                        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.60) 100%); pointer-events: none;"></div>
                        <div style="align-self: stretch; flex: 1 1 0; padding: 24px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; position: relative; z-index: 2;">
                            <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="foryou-card2-badge">Event</div>
                            <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: flex;">
                                <div style="flex: 1 1 0; flex-direction: column; justify-content: center; align-items: flex-start; gap: 8px; display: flex;">
                                    <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word;" data-editable="foryou-card2-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    <div style="justify-content: center; align-items: center; gap: 8px; display: flex;">
                                        <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden;">
                                            <div style="width: 13.33px; height: 13.33px; left: 1.33px; top: 1.34px; position: absolute; outline: 1px var(--icon-neutral-onDark-default, white) solid; outline-offset: -0.50px;"></div>
                                        </div>
                                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="foryou-card2-date">1 - 30 Sep 2026</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;" class="hover:opacity-80 transition-opacity">
                    <div style="color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word;" data-editable="foryou-btn1">Lihat Event Lainnya</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px;"></div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; padding-top: 8px; padding-bottom: 16px; padding-left: 8px; padding-right: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 12px; flex-direction: column; justify-content: center; align-items: center; gap: 16px; display: flex;">
                <div style="align-self: stretch; height: 338px; position: relative; overflow: hidden; border-radius: 8px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex;">
                    <img style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; object-fit: cover;" src="/background.png" alt="Promo Background" data-editable="foryou-promo-bg" />
                    <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.60) 100%); pointer-events: none;"></div>
                    <div style="align-self: stretch; flex: 1 1 0; padding: 24px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; position: relative; z-index: 2; width: 100%;">
                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word;" data-editable="foryou-promo-badge">Promo</div>
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
                            <div style="align-self: stretch; justify-content: center; align-items: center; gap: 8px; display: flex; flex-direction: column; width: 100%;">
                                <div style="width: 100%; max-width: 290px; align-self: stretch; padding: 24px; background: var(--background-surface-neutral-inverse, rgba(255, 255, 255, 0.12)); border-radius: 12px; backdrop-filter: blur(12px); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex; box-sizing: border-box;">
                                    <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word;" data-editable="foryou-promo1-title">Manfaatkan Asetmu<br/>dan Dapatkan Cashback Hingga 50rb</div>
                                    <div style="justify-content: center; align-items: center; gap: 8px; display: flex;">
                                        <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden;">
                                            <div style="width: 13.33px; height: 13.33px; left: 1.33px; top: 1.34px; position: absolute; outline: 1px var(--icon-neutral-onDark-default, white) solid; outline-offset: -0.50px;"></div>
                                        </div>
                                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="foryou-promo1-date">24 - 31 Sep 2026</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;" class="hover:opacity-80 transition-opacity">
                    <div style="color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word;" data-editable="foryou-btn2">Lihat Promo Lainnya</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'foryou-title', label: 'Section Title', defaultValue: 'Lorem Ipsum Dolor' },
      { id: 'foryou-subtitle', label: 'Section Subtitle', defaultValue: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
      { id: 'foryou-bg1', label: 'Card 1 Background Image', defaultValue: '/background.png', type: 'image' },
      { id: 'foryou-bg2', label: 'Card 2 Background Image', defaultValue: '/background.png', type: 'image' },
      { id: 'foryou-promo-bg', label: 'Promo Card Background Image', defaultValue: '/background.png', type: 'image' },
      { id: 'foryou-card1-desc', label: 'Card 1 Description', defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .' },
      { id: 'foryou-card2-badge', label: 'Card 2 Badge', defaultValue: 'Event' },
      { id: 'foryou-card2-title', label: 'Card 2 Title', defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' },
      { id: 'foryou-card2-date', label: 'Card 2 Date', defaultValue: '1 - 30 Jan 2026' },
      { id: 'foryou-btn1', label: 'Button 1 Text', defaultValue: 'Lihat Event Lainnya' },
      { id: 'foryou-promo-badge', label: 'Promo Badge', defaultValue: 'Promo' },
      { id: 'foryou-promo1-title', label: 'Promo Title', defaultValue: 'Manfaatkan Asetmu dan Dapatkan Cashback Hingga 50rb' },
      { id: 'foryou-promo1-date', label: 'Promo Date', defaultValue: '24 - 31 Sep 2026' },
      { id: 'foryou-btn2', label: 'Button 2 Text', defaultValue: 'Lihat Promo Lainnya' }
    ]
  };
