Feature: swaglabs Feature
  Scenario: swaglabs add to cart
    Given open swaglabs thru '<URL>'
    When login with '<username>' and '<password>'
    And Add all products under $25 into cart
    Then verify the products are added into cart successfully    
    And submit the order
    
    Examples:
      | URL                      | username                  | password  |
      | https://www.saucedemo.com/ | standard_user | secret_sauce |