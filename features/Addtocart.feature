Feature: Add to cart

Background:
    Given User is on the login page
    When User enters Valid username and Password
    Then User should be redirected to the homepage

Scenario: Add a product to the cart
    Given user is on the homepage
    When user see "zara coat 3" in the product list
    Then user click on view 
    And user click on Add to cart
    Then user should see product added to the cart auccesfully 