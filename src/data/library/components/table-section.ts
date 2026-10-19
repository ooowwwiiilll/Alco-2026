import type { SectionTemplate } from '../../../types';

export const tableSection: SectionTemplate = {
    id: 'table-section',
    name: 'TABLE',
    category: 'CONTENT',
    description: 'Pegadaian TABLE section with main section title, tab navigation, and styled data table.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="table-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 182px; padding-right: 182px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="table-section-title">{Table Section} Max 45 Character</div>
        <div data-theme="On White" style="width: 500px; max-width: 100%; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                <div data-state="Selected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="table-tab-1">Tab</div>
                </div>
                <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="table-tab-2">Tab</div>
                </div>
            </div>
        </div>
        <div style="width: 1076px; max-width: 100%; overflow-x: auto; border-radius: 24px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <div style="align-self: stretch; padding: 24px; background: var(--background-brand-primary-bold, #CCEA68); border-top-left-radius: 16px; border-top-right-radius: 16px; justify-content: space-between; align-items: center; display: inline-flex">
                <div style="width: 120px; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="table-col-1">Kolom 1</div>
                <div style="width: 300px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="table-col-2">Kolom 2</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="table-col-3">Kolom 3</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="table-col-4">Kolom 4</div>
            </div>
            <div style="align-self: stretch; padding: 24px; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; justify-content: space-between; align-items: center; display: inline-flex">
                <div style="width: 120px; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row1-col1">Informasi 1</div>
                <div style="width: 300px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row1-col2">Lorem Ipsum is simply dummy text</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row1-col3">20%</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row1-col4">12.033</div>
            </div>
            <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; justify-content: space-between; align-items: center; display: inline-flex">
                <div style="width: 120px; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row2-col1">Informasi 2</div>
                <div style="width: 300px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row2-col2">Lorem Ipsum is simply dummy text</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row2-col3">40%</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row2-col4">16.421</div>
            </div>
            <div style="align-self: stretch; padding: 24px; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; justify-content: space-between; align-items: center; display: inline-flex">
                <div style="width: 120px; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row3-col1">Informasi 3</div>
                <div style="width: 300px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row3-col2">Lorem Ipsum is simply dummy text</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row3-col3">15%</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row3-col4">12.033</div>
            </div>
            <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; justify-content: space-between; align-items: center; display: inline-flex">
                <div style="width: 120px; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row4-col1">Informasi 4</div>
                <div style="width: 300px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row4-col2">Lorem Ipsum is simply dummy text</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row4-col3">2%</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row4-col4">111</div>
            </div>
            <div style="align-self: stretch; padding: 24px; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; justify-content: space-between; align-items: center; display: inline-flex">
                <div style="width: 120px; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row5-col1">Informasi 5</div>
                <div style="width: 300px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row5-col2">Lorem Ipsum is simply dummy text</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row5-col3">40%</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="table-row5-col4">16.421</div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="table-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="table-section-title">{Table Section} Max 45 Character</div>
        <div data-theme="On White" style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                <div data-state="Selected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 12px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 4px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="table-tab-1">Tab</div>
                </div>
                <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 12px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 4px; display: inline-flex; cursor: pointer;">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="table-tab-2">Tab</div>
                </div>
            </div>
        </div>
        <div style="width: 620px; max-width: 100%; overflow-x: auto; border-radius: 16px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <div style="align-self: stretch; padding: 20px; background: var(--background-brand-primary-bold, #CCEA68); border-top-left-radius: 8px; border-top-right-radius: 8px; justify-content: space-between; align-items: center; display: inline-flex">
                <div style="width: 120px; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="table-col-1">Kolom 1</div>
                <div style="width: 300px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="table-col-2">Kolom 2</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="table-col-3">Kolom 3</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="table-col-4">Kolom 4</div>
            </div>
            <div style="align-self: stretch; padding: 20px; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; justify-content: space-between; align-items: center; display: inline-flex">
                <div style="width: 120px; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row1-col1">Informasi 1</div>
                <div style="width: 300px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row1-col2">Lorem Ipsum is simply dummy text</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row1-col3">20%</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row1-col4">12.033</div>
            </div>
            <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; justify-content: space-between; align-items: center; display: inline-flex">
                <div style="width: 120px; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row2-col1">Informasi 2</div>
                <div style="width: 300px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row2-col2">Lorem Ipsum is simply dummy text</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row2-col3">40%</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row2-col4">16.421</div>
            </div>
            <div style="align-self: stretch; padding: 20px; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; justify-content: space-between; align-items: center; display: inline-flex">
                <div style="width: 120px; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row3-col1">Informasi 3</div>
                <div style="width: 300px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row3-col2">Lorem Ipsum is simply dummy text</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row3-col3">15%</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row3-col4">12.033</div>
            </div>
            <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); justify-content: space-between; align-items: center; display: inline-flex">
                <div style="width: 120px; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row4-col1">Informasi 4</div>
                <div style="width: 300px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row4-col2">Lorem Ipsum is simply dummy text</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row4-col3">2%</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row4-col4">111</div>
            </div>
            <div style="align-self: stretch; padding: 20px; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; justify-content: space-between; align-items: center; display: inline-flex">
                <div style="width: 120px; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row5-col1">Informasi 5</div>
                <div style="width: 300px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row5-col2">Lorem Ipsum is simply dummy text</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row5-col3">40%</div>
                <div style="width: 120px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="table-row5-col4">16.421</div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'table-section-title', label: 'Section Title', defaultValue: '{Table Section} Max 45 Character' },
      { id: 'table-tab-1', label: 'Active Tab Text', defaultValue: 'Tab' },
      { id: 'table-tab-2', label: 'Inactive Tab Text', defaultValue: 'Tab' },
      { id: 'table-col-1', label: 'Column 1 Header', defaultValue: 'Kolom 1' },
      { id: 'table-col-2', label: 'Column 2 Header', defaultValue: 'Kolom 2' },
      { id: 'table-col-3', label: 'Column 3 Header', defaultValue: 'Kolom 3' },
      { id: 'table-col-4', label: 'Column 4 Header', defaultValue: 'Kolom 4' }
    ]
  };
