import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";
import { Global } from "../AvivaPOM/Page Actions/POMActions";

//Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) =>
{
    
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global



Given('User is on Home Page',()=>
{
    Global_Stuff.Server1()

    Global_Stuff.cookiesAccept()
    cy.get('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible');
    
})
When('User enters email, password and click  logged in button',()=>
{

   Global_Stuff.loginEmail()
   Global_Stuff.loginPassword()
   Global_Stuff.loginPortalButton()
})

Then('Message displayed Login Successfully and user logs out from application and back to login page',()=>
{

    cy.get('#Main_BreadcrumbHeading').contains('Welcome to MyAviva').and('be.visible')
    cy.get('.o-masthead__logged-in-link').click();
    cy.get('#btnMenuLogOut').click({force: true}); 
    //cy.wait(5000)
    cy.get('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible');
    cy.go('back');
    cy.go('forward');
    cy.end();
       
})

Given ('User enters invalid email, password and click  logged in button',()=>
{
   
    Global_Stuff.Server1()
    Global_Stuff.cookiesAccept()
    Global_Stuff.loginEmail1()
    Global_Stuff.loginPassword1()
    cy.get('#loginPassword').click()
    cy.get('#RE__ProposerEmailRE').contains( 'Your email does not match the standard format for emails').and('be.visible');
    Global_Stuff.loginEmail2()
    Global_Stuff.loginPassword1()
    Global_Stuff.loginPortalButton()
    cy.get('#loginerror').contains( 'Your username and/or password is invalid.').and('be.visible');
    cy.get('#loginEmail').clear();
    cy.get('#loginPassword').click();
    cy.get('#RF__ProposerEmail').contains( 'Please enter your email address').and('be.visible');
    cy.get('#loginPassword').click();
    cy.get('#btnLogin').click();
    cy.get('#RequiredFieldValidator5').contains( 'Please enter your password').and('be.visible');
    cy.end();

  
})

