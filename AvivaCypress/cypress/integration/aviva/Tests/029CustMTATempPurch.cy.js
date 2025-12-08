import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { MTABOActions } from "../AvivaPOM/MTABOActions"
import { PortalActions } from "../AvivaPOM/PortalActions"
import { Login } from "../AvivaPOM/Login"
import { PaymentScreen } from "../AvivaPOM/PaymentScreen"
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
const PaymentPage = new PaymentScreen()
const ThankYouPage = new ThankYouScreen()
const day = require('dayjs')

describe('Customer can purchase a Temp AD', () => {
    it('should complete the process of purchasing a Temp AD', () => {
        Server.Server1()

        BOAction.cookiesAccept()
        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')

        Logins.loginEmail()
        Logins.loginPassword()
        Logins.loginPortalButton()

        // cy.getAndWait('#RenewalDueModal > .CloseBtnMockup').click()
        PortalAction.portalManagePolicyWithPolicyNumber()
        cy.getAndWait('#Main_btnAdjustment').click()
        cy.getAndWait('#ctl00_MainContent_ddlTempSelection, #ddlTempSelection').select(2)
        cy.window().then((win) => {
            cy.getAndWait('#btnMakeTempChange').click()
            const orig = win.open
            win.open = function (url, targetAndWait, features) {
                return orig.call(this, url, '_self', features)
            }
        })

        // Input dates for temp AD
        cy.getAndWait('#mainSection > .l-section > .l-columns > .l-columns__column > .a-heading').contains('Temporarily add another driver')
        cy.getAndWait('#StartDate').type(day().add(1, 'day').format('DD/MM/YYYY'))
        cy.getAndWait('#ctl00_MainContent_CoverTime, #CoverTime').type('13:00')
        cy.getAndWait('#EndDate').type(day().add(1, 'day').format('DD/MM/YYYY'))
        cy.getAndWait('#ctl00_MainContent_CoverEndTime, #CoverEndTime').type('23:59')
        cy.getAndWait('#ctl00_MainContent_Continue').click()

        // Input temp AD details
        cy.getAndWait('#ctl00_MainContent_DDLProposerTitle, #DDLProposerTitle').select(1)
        cy.getAndWait('#ctl00_MainContent_ProposerForename').type('Andy')
        cy.getAndWait('#ctl00_MainContent_ProposerSurname').type('Test')
        cy.getAndWait('#ctl00_MainContent_ProposerDOB').type('20/11/1980')
        cy.getAndWait('#ctl00_MainContent_LicenceType, #LicenceType').select(1)
        cy.getAndWait('#ctl00_MainContent_Continue2').click()

        // Quote page
        MTABOAction.permMTABuyNow()

        // Payment screen
        PaymentPage.selectPaymentMethod()

        // Thank you page
        ThankYouPage.thankyouHeading()
    })
})



  


