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

Given('Customer purchase home policy', () => {

  //Access quote link 
  Global_stuff.Server2()
  Global_stuff.removeAttr()
  Global_stuff.cookiesAccept()

  //About you
  Global_stuff.proposerTitleHome()
  Global_stuff.proposerForenameHome()
  Global_stuff.proposerSurnameHome()
  Global_stuff.proposerEmailHome()
  Global_stuff.phone()
  Global_stuff.dob()
  Global_stuff.addressInput()
  Global_stuff.addressSuggest()
  Global_stuff.addressSelect()
  Global_stuff.addressConfirm()
  Global_stuff.postalAddressConfirm()
  Global_stuff.occupancy()
  Global_stuff.proposerEmployStatus()
  cy.wait(2000)
  Global_stuff.bizStatus()
  cy.wait(2000)
  Global_stuff.aboutYouContinueHome()
  
  //Your Property
  Global_stuff.yourPropertyTitle()
  Global_stuff.propertyType()
  Global_stuff.yearBuilt()
  Global_stuff.listedBuildingFalse()
  Global_stuff.flatRoofFlase()
  Global_stuff.standardMaterialsTrue()
  Global_stuff.burglarAlarm()
  Global_stuff.smokeAlarmTrue()

  //Additional security standards
  Global_stuff.additSecStandsTitle()
  Global_stuff.securityLocks()
  Global_stuff.noOfBedrooms()
  Global_stuff.noOfBathrooms()
  Global_stuff.heatingType()
  Global_stuff.goodStateOfRepairTrue()
  Global_stuff.floodSubsidenceFalse()
  cy.wait(2000)
  Global_stuff.yourPropertyContinue()

  //Your cover
  Global_stuff.yourCoverTitle() 
  Global_stuff.buildingAndContentsTrue()
  Global_stuff.buildingAndContentsFalse()
  Global_stuff.buildingAndContentsTrue()
  Global_stuff.homeValue()
  Global_stuff.contentsValue()
  Global_stuff.isClaimsFalse()
  Global_stuff.isConvictionsFalse()
  Global_stuff.isRefusedFalse()
  Global_stuff.isSpecialFalse()
  Global_stuff.isCancelledFalse()
  cy.wait(2000)
  Global_stuff.yourCoverContinue()

  //Policy start date and claims
  Global_stuff.coverStartTitle()
  Global_stuff.claimsFreeYears()
  cy.wait(2000)
  Global_stuff.coverStartDate()
  Global_stuff.coverStartHaveCarIns()
  Global_stuff.coverStartMarketing()
  Global_stuff.coverStartCustomerQuote()
  Global_stuff.coverStartContinue()

  //Quote page
  Global_stuff.quotePageHeading()
  cy.pause()
  Global_stuff.quotePageBuyNowBtn()

  //Complete and pay
  Global_stuff.completeAndPayHeading()
  Global_stuff.completeAndPayMortgage()
  cy.wait(1000)
  Global_stuff.completeAndPayCheckBox()
  cy.wait(1000)
  Global_stuff.completeAndPayContinue()

  Global_stuff.paymentCardQA()
  Global_stuff.thankyouHeading()
  Global_stuff.retreivePolicyNumber()
  
  
})
  


  
    
 