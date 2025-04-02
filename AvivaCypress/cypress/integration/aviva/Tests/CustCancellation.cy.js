import { Global } from "../AvivaPOM/Page Actions/POMActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_Stuff = new Global()
const day = require('dayjs')

describe('Customer can cancel policy', () => {
    it('should complete the process of cancelling a policy', () => {
        Global_Stuff.Server1()

        // Accept cookies and verify home page
        Global_Stuff.cookiesAccept()
        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')

        // Log in
        Global_Stuff.loginEmail()
        Global_Stuff.loginPassword()
        Global_Stuff.loginPortalButton()

        // Enter account to cancel policy
        Global_Stuff.portalManagePolicyWithPolicyNumber()
        cy.getAndWait('#Main_btnCancel').click()
        cy.getAndWait('.a-heading--2').contains('Cancel policy')
        cy.getAndWait('#ctl00_MainContent_cancelReason').select(1)
        cy.getAndWait('#ctl00_MainContent_reasonContinue').click()
        cy.getAndWait('#ctl00_MainContent_cancelDate').type(day().add(6, 'day').format('DD/MM/YYYY'))
        cy.getAndWait('#ctl00_MainContent_dateContinue').click()
        cy.getAndWait('#ctl00_MainContent_divCustomerPremium > .a-heading--3').contains('Amount to be refunded')
        cy.getAndWait('#ctl00_MainContent_Continue').click()
        cy.getAndWait('.l-columns__column > .a-heading--2').contains('Cancel policy')
        cy.getAndWait('.m-form-row > .a-heading--semibold').contains('Before you proceed')
        cy.getAndWait('.jSignature').click().click()
        cy.getAndWait('#ctl00_MainContent_Continue').click()
        cy.getAndWait('.CustomerModal > :nth-child(1) > .a-heading').contains('Confirm cancellation of policy')
        cy.getAndWait('#ctl00_MainContent_Submit').click()
        cy.getAndWait('.m-heading-group__item').contains('Your policy has been cancelled')
    })
})



  


