Feature: This feature would be creating a calculator for Add and Subtract

  Scenario: To Add
    Given I have a calculator
    When I add 4 and 5
    Then I should get result as 9

  Scenario: To Sub
    Given I have a calculator
    When I sub 6 and 3
    Then I should get result as 3

  Scenario Outline: To add two numbers using Scenario outline
    Given I have a calculator
    When I add <num1> and <num2>
    Then I should get result as <result>

    Examples: 
      | num1 | num2 | result |
      |    5 |    2 |      7 |
      |    3 |    8 |     11 |
      |    4 |    4 |      8 |

  Scenario Outline: To sub two numbers using Scenario outline
    Given I have a calculator
    When I sub <num1> and <num2>
    Then I should get result as <result>

    Examples: 
      | num1 | num2 | result |
      |    5 |    2 |      3 |
      |    8 |    3 |      5 |
      |    9 |    5 |      4 |

  Scenario: Add multiple numbers using cucumber data table
    Given I have a calculator
    When I add below numbers
      | 4 |
      | 5 |
      | 7 |
      | 8 |
    Then I should get result as 24

  Scenario: Add multiple numbers using cucumber data table
    Given I have a calculator
    When I add below numbers using List
      |  4 |
      |  5 |
      |  7 |
      |  8 |
      | 10 |
    Then I should get result as 34

  Scenario: To calculate the total bill the order
    Given I have a calculator
    When I order below items
      | coffee    | 23 |
      | tea       | 27 |
      | green tea | 10 |
    Then I should get result as 60

  Scenario: To calculate the total bill the order using quantity
    Given I have a calculator
    When I order below items and quantity
      | coffee    | 1 | 12 |
      | tea       | 3 | 10 |
      | green tea | 2 | 10 |
    Then I should get result as 62
