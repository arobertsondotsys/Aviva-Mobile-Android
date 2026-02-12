import { Servers } from "../AvivaPOM/Servers"
import { Login } from "../AvivaPOM/Login"


// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Server = new Servers()
const Logins = new Login()


describe('Check reports download', () => {
    it('should log in and check the reports download', () => {
        Server.Server()
        
        // Log in
        cy.agentLogin()
        
        // Select reports tab
        cy.get('[title="Reports"]').trigger('mouseenter', { force: true })
        cy.get('[title="Scheduled Reports"]').click({ force: true })
        cy.get('#ctl00_ContentPlaceHolder1_ReportTypeList').select('Payment Report')
        cy.get('#ctl00_ContentPlaceHolder1_FromFulfilmentDateYear').select('2024')
        cy.get('#ctl00_ContentPlaceHolder1_ScheduleReport > span').click()
        cy.get('.alert').should('have.text', 'Report Successfully Added!')
        cy.wait(40000)
        cy.get('#ctl00_ContentPlaceHolder1_CompletedGrid_ctl02_ViewReportButton > span').contains('Download Report')
        cy.get('#ctl00_ContentPlaceHolder1_QueuedGrid > tbody > tr > td').should('have.text', ' -- No Reports to Show --')
    })
})



