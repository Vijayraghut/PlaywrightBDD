const { Given, When, Then } = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

 Then('user should click on PIM module',async function () {

           await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click();

         });

 Then('user click on add employee sub menu',async function () {
           await page.locator("//a[text()='Add Employee']").click();
         }); 
         
         
         Then('user enter First name as {string} and Last name as {string}',async function (Firstname, Lastname) {

            await page.locator('//input[@placeholder="First Name"]').fill(Firstname);
           await page.locator('//input[@placeholder="Last Name"]').fill(Lastname);
         });

         Then('user clicks on save button',async function () {
          await page.locator('//button[@type="submit"]').click()
         });

         Then('user should get Successfully saved message',async function () {
           await expect (page.locator('//div[@aria-live="assertive"]')).toBeVisible()
         });

         Then('user should get personal detalis page',async function () {
           await expect (page.locator("//a[text()='Personal Details']")).toBeVisible()
         
         });

             Then('user should get Error message for firstname and last name fields',async function () {
           await expect (page.locator("(//span[text()='Required'])[1]")).toBeVisible()
           await expect (page.locator("(//span[text()='Required'])[2]")).toBeVisible()
         });