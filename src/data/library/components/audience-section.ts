import type { SectionTemplate } from '../../../types';

export const audienceSection: SectionTemplate = {
    id: 'audience-section',
    name: 'AUDIENCE',
    category: 'CONTENT',
    description: 'Pegadaian AUDIENCE section with headline category, title, and 4 statistics cards with numbers, units, and card titles.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="audience-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: white; overflow: hidden; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; justify-content: flex-start; align-items: center; gap: 72px; display: inline-flex; box-sizing: border-box;">
        <div style="flex: 1 1 0; align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 120px; display: inline-flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                <div style="width: 195px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="audience-category">Headline category Max 40 char and 2 Line.</div>
                <div style="width: 402px; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="audience-title">Title (Max 60 Char, 3 Line)</div>
            </div>
        </div>
        <div style="width: 638px; align-self: stretch; justify-content: center; align-items: center; gap: 80px; display: flex; flex-wrap: wrap; align-content: center">
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
                    <div style="justify-content: flex-start; align-items: flex-end; gap: 8px; display: inline-flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 72px; font-family: Geist; font-weight: 500; line-height: 80px; word-wrap: break-word" data-editable="audience-card1-val">xxxx</div>
                        <div style="padding-bottom: 8px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="audience-card1-unit">Satuan</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; padding-right: 40px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="audience-card1-title">{Card Title} <br/>Max 40 characters/2 lines</div>
                    </div>
                </div>
            </div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
                    <div style="justify-content: flex-start; align-items: flex-end; gap: 8px; display: inline-flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 72px; font-family: Geist; font-weight: 500; line-height: 80px; word-wrap: break-word" data-editable="audience-card2-val">xxxx</div>
                        <div style="padding-bottom: 8px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="audience-card2-unit">Satuan</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; padding-right: 40px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="audience-card2-title">{Card Title} <br/>Max 40 characters/2 lines</div>
                    </div>
                </div>
            </div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
                    <div style="justify-content: flex-start; align-items: flex-end; gap: 8px; display: inline-flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 72px; font-family: Geist; font-weight: 500; line-height: 80px; word-wrap: break-word" data-editable="audience-card3-val">xxxx</div>
                        <div style="padding-bottom: 8px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="audience-card3-unit">Satuan</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; padding-right: 40px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="audience-card3-title">{Card Title} <br/>Max 40 characters/2 lines</div>
                    </div>
                </div>
            </div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
                    <div style="justify-content: flex-start; align-items: flex-end; gap: 8px; display: inline-flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 72px; font-family: Geist; font-weight: 500; line-height: 80px; word-wrap: break-word" data-editable="audience-card4-val">xxxx</div>
                        <div style="padding-bottom: 8px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                            <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="audience-card4-unit">Satuan</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; padding-right: 40px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="audience-card4-title">{Card Title} <br/>Max 40 characters/2 lines</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="audience-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 60px; padding-bottom: 60px; background: white; overflow: hidden; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; flex-direction: column; justify-content: center; align-items: flex-start; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
                <div style="width: 195px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="audience-category">Headline category Max 40 char and 2 Line.</div>
                <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="audience-title">Title (Max 60 Char, 3 Line)</div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 32px; display: inline-flex; flex-wrap: wrap; align-content: center">
            <div style="width: 140px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
                <div style="justify-content: flex-start; align-items: flex-end; gap: 6px; display: inline-flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 48px; font-family: Geist; font-weight: 500; line-height: 56px; word-wrap: break-word" data-editable="audience-card1-val">xxxx</div>
                    <div style="padding-bottom: 6px; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="audience-card1-unit">Satuan</div>
                    </div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: center; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="audience-card1-title">{Card Title} <br/>Max 40 characters/2 lines</div>
                </div>
            </div>
            <div style="width: 140px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
                <div style="justify-content: flex-start; align-items: flex-end; gap: 6px; display: inline-flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 48px; font-family: Geist; font-weight: 500; line-height: 56px; word-wrap: break-word" data-editable="audience-card2-val">xxxx</div>
                    <div style="padding-bottom: 6px; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="audience-card2-unit">Satuan</div>
                    </div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: center; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="audience-card2-title">{Card Title} <br/>Max 40 characters/2 lines</div>
                </div>
            </div>
            <div style="width: 140px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
                <div style="justify-content: flex-start; align-items: flex-end; gap: 6px; display: inline-flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 48px; font-family: Geist; font-weight: 500; line-height: 56px; word-wrap: break-word" data-editable="audience-card3-val">xxxx</div>
                    <div style="padding-bottom: 6px; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="audience-card3-unit">Satuan</div>
                    </div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: center; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="audience-card3-title">{Card Title} <br/>Max 40 characters/2 lines</div>
                </div>
            </div>
            <div style="width: 140px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
                <div style="justify-content: flex-start; align-items: flex-end; gap: 6px; display: inline-flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 48px; font-family: Geist; font-weight: 500; line-height: 56px; word-wrap: break-word" data-editable="audience-card4-val">xxxx</div>
                    <div style="padding-bottom: 6px; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="audience-card4-unit">Satuan</div>
                    </div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: center; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="audience-card4-title">{Card Title} <br/>Max 40 characters/2 lines</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'audience-category', label: 'Category Headline', defaultValue: 'Headline category Max 40 char and 2 Line.' },
      { id: 'audience-title', label: 'Title', defaultValue: 'Title (Max 60 Char, 3 Line)' },
      { id: 'audience-card1-val', label: 'Card 1 Value', defaultValue: 'xxxx' },
      { id: 'audience-card1-unit', label: 'Card 1 Unit', defaultValue: 'Satuan' },
      { id: 'audience-card1-title', label: 'Card 1 Title', defaultValue: '{Card Title} \nMax 40 characters/2 lines' },
      { id: 'audience-card2-val', label: 'Card 2 Value', defaultValue: 'xxxx' },
      { id: 'audience-card2-unit', label: 'Card 2 Unit', defaultValue: 'Satuan' },
      { id: 'audience-card2-title', label: 'Card 2 Title', defaultValue: '{Card Title} \nMax 40 characters/2 lines' },
      { id: 'audience-card3-val', label: 'Card 3 Value', defaultValue: 'xxxx' },
      { id: 'audience-card3-unit', label: 'Card 3 Unit', defaultValue: 'Satuan' },
      { id: 'audience-card3-title', label: 'Card 3 Title', defaultValue: '{Card Title} \nMax 40 characters/2 lines' },
      { id: 'audience-card4-val', label: 'Card 4 Value', defaultValue: 'xxxx' },
      { id: 'audience-card4-unit', label: 'Card 4 Unit', defaultValue: 'Satuan' },
      { id: 'audience-card4-title', label: 'Card 4 Title', defaultValue: '{Card Title} \nMax 40 characters/2 lines' }
    ]
  };
