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

Given('Check reports download',()=>
{ 
    Global_Stuff.Server()
    
    //Log in
    Global_Stuff.company()
    Global_Stuff.username()
    Global_Stuff.password()
    Global_Stuff.loginButton()
    
    //Select reports tab
    cy.get('[title="Reports"]').trigger('mouseenter',{force:true})
    cy.get('[title="Scheduled Reports"]').click({force:true})
    cy.get('#ctl00_ContentPlaceHolder1_ReportTypeList').select('Payment Report')
    cy.get('#ctl00_ContentPlaceHolder1_FromFulfilmentDateYear').select('2023')
    cy.get('#ctl00_ContentPlaceHolder1_ScheduleReport > span').click()
    cy.get('.alert').should('have.text', 'Report Successfully Added!')
    cy.wait(40000)
    cy.get('#ctl00_ContentPlaceHolder1_CompletedGrid_ctl02_ViewReportButton > span').contains('Download Report') 
    cy.get('#ctl00_ContentPlaceHolder1_QueuedGrid > tbody > tr > td').should('have.text', ' -- No Reports to Show --') 


});



