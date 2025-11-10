import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { PortalActions } from "../AvivaPOM/PortalActions"
import { Login } from "../AvivaPOM/Login"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const PortalAction = new PortalActions()
const Logins = new Login()
const day = require('dayjs')

describe('Customer can cancel policy', () => {
    it('should complete the process of cancelling a policy', () => {
        Server.Server1()

        // Accept cookies and verify home page
        BOAction.cookiesAccept()
        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')

        // Log in
        Logins.loginEmail()
        Logins.loginPassword()
        Logins.loginPortalButton()

        // Enter account to cancel policy
        PortalAction.portalManagePolicyWithTravelPolicyNumberSingle()
        PortalAction.portalCancelBTN()
        PortalAction.portalCancellationrequest()
        PortalAction.portalCancellationreason()
        PortalAction.portalCancellationContinue()
        PortalAction.portalCancellationAmountHeading()
        PortalAction.portalCancellationAmountContinue()
        PortalAction.portalCancellationCancelPolicyHeading()
        PortalAction.portalCancellationCBeforeYouProceedHeading()
        PortalAction.portalCancellationSignature()
        PortalAction.portalCancellationDate()
        PortalAction.portalCancellationConfirmHeading()
        PortalAction.portalCancellationconfirmContinue()
        PortalAction.portalCancellationConfirmPageHeading()
    })
})



  


