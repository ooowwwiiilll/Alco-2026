import type { SectionTemplate } from '../../../types';

export const testimonialSection: SectionTemplate = {
    id: 'testimonial-section',
    name: 'TESTIMONIAL',
    category: 'CONTENT',
    description: 'Pegadaian TESTIMONIAL section with executive quote, detailed description, author name and role, navigation buttons, and side image.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="testimonial-section-desktop w-full overflow-hidden bg-[#F8F8F8] flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; position: relative; background: var(--background-page-grey, #F8F8F8); overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 72px; display: inline-flex; box-sizing: border-box;">
        <div style="width: 200px; height: 133.19px; left: 72px; top: 40px; position: absolute; outline: 0.42px #AECC4A solid; display: flex; align-items: flex-start; justify-content: flex-start; opacity: 0.8; pointer-events: none;">
            <svg width="200" height="133" viewBox="0 0 200 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 133V79.8C0 53.2 13.3 26.6 39.9 0L66.5 19.95C46.55 39.9 39.9 59.85 39.9 79.8H79.8V133H0ZM120 133V79.8C120 53.2 133.3 26.6 159.9 0L186.5 19.95C166.55 39.9 159.9 59.85 159.9 79.8H199.8V133H120Z" fill="#CCEA68" fill-opacity="0.35"/>
            </svg>
        </div>
        <div style="align-self: stretch; padding-top: 120px; padding-bottom: 120px; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 48px; display: inline-flex">
            <div style="width: 612px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 72px; display: flex">
                <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 24px; display: flex">
                    <div style="width: 612px; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word" data-editable="testimonial-quote">Pegadaian mengintegrasikan prinsip Environmental, Social, and Governance (ESG) ke dalam strategi bisnis melalui Roadmap ESG 2025–2029 dan Rencana Aksi Keuangan Berkelanjutan. </div>
                    <div style="width: 612px; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 400; line-height: 26px; word-wrap: break-word" data-editable="testimonial-body">Komitmen ini diwujudkan melalui penguatan bisnis yang bertanggung jawab serta penerapan konsep green building, efisiensi energi dan air, pemanfaatan energi terbarukan, dan pengelolaan limbah secara berkelanjutan untuk mengurangi jejak karbon, melestarikan sumber daya, serta menciptakan nilai jangka panjang bagi seluruh pemangku kepentingan.</div>
                </div>
                <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 8px; display: flex">
                    <div style="width: 612px; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="testimonial-author">Damar Latri Setiawan</div>
                    <div style="width: 612px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 400; line-height: 26px; word-wrap: break-word" data-editable="testimonial-role">Direktur Utama</div>
                </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                <div data-shape="Rectangle" data-size="Large" data-state="Disable" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: not-allowed;">
                    <div data-size="Large" style="height: 48px; padding-left: 32px; padding-right: 32px; padding-top: 12px; padding-bottom: 12px; background: var(--button-onDark-disabled, #E0E0E1); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div data-color="Disable" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B1B1B3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
                <div data-shape="Rectangle" data-size="Large" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex; cursor: pointer;">
                    <div data-size="Large" style="height: 48px; padding-left: 32px; padding-right: 32px; padding-top: 12px; padding-bottom: 12px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                        <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img style="flex: 1 1 0; height: 812px; padding: 10px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Testimonial Image" data-editable="testimonial-img" />
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="testimonial-section-mobile w-full overflow-hidden bg-[#F8F8F8] flex justify-center" style="display: none;">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 48px; padding-bottom: 60px; position: relative; background: var(--background-page-grey, #F8F8F8); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: inline-flex; box-sizing: border-box;">
        <div style="width: 100px; height: 66px; opacity: 0.6; pointer-events: none;">
            <svg width="100" height="66" viewBox="0 0 200 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 133V79.8C0 53.2 13.3 26.6 39.9 0L66.5 19.95C46.55 39.9 39.9 59.85 39.9 79.8H79.8V133H0ZM120 133V79.8C120 53.2 133.3 26.6 159.9 0L186.5 19.95C166.55 39.9 159.9 59.85 159.9 79.8H199.8V133H120Z" fill="#CCEA68" fill-opacity="0.35"/>
            </svg>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 22px; font-family: Geist; font-weight: 500; line-height: 28px; word-wrap: break-word" data-editable="testimonial-quote">Pegadaian mengintegrasikan prinsip Environmental, Social, and Governance (ESG) ke dalam strategi bisnis melalui Roadmap ESG 2025–2029 dan Rencana Aksi Keuangan Berkelanjutan. </div>
                <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 15px; font-family: Geist; font-weight: 400; line-height: 22px; word-wrap: break-word" data-editable="testimonial-body">Komitmen ini diwujudkan melalui penguatan bisnis yang bertanggung jawab serta penerapan konsep green building, efisiensi energi dan air, pemanfaatan energi terbarukan, dan pengelolaan limbah secara berkelanjutan untuk mengurangi jejak karbon, melestarikan sumber daya, serta menciptakan nilai jangka panjang bagi seluruh pemangku kepentingan.</div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="testimonial-author">Damar Latri Setiawan</div>
                <div style="align-self: stretch; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 15px; font-family: Geist; font-weight: 400; line-height: 22px; word-wrap: break-word" data-editable="testimonial-role">Direktur Utama</div>
            </div>
        </div>
        <div style="justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
            <div data-shape="Rectangle" data-size="Large" data-state="Disable" data-type="Secondary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-onDark-disabled, #E0E0E1); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div data-color="Disable" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B1B1B3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            <div data-shape="Rectangle" data-size="Large" data-state="Default" data-type="Primary" style="justify-content: flex-start; align-items: flex-start; display: flex">
                <div data-size="Large" style="height: 40px; padding-left: 24px; padding-right: 24px; padding-top: 8px; padding-bottom: 8px; background: var(--button-primary-default, #CCEA68); border-radius: 999px; justify-content: center; align-items: center; gap: 4px; display: flex">
                    <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <img style="width: 100%; height: 320px; border-radius: 16px; object-fit: cover;" src="/background.png" onerror="this.src='/background.png'" alt="Testimonial Image" data-editable="testimonial-img" />
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'testimonial-quote', label: 'Quote Headline', defaultValue: 'Pegadaian mengintegrasikan prinsip Environmental, Social, and Governance (ESG) ke dalam strategi bisnis melalui Roadmap ESG 2025–2029 dan Rencana Aksi Keuangan Berkelanjutan.' },
      { id: 'testimonial-body', label: 'Body Description', defaultValue: 'Komitmen ini diwujudkan melalui penguatan bisnis yang bertanggung jawab serta penerapan konsep green building, efisiensi energi dan air, pemanfaatan energi terbarukan, dan pengelolaan limbah secara berkelanjutan untuk mengurangi jejak karbon, melestarikan sumber daya, serta menciptakan nilai jangka panjang bagi seluruh pemangku kepentingan.' },
      { id: 'testimonial-author', label: 'Author Name', defaultValue: 'Damar Latri Setiawan' },
      { id: 'testimonial-role', label: 'Author Role', defaultValue: 'Direktur Utama' },
      { id: 'testimonial-img', label: 'Side Image', defaultValue: '/background.png', type: 'image' }
    ]
  };
