import type { SectionTemplate } from '../../../types';

export const goldPriceSection: SectionTemplate = {
    id: 'gold-price-section',
    name: '[GOLD PRICE]',
    category: 'PRODUCTS',
    description: 'Official Pegadaian Gold Price (Harga Emas) section with live rate tables for Galeri 24, ANTAM, and UBS.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="gold-price-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 182px; padding-right: 182px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: flex; box-sizing: border-box;">
        <div style="width: 100%; color: var(--text-neutral-default, #013428); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word; text-align: center;" data-editable="gold-price-title">Lorem ipsum Dolor Sit Amet Consectetur</div>
        <div style="width: 1076px; max-width: 100%; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 20px; display: flex; box-sizing: border-box;">
            <div style="flex: 1 1 450px; min-width: 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
                <div style="align-self: stretch; height: 562px; position: relative; overflow: hidden; border-radius: 24px; width: 100%;">
                    <img style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; object-fit: cover;" src="/background.png" data-editable="gold-price-img" alt="Gold Visual" />
                </div>
                <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="gold-price-date">Diperbarui 11  Sep 2026 | 06:48 WIB</div>
                </div>
            </div>
            <div style="flex: 1 1 450px; min-width: 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
                <div style="align-self: stretch; padding-top: 24px; background: var(--text-neutral-onDark-default, white); overflow: hidden; border-radius: 24px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex;">
                    <div style="align-self: stretch; padding-left: 24px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: flex;">
                        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: flex;">
                            <div style="color: var(--text-neutral-default, #013428); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word;">Harga Emas Batangan</div>
                        </div>
                        <div style="align-self: stretch; border-bottom: 1px var(--divider-default, #E0E0E1) solid; justify-content: flex-start; align-items: center; display: flex;">
                            <div style="flex: 1 1 0; padding-bottom: 16px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;" data-editable="gold-price-tab-1">
                                <div style="color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word;">Galeri 24</div>
                            </div>
                            <div style="flex: 1 1 0; padding-bottom: 16px; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;" data-editable="gold-price-tab-2">
                                <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word;">ANTAM</div>
                            </div>
                            <div style="flex: 1 1 0; padding-bottom: 16px; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;" data-editable="gold-price-tab-3">
                                <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word;">UBS</div>
                            </div>
                        </div>
                    </div>
                    <div style="align-self: stretch; position: relative; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; width: 100%;">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex; width: 100%;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-brand-primary-subtle, #EDF8CA); justify-content: flex-start; align-items: center; gap: 12px; display: flex;">
                                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word;">Satuan</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-brand-primary-subtle, #EDF8CA); justify-content: flex-start; align-items: center; gap: 12px; display: flex;">
                                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word;">Harga Beli</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 0px; outline: 1px var(--divider-default, #E0E0E1) solid; outline-offset: -0.50px;"></div>
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">0.5 Gr</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">Rp 1.369.000</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 0px; outline: 1px var(--divider-default, #E0E0E1) solid; outline-offset: -0.50px;"></div>
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">1 Gr</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">Rp 2.606.000</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 0px; outline: 1px var(--divider-default, #E0E0E1) solid; outline-offset: -0.50px;"></div>
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">2 Gr</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">Rp 5.147.000</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 0px; outline: 1px var(--divider-default, #E0E0E1) solid; outline-offset: -0.50px;"></div>
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">5 Gr</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">Rp 12.773.000</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 0px; outline: 1px var(--divider-default, #E0E0E1) solid; outline-offset: -0.50px;"></div>
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">10 Gr</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">Rp 25.478.000</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 0px; outline: 1px var(--divider-default, #E0E0E1) solid; outline-offset: -0.50px;"></div>
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">25 Gr</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">Rp 63.352.000</div>
                            </div>
                        </div>
                        <div style="width: 100%; height: 103px; left: 0px; bottom: 0px; position: absolute; background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 100%); pointer-events: none;"></div>
                    </div>
                </div>
                <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="gold-price-date">Diperbarui 11  Sep 2026 | 06:48 WIB</div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="gold-price-section-mobile w-full overflow-hidden bg-white flex flex-col justify-start items-center">
    <div style="width: 100%; height: 100%; padding-left: 16px; padding-right: 16px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); flex-direction: column; justify-content: center; align-items: center; gap: 32px; display: flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #013428); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word;" data-editable="gold-price-title">Lorem ipsum Dolor Sit Amet Consectetur</div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: flex;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
                <div style="width: 100%; height: 512px; position: relative; overflow: hidden; border-radius: 16px; margin: 0 auto; max-width: 100%;">
                    <img style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; object-fit: cover;" src="/background.png" data-editable="gold-price-img" alt="Gold Visual" />
                </div>
                <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="gold-price-date">Diperbarui 11  Sep 2026 | 06:48 WIB</div>
                </div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;">
                <div style="align-self: stretch; padding-top: 24px; overflow: hidden; border-radius: 16px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex;">
                    <div style="align-self: stretch; padding-left: 24px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex;">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
                            <div style="color: var(--text-neutral-default, #013428); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word;">Harga Emas Batangan</div>
                        </div>
                        <div style="align-self: stretch; border-bottom: 1px var(--divider-default, #E0E0E1) solid; justify-content: flex-start; align-items: center; display: flex;">
                            <div style="flex: 1 1 0; padding-bottom: 16px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;" data-editable="gold-price-tab-1">
                                <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word;">Galeri 24</div>
                            </div>
                            <div style="flex: 1 1 0; padding-bottom: 16px; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;" data-editable="gold-price-tab-2">
                                <div style="color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word;">ANTAM</div>
                            </div>
                            <div style="flex: 1 1 0; padding-bottom: 16px; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex; cursor: pointer;" data-editable="gold-price-tab-3">
                                <div style="color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word;">UBS</div>
                            </div>
                        </div>
                    </div>
                    <div style="align-self: stretch; position: relative; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; width: 100%;">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex; width: 100%;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-brand-primary-subtlest, #F8FCEB); justify-content: flex-start; align-items: center; gap: 12px; display: flex;">
                                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word;">Satuan</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-brand-primary-subtlest, #F8FCEB); justify-content: flex-start; align-items: center; gap: 12px; display: flex;">
                                <div style="justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word;">Harga Beli</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 0px; outline: 1px var(--divider-default, #E0E0E1) solid; outline-offset: -0.50px;"></div>
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">0.5 Gr</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">Rp 1.369.000</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 0px; outline: 1px var(--divider-default, #E0E0E1) solid; outline-offset: -0.50px;"></div>
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">1 Gr</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">Rp 2.606.000</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 0px; outline: 1px var(--divider-default, #E0E0E1) solid; outline-offset: -0.50px;"></div>
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">2 Gr</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">Rp 5.147.000</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 0px; outline: 1px var(--divider-default, #E0E0E1) solid; outline-offset: -0.50px;"></div>
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">5 Gr</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">Rp 12.773.000</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 0px; outline: 1px var(--divider-default, #E0E0E1) solid; outline-offset: -0.50px;"></div>
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">10 Gr</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">Rp 25.478.000</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 0px; outline: 1px var(--divider-default, #E0E0E1) solid; outline-offset: -0.50px;"></div>
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: flex;">
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">25 Gr</div>
                            </div>
                            <div style="flex: 1 1 0; height: 64px; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                                <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;">Rp 63.352.000</div>
                            </div>
                        </div>
                        <div style="width: 100%; height: 103px; left: 0px; bottom: 0px; position: absolute; background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 100%); pointer-events: none;"></div>
                    </div>
                </div>
                <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; justify-content: flex-start; align-items: center; gap: 10px; display: flex;">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="gold-price-date">Diperbarui 11  Sep 2026 | 06:48 WIB</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'gold-price-title', label: 'Section Title', defaultValue: 'Lorem ipsum Dolor Sit Amet Consectetur' },
      { id: 'gold-price-img', label: 'Promo Image', defaultValue: '/background.png', type: 'image' },
      { id: 'gold-price-date', label: 'Update Timestamp', defaultValue: 'Diperbarui 11  Sep 2026 | 06:48 WIB' }
    ]
  };
