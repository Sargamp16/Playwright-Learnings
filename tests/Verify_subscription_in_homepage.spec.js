import {test,expect} from '@playwright/test';

test("Verify Subcription",async ({page})=>
{
   await page.goto("https://automationexercise.com/");
   await page.waitForLoadState("networkidle");
   await expect(page.locator(".single-widget").first()).toContainText("Subscription");
   await page.locator("#susbscribe_email").fill("josie@yopmail.com");
   await page.locator("#subscribe").click();
   await expect(page.locator(".alert")).toBeVisible({timeout: 5000});
});