import type { SectionTemplate } from '../../../types';

export const crossSell: SectionTemplate = {
    id: 'cross-sell',
    name: '[CROSS SELL]',
    category: 'CONTENT',
    description: 'Pegadaian [CROSS SELL] section with section title and 3 cross-sell product cards.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="cross-sell-desktop w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist, sans-serif; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="cross-sell-title">{Cross Section} Max 45 character</div>
        <div style="align-self: stretch; justify-content: center; align-items: center; gap: 24px; display: inline-flex; flex-wrap: wrap;">
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <img style="width: 416px; height: 416px; padding: 10px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Cross Sell 1" data-editable-image="cross-sell-img-1" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="cross-sell-card-title-1">{Card Title} <br/>Max 60 characters / 2 lines</div>
                </div>
            </div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <img style="width: 416px; height: 416px; padding: 10px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Cross Sell 2" data-editable-image="cross-sell-img-2" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="cross-sell-card-title-2">{Card Title} <br/>Max 60 characters / 2 lines</div>
                </div>
            </div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <img style="width: 416px; height: 416px; padding: 10px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Cross Sell 3" data-editable-image="cross-sell-img-3" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 8px; padding-right: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="cross-sell-card-title-3">{Card Title} <br/>Max 60 characters / 2 lines</div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="cross-sell-mobile w-full overflow-hidden bg-[#F8F8F8] flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist, sans-serif; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="m-cross-sell-title">{Cross Section} Max 45 character</div>
        <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <img style="align-self: stretch; height: 354px; padding: 10px; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Cross Sell Mobile 1" data-editable-image="m-cross-sell-img-1" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 4px; padding-right: 24px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-cross-sell-card-title-1">{Card Title} <br/>Max 60 characters / 2 lines</div>
                </div>
            </div>
            <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <img style="align-self: stretch; height: 354px; padding: 10px; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Cross Sell Mobile 2" data-editable-image="m-cross-sell-img-2" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 4px; padding-right: 24px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-cross-sell-card-title-2">{Card Title} <br/>Max 60 characters / 2 lines</div>
                </div>
            </div>
            <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                <img style="align-self: stretch; height: 354px; padding: 10px; border-radius: 8px; object-fit: cover;" src="/background.png" alt="Cross Sell Mobile 3" data-editable-image="m-cross-sell-img-3" />
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-left: 4px; padding-right: 24px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                    <div style="align-self: stretch; color: var(--icon-neutral-default, #323234); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-cross-sell-card-title-3">{Card Title} <br/>Max 60 characters / 2 lines</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'cross-sell-title', label: 'Section Title', defaultValue: '{Cross Section} Max 45 character' },
      { id: 'cross-sell-card-title-1', label: 'Card 1 Title', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'cross-sell-card-title-2', label: 'Card 2 Title', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' },
      { id: 'cross-sell-card-title-3', label: 'Card 3 Title', defaultValue: '{Card Title} \nMax 60 characters / 2 lines' }
    ]
  };
