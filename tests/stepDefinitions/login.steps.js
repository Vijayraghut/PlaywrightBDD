const { Given, When, Then } = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

Given('user launch the Application', async function () {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

});

When('user enter the username as {string} and password as {string}', async function (username, password) {

    await page.locator('//input[@name="username"]').fill(username)
    await page.locator('//input[@name="password"]').fill(password)

});


When('user click on login button', async function () {

    await page.locator('//button[@type="submit"]').click()

});


Then('user should navigate to the Dashboard page', async function () {

    await expect(page.locator("//span[text()='Dashboard']")).toBeVisible()
    await page.waitForTimeout(5000)
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
});

Then('user should get to the Error message', async function () {
    await expect(page.locator('//div[@class="oxd-alert-content oxd-alert-content--error"]')).toBeVisible()
    await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});


