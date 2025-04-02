import { Global } from "../AvivaPOM/Page Actions/POMActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_Stuff = new Global()
const day = require('dayjs')

describe('Agent can cancel a policy', () => {
    it('should complete the process of canceling a policy', () => {
        Global_Stuff.Server()

        // Log in
        Global_Stuff.company()
        Global_Stuff.username()
        Global_Stuff.password()
        Global_Stuff.loginButton()

        // Search for Customer file
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()

        // Select policy
        Global_Stuff.livePoliciesBTN()

        Global_Stuff.selectActionCancelWithPolicyNumber()

        // Select Cancelation reason 
        Global_Stuff.cookiesAccept()
        cy.getAndWait('.l-columns__column > .a-heading--2').should('have.text', 'Cancel policy')
        cy.getAndWait('#ctl00_MainContent_CancellationRequest').select('Insurer')
        cy.getAndWait('.m-multiselect-toggle').click()
        cy.getAndWait(':nth-child(4) > .a-checkbox > .a-checkbox__label').click()
        cy.getAndWait('#ctl00_MainContent_insurerReasonContinue').click()

        // Select Cancelation date (+5 days from current date)
        cy.getAndWait('.a-label').should('have.text', 'What date would you like to cancel from?')
        cy.getAndWait('#ctl00_MainContent_staffCancelDate').type(day().add(6, 'day').format('DD/MM/YYYY'))
        cy.getAndWait('#ctl00_MainContent_staffDateContinue').click()

        // Quote screen for cancelation
        cy.getAndWait('#ctl00_MainContent_divStaffInsurer > .a-heading--3').should('have.text', 'Amount to be refunded')
        cy.getAndWait('#ctl00_MainContent_Continue').click()

        // Confirmation page check
        cy.getAndWait('.m-heading-group__item').should('have.text', 'Your policy has been cancelled')
    })
})



