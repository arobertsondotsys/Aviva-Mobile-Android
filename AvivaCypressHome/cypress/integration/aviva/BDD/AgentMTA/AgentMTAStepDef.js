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

Given('Agent MTA purchase', () => {

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
  Global_Stuff.adjustmentType()
  Global_Stuff.adjustmentContinue()
  Global_Stuff.quotePageOptionalCover()
  Global_Stuff.addSpecifiedItemBTN()
  Global_Stuff.addSpecifiedItemDescription()
  Global_Stuff.addSpecifiedItemType()
  Global_Stuff.addSpecifiedItemValue()
  Global_Stuff.addSpecifiedItemAddItem()
  cy.wait(10000)
  Global_Stuff.adjustmentBuyNowBTN()
  Global_Stuff.completeAndPayContinue()
  Global_Stuff.paymentTypeAgentCard()
  Global_Stuff.paymentTypeAgentPayNow()
  Global_Stuff.paymentCardDemoAgent()


  

  
  
  
})
  


  
    
 