import type { SectionTemplate } from '../../../types';

export const footerSection: SectionTemplate = {
    id: 'footer-section',
    name: 'FOOTER SECTION',
    category: 'FOOTERS',
    description: 'Official Pegadaian Footer Section with multi-column navigation, company disclaimer, headquarters address, customer contact, social media channels, and copyright.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="footer-section-desktop w-full overflow-hidden bg-white flex flex-col justify-start items-center">
    <div style="width: 100%; max-width: 1440px; padding-top: 72px; padding-bottom: 56px; padding-left: 72px; padding-right: 72px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 60px; display: flex; box-sizing: border-box;">
      
      <!-- Top Brand Logo -->
      <div style="width: 170px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 9.54px; display: flex">
        <div style="padding-top: 5.14px; padding-bottom: 5.14px; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
          <img src="/logo-pegadaian-dark.svg" alt="PT Pegadaian Logo" style="height: 34px; width: auto; object-fit: contain; display: block;" onerror="this.onerror=null; this.src='/logo-pegadaian.png';" />
        </div>
      </div>

      <!-- 5 Navigation Columns -->
      <div style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: inline-flex">
        <!-- Individu -->
        <div style="width: 180px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
          <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word">Individu</div>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Layanan Bank Emas</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Gadai</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Pembiayaan</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Layanan Lainnya</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Promo</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Event</a>
        </div>

        <!-- Bisnis -->
        <div style="width: 180px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
          <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word">Bisnis</div>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Layanan Bank Emas</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Pinjaman</a>
        </div>

        <!-- Hubungan Investor -->
        <div style="width: 180px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
          <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word">Hubungan Investor</div>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Kinerja Keuangan</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Sustainability</a>
        </div>

        <!-- Tentang Pegadaian -->
        <div style="width: 180px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
          <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word">Tentang Pegadaian</div>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Profil Korporasi</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Tata Kelola</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Pengadaan</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Informasi Lainnya</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Berita & Artikel</a>
        </div>

        <!-- Lainnya -->
        <div style="width: 180px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
          <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word">Lainnya</div>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Karir</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Simulasi</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Bantuan Pelanggan</a>
          <a href="#" style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-decoration: none;" class="hover:text-[#013428] transition-colors">Harga Emas</a>
        </div>
      </div>

      <!-- Bottom Info Row -->
      <div style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: flex; min-height: 160px; gap: 32px;">
        <!-- Left: PT Pegadaian & Social Icons -->
        <div style="width: 340px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex;">
          <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="footer-company-name">PT Pegadaian (Persero)</div>
            <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word; max-width: 320px;" data-editable="footer-disclaimer">Pegadaian berizin dan diawasi oleh Otoritas Jasa Keuangan dan Bank Indonesia.</div>
          </div>
          <div style="width: 250px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
            <div style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: inline-flex">
              <!-- Facebook -->
              <a href="https://facebook.com/PegadaianPersero" target="_blank" rel="noopener noreferrer" style="padding: 8px; background: var(--background-brand-primary-subtlest, #F8FCEB); border-radius: 32px; justify-content: center; align-items: center; display: flex; cursor: pointer; text-decoration: none;" class="hover:opacity-80 transition-opacity" title="Facebook PT Pegadaian">
                <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#015743">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
              </a>
              <!-- Instagram -->
              <a href="https://instagram.com/pegadaian_id" target="_blank" rel="noopener noreferrer" style="padding: 8px; background: var(--background-brand-primary-subtlest, #F8FCEB); border-radius: 32px; justify-content: center; align-items: center; display: flex; cursor: pointer; text-decoration: none;" class="hover:opacity-80 transition-opacity" title="Instagram @pegadaian_id">
                <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </a>
              <!-- YouTube -->
              <a href="https://youtube.com/@PT_Pegadaian" target="_blank" rel="noopener noreferrer" style="padding: 8px; background: var(--background-brand-primary-subtlest, #F8FCEB); border-radius: 32px; justify-content: center; align-items: center; display: flex; cursor: pointer; text-decoration: none;" class="hover:opacity-80 transition-opacity" title="YouTube PT Pegadaian">
                <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#015743">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#F8FCEB"></polygon>
                  </svg>
                </div>
              </a>
              <!-- LinkedIn -->
              <a href="https://linkedin.com/company/pt-pegadaian" target="_blank" rel="noopener noreferrer" style="padding: 8px; background: var(--background-brand-primary-subtlest, #F8FCEB); border-radius: 32px; justify-content: center; align-items: center; display: flex; cursor: pointer; text-decoration: none;" class="hover:opacity-80 transition-opacity" title="LinkedIn PT Pegadaian">
                <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#015743">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </a>
              <!-- X / Twitter -->
              <a href="https://x.com/Pegadaian" target="_blank" rel="noopener noreferrer" style="padding: 8px; background: var(--background-brand-primary-subtlest, #F8FCEB); border-radius: 32px; justify-content: center; align-items: center; display: flex; cursor: pointer; text-decoration: none;" class="hover:opacity-80 transition-opacity" title="X / Twitter Pegadaian">
                <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#015743">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Middle: Kantor Pusat -->
        <div style="width: 320px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
          <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word" data-editable="footer-office-title">Kantor Pusat</div>
          <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
            <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word" data-editable="footer-office-address">The Gade Tower, Jl. Kramat Raya No.162, RT.2/RW.2, Kenari, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10430</div>
            <a href="https://maps.google.com/?q=The+Gade+Tower+Jakarta" target="_blank" rel="noopener noreferrer" style="border-radius: 999px; justify-content: center; align-items: center; gap: 8px; display: inline-flex; text-decoration: none; cursor: pointer;" class="hover:opacity-80 transition-opacity">
              <div style="color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="footer-map-text">Buka Peta</div>
              <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </a>
          </div>
        </div>

        <!-- Right: Hubungi Kami -->
        <div style="width: 180px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
          <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word">Hubungi Kami</div>
          <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
              <a href="tel:1500569" style="overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; text-decoration: none;" class="hover:opacity-80 transition-opacity">
                <div style="width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="footer-phone-1">1500 569</div>
              </a>
              <a href="tel:02180635162" style="overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; text-decoration: none;" class="hover:opacity-80 transition-opacity">
                <div style="width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="footer-phone-2">021-80635162</div>
              </a>
              <a href="tel:0218581162" style="overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; text-decoration: none;" class="hover:opacity-80 transition-opacity">
                <div style="width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="footer-phone-3">021-8581162</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright -->
    <div style="width: 100%; padding-top: 24px; padding-bottom: 24px; background: #F8F8F8; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: flex">
      <div style="opacity: 0.70; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word; text-align: center;" data-editable="footer-copyright">© Hak Cipta 2025 PT Pegadaian (Persero)</div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="footer-section-mobile w-full overflow-hidden bg-white flex flex-col justify-start items-center">
    <div style="width: 100%; max-width: 480px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
      <div style="align-self: stretch; padding-left: 24px; padding-right: 24px; padding-top: 56px; padding-bottom: 56px; background: var(--background-page-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: flex; box-sizing: border-box; width: 100%;">
        
        <!-- Top Brand Logo -->
        <div style="width: 150px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 9.54px; display: flex;">
          <div style="padding-top: 5.14px; padding-bottom: 5.14px; overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex;">
            <img src="/logo-pegadaian-dark.svg" alt="PT Pegadaian Logo" style="height: 32px; width: auto; object-fit: contain; display: block;" onerror="this.onerror=null; this.src='/logo-pegadaian.png';" />
          </div>
        </div>

        <!-- 5 Accordion Navigation Categories -->
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; width: 100%;">
          
          <!-- Accordion 1: Individu -->
          <details open class="group" style="width: 100%; border-bottom: 1px solid #ECECEC;">
            <summary style="padding-top: 16px; padding-bottom: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; outline: none;">
              <span style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px;">Individu</span>
              <div class="accordion-chevron" style="width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </summary>
            <div style="padding-top: 8px; padding-bottom: 18px; padding-left: 2px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 14px; display: flex;">
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Layanan Bank Emas</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Gadai</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Pembiayaan</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Layanan Lainnya</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Promo</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Event</a>
            </div>
          </details>

          <!-- Accordion 2: Bisnis -->
          <details class="group" style="width: 100%; border-bottom: 1px solid #ECECEC;">
            <summary style="padding-top: 16px; padding-bottom: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; outline: none;">
              <span style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px;">Bisnis</span>
              <div class="accordion-chevron" style="width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </summary>
            <div style="padding-top: 8px; padding-bottom: 18px; padding-left: 2px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 14px; display: flex;">
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Layanan Bank Emas</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Pinjaman</a>
            </div>
          </details>

          <!-- Accordion 3: Hubungan Investor -->
          <details class="group" style="width: 100%; border-bottom: 1px solid #ECECEC;">
            <summary style="padding-top: 16px; padding-bottom: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; outline: none;">
              <span style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px;">Hubungan Investor</span>
              <div class="accordion-chevron" style="width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </summary>
            <div style="padding-top: 8px; padding-bottom: 18px; padding-left: 2px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 14px; display: flex;">
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Kinerja Keuangan</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Sustainability</a>
            </div>
          </details>

          <!-- Accordion 4: Tentang Pegadaian -->
          <details class="group" style="width: 100%; border-bottom: 1px solid #ECECEC;">
            <summary style="padding-top: 16px; padding-bottom: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; outline: none;">
              <span style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px;">Tentang Pegadaian</span>
              <div class="accordion-chevron" style="width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </summary>
            <div style="padding-top: 8px; padding-bottom: 18px; padding-left: 2px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 14px; display: flex;">
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Profil Korporasi</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Tata Kelola</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Pengadaan</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Informasi Lainnya</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Berita & Artikel</a>
            </div>
          </details>

          <!-- Accordion 5: Lainnya -->
          <details class="group" style="width: 100%; border-bottom: 1px solid #ECECEC;">
            <summary style="padding-top: 16px; padding-bottom: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; outline: none;">
              <span style="color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px;">Lainnya</span>
              <div class="accordion-chevron" style="width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </summary>
            <div style="padding-top: 8px; padding-bottom: 18px; padding-left: 2px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 14px; display: flex;">
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Karir</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Simulasi</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Bantuan Pelanggan</a>
              <a href="#" style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 500; line-height: 20px; text-decoration: none;" class="hover:text-[#013428] transition-colors">Harga Emas</a>
            </div>
          </details>

        </div>

        <!-- Bottom Info Block (Mobile) -->
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 36px; display: flex; width: 100%;">
          
          <!-- PT Pegadaian & Social Icons -->
          <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex;">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
              <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word;" data-editable="footer-company-name">PT Pegadaian (Persero)</div>
              <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="footer-disclaimer">Pegadaian berizin dan diawasi oleh Otoritas Jasa Keuangan dan Bank Indonesia.</div>
            </div>
            <!-- Socials -->
            <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
              <!-- Facebook -->
              <a href="https://facebook.com/PegadaianPersero" target="_blank" rel="noopener noreferrer" style="width: 40px; height: 40px; background: var(--background-brand-primary-subtlest, #F8FCEB); border-radius: 9999px; justify-content: center; align-items: center; display: flex; cursor: pointer; text-decoration: none;" class="hover:opacity-80 transition-opacity" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#015743"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <!-- Instagram -->
              <a href="https://instagram.com/pegadaian_id" target="_blank" rel="noopener noreferrer" style="width: 40px; height: 40px; background: var(--background-brand-primary-subtlest, #F8FCEB); border-radius: 9999px; justify-content: center; align-items: center; display: flex; cursor: pointer; text-decoration: none;" class="hover:opacity-80 transition-opacity" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <!-- YouTube -->
              <a href="https://youtube.com/@PT_Pegadaian" target="_blank" rel="noopener noreferrer" style="width: 40px; height: 40px; background: var(--background-brand-primary-subtlest, #F8FCEB); border-radius: 9999px; justify-content: center; align-items: center; display: flex; cursor: pointer; text-decoration: none;" class="hover:opacity-80 transition-opacity" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#015743"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#F8FCEB"></polygon></svg>
              </a>
              <!-- LinkedIn -->
              <a href="https://linkedin.com/company/pt-pegadaian" target="_blank" rel="noopener noreferrer" style="width: 40px; height: 40px; background: var(--background-brand-primary-subtlest, #F8FCEB); border-radius: 9999px; justify-content: center; align-items: center; display: flex; cursor: pointer; text-decoration: none;" class="hover:opacity-80 transition-opacity" title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#015743"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <!-- X / Twitter -->
              <a href="https://x.com/Pegadaian" target="_blank" rel="noopener noreferrer" style="width: 40px; height: 40px; background: var(--background-brand-primary-subtlest, #F8FCEB); border-radius: 9999px; justify-content: center; align-items: center; display: flex; cursor: pointer; text-decoration: none;" class="hover:opacity-80 transition-opacity" title="X">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#015743"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
            </div>
          </div>

          <!-- Kantor Pusat -->
          <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex;">
            <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word;" data-editable="footer-office-title">Kantor Pusat</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;">
              <div style="align-self: stretch; color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 400; line-height: 20px; word-wrap: break-word;" data-editable="footer-office-address">The Gade Tower, Jl. Kramat Raya No.162, RT.2/RW.2, Kenari, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10430</div>
              <a href="https://maps.google.com/?q=The+Gade+Tower+Jakarta" target="_blank" rel="noopener noreferrer" style="border-radius: 999px; justify-content: flex-start; align-items: center; gap: 6px; display: inline-flex; text-decoration: none; cursor: pointer; padding-top: 4px;" class="hover:opacity-80 transition-opacity">
                <span style="color: var(--button-linked-default, #015743); font-size: 14px; font-family: Geist, sans-serif; font-weight: 700; line-height: 20px;" data-editable="footer-map-text">Buka Peta</span>
                <div style="width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <!-- Hubungi Kami -->
          <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex;">
            <div style="align-self: stretch; color: var(--text-neutral-default, #013428); font-size: 16px; font-family: Geist, sans-serif; font-weight: 600; line-height: 24px; word-wrap: break-word;">Hubungi Kami</div>
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex;">
              <a href="tel:1500569" style="overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; text-decoration: none;" class="hover:opacity-80 transition-opacity">
                <div style="width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px;" data-editable="footer-phone-1">1500 569</span>
              </a>
              <a href="tel:02180635162" style="overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; text-decoration: none;" class="hover:opacity-80 transition-opacity">
                <div style="width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px;" data-editable="footer-phone-2">021-80635162</span>
              </a>
              <a href="tel:0218581162" style="overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; text-decoration: none;" class="hover:opacity-80 transition-opacity">
                <div style="width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#015743" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span style="color: var(--text-neutral-subtle, #646467); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px;" data-editable="footer-phone-3">021-8581162</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- Mobile Copyright Bar -->
      <div style="align-self: stretch; width: 100%; padding-top: 24px; padding-bottom: 24px; padding-left: 24px; padding-right: 24px; background: #F8F8F8; overflow: hidden; justify-content: center; align-items: center; display: flex; box-sizing: border-box;">
        <div style="opacity: 0.70; color: var(--text-neutral-default, #013428); font-size: 14px; font-family: Geist, sans-serif; font-weight: 600; line-height: 20px; word-wrap: break-word; text-align: center;" data-editable="footer-copyright">© Hak Cipta 2025 PT Pegadaian (Persero)</div>
      </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'footer-company-name', label: 'Company Name', defaultValue: 'PT Pegadaian (Persero)' },
      { id: 'footer-disclaimer', label: 'Regulatory Disclaimer', defaultValue: 'Pegadaian berizin dan diawasi oleh Otoritas Jasa Keuangan dan Bank Indonesia.' },
      { id: 'footer-phone-1', label: 'Customer Care Call', defaultValue: '1500 569' },
      { id: 'footer-phone-2', label: 'Telephone 1', defaultValue: '021-80635162' },
      { id: 'footer-phone-3', label: 'Telephone 2', defaultValue: '021-8581162' },
      { id: 'footer-office-title', label: 'Headquarters Title', defaultValue: 'Kantor Pusat' },
      { id: 'footer-office-address', label: 'Headquarters Address', defaultValue: 'The Gade Tower, Jl. Kramat Raya No.162, RT.2/RW.2, Kenari, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10430' },
      { id: 'footer-map-text', label: 'Map Button Text', defaultValue: 'Buka Peta' },
      { id: 'footer-copyright', label: 'Copyright Notice', defaultValue: '© Hak Cipta 2025 PT Pegadaian (Persero)' }
    ]
  };
