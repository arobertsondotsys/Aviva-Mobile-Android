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

describe('Portal Login Tests', () => {
    it('User is on Home Page', () => {
        Server.Server1()
        BOAction.cookiesAccept()
        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')
        Logins.loginEmail()
        Logins.loginPassword()
        Logins.loginPortalButton()
        cy.getAndWait('#Main_BreadcrumbHeading').contains('Welcome to MyAviva').and('be.visible')
        cy.getAndWait('#RenewalDueModal > .CloseBtnMockup').then(($button) => {
            if ($button.is(':visible')) {
                cy.wrap($button).click(); // Click the button if it is visible
                cy.log('Renewal Due Modal Close button clicked');
            } else {
                cy.log('Renewal Due Modal Close button not visible');
            }
        });
        cy.getAndWait('.o-masthead__logged-in-link').click()
        cy.getAndWait('#btnMenuLogOut').click({force: true})
        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')
        cy.go('back')
        cy.go('forward')
        cy.wait(500)
    })

    it('User enters invalid email, password and clicks login button', () => {
        Server.Server1()
        BOAction.cookiesAccept()
        Logins.loginEmail1()
        Logins.loginPassword1()
        cy.getAndWait('#loginPassword').click()
        cy.getAndWait('#RE__ProposerEmailRE').contains('Your email does not match the standard format for emails').and('be.visible')
        Logins.loginEmail2()
        Logins.loginPassword1()
        Logins.loginPortalButton()
        cy.getAndWait('#loginerror').contains('Your username and/or password is invalid.').and('be.visible')
        cy.getAndWait('#loginEmail').clear()
        cy.getAndWait('#loginPassword').click()
        cy.getAndWait('#RF__ProposerEmail').contains('Please enter your email address').and('be.visible')
        cy.getAndWait('#loginPassword').click()
        cy.getAndWait('#btnLogin').click()
        cy.getAndWait('#RequiredFieldValidator5').contains('Please enter your password').and('be.visible')
    })
})

