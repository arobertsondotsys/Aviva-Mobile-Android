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

Given('Check Paragon Queue for correct documents',()=>
{ 
    Global_Stuff.Server()
    
    //Log in
    Global_Stuff.company()
    Global_Stuff.username()
    Global_Stuff.password()
    Global_Stuff.loginButton()

    //Search for Customer file first policy
    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()
    Global_Stuff.livePoliciesBTN()

    //Select Documents and revert window back to current window
    Global_Stuff.selectActionDocumentsWithPolicyNumber()

  

    
    //NNY 0
    cy.get('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
    cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter')
    cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Schedule')
    
    cy.get(':nth-child(1) > .level1').click()

    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()
    Global_Stuff.livePoliciesBTN()

    cy.get('[class^="dropdown selectAction"]').eq(1).click().contains('Documents').invoke("removeAttr", "target").click({force:true})

    //NYN 1
    cy.get('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
    cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Certificate')
    cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter')

    cy.get(':nth-child(1) > .level1').click()

    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()
    Global_Stuff.livePoliciesBTN()

    cy.get('[class^="dropdown selectAction"]').eq(2).click().contains('Documents').invoke("removeAttr", "target").click({force:true})
    
    //NYY 2
    cy.get('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
    cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Certificate')
    cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Schedule')
    cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Statement Of Fact')
    cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter')

    cy.get(':nth-child(1) > .level1').click()

    
  
    

    



});



