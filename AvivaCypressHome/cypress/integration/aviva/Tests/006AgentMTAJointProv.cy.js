import { Servers } from "../AvivaPOM/Servers"
import { Login } from "../AvivaPOM/Login"
import { YourCover } from "../AvivaPOM/YourCover"
import { PolicyStartDateClaims } from "../AvivaPOM/PolicyStartDateClaims"
import { ThankYouPage } from "../AvivaPOM/ThankYouPage"
import { BOActions } from "../AvivaPOM/BOActions"
import { MTABOActions } from "../AvivaPOM/MTABOActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers
const Logins = new Login
const YourCoverPage = new YourCover
const PolicyStartDateClaimsPage = new PolicyStartDateClaims
const ThankYouScreen = new ThankYouPage
const BOAction = new BOActions
const MTABOAction = new MTABOActions

describe('Agent MTA purchase of Joint Owner checking for correct documents', () => {
  it('should allow an agent to make an MTA purchase and check for correct documents', () => {
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
    BOAction.selectActionMakeADJWithPolicyNumber()
    BOAction.cookiesAccept()
    MTABOAction.adjustmentTypeCoverDetails()
    MTABOAction.adjustmentContinue()
    YourCoverPage.yourCoverJointOwner()
    YourCoverPage.yourCoverJointOwner1()
    YourCoverPage.yourCoverContinue()
    PolicyStartDateClaimsPage.coverStartDate()
    cy.wait(120000)
    PolicyStartDateClaimsPage.coverStartContinue()
    MTABOAction.adjustmentBuyContinue()
    MTABOAction.adjustmentContinueToPayment()

    ThankYouScreen.thankyouHeading()

    // Log in to back office
    Server.Server()
    BOAction.home()
    
    // Search for Customer file
    Logins.email()
    BOAction.searchButton()
    BOAction.policySelectButton()

    // Unlock customer file
    BOAction.livePoliciesBTN()
    BOAction.homePolicyTab()
    BOAction.selectActionDocumentsWithPolicyNumber()
    cy.wait(60000)
    cy.reload()
    BOAction.policyDocsSOF()
    BOAction.policyDocsSchedule()
  })
})


  
    
 