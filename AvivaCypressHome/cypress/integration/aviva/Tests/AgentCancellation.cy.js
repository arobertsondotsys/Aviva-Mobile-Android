import { Global } from "../AvivaPOM/Page Actions/POMActionsHome"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_stuff = new Global

describe('Agent can cancel a policy', () => {
  it('should allow an agent to cancel a policy', () => {
    // Login to back office 
    Global_stuff.Server()
    Global_stuff.company()
    Global_stuff.username()
    Global_stuff.password()
    Global_stuff.loginButton()
    Global_stuff.email()
    Global_stuff.searchButton()
    Global_stuff.policySelectButton()
    Global_stuff.livePoliciesBTN()
    Global_stuff.homePolicyTab()
    Global_stuff.selectActionCancelWithPolicyNumber()
    Global_stuff.cookiesAccept()
    Global_stuff.cancellationRequest()
    Global_stuff.cancellationReason1()
    Global_stuff.cancellationReasonContinue()
    cy.wait(2000)
    // Global_stuff.cancellationInception()
    cy.contains('Cancel the policy back to inception').click()
    cy.wait(2000)
    Global_stuff.cancellationContinue()
    cy.wait(2000)
    Global_stuff.cancellationAccept()
    Global_stuff.cancellationDone()
  })
})