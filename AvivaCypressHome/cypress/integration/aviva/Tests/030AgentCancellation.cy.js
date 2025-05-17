import { Servers } from "../AvivaPOM/Servers"
import { Login } from "../AvivaPOM/Login"
import { BOActions } from "../AvivaPOM/BOActions"
import { CancellationBOActions } from "../AvivaPOM/CancellationBOActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers
const Logins = new Login
const BOAction = new BOActions
const CancBOAction = new CancellationBOActions

describe('Agent can cancel a policy', () => {
  it('should allow an agent to cancel a policy', () => {
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
    BOAction.selectActionCancelWithPolicyNumber()
    BOAction.cookiesAccept()
    CancBOAction.cancellationRequest()
    CancBOAction.cancellationReason1()
    CancBOAction.cancellationReasonContinue()
    cy.contains('Cancel the policy back to inception').click()
    cy.wait(1000)
    CancBOAction.cancellationContinue()
    CancBOAction.cancellationAccept()
    CancBOAction.cancellationDone()
  })
})