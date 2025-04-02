import { Global } from "../AvivaPOM/Page Actions/POMActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_Stuff = new Global()
const day = require('dayjs')

describe('Agent can change the driver number', () => {
    it('should complete the process of changing the driver number', () => {
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
        cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click({force: true})
        Global_Stuff.selectActionMakeADJWithPolicyNumber()
        
        // Select to perform a permanent adjustment on contact details
        Global_Stuff.cookiesAccept()
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
        Global_Stuff.postQuote2Headingselect()
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
        cy.get('#ctl00_MainContent_DriverRepeater_ctl00_DriverNum').type('121212112', {force: true})
        Global_Stuff.postQuote2Continue()
        
        // Completing post quote screen 3 
        Global_Stuff.postQuote3Continue()
        
        // Thank you page
        Global_Stuff.thankyouHeading()
        cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    })
})