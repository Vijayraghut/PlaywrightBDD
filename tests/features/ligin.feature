Feature: Verify the login functionality

    Feature Description

    # Feature denotes test suite
    # Scenario denotes test case

    Scenario: Verify the login with valid creds
    Given user launch the Application
    When user enter the username as "Admin" and password as "admin123"
    And user click on login button
    Then user should navigate to the Dashboard page


     Scenario: Verify the login with valid username and invalid password
    Given user launch the Application
    When user enter the username as "Admin" and password as "vijay123"
    And user click on login button
    Then user should get to the Error message


    Scenario: Verify the login with Invalid username and valid password
    Given user launch the Application
    When user enter the username as "Vijay" and password as "admin123"
    And user click on login button
    Then user should get to the Error message


    Scenario: Verify the login with Invalid username and Invalid password
    Given user launch the Application
    When user enter the username as "Vijay" and password as "vijay123"
    And user click on login button
    Then user should get to the Error message
