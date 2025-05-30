import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { Login } from "../AvivaPOM/Login"
import { AboutTheDriversPQ2 } from "../AvivaPOM/AboutTheDriversPQ2"
import { YourInsHistoryAndIncepDetsPQ3 } from "../AvivaPOM/YourInsHistoryAndIncepDetsPQ3"
import { ThankYouScreen } from "../AvivaPOM/ThankYouScreen"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const Logins = new Login()
const AboutTheDriversPage = new AboutTheDriversPQ2()
const YourInsHistoryAndIncepDetsPage = new YourInsHistoryAndIncepDetsPQ3()
const ThankYouPage = new ThankYouScreen()
const day = require('dayjs')

describe('Agent can change the driver number', () => {
    it('should complete the process of changing the driver number', () => {
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

        // Open policy
        cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click({force: true})
        BOAction.selectActionMakeADJWithPolicyNumber()
        
        // Select to perform a permanent adjustment on contact details
        BOAction.cookiesAccept()
        cy.get('#ctl00_MainContent_ddlPermaSelection').select('Contacts', {force: true}).should('have.value', 'Contacts')
        cy.get('#btnMakePermaChange').click({force: true})
        
        // Input date for MTA to start
        cy.get('#ctl00_MainContent_Continue1').click({force: true})
        cy.get('#ctl00_MainContent_StartDate').type(day().add(3, 'day').format('DD/MM/YYYY'), {force: true})
        cy.get('#ctl00_MainContent_Continue8').click({force: true})
        
        // Checking the heading, Note box present 
        cy.get('#ctl00_MainContent_NoPaymentPerma > .a-heading').contains('No payment required')
        cy.get('#ctl00_divNotes > .a-button').should('be.visible')
        cy.get('#ctl00_MainContent_btnContinue').click({force: true})
        
        // Completing post quote screen 2 questions and amending Driver number
        AboutTheDriversPage.postQuote2Headingselect()
        AboutTheDriversPage.postQuote2Heading()
        BOAction.notes()
        AboutTheDriversPage.postQuote2IsResidentTrue()
        AboutTheDriversPage.postQuote2IsMainDriverTrue()
        AboutTheDriversPage.postQuote2IsNotOtherCarTrue()
        AboutTheDriversPage.postQuote2IsNotOtherInsTrue()
        AboutTheDriversPage.postQuote2IsNoConvictionTrue()
        AboutTheDriversPage.postQuote2IsNoDisqualificationTrue()
        AboutTheDriversPage.postQuote2IsNoRefusalTrue()
        AboutTheDriversPage.postQuote2IsNoIncreaseTrue()
        AboutTheDriversPage.postQuote2IsNoMedicalTrue()
        cy.get('#ctl00_MainContent_DriverRepeater_ctl00_DriverNum').type('121212112', {force: true})
        AboutTheDriversPage.postQuote2Continue()
        
        // Completing post quote screen 3 
        YourInsHistoryAndIncepDetsPage.postQuote3Continue()
        
        // Thank you page
        ThankYouPage.thankyouHeading()
        cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    })
})