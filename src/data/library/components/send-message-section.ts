import type { SectionTemplate } from '../../../types';

export const sendMessageSection: SectionTemplate = {
    id: 'send-message-section',
    name: 'SEND MESSAGE',
    category: 'CONTENT',
    description: 'Pegadaian SEND MESSAGE section with newsletter form and contact actions.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="send-message-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex; box-sizing: border-box;">
        <div style="width: 528px; align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: inline-flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: flex">
                <div data-size="Large" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                    <div data-size="Large" style="height: 40px; min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="send-msg-badge">Text Badge</div>
                    </div>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="send-msg-title">Title Content Max 64 character,  2 Line Max</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="send-msg-desc">Description Max 180 characters and 2 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg </div>
                </div>
            </div>
            <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: flex">
                <div style="justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
                    <div style="padding: 16px; background: var(--background-brand-primary-subtle, #EDF8CA); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div data-color="Brand" style="width: 24px; height: 24px; position: relative; overflow: hidden">
                            <div style="width: 18px; height: 20px; left: 3px; top: 2px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                    </div>
                    <div style="width: 320px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-cc-title">Pegadaian Call Center</div>
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="send-msg-cc-val">1500 569</div>
                    </div>
                </div>
                <div style="justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
                    <div style="padding: 16px; background: var(--background-brand-primary-subtle, #EDF8CA); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div data-color="Brand" style="width: 24px; height: 24px; position: relative; overflow: hidden">
                            <div style="width: 18.61px; height: 18.61px; left: 2.93px; top: 2.55px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                    </div>
                    <div style="width: 320px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-phone-title">Telepon</div>
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="send-msg-phone-val">(021) 8581 162 / (021) 8063 5162</div>
                    </div>
                </div>
                <div style="justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
                    <div style="padding: 16px; background: var(--background-brand-primary-subtle, #EDF8CA); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="width: 24px; height: 24px; position: relative; overflow: hidden">
                            <div style="width: 16.78px; height: 16.77px; left: 3.60px; top: 3.60px; position: absolute; outline: 1.20px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.60px"></div>
                            <div style="width: 9.92px; height: 9.29px; left: 7.12px; top: 7.43px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                        </div>
                    </div>
                    <div style="width: 320px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-wa-title">WhatsApp Chat</div>
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="send-msg-wa-val">08111 1500 569</div>
                    </div>
                </div>
                <div style="justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                    <div style="padding: 16px; background: var(--background-brand-primary-subtle, #EDF8CA); border-radius: 16px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div data-color="Brand" style="width: 24px; height: 24px; position: relative; overflow: hidden">
                            <div style="width: 20px; height: 16px; left: 2px; top: 4px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                    </div>
                    <div style="flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="width: 320px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-email-title">Email</div>
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="send-msg-email-val">customer.care@pegadaian.co.id</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="flex: 1 1 0; align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 24px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="send-msg-form-title">Title Content Max 64 character,  2 Line Max</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="send-msg-form-desc">Description Max 180 characters and 2 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg </div>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; display: inline-flex">
                        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="send-msg-lbl-name">Nama Lengkap</div>
                            <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="send-msg-ph-name">Masukkan nama lengkap Anda</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
                        <div style="flex: 1 1 0; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; display: flex">
                            <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                                <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="send-msg-lbl-email">Alamat Email</div>
                                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="send-msg-ph-email">Masukkan alamat email Anda</div>
                            </div>
                        </div>
                        <div style="flex: 1 1 0; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; display: flex">
                            <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                                <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="send-msg-lbl-phone"> Nomor Handphone (Opsional)</div>
                                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="send-msg-ph-phone">Masukkan nomor handphone Anda</div>
                            </div>
                        </div>
                    </div>
                    <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
                        <div style="flex: 1 1 0; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; display: flex">
                            <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                                <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="send-msg-lbl-prov">Provinsi</div>
                                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="send-msg-ph-prov">Pilih provinsi</div>
                            </div>
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 8px; height: 4px; left: 4px; top: 6px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                        </div>
                        <div style="flex: 1 1 0; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; display: flex">
                            <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                                <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="send-msg-lbl-city">Kota/Kabupaten</div>
                                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="send-msg-ph-city">Pilih kota/kabupaten</div>
                            </div>
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 8px; height: 4px; left: 4px; top: 6px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                        </div>
                    </div>
                    <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
                        <div style="flex: 1 1 0; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; display: flex">
                            <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                                <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="send-msg-lbl-type">Jenis Pesan</div>
                                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="send-msg-ph-type">Pilih jenis pesan</div>
                            </div>
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 8px; height: 4px; left: 4px; top: 6px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                        </div>
                        <div style="flex: 1 1 0; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: center; display: flex">
                            <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                                <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="send-msg-lbl-prod">Produk atau Layanan</div>
                                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="send-msg-ph-prod">Pilih produk atau layanan</div>
                            </div>
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 8px; height: 4px; left: 4px; top: 6px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                        </div>
                    </div>
                    <div style="align-self: stretch; height: 160px; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="send-msg-lbl-content">Isi Pesan</div>
                            <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="send-msg-ph-content">Tuliskan pertanyaan atau masukkan Anda di sini...</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                        <div style="width: 24px; height: 24px; border-radius: 8px; border: 2px var(--border-neutral-default, #CBCBCD) solid"></div>
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="send-msg-consent">Dengan ini Saya menyatakan setuju untuk memberikan informasi di atas kepada Pegadaian</div>
                    </div>
                </div>
            </div>
            <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <div data-size="Large" style="width: 160px; height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="send-msg-submit">Kirim Pesan</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="send-message-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
      <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
          <div data-size="Large" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
            <div data-size="Large" style="height: 36px; min-width: 80px; padding-left: 14px; padding-right: 14px; padding-top: 6px; padding-bottom: 6px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
              <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="send-msg-badge">Text Badge</div>
            </div>
          </div>
          <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 12px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 28px; font-family: Geist; font-weight: 500; line-height: 34px; word-wrap: break-word" data-editable="send-msg-title">Title Content Max 64 character, 2 Line Max</div>
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-desc">Description Max 180 characters and 2 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg </div>
          </div>
        </div>
        <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
          <div style="justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
            <div style="padding: 12px; background: var(--background-brand-primary-subtle, #EDF8CA); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
              <div data-color="Brand" style="width: 20px; height: 20px; position: relative; overflow: hidden">
                <div style="width: 15px; height: 16px; left: 2.5px; top: 2px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
              </div>
            </div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
              <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="send-msg-cc-title">Pegadaian Call Center</div>
              <div style="color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="send-msg-cc-val">1500 569</div>
            </div>
          </div>
          <div style="justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
            <div style="padding: 12px; background: var(--background-brand-primary-subtle, #EDF8CA); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
              <div data-color="Brand" style="width: 20px; height: 20px; position: relative; overflow: hidden">
                <div style="width: 15px; height: 15px; left: 2.5px; top: 2.5px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
              </div>
            </div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
              <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="send-msg-phone-title">Telepon</div>
              <div style="color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="send-msg-phone-val">(021) 8581 162 / (021) 8063 5162</div>
            </div>
          </div>
          <div style="justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
            <div style="padding: 12px; background: var(--background-brand-primary-subtle, #EDF8CA); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
              <div style="width: 20px; height: 20px; position: relative; overflow: hidden">
                <div style="width: 14px; height: 14px; left: 3px; top: 3px; position: absolute; outline: 1.20px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.60px"></div>
                <div style="width: 8px; height: 8px; left: 6px; top: 6px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
              </div>
            </div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
              <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="send-msg-wa-title">WhatsApp Chat</div>
              <div style="color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="send-msg-wa-val">08111 1500 569</div>
            </div>
          </div>
          <div style="justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
            <div style="padding: 12px; background: var(--background-brand-primary-subtle, #EDF8CA); border-radius: 12px; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
              <div data-color="Brand" style="width: 20px; height: 20px; position: relative; overflow: hidden">
                <div style="width: 16px; height: 13px; left: 2px; top: 3.5px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
              </div>
            </div>
            <div style="flex-direction: column; justify-content: center; align-items: flex-start; gap: 12px; display: inline-flex">
              <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="send-msg-email-title">Email</div>
                <div style="color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="send-msg-email-val">customer.care@pegadaian.co.id</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); border-radius: 20px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
          <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
            <div style="color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="send-msg-form-title">Title Content Max 64 character, 2 Line Max</div>
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-form-desc">Description Max 180 characters and 2 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg </div>
          </div>
          <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
            <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: center; display: inline-flex">
              <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                <div style="color: var(--text-neutral-default, #01231B); font-size: 11px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="send-msg-lbl-name">Nama Lengkap</div>
                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-ph-name">Masukkan nama lengkap Anda</div>
              </div>
            </div>
            <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: center; display: flex">
              <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                <div style="color: var(--text-neutral-default, #01231B); font-size: 11px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="send-msg-lbl-email">Alamat Email</div>
                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-ph-email">Masukkan alamat email Anda</div>
              </div>
            </div>
            <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: center; display: flex">
              <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                <div style="color: var(--text-neutral-default, #01231B); font-size: 11px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="send-msg-lbl-phone">Nomor Handphone (Opsional)</div>
                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-ph-phone">Masukkan nomor handphone Anda</div>
              </div>
            </div>
            <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: center; display: flex">
              <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                <div style="color: var(--text-neutral-default, #01231B); font-size: 11px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="send-msg-lbl-prov">Provinsi</div>
                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-ph-prov">Pilih provinsi</div>
              </div>
              <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                <div style="width: 8px; height: 4px; left: 4px; top: 6px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
              </div>
            </div>
            <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: center; display: flex">
              <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                <div style="color: var(--text-neutral-default, #01231B); font-size: 11px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="send-msg-lbl-city">Kota/Kabupaten</div>
                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-ph-city">Pilih kota/kabupaten</div>
              </div>
              <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                <div style="width: 8px; height: 4px; left: 4px; top: 6px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
              </div>
            </div>
            <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: center; display: flex">
              <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                <div style="color: var(--text-neutral-default, #01231B); font-size: 11px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="send-msg-lbl-type">Jenis Pesan</div>
                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-ph-type">Pilih jenis pesan</div>
              </div>
              <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                <div style="width: 8px; height: 4px; left: 4px; top: 6px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
              </div>
            </div>
            <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: center; display: flex">
              <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                <div style="color: var(--text-neutral-default, #01231B); font-size: 11px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="send-msg-lbl-prod">Produk atau Layanan</div>
                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-ph-prod">Pilih produk atau layanan</div>
              </div>
              <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                <div style="width: 8px; height: 4px; left: 4px; top: 6px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
              </div>
            </div>
            <div style="align-self: stretch; height: 120px; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--background-surface-primary-default, white); border-radius: 12px; justify-content: flex-start; align-items: flex-start; display: inline-flex">
              <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                <div style="color: var(--text-neutral-default, #01231B); font-size: 11px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word" data-editable="send-msg-lbl-content">Isi Pesan</div>
                <div style="color: var(--text-neutral-placeholder, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="send-msg-ph-content">Tuliskan pertanyaan atau masukkan Anda di sini...</div>
              </div>
            </div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
              <div style="width: 20px; height: 20px; min-width: 20px; border-radius: 6px; border: 1.5px var(--border-neutral-default, #CBCBCD) solid"></div>
              <div style="color: var(--text-neutral-default, #01231B); font-size: 13px; font-family: Geist; font-weight: 500; line-height: 18px; word-wrap: break-word" data-editable="send-msg-consent">Dengan ini Saya menyatakan setuju untuk memberikan informasi di atas kepada Pegadaian</div>
            </div>
          </div>
        </div>
        <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Right" style="align-self: stretch; width: 100%; justify-content: flex-start; align-items: flex-start; display: flex">
          <div data-size="Large" style="width: 100%; height: 44px; padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="send-msg-submit">Kirim Pesan</div>
            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
              <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'send-msg-badge', label: 'Badge Text', defaultValue: 'Text Badge' },
      { id: 'send-msg-title', label: 'Title Text', defaultValue: 'Title Content Max 64 character,  2 Line Max' },
      { id: 'send-msg-desc', label: 'Description Text', defaultValue: 'Description Max 180 characters and 2 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg ' },
      { id: 'send-msg-cc-val', label: 'Call Center Value', defaultValue: '1500 569' },
      { id: 'send-msg-phone-val', label: 'Phone Value', defaultValue: '(021) 8581 162 / (021) 8063 5162' },
      { id: 'send-msg-wa-val', label: 'WhatsApp Value', defaultValue: '08111 1500 569' },
      { id: 'send-msg-email-val', label: 'Email Value', defaultValue: 'customer.care@pegadaian.co.id' },
      { id: 'send-msg-submit', label: 'Submit Button Text', defaultValue: 'Kirim Pesan' }
    ]
  };
