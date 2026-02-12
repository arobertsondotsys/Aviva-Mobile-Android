import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { Login } from "../AvivaPOM/Login"


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const Logins = new Login()

describe('Check Paragon Queue for correct documents', () => {
    it('should check the Paragon Queue for correct documents', () => {
        Server.Server()
        
        // Log in
        cy.agentLogin()

        // Search for Customer file first policy
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        BOAction.livePoliciesBTN()

        // Select Documents and revert window back to current window
        BOAction.selectActionDocumentsWithPolicyNumber()

        // NNY 0
        cy.get('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter')
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Schedule')
        
        cy.get(':nth-child(1) > .level1').click()

        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        BOAction.livePoliciesBTN()

        cy.get('[class^="dropdown selectAction"]').eq(1).click().contains('Documents').invoke("removeAttr", "target").click({force:true})

        // NYN 1
        cy.get('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Certificate')
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter')

        cy.get(':nth-child(1) > .level1').click()

        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        BOAction.livePoliciesBTN()

        cy.get('[class^="dropdown selectAction"]').eq(2).click().contains('Documents').invoke("removeAttr", "target").click({force:true})
        
        // NYY 2
        cy.get('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Certificate')
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Schedule')
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Statement Of Fact')
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter')

        cy.get(':nth-child(1) > .level1').click()
    })
})



