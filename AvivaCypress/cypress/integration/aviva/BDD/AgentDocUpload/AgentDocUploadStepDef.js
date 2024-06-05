import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";
import { Global } from "../AvivaPOM/Page Actions/POMActions";

Cypress.on('uncaught:exception', (err, runnable) =>
{
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_Stuff = new Global

Given('Agent can upload document',()=>
{ 
    Global_Stuff.Server()
    
     //Log in
     Global_Stuff.company()
     Global_Stuff.username()
     Global_Stuff.password()
     Global_Stuff.loginButton()
 
     //Search for Customer file
     Global_Stuff.email()
     Global_Stuff.searchButton()
     Global_Stuff.policySelectButton()
    
    //Select policy and Documents 
    cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click({force:true})
    
    cy.get('[class^="dropdown selectAction"]').last().click().contains('Documents').invoke("removeAttr", "target").click({force:true})
    
    //Upload selected file 
    cy.get('#Upload').click()
    cy.get('#ctl00_ContentPlaceHolder1_DocumentTypeList').select("49")
    cy.get('#ctl00_ContentPlaceHolder1_ReferenceNumber').type('123')
    cy.get('#ctl00_ContentPlaceHolder1_FileUpload').selectFile("C:/Users/a.robertson/Pictures/Example.jpg", {force: true})
    cy.get('#ctl00_ContentPlaceHolder1_btnUpload').click()
    cy.get('[id^="ctl00_ContentPlaceHolder1_gvScannedDocuments_ctl"]').last().should('have.text', 'View') 
    


});



