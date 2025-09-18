import { Servers } from "../AvivaPOM/Servers"
import { BonkersProperty } from "../AvivaPOM/BonkersProperty"
import { BonkersContents } from "../AvivaPOM/BonkersContents"
import { BonkersHistoryAndClaims } from "../AvivaPOM/BonkersHistoryAndClaims"
import { BonkersAboutYou } from "../AvivaPOM/BonkersAboutYou"
import { BonkersDeclaration } from "../AvivaPOM/BonkersDeclaration"
import { BonkersQuotePage } from "../AvivaPOM/BonkersQuotePage"
import { QuotePage } from "../AvivaPOM/QuotePage"
import { CompleteAndPay } from "../AvivaPOM/CompleteAndPay"
import { PaymentPage } from "../AvivaPOM/PaymentPage"
import { ThankYouPage } from "../AvivaPOM/ThankYouPage"
import { BOActions } from "../AvivaPOM/BOActions"
import { Login } from "../AvivaPOM/Login"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers
const BonkersQuoteProperty = new BonkersProperty
const BonkersQuoteContents = new BonkersContents
const BonkersQuoteHistoryAndClaims = new BonkersHistoryAndClaims
const BonkersQuoteAboutYou = new BonkersAboutYou
const BonkersQuoteDeclaration = new BonkersDeclaration
const BonkersQuoteScreen = new BonkersQuotePage
const QuotePageAndExtras = new QuotePage
const CompleteAndPayPage = new CompleteAndPay
const PaymentScreen = new PaymentPage
const ThankYouScreen = new ThankYouPage
const BOAction = new BOActions
const Logins = new Login


describe('Customer purchase home policy', () => {
  it('should allow a customer to purchase a home policy', () => {
    // Access quote link 
    Server.Server3()
    BonkersQuoteProperty.bonkersAddressInput()
    BonkersQuoteProperty.bonkersAddressSelect()
    BonkersQuoteProperty.bonkersAddressGetStarted()
    BonkersQuoteProperty.bonkersYearBuilt()
    BonkersQuoteProperty.bonkersBER()
    BonkersQuoteProperty.bonkersPropertyType()
    BonkersQuoteProperty.bonkersFlatRoof(false)
    BonkersQuoteProperty.bonkersStandardMaterials(true)
    BonkersQuoteProperty.bonkersNoOfBedrooms()
    BonkersQuoteProperty.bonkersNoOfBathrooms()
    BonkersQuoteProperty.bonkersHeatingType()
    BonkersQuoteProperty.bonkersListedBuilding(false)
    BonkersQuoteProperty.bonkersAlarmed()
    BonkersQuoteProperty.bonkersSmokeAlarmed(true)
    BonkersQuoteProperty.bonkersSecurityLocks(true)
    BonkersQuoteProperty.bonkersOccupancyType()
    BonkersQuoteProperty.bonkersPropertyContinue()

    BonkersQuoteProperty.bonkersRebuildCost()
    BonkersQuoteProperty.bonkersUnderConstrution(false)
    BonkersQuoteProperty.bonkersGoodStateOfRepair(true)
    BonkersQuoteProperty.bonkersLossOrDamage(false)
    BonkersQuoteProperty.bonkersProperty1Continue()

    BonkersQuoteContents.bonkersContents(true)
    BonkersQuoteContents.bonkersContentsAmount()
    BonkersQuoteContents.bonkersUnspecifiedItem(false)
    BonkersQuoteContents.bonkersSpecifiedItem(false)
    BonkersQuoteContents.bonkerscontentsContinue()

    BonkersQuoteHistoryAndClaims.bonkersClaimHistory()
    BonkersQuoteHistoryAndClaims.bonkersConviction(false)
    BonkersQuoteHistoryAndClaims.bonkersRefused(false)
    BonkersQuoteHistoryAndClaims.bonkersSpecialTermsImposed(false)
    BonkersQuoteHistoryAndClaims.bonkersCancelled(false)
    BonkersQuoteHistoryAndClaims.bonkersHistoryAndClaimsContinue()
    
    BonkersQuoteAboutYou.bonkersAboutYouTitle()
    BonkersQuoteAboutYou.bonkersFirstName()
    BonkersQuoteAboutYou.bonkersSurname()
    BonkersQuoteAboutYou.bonkersEmail()
    BonkersQuoteAboutYou.bonkersMobile()
    BonkersQuoteAboutYou.bonkersDOB()
    BonkersQuoteAboutYou.bonkersEmploymentStatus()
    BonkersQuoteAboutYou.bonkersOccupation()
    BonkersQuoteAboutYou.bonkersStartDate()
    BonkersQuoteAboutYou.bonkersSecondPolicyHolder(false)
    BonkersQuoteAboutYou.bonkersAccidentalDamage(false)
    BonkersQuoteAboutYou.bonkersPersonalAccident(false)
    BonkersQuoteAboutYou.bonkersAboutYouContinue()

    BonkersQuoteDeclaration.bonkersDeclarationAgree()
    BonkersQuoteDeclaration.bonkersTsAndCsAgree()
    BonkersQuoteDeclaration.bonkersDeclarationContinue()

    
    cy.pause()
    BonkersQuoteScreen.bonkersQuoteSelectAviva()
    BonkersQuoteScreen.bonkersquoteAccept()

    //Move to Aviva side to continue purchase 
    BOAction.cookiesAccept()

    // Quote page
    QuotePageAndExtras.quotePageHeading()
    cy.pause()
    QuotePageAndExtras.quotePageBuyNowBtn()

    // Complete and pay
    CompleteAndPayPage.completeAndPayHeading()
    CompleteAndPayPage.completeAndPayMortgage()
    CompleteAndPayPage.completeAndPayCheckBox()
    CompleteAndPayPage.completeAndPayContinue()

    PaymentScreen.selectPaymentMethod1()
    ThankYouScreen.thankyouHeading()
    ThankYouScreen.retreiveBonkersPolicyNumber()

    Server.Server()

    // Log in
    Logins.company()
    Logins.username()
    Logins.password()
    Logins.loginButton()

    // Search for Customer file first policy
    Logins.email()
    BOAction.searchButton()
    BOAction.policySelectButton()
    BOAction.livePoliciesBTN()

    BOAction.selectActionDocumentsWithBonkersPolicyNumber()
    BOAction.checkBonkersPIFDocs()


  })
})
  


  
    
 