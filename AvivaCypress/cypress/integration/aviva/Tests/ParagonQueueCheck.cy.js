import { Global } from "../AvivaPOM/Page Actions/POMActions"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global()

describe('Check Paragon Queue for correct documents', () => {
    it('should verify the correct documents in the Paragon Queue', () => {
        Global_Stuff.Server()
        
        // Log in
        Global_Stuff.company()
        Global_Stuff.username()
        Global_Stuff.password()
        Global_Stuff.loginButton()

        // Search for Customer file first policy
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()
        Global_Stuff.livePoliciesBTN()

        // Select Documents and revert window back to current window
        Global_Stuff.selectActionDocumentsWithParagonPolicyNumber1()

        // NYY 0
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(3)').contains('Certificate')
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(3)').contains('Schedule')
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(3)').contains('Statement Of Fact')
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter')

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for second policy
        cy.go(-3)
        Global_Stuff.livePoliciesBTN()
        Global_Stuff.selectActionDocumentsWithParagonPolicyNumber2()

        // NNY 1
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter')
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(3)').contains('Schedule')

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for third policy
        cy.go(-3)
        Global_Stuff.livePoliciesBTN()
        Global_Stuff.selectActionDocumentsWithParagonPolicyNumber3()

        // NYN 2
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(3)').contains('Certificate')
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter')
    })
})


