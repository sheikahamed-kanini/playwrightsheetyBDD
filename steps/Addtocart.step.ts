import { Given, When, Then } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

Given('user is on the homepage', async ({ addToCartPage, page }) => {
  // After successful login, we're on the dashboard
  // Navigate to the products/shop page
  const currentUrl = page.url();
  console.log('Current URL after login:', currentUrl);
  
  // If we're on dashboard, the products should be visible
  // Wait for products to load
  await page.waitForSelector('.card-body', { timeout: 10000 });
  console.log('Homepage/Products page loaded');
});

When('user see {string} in the product list', async ({ addToCartPage, page }, productName: string) => {
  // Verify product is visible in the list
  const products = page.locator('.card-body');
  const productCount = await products.count();
  console.log(`Found ${productCount} products`);
  
  let found = false;
  for (let i = 0; i < productCount; i++) {
    const text = await products.nth(i).textContent();
    if (text?.toLowerCase().includes(productName.toLowerCase())) {
      found = true;
      console.log(`Product "${productName}" found at index ${i}`);
      break;
    }
  }
  
  expect(found).toBeTruthy();
  console.log(`Product "${productName}" found in the list`);
});

Then('user click on view', async ({ addToCartPage }) => {
  // Click the view or details button for the product
  await addToCartPage.clickViewButtonForProduct('zara coat 3');
  console.log('Clicked view button for product');
});

Then('user click on Add to cart', async ({ addToCartPage }) => {
  // Click the Add to cart button
  await addToCartPage.clickAddToCartButton();
  console.log('Clicked Add to cart button');
});

Then('user should see product added to the cart auccesfully', async ({ addToCartPage }) => {
  // Verify product was added successfully
  await addToCartPage.verifyProductAddedToCart();
  console.log('Product successfully added to cart');
});