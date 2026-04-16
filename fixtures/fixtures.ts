import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import { AddToCartPage } from '../pages/AddToCartPage';

export const test = base.extend<{ loginPage: LoginPage; addToCartPage: AddToCartPage }>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  addToCartPage: async ({ page }, use) => {
    await use(new AddToCartPage(page));
  },
});

export const { Given, When, Then } = createBdd(test);
