Feature: Login functionality
  @smoke
  Scenario: Login with Valid credentials
    Given User is on the login page
    When User enters Valid username and Password
    Then User should be redirected to the homepage
  @regression
  Scenario: Login with Invalid credentials
    Given User is on the login page
    When User enters Invalid username and password
    Then user should see an error message
  @Negative
  Scenario: Login with empty username
    Given User is on the login page
    When user leaves the username and enter the password
    Then User should see the error message as Username required
  @Negative
  Scenario: Login with empty Password
    Given user is on the Login page
    When user entersc the username and leaves password
    Then User should see the error message as Password required