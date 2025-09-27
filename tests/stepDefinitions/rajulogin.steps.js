const { Given, When, Then } = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

const logindata = require("../../TestData/login.json");

Given('User Launch the Application', async function () {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

});


When('User Enter username as {string} and Password as {string}', async function (username,password) {

    await page.locator('//input[@name="username"]').fill(username)
    await page.locator('//input[@name="password"]').fill(password)
});

// // if we use .env file we dont want write above step insted of that we can write below step
// When('User enter Valid username and password', async function () {

//     await page.locator('//input[@name="username"]').fill(process.env.Username)
//     await page.locator('//input[@name="password"]').fill(process.env.password)
// });



 When('User enter Valid username and password', async function () {

    await page.locator('//input[@name="username"]').fill(logindata.username)
    await page.locator('//input[@name="password"]').fill(logindata.password)
});

When('User clicks on login button', async function () {

    await page.locator('//button[@type="submit"]').click()

});

Then('User should be navigated to Dashboard page', async function () {

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
});

Then('User should get the login error Message', async function () {
   
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
});