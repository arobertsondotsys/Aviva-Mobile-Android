import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { Login } from "../AvivaPOM/Login"


// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const Logins = new Login()

describe('Check Paragon Queue for correct documents', () => {
    it('should verify the correct documents in the Paragon Queue', () => {
        Server.Server()
        
        // Log in
        Logins.company()
        Logins.username()
        Logins.password()
        Logins.loginButton()

        // Search for Customer file first policy
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        BOAction.livePoliciesBTN()

        // Select Documents and revert window back to current window
        BOAction.selectActionDocumentsWithParagonPolicyNumber1()

        // NYY 0
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        //cy.getAndWait('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter Temp Cover')
        cy.contains('Certificate')
        cy.contains('Schedule')
        cy.contains('Statement Of Fact')
        cy.contains('Welcome Letter')

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for second policy
        Server.Server()
        BOAction.home()
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithParagonPolicyNumber2()

        // NNY 1
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        //cy.getAndWait('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter Temp Cover')
        cy.contains('Welcome Letter')
        cy.contains('Schedule')
        

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for third policy
        Server.Server()
        BOAction.home()
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithParagonPolicyNumber3()

        // NYN 2
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        cy.contains('Certificate')
        cy.contains('Welcome Letter')

        Server.Server()
        BOAction.home()
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithTempPackPolicyNumber()

        // NYN 2
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(4)').contains('Welcome Letter Temp Cover')
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(4)').contains('Welcome Email Temp Cover')
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(4)').contains('Policy Schedule')
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(4)').contains('Statement Of Fact')
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(4)').contains('Certificate')
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(4)').contains('Driving Experience Email')
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(4)').contains('Quote Email')
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        cy.contains('Welcome Letter Temp Cover')
        cy.contains('Statement Of Fact')
        cy.contains('Receipt')
        cy.contains('Schedule')

    })
})


