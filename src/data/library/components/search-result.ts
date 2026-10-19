import type { SectionTemplate } from '../../../types';

export const searchResult: SectionTemplate = {
    id: 'search-result',
    name: '[SEARCH RESULT]',
    category: 'CONTENT',
    description: 'Pegadaian [SEARCH RESULT] section with search input box, category filter pills, search count, list of cards with categories, page titles, descriptions and detail arrows, plus a show more button.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="search-result-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 182px; padding-right: 182px; padding-top: 72px; padding-bottom: 72px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 48px; display: inline-flex">
        <div style="width: 720px; max-width: 100%; padding-top: 8px; padding-bottom: 8px; padding-left: 24px; padding-right: 8px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 16px; display: inline-flex">
            <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="search-placeholder">{Search Placeholder}</div>
            <div style="width: 40px; height: 40px; padding: 8px; background: var(--text-brand-primary, #CCEA68); border-radius: 100px; justify-content: center; align-items: center; gap: 10px; display: flex">
                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: center; align-items: center; gap: 16px; display: inline-flex; flex-wrap: wrap;">
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word">Semua</div>
                </div>
            </div>
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word">Produk dan Layanan</div>
                </div>
            </div>
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word">Artikel</div>
                </div>
            </div>
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word">Berita</div>
                </div>
            </div>
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word">Promo</div>
                </div>
            </div>
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word">Event</div>
                </div>
            </div>
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word">Dokumen</div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 24px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="search-result-count">Menampilkan XXX hasil</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                <!-- Card 1 -->
                <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 24px; justify-content: space-between; align-items: flex-end; display: inline-flex">
                    <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                                <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="search-card-cat-1">{Category}</div>
                                    </div>
                                </div>
                            </div>
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="search-card-title-1">{Page Title} Max 60 characters. Max 2 line</div>
                        </div>
                        <div style="width: 720px; max-width: 100%; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="search-card-desc-1">Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).</div>
                    </div>
                    <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 2 -->
                <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 24px; justify-content: space-between; align-items: flex-end; display: inline-flex">
                    <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                                <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="search-card-cat-2">{Category}</div>
                                    </div>
                                </div>
                            </div>
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="search-card-title-2">{Page Title} Max 60 characters. Max 2 line</div>
                        </div>
                        <div style="width: 720px; max-width: 100%; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="search-card-desc-2">Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).</div>
                    </div>
                    <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 3 -->
                <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 24px; justify-content: space-between; align-items: flex-end; display: inline-flex">
                    <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                                <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="search-card-cat-3">{Category}</div>
                                    </div>
                                </div>
                            </div>
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="search-card-title-3">{Page Title} Max 60 characters. Max 2 line</div>
                        </div>
                        <div style="width: 720px; max-width: 100%; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="search-card-desc-3">Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).</div>
                    </div>
                    <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 4 -->
                <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 24px; justify-content: space-between; align-items: flex-end; display: inline-flex">
                    <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                                <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="search-card-cat-4">{Category}</div>
                                    </div>
                                </div>
                            </div>
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="search-card-title-4">{Page Title} Max 60 characters. Max 2 line</div>
                        </div>
                        <div style="width: 720px; max-width: 100%; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="search-card-desc-4">Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).</div>
                    </div>
                    <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 5 -->
                <div style="align-self: stretch; padding: 24px; background: var(--background-page-grey, #F8F8F8); border-radius: 24px; justify-content: space-between; align-items: flex-end; display: inline-flex">
                    <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                                <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="search-card-cat-5">{Category}</div>
                                    </div>
                                </div>
                            </div>
                            <div style="color: var(--text-neutral-default, #01231B); font-size: 24px; font-family: Geist, sans-serif; font-weight: 600; line-height: 32px; word-wrap: break-word" data-editable="search-card-title-5">{Page Title} Max 60 characters. Max 2 line</div>
                        </div>
                        <div style="width: 720px; max-width: 100%; color: var(--text-neutral-subtle, #646467); font-size: 16px; font-family: Geist, sans-serif; font-weight: 400; line-height: 24px; word-wrap: break-word" data-editable="search-card-desc-5">Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).</div>
                    </div>
                    <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Small" style="width: 40px; height: 40px; padding-left: 16px; padding-right: 16px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-size="Large" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: center; align-items: center; display: inline-flex">
            <div data-size="Large" style="min-width: 160px; border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 16px; font-family: Geist, sans-serif; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="search-btn-more">Lihat Lebih Banyak</div>
                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="search-result-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 48px; padding-bottom: 48px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; height: 50px; padding-top: 4px; padding-bottom: 4px; padding-left: 20px; padding-right: 4px; background: var(--background-page-grey, #F8F8F8); border-radius: 999px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
            <div style="flex: 1 1 0; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-search-placeholder">{Search Placeholder}</div>
            <div style="width: 40px; height: 40px; padding: 8px; background: var(--text-brand-primary, #CCEA68); border-radius: 100px; justify-content: center; align-items: center; gap: 10px; display: flex">
                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex; overflow-x: auto; padding-bottom: 4px;">
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Semua</div>
                </div>
            </div>
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Produk dan Layanan</div>
                </div>
            </div>
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Artikel</div>
                </div>
            </div>
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Berita</div>
                </div>
            </div>
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Promo</div>
                </div>
            </div>
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Event</div>
                </div>
            </div>
            <div data-icon="Off" data-size="Large" data-state="Default" data-type="Outline" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="min-width: 100px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; border-radius: 999px; outline: 1px var(--button-linked-default, #015743) solid; justify-content: center; align-items: center; gap: 2px; display: flex">
                    <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word">Dokumen</div>
                </div>
            </div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-search-result-count">Menampilkan XXX hasil</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                <!-- Card 1 -->
                <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: flex-end; gap: 20px; display: inline-flex">
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                                <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-search-card-cat-1">{Category}</div>
                                    </div>
                                </div>
                            </div>
                            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-search-card-title-1">{Job Title} Max 60 characters. Max 2 line</div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-search-card-desc-1">Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).</div>
                    </div>
                    <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 2 -->
                <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: flex-end; gap: 20px; display: inline-flex">
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                                <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-search-card-cat-2">{Category}</div>
                                    </div>
                                </div>
                            </div>
                            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-search-card-title-2">{Job Title} Max 60 characters. Max 2 line</div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-search-card-desc-2">Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).</div>
                    </div>
                    <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 3 -->
                <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: flex-end; gap: 20px; display: inline-flex">
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                                <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-search-card-cat-3">{Category}</div>
                                    </div>
                                </div>
                            </div>
                            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-search-card-title-3">{Job Title} Max 60 characters. Max 2 line</div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-search-card-desc-3">Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).</div>
                    </div>
                    <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 4 -->
                <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: flex-end; gap: 20px; display: inline-flex">
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                                <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-search-card-cat-4">{Category}</div>
                                    </div>
                                </div>
                            </div>
                            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-search-card-title-4">{Job Title} Max 60 characters. Max 2 line</div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-search-card-desc-4">Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).</div>
                    </div>
                    <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 5 -->
                <div style="align-self: stretch; padding: 20px; background: var(--background-page-grey, #F8F8F8); border-radius: 16px; justify-content: flex-start; align-items: flex-end; gap: 20px; display: inline-flex">
                    <div style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                            <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                                <div data-size="Small" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                                    <div data-size="Small" style="height: 36px; min-width: 80px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--background-surface-neutral-grey, #EEEEEF); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                                        <div style="flex: 1 1 0; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-brand-secondary, #015743); font-size: 12px; font-family: Geist, sans-serif; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="m-search-card-cat-5">{Category}</div>
                                    </div>
                                </div>
                            </div>
                            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 20px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="m-search-card-title-5">{Job Title} Max 60 characters. Max 2 line</div>
                        </div>
                        <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="m-search-card-desc-5">Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).</div>
                    </div>
                    <div data-shape="Square" data-size="Small" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                        <div data-size="Small" style="width: 40px; height: 40px; padding-left: 12px; padding-right: 12px; padding-top: 4px; padding-bottom: 4px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                            <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-size="Large" data-state="Default" data-type="Ghost" data-variant="Icon Right" style="justify-content: center; align-items: center; display: inline-flex">
            <div data-size="Large" style="min-width: 160px; border-radius: 999px; justify-content: center; align-items: center; gap: 2px; display: flex">
                <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="m-search-btn-more">Lihat Lebih Banyak</div>
                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'search-placeholder', label: 'Search Placeholder', defaultValue: '{Search Placeholder}' },
      { id: 'search-result-count', label: 'Result Count Text', defaultValue: 'Menampilkan XXX hasil' },
      { id: 'search-card-cat-1', label: 'Card 1 Category', defaultValue: '{Category}' },
      { id: 'search-card-title-1', label: 'Card 1 Title', defaultValue: '{Page Title} Max 60 characters. Max 2 line' },
      { id: 'search-card-desc-1', label: 'Card 1 Description', defaultValue: 'Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).' },
      { id: 'search-card-cat-2', label: 'Card 2 Category', defaultValue: '{Category}' },
      { id: 'search-card-title-2', label: 'Card 2 Title', defaultValue: '{Page Title} Max 60 characters. Max 2 line' },
      { id: 'search-card-desc-2', label: 'Card 2 Description', defaultValue: 'Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).' },
      { id: 'search-card-cat-3', label: 'Card 3 Category', defaultValue: '{Category}' },
      { id: 'search-card-title-3', label: 'Card 3 Title', defaultValue: '{Page Title} Max 60 characters. Max 2 line' },
      { id: 'search-card-desc-3', label: 'Card 3 Description', defaultValue: 'Use the first sentence from the destination page as the card description, with a maximum of 200 characters and 2 lines. If the text exceeds 200 characters, truncate it and add an ellipsis (…).' },
      { id: 'search-btn-more', label: 'More Button Text', defaultValue: 'Lihat Lebih Banyak' }
    ]
  };
