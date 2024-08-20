import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";
import { Global } from "../AvivaPOM/Page Actions/POMActionsHome";

Cypress.on('uncaught:exception', (err, runnable) =>
{
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_Stuff = new Global

Given('Agent can cancel a policy', () => {

  //Login to back office 
  Global_Stuff.Server()
  Global_Stuff.company()
  Global_Stuff.username()
  Global_Stuff.password()
  Global_Stuff.loginButton()
  Global_Stuff.email()
  Global_Stuff.searchButton()
  Global_Stuff.policySelectButton()
  Global_Stuff.livePoliciesBTN()
  Global_Stuff.homePolicyTab()
  Global_Stuff.selectActionCancelPolicy()
  Global_Stuff.cookiesAccept()
  Global_Stuff.cancellationRequest()
  Global_Stuff.cancellationReason1()
  Global_Stuff.cancellationReasonContinue()
  Global_Stuff.cancellationInception()
  Global_Stuff.cancellationContinue()
  cy.wait(4000)
  Global_Stuff.cancellationAccept()
  Global_Stuff.cancellationDone()
  

  
  
  
})
  


  
    
 