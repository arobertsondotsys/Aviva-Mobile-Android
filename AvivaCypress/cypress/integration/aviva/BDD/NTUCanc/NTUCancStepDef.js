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

Given('Agent can NTU a cancellation',()=>
{ 
  Global_Stuff.Server()
    
    //login to back office
    Global_Stuff.company()
    Global_Stuff.username()
    Global_Stuff.password()
    Global_Stuff.loginButton()

    //Search for customer
    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()

    //Open customer file Live policies
    cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click()
    //Click to NTU last cancellation and keep in same window 
    cy.window().then((win) => {
        cy.get('[class^="squarebuttonred"]').last().click({force: true})
        const orig = win.open
        win.open = function (url, target, features) {
          return orig.call(this, url, '_self', features)
        }
      })
      //Click to NTU cancellation and check successful
      Global_Stuff.cookiesAccept()
      cy.get('#ctl00_MainContent_NTUButton').click()
      cy.get('#ctl00_MainContent_ConfirmationRow').contains("The Adjustment has been NTU'd")
    



});



