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

Given('Customer MTA purchase', () => {

  //Access quote link 
  Global_Stuff.Server1()
  Global_Stuff.cookiesAccept()
  Global_Stuff.loginEmail()
  Global_Stuff.loginPassword()
  Global_Stuff.loginPortalButton()
  Global_Stuff.portalPolicySelect()
  Global_Stuff.portalMakeAdjustmentSelect()
  Global_Stuff.portalAdjustmentTypeSelect()
  Global_Stuff.portalAdjContinue()
  Global_Stuff.portalMortgageSelect()
  Global_Stuff.portalMortgageIntLetterTrue()
  Global_Stuff.portalMortgageProvider()
  Global_Stuff.completeAndPayCheckBox()
  Global_Stuff.completeAndPayContinue()
  

  
  
})
  


  
    
 