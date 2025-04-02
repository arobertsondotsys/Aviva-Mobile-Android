import { Global } from "../AvivaPOM/Page Actions/POMActions"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global()

describe('Check reports download', () => {
    it('should log in and check the reports download', () => {
        Global_Stuff.Server()
        
        // Log in
        Global_Stuff.company()
        Global_Stuff.username()
        Global_Stuff.password()
        Global_Stuff.loginButton()
        
        // Select reports tab
        cy.get('[title="Reports"]').trigger('mouseenter', { force: true })
        cy.get('[title="Scheduled Reports"]').click({ force: true })
        cy.get('#ctl00_ContentPlaceHolder1_ReportTypeList').select('Payment Report')
        cy.get('#ctl00_ContentPlaceHolder1_FromFulfilmentDateYear').select('2023')
        cy.get('#ctl00_ContentPlaceHolder1_ScheduleReport > span').click()
        cy.get('.alert').should('have.text', 'Report Successfully Added!')
        cy.wait(40000)
        cy.get('#ctl00_ContentPlaceHolder1_CompletedGrid_ctl02_ViewReportButton > span').contains('Download Report')
        cy.get('#ctl00_ContentPlaceHolder1_QueuedGrid > tbody > tr > td').should('have.text', ' -- No Reports to Show --')
    })
})



