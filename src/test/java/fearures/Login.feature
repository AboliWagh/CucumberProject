@F-123
Feature: This feature would be used to design the Lofin page of the application

  Background: Open the application
    Given I have opened the application in browser

@Sanity
  Scenario: Validate the successful login
    When I click in the Login link
    And I enter username
    And I enter password
    And I click on login Button
    Then I should be landed on the home page

@Regression
  Scenario: Validate the successful login
    When I click in the Login link
    And I enter username "abc@xyz.com"
    And I enter password "Pqr@123"
    And I click on login Button
    Then I should be landed on the home page

@Regression @Rapid
  Scenario Outline: Validate the successful login using multiple test data
    When I click in the Login link
    And I enter username "<UserName>"
    And I enter password "<Password>"
    And I click on login Button
    Then I should be landed on the home page

    Examples: 
      | UserName    | Password |
      | abc@xyz.com | Pqr@123  |
      | Mad@abc.com | mvt@123  |

  Scenario: Validate the unsuccessful login
    When I click in the Login link
    And I enter username "abc@xyz.com"
    And I enter password "Pqrrsd@123"
    And I click on login Button
    Then I should get the error message as "The email or password you have entered is invalid."
