import type { SectionTemplate } from '../../../types';

export const featureSection: SectionTemplate = {
    id: 'feature-section',
    name: '[FEATURE SECTION]',
    category: 'CONTENT',
    description: 'Pegadaian FEATURE SECTION with section title, section description, and alternating feature content blocks with badges, text descriptions, and preview images.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="feature-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: white; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: center; gap: 24px; display: flex">
            <div style="color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="feat-sec-title">{Title Section} Max 45 Character</div>
            <div style="width: 516px; max-width: 100%; text-align: center; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="feat-sec-desc">Description Max 180 characters and 2 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg </div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
            <!-- Feature Block 1 -->
            <div style="align-self: stretch; height: 400px; padding: 40px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 24px; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
                <div style="width: 570px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: inline-flex">
                    <div data-size="Large" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div data-size="Large" style="height: 40px; min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="feat-block1-badge">Text Badge</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="feat-block1-title">{Title Content} Max 64 character</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="feat-block1-desc">Description Max 180 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.</div>
                </div>
                <img style="width: 598px; height: 320px; border-radius: 16px; object-fit: cover;" src="/background.png" alt="Feature 1" data-editable-image="feat-block1-img" />
            </div>
            <!-- Feature Block 2 -->
            <div style="align-self: stretch; height: 400px; padding: 40px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 24px; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
                <img style="width: 598px; height: 320px; border-radius: 16px; object-fit: cover;" src="/background.png" alt="Feature 2" data-editable-image="feat-block2-img" />
                <div style="width: 570px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: inline-flex">
                    <div data-size="Large" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div data-size="Large" style="height: 40px; min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="feat-block2-badge">Text Badge</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="feat-block2-title">{Title Content} Max 64 character</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="feat-block2-desc">Description Max 180 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.</div>
                </div>
            </div>
            <!-- Feature Block 3 -->
            <div style="align-self: stretch; height: 400px; padding: 40px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 24px; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
                <div style="width: 570px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: inline-flex">
                    <div data-size="Large" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div data-size="Large" style="height: 40px; min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="feat-block3-badge">Text Badge</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="feat-block3-title">{Title Content} Max 64 character</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="feat-block3-desc">Description Max 180 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.</div>
                </div>
                <img style="width: 598px; height: 320px; border-radius: 16px; object-fit: cover;" src="/background.png" alt="Feature 3" data-editable-image="feat-block3-img" />
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="feature-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: white; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: center; gap: 24px; display: flex">
            <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="m-feat-sec-title">{Title Section} Max 45 Character</div>
            <div style="align-self: stretch; text-align: center; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-feat-sec-desc">Description Max 180 characters and 2 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg </div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <!-- Feature Block 1 Mobile -->
            <div style="align-self: stretch; padding-top: 16px; padding-bottom: 32px; padding-left: 16px; padding-right: 16px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 24px; display: flex; box-sizing: border-box;">
                <img style="align-self: stretch; height: 161px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Feature 1" data-editable-image="m-feat-block1-img" />
                <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 12px; display: flex">
                    <div data-size="Large" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div data-size="Large" style="height: 40px; min-width: 100px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="m-feat-block1-badge">Text Badge</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-feat-block1-title">{Title Content} Max 64 character</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-feat-block1-desc">Description Max 180 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.</div>
                </div>
            </div>
            <!-- Feature Block 2 Mobile -->
            <div style="align-self: stretch; padding-top: 16px; padding-bottom: 32px; padding-left: 16px; padding-right: 16px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 24px; display: flex; box-sizing: border-box;">
                <img style="align-self: stretch; height: 161px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Feature 2" data-editable-image="m-feat-block2-img" />
                <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 12px; display: flex">
                    <div data-size="Large" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div data-size="Large" style="height: 40px; min-width: 100px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="m-feat-block2-badge">Text Badge</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-feat-block2-title">{Title Content} Max 64 character</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-feat-block2-desc">Description Max 180 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.</div>
                </div>
            </div>
            <!-- Feature Block 3 Mobile -->
            <div style="align-self: stretch; padding-top: 16px; padding-bottom: 32px; padding-left: 16px; padding-right: 16px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; border-radius: 16px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 24px; display: flex; box-sizing: border-box;">
                <img style="align-self: stretch; height: 161px; border-radius: 12px; object-fit: cover;" src="/background.png" alt="Feature 3" data-editable-image="m-feat-block3-img" />
                <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 12px; display: flex">
                    <div data-size="Large" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div data-size="Large" style="height: 40px; min-width: 100px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="m-feat-block3-badge">Text Badge</div>
                        </div>
                    </div>
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-feat-block3-title">{Title Content} Max 64 character</div>
                    <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-feat-block3-desc">Description Max 180 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'feat-sec-title', label: 'Section Title', defaultValue: '{Title Section} Max 45 Character' },
      { id: 'feat-sec-desc', label: 'Section Description', defaultValue: 'Description Max 180 characters and 2 Line Max. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg ' },
      { id: 'feat-block1-badge', label: 'Block 1 Badge', defaultValue: 'Text Badge' },
      { id: 'feat-block1-title', label: 'Block 1 Title', defaultValue: '{Title Content} Max 64 character' },
      { id: 'feat-block1-desc', label: 'Block 1 Description', defaultValue: 'Description Max 180 characters and 3 Line Max.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.' },
      { id: 'feat-block2-badge', label: 'Block 2 Badge', defaultValue: 'Text Badge' },
      { id: 'feat-block2-title', label: 'Block 2 Title', defaultValue: '{Title Content} Max 64 character' },
      { id: 'feat-block2-desc', label: 'Block 2 Description', defaultValue: 'Description Max 180 characters and 3 Line Max.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.' },
      { id: 'feat-block3-badge', label: 'Block 3 Badge', defaultValue: 'Text Badge' },
      { id: 'feat-block3-title', label: 'Block 3 Title', defaultValue: '{Title Content} Max 64 character' },
      { id: 'feat-block3-desc', label: 'Block 3 Description', defaultValue: 'Description Max 180 characters and 3 Line Max.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Williamsburg truffaut af messenger bag fixie schlitz put a bird on it.' }
    ]
  };
