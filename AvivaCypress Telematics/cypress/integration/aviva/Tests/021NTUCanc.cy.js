import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { Login } from "../AvivaPOM/Login"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const Logins = new Login()


describe('Agent can NTU a cancellation', () => {
    it('should complete the process of NTU a cancellation', () => {
        Server.Server()
        
        // Log in to back office
        cy.agentLogin()

        // Search for customer
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()

        // Open customer file Live policies
        BOAction.livePoliciesBTN()
        BOAction.ntuWithPolicyCancNumber()

        // Click to NTU last cancellation and keep in same window 
        BOAction.cookiesAccept()
        cy.get('#ctl00_MainContent_NTUButton').click()
        cy.get('#ctl00_MainContent_ConfirmationRow').contains("The Adjustment has been NTU'd")
    })
})



