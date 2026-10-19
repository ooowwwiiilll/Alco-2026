import type { SectionTemplate } from '../../../types';

export const sustainabilityReport2Section: SectionTemplate = {
    id: 'sustainability-report-2-section',
    name: '[SUSTAINABILITY REPORT 2]',
    category: 'CONTENT',
    description: 'Pegadaian SUSTAINABILITY REPORT 2 section with category headline, title section, GHG emissions stat card with background image, emission intensity card, emissions bar chart, donut chart, and pie breakdown.',
    htmlContent: `<div class="@container w-full select-none font-['Geist','Plus_Jakarta_Sans',sans-serif]">
  <!-- Desktop Layout -->
  <div class="sustainability-report-2-section-desktop w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 72px; padding-right: 72px; padding-top: 120px; padding-bottom: 120px; background: white; overflow: hidden; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex; box-sizing: border-box;">
        <div style="flex: 1 1 0; flex-direction: column; justify-content: center; align-items: flex-start; gap: 48px; display: inline-flex">
            <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
                <div style="width: 195px; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="sustainability2-category">Headline category Max 40 char and 2 Line.</div>
                <div style="width: 402px; max-width: 100%; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 44px; word-wrap: break-word" data-editable="sustainability2-title">{Title Section} <br/>Max 64 Character and 3 Line Max,</div>
            </div>
        </div>
        <div style="width: 748px; max-width: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
            <div style="align-self: stretch; overflow: hidden; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex; flex-wrap: wrap;">
                <div style="flex: 1 1 0; min-width: 280px; padding-top: 16px; padding-bottom: 24px; padding-left: 24px; padding-right: 24px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex; box-sizing: border-box;">
                    <div style="width: 165px; color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="sustainability2-card1-title">Total Emisi GRK · 2025</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 8px; display: flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 48px; font-family: Geist; font-weight: 500; line-height: 56px; word-wrap: break-word" data-editable="sustainability2-card1-stat">XXXXX</div>
                        <div style="color: rgba(255, 255, 255, 0.70); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="sustainability2-card1-unit">Ton CO₂-eq</div>
                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="sustainability2-card1-change">↑ 50,9% dari 2024</div>
                    </div>
                </div>
                <div style="flex: 1 1 0; min-width: 280px; padding-top: 16px; padding-bottom: 24px; padding-left: 24px; padding-right: 24px; background: var(--background-brand-primary-subtle, #EDF8CA); border-radius: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex; box-sizing: border-box;">
                    <div style="width: 165px; color: #0A2E1F; font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="sustainability2-card2-title">Intensitas Emisi</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 8px; display: flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 48px; font-family: Geist; font-weight: 500; line-height: 56px; word-wrap: break-word" data-editable="sustainability2-card2-stat">XXXXX</div>
                        <div style="color: rgba(10, 46, 31, 0.70); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="sustainability2-card2-unit">Ton CO₂-eq / Rp miliar</div>
                        <div style="color: var(--text-feedback-error, #F15F43); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word" data-editable="sustainability2-card2-change">↓ 36% dari 2024</div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex; flex-wrap: wrap;">
                <div style="flex: 1 1 0; min-width: 320px; height: 414px; overflow: hidden; border-radius: 24px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex; box-sizing: border-box;">
                    <div style="align-self: stretch; flex: 1 1 0; padding-top: 16px; padding-bottom: 24px; padding-left: 24px; padding-right: 24px; background: var(--background-surface-primary-default, white); overflow: hidden; border-radius: 4px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                        <div style="align-self: stretch; padding-bottom: 8px; justify-content: space-between; align-items: center; display: inline-flex">
                            <div style="width: 165px; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="sustainability2-chart1-title">Total Emisi</div>
                            <div style="background: var(--background-surface-primary-default, white); overflow: hidden; justify-content: flex-end; align-items: center; gap: 4px; display: flex">
                                <div style="justify-content: flex-end; align-items: center; gap: 10px; display: flex">
                                    <div style="width: 61px; height: 18px; position: relative">
                                        <div style="left: 29px; top: 0px; position: absolute; text-align: right; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 16px; word-wrap: break-word">2023</div>
                                    </div>
                                </div>
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                    <div style="width: 8px; height: 4px; left: 4px; top: 6px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                                </div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 48px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                            <div style="color: var(--text-brand-secondary, #015743); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word">XXXXX</div>
                        </div>
                        <div style="padding-bottom: 24px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                            <div style="opacity: 0.50; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">Ton CO₂-eq</div>
                        </div>
                        <div style="align-self: stretch; flex: 1 1 0; background: var(--background-surface-primary-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                            <div style="align-self: stretch; flex: 1 1 0; background: var(--background-surface-primary-default, white); overflow: hidden; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex">
                                <div style="align-self: stretch; padding-bottom: 18px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                                    <div style="align-self: stretch; height: 15.17px; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">35K</div>
                                    <div style="align-self: stretch; height: 15.17px; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">18K</div>
                                    <div style="align-self: stretch; height: 15.17px; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">9K</div>
                                    <div style="align-self: stretch; height: 15.17px; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">0</div>
                                </div>
                                <div style="flex: 1 1 0; align-self: stretch; background: var(--background-surface-primary-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                                    <div style="width: 100%; height: 184px; border: 1px var(--border-neutral-subtle, #E0E0E1) solid"></div>
                                    <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 10px; display: flex">
                                            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">2023</div>
                                        </div>
                                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 10px; display: flex">
                                            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">2024</div>
                                        </div>
                                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 10px; display: flex">
                                            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">2025</div>
                                        </div>
                                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 10px; display: flex">
                                            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">2026</div>
                                        </div>
                                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 10px; display: flex">
                                            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">2027</div>
                                        </div>
                                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 10px; display: flex">
                                            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">2028</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="align-self: stretch; height: 52px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                                <div style="align-self: stretch; flex: 1 1 0; padding-top: 24px; padding-bottom: 8px; padding-right: 10px; justify-content: flex-start; align-items: flex-end; gap: 8px; display: inline-flex">
                                    <div style="padding-top: 1px; padding-bottom: 1px; background: rgba(255, 255, 255, 0); overflow: hidden; justify-content: flex-start; align-items: center; display: flex">
                                        <div style="width: 16px; height: 16px; position: relative; background: rgba(255, 255, 255, 0); overflow: hidden">
                                            <div style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: var(--icon-brand-primary, #CCEA68); border-radius: 9999px"></div>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">Scope 1</div>
                                        </div>
                                    </div>
                                    <div style="padding-top: 1px; padding-bottom: 1px; background: rgba(255, 255, 255, 0); overflow: hidden; justify-content: flex-start; align-items: center; display: flex">
                                        <div style="width: 16px; height: 16px; position: relative; background: rgba(255, 255, 255, 0); overflow: hidden">
                                            <div style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: var(--background-brand-secondary-subtle, #99BCB5); border-radius: 9999px"></div>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">Scope 2</div>
                                        </div>
                                    </div>
                                    <div style="padding-top: 1px; padding-bottom: 1px; background: rgba(255, 255, 255, 0); overflow: hidden; justify-content: flex-start; align-items: center; display: flex">
                                        <div style="width: 16px; height: 16px; position: relative; background: rgba(255, 255, 255, 0); overflow: hidden">
                                            <div style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: var(--icon-brand-secondary, #015743); border-radius: 9999px"></div>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">Scope 3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 748px; max-width: 100%; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex; flex-wrap: wrap;">
                <div style="flex: 1 1 0; align-self: stretch; min-width: 260px; min-height: 200px; padding-top: 16px; padding-bottom: 24px; padding-left: 24px; padding-right: 24px; background: var(--background-surface-primary-default, white); overflow: hidden; border-radius: 24px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex; box-sizing: border-box;">
                    <div style="align-self: stretch; padding-bottom: 16px; justify-content: center; align-items: flex-start; display: inline-flex">
                        <div style="color: var(--Black, #131313); font-size: 18px; font-family: Geist; font-weight: 600; line-height: 26px; word-wrap: break-word" data-editable="sustainability2-donut-title">Title</div>
                    </div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 16px; display: flex">
                        <div style="width: 210.12px; height: 102px; position: relative">
                            <div style="width: 209.39px; height: 102px; left: 0px; top: 0px; position: absolute; background: var(--background-brand-primary-subtle, #EDF8CA)"></div>
                            <div style="width: 40.59px; height: 69.82px; left: 0px; top: 32.17px; position: absolute; background: #D9D9D9"></div>
                            <div style="width: 189.39px; height: 102px; left: 0px; top: 0px; position: absolute; background: var(--icon-brand-primary, #CCEA68)"></div>
                            <div style="left: 72.06px; top: 63px; position: absolute; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--Black, #131313); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word">XX%</div>
                        </div>
                    </div>
                    <div style="flex: 1 1 0; padding-top: 12px; flex-direction: column; justify-content: flex-end; align-items: center; gap: 8px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                            <div><span style="color: var(--text-feedback-success, #00AB4E); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word">↑</span><span style="color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 400; line-height: 20px; word-wrap: break-word"> 50,9% dari 2024</span></div>
                        </div>
                    </div>
                </div>
                <div style="width: 374px; max-width: 100%; height: 328px; overflow: hidden; border-radius: 24px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex; box-sizing: border-box;">
                    <div style="align-self: stretch; flex: 1 1 0; padding-top: 16px; padding-bottom: 24px; padding-left: 24px; padding-right: 24px; background: var(--background-page-default, white); overflow: hidden; border-radius: 4px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                        <div style="align-self: stretch; padding-bottom: 8px; justify-content: space-between; align-items: center; display: inline-flex">
                            <div style="width: 165px; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 700; line-height: 20px; word-wrap: break-word" data-editable="sustainability2-chart1-title">Total Emisi</div>
                            <div style="background: var(--background-surface-primary-default, white); overflow: hidden; justify-content: flex-end; align-items: center; gap: 4px; display: flex">
                                <div style="justify-content: flex-end; align-items: center; gap: 10px; display: flex">
                                    <div style="width: 61px; height: 18px; position: relative">
                                        <div style="left: 29px; top: 0px; position: absolute; text-align: right; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 16px; word-wrap: break-word">2023</div>
                                    </div>
                                </div>
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                    <div style="width: 8px; height: 4px; left: 4px; top: 6px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                                </div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 48px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                            <div style="color: var(--text-brand-secondary, #015743); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 38px; word-wrap: break-word">XXXXX</div>
                        </div>
                        <div style="padding-bottom: 24px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                            <div style="opacity: 0.50; color: var(--text-neutral-default, #01231B); font-size: 14px; font-family: Geist; font-weight: 600; line-height: 20px; word-wrap: break-word">Ton CO₂-eq</div>
                        </div>
                        <div style="align-self: stretch; flex: 1 1 0; padding: 10px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                            <div style="width: 148px; height: 148px; transform: rotate(180deg); transform-origin: top left; background: var(--icon-brand-secondary, #015743); border-radius: 9999px"></div>
                            <div style="width: 148px; height: 148px; transform: rotate(180deg); transform-origin: top left; background: var(--icon-brand-primary, #CCEA68); border-radius: 9999px"></div>
                            <div style="width: 148px; height: 148px; transform: rotate(180deg); transform-origin: top left; background: var(--background-brand-secondary-subtle, #99BCB5); border-radius: 9999px"></div>
                            <div style="width: 26.63px; height: 14.22px; text-align: center; color: var(--text-neutral-onDark-default, white); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 16px; word-wrap: break-word">35%</div>
                            <div style="width: 26.63px; height: 14.22px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 16px; word-wrap: break-word">50%</div>
                            <div style="width: 26.63px; height: 14.22px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 16px; word-wrap: break-word">15%</div>
                            <div style="flex: 1 1 0; align-self: stretch; padding: 10px; flex-direction: column; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                                <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                                    <div style="padding-top: 1px; padding-bottom: 1px; background: rgba(255, 255, 255, 0); overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                                        <div style="width: 16px; height: 16px; position: relative; background: rgba(255, 255, 255, 0); overflow: hidden">
                                            <div style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: var(--icon-brand-primary, #CCEA68); border-radius: 9999px"></div>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Poppins; font-weight: 500; word-wrap: break-word">Content</div>
                                        </div>
                                    </div>
                                    <div style="padding-top: 1px; padding-bottom: 1px; background: rgba(255, 255, 255, 0); overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                                        <div style="width: 16px; height: 16px; position: relative; background: rgba(255, 255, 255, 0); overflow: hidden">
                                            <div style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: var(--background-brand-secondary-subtle, #99BCB5); border-radius: 9999px"></div>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Poppins; font-weight: 500; word-wrap: break-word">Content</div>
                                        </div>
                                    </div>
                                    <div style="padding-top: 1px; padding-bottom: 1px; background: rgba(255, 255, 255, 0); overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                                        <div style="width: 16px; height: 16px; position: relative; background: rgba(255, 255, 255, 0); overflow: hidden">
                                            <div style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: var(--icon-brand-secondary, #015743); border-radius: 9999px"></div>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Poppins; font-weight: 500; word-wrap: break-word">Content</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="sustainability-report-2-section-mobile w-full overflow-hidden bg-white flex justify-center">
    <div style="width: 100%; height: 100%; padding-left: 24px; padding-right: 24px; padding-top: 100px; padding-bottom: 100px; background: white; overflow: hidden; border-bottom: 1px var(--border-neutral-subtle, #E0E0E1) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex; box-sizing: border-box;">
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="width: 195px; max-width: 100%; opacity: 0.70; color: var(--text-neutral-default, #01231B); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="sustainability2-category">Headline category Max 40 char and 2 Line.</div>
            <div style="align-self: stretch; color: var(--text-neutral-default, #01231B); font-size: 32px; font-family: Geist; font-weight: 500; line-height: 40px; word-wrap: break-word" data-editable="sustainability2-title">{Title Section} <br/>Max 64 Character and 3 Line Max,</div>
        </div>
        <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: flex">
                <div style="align-self: stretch; padding-top: 12px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px; border-radius: 24px; background-image: url(/background.png); background-size: cover; background-position: center; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex; box-sizing: border-box;">
                    <div style="width: 165px; color: var(--text-neutral-onDark-default, white); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="sustainability2-card1-title">Total Emisi GRK · 2025</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-onDark-default, white); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 48px; word-wrap: break-word" data-editable="sustainability2-card1-stat">XXXXX</div>
                        <div style="color: rgba(255, 255, 255, 0.70); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="sustainability2-card1-unit">Ton CO₂-eq</div>
                        <div style="color: var(--text-neutral-onDark-default, white); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="sustainability2-card1-change">↑ 50,9% dari 2024</div>
                    </div>
                </div>
                <div style="align-self: stretch; padding-top: 12px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px; background: var(--background-brand-primary-subtle, #EDF8CA); border-radius: 24px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex; box-sizing: border-box;">
                    <div style="width: 165px; color: #0A2E1F; font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="sustainability2-card2-title">Intensitas Emisi</div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-end; align-items: flex-start; gap: 4px; display: flex">
                        <div style="text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--text-neutral-default, #01231B); font-size: 40px; font-family: Geist; font-weight: 500; line-height: 48px; word-wrap: break-word" data-editable="sustainability2-card2-stat">XXXXX</div>
                        <div style="color: rgba(10, 46, 31, 0.70); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="sustainability2-card2-unit">Ton CO₂-eq / Rp miliar</div>
                        <div style="color: var(--text-feedback-error, #F15F43); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word" data-editable="sustainability2-card2-change">↓ 36% dari 2024</div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
                <div style="flex: 1 1 0; height: 414px; overflow: hidden; border-radius: 16px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex; box-sizing: border-box;">
                    <div style="align-self: stretch; flex: 1 1 0; padding-top: 12px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px; background: var(--background-surface-primary-default, white); overflow: hidden; border-radius: 4px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                        <div style="align-self: stretch; padding-bottom: 4px; justify-content: space-between; align-items: center; display: inline-flex">
                            <div style="width: 165px; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="sustainability2-chart1-title">Total Emisi</div>
                            <div style="background: var(--background-surface-primary-default, white); overflow: hidden; justify-content: flex-end; align-items: center; gap: 2px; display: flex">
                                <div style="justify-content: flex-end; align-items: center; gap: 10px; display: flex">
                                    <div style="width: 61px; height: 18px; position: relative">
                                        <div style="left: 34px; top: 0px; position: absolute; text-align: right; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 700; line-height: 16px; word-wrap: break-word">2023</div>
                                    </div>
                                </div>
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                    <div style="width: 8px; height: 4px; left: 4px; top: 6px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                                </div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 48px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                            <div style="color: var(--text-brand-secondary, #015743); font-size: 24px; font-family: Geist; font-weight: 500; line-height: 32px; word-wrap: break-word">XXXXX</div>
                        </div>
                        <div style="padding-bottom: 20px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                            <div style="opacity: 0.50; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">Ton CO₂-eq</div>
                        </div>
                        <div style="align-self: stretch; flex: 1 1 0; background: var(--background-surface-primary-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
                            <div style="align-self: stretch; flex: 1 1 0; background: var(--background-surface-primary-default, white); overflow: hidden; justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
                                <div style="align-self: stretch; padding-bottom: 18px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                                    <div style="align-self: stretch; height: 15.17px; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">35K</div>
                                    <div style="align-self: stretch; height: 15.17px; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">18K</div>
                                    <div style="align-self: stretch; height: 15.17px; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">9K</div>
                                    <div style="align-self: stretch; height: 15.17px; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">0</div>
                                </div>
                                <div style="flex: 1 1 0; align-self: stretch; background: var(--background-surface-primary-default, white); overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                                    <div style="width: 100%; height: 206px; border: 1px var(--border-neutral-subtle, #E0E0E1) solid"></div>
                                    <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 10px; display: flex">
                                            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">2023</div>
                                        </div>
                                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 10px; display: flex">
                                            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">2024</div>
                                        </div>
                                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 10px; display: flex">
                                            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">2025</div>
                                        </div>
                                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 10px; display: flex">
                                            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">2026</div>
                                        </div>
                                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 10px; display: flex">
                                            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">2027</div>
                                        </div>
                                        <div style="flex: 1 1 0; justify-content: center; align-items: center; gap: 10px; display: flex">
                                            <div style="flex: 1 1 0; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">2028</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="align-self: stretch; height: 52px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                                <div style="align-self: stretch; flex: 1 1 0; padding-top: 20px; padding-bottom: 4px; padding-right: 10px; justify-content: flex-start; align-items: flex-end; gap: 4px; display: inline-flex">
                                    <div style="padding-top: 1px; padding-bottom: 1px; background: rgba(255, 255, 255, 0); overflow: hidden; justify-content: flex-start; align-items: center; display: flex">
                                        <div style="width: 16px; height: 16px; position: relative; background: rgba(255, 255, 255, 0); overflow: hidden">
                                            <div style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: var(--icon-brand-primary, #CCEA68); border-radius: 9999px"></div>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                            <div style="color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">Scope 1</div>
                                        </div>
                                    </div>
                                    <div style="padding-top: 1px; padding-bottom: 1px; background: rgba(255, 255, 255, 0); overflow: hidden; justify-content: flex-start; align-items: center; display: flex">
                                        <div style="width: 16px; height: 16px; position: relative; background: rgba(255, 255, 255, 0); overflow: hidden">
                                            <div style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: var(--background-brand-secondary-subtle, #99BCB5); border-radius: 9999px"></div>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                            <div style="color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">Scope 2</div>
                                        </div>
                                    </div>
                                    <div style="padding-top: 1px; padding-bottom: 1px; background: rgba(255, 255, 255, 0); overflow: hidden; justify-content: flex-start; align-items: center; display: flex">
                                        <div style="width: 16px; height: 16px; position: relative; background: rgba(255, 255, 255, 0); overflow: hidden">
                                            <div style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: var(--icon-brand-secondary, #015743); border-radius: 9999px"></div>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                            <div style="color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 400; line-height: 16px; word-wrap: break-word">Scope 3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; display: flex">
                <div style="align-self: stretch; height: 222px; min-width: 260px; min-height: 200px; padding-top: 12px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px; background: var(--background-surface-primary-default, white); overflow: hidden; border-radius: 16px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 4px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; padding-bottom: 12px; justify-content: center; align-items: flex-start; display: inline-flex">
                        <div style="color: var(--Black, #131313); font-size: 16px; font-family: Geist; font-weight: 600; line-height: 22px; word-wrap: break-word" data-editable="sustainability2-donut-title">Title</div>
                    </div>
                    <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 12px; display: flex">
                        <div style="width: 210.12px; height: 102px; position: relative">
                            <div style="width: 209.39px; height: 102px; left: 0px; top: 0px; position: absolute; background: var(--background-brand-primary-subtle, #EDF8CA)"></div>
                            <div style="width: 40.59px; height: 69.82px; left: 0px; top: 32.17px; position: absolute; background: #D9D9D9"></div>
                            <div style="width: 189.39px; height: 102px; left: 0px; top: 0px; position: absolute; background: var(--icon-brand-primary, #CCEA68)"></div>
                            <div style="left: 81.06px; top: 66px; position: absolute; text-align: center; justify-content: center; display: flex; flex-direction: column; color: var(--Black, #131313); font-size: 24px; font-family: Geist; font-weight: 500; line-height: 32px; word-wrap: break-word">XX%</div>
                        </div>
                    </div>
                    <div style="flex: 1 1 0; padding-top: 8px; flex-direction: column; justify-content: flex-end; align-items: center; gap: 4px; display: flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 2px; display: inline-flex">
                            <div><span style="color: var(--text-feedback-success, #00AB4E); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word">↑</span><span style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 400; line-height: 18px; word-wrap: break-word"> 50,9% dari 2024</span></div>
                        </div>
                    </div>
                </div>
                <div style="align-self: stretch; overflow: hidden; border-radius: 16px; outline: 1px var(--border-neutral-subtle, #E0E0E1) solid; outline-offset: -1px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex; box-sizing: border-box;">
                    <div style="align-self: stretch; padding-top: 12px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px; background: var(--background-page-default, white); overflow: hidden; border-radius: 4px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex; box-sizing: border-box;">
                        <div style="align-self: stretch; padding-bottom: 4px; justify-content: space-between; align-items: center; display: inline-flex">
                            <div style="width: 165px; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 700; line-height: 18px; word-wrap: break-word" data-editable="sustainability2-chart1-title">Total Emisi</div>
                            <div style="background: var(--background-surface-primary-default, white); overflow: hidden; justify-content: flex-end; align-items: center; gap: 2px; display: flex">
                                <div style="justify-content: flex-end; align-items: center; gap: 10px; display: flex">
                                    <div style="width: 61px; height: 18px; position: relative">
                                        <div style="left: 34px; top: 0px; position: absolute; text-align: right; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 700; line-height: 16px; word-wrap: break-word">2023</div>
                                    </div>
                                </div>
                                <div data-color="Brand" style="width: 16px; height: 16px; position: relative; overflow: hidden">
                                    <div style="width: 8px; height: 4px; left: 4px; top: 6px; position: absolute; outline: 1.50px var(--icon-brand-secondary, #015743) solid; outline-offset: -0.75px"></div>
                                </div>
                            </div>
                        </div>
                        <div style="align-self: stretch; height: 48px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                            <div style="color: var(--text-brand-secondary, #015743); font-size: 24px; font-family: Geist; font-weight: 500; line-height: 32px; word-wrap: break-word">XXXXX</div>
                        </div>
                        <div style="padding-bottom: 20px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                            <div style="opacity: 0.50; color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Geist; font-weight: 600; line-height: 18px; word-wrap: break-word">Ton CO₂-eq</div>
                        </div>
                        <div style="align-self: stretch; padding: 10px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                            <div style="width: 126px; height: 126px; transform: rotate(180deg); transform-origin: top left; background: var(--icon-brand-secondary, #015743); border-radius: 9999px"></div>
                            <div style="width: 126px; height: 126px; transform: rotate(180deg); transform-origin: top left; background: var(--icon-brand-primary, #CCEA68); border-radius: 9999px"></div>
                            <div style="width: 126px; height: 126px; transform: rotate(180deg); transform-origin: top left; background: var(--background-brand-secondary-subtle, #99BCB5); border-radius: 9999px"></div>
                            <div style="width: 22.67px; height: 12.11px; text-align: center; color: var(--text-neutral-onDark-default, white); font-size: 10px; font-family: Geist; font-weight: 700; line-height: 16px; word-wrap: break-word">35%</div>
                            <div style="width: 22.67px; height: 12.11px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 700; line-height: 16px; word-wrap: break-word">50%</div>
                            <div style="width: 22.67px; height: 12.11px; text-align: center; color: var(--text-neutral-default, #01231B); font-size: 10px; font-family: Geist; font-weight: 700; line-height: 16px; word-wrap: break-word">15%</div>
                            <div style="width: 118px; height: 126px; padding: 10px; flex-direction: column; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                                <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: flex">
                                    <div style="padding-top: 1px; padding-bottom: 1px; background: rgba(255, 255, 255, 0); overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                                        <div style="width: 16px; height: 16px; position: relative; background: rgba(255, 255, 255, 0); overflow: hidden">
                                            <div style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: var(--icon-brand-primary, #CCEA68); border-radius: 9999px"></div>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Poppins; font-weight: 500; word-wrap: break-word">Content</div>
                                        </div>
                                    </div>
                                    <div style="padding-top: 1px; padding-bottom: 1px; background: rgba(255, 255, 255, 0); overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                                        <div style="width: 16px; height: 16px; position: relative; background: rgba(255, 255, 255, 0); overflow: hidden">
                                            <div style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: var(--background-brand-secondary-subtle, #99BCB5); border-radius: 9999px"></div>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Poppins; font-weight: 500; word-wrap: break-word">Content</div>
                                        </div>
                                    </div>
                                    <div style="padding-top: 1px; padding-bottom: 1px; background: rgba(255, 255, 255, 0); overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                                        <div style="width: 16px; height: 16px; position: relative; background: rgba(255, 255, 255, 0); overflow: hidden">
                                            <div style="width: 8px; height: 8px; left: 4px; top: 4px; position: absolute; background: var(--icon-brand-secondary, #015743); border-radius: 9999px"></div>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                                            <div style="color: var(--text-neutral-default, #01231B); font-size: 12px; font-family: Poppins; font-weight: 500; word-wrap: break-word">Content</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`,
    editableFields: [
      { id: 'sustainability2-category', label: 'Category Headline', defaultValue: 'Headline category Max 40 char and 2 Line.' },
      { id: 'sustainability2-title', label: 'Section Title', defaultValue: '{Title Section} \nMax 64 Character and 3 Line Max,' },
      { id: 'sustainability2-card1-title', label: 'Card 1 Title', defaultValue: 'Total Emisi GRK · 2025' },
      { id: 'sustainability2-card1-stat', label: 'Card 1 Stat', defaultValue: 'XXXXX' },
      { id: 'sustainability2-card1-unit', label: 'Card 1 Unit', defaultValue: 'Ton CO₂-eq' },
      { id: 'sustainability2-card1-change', label: 'Card 1 Change', defaultValue: '↑ 50,9% dari 2024' },
      { id: 'sustainability2-card2-title', label: 'Card 2 Title', defaultValue: 'Intensitas Emisi' },
      { id: 'sustainability2-card2-stat', label: 'Card 2 Stat', defaultValue: 'XXXXX' },
      { id: 'sustainability2-card2-unit', label: 'Card 2 Unit', defaultValue: 'Ton CO₂-eq / Rp miliar' },
      { id: 'sustainability2-card2-change', label: 'Card 2 Change', defaultValue: '↓ 36% dari 2024' },
      { id: 'sustainability2-chart1-title', label: 'Chart 1 Title', defaultValue: 'Total Emisi' },
      { id: 'sustainability2-donut-title', label: 'Donut Chart Title', defaultValue: 'Title' }
    ]
  };
