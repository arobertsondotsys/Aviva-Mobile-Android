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

const email = 'automatedtesting@DOTSYS.co.uk'

describe('Agent can back date a policy', () => {
    it('should back date a policy', () => {
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
        
        // Select policy and Age policy
        BOAction.livePoliciesBTN()
        cy.get('[title^="Policy Tools"]').last().click({force: true})
        cy.window().then((win) => {
            cy.get('[id^="bs-select"]').last().click()
            const orig = win.open
            win.open = function (url, target, features) {
                return orig.call(this, url, '_self', features)
            }
        })

        // Back date policy to 2022 and back to 2023
        cy.get('#ctl00_ContentPlaceHolder1_BackDateYear').select('2022')
        cy.get('#ctl00_ContentPlaceHolder1_UpdateDate').click()
        cy.get('.alert').should('include.text', 'Policy has been backdated')
        cy.get('#ctl00_ContentPlaceHolder1_BackDateYear').select('2023')
        cy.get('#ctl00_ContentPlaceHolder1_UpdateDate').click()
    })
})



