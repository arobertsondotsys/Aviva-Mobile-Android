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


describe('Agent can upload document', () => {
    it('should upload a document', () => {
        Server.Server()
        
        // Log in
        cy.agentLogin()
    
        // Search for Customer file
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        
        // Select policy and Documents 
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithPolicyNumber()
        
        // Open PDF
        cy.contains('Welcome Letter Temp Cover').invoke("removeAttr", "target").click()
        
        cy.task('readPdf', '').then(function(data) {
            cy.log(data.text)
        })
    })
})



