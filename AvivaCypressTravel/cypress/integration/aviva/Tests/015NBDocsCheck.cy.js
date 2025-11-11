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

        cy.wait(80000)
        // Select Documents and revert window back to current window
        BOAction.selectActionDocumentsWithTravelPolicyNumberBackPacker()

        
        BOAction.checkNBTravelBackpackerDocs()

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for second policy
        cy.go(-2)
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithTravelPolicyNumberMulti()

        
        BOAction.checkNBTravelMultiTripDocs()

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for third policy
        cy.go(-2)
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithTravelPolicyNumberSingle()

        
        BOAction.checkNBTravelSingleTripDocs()

        cy.getAndWait(':nth-child(1) > .level1').click()

        // Search for Customer file for forth policy
        cy.go(-2)
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithtravelMultiFamilyWith3AddOns()

        BOAction.checkNBTravelMultiFamilyTripDocs()

        // cy.getAndWait(':nth-child(1) > .level1').click()

        // // Search for Customer file for fifth policy
        // cy.go(-3)
        // BOAction.livePoliciesBTN()
        // BOAction.selectActionDocumentsWithParagonPolicyNumber8()

        // // ParagonCheckMTANoDocsWithCharge
        // BOAction.checkMTAParagonDocs()

        // cy.getAndWait(':nth-child(1) > .level1').click()

        // // Search for Customer file for sixth policy
        // cy.go(-3)
        // BOAction.livePoliciesBTN()
        // BOAction.selectActionDocumentsWithParagonPolicyNumber10()

        // // ParagonCheckRNL
        // BOAction.checkRNLParagonDocs()

        // cy.getAndWait(':nth-child(1) > .level1').click()

        // // Search for Customer file for seventh policy
        // cy.go(-3)
        // BOAction.livePoliciesBTN()
        // BOAction.selectActionDocumentsWithParagonPolicyNumber12()

        // // ParagonCheckRNLMTA
        // BOAction.checkRNLMTAParagonDocs()

    })
})


