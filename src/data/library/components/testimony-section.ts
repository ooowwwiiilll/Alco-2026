import type { SectionTemplate } from '../../../types';

export const testimonySection: SectionTemplate = {
    id: 'testimony-section',
    name: '[TESTIMONY]',
    category: 'CONTENT',
    description: 'Pegadaian [TESTIMONY] section with testimonial title, description, navigation arrows, user quote card, profile image, and key metric statistic cards.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="testimony-desktop w-full overflow-hidden bg-[#CCEA68] flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-brand-primary, #CCEA68); flex-direction: column; justify-content: center; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex; flex-wrap: wrap; gap: 24px;">
            <div style="width: 425px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist, sans-serif; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="testimony-title">{Testimony Section} Max 45 Character</div>
            <div style="justify-content: flex-start; align-items: flex-end; gap: 48px; display: flex; flex-wrap: wrap;">
                <div style="width: 454px; max-width: 100%; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="testimony-desc">Description Max 180 characters and 3 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                        <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: center; align-items: flex-start; gap: 20px; display: inline-flex; flex-wrap: wrap;">
            <div style="width: 638px; flex: 1 1 500px; align-self: stretch; padding: 40px; background: white; border-radius: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
                    <div style="width: 24px; height: 16px; background: var(--background-brand-secondary-bold, #015743); border-radius: 2px;"></div>
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="testimony-quote">Place the testimonial statement here, max 320 character and 7 line max.</div>
                </div>
                <div style="align-self: stretch; overflow: hidden; border-radius: 12px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="testimony-user-name">{Name User}</div>
                    <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="testimony-user-role">{Job User/Title/Position}</div>
                </div>
            </div>
            <img style="width: 308px; height: 426px; border-radius: 24px; object-fit: cover;" src="/background.png" alt="Testimony User" data-editable-image="testimony-img" />
            <div style="flex: 1 1 300px; align-self: stretch; padding: 40px; background: var(--background-surface-primary-default, white); border-radius: 24px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex; box-sizing: border-box; min-height: 426px;">
                <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex">
                    <div style="align-self: stretch; justify-content: flex-start; align-items: flex-end; gap: 8px; display: inline-flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 72px; font-family: Geist, sans-serif; font-weight: 500; line-height: 80px; word-wrap: break-word" data-editable="testimony-stat-num-1">xxx</div>
                        <div style="padding-bottom: 8px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="testimony-stat-unit-1">Satuan</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="testimony-stat-title-1">{Card Title} <br/>Max 40 characters/2 lines</div>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; justify-content: flex-start; align-items: flex-end; gap: 8px; display: inline-flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 72px; font-family: Geist, sans-serif; font-weight: 500; line-height: 80px; word-wrap: break-word" data-editable="testimony-stat-num-2">xxx</div>
                        <div style="padding-bottom: 8px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="testimony-stat-unit-2">Satuan</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="testimony-stat-title-2">{Card Title} <br/>Max 40 characters/2 lines</div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="testimony-mobile w-full overflow-hidden bg-[#CCEA68] flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-brand-primary, #CCEA68); flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist, sans-serif; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="m-testimony-title">{Testimony Section} Max 45 Character</div>
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="m-testimony-desc">Description Max 180 characters and 3 Line Max.<br/>    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 20px; display: flex">
            <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; padding-top: 24px; padding-bottom: 24px; background: white; border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex; box-sizing: border-box;">
                <div style="align-self: stretch; min-height: 204px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
                    <div style="width: 24px; height: 16px; background: var(--background-brand-secondary-bold, #015743); border-radius: 2px;"></div>
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-testimony-quote">Place the testimonial statement here, max 320 character and 7 line max.</div>
                </div>
                <div style="align-self: stretch; overflow: hidden; border-radius: 12px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="m-testimony-user-name">{Name User}</div>
                    <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist, sans-serif; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="m-testimony-user-role">{Job User/Title/Position}</div>
                </div>
            </div>
            <div style="align-self: stretch; justify-content: center; align-items: flex-start; gap: 16px; display: inline-flex">
                <img style="width: 170px; height: 250px; border-radius: 16px; object-fit: cover;" src="/background.png" alt="Testimony User Mobile" data-editable-image="m-testimony-img" />
                <div style="width: 170px; align-self: stretch; padding-left: 16px; padding-right: 16px; padding-top: 20px; padding-bottom: 20px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex; box-sizing: border-box;">
                    <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: center; gap: 2px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-end; gap: 4px; display: inline-flex">
                            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 48px; font-family: Geist, sans-serif; font-weight: 500; line-height: 56px; word-wrap: break-word" data-editable="m-testimony-stat-num-1">xxx</div>
                            <div style="padding-bottom: 6px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-testimony-stat-unit-1">Satuan</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist, sans-serif; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="m-testimony-stat-title-1">{Card Title} <br/>Max 40 char/2 lines</div>
                    </div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-end; gap: 4px; display: inline-flex">
                            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 48px; font-family: Geist, sans-serif; font-weight: 500; line-height: 56px; word-wrap: break-word" data-editable="m-testimony-stat-num-2">xxx</div>
                            <div style="padding-bottom: 6px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-testimony-stat-unit-2">Satuan</div>
                            </div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist, sans-serif; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="m-testimony-stat-title-2">{Card Title} <br/>Max 40 char/2 lines</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
            <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                <div data-size="Small" style="height: 40px; padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'testimony-title', label: 'Section Title', defaultValue: '{Testimony Section} Max 45 Character' },
      { id: 'testimony-desc', label: 'Section Description', defaultValue: 'Description Max 180 characters and 3 Line Max.\nLorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { id: 'testimony-quote', label: 'Testimonial Quote', defaultValue: 'Place the testimonial statement here, max 320 character and 7 line max.' },
      { id: 'testimony-user-name', label: 'User Name', defaultValue: '{Name User}' },
      { id: 'testimony-user-role', label: 'User Role/Title', defaultValue: '{Job User/Title/Position}' },
      { id: 'testimony-stat-num-1', label: 'Stat 1 Number', defaultValue: 'xxx' },
      { id: 'testimony-stat-unit-1', label: 'Stat 1 Unit', defaultValue: 'Satuan' },
      { id: 'testimony-stat-title-1', label: 'Stat 1 Title', defaultValue: '{Card Title} \nMax 40 characters/2 lines' },
      { id: 'testimony-stat-num-2', label: 'Stat 2 Number', defaultValue: 'xxx' },
      { id: 'testimony-stat-unit-2', label: 'Stat 2 Unit', defaultValue: 'Satuan' },
      { id: 'testimony-stat-title-2', label: 'Stat 2 Title', defaultValue: '{Card Title} \nMax 40 characters/2 lines' }
    ]
  };
