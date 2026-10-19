import type { SectionTemplate } from '../../../types';

export const audienceImageSection: SectionTemplate = {
    id: 'audience-image-section',
    name: 'AUDIENCE IMAGE',
    category: 'CONTENT',
    description: 'Pegadaian AUDIENCE IMAGE section with headline category, horizontal image row using public/background.png, soft gradient overlays, and CTA button.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="audience-image-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding: 72px; position: relative; background: white; overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
            <div style="width: 195px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="audience-img-category">Headline category Max 40 char and 2 Line.</div>
        </div>
        <div style="justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex; max-width: 100%; overflow-x: auto;">
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 1" data-editable="audience-img-1" />
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 2" data-editable="audience-img-2" />
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 3" data-editable="audience-img-3" />
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 4" data-editable="audience-img-4" />
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 5" data-editable="audience-img-5" />
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 6" data-editable="audience-img-6" />
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 7" data-editable="audience-img-7" />
        </div>
        <div style="width: 327px; height: 324px; left: 0px; top: 162px; position: absolute; background: linear-gradient(90deg, white 0%, rgba(255, 255, 255, 0) 100%); pointer-events: none;"></div>
        <div style="width: 327px; height: 324px; right: 0px; top: 162px; position: absolute; background: linear-gradient(270deg, white 0%, rgba(255, 255, 255, 0) 100%); pointer-events: none;"></div>
        <div data-size="Large" data-state="Default" data-type="Primary" data-variant="Icon Right" style="justify-content: flex-start; align-items: flex-start; display: inline-flex; cursor: pointer;">
            <div data-size="Large" style="height: 48px; min-width: 160px; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: flex">
                <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 700; line-height: 24px; word-wrap: break-word" data-editable="audience-img-btn">Text Button</div>
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

  <!-- Mobile Layout -->
  <div class="audience-image-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-top: 72px; padding-bottom: 120px; padding-left: 72px; padding-right: 72px; position: relative; background: white; overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 48px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
            <div style="width: 195px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="audience-img-category">Headline category Max 40 char and 2 Line.</div>
        </div>
        <div style="justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex; max-width: 100%; overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none;">
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 1" data-editable="audience-img-1" />
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 2" data-editable="audience-img-2" />
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 3" data-editable="audience-img-3" />
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 4" data-editable="audience-img-4" />
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 5" data-editable="audience-img-5" />
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 6" data-editable="audience-img-6" />
            <img style="width: 196px; height: 162px; padding: 10px; border-radius: 24px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Audience Image 7" data-editable="audience-img-7" />
        </div>
        <div style="width: 87px; height: 366px; left: 0px; top: 168px; position: absolute; background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, white 100%); pointer-events: none;"></div>
        <div style="width: 87px; height: 366px; right: 0px; top: 168px; position: absolute; transform: rotate(180deg); transform-origin: 0 0; background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, white 100%); pointer-events: none;"></div>
        <div style="padding-left: 20px; padding-right: 20px; padding-top: 12px; padding-bottom: 12px; background: var(--surface-brand-default, #00C58D); border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: inline-flex; cursor: pointer;">
            <div style="color: var(--text-brand-on-brand, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="audience-img-btn">Cari Tahu Lebih Lanjut</div>
            <div style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <div style="width: 16px; height: 16px; left: 0px; top: 0px; position: absolute; background: var(--icon-brand-on-brand, #01231B)"></div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'audience-img-category', label: 'Category Headline', defaultValue: 'Headline category Max 40 char and 2 Line.' },
      { id: 'audience-img-1', label: 'Image 1', defaultValue: '/background.png', type: 'image' },
      { id: 'audience-img-2', label: 'Image 2', defaultValue: '/background.png', type: 'image' },
      { id: 'audience-img-3', label: 'Image 3', defaultValue: '/background.png', type: 'image' },
      { id: 'audience-img-4', label: 'Image 4', defaultValue: '/background.png', type: 'image' },
      { id: 'audience-img-5', label: 'Image 5', defaultValue: '/background.png', type: 'image' },
      { id: 'audience-img-6', label: 'Image 6', defaultValue: '/background.png', type: 'image' },
      { id: 'audience-img-7', label: 'Image 7', defaultValue: '/background.png', type: 'image' },
      { id: 'audience-img-btn', label: 'Button Text', defaultValue: 'Cari Tahu Lebih Lanjut' }
    ]
  };
