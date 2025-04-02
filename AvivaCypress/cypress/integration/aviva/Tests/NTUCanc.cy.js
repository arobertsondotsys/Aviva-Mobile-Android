import { Global } from "../AvivaPOM/Page Actions/POMActions"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global()

describe('Agent can NTU a cancellation', () => {
    it('should complete the process of NTU a cancellation', () => {
        Global_Stuff.Server()
        
        // Log in to back office
        Global_Stuff.company()
        Global_Stuff.username()
        Global_Stuff.password()
        Global_Stuff.loginButton()

        // Search for customer
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()

        // Open customer file Live policies
        Global_Stuff.livePoliciesBTN()
        Global_Stuff.ntuWithPolicyNumber()

        // Click to NTU last cancellation and keep in same window 
        Global_Stuff.cookiesAccept()
        cy.get('#ctl00_MainContent_NTUButton').click()
        cy.get('#ctl00_MainContent_ConfirmationRow').contains("The Adjustment has been NTU'd")
    })
})



