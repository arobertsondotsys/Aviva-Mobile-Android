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

Given('Agent purchase home policy with docs set to post at NB', () => {

  //Login to back office 
  Global_stuff.Server()
  Global_stuff.company()
  Global_stuff.username()
  Global_stuff.password()
  Global_stuff.loginButton()
  Global_stuff.agentQuote()
  Global_stuff.createNewQuoteBTN()
  Global_stuff.cookiesAccept()

  //About you
  Global_stuff.proposerTitleHome()
  Global_stuff.notes()
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
  Global_stuff.notes()
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
  Global_stuff.notes()
  Global_stuff.buildingAndContentsTrue()
  Global_stuff.buildingAndContentsFalse()
  Global_stuff.buildingAndContentsTrue()
  cy.wait(2000)
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
  Global_stuff.notes()
  Global_stuff.claimsFreeYears()
  cy.wait(2000)
  Global_stuff.coverStartDate()
  Global_stuff.coverStartHaveCarIns()
  Global_stuff.coverStartMarketing()
  //Global_stuff.coverStartAgentQuote()
  Global_stuff.coverStartContinue()

  //Quotepage
  Global_stuff.quotePageHeading()
  Global_stuff.notes()
  
  Global_stuff.quotePageStaffOptions()
  Global_stuff.quotePageStaffDiscounts()
  Global_stuff.quotePageStaffRecalculate()

  //Adding all Optional covers
  Global_stuff.quotePageAccidentalDamageViewOptions()
  Global_stuff.quotePageAccidentalDamageAddCover()
  cy.wait(2000)
  Global_stuff.quotePageManageYourExcessViewOptions()
  Global_stuff.quotePageManageYourExcess500()
  cy.wait(2000)
  Global_stuff.quotePageGardenCoverViewOptions()
  Global_stuff.quotePageGardenCover1000()
  cy.wait(2000)
  Global_stuff.quotePageCaravanCoverViewOptions()
  Global_stuff.quotePageCaravanCoverAddWithPersonal()

  cy.pause()
  cy.wait(2000)
  Global_stuff.quotePageBuyNowBtn()

  //Complete and pay
  Global_stuff.completeAndPayHeading()
  Global_stuff.notes()
  Global_stuff.completeAndPayMortgage()
  Global_stuff.completeAndPayMyAvivaDocsNo()
  Global_stuff.completeAndPayNoCheckBox()
  Global_stuff.completeAndPayContinue()

  //Select payment type
  Global_stuff.paymentTypeAgentNoPay()
  Global_stuff.paymentTypeAgentNoPayContinue()

  //Thank you page
  Global_stuff.thankyouHeading()
  Global_stuff.notes()
  Global_stuff.retreivePolicyNumber()

  Global_stuff.Server()
  Global_stuff.home()
  Global_stuff.email()
  Global_stuff.searchButton()
  Global_stuff.policySelectButton()
  Global_stuff.livePoliciesBTN()
  Global_stuff.homePolicyTab()
  Global_stuff.selectActionDocumentsWithPolicyNumber()
  Global_stuff.checkNBParagonDocs()

  cy.go(-3)
  Global_stuff.livePoliciesBTN()
  Global_stuff.homePolicyTab()
  Global_stuff.selectActionDiaryWithPolicyNumber()
  Global_stuff.diaryAddAdHocLetters()
  
  Global_stuff.Server()
  Global_stuff.home()
  Global_stuff.email()
  Global_stuff.searchButton()
  Global_stuff.policySelectButton()
  Global_stuff.livePoliciesBTN()
  Global_stuff.homePolicyTab()
  Global_stuff.selectActionDocumentsWithPolicyNumber()
  Global_stuff.checkAdhocParagonDocs()
  


  
  
})
  


  
    
 