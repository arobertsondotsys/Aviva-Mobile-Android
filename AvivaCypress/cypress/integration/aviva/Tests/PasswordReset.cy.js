import { Global } from "../AvivaPOM/Page Actions/POMActions"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global()

describe('Password Reset Tests', () => {
    it('User is on login page and resets password', () => {
        Global_Stuff.Server1()

        Global_Stuff.cookiesAccept()
        cy.get('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')
        cy.get('#Forgot_Pwd').click()
        cy.get('[class^="a-heading a-heading--1 a-heading--semibold topMargin15"]').contains('Forgot password?')
        Global_Stuff.forgotEmail()
        cy.get('#Forgotten_Submit').click()
        cy.wait(4000)
        cy.get('.m-form-row__validation-message').contains('Many thanks for your enquiry. If you have an account, password reset instructions will be sent to')
    })

    it('User is on login page and resets both email and password', () => {
        Global_Stuff.Server1()

        Global_Stuff.cookiesAccept()
        cy.get('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')
        cy.get('#Forgot_both').click()
        cy.get('[class^="a-heading a-heading--1 a-heading--semibold topMargin15"]').contains('Forgot email address & password?')
        Global_Stuff.forgotEmailPassPolicy()
        Global_Stuff.forgotEmailPassDOB()
        cy.get('#ContinueForgotBoth').click()
        cy.wait(4000)
        cy.get('.m-form-row__validation-message').contains('Many thanks for your enquiry. If your account exists we will email password reset instructions shortly')
    })

    it('User is on login page and registers for MyAviva', () => {
        Global_Stuff.Server1()

        Global_Stuff.cookiesAccept()
        cy.get('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')
        cy.get('#btnRegisterOpen').click()
        cy.get('[class^="a-heading a-heading--1 a-heading--semibold topMargin15"]').contains('Register for MyAviva')
        Global_Stuff.registerPolicy()
        Global_Stuff.registerDOB()
        cy.get('#ContinueRegister').click()
        cy.get('#ContinueRegister').click()
        cy.wait(4000)
        cy.get('.m-form-row__validation-message').contains('If you have an account with us, registration instructions will be sent shortly.')
    })
})



