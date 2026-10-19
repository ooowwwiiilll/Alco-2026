import type { SectionTemplate } from '../../../types';

export const milestoneSection: SectionTemplate = {
    id: 'milestone-section',
    name: '[MILESTONE]',
    category: 'CONTENT',
    description: 'Pegadaian [MILESTONE] section with category headline, action button, milestone year metric, title description, bulleted milestones list, timeline progress dots, and floating blur pill badges.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="milestone-desktop w-full overflow-hidden bg-[#01231B] flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; position: relative; background: var(--background-page-brand-secondary, #01231B); overflow: hidden; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex; box-sizing: border-box; min-height: 900px;">
        <img style="width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; background: linear-gradient(180deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.12) 31%, rgba(0.31, 1.45, 0.98, 0) 50%, rgba(0.31, 1.45, 0.98, 0.12) 65%, rgba(10, 46, 31, 0.60) 100%); object-fit: cover;" src="/background.png" alt="Milestone Background" data-editable-image="milestone-bg" />
        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 72px; display: inline-flex; position: relative; z-index: 2; flex-wrap: wrap;">
            <div style="width: 476px; max-width: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex">
                <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 72px; display: flex">
                    <div style="width: 195px; max-width: 100%; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="milestone-headline">Headline category Max 40 char and 2 Line.</div>
                    </div>
                    <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Text Only" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex; cursor: pointer;">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="milestone-btn">Text Button</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 529px; max-width: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: inline-flex">
                <div style="align-self: stretch; color: white; font-size: 72px; font-family: Geist, sans-serif; font-weight: 500; line-height: 80px; word-wrap: break-word" data-editable="milestone-year">XXXX</div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="width: 484px; max-width: 100%; color: var(--text-neutral-onDark-default, white); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="milestone-title">{Title} Max 140 Char/5 Line Limit</div>
                    <div style="align-self: stretch; color: rgba(255, 255, 255, 0.70); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="milestone-list">{List} Max 100 Char/3 Line Limit<br/>{List} Max 100 Char/3 Line Limit<br/>{List} Max 100 Char/3 Line Limit</div>
                </div>
            </div>
        </div>
        <div style="width: 1296px; max-width: 100%; height: 8px; padding-left: 8px; justify-content: space-between; align-items: center; display: inline-flex; position: relative; z-index: 2; margin-top: 40px;">
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 21px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
        </div>
        <div style="padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; left: 72px; top: 756px; position: absolute; background: rgba(255, 255, 255, 0.10); border-radius: 80px; outline: 1px rgba(255, 255, 255, 0.10) solid; outline-offset: -1px; backdrop-filter: blur(20px); justify-content: center; align-items: center; gap: 4px; display: inline-flex; z-index: 2;">
            <div style="color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="milestone-badge-1">XXXX</div>
        </div>
        <div style="padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; left: 351px; top: 716px; position: absolute; border-radius: 80px; outline: 1px rgba(255, 255, 255, 0.10) solid; outline-offset: -1px; backdrop-filter: blur(20px); justify-content: center; align-items: center; gap: 4px; display: inline-flex; z-index: 2;">
            <div style="color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="milestone-badge-2">XXXX</div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="milestone-mobile w-full overflow-hidden bg-[#01231B] flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; min-height: 800px; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; position: relative; background: linear-gradient(180deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.12) 31%, rgba(0.31, 1.45, 0.98, 0) 50%, rgba(0.31, 1.45, 0.98, 0.12) 65%, rgba(10, 46, 31, 0.60) 100%); overflow: hidden; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex; box-sizing: border-box;">
        <div style="width: 402px; max-width: 100%; height: 900px; left: 0px; top: 0px; position: absolute; pointer-events: none;"></div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 64px; display: flex; position: relative; z-index: 2;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 64px; display: flex">
                    <div style="width: 195px; max-width: 100%; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="m-milestone-headline">Headline category Max 40 char and 2 Line.</div>
                    </div>
                    <div data-size="Small" data-state="Default" data-type="Primary" data-variant="Text Only" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div data-size="Small" style="height: 36px; min-width: 120px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex; cursor: pointer;">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist, sans-serif; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="m-milestone-btn">Text Button</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: flex">
                <div style="align-self: stretch; color: white; font-size: 56px; font-family: Geist, sans-serif; font-weight: 500; line-height: 64px; word-wrap: break-word" data-editable="m-milestone-year">XXXX</div>
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
                    <div style="width: 484px; max-width: 100%; color: var(--text-neutral-onDark-default, white); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-milestone-title">{Title} Max 140 Char/5 Line Limit</div>
                    <div style="align-self: stretch; color: rgba(255, 255, 255, 0.70); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-milestone-list">{List} Max 100 Char/3 Line Limit<br/>{List} Max 100 Char/3 Line Limit<br/>{List} Max 100 Char/3 Line Limit</div>
                </div>
            </div>
        </div>
        <div style="width: 1296px; max-width: 100%; height: 8px; padding-left: 4px; justify-content: space-between; align-items: center; display: inline-flex; position: relative; z-index: 2; margin-top: 24px;">
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
            <div style="width: 6px; height: 14px; position: relative; background: var(--text-brand-primary, #CCEA68); border-radius: 80px"></div>
        </div>
        <div style="padding-left: 20px; padding-right: 20px; padding-top: 4px; padding-bottom: 4px; left: 24px; top: 782px; position: absolute; background: rgba(255, 255, 255, 0.10); border-radius: 80px; outline: 1px rgba(255, 255, 255, 0.10) solid; outline-offset: -1px; backdrop-filter: blur(20px); justify-content: center; align-items: center; gap: 2px; display: inline-flex; z-index: 2;">
            <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="m-milestone-badge-1">XXXX</div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'milestone-headline', label: 'Headline Category', defaultValue: 'Headline category Max 40 char and 2 Line.' },
      { id: 'milestone-btn', label: 'Button Text', defaultValue: 'Text Button' },
      { id: 'milestone-year', label: 'Year Metric', defaultValue: 'XXXX' },
      { id: 'milestone-title', label: 'Milestone Title', defaultValue: '{Title} Max 140 Char/5 Line Limit' },
      { id: 'milestone-list', label: 'Milestones List', defaultValue: '{List} Max 100 Char/3 Line Limit\n{List} Max 100 Char/3 Line Limit\n{List} Max 100 Char/3 Line Limit' },
      { id: 'milestone-badge-1', label: 'Badge 1 Text', defaultValue: 'XXXX' },
      { id: 'milestone-badge-2', label: 'Badge 2 Text', defaultValue: 'XXXX' }
    ]
  };
