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
const day = require('dayjs')

Given('Agent can purchase MTA',()=>
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
     
    //Open policy
    cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click()

    //Select Make adjustment and revert window back to current window
    cy.get('[class^="dropdown selectAction"]').last().click().contains('Make Adjustment').invoke("removeAttr", "target").click({force:true})
    
    
    //Select to perform a permanent adjustment on contact details
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#ctl00_MainContent_ddlPermaSelection').select('Contacts',{force: true}).should('have.value', 'Contacts');
    cy.get('#btnMakePermaChange').click({force: true})
    //Amend Contact number
    cy.get('#ctl00_MainContent_ProposerMobile').clear().type('07950439086')
    cy.get('#ctl00_MainContent_Continue1').click()
    //Input date for MTA to start
    cy.get('#ctl00_MainContent_StartDate').type(day().format('DD/MM/YYYY'),{force:true})
    cy.get('#ctl00_MainContent_Continue8').click({force:true})
    //Checking the heading, Note box present 
    cy.get('#ctl00_MainContent_NoPaymentPerma > .a-heading').contains('No payment required')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('#ctl00_MainContent_btnContinue').click({force: true})
    //Completing post quote screen 2 questions
    cy.wait(4000)
    cy.get('#div2').contains('About the drivers')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('#IsResident-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsMainDriver-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNotOtherCar-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNotOtherInsurance-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoConvictions-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoDisqualifications-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoRefusal-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoIncrease-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoMedical-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    Global_Stuff.postQuote2Continue()
    //Completing post quote screen 3 
    cy.get('#ctl00_MainContent_btnContinueToPayment').click()
    //Thank you page
    cy.get('.m-heading-group > .m-heading-group__item').contains('Thank you')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')




   


});