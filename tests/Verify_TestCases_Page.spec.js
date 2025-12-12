import{test,expect} from '@playwright/test';
test("Verify Test Case Page",async({page})=>{

    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState('networkidle');
    await page.locator("[href*='test_cases']").click();
    await expect(page).toHaveURL("https://automationexercise.com/test_cases");
})