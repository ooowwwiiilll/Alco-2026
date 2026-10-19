import type { SectionTemplate } from '../../../types';

export const directorPhotoSection: SectionTemplate = {
    id: 'director-photo-section',
    name: 'DIRECTOR PHOTO',
    category: 'CONTENT',
    description: 'Pegadaian DIRECTOR PHOTO section with category tabs and grid of director photo cards.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="director-photo-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="director-photo-title">{Section Title} Max. 45 Char</div>
        <div data-theme="On White" style="width: 500px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                <div data-state="Selected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="director-photo-cat-1">Category 01</div>
                </div>
                <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="director-photo-cat-2">Category 02</div>
                </div>
                <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 16px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="director-photo-cat-3">Category 03</div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex; flex-wrap: wrap; align-content: flex-start">
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-1">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-1">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-2">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-2">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-3">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-3">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-4">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-4">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-5">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-5">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-6">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-6">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-7">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-7">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-8">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-8">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-9">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-9">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-10">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-10">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-11">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-11">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-12">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-12">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-13">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-13">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-14">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-14">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="width: 416px; height: 580px; padding: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: inline-flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 16px; background: var(--background-surface-primary-default, white); border-radius: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="director-photo-name-15">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="director-photo-job-15">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="director-photo-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="director-photo-title">{Section Title} Max. 45 Char</div>
        <div data-theme="On White" style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                <div data-state="Selected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 12px; border-bottom: 2px var(--border-brand-secondary, #015743) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--button-linked-default, #015743); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="director-photo-cat-1">Category 01</div>
                </div>
                <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 12px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="director-photo-cat-2">Category 02</div>
                </div>
                <div data-state="Unselected" data-theme="On White" style="flex: 1 1 0; min-width: 80px; padding-bottom: 12px; border-bottom: 2px var(--border-neutral-default, #CBCBCD) solid; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: inline-flex">
                    <div style="align-self: stretch; min-width: 80px; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="director-photo-cat-3">Category 03</div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
            <div style="align-self: stretch; height: 494px; padding: 16px; border-radius: 16px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 8px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="director-photo-name-1">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="director-photo-job-1">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="align-self: stretch; height: 494px; padding: 16px; border-radius: 16px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 8px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="director-photo-name-2">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="director-photo-job-2">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
            <div style="align-self: stretch; height: 494px; padding: 16px; border-radius: 16px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-end; align-items: center; display: flex; box-sizing: border-box;">
                <div style="align-self: stretch; padding: 12px; background: var(--background-surface-primary-default, white); border-radius: 8px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                    <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="director-photo-name-3">Full Name. Max 36 characters</div>
                    <div style="align-self: stretch; height: 40px; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word" data-editable="director-photo-job-3">Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.</div>
                </div>
            </div>
        </div>
        <div data-size="Large" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: center; align-items: center; display: inline-flex">
            <div data-size="Large" style="min-width: 160px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="director-photo-more-btn">Lihat Lebih Banyak</div>
                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                    <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'director-photo-title', label: 'Section Title', defaultValue: '{Section Title} Max. 45 Char' },
      { id: 'director-photo-cat-1', label: 'Category 1', defaultValue: 'Category 01' },
      { id: 'director-photo-cat-2', label: 'Category 2', defaultValue: 'Category 02' },
      { id: 'director-photo-cat-3', label: 'Category 3', defaultValue: 'Category 03' },
      { id: 'director-photo-name-1', label: 'Full Name 1', defaultValue: 'Full Name. Max 36 characters' },
      { id: 'director-photo-job-1', label: 'Job Title 1', defaultValue: 'Job Title max 60 characters and 2 line max. Lorem Ipsum is simply dummy text.' }
    ]
  };
