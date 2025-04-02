import { Global } from "../AvivaPOM/Page Actions/POMActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_Stuff = new Global()
const day = require('dayjs')

describe('Agent can purchase MTA', () => {
    it('should complete the process of purchasing MTA', () => {
        Global_Stuff.Server()
        
        // Log in
        Global_Stuff.company()
        Global_Stuff.username()
        Global_Stuff.password()
        Global_Stuff.loginButton()

        // Search for Customer file
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()
        
        // Open policy
        Global_Stuff.livePoliciesBTN()

        // Select Make adjustment and revert window back to current window
        Global_Stuff.selectActionMakeADJWithPolicyNumber()
        
        // Select to perform a permanent adjustment on contact details
        Global_Stuff.cookiesAccept()
        cy.getAndWait('#ctl00_MainContent_ddlPermaSelection').select('Contacts', {force: true}).should('have.value', 'Contacts')
        cy.getAndWait('#btnMakePermaChange').click({force: true})
        
        // Amend Contact number
        cy.getAndWait('#ctl00_MainContent_ProposerMobile').clear().type('07950439086')
        cy.getAndWait('#ctl00_MainContent_Continue1').click()
        
        // Input date for MTA to start
        cy.getAndWait('#ctl00_MainContent_StartDate').type(day().format('DD/MM/YYYY'), {force: true})
        cy.getAndWait('#ctl00_MainContent_Continue8').click({force: true})
        
        // Checking the heading, Note box present 
        cy.getAndWait('#ctl00_MainContent_NoPaymentPerma > .a-heading').contains('No payment required')
        Global_Stuff.notes()
        cy.getAndWait('#ctl00_MainContent_btnContinue').click({force: true})
        
        // Completing post quote screen 2 questions
        Global_Stuff.postQuote2Heading()
        Global_Stuff.notes()
        Global_Stuff.postQuote2IsResidentTrue()
        Global_Stuff.postQuote2IsMainDriverTrue()
        Global_Stuff.postQuote2IsNotOtherCarTrue()
        Global_Stuff.postQuote2IsNotOtherInsTrue()
        Global_Stuff.postQuote2IsNoConvictionTrue()
        Global_Stuff.postQuote2IsNoDisqualificationTrue()
        Global_Stuff.postQuote2IsNoRefusalTrue()
        Global_Stuff.postQuote2IsNoIncreaseTrue()
        Global_Stuff.postQuote2IsNoMedicalTrue()
        Global_Stuff.postQuote2Continue()
        
        // Completing post quote screen 3 
        Global_Stuff.postQuote3Continue()
        
        // Thank you page
        Global_Stuff.thankyouHeading()
        Global_Stuff.notes()
    })
})