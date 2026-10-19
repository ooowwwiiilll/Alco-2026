import type { SectionTemplate } from '../../../types';

export const photoGallerySection: SectionTemplate = {
    id: 'photo-gallery-section',
    name: 'PHOTO GALLERY',
    category: 'CONTENT',
    description: 'Pegadaian PHOTO GALLERY section with section title, subtitle description, and photo grid.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="photo-gallery-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 80px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; justify-content: space-between; align-items: flex-end; display: inline-flex">
            <div style="width: 578px; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="photo-gallery-title">{Title Section} Max 45 Char</div>
            <div style="width: 637px; color: var(--text-neutral-disabled, #B1B1B3); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="photo-gallery-subtitle">Ikuti perkembangan, kinerja,<br/>dan langkah strategis Pegadaian</div>
        </div>
        <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
            <div style="width: 1296px; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                <img style="width: 748px; height: 420px; border-radius: 16px; object-fit: cover;" src="/background.png" />
                <img style="width: 524px; height: 420px; border-radius: 16px; object-fit: cover;" src="/background.png" />
            </div>
            <div style="width: 1296px; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
                <img style="width: 524px; height: 420px; border-radius: 16px; object-fit: cover;" src="/background.png" />
                <img style="width: 748px; height: 420px; border-radius: 16px; object-fit: cover;" src="/background.png" />
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="photo-gallery-section-mobile w-full overflow-hidden bg-white flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: center; gap: 8px; display: flex">
            <div style="align-self: stretch; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="photo-gallery-title">{Title Section} Max 45 Char</div>
            <div style="align-self: stretch; text-align: center; color: var(--text-neutral-disabled, #B1B1B3); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="photo-gallery-subtitle">Ikuti perkembangan, kinerja,<br/>dan langkah strategis Pegadaian</div>
        </div>
        <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex; width: 100%; overflow-x: auto;">
            <div style="justify-content: flex-start; align-items: flex-start; gap: 12px; display: inline-flex">
                <img style="width: 250px; height: 180px; border-radius: 12px; object-fit: cover;" src="/background.png" />
                <img style="width: 250px; height: 180px; border-radius: 12px; object-fit: cover;" src="/background.png" />
                <img style="width: 250px; height: 180px; border-radius: 12px; object-fit: cover;" src="/background.png" />
                <img style="width: 250px; height: 180px; border-radius: 12px; object-fit: cover;" src="/background.png" />
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'photo-gallery-title', label: 'Section Title', defaultValue: '{Title Section} Max 45 Char' },
      { id: 'photo-gallery-subtitle', label: 'Section Subtitle', defaultValue: 'Ikuti perkembangan, kinerja,<br/>dan langkah strategis Pegadaian' }
    ]
  };
