import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";
import { Global } from "../AvivaPOM/Page Actions/POMActions";

//Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) =>
{
    
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global

Given('Customer can upload a document',()=>
{
    Global_Stuff.Server1()

    Global_Stuff.cookiesAccept()
    cy.get('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible');

    Global_Stuff.loginEmail()
    Global_Stuff.loginPassword()
    Global_Stuff.loginPortalButton()

    cy.get('#Main_MotorPolicyRepeaterDesktop_BtnSelectPolicyMob_0').click()
    cy.get('#Main_btnUploadDocuments').click()
    cy.get('#Main_ddlDocumentUpload').select(1)
    cy.get('.a-file-upload__label').click()
    cy.get('input[type="file"]').selectFile("C:/Users/a.robertson/Pictures/Example.jpg", {force:true})
    cy.get('#Main_btnUpload').click()
    cy.get('#Main_divSuccessMessage > .l-columns > .l-columns__column > .m-card > .m-card-content > .m-heading-group__item').contains('Upload successful')
       
})



  


