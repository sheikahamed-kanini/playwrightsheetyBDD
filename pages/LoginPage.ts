import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigateToLoginPage(url: string = 'https://rahulshettyacademy.com/loginpagePractise/') {
    await this.page.goto(url);
  }

  async enterUsername(username: string) {
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
  }

  async enterPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  }

  async clickLoginButton() {
    await this.page.getByRole('button', { name: 'Sign In' }).click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async verifyErrorMessage(expectedMessage: string) {
    const errorMessage = this.page.locator('.error-message, [class*="error"]');
    await expect(errorMessage).toContainText(expectedMessage);
  }

  async verifySuccessfulRedirect(expectedUrl: string) {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async verifyUsernameRequiredError() {
    const errorText = await this.page.locator('body').textContent();
    expect(errorText).toContain('Username required');
  }
  async verifyPasswordRequiredError(){
    const errorText= await this.page.locator('body').textContent();
    expect(errorText).toContain('Password required');
  
  }
}
