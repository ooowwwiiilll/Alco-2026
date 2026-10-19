import type { SectionTemplate } from '../../../types';

export const exploreAudienceSection: SectionTemplate = {
    id: 'explore-audience-section',
    name: 'EXPLORE AUDIENCE',
    category: 'CONTENT',
    description: 'Pegadaian EXPLORE AUDIENCE section with section header, navigation arrows, and audience cards.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="explore-audience-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: white; overflow: hidden; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; flex-direction: column; justify-content: center; align-items: flex-start; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; overflow: hidden; justify-content: space-between; align-items: flex-start; display: inline-flex">
            <div style="flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex">
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 16px; display: flex">
                    <div style="color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="explore-audience-title">{Title Section} Max 45 Character</div>
                </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                <div style="padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; border-radius: 80px; outline: 1px var(--border-neutral-disabled, #F8F8F8) solid; outline-offset: -1px; backdrop-filter: blur(20px); justify-content: center; align-items: center; gap: 10px; display: flex">
                    <div data-color="White" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 4px; height: 8px; left: 6px; top: 4px; position: absolute; outline: 1.50px var(--icon-neutral-onDark-disabled, #B1B1B3) solid; outline-offset: -0.75px"></div>
                    </div>
                </div>
                <div style="padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 80px; backdrop-filter: blur(20px); justify-content: center; align-items: center; gap: 10px; display: flex">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 4px; height: 8px; left: 6px; top: 4px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                    </div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
            <div style="flex: 1 1 0; height: 321px; padding: 24px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 24px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="explore-audience-card-title-1">{Card Title} <br/>Max 60 Characters, 2 Line</div>
                    <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="explore-audience-card-desc-1">Description Max 76 characters and 2 Line Max.</div>
                </div>
                <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex">
                    <div data-shape="Square" data-size="Large" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Large" style="height: 48px; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 10.67px; height: 13.33px; left: 2.67px; top: 1.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                        </div>
                    </div>
                    <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 12px; height: 13.33px; left: 2px; top: 1.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="explore-audience-card-btn-1">Text Button</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="flex: 1 1 0; height: 321px; padding: 24px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 24px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="explore-audience-card-title-2">{Card Title} <br/>Max 60 Characters, 2 Line</div>
                    <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="explore-audience-card-desc-2">Description Max 76 characters and 2 Line Max.</div>
                </div>
                <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex">
                    <div data-shape="Square" data-size="Large" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Large" style="height: 48px; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 10.67px; height: 13.33px; left: 2.67px; top: 1.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                        </div>
                    </div>
                    <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 12px; height: 13.33px; left: 2px; top: 1.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="explore-audience-card-btn-2">Text Button</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="flex: 1 1 0; height: 321px; padding: 24px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 24px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="explore-audience-card-title-3">{Card Title} <br/>Max 60 Characters, 2 Line</div>
                    <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="explore-audience-card-desc-3">Description Max 76 characters and 2 Line Max.</div>
                </div>
                <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex">
                    <div data-shape="Square" data-size="Large" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Large" style="height: 48px; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 10.67px; height: 13.33px; left: 2.67px; top: 1.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                        </div>
                    </div>
                    <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 12px; height: 13.33px; left: 2px; top: 1.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="explore-audience-card-btn-3">Text Button</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="flex: 1 1 0; height: 321px; padding: 24px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 24px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="explore-audience-card-title-4">{Card Title} <br/>Max 60 Characters, 2 Line</div>
                    <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="explore-audience-card-desc-4">Description Max 76 characters and 2 Line Max.</div>
                </div>
                <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex">
                    <div data-shape="Square" data-size="Large" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Large" style="height: 48px; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 10.67px; height: 13.33px; left: 2.67px; top: 1.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                        </div>
                    </div>
                    <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                <div style="width: 12px; height: 13.33px; left: 2px; top: 1.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                            </div>
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="explore-audience-card-btn-4">Text Button</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="explore-audience-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: white; overflow: hidden; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; flex-direction: column; justify-content: center; align-items: flex-start; gap: 56px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="explore-audience-title">{Title Section} Max 45 Character</div>
        <div style="align-self: stretch; height: 321px; padding: 24px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 24px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; box-sizing: border-box;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="explore-audience-card-title-1">{Card Title} <br/>Max 60 Characters, 2 Line</div>
                <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="explore-audience-card-desc-1">Description Max 76 characters and 2 Line Max.</div>
            </div>
            <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex">
                <div data-shape="Square" data-size="Large" data-state="Default" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                    <div data-size="Large" style="height: 48px; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: var(--button-onDark-default, white); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 10.67px; height: 13.33px; left: 2.67px; top: 1.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                    </div>
                </div>
                <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Left" style="justify-content: flex-start; align-items: flex-start; display: flex">
                    <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 12px; height: 13.33px; left: 2px; top: 1.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="explore-audience-card-btn-1">Text Button</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
            <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                <div style="width: 32px; height: 8px; background: var(--icon-brand-secondary, #015743); border-radius: 999px"></div>
                <div style="width: 8px; height: 8px; background: var(--icon-neutral-onDark-disabled, #B1B1B3); border-radius: 999px"></div>
                <div style="width: 8px; height: 8px; background: var(--icon-neutral-onDark-disabled, #B1B1B3); border-radius: 999px"></div>
                <div style="width: 8px; height: 8px; background: var(--icon-neutral-onDark-disabled, #B1B1B3); border-radius: 999px"></div>
            </div>
            <div style="justify-content: center; align-items: center; gap: 12px; display: flex">
                <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                    <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 4px; height: 8px; left: 6px; top: 4px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                    </div>
                </div>
                <div data-shape="Rectangle" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                    <div data-size="Small" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 4px; height: 8px; left: 6px; top: 4px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'explore-audience-title', label: 'Section Title', defaultValue: '{Title Section} Max 45 Character' },
      { id: 'explore-audience-card-title-1', label: 'Card Title', defaultValue: '{Card Title} Max 60 Characters, 2 Line' },
      { id: 'explore-audience-card-desc-1', label: 'Card Desc', defaultValue: 'Description Max 76 characters and 2 Line Max.' },
      { id: 'explore-audience-card-btn-1', label: 'Card Button', defaultValue: 'Text Button' }
    ]
  };
