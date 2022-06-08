$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/fearures/Login.feature");
formatter.feature({
  "name": "This feature would be used to design the Lofin page of the application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@F-123"
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F-123"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click in the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_in_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F-123"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I click in the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_in_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"Pqr@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the successful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click in the Login link",
  "keyword": "When "
});
formatter.step({
  "name": "I enter username \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be landed on the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "abc@xyz.com",
        "Pqr@123"
      ]
    },
    {
      "cells": [
        "Mad@abc.com",
        "mvt@123"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@F-123"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click in the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_in_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"Pqr@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@F-123"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click in the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_in_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"Mad@abc.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"mvt@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the unsuccessful login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F-123"
    }
  ]
});
formatter.step({
  "name": "I click in the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_in_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"Pqrrsd@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_get_the_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});