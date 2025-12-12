import {test,expect} from '@playwright/test';

test("Subcription on Cart Page Test",async({page})=>
{
    await page.goto("https://automationexercise.com", {
    waitUntil: 'domcontentloaded', // faster, avoids networkidle hang
    timeout: 60000 // increase timeout
    });
     await page.locator('[href="/view_cart"]').first().click();
     const footer=page.locator('#footer');
     await footer.scrollIntoViewIfNeeded();
     page.pause();
});