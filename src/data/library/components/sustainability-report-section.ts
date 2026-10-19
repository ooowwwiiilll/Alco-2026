import type { SectionTemplate } from '../../../types';

export const sustainabilityReportSection: SectionTemplate = {
    id: 'sustainability-report-section',
    name: '[SUSTAINABILITY REPORT]',
    category: 'CONTENT',
    description: 'Pegadaian SUSTAINABILITY REPORT section with section title and 3 feature stat cards with custom image background overlays.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="sustainability-report-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: white; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="width: 858px; max-width: 100%; flex-direction: column; justify-content: flex-start; align-items: center; gap: 16px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="sustainability-title">Section Title</div>
        </div>
        <div style="width: 1296px; max-width: 100%; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex; flex-wrap: wrap;">
            <div style="flex: 1 1 0; min-width: 280px; height: 380px; padding: 24px; background: linear-gradient(180deg, rgba(10, 46, 31, 0.20) 0%, #0A2E1F 100%), url(/background.png); background-size: cover; background-position: center; overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; box-sizing: border-box;">
                <div style="flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                    <div style="text-align: center; color: var(--text-neutral-onDark-default, white); font-size: 72px; font-family: Geist; font-weight: 500; line-height: 80px; word-wrap: break-word" data-editable="sustainability-stat-1">XXXXXX</div>
                    <div style="padding-bottom: 8px; opacity: 0.70; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <div style="text-align: center; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="sustainability-unit-1">Satuan</div>
                    </div>
                </div>
                <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="sustainability-card-title-1">{Card Title} <br/>Max 60 characters / 2 lines</div>
            </div>
            <div style="flex: 1 1 0; min-width: 280px; height: 380px; padding: 24px; background: linear-gradient(180deg, rgba(10, 46, 31, 0.20) 0%, #0A2E1F 100%), url(/background.png); background-size: cover; background-position: center; overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; box-sizing: border-box;">
                <div style="flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                    <div style="text-align: center; color: var(--text-neutral-onDark-default, white); font-size: 72px; font-family: Geist; font-weight: 500; line-height: 80px; word-wrap: break-word" data-editable="sustainability-stat-2">XXXXXX</div>
                    <div style="padding-bottom: 8px; opacity: 0.70; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <div style="text-align: center; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="sustainability-unit-2">Satuan</div>
                    </div>
                </div>
                <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="sustainability-card-title-2">{Card Title} <br/>Max 60 characters / 2 lines</div>
            </div>
            <div style="flex: 1 1 0; min-width: 280px; height: 380px; padding: 24px; background: linear-gradient(180deg, rgba(10, 46, 31, 0.20) 0%, #0A2E1F 100%), url(/background.png); background-size: cover; background-position: center; overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; box-sizing: border-box;">
                <div style="flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                    <div style="text-align: center; color: var(--text-neutral-onDark-default, white); font-size: 72px; font-family: Geist; font-weight: 500; line-height: 80px; word-wrap: break-word" data-editable="sustainability-stat-3">XXXXXX</div>
                    <div style="padding-bottom: 8px; opacity: 0.70; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <div style="text-align: center; color: var(--text-neutral-onDark-default, white); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="sustainability-unit-3">Satuan</div>
                    </div>
                </div>
                <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="sustainability-card-title-3">{Card Title} <br/>Max 60 characters / 2 lines</div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="sustainability-report-section-mobile w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: white; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 12px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="sustainability-title">Section Title</div>
        </div>
        <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; height: 300px; padding: 20px; background: linear-gradient(180deg, rgba(10, 46, 31, 0.20) 0%, #0A2E1F 100%), url(/background.png); background-size: cover; background-position: center; overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; box-sizing: border-box;">
                <div style="flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 56px; font-family: Geist; font-weight: 500; line-height: 64px; word-wrap: break-word" data-editable="sustainability-stat-1">XXXXXX</div>
                    <div style="padding-bottom: 8px; opacity: 0.70; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="sustainability-unit-1">Satuan</div>
                    </div>
                </div>
                <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="sustainability-card-title-1">{Card Title} <br/>Max 60 characters / 2 lines</div>
            </div>
            <div style="align-self: stretch; height: 300px; padding: 20px; background: linear-gradient(180deg, rgba(10, 46, 31, 0.20) 0%, #0A2E1F 100%), url(/background.png); background-size: cover; background-position: center; overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; box-sizing: border-box;">
                <div style="flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 56px; font-family: Geist; font-weight: 500; line-height: 64px; word-wrap: break-word" data-editable="sustainability-stat-2">XXXXXX</div>
                    <div style="padding-bottom: 8px; opacity: 0.70; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="sustainability-unit-2">Satuan</div>
                    </div>
                </div>
                <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="sustainability-card-title-2">{Card Title} <br/>Max 60 characters / 2 lines</div>
            </div>
            <div style="align-self: stretch; height: 300px; padding: 20px; background: linear-gradient(180deg, rgba(10, 46, 31, 0.20) 0%, #0A2E1F 100%), url(/background.png); background-size: cover; background-position: center; overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex; box-sizing: border-box;">
                <div style="flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 56px; font-family: Geist; font-weight: 500; line-height: 64px; word-wrap: break-word" data-editable="sustainability-stat-3">XXXXXX</div>
                    <div style="padding-bottom: 8px; opacity: 0.70; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="sustainability-unit-3">Satuan</div>
                    </div>
                </div>
                <div style="align-self: stretch; color: var(--text-neutral-onDark-default, white); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="sustainability-card-title-3">{Card Title} <br/>Max 60 characters / 2 lines</div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'sustainability-title', label: 'Section Title', defaultValue: 'Section Title' },
      { id: 'sustainability-stat-1', label: 'Stat 1 Number', defaultValue: 'XXXXXX' },
      { id: 'sustainability-unit-1', label: 'Stat 1 Unit', defaultValue: 'Satuan' },
      { id: 'sustainability-card-title-1', label: 'Card Title 1', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'sustainability-stat-2', label: 'Stat 2 Number', defaultValue: 'XXXXXX' },
      { id: 'sustainability-unit-2', label: 'Stat 2 Unit', defaultValue: 'Satuan' },
      { id: 'sustainability-card-title-2', label: 'Card Title 2', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'sustainability-stat-3', label: 'Stat 3 Number', defaultValue: 'XXXXXX' },
      { id: 'sustainability-unit-3', label: 'Stat 3 Unit', defaultValue: 'Satuan' },
      { id: 'sustainability-card-title-3', label: 'Card Title 3', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' }
    ]
  };
