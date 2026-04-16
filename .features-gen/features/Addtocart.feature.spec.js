// Generated from: features\Addtocart.feature
import { test } from "../../fixtures/fixtures.ts";

test.describe('Add to cart', () => {

  test.beforeEach('Background', async ({ Given, When, Then, loginPage, page }, testInfo) => { if (testInfo.error) return;
    await Given('User is on the login page', null, { loginPage }); 
    await When('User enters Valid username and Password', null, { loginPage }); 
    await Then('User should be redirected to the homepage', null, { loginPage, page }); 
  });
  
  test('Add a product to the cart', async ({ Given, When, Then, And, addToCartPage, page }) => { 
    await Given('user is on the homepage', null, { addToCartPage, page }); 
    await When('user see "zara coat 3" in the product list', null, { addToCartPage, page }); 
    await Then('user click on view', null, { addToCartPage }); 
    await And('user click on Add to cart', null, { addToCartPage }); 
    await Then('user should see product added to the cart auccesfully', null, { addToCartPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Addtocart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters Valid username and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given user is on the homepage","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When user see \"zara coat 3\" in the product list","stepMatchArguments":[{"group":{"start":9,"value":"\"zara coat 3\"","children":[{"start":10,"value":"zara coat 3","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then user click on view","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And user click on Add to cart","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then user should see product added to the cart auccesfully","stepMatchArguments":[]}]},
]; // bdd-data-end