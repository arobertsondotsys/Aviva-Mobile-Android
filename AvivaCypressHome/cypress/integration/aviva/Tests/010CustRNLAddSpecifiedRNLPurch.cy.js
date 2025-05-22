import { Servers } from "../AvivaPOM/Servers"
import { Login } from "../AvivaPOM/Login"
import { AboutYou } from "../AvivaPOM/AboutYou"
import { YourProperty } from "../AvivaPOM/YourProperty"
import { YourCover } from "../AvivaPOM/YourCover"
import { PolicyStartDateClaims } from "../AvivaPOM/PolicyStartDateClaims"
import { QuotePage } from "../AvivaPOM/QuotePage"
import { CompleteAndPay } from "../AvivaPOM/CompleteAndPay"
import { PaymentPage } from "../AvivaPOM/PaymentPage"
import { ThankYouPage } from "../AvivaPOM/ThankYouPage"
import { BOActions } from "../AvivaPOM/BOActions"
import { PortalActions } from "../AvivaPOM/PortalActions"

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
const PaymentScreen = new PaymentPage
const ThankYouScreen = new ThankYouPage
const BOAction = new BOActions
const PortalAction = new PortalActions

describe('Customer purchase home policy', () => {
  it('should allow a customer to purchase a home policy', () => {
    // Access quote link 
    Server.Server2()
    BOAction.removeAttr()
    BOAction.cookiesAccept()

    // About you
    AboutYouPage.proposerTitleHome()
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
    PolicyStartDateClaimsPage.claimsFreeYears()
    PolicyStartDateClaimsPage.coverStartDate()
    PolicyStartDateClaimsPage.coverStartHaveCarIns()
    PolicyStartDateClaimsPage.coverStartMarketing()
    PolicyStartDateClaimsPage.coverStartCustomerQuote()
    PolicyStartDateClaimsPage.coverStartContinue()

    // Quote page
    QuotePageAndExtras.quotePageHeading()
    QuotePageAndExtras.quotePageBuyNowBtn()

    // Complete and pay
    CompleteAndPayPage.completeAndPayHeading()
    CompleteAndPayPage.completeAndPayMortgage()
    CompleteAndPayPage.completeAndPayCheckBox()
    CompleteAndPayPage.completeAndPayContinue()

    PaymentScreen.paymentCardDemo()

    // Thank you page
    ThankYouScreen.thankyouHeading()
    ThankYouScreen.retreivePolicyNumber()

    // Navigate back to the B/O
    Server.Server()
    Logins.company()
    Logins.username()
    Logins.password()
    Logins.loginButton()

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

    // Purchase Home Renewal as customer
    Server.Server1()
    Logins.loginEmail()
    Logins.loginPassword()
    Logins.loginPortalButton()
    PortalAction.portalRenewPolicyCloseModal()
    PortalAction.portalManagePolicyWithPolicyNumber()
    PortalAction.portalRenewThisPolicy()
    PortalAction.portalRenewDocsConfirm()
    QuotePageAndExtras.quotePageOptionalCoverViewOptions()
    QuotePageAndExtras.quotePageOptionalCoverAddSpecifiedItem()
  
    //cy.pause()

    QuotePageAndExtras.quotePageBuyNowBtn()
    PolicyStartDateClaimsPage.coverStartCustomerQuote()
    CompleteAndPayPage.completeAndPayContinue()

    PaymentScreen.paymentCardDemo()

    // Thank you page
    ThankYouScreen.thankyouHeading()

  
  })
})
  


  
    
 