import { Global } from "../AvivaPOM/Page Actions/POMActions"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global()

describe('Change policy ownership', () => {
    it('should complete the process of changing policy ownership', () => {
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

        function ChangePolicyOwnerShip() {
            // Select last policy and Policy Ownership 
            Global_Stuff.livePoliciesBTN()
            cy.get('[class^="dropdown selectAction"]').last().click({force: true}).contains('Policy Ownership').invoke("removeAttr", "target").click({force: true})

            // Change ownership
            cy.get('#ctl00_ContentPlaceHolder1_NewEmailAddress').type('automatedtestingMar2025@DOTSYS.co.uk')
            cy.get('#ctl00_ContentPlaceHolder1_ChangeOwnership').click()
            cy.get('#ctl00_ContentPlaceHolder1_SuccessMessage').contains('The policy has now been re-registered')
            cy.go('back')
            cy.go('back')
        }

        function RecursiveLoop(n) {
            cy.get('[class^="dropdown selectAction"]').each(($value, index) => {
                if (index < n) {
                    ChangePolicyOwnerShip()

                    // Additional asynchronous actions can be added here if needed

                    cy.log(`Iteration ${index + 1} completed`)

                    // Continue with the next iteration
                }
            })
        }

        cy.get('[class^="dropdown selectAction"]').its('length').then((length) => {
            RecursiveLoop(length)
        })
    })
})
