import { Global } from "../AvivaPOM/Page Actions/POMActions"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global()

describe('Portal Login Tests', () => {
    it('User is on Home Page', () => {
        Global_Stuff.Server1()
        Global_Stuff.cookiesAccept()
        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')
        Global_Stuff.loginEmail()
        Global_Stuff.loginPassword()
        Global_Stuff.loginPortalButton()
        cy.getAndWait('#Main_BreadcrumbHeading').contains('Welcome to MyAviva').and('be.visible')
        //cy.getAndWait('#RenewalDueModal > .CloseBtnMockup').click()
        cy.getAndWait('.o-masthead__logged-in-link').click()
        cy.getAndWait('#btnMenuLogOut').click({force: true})
        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')
        cy.go('back')
        cy.go('forward')
    })

    it('User enters invalid email, password and clicks login button', () => {
        Global_Stuff.Server1()
        Global_Stuff.cookiesAccept()
        Global_Stuff.loginEmail1()
        Global_Stuff.loginPassword1()
        cy.getAndWait('#loginPassword').click()
        cy.getAndWait('#RE__ProposerEmailRE').contains('Your email does not match the standard format for emails').and('be.visible')
        Global_Stuff.loginEmail2()
        Global_Stuff.loginPassword1()
        Global_Stuff.loginPortalButton()
        cy.getAndWait('#loginerror').contains('Your username and/or password is invalid.').and('be.visible')
        cy.getAndWait('#loginEmail').clear()
        cy.getAndWait('#loginPassword').click()
        cy.getAndWait('#RF__ProposerEmail').contains('Please enter your email address').and('be.visible')
        cy.getAndWait('#loginPassword').click()
        cy.getAndWait('#btnLogin').click()
        cy.getAndWait('#RequiredFieldValidator5').contains('Please enter your password').and('be.visible')
    })
})

