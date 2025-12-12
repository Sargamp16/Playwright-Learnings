import{test,expect} from '@playwright/test';
test('Contact Form Test',async({page})=>
{
    await page.goto("https://automationexercise.com/");
    await page.locator("[href*='contact_us']").click();
    await expect(page.locator("h2:has-text('Get In Touch')")).toBeVisible();
    await page.getByPlaceholder("Name").fill("Test User");
    await page.locator('[data-qa="email"]').fill("testuser@example.com");
    await page.getByPlaceholder("Subject").fill("New Test Subject");
    await page.getByPlaceholder("Your Message Here").fill("This is a test message for the contact form.");
    await page.locator("[name*='upload_file']").setInputFiles("/Users/sargampanwar/Library/CloudStorage/OneDrive-CoadjuteLtd/Desktop/sample/message.pdf");
    await page.waitForTimeout(2000);
    await page.on('dialog', dialog => dialog.accept());
    await page.locator("[data-qa*='submit-button']").click();
    const status = page.locator(".status");
    await expect(status).toHaveText("Success! Your details have been submitted successfully.");
    await page.locator(".btn-success").click();
    await expect(page).toHaveURL("https://automationexercise.com/");
})