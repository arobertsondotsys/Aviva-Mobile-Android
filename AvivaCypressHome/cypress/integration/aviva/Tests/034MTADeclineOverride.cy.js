import { Servers } from "../AvivaPOM/Servers"
import { Login } from "../AvivaPOM/Login"
import { QuotePage } from "../AvivaPOM/QuotePage"
import { CompleteAndPay } from "../AvivaPOM/CompleteAndPay"
import { PaymentPage } from "../AvivaPOM/PaymentPage"
import { ThankYouPage } from "../AvivaPOM/ThankYouPage"
import { BOActions } from "../AvivaPOM/BOActions"
import { MTABOActions } from "../AvivaPOM/MTABOActions"
import { Decline } from "../AvivaPOM/Decline"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers
const Logins = new Login
const QuotePageAndExtras = new QuotePage
const CompleteAndPayPage = new CompleteAndPay
const PaymentScreen = new PaymentPage
const ThankYouScreen = new ThankYouPage
const BOAction = new BOActions
const MTABOAction = new MTABOActions
const DeclineScreen = new Decline

describe('Agent MTA purchase', () => {
  it('should allow an agent to make an MTA purchase', () => {
    // Login to back office 
    Server.Server()
    Logins.company()
    Logins.username()
    Logins.password()
    Logins.loginButton()
    Logins.email()
    BOAction.searchButton()
    BOAction.policySelectButton()
    BOAction.livePoliciesBTN()
    BOAction.homePolicyTab()
    BOAction.selectActionMakeADJWithPolicyNumberForAgentMTA()
    BOAction.cookiesAccept()
    MTABOAction.adjustmentType()
    MTABOAction.adjustmentContinue()
    QuotePageAndExtras.quotePageOptionalCoverViewOptions()
    MTABOAction.addSpecifiedItemBTN()
    MTABOAction.addSpecifiedItemDescription()
    MTABOAction.addSpecifiedItemType()
    MTABOAction.addSpecifiedItemValueDecline()
    MTABOAction.addSpecifiedItemAddItem()

    //Decline Screen
    DeclineScreen.declineHeading()
    DeclineScreen.declineOverrideToQuote()
    DeclineScreen.declineOverrideToQuoteContinue()

    cy.wait(120000)
    MTABOAction.adjustmentBuyNowBTN()
    CompleteAndPayPage.completeAndPayContinue()
    MTABOAction.paymentTypeAgentCard()
    MTABOAction.paymentTypeAgentPayNow()
    PaymentScreen.selectPaymentMethod()
    ThankYouScreen.thankyouHeading()
  })
})
  


  
    
 