import type { SectionTemplate } from '../../../types';

export const pdpArticleSummarySection: SectionTemplate = {
    id: 'pdp-article-summary-section',
    name: 'PDP ARTICLE SUMMARY',
    category: 'CONTENT',
    description: 'Pegadaian PDP ARTICLE SUMMARY section with author avatar, author name, publish date, reading time, share buttons, and article summary description.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="pdp-article-summary-section-desktop w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 100%; height: 100%; padding: 72px; background: var(--background-page-grey, #F8F8F8); justify-content: space-between; align-items: flex-start; display: inline-flex; box-sizing: border-box;">
        <div style="width: 528px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: inline-flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                <img style="width: 48px; height: 48px; border-radius: 9999px; object-fit: cover" src="/background.png" />
                <div style="flex: 1 1 0; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: inline-flex">
                    <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="pdp-article-author">{Author Name}</div>
                    <div style="justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="pdp-article-date">{DD Month YYYY}</div>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">·</div>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="pdp-article-readtime">{X menit baca}</div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="pdp-article-description">{Description} max 6 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
        </div>
        <div style="width: 528px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
            <div style="color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">Bagikan</div>
            <div style="justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
                <div style="padding: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 32px; justify-content: flex-start; align-items: flex-start; display: flex">
                    <div data-color="Brand" style="width: 24px; height: 24px; position: relative; overflow: hidden">
                        <div style="width: 18.48px; height: 18.48px; left: 2.76px; top: 2.76px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                    </div>
                </div>
                <div style="padding: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 32px; justify-content: flex-start; align-items: flex-start; display: flex">
                    <div style="width: 24px; height: 24px; position: relative; overflow: hidden">
                        <div style="width: 19.78px; height: 17.88px; left: 2.11px; top: 3.06px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                    </div>
                </div>
                <div style="padding: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 32px; justify-content: flex-start; align-items: flex-start; display: flex">
                    <div style="width: 24px; height: 24px; position: relative; overflow: hidden">
                        <div style="width: 2.16px; height: 2.16px; left: 15.72px; top: 6.12px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                        <div style="width: 9.24px; height: 9.24px; left: 7.38px; top: 7.38px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                        <div style="width: 18px; height: 18px; left: 3px; top: 3px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                    </div>
                </div>
                <div style="padding: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 32px; justify-content: flex-start; align-items: flex-start; display: flex">
                    <div style="width: 24px; height: 24px; position: relative; overflow: hidden">
                        <div style="width: 20px; height: 19.95px; left: 2px; top: 2.01px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="pdp-article-summary-section-mobile w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 48px; padding-bottom: 48px; background: var(--background-page-grey, #F8F8F8); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                <img style="width: 48px; height: 48px; border-radius: 9999px; object-fit: cover" src="/background.png" />
                <div style="flex: 1 1 0; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: inline-flex">
                    <div style="color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="pdp-article-author">{Author Name}</div>
                    <div style="justify-content: flex-start; align-items: flex-start; gap: 4px; display: inline-flex">
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="pdp-article-date">{DD Month YYYY}</div>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">·</div>
                        <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="pdp-article-readtime">{X menit baca}</div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                <div style="justify-content: flex-start; align-items: center; gap: 4px; display: flex">
                    <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 13.40px; height: 13.33px; left: 1.33px; top: 1.34px; position: absolute; outline: 1.50px var(--border-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                    </div>
                    <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{X Tanggapan}</div>
                </div>
                <div style="flex: 1 1 0; justify-content: flex-start; align-items: center; gap: 4px; display: flex">
                    <div style="color: var(--text-neutral-disabled, #B1B1B3); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">Bagikan</div>
                    <div style="padding: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 32px; justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 12.32px; height: 12.32px; left: 1.84px; top: 1.84px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                        </div>
                    </div>
                    <div style="padding: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 32px; justify-content: flex-start; align-items: flex-start; display: flex">
                        <div style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 13.18px; height: 11.92px; left: 1.41px; top: 2.04px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                        </div>
                    </div>
                    <div style="padding: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 32px; justify-content: flex-start; align-items: flex-start; display: flex">
                        <div style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 1.44px; height: 1.44px; left: 10.48px; top: 4.08px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                            <div style="width: 6.16px; height: 6.16px; left: 4.92px; top: 4.92px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                            <div style="width: 12px; height: 12px; left: 2px; top: 2px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                        </div>
                    </div>
                    <div style="padding: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 32px; justify-content: flex-start; align-items: flex-start; display: flex">
                        <div style="width: 16px; height: 16px; position: relative; overflow: hidden">
                            <div style="width: 13.33px; height: 13.30px; left: 1.33px; top: 1.34px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="pdp-article-description">{Description} max 6 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James</div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'pdp-article-author', label: 'Author Name', defaultValue: '{Author Name}' },
      { id: 'pdp-article-date', label: 'Date', defaultValue: '{DD Month YYYY}' },
      { id: 'pdp-article-readtime', label: 'Read Time', defaultValue: '{X menit baca}' },
      { id: 'pdp-article-description', label: 'Description', defaultValue: '{Description} max 6 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, when designers at Letraset and James' }
    ]
  };
