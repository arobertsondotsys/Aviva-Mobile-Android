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
    it('should complete the process of uploading a document', () => {
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
        
        // Select policy and Documents 
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithTravelPolicyNumber()
        
        // Upload selected file 
        cy.getAndWait('#Upload').click()
        cy.getAndWait('#ctl00_ContentPlaceHolder1_DocumentTypeList').select("49")
        cy.getAndWait('#ctl00_ContentPlaceHolder1_ReferenceNumber').type('123')
        cy.getAndWait('#ctl00_ContentPlaceHolder1_FileUpload').selectFile("C:/Aviva/AvivaCypress/cypress/support/Example.jpg", {force: true})
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnUpload').click()
        cy.getAndWait('[id^="ctl00_ContentPlaceHolder1_gvScannedDocuments_ctl"]').last().should('have.text', 'View')
    })
})


