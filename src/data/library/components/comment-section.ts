import type { SectionTemplate } from '../../../types';

export const commentSection: SectionTemplate = {
    id: 'comment-section',
    name: '[COMMENT]',
    category: 'CONTENT',
    description: 'Pegadaian COMMENT section with responses count, heading, input placeholder, commenter comments list, and "Lihat Lebih Banyak" action button.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="comment-section-desktop w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 182px; padding-right: 182px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-grey, #F8F8F8); justify-content: flex-start; align-items: flex-start; gap: 72px; display: inline-flex; box-sizing: border-box;">
        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
            <div style="align-self: stretch; height: 20px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="comment-count">{X Tanggapan}</div>
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="comment-heading">{Content Heading} Max 45 Characters or 2 Lines.</div>
        </div>
        <div style="width: 620px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 48px; display: inline-flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
                <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: white; border-radius: 12px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="comment-input-placeholder">Placeholder</div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="width: 40px; height: 40px; background: var(--icon-brand-secondary, #015743); overflow: hidden; border-radius: 100px; justify-content: center; align-items: center; display: flex">
                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">CN</div>
                    </div>
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="commenter-name-1">{Commenter Name}</div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="commenter-date-1">{DD Month YYYY}</div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="commenter-text-1">{Placeholder} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
                    </div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="width: 40px; height: 40px; background: var(--icon-brand-secondary, #015743); overflow: hidden; border-radius: 100px; justify-content: center; align-items: center; display: flex">
                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">CN</div>
                    </div>
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="commenter-name-2">{Commenter Name}</div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="commenter-date-2">{DD Month YYYY}</div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="commenter-text-2">{Placeholder} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
                    </div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="width: 40px; height: 40px; background: var(--icon-brand-secondary, #015743); overflow: hidden; border-radius: 100px; justify-content: center; align-items: center; display: flex">
                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">CN</div>
                    </div>
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="commenter-name-3">{Commenter Name}</div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="commenter-date-3">{DD Month YYYY}</div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="commenter-text-3">{Placeholder} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
                    </div>
                </div>
            </div>
            <div data-size="Large" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: center; align-items: center; display: inline-flex">
                <div data-size="Large" style="min-width: 160px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="comment-load-more">Lihat Lebih Banyak</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="comment-section-mobile w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-grey, #F8F8F8); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
            <div style="align-self: stretch; height: 20px; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="comment-count">{X Tanggapan}</div>
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 500; line-height: 32px; word-wrap: break-word" data-editable="comment-heading">{Content Heading} Max 45 Characters or 2 Lines.</div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                <div style="align-self: stretch; padding-left: 16px; padding-right: 16px; padding-top: 12px; padding-bottom: 12px; background: white; border-radius: 12px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                    <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="comment-input-placeholder">Placeholder</div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="width: 40px; height: 40px; background: var(--icon-brand-secondary, #015743); overflow: hidden; border-radius: 100px; justify-content: center; align-items: center; display: flex">
                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">CN</div>
                    </div>
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="commenter-name-1">{Commenter Name}</div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="commenter-date-1">{DD Month YYYY}</div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="commenter-text-1">{Placeholder} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
                    </div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="width: 40px; height: 40px; background: var(--icon-brand-secondary, #015743); overflow: hidden; border-radius: 100px; justify-content: center; align-items: center; display: flex">
                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">CN</div>
                    </div>
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="commenter-name-2">{Commenter Name}</div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="commenter-date-2">{DD Month YYYY}</div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="commenter-text-2">{Placeholder} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
                    </div>
                </div>
                <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                    <div style="width: 40px; height: 40px; background: var(--icon-brand-secondary, #015743); overflow: hidden; border-radius: 100px; justify-content: center; align-items: center; display: flex">
                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">CN</div>
                    </div>
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="commenter-name-3">{Commenter Name}</div>
                            <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="commenter-date-3">{DD Month YYYY}</div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="commenter-text-3">{Placeholder} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
                    </div>
                </div>
            </div>
            <div data-size="Large" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: center; align-items: center; display: inline-flex">
                <div data-size="Large" style="min-width: 160px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="comment-load-more">Lihat Lebih Banyak</div>
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 9.33px; height: 9.33px; left: 3.33px; top: 3.34px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'comment-count', label: 'Responses Count', defaultValue: '{X Tanggapan}' },
      { id: 'comment-heading', label: 'Section Heading', defaultValue: '{Content Heading} Max 45 Characters or 2 Lines.' },
      { id: 'comment-input-placeholder', label: 'Input Placeholder', defaultValue: 'Placeholder' },
      { id: 'commenter-name-1', label: 'Commenter Name 1', defaultValue: '{Commenter Name}' },
      { id: 'commenter-date-1', label: 'Comment Date 1', defaultValue: '{DD Month YYYY}' },
      { id: 'commenter-text-1', label: 'Comment Text 1', defaultValue: "{Placeholder} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James" },
      { id: 'comment-load-more', label: 'Load More Text', defaultValue: 'Lihat Lebih Banyak' }
    ]
  };
