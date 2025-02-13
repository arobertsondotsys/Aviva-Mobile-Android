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
const day=require('dayjs');

Given('Agent can cancel a policy',()=>
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
    
    cy.get('[class^="dropdown selectAction"]').last().click().contains('Cancel Policy').invoke("removeAttr", "target").click({force:true})
   
    //Select Cancelation reason 
    Global_Stuff.cookiesAccept()
    cy.get('.l-columns__column > .a-heading--2').should('have.text', 'Cancel policy')
    cy.get('#ctl00_MainContent_CancellationRequest').select('Insurer')
    cy.get('.m-multiselect-toggle').click()
    cy.get(':nth-child(4) > .a-checkbox > .a-checkbox__label').click()
    cy.get('#ctl00_MainContent_insurerReasonContinue').click()

    //Select Cancelation date (+5 days from current date)
    cy.get('.a-label').should('have.text', 'What date would you like to cancel from?')
    cy.wait(2000)
    cy.get('#ctl00_MainContent_staffCancelDate').type(day().add(6, 'day').format('DD/MM/YYYY'))
    cy.get('#ctl00_MainContent_staffDateContinue').click()

    //Quote screen for cancelation
    cy.get('#ctl00_MainContent_divStaffInsurer > .a-heading--3').should('have.text', 'Amount to be refunded')
    cy.get('#ctl00_MainContent_Continue').click()
    
    //Confirmation page check
    cy.get('.m-heading-group__item').should('have.text', 'Your policy has been cancelled')
    




    
    


});



