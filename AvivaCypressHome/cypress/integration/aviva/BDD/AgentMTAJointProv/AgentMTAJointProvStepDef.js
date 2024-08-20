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

Given('Agent MTA purchase of Joint Owner checking for correct documents', () => {

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
  Global_Stuff.selectActionMakeAdjustment()
  Global_Stuff.cookiesAccept()
  Global_Stuff.adjustmentTypeCoverDetails()
  Global_Stuff.adjustmentContinue()
  Global_Stuff.yourCoverJointOwner()
  Global_Stuff.yourCoverJointOwner1()
  cy.wait(2000)
  Global_Stuff.yourCoverContinue()
  cy.wait(2000)
  Global_Stuff.coverStartDate()
  Global_Stuff.coverStartContinue()
  Global_Stuff.adjustmentBuyContinue()
  Global_Stuff.adjustmentContinueToPayment()

  Global_Stuff.Server()
    
    //Log in
    Global_Stuff.home()

    //Search for Customer file
    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()

    //Unlock customer file
    Global_Stuff.livePoliciesBTN()
    Global_Stuff.homePolicyTab()
    Global_Stuff.selectActionDocuments()
    cy.wait(60000)
    cy.reload()
    Global_Stuff.policyDocsSOF()
    Global_Stuff.policyDocsSchedule()


  

  
  
  
})
  


  
    
 