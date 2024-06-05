Feature: Aviva customer account Action 
    Description: This feature will test customer account functionality

    
   Scenario Outline: Customer is able to manage their insurance policies

    Given User is on Home Page,logged in to their account
    When user navigate to your account page
    Then user is able to access policies


    Scenario Outline: Customer is able to update their insurance policies

    Given User is able to make a permanent update to contact details on policy

    Scenario Outline: Customer is able to update their car on insurance policies

    Given User is able to make a permanent update to car details on policy

    Scenario Outline: Customer is able to add a driver to insurance policies

    Given User is able able to add a driver to insurance policies

    Scenario Outline: Customer is able to tempoarily add a driver to insurance policies

    Given Customer is  able to tempoarily add a driver to insurance policies


    Scenario Outline: Customer is able to upload docs to their insurance policies

    Given User is able to upload document to policy

    Scenario Outline: Customer is able to view docs on their insurance policies

    Given User is able to view policy document

    Scenario Outline: Customer is able to view current status of your policy

    Given User is able to see Current status of their policy

    Scenario Outline: Customer is able to Update how they receive documents

    Given User is able to Update how they receive documents

    Scenario Outline: Customer is able to notify of a claim to policy

    Given User is able to make a claim
