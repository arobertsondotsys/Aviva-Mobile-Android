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

        // ParagonCheckNBQA
        BOAction.checkNBParagonDocsWithReceipt()

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for second policy
        cy.go(-3)
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithParagonPolicyNumber3()

        // ParagonCheckNBNoPay
        BOAction.checkNBParagonDocs()

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for third policy
        cy.go(-3)
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithParagonPolicyNumber4()

        // ParagonCheckNBNoPayAdHocLetters
        BOAction.checkAdhocParagonDocs()

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for forth policy
        cy.go(-3)
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithParagonPolicyNumber5()

        // ParagonCheckMTAQA
        BOAction.checkMTAParagonDocs()

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for fifth policy
        cy.go(-3)
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithParagonPolicyNumber7()

        // ParagonCheckMTAQANoDocsWithCharge
        BOAction.checkMTAParagonDocs()

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for sixth policy
        cy.go(-3)
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithParagonPolicyNumber9()

        // ParagonCheckRNLQA
        BOAction.checkRNLParagonDocs()

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for seventh policy
        cy.go(-3)
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithParagonPolicyNumber11()

        // ParagonCheckRNLMTAQA
        BOAction.checkRNLMTAParagonDocs()

    })
})


