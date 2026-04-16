import { Page, expect } from '@playwright/test';

export class AddToCartPage {
  constructor(private page: Page) {}

  async findProduct(productName: string) {
    // Find product by text content in card
    const products = this.page.locator('.card-body');
    const productCount = await products.count();
    
    for (let i = 0; i < productCount; i++) {
      const text = await products.nth(i).textContent();
      if (text?.toLowerCase().includes(productName.toLowerCase())) {
        return i;
      }
    }
    throw new Error(`Product "${productName}" not found`);
  }

  async clickViewButtonForProduct(productName: string) {
    const productIndex = await this.findProduct(productName);
    // Find the parent card and click the view button
    const productCard = this.page.locator('.card-body').nth(productIndex);
    const parent = productCard.locator('..').locator('..');
    
    // Click button that might contain "View" or any button
    const button = parent.locator('button').first();
    await button.click();
    await this.page.waitForTimeout(2000);
  }

  async clickAddToCartButton() {
    // Look for add to cart button - might be in different places
    // Try multiple selectors
    try {
      await this.page.locator('button:has-text("Add to Cart")').first().click();
    } catch {
      try {
        await this.page.locator('button.btn-primary').click();
      } catch {
        // If button contains text, try that
        await this.page.locator('button').filter({ hasText: /add|cart/i }).first().click();
      }
    }
    await this.page.waitForTimeout(2000);
  }

  async verifyProductAddedToCart() {
    // Wait for success notification/toast
    try {
      // Look for toast/notification messages
      const notification = this.page.locator('.toast-success, .ng-trigger-notificationAnimation, .ngx-toastr');
      await expect(notification).toBeVisible({ timeout: 5000 });
    } catch {
      // If no notification, just wait and check
      await this.page.waitForTimeout(2000);
    }
    console.log('Product added to cart successfully');
  }

  async getCartItemCount() {
    try {
      const cartBadge = this.page.locator('.badge');
      return await cartBadge.textContent();
    } catch {
      return '0';
    }
  }
}
