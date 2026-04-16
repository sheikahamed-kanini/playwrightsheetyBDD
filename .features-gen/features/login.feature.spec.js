// Generated from: features\login.feature
import { test } from "../../fixtures/fixtures.ts";

test.describe('Login functionality', () => {

  test('Login with Valid credentials', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('User is on the login page', null, { loginPage }); 
    await When('User enters Valid username and Password', null, { loginPage }); 
    await Then('User should be redirected to the homepage', null, { loginPage, page }); 
  });

  test('Login with Invalid credentials', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('User is on the login page', null, { loginPage }); 
    await When('User enters Invalid username and password', null, { loginPage }); 
    await Then('user should see an error message', null, { loginPage, page }); 
  });

  test('Login with empty username', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('User is on the login page', null, { loginPage }); 
    await When('user leaves the username and enter the password', null, { loginPage }); 
    await Then('User should see the error message as Username required', null, { loginPage, page }); 
  });

  test('Login with empty Password', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('user is on the Login page', null, { loginPage }); 
    await When('user entersc the username and leaves password', null, { loginPage }); 
    await Then('User should see the error message as Password required', null, { loginPage, page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters Valid username and Password","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the homepage","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User enters Invalid username and password","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then user should see an error message","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When user leaves the username and enter the password","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message as Username required","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given user is on the Login page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When user entersc the username and leaves password","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message as Password required","stepMatchArguments":[]}]},
]; // bdd-data-end