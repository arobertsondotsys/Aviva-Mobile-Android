import { Servers } from "../AvivaPOM/Servers"
import { Login } from "../AvivaPOM/Login"
import { BOActions } from "../AvivaPOM/BOActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers
const Logins = new Login
const BOAction = new BOActions

describe('Change policy ownership', () => {
    it('should complete the process of changing policy ownership', () => {
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

        // Check if dropdown exists and handle accordingly
        cy.contains('Live Policies').click()
        cy.wait(3000)
        cy.get('body').then(($body) => {
            if ($body.find('[class^="dropdown selectAction"]').length === 0) {
                cy.log('No Policy found, ending test.')
                return // End the test without failing
            } else {
                const length = $body.find('[class^="dropdown selectAction"]').length;
                cy.log(`${length} Policy(s) found, proceeding with Ownership Change.`);
                RecursiveLoop(length);
            }
        });

        function ChangePolicyOwnerShip() {
            // Select last policy and Policy Ownership
            BOAction.livePoliciesBTN()
            cy.get('[class^="dropdown selectAction"]').last().click({ force: true }).contains('Policy Ownership').invoke("removeAttr", "target").click({ force: true })

            // Change ownership
            cy.get('#ctl00_ContentPlaceHolder1_NewEmailAddress').type('automatedtestingJul2025@DOTSYS.co.uk')
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
                }
            })
        }
    })
})