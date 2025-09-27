Feature: Verify Login functionality

    Feature Description

Background: launch app

  Given User Launch the Application

Scenario: Verify login with Valid credentials

  When User Enter username as "Admin" and Password as "admin123"
# #   when we dont want to hardcode data to username and password then we can access the data from testdata or .env that time we can write below line
#  When User enter Valid username and password  
  And User clicks on login button 
  Then User should be navigated to Dashboard page 

Scenario: Verify login with Valid username and Invalid password 

  When User Enter username as "Admin" and Password as "dfbgfr"
  And User clicks on login button 
  Then User should get the login error Message 

Scenario: Verify login with INValid username and valid password 
 
  When User Enter username as "efhjen" and Password as "admin123"
  And User clicks on login button 
  Then User should get the login error Message 

Scenario: Verify login with INValid username and Invalid password 

  When User Enter username as "efhjen" and Password as "dfbvfb"
  And User clicks on login button 
  Then User should get the login error Message 
  
  