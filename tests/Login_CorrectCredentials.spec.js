import{test,expect} from '@playwright/test';

test('Login Funcationality Test',async({page})=>
{
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState('networkidle');
    await page.locator('.fa-lock').click();
    await page.locator('[data-qa="login-email"]').click();
    await page.locator('[data-qa="login-email"]').fill('sargam01@yopmail.com');
    await page.locator('[data-qa="login-password"]').click();
    await page.locator('[data-qa="login-password"]').fill('Password123');
    await page.getByRole('button',{name:'Login'}).click();
});