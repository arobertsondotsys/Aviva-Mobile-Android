import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";
import { Global } from "../AvivaPOM/Page Actions/POMActionsHome";

Cypress.on('uncaught:exception', (err, runnable) =>
{
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_stuff = new Global

Given('Agent MTA purchase of Joint Owner checking for correct documents', () => {

  //Login to back office 
  Global_stuff.Server()
  Global_stuff.company()
  Global_stuff.username()
  Global_stuff.password()
  Global_stuff.loginButton()
  Global_stuff.email()
  Global_stuff.searchButton()
  Global_stuff.policySelectButton()
  Global_stuff.livePoliciesBTN()
  Global_stuff.homePolicyTab()
  Global_stuff.selectActionMakeADJWithPolicyNumber()
  Global_stuff.cookiesAccept()
  Global_stuff.adjustmentTypeCoverDetails()
  Global_stuff.adjustmentContinue()
  Global_stuff.yourCoverJointOwner()
  Global_stuff.yourCoverJointOwner1()
  cy.wait(2000)
  Global_stuff.yourCoverContinue()
  cy.wait(2000)
  Global_stuff.coverStartDate()
  Global_stuff.coverStartContinue()
  Global_stuff.adjustmentBuyContinue()
  Global_stuff.adjustmentContinueToPayment()

  //Log in to back office
  Global_stuff.Server()
  cy.wait(2000)
  Global_stuff.home()
    
  //Search for Customer file
  Global_stuff.email()
  Global_stuff.searchButton()
  Global_stuff.policySelectButton()

  //Unlock customer file
  Global_stuff.livePoliciesBTN()
  Global_stuff.homePolicyTab()
  Global_stuff.selectActionDocumentsWithPolicyNumber()
  cy.wait(60000)
  cy.reload()
  Global_stuff.policyDocsSOF()
  Global_stuff.policyDocsSchedule()


  

  
  
  
})
  


  
    
 