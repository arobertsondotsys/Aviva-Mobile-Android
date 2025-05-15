import { Servers } from "../AvivaPOM/Servers"
import { Login } from "../AvivaPOM/Login"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers()
const Logins = new Login()


describe('Check cookie status', () => {
    it('should check the status of the cookie', () => {
        Server.Server()
        
        // Log in
        Logins.company()
        Logins.username()
        Logins.password()
        Logins.loginButton()

        cy.getCookie('.evolveDAuth').then((cookie) => {
            if (cookie) {
                const cookieValue = cookie.value
                // Perform assertions on the cookie value
                expect(cookieValue).to.not.be.empty

                // You can also check the status or any specific attribute of the cookie
                expect(cookie.secure).to.be.true
                expect(cookie.httpOnly).to.be.true
                cy.log("The 'Dauth' cookie is secure")

                // You can add more assertions based on your requirements
            } else {
                // Handle the case when the cookie is not found
                // For example, you can fail the test or perform other actions
                // depending on your use case
                cy.log("The 'DAuth' cookie was not found.")
            }
        })
    })
})