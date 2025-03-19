import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";
import { Global } from "../AvivaPOM/Page Actions/POMActionsHome";



Cypress.on('uncaught:exception', (err, runnable) =>
{
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_stuff = new Global

Given('Change policy ownership',()=>
{ 
    Global_stuff.Server()

    //Log in
    Global_stuff.company()
    Global_stuff.username()
    Global_stuff.password()
    Global_stuff.loginButton()

    //Search for Customer file
    Global_stuff.email()
    Global_stuff.searchButton()
    Global_stuff.policySelectButton()

    
    function ChangePolicyOwnerShip()
    {

     //Select last policy and Policy Ownership 
     cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click()
     cy.get('[class^="dropdown selectAction"]').last().click({force:true}).contains('Policy Ownership').invoke("removeAttr", "target").click({force:true})
    

     //Change ownership
     cy.get('#ctl00_ContentPlaceHolder1_NewEmailAddress').type('automatedtestingMar25@DOTSYS.co.uk')
     cy.get('#ctl00_ContentPlaceHolder1_ChangeOwnership').click()
     cy.get('#ctl00_ContentPlaceHolder1_SuccessMessage').contains('The policy has now been re-registered')
     cy.go('back')
     cy.go('back')

    }

    
    function RecursiveLoop(n) {
        cy.get('[class^="dropdown selectAction"]').each(($value, index) => {
            if (index < n) {
                ChangePolicyOwnerShip();
    
                // Additional asynchronous actions can be added here if needed
    
                cy.log(`Iteration ${index + 1} completed`);
    
                // Continue with the next iteration
            }
        });
    }
    
    cy.get('[class^="dropdown selectAction"]').its('length').then((length) => {
        RecursiveLoop(length);
    });
    

    





})
