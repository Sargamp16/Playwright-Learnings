import{test,expect} from '@playwright/test';
test('Existing Email Registration Test',async({page})=>
{
    await page.goto("https://automationexercise.com/");
    await page.locator("[href*='login']").click();
    await expect(page.locator("h2:has-text('New User Signup!')")).toBeVisible();
    await page.locator("[data-qa='signup-name']").fill("Test User");
    await page.locator("[data-qa='signup-email']").fill("john@yopmail.com");
    await page.locator("[data-qa='signup-button']").click();
    await expect(page.locator("p:has-text('Email Address already exist!')")).toBeVisible();
})