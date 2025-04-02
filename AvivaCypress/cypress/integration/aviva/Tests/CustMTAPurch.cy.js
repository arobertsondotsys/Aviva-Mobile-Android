import { Global } from "../AvivaPOM/Page Actions/POMActions"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global()
const day = require('dayjs')

describe('Customer can purchase an MTA', () => {
    it('should complete the process of purchasing an MTA', () => {
        Global_Stuff.Server1()

        Global_Stuff.cookiesAccept()
        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')

        Global_Stuff.loginEmail()
        Global_Stuff.loginPassword()
        Global_Stuff.loginPortalButton()

        // cy.getAndWait('#RenewalDueModal > .CloseBtnMockup').click()
        Global_Stuff.portalManagePolicyWithPolicyNumber()
        cy.getAndWait('#Main_btnAdjustment').click()
        cy.getAndWait('#ctl00_MainContent_ddlPermaSelection').select(4, {force: true})
        cy.window().then((win) => {
            cy.getAndWait('#btnMakePermaChange').click({force: true})
            const orig = win.open
            win.open = function (url, targetAndWait, features) {
                return orig.call(this, url, '_self', features)
            }
        })

        // Input AD details
        Global_Stuff.additionalDriversTrue()
        Global_Stuff.additionalDriver1Title()
        Global_Stuff.additionalDriver1Forename()
        Global_Stuff.additionalDriver1Surname()
        Global_Stuff.additionalDriver1DOB()
        Global_Stuff.additionalDriver1EmploymentStatus()
        Global_Stuff.additionalDriver1LicenceType()
        Global_Stuff.additionalDriver1LicenceYears()
        Global_Stuff.addionalDriver1DriverNumber()
        Global_Stuff.additionalDriver1Relationship()
        Global_Stuff.additionalDriver1SpouseOwnVehFalse()
        Global_Stuff.additionalDriver1Save()
        Global_Stuff.additionalDriversFalse()
        Global_Stuff.additionalDriversContinue()

        // Claims screen
        Global_Stuff.claimsFalseLast()
        Global_Stuff.claimsContinue()

        // Penalty points screen
        Global_Stuff.ppFalseLast()
        Global_Stuff.ppContinue()

        // Start date
        cy.getAndWait('#div8').contains('Cover start date')
        cy.getAndWait('#ctl00_MainContent_StartDate').type(day().add(2, 'day').format('DD/MM/YYYY'))
        cy.getAndWait('#TermsAndConditions > .a-checkbox > .a-checkbox__label').click()
        cy.getAndWait('#ctl00_MainContent_Continue8').click()

        // Quote screen
        Global_Stuff.permMTABuyNow()

        // Complete post quote 2 "About the drivers"
        Global_Stuff.postQuote2Heading()
        Global_Stuff.postQuote2IsMainDriverTrue()
        Global_Stuff.postQuote2IsNotOtherCarTrue()
        Global_Stuff.postQuote2IsNotOtherInsTrue()
        Global_Stuff.postQuote2IsNoConvictionTrue()
        Global_Stuff.postQuote2IsNoDisqualificationTrue()
        Global_Stuff.postQuote2IsNoRefusalTrue()
        Global_Stuff.postQuote2IsNoIncreaseTrue()
        Global_Stuff.postQuote2IsNoMedicalTrue()
        Global_Stuff.postQuote2Continue()

        // Post quote screen 3
        Global_Stuff.coverStartCustomerQuote()
        Global_Stuff.postQuote3Continue()

        // Thank you page
        Global_Stuff.thankyouHeading()
    })
})



  


