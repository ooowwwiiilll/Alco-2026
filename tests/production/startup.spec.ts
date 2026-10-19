import { expect, test } from '@playwright/test';

for (const route of ['/', '/preview/missing/1']) {
  test(`production bundle starts at ${route} and never enables localhost demo access`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(route);
    await expect(page.getByRole('alert')).toContainText('Configure VITE_FIREBASE_CONFIG');
    await expect(page.getByRole('button', { name: /Admin Utama/ })).toHaveCount(0);
    expect(errors).toEqual([]);
  });
}
