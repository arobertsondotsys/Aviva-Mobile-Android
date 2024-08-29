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

Given('Customer purchase home policy', () => {

  //Access quote link 
  Global_Stuff.Server2()
  Global_Stuff.removeAttr()
  Global_Stuff.cookiesAccept()

  //About you
  Global_Stuff.proposerTitleHome()
  Global_Stuff.proposerForenameHome()
  Global_Stuff.proposerSurnameHome()
  Global_Stuff.proposerEmailHome()
  Global_Stuff.phone()
  Global_Stuff.dob()
  Global_Stuff.addressInput()
  Global_Stuff.addressSuggest()
  Global_Stuff.addressSelect()
  Global_Stuff.addressConfirm()
  Global_Stuff.postalAddressConfirm()
  Global_Stuff.occupancy()
  Global_Stuff.proposerEmployStatus()
  cy.wait(2000)
  Global_Stuff.bizStatus()
  cy.wait(2000)
  Global_Stuff.aboutYouContinueHome()
  
  //Your Property
  Global_Stuff.yourPropertyTitle()
  Global_Stuff.propertyType()
  Global_Stuff.yearBuilt()
  Global_Stuff.listedBuildingFalse()
  Global_Stuff.flatRoofFlase()
  Global_Stuff.standardMaterialsTrue()
  Global_Stuff.burglarAlarm()
  Global_Stuff.smokeAlarmTrue()

  //Additional security standards
  Global_Stuff.additSecStandsTitle()
  Global_Stuff.securityLocks()
  Global_Stuff.noOfBedrooms()
  Global_Stuff.noOfBathrooms()
  Global_Stuff.heatingType()
  Global_Stuff.goodStateOfRepairTrue()
  Global_Stuff.floodSubsidenceFalse()
  cy.wait(2000)
  Global_Stuff.yourPropertyContinue()

  //Your cover
  Global_Stuff.yourCoverTitle() 
  Global_Stuff.buildingAndContentsTrue()
  Global_Stuff.buildingAndContentsFalse()
  Global_Stuff.buildingAndContentsTrue()
  cy.wait(2000)
  Global_Stuff.homeValue()
  Global_Stuff.contentsValue()
  Global_Stuff.isClaimsFalse()
  Global_Stuff.isConvictionsFalse()
  Global_Stuff.isRefusedFalse()
  Global_Stuff.isSpecialFalse()
  Global_Stuff.isCancelledFalse()
  cy.wait(2000)
  Global_Stuff.yourCoverContinue()

  //Policy start date and claims
  Global_Stuff.coverStartTitle()
  Global_Stuff.claimsFreeYears()
  Global_Stuff.coverStartDate()
  Global_Stuff.coverStartHaveCarIns()
  Global_Stuff.coverStartMarketing()
  Global_Stuff.coverStartCustomerQuote()
  Global_Stuff.coverStartContinue()

  //Quote page
  Global_Stuff.quotePageHeading()
  Global_Stuff.quotePageBuyNowBtn()

  //Complete and pay
  Global_Stuff.completeAndPayHeading()
  Global_Stuff.completeAndPayMortgage()
  Global_Stuff.completeAndPayCheckBox()
  Global_Stuff.completeAndPayContinue()

  Global_Stuff.paymentCardDemo()
  Global_Stuff.thankyouHeading()

  // Global_Stuff.Server()
    
  //   //Log in
  //   Global_Stuff.company()
  //   Global_Stuff.username()
  //   Global_Stuff.password()
  //   Global_Stuff.loginButton()

  //   //Search for Customer file
  //   Global_Stuff.email()
  //   Global_Stuff.searchButton()
  //   Global_Stuff.policySelectButton()
    
  //   //Unlock customer file
  //   Global_Stuff.unlockBTN()
  
  
})
  


  
    
 