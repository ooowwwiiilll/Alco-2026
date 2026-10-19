import type { SectionTemplate } from '../../../types';

export const pdpArticleContentSection: SectionTemplate = {
    id: 'pdp-article-content-section',
    name: 'PDP ARTICLE CONTENT',
    category: 'CONTENT',
    description: 'Pegadaian PDP ARTICLE CONTENT section with table, images, date, location, and numbered accordion content sections.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="pdp-article-content-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 182px; padding-right: 182px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); justify-content: flex-start; align-items: flex-start; gap: 72px; display: inline-flex; box-sizing: border-box;">
        <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
            <div style="align-self: stretch; height: 20px; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="pdp-content-label">{Section Label} Max 30 characters or 1 line</div>
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="pdp-content-heading">{Content Heading} Max 45 Characters or 2 Lines.</div>
        </div>
        <div style="width: 729px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
            <div style="justify-content: flex-start; align-items: center; gap: 32px; display: inline-flex">
                <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                    <div style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 13.33px; height: 14.67px; left: 1.33px; top: 0.66px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                    </div>
                    <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="pdp-content-date">{DD Month YYYY}</div>
                </div>
                <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
                    <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 10.67px; height: 13.33px; left: 2.67px; top: 1.34px; position: absolute; outline: 1.50px var(--border-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                    </div>
                    <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="pdp-content-location">{Location}</div>
                </div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="pdp-content-body">{Body text} adjust to content needs. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <div style="align-self: stretch; overflow: hidden; border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                    <div style="align-self: stretch; padding: 12px; background: var(--icon-brand-primary, #CCEA68); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Column Heading}</div>
                        <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Column Heading}</div>
                    </div>
                    <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Content}</div>
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Content}</div>
                    </div>
                    <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Content}</div>
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Content}</div>
                    </div>
                    <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Content}</div>
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Content}</div>
                    </div>
                    <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Content}</div>
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Content}</div>
                    </div>
                </div>
                <img style="align-self: stretch; height: 364.50px; position: relative; border-radius: 12px; object-fit: cover;" src="/background.png" />
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
                <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: baseline; gap: 12px; display: inline-flex">
                    <div style="width: 28px; text-align: right; color: var(--text-neutral-default, #013428); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word">1</div>
                    <div style="flex: 1 1 0; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                            <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="pdp-content-accordion-heading-1">{Accordion Heading}<br/>Max 45 characters or 2 lines.</div>
                            <div data-color="Black" style="width: 24px; height: 24px; position: relative; overflow: hidden">
                                <div style="width: 12px; height: 6px; left: 6px; top: 9px; position: absolute; outline: 1.50px var(--icon-neutral-default, #323234) solid; outline-offset: -0.75px"></div>
                            </div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word">{Body text} adjust to content needs. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        <div style="align-self: stretch; overflow: hidden; border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                            <div style="align-self: stretch; padding: 12px; background: var(--icon-brand-primary, #CCEA68); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Column Heading}</div>
                                <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Column Heading}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Content}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Content}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Content}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Content}</div>
                            </div>
                        </div>
                        <img style="align-self: stretch; height: 344.50px; position: relative; border-radius: 12px; object-fit: cover;" src="/background.png" />
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
                <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: baseline; gap: 12px; display: inline-flex">
                    <div style="width: 28px; text-align: right; color: var(--text-neutral-default, #013428); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word">2</div>
                    <div style="flex: 1 1 0; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                            <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 24px; font-family: Geist; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="pdp-content-accordion-heading-2">{Accordion Heading}<br/>Max 45 characters or 2 lines.</div>
                            <div data-color="Black" style="width: 24px; height: 24px; position: relative; overflow: hidden">
                                <div style="width: 12px; height: 6px; left: 6px; top: 9px; position: absolute; outline: 1.50px var(--icon-neutral-default, #323234) solid; outline-offset: -0.75px"></div>
                            </div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist; font-weight: 400; line-height: 24px; word-wrap: break-word">{Body text} adjust to content needs. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        <div style="align-self: stretch; overflow: hidden; border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                            <div style="align-self: stretch; padding: 12px; background: var(--icon-brand-primary, #CCEA68); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Column Heading}</div>
                                <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Column Heading}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Content}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Content}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Content}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Content}</div>
                            </div>
                        </div>
                        <img style="align-self: stretch; height: 344.50px; position: relative; border-radius: 12px; object-fit: cover;" src="/background.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="pdp-article-content-section-mobile w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
            <div style="align-self: stretch; height: 20px; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="pdp-content-label">{Section Label} Max 30 characters or 1 line</div>
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist; font-weight: 500; line-height: 32px; word-wrap: break-word" data-editable="pdp-content-heading">{Content Heading} Max 45 Characters or 2 Lines.</div>
        </div>
        <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
            <div style="justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
                <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 4px; display: flex">
                    <div style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 13.33px; height: 14.67px; left: 1.33px; top: 0.66px; position: absolute; background: var(--icon-brand-secondary, #015743)"></div>
                    </div>
                    <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="pdp-content-date">{DD Month YYYY}</div>
                </div>
                <div style="justify-content: flex-start; align-items: center; gap: 4px; display: flex">
                    <div data-color="Black" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                        <div style="width: 10.67px; height: 13.33px; left: 2.67px; top: 1.34px; position: absolute; outline: 1.50px var(--border-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                    </div>
                    <div style="color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="pdp-content-location">{Location}</div>
                </div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="pdp-content-body">{Body text} adjust to content needs. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <div style="align-self: stretch; overflow: hidden; border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                    <div style="align-self: stretch; padding: 12px; background: var(--icon-brand-primary, #CCEA68); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Column Heading}</div>
                        <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Column Heading}</div>
                    </div>
                    <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Content}</div>
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">{Content}</div>
                    </div>
                    <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Content}</div>
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">{Content}</div>
                    </div>
                    <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Content}</div>
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">{Content}</div>
                    </div>
                    <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Content}</div>
                        <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">{Content}</div>
                    </div>
                </div>
                <img style="align-self: stretch; height: 177px; position: relative; border-radius: 8px; object-fit: cover;" src="/background.png" />
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
                <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: baseline; gap: 12px; display: inline-flex">
                    <div style="width: 28px; text-align: right; color: var(--text-neutral-default, #013428); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word">1</div>
                    <div style="flex: 1 1 0; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                            <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="pdp-content-accordion-heading-1">{Accordion Heading}<br/>Max 45 characters or 2 lines.</div>
                            <div data-color="Black" style="width: 24px; height: 24px; position: relative; overflow: hidden">
                                <div style="width: 12px; height: 6px; left: 6px; top: 9px; position: absolute; outline: 1.50px var(--icon-neutral-default, #323234) solid; outline-offset: -0.75px"></div>
                            </div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Body text} adjust to content needs. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        <div style="align-self: stretch; overflow: hidden; border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                            <div style="align-self: stretch; padding: 12px; background: var(--icon-brand-primary, #CCEA68); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Column Heading}</div>
                                <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Column Heading}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">{Content}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">{Content}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">{Content}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">{Content}</div>
                            </div>
                        </div>
                        <img style="align-self: stretch; height: 157px; position: relative; border-radius: 8px; object-fit: cover;" src="/background.png" />
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
                <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: baseline; gap: 12px; display: inline-flex">
                    <div style="width: 28px; text-align: right; color: var(--text-neutral-default, #013428); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word">2</div>
                    <div style="flex: 1 1 0; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
                        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                            <div style="flex: 1 1 0; color: var(--text-neutral-default, #013428); font-size: 20px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="pdp-content-accordion-heading-2">{Accordion Heading}<br/>Max 45 characters or 2 lines.</div>
                            <div data-color="Black" style="width: 24px; height: 24px; position: relative; overflow: hidden">
                                <div style="width: 12px; height: 6px; left: 6px; top: 9px; position: absolute; outline: 1.50px var(--icon-neutral-default, #323234) solid; outline-offset: -0.75px"></div>
                            </div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">{Body text} adjust to content needs. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        <div style="align-self: stretch; overflow: hidden; border-radius: 12px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                            <div style="align-self: stretch; padding: 12px; background: var(--icon-brand-primary, #CCEA68); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Column Heading}</div>
                                <div style="flex: 1 1 0; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Column Heading}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">{Content}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">{Content}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-default, white); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">{Content}</div>
                            </div>
                            <div style="align-self: stretch; padding: 12px; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">{Content}</div>
                                <div style="flex: 1 1 0; color: var(--text-neutral-subtle, #646467); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">{Content}</div>
                            </div>
                        </div>
                        <img style="align-self: stretch; height: 157px; position: relative; border-radius: 8px; object-fit: cover;" src="/background.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'pdp-content-label', label: 'Section Label', defaultValue: '{Section Label} Max 30 characters or 1 line' },
      { id: 'pdp-content-heading', label: 'Content Heading', defaultValue: '{Content Heading} Max 45 Characters or 2 Lines.' },
      { id: 'pdp-content-date', label: 'Date', defaultValue: '{DD Month YYYY}' },
      { id: 'pdp-content-location', label: 'Location', defaultValue: '{Location}' },
      { id: 'pdp-content-body', label: 'Body Text', defaultValue: '{Body text} adjust to content needs. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { id: 'pdp-content-accordion-heading-1', label: 'Accordion Heading 1', defaultValue: '{Accordion Heading} Max 45 characters or 2 lines.' },
      { id: 'pdp-content-accordion-heading-2', label: 'Accordion Heading 2', defaultValue: '{Accordion Heading} Max 45 characters or 2 lines.' }
    ]
  };
