import { test, expect } from '@playwright/test';

test('Verify Searched Product', async ({ page }) => {
    const productName = "blue top";

    // Navigate to website
    await page.goto("https://automationexercise.com/");
    await page.locator("a[href='/products']").click();

    // Type into search box
    await page.locator("input[name='search']").fill(productName);
    await page.locator("button[id='submit_search']").click();

    // Wait for results to appear
    await expect(page.locator("h2:has-text('Searched Products')")).toBeVisible();

    // Verify at least one product matches
    const productTitles = page.locator('.productinfo p', { hasText: productName });
    await expect(productTitles.first()).toBeVisible();
});
