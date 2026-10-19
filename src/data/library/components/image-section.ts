import type { SectionTemplate } from '../../../types';

export const imageSection: SectionTemplate = {
    id: 'image-section',
    name: 'IMAGE',
    category: 'CONTENT',
    description: 'Image banner section with desktop and mobile layouts using background.png.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif] bg-white">
  <!-- Desktop Layout -->
  <div class="image-desktop w-full overflow-hidden flex justify-center bg-white">
    <div style="width: 1440px; max-width: 100%; box-sizing: border-box;">
      <img style="width: 100%; height: 100%; padding: 10px; display: block; object-fit: cover; box-sizing: border-box;" src="/background.png" onerror="this.src='/background.png'" alt="Image Banner Desktop" data-editable="image-desktop-src" />
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="image-mobile w-full overflow-hidden flex justify-center bg-white">
    <div style="width: 402px; max-width: 100%; box-sizing: border-box;">
      <img style="width: 100%; height: 100%; padding: 10px; display: block; object-fit: cover; box-sizing: border-box;" src="/background.png" onerror="this.src='/background.png'" alt="Image Banner Mobile" data-editable="image-mobile-src" />
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'image-desktop-src', label: 'Desktop Image', defaultValue: '/background.png', type: 'image' },
      { id: 'image-mobile-src', label: 'Mobile Image', defaultValue: '/background.png', type: 'image' }
    ]
  };
