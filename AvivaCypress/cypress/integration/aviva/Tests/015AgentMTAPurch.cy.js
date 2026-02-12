import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { Login } from "../AvivaPOM/Login"
import { CoverStartDate } from "../AvivaPOM/CoverStartDate"
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
const CoverStartDatePage = new CoverStartDate()
const AboutTheDriversPage = new AboutTheDriversPQ2()
const YourInsHistoryAndIncepDetsPage = new YourInsHistoryAndIncepDetsPQ3()
const ThankYouPage = new ThankYouScreen()
const day = require('dayjs')

describe('Agent can purchase MTA', () => {
    it('should complete the process of purchasing MTA', () => {
        Server.Server()
        
        // Log in
        cy.agentLogin()

        // Search for Customer file
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        
        // Open policy
        BOAction.livePoliciesBTN()

        // Select Make adjustment and revert window back to current window
        BOAction.selectActionMakeADJWithPolicyNumber()
        
        // Select to perform a permanent adjustment on contact details
        BOAction.cookiesAccept()
        cy.getAndWait('#ctl00_MainContent_ddlPermaSelection, #ddlPermaSelection').select('Contacts', {force: true}).should('have.value', 'Contacts')
        cy.getAndWait('#btnMakePermaChange').click({force: true})
        
        // Amend Contact number
        cy.getAndWait('#ctl00_MainContent_ProposerMobile').clear().type('07950439086')
        cy.getAndWait('#ctl00_MainContent_Continue1').click()
        
        // Input date for MTA to start
        CoverStartDatePage.coverStartDate()
        CoverStartDatePage.coverStartContinue()
        
        // Checking the heading, Note box present 
        cy.getAndWait('#ctl00_MainContent_NoPaymentPerma > .a-heading').contains('No payment required')
        BOAction.notes()
        cy.getAndWait('#ctl00_MainContent_btnContinue').click({force: true})
        
        // Completing post quote screen 2 questions
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
        AboutTheDriversPage.postQuote2Continue()
        
        // Completing post quote screen 3 
        YourInsHistoryAndIncepDetsPage.postQuote3Continue()
        
        // Thank you page
        ThankYouPage.thankyouHeading()
        BOAction.notes()
    })
})