import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { Login } from "../AvivaPOM/Login"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const Logins = new Login()
const day = require('dayjs')

describe('Agent can cancel a policy', () => {
    it('should complete the process of canceling a policy', () => {
        Server.Server()

        // Log in
        Logins.company()
        Logins.username()
        Logins.password()
        Logins.loginButton()

        // Search for Customer file
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()

        // Select policy
        BOAction.livePoliciesBTN()

        BOAction.selectActionCancelWithTravelPolicyNumber()

        // Select Cancelation reason 
        BOAction.cookiesAccept()
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



