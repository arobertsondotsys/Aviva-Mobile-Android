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

Given('Agent purchase home policy with docs set to post at NB', () => {

  //Login to back office 
  Global_Stuff.Server()
  Global_Stuff.company()
  Global_Stuff.username()
  Global_Stuff.password()
  Global_Stuff.loginButton()
  Global_Stuff.agentQuote()
  Global_Stuff.createNewQuoteBTN()
  Global_Stuff.cookiesAccept()

  //About you
  Global_Stuff.proposerTitleHome()
  Global_Stuff.notes()
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
  Global_Stuff.notes()
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
  Global_Stuff.notes()
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
  Global_Stuff.notes()
  Global_Stuff.claimsFreeYears()
  cy.wait(2000)
  Global_Stuff.coverStartDate()
  Global_Stuff.coverStartHaveCarIns()
  Global_Stuff.coverStartMarketing()
  //Global_Stuff.coverStartAgentQuote()
  Global_Stuff.coverStartContinue()

  //Quotepage
  Global_Stuff.quotePageHeading()
  Global_Stuff.notes()
  
  Global_Stuff.quotePageStaffOptions()
  Global_Stuff.quotePageStaffDiscounts()
  Global_Stuff.quotePageStaffRecalculate()

  //Adding all Optional covers
  Global_Stuff.quotePageAccidentalDamageViewOptions()
  Global_Stuff.quotePageAccidentalDamageAddCover()
  cy.wait(2000)
  Global_Stuff.quotePageOptionalCoverViewOptions()
  Global_Stuff.quotePageOptionalCoverAddSpecifiedItem()
  cy.wait(2000)
  Global_Stuff.quotePageManageYourExcessViewOptions()
  Global_Stuff.quotePageManageYourExcess500()
  cy.wait(2000)
  Global_Stuff.quotePageGardenCoverViewOptions()
  Global_Stuff.quotePageGardenCover1000()
  cy.wait(2000)
  Global_Stuff.quotePageCaravanCoverViewOptions()
  Global_Stuff.quotePageCaravanCoverAddWithPersonal()

  cy.pause()
  cy.wait(2000)
  Global_Stuff.quotePageBuyNowBtn()

  //Complete and pay
  Global_Stuff.completeAndPayHeading()
  Global_Stuff.notes()
  Global_Stuff.completeAndPayMortgage()
  Global_Stuff.completeAndPayMyAvivaDocsNo()
  Global_Stuff.completeAndPayNoCheckBox()
  Global_Stuff.completeAndPayContinue()

  //Select payment type
  Global_Stuff.paymentTypeAgentCcard()
  Global_Stuff.completeAndPayNBPayNow()

  Global_Stuff.paymentCardQAAgent()
  
  //Diary and Correspondence page
  Global_Stuff.diaryCorrespondenceHeading()
  Global_Stuff.diaryCorrespondenceContinue()

  //Thank you page
  Global_Stuff.thankyouHeading()
  Global_Stuff.adjustmentReceiptAssert()
  Global_Stuff.notes()

  Global_Stuff.Server()
  Global_Stuff.home()
  Global_Stuff.email()
  Global_Stuff.searchButton()
  Global_Stuff.policySelectButton()
  Global_Stuff.livePoliciesBTN()
  Global_Stuff.homePolicyTab()
  Global_Stuff.selectActionDocuments()
  Global_Stuff.checkNBParagonDocsWithReceipt()

  
  
})
  


  
    
 