import { Servers } from "../AvivaPOM/Servers"
import { Login } from "../AvivaPOM/Login"
import { AboutYou } from "../AvivaPOM/AboutYou"
import { YourProperty } from "../AvivaPOM/YourProperty"
import { YourCover } from "../AvivaPOM/YourCover"
import { PolicyStartDateClaims } from "../AvivaPOM/PolicyStartDateClaims"
import { QuotePage } from "../AvivaPOM/QuotePage"
import { CompleteAndPay } from "../AvivaPOM/CompleteAndPay"
import { PaymentType } from "../AvivaPOM/PaymentType"
import { PaymentPage } from "../AvivaPOM/PaymentPage"
import { DiaryCorrespondence } from "../AvivaPOM/DiaryCorrespondence"
import { ThankYouPage } from "../AvivaPOM/ThankYouPage"
import { BOActions } from "../AvivaPOM/BOActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers
const Logins = new Login
const AboutYouPage = new AboutYou
const YourPropertyPage = new YourProperty
const YourCoverPage = new YourCover
const PolicyStartDateClaimsPage = new PolicyStartDateClaims
const QuotePageAndExtras = new QuotePage
const CompleteAndPayPage = new CompleteAndPay
const PaymentTypePage = new PaymentType
const PaymentScreen = new PaymentPage
const ThankYouScreen = new ThankYouPage
const DiaryCorrespondencePage = new DiaryCorrespondence
const BOAction = new BOActions

describe('Agent purchase home policy', () => {
  it('should allow an agent to purchase a home policy', () => {
    // Login to back office 
    Server.Server()
    Logins.company()
    Logins.username()
    Logins.password()
    Logins.loginButton()
    BOAction.agentQuote()
    BOAction.createNewQuoteBTN()
    BOAction.cookiesAccept()
    
    // About you
    AboutYouPage.proposerTitleHome()
    BOAction.notes()
    AboutYouPage.proposerForenameHome()
    AboutYouPage.proposerSurnameHome()
    AboutYouPage.proposerEmailHome()
    AboutYouPage.phone()
    AboutYouPage.dob()
    AboutYouPage.addressInput()
    AboutYouPage.addressSuggest()
    AboutYouPage.addressSelect()
    AboutYouPage.addressConfirm()
    AboutYouPage.postalAddressConfirm()
    AboutYouPage.occupancy()
    AboutYouPage.proposerEmployStatus()
    AboutYouPage.bizStatus()
    AboutYouPage.aboutYouContinueHome()

    // Your Property
    YourPropertyPage.yourPropertyTitle()
    BOAction.notes()
    YourPropertyPage.propertyType()
    YourPropertyPage.yearBuilt()
    YourPropertyPage.listedBuildingFalse()
    YourPropertyPage.flatRoofFlase()
    YourPropertyPage.standardMaterialsTrue()
    YourPropertyPage.burglarAlarm()
    YourPropertyPage.smokeAlarmTrue()

    // Additional security standards
    YourPropertyPage.additSecStandsTitle()
    YourPropertyPage.securityLocks()
    YourPropertyPage.noOfBedrooms()
    YourPropertyPage.noOfBathrooms()
    YourPropertyPage.heatingType()
    YourPropertyPage.goodStateOfRepairTrue()
    YourPropertyPage.floodSubsidenceFalse()
    YourPropertyPage.yourPropertyContinue()

    // Your cover
    YourCoverPage.yourCoverTitle()
    BOAction.notes()
    YourCoverPage.buildingAndContentsTrue()
    YourCoverPage.buildingAndContentsFalse()
    YourCoverPage.buildingAndContentsTrue()
    YourCoverPage.homeValue()
    YourCoverPage.contentsValue()
    YourCoverPage.isClaimsFalse()
    YourCoverPage.isConvictionsFalse()
    YourCoverPage.isRefusedFalse()
    YourCoverPage.isSpecialFalse()
    YourCoverPage.isCancelledFalse()
    YourCoverPage.yourCoverContinue()

    // Policy start date and claims
    PolicyStartDateClaimsPage.coverStartTitle()
    BOAction.notes()
    PolicyStartDateClaimsPage.claimsFreeYears()
    PolicyStartDateClaimsPage.coverStartDate()
    PolicyStartDateClaimsPage.coverStartHaveCarIns()
    PolicyStartDateClaimsPage.coverStartMarketing()
    PolicyStartDateClaimsPage.coverStartContinue()

    // Quotepage
    QuotePageAndExtras.quotePageHeading()
    BOAction.notes()
    QuotePageAndExtras.quotePageStaffOptions()
    QuotePageAndExtras.quotePageStaffDiscounts()
    QuotePageAndExtras.quotePageStaffRecalculate()
    QuotePageAndExtras.quotePageBuyNowBtn()

    // Complete and pay
    CompleteAndPayPage.completeAndPayHeading()
    BOAction.notes()
    CompleteAndPayPage.completeAndPayMortgage()
    CompleteAndPayPage.completeAndPayMyAvivaDocsNo()
    CompleteAndPayPage.completeAndPayContinue()

    // Select payment type
    PaymentTypePage.paymentTypeAgentNoPay()
    PaymentTypePage.paymentTypeAgentNoPayContinue()

    // Thank you page
    ThankYouScreen.thankyouHeading()
    BOAction.notes()
    ThankYouScreen.retreivePolicyNumber()

    // Navigate back to the B/O
    Server.Server()
    BOAction.home()
    Logins.email()
    BOAction.searchButton()
    BOAction.policySelectButton()
    BOAction.livePoliciesBTN()

    // Back date policy
    BOAction.policyToolsAgePolicyWithPolicyNumber()
    BOAction.agePolicy()
    cy.go(-2)
    BOAction.generateRenewal()
    BOAction.inviteRenewal()

    // Checking for renewal invite email in docs
    BOAction.recallPolicy()
    BOAction.livePoliciesBTN()
    BOAction.selectActionDocumentsWithPolicyNumber()
    BOAction.checkRenewalInviteDocs()
    cy.go(-1)
  
    // Purchase Home Renewal
    BOAction.livePoliciesBTN()
    BOAction.selectActionRenewalWithPolicyNumber()
    QuotePageAndExtras.selectStaffDiscount()
    QuotePageAndExtras.quotePageOptionalCoverViewOptions()
    QuotePageAndExtras.quotePageOptionalCoverAddSpecifiedItem()
    cy.pause()

    QuotePageAndExtras.quotePageBuyNowBtn()
    CompleteAndPayPage.completeAndPayContinue()

    PaymentTypePage.paymentTypeAgentCardRenewal()
    CompleteAndPayPage.completeAndPayRNLPayNow()
    PaymentScreen.paymentCardDemoAgent()

    // Diary and Correspondence page
    DiaryCorrespondencePage.diaryCorrespondenceHeading()
    DiaryCorrespondencePage.diaryCorrespondenceReceipt()
    DiaryCorrespondencePage.diaryCorrespondenceContinue()

    // Thank you page
    ThankYouScreen.thankyouHeading()
    BOAction.notes()
  })
})
  


  
    
 