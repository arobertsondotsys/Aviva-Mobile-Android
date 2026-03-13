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

describe('Agent can unlock customer file again', () => {
    it('should unlock the customer file again', () => {
        Server.Server()
        
        // Log in
        cy.agentLogin()

        // Search for Customer file
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        
        // Unlock customer file
        BOAction.unlockBTN()
    })
})



