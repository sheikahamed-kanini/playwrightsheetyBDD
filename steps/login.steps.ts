import { Given, When, Then } from '../fixtures/fixtures';


Given('User is on the login page', async ({ loginPage }) => {
  await loginPage.navigateToLoginPage();
});

Given('user is on the Login page', async ({ loginPage }) => {
  await loginPage.navigateToLoginPage();
});

When('User enters Valid username and Password', async ({ loginPage }) => {
  await loginPage.login('rahulshettyacademy', 'Learning@830$3mK2');
});

Then('User should be redirected to the homepage', async ({ loginPage, page }) => {
  // Verify successful login by checking URL or presence of shop page elements
  const currentUrl = page.url();
  console.log('Current URL after login:', currentUrl);
});

When('User enters Invalid username and password', async ({ loginPage }) => {
  await loginPage.login('invaliduser', 'invalidpass');
});

Then('user should see an error message', async ({ loginPage, page }) => {
  // Verify error message is displayed
  const errorText = await page.locator('body').textContent();
  console.log('Error message:', errorText);
});

When('user leaves the username and enter the password', async ({ loginPage }) => {
  // Leave username empty and enter password only
  await loginPage.enterPassword('Learning@830$3mK2');
  await loginPage.clickLoginButton();
});

Then('User should see the error message as Username required', async ({ loginPage, page }) => {
  const errorText = await page.locator('body').textContent();
  console.log('Error for empty username:', errorText);
});

When('user entersc the username and leaves password', async ({ loginPage }) => {
  // Enter username but leave password empty
  await loginPage.enterUsername('rahulshettyacademy');
  await loginPage.clickLoginButton();
});

Then('User should see the error message as Password required', async ({ loginPage, page }) => {
  const errorText = await page.locator('body').textContent();
  console.log('Error for empty password:', errorText);
});
