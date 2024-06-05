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
const day=require('dayjs')

Given('Agent can purchase Temporary MTA',()=>
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
    
    //Select to perform a temporary adjustment on TSV
    Global_Stuff.cookiesAccept()
    cy.get('#ctl00_MainContent_ddlTempSelection').select('TSV',{force: true})
    cy.get('#btnMakeTempChange').click({force: true})
    //Enter date for TSV
    cy.get('#mainSection > .l-section > .l-columns > .l-columns__column > .a-heading').contains('Temporary substitution of my car')
    cy.get('#StartDate').type(day().add(2,'day').format('DD/MM/YYYY'),{force:true})
    cy.get('#ctl00_MainContent_CoverTime').type('13:00',{force:true})
    cy.get('#EndDate').type((day().add(2,'day').format('DD/MM/YYYY')),{force:true})
    cy.get('#ctl00_MainContent_CoverEndTime').type('23:59',{force:true})
    cy.get('#ctl00_MainContent_Continue').click({force: true})
    cy.wait(2000)
    //Enter TSV details
    cy.get('#divEnterCarReg > :nth-child(1) > .a-label').contains('Enter car registration number')
    cy.get('#VehicleRegistration').type('12D101', {force: true})
    cy.get('#ctl00_MainContent_btnFindCar').click({force: true})
    cy.get('#ctl00_MainContent_btnConfirmReg').click({force: true})
    cy.wait(2000)
    cy.get('#IsModified-no').click({force: true})
    //cy.get('[class^="a-radio__label-inner"]').last().click({force: true})
    cy.wait(2000)
    cy.get('#Continue2').click({force: true})
    //Quote screen
    cy.get('#ctl00_MainContent_NoPaymentPerma > .a-heading').should('have.text', 'No payment required ')
    cy.get('#ctl00_MainContent_Continue').click({force: true})
    //Thank you page
    cy.get('.m-heading-group__item').contains('Thank you')


    



});



