import{test,expect} from '@playwright/test';
test("Verify Product quantity in cart",async({page})=>
{
    await page.goto("https://automationexercise.com/",{
        waitUntil: 'domcontentloaded', // faster, avoids networkidle hang
        timeout: 60000 // increase timeout
    });
    await page.locator("[href*=product_details]").first().click();
    await expect(page).toHaveURL(/\/product_details\/\d+/);
    await page.locator("#quantity").fill("4");
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await page.getByRole('link', { name: 'View Cart' }).click();
    await expect(page.locator(".cart_quantity button")).toHaveText("4");
})