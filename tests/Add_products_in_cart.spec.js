import {test,expect} from '@playwright/test';
test("Add products in cart test",async({page})=>{
    await page.goto("https://automationexercise.com/",{
        waitUntil: 'domcontentloaded', // faster, avoids networkidle hang
        timeout: 60000 // increase timeout
    });
    await page.locator('[href="/products"]').click();
    await page.locator('a.add-to-cart[data-product-id="1"]').first().click();
    await page.locator('button:has-text("Continue Shopping")').click();
    await page.locator('a.add-to-cart[data-product-id="2"]').first().click();
    await page.getByRole('link', { name: 'View Cart' }).click();
    const bool_1 = await page.locator("h4:has-text('Blue Top')").isVisible();
    expect(bool_1).toBeTruthy();
    const bool_2 = await page.locator("h4:has-text('Men Tshirt')").isVisible();
    expect(bool_2).toBeTruthy();
})

