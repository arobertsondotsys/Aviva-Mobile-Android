import { Servers } from "../AvivaPOM/Servers"
import { PortalActions } from "../AvivaPOM/PortalActions"
import { Login } from "../AvivaPOM/Login"
import { CompleteAndPay } from "../AvivaPOM/CompleteAndPay"
import { ThankYouPage } from "../AvivaPOM/ThankYouPage"
import { BOActions } from "../AvivaPOM/BOActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers
const PortalAction = new PortalActions
const Logins = new Login
const CompleteAndPayPage = new CompleteAndPay
const ThankYouScreen = new ThankYouPage
const BOAction = new BOActions

describe('Customer MTA purchase', () => {
  it('should allow a customer to make an MTA purchase', () => {
    // Access quote link 
    Server.Server1()
    BOAction.cookiesAccept()
    Logins.loginEmail()
    Logins.loginPassword()
    Logins.loginPortalButton()
    PortalAction.portalMakeADJWithPolicyNumberForCustMTA()
    PortalAction.portalMakeAdjustmentSelect()
    PortalAction.portalAdjustmentTypeSelect()
    PortalAction.portalAdjContinue()
    // cy.get('.a-checkbox__label').click()
    // cy.get('#MainContent_Continue4').click()
    BOAction.cookiesAccept()
    PortalAction.portalMortgageSelect()
    PortalAction.portalMortgageIntLetterTrue()
    PortalAction.portalMortgageProvider()
    CompleteAndPayPage.completeAndPayCheckBox()
    CompleteAndPayPage.completeAndPayContinue()
    ThankYouScreen.thankyouHeading()
    cy.contains('Your Notice of Bank Interest Letter')
  })
})
  


  
    
 