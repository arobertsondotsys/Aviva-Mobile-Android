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

describe('Agent can unlock customer file', () => {
    it('should unlock the customer file', () => {
        Server.Server()
        
        // Log in
        Logins.company()
        Logins.username2()
        Logins.password2()
        Logins.loginButton()

        // Search for Customer file
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        
        // Unlock customer file
        BOAction.unlockBTN()
    })
})



