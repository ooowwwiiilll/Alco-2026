import type { SectionTemplate } from '../../../types';

export const graphSection: SectionTemplate = {
    id: 'graph-section',
    name: '[GRAPH]',
    category: 'CONTENT',
    description: 'Pegadaian [GRAPH] section with section title, description, and large graph chart display.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="graph-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: white; flex-direction: column; justify-content: center; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 24px; display: flex">
            <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist, sans-serif; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="graph-title">{Title Section} Max 45 Character</div>
            <div style="width: 520px; max-width: 100%; text-align: center; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="graph-desc">{Description} Max 3 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
        </div>
        <img style="align-self: stretch; height: 703px; max-height: 703px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" alt="Graph Chart Display" data-editable-image="graph-img" />
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="graph-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: white; overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 16px; display: flex">
            <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist, sans-serif; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="m-graph-title">{Title Section} Max 45 Character</div>
            <div style="align-self: stretch; text-align: center; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-graph-desc">{Description} Max 3 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
        </div>
        <img style="align-self: stretch; height: 184px; padding: 10px; border-radius: 16px; object-fit: cover;" src="/background.png" alt="Graph Chart Display Mobile" data-editable-image="m-graph-img" />
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'graph-title', label: 'Section Title', defaultValue: '{Title Section} Max 45 Character' },
      { id: 'graph-desc', label: 'Section Description', defaultValue: "{Description} Max 3 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James" }
    ]
  };
