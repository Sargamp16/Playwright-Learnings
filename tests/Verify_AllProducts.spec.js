import { test, expect } from '@playwright/test';

test("Verify Product Listing", async ({ page }) => {

    await page.goto("https://automationexercise.com/");
    await expect(page).toHaveURL("https://automationexercise.com/");


    await page.locator("[href='/products']").click();
    await expect(page).toHaveURL(/products/);

    const title = await page.locator(".title").textContent();
    expect(title).toContain("All Products");

    console.log(await page.locator(".col-sm-4").allTextContents());

    await page.locator('[href*="/product_details"]').first().click();
    await expect(page).toHaveURL(/product_details/);

    const productTitle = await page.locator('.product-information > h2').textContent();
    console.log("Title of the Product is: " + productTitle);

    const category = await page.locator('.product-information p:has-text("Category")').textContent();
    console.log(category);
});
