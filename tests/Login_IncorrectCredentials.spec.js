import{test,expect} from '@playwright/test';
test('Login Condition : incorrect email and password',async({page})=>
{
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState('networkidle');
    await page.locator('.fa-lock').click();
    await page.locator('[data-qa="login-email"]').click();
    await expect(page.locator('.login-form')).toBeVisible();
    await page.locator('[data-qa="login-email"]').fill('invalid_email@yopmail.com');
    await page.locator('[data-qa="login-password"]').click();
    await page.locator('[data-qa="login-password"]').fill('invalidPassword');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});