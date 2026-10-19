import type { SectionTemplate } from '../../../types';

export const videoSection: SectionTemplate = {
    id: 'video-section',
    name: '[VIDEO]',
    category: 'CONTENT',
    description: 'Pegadaian VIDEO section with video thumbnail, play icon overlay, content title, and description text.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="video-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; padding: 72px; background: var(--background-page-default, white); justify-content: flex-start; align-items: center; gap: 64px; display: inline-flex; box-sizing: border-box;">
        <div style="width: 748px; height: 374px; max-width: 50%; padding: 10px; overflow: hidden; border-radius: 12px; background-image: url('/background.png'); background-size: cover; background-position: center; justify-content: center; align-items: center; gap: 10px; display: flex; position: relative;" data-editable-image="video-thumbnail">
            <div style="width: 100px; height: 100px; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; background: rgba(255, 255, 255, 0.30); border-radius: 160px; backdrop-filter: blur(40px); justify-content: center; align-items: center; gap: 20px; display: flex; cursor: pointer;">
                <div style="width: 48px; height: 48px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="none">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </div>
            </div>
        </div>
        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="video-title">{Content Title} Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="video-desc">Description Max 120 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="video-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; padding-left: 24px; padding-right: 24px; padding-top: 48px; padding-bottom: 48px; background: var(--background-page-default, white); flex-direction: column; justify-content: center; align-items: flex-start; gap: 56px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; height: 177px; padding: 10px; overflow: hidden; border-radius: 8px; background-image: url('/background.png'); background-size: cover; background-position: center; justify-content: center; align-items: center; gap: 10px; display: inline-flex; position: relative; box-sizing: border-box;" data-editable-image="m-video-thumbnail">
            <div style="width: 48px; height: 48px; background: rgba(255, 255, 255, 0.30); border-radius: 160px; backdrop-filter: blur(40px); justify-content: center; align-items: center; display: flex; cursor: pointer;">
                <div style="width: 24px; height: 24px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 500; line-height: 32px; word-wrap: break-word" data-editable="video-title-m">{Content Title} Max 60 characters / 2 lines</div>
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="video-desc-m">Description Max 120 characters and 3 Line Max.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'video-title', label: 'Content Title', defaultValue: '{Content Title} Max 60 characters / 2 lines' },
      { id: 'video-desc', label: 'Description', defaultValue: 'Description Max 120 characters and 3 Line Max.\nLorem Ipsum is simply dummy text of the printing and typesetting industry' }
    ]
  };
