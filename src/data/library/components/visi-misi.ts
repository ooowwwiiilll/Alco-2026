import type { SectionTemplate } from '../../../types';

export const visiMisi: SectionTemplate = {
    id: 'visi-misi',
    name: 'VISI MISI',
    category: 'CONTENT',
    description: 'Pegadaian Visi Misi section with desktop and mobile layouts, headline category, big title, numbered badges, and description list.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans' ,sans-serif]">
    <!-- Desktop Layout -->
    <div class="visi-misi-desktop w-full overflow-hidden" style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: white; flex-direction: column; justify-content: flex-start; align-items: center; gap: 72px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: inline-flex">
            <div style="width: 195px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="visi-misi-category1">Headline category Max 40 char and 2 Line.</div>
            <div style="width: 856px; color: var(--text-neutral-default, #01231B); font-size: 56px; font-family: Geist, sans-serif; font-weight: 500; line-height: 64px; word-wrap: break-word" data-editable="visi-misi-title">Big Title with maximum <br/>character 100 Char and 3 line<br/>Limits</div>
        </div>
        <div style="align-self: stretch; height: 0px; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid;"></div>
        <div style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: inline-flex">
            <div style="width: 195px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="visi-misi-category2">Headline category Max 40 char and 2 Line.</div>
            <div style="width: 856px; overflow: hidden; flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; display: inline-flex">
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-right: 80px; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex">
                    <div style="width: 64px; height: 64px; position: relative; background: var(--text-brand-primary, #CCEA68); overflow: hidden; border-radius: 80px; display: flex; align-items: center; justify-content: center;">
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word">1</div>
                    </div>
                    <div style="flex: 1 1 0; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="flex: 1 1 0; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="visi-misi-desc1">Sampling text description with maximum character 160 and 3 line limits.</div>
                    </div>
                </div>
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-right: 80px; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex">
                    <div style="width: 64px; height: 64px; position: relative; background: var(--text-brand-primary, #CCEA68); overflow: hidden; border-radius: 80px; display: flex; align-items: center; justify-content: center;">
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word">2</div>
                    </div>
                    <div style="flex: 1 1 0; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="flex: 1 1 0; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="visi-misi-desc2">Sampling text description with maximum character 160 and 3 line limits.</div>
                    </div>
                </div>
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-right: 80px; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex">
                    <div style="width: 64px; height: 64px; position: relative; background: var(--text-brand-primary, #CCEA68); overflow: hidden; border-radius: 80px; display: flex; align-items: center; justify-content: center;">
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word">3</div>
                    </div>
                    <div style="flex: 1 1 0; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="flex: 1 1 0; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="visi-misi-desc3">Sampling text description with maximum character 160 and 3 line limits.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile Layout -->
    <div class="visi-misi-mobile w-full overflow-hidden" style="display: none; width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 60px; padding-bottom: 60px; background: white; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
            <div style="width: 195px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="visi-misi-category1-mobile">Headline category Max 40 char and 2 Line.</div>
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist, sans-serif; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="visi-misi-title-mobile">Big Title with maximum <br/>character 100 Char and 3 line Limits</div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="width: 195px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="visi-misi-category2-mobile">Headline category Max 40 char and 2 Line.</div>
            <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: center; align-items: flex-start; display: flex">
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-right: 40px; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="width: 24px; height: 24px; position: relative; background: var(--text-brand-primary, #CCEA68); overflow: hidden; border-radius: 80px; display: flex; align-items: center; justify-content: center;">
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word">1</div>
                    </div>
                    <div style="flex: 1 1 0; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="flex: 1 1 0; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="visi-misi-desc1-mobile">Sampling text description with maximum character 160 and 3 line limits.</div>
                    </div>
                </div>
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-right: 48px; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="width: 24px; height: 24px; position: relative; background: var(--text-brand-primary, #CCEA68); overflow: hidden; border-radius: 80px; display: flex; align-items: center; justify-content: center;">
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word">2</div>
                    </div>
                    <div style="flex: 1 1 0; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="flex: 1 1 0; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="visi-misi-desc2-mobile">Sampling text description with maximum character 160 and 3 line limits.</div>
                    </div>
                </div>
                <div style="align-self: stretch; padding-top: 24px; padding-bottom: 24px; padding-right: 48px; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="width: 24px; height: 24px; position: relative; background: var(--text-brand-primary, #CCEA68); overflow: hidden; border-radius: 80px; display: flex; align-items: center; justify-content: center;">
                        <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word">3</div>
                    </div>
                    <div style="flex: 1 1 0; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="flex: 1 1 0; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist, sans-serif; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="visi-misi-desc3-mobile">Sampling text description with maximum character 160 and 3 line limits.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
  };
