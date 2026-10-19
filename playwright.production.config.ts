import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/production',
  outputDir: './test-results/production',
  workers: 1,
  use: { baseURL: 'http://localhost:4175' },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        launchOptions: process.env.ALCO_FIREFOX_EXECUTABLE
          ? { executablePath: process.env.ALCO_FIREFOX_EXECUTABLE }
          : {},
      },
    },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  webServer: {
    command: 'npm run start',
    env: { PORT: '4175', VITE_FIREBASE_CONFIG: '' },
    url: 'http://localhost:4175',
  },
});
