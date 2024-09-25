Feature: Aviva Login Action 
    Description: This feature will test a LogIn and LogOut functionality


Scenario Outline: Login and logout with valid Credentials 

    
    Given User is on Home Page 
    When User enters email, password and click  logged in button
    Then Message displayed Login Successfully and user logs out from application and back to login page



Scenario Outline: Login  with invalid Credentials 

    Given User enters invalid email, password and click  logged in button



    
    



