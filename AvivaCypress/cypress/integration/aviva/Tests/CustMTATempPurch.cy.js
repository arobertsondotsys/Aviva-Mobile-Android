import { Global } from "../AvivaPOM/Page Actions/POMActions"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global()
const day = require('dayjs')

describe('Customer can purchase a Temp AD', () => {
    it('should complete the process of purchasing a Temp AD', () => {
        Global_Stuff.Server1()

        Global_Stuff.cookiesAccept()
        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')

        Global_Stuff.loginEmail()
        Global_Stuff.loginPassword()
        Global_Stuff.loginPortalButton()

        // cy.getAndWait('#RenewalDueModal > .CloseBtnMockup').click()
        Global_Stuff.portalManagePolicyWithPolicyNumber()
        cy.getAndWait('#Main_btnAdjustment').click()
        cy.getAndWait('#ctl00_MainContent_ddlTempSelection').select(2, {force: true})
        cy.window().then((win) => {
            cy.getAndWait('#btnMakeTempChange').click({force: true})
            const orig = win.open
            win.open = function (url, targetAndWait, features) {
                return orig.call(this, url, '_self', features)
            }
        })

        // Input dates for temp AD
        cy.getAndWait('#mainSection > .l-section > .l-columns > .l-columns__column > .a-heading').contains('Temporarily add another driver')
        cy.getAndWait('#StartDate').type(day().add(1, 'day').format('DD/MM/YYYY'), {force: true})
        cy.getAndWait('#ctl00_MainContent_CoverTime').type('13:00', {force: true})
        cy.getAndWait('#EndDate').type(day().add(1, 'day').format('DD/MM/YYYY'), {force: true})
        cy.getAndWait('#ctl00_MainContent_CoverEndTime').type('23:59', {force: true})
        cy.getAndWait('#ctl00_MainContent_Continue').click({force: true})

        // Input temp AD details
        cy.getAndWait('#ctl00_MainContent_DDLProposerTitle').select(1, {force: true})
        cy.getAndWait('#ctl00_MainContent_ProposerForename').type('Andy', {force: true})
        cy.getAndWait('#ctl00_MainContent_ProposerSurname').type('Test', {force: true})
        cy.getAndWait('#ctl00_MainContent_ProposerDOB').type('20/11/1980', {force: true})
        cy.getAndWait('#ctl00_MainContent_LicenceType').select(1, {force: true})
        cy.getAndWait('#ctl00_MainContent_Continue2').click({force: true})

        // Quote page
        cy.getAndWait('#ctl00_MainContent_btnBuyNow').click({force: true})

        // Payment screen
        Global_Stuff.paymentCardDemo()

        // Thank you page
        Global_Stuff.thankyouHeading()
    })
})



  


