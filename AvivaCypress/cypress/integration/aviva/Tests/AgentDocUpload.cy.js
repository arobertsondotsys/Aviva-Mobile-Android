import { Global } from "../AvivaPOM/Page Actions/POMActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_Stuff = new Global()

describe('Agent can upload document', () => {
    it('should complete the process of uploading a document', () => {
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
        
        // Select policy and Documents 
        Global_Stuff.livePoliciesBTN()
        Global_Stuff.selectActionDocumentsWithPolicyNumber()
        
        // Upload selected file 
        cy.get('#Upload').click()
        cy.get('#ctl00_ContentPlaceHolder1_DocumentTypeList').select("49")
        cy.get('#ctl00_ContentPlaceHolder1_ReferenceNumber').type('123')
        cy.get('#ctl00_ContentPlaceHolder1_FileUpload').selectFile("C:/Aviva/AvivaCypress/cypress/support/Example.jpg", {force: true})
        cy.get('#ctl00_ContentPlaceHolder1_btnUpload').click()
        cy.get('[id^="ctl00_ContentPlaceHolder1_gvScannedDocuments_ctl"]').last().should('have.text', 'View')
    })
})


