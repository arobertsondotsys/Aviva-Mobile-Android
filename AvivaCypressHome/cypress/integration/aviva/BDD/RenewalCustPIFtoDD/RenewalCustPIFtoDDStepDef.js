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

Given('Customer purchase home policy renewal on new DD', () => {

  //Access quote link 
  Global_Stuff.Server2()
  Global_Stuff.removeAttr()
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
  Global_Stuff.coverStartAgentQuote()
  Global_Stuff.coverStartContinue()

  //Quotepage
  Global_Stuff.quotePageHeading()
  Global_Stuff.notes()
  Global_Stuff.quotePageStaffOptions()
  Global_Stuff.quotePageStaffDiscounts()
  Global_Stuff.quotePageStaffRecalculate()
  cy.wait(2000)
  Global_Stuff.quotePageBuyNowBtn()

  //Complete and pay
  Global_Stuff.completeAndPayHeading()
  Global_Stuff.notes()
  Global_Stuff.completeAndPayMortgage()
  Global_Stuff.completeAndPayNoCheckBox()
  Global_Stuff.completeAndPayContinue()

  //Select payment type
  Global_Stuff.paymentTypeAgentNoPay()
  Global_Stuff.paymentTypeAgentNoPayContinue()

  //Thank you page
  Global_Stuff.thankyouHeading()
  Global_Stuff.notes()

  //Navigate back to the B/O
  Global_Stuff.Server()
  Global_Stuff.home()
  Global_Stuff.email()
  Global_Stuff.searchButton()
  Global_Stuff.policySelectButton()
  Global_Stuff.livePoliciesBTN()

  //Back date policy
  Global_Stuff.agePolicyTool()
  Global_Stuff.agePolicy()
  // cy.get('#ctl00_ContentPlaceHolder1_BackDateDay').select(8)
  // cy.get('#ctl00_ContentPlaceHolder1_BackDateMonth').select(2)
  // cy.get('#ctl00_ContentPlaceHolder1_BackDateYear').select(3)
  // cy.get('#ctl00_ContentPlaceHolder1_UpdateDate').click()

  //Generate and invite renewal
  cy.go(-2)
  Global_Stuff.generateRenewal()
  Global_Stuff.inviteRenewal()

  //Checking for renewal invite email in docs
  Global_Stuff.recallPolicy()
  Global_Stuff.livePoliciesBTN()
  Global_Stuff.selectActionDocuments()
  Global_Stuff.checkRenewalInviteDocs()
  cy.go(-1)
  
  //Purchase Home Renewal
  Global_Stuff.livePoliciesBTN()
  Global_Stuff.selectActionRenewal()
  Global_Stuff.selectStaffDiscount()
  Global_Stuff.quotePagepMonthlyBtnRNLswap()
  Global_Stuff.completeAndPayContinue()
  
  Global_Stuff.RNLDDQA()
  Global_Stuff.paymentCardDemoAgent()

  //Navigate back to B/O and check renewal docs have generated
  Global_Stuff.Server()
  Global_Stuff.home()
  Global_Stuff.email()
  Global_Stuff.searchButton()
  Global_Stuff.policySelectButton()
  Global_Stuff.livePoliciesBTN()
  Global_Stuff.selectActionDocuments()
  Global_Stuff.checkRenewalDocs()






})
  


  
    
 