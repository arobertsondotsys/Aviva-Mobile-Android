import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { PortalActions } from "../AvivaPOM/PortalActions"
import { MTABOActions } from "../AvivaPOM/MTABOActions"
import { Login } from "../AvivaPOM/Login"
import { AdditionalDrivers } from "../AvivaPOM/AdditionalDrivers"
import { YourClaims } from "../AvivaPOM/YourClaims"
import { PenaltyPoints } from "../AvivaPOM/PenaltyPoints"
import { CoverStartDate } from "../AvivaPOM/CoverStartDate"
import { AboutTheDriversPQ2 } from "../AvivaPOM/AboutTheDriversPQ2"
import { YourInsHistoryAndIncepDetsPQ3 } from "../AvivaPOM/YourInsHistoryAndIncepDetsPQ3"
import { ThankYouScreen } from "../AvivaPOM/ThankYouScreen"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const MTABOAction = new MTABOActions()
const PortalAction = new PortalActions()
const Logins = new Login()
const AdditionalDriversPage = new AdditionalDrivers()
const YourClaimsPage = new YourClaims()
const PenaltyPointsPage = new PenaltyPoints()
const CoverStartDatePage = new CoverStartDate()
const AboutTheDriversPage = new AboutTheDriversPQ2()
const YourInsHistoryAndIncepDetsPage = new YourInsHistoryAndIncepDetsPQ3()
const ThankYouPage = new ThankYouScreen()
const day = require('dayjs')

describe('Customer can purchase an MTA', () => {
    it('should complete the process of purchasing an MTA', () => {
        Server.Server1()

        BOAction.cookiesAccept()
        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')

        Logins.loginEmail()
        Logins.loginPassword()
        Logins.loginPortalButton()

        // cy.getAndWait('#RenewalDueModal > .CloseBtnMockup').click()
        PortalAction.portalManagePolicyWithPolicyNumber()
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
        AdditionalDriversPage.additionalDriversTrue()
        AdditionalDriversPage.additionalDriver1Title()
        AdditionalDriversPage.additionalDriver1Forename()
        AdditionalDriversPage.additionalDriver1Surname()
        AdditionalDriversPage.additionalDriver1DOB()
        AdditionalDriversPage.additionalDriver1EmploymentStatus()
        AdditionalDriversPage.additionalDriver1LicenceType()
        AdditionalDriversPage.additionalDriver1LicenceYears()
        AdditionalDriversPage.addionalDriver1DriverNumber()
        AdditionalDriversPage.additionalDriver1Relationship()
        AdditionalDriversPage.additionalDriver1SpouseOwnVehFalse()
        AdditionalDriversPage.additionalDriver1Save()
        AdditionalDriversPage.additionalDriversFalse()
        AdditionalDriversPage.additionalDriversContinue()

        // Claims screen
        YourClaimsPage.claimsFalseLast()
        YourClaimsPage.claimsContinue()

        // Penalty points screen
        PenaltyPointsPage.ppFalseLast()
        PenaltyPointsPage.ppContinue()

        // Start date
        cy.getAndWait('#div8').contains('Cover start date')
        cy.getAndWait('#ctl00_MainContent_StartDate').type(day().add(2, 'day').format('DD/MM/YYYY'))
        cy.getAndWait('#TermsAndConditions > .a-checkbox > .a-checkbox__label').click()
        cy.getAndWait('#ctl00_MainContent_Continue8').click()

        // Quote screen
        MTABOAction.permMTABuyNow()

        // Complete post quote 2 "About the drivers"
        AboutTheDriversPage.postQuote2Heading()
        AboutTheDriversPage.postQuote2IsMainDriverTrue()
        AboutTheDriversPage.postQuote2IsNotOtherCarTrue()
        AboutTheDriversPage.postQuote2IsNotOtherInsTrue()
        AboutTheDriversPage.postQuote2IsNoConvictionTrue()
        AboutTheDriversPage.postQuote2IsNoDisqualificationTrue()
        AboutTheDriversPage.postQuote2IsNoRefusalTrue()
        AboutTheDriversPage.postQuote2IsNoIncreaseTrue()
        AboutTheDriversPage.postQuote2IsNoMedicalTrue()
        AboutTheDriversPage.postQuote2Continue()

        // Post quote screen 3
        CoverStartDatePage.coverStartCustomerQuote()
        YourInsHistoryAndIncepDetsPage.postQuote3Continue()

        // Thank you page
        ThankYouPage.thankyouHeading()
    })
})



  


