import {test,expect} from '@playwright/test';

test("Title validation", async ({ page }) =>
{
    await page.goto("https://automationexercise.com/");
    const Title = await page.title();
    expect(Title).toBe("Automation Exercise");
})

test("Logo visibility" , async({page})=>
{
    await page.goto("https://automationexercise.com/");
    const logo=await page.locator('.logo').isVisible();
    expect(logo).toBeTruthy();
});

