import type { SectionTemplate } from '../../../types';

export const noNameSection: SectionTemplate = {
    id: 'no-name-section',
    name: '[NO NAME]',
    category: 'CONTENT',
    description: 'Pegadaian [NO NAME] section with category headline, rich text description, highlighted text, list, table data, and illustration image.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="no-name-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: white; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 72px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: inline-flex; flex-wrap: wrap; gap: 32px;">
            <div style="width: 195px; max-width: 100%; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="no-name-headline">Headline category Max 40 char and 2 Line.</div>
            <div style="width: 851px; max-width: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 400; line-height: 26px; word-wrap: break-word" data-editable="no-name-desc">{Description} max 6 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
                </div>
                <div style="width: 804px; max-width: 100%; padding-top: 24px; padding-bottom: 24px; justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="no-name-highlighted">{Highlighted} max 3 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
                </div>
                <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 400; line-height: 26px; word-wrap: break-word" data-editable="no-name-list">List text 1<br/>List text 2<br/>List text 3<br/>List text 4<br/>List text 5</div>
                <div style="align-self: stretch; overflow: hidden; border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                    <div style="align-self: stretch; padding: 16px; background: var(--icon-brand-primary, #CCEA68); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="no-name-th-1">{Column Heading}</div>
                        <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="no-name-th-2">{Column Heading}</div>
                    </div>
                    <div style="align-self: stretch; padding: 16px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="no-name-row1-col1">{Content}</div>
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="no-name-row1-col2">{Content}</div>
                    </div>
                    <div style="align-self: stretch; padding: 16px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="no-name-row2-col1">{Content}</div>
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="no-name-row2-col2">{Content}</div>
                    </div>
                    <div style="align-self: stretch; padding: 16px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="no-name-row3-col1">{Content}</div>
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="no-name-row3-col2">{Content}</div>
                    </div>
                    <div style="align-self: stretch; padding: 16px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="no-name-row4-col1">{Content}</div>
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="no-name-row4-col2">{Content}</div>
                    </div>
                </div>
                <img style="align-self: stretch; height: 425.50px; position: relative; border-radius: 16px; object-fit: cover;" src="/background.png" alt="No Name Illustration" data-editable-image="no-name-img" />
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="no-name-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: white; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 64px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
            <div style="width: 195px; max-width: 100%; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="m-no-name-headline">Headline category Max 40 char and 2 Line.</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="m-no-name-desc">{Description} max 6 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
                </div>
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="m-no-name-highlighted">{Highlighted} max 3 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
                </div>
                <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="m-no-name-list">List text 1<br/>List text 2<br/>List text 3<br/>List text 4<br/>List text 5</div>
            </div>
            <div style="align-self: stretch; overflow: hidden; border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <div style="align-self: stretch; padding: 12px; background: var(--icon-brand-primary, #CCEA68); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-no-name-th-1">{Column Heading}</div>
                    <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-no-name-th-2">{Column Heading}</div>
                </div>
                <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-no-name-row1-col1">{Content}</div>
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist, sans-serif; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="m-no-name-row1-col2">{Content}</div>
                </div>
                <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-no-name-row2-col1">{Content}</div>
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist, sans-serif; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="m-no-name-row2-col2">{Content}</div>
                </div>
                <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-no-name-row3-col1">{Content}</div>
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist, sans-serif; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="m-no-name-row3-col2">{Content}</div>
                </div>
                <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-no-name-row4-col1">{Content}</div>
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist, sans-serif; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="m-no-name-row4-col2">{Content}</div>
                </div>
            </div>
            <img style="align-self: stretch; height: 177px; position: relative; border-radius: 8px; object-fit: cover;" src="/background.png" alt="No Name Mobile Illustration" data-editable-image="m-no-name-img" />
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'no-name-headline', label: 'Headline Category', defaultValue: 'Headline category Max 40 char and 2 Line.' },
      { id: 'no-name-desc', label: 'Description Text', defaultValue: "{Description} max 6 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James" },
      { id: 'no-name-highlighted', label: 'Highlighted Text', defaultValue: "{Highlighted} max 3 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James" },
      { id: 'no-name-list', label: 'List Text', defaultValue: 'List text 1\nList text 2\nList text 3\nList text 4\nList text 5' }
    ]
  };
