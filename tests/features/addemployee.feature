Feature: verify add employee functionality

    Feature Description

    # Scenario: verify add employee with mandatory fields


    # Given user launch the Application
    # When user enter the username as "Admin" and password as "admin123"
    # And user click on login button
    # Then user should navigate to the Dashboard page
    # And user should click on PIM module
    # And user click on add employee sub menu
    # And user enter First name as "Vijay" and Last name as "Thrija"
    # And user clicks on save button
    # Then user should get Successfully saved message
    # Then user should get personal detalis page


    Background: Navigate add employee
    #  Background is used as BeforeEach hooks

        Given user launch the Application
        When user enter the username as "Admin" and password as "admin123"
        And user click on login button
        Then user should navigate to the Dashboard page
        And user should click on PIM module
        And user click on add employee sub menu

    Scenario Outline:  verify add employee with mandatory fields
    # Scenario Outline is used for Data driven test

        And user enter First name as "<firstname>" and Last name as "<lastname>"
        And user clicks on save button
        Then user should get Successfully saved message
        Then user should get personal detalis page

        Examples:
            | firstname | lastname |
            | Vijay     | T        |
            | Thrija    | Bujji    |
            | Raghava   | Rebal    |
    # Expample is used to send multiple values for Data driven test

    Scenario: verify add employee with error message for mandatory fields

        # Given user launch the Application
        # When user enter the username as "Admin" and password as "admin123"
        # And user click on login button
        # Then user should navigate to the Dashboard page
        # And user should click on PIM module
        # And user click on add employee sub menu          (these steps are in Background(BeforeEach hook))
        And user clicks on save button
        Then user should get Error message for firstname and last name fields
