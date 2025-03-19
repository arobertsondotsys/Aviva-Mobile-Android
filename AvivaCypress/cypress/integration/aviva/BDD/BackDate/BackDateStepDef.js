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
const company='Avivacc';
const user='a.robertson';
const pass='Meloncrate3£';
const email='automatedtesting@DOTSYS.co.uk';

Given('Agent can back date a policy',()=>
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
    
    //Select policy and Age policy
    Global_Stuff.livePoliciesBTN()
    cy.get('[title^="Policy Tools"]').last().click({force: true})
    cy.window().then((win) => {
        cy.get('[id^="bs-select"]').last().click()
        const orig = win.open
        win.open = function (url, target, features) {
          return orig.call(this, url, '_self', features)
        }
    })
    //Back date policy to 2022 and back to 2023
    cy.get('#ctl00_ContentPlaceHolder1_BackDateYear').select('2022')
    cy.get('#ctl00_ContentPlaceHolder1_UpdateDate').click()
    cy.get('.alert').should('include.text', 'Policy has been backdated')
    cy.get('#ctl00_ContentPlaceHolder1_BackDateYear').select('2023')
    cy.get('#ctl00_ContentPlaceHolder1_UpdateDate').click()
    
    


});



