import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { Login } from "../AvivaPOM/Login"


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const Logins = new Login()
const day = require('dayjs')

describe('Agent can purchase Temporary MTA', () => {
    it('should complete the process of purchasing Temporary MTA', () => {
        Server.Server()
        
        // Log in
        Logins.company()
        Logins.username()
        Logins.password()
        Logins.loginButton()

        // Search for Customer file
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()

        // Open policy
        BOAction.livePoliciesBTN()

        // Select Make adjustment and revert window back to current window
        BOAction.selectActionMakeADJWithPolicyNumber()
        
        // Select to perform a temporary adjustment on TSV
        BOAction.cookiesAccept()
        cy.getAndWait('#ctl00_MainContent_ddlTempSelection, #ddlTempSelection').select('TSV')
        cy.getAndWait('#btnMakeTempChange').click()
        
        // Enter date for TSV
        cy.getAndWait('#mainSection > .l-section > .l-columns > .l-columns__column > .a-heading').contains('Temporary substitution of my car')
        cy.getAndWait('#StartDate').type(day().add(2, 'day').format('DD/MM/YYYY'), {force: true})
        cy.getAndWait('#ctl00_MainContent_CoverTime, #CoverTime').type('13:00', {force: true})
        cy.getAndWait('#EndDate').type(day().add(2, 'day').format('DD/MM/YYYY'), {force: true})
        cy.getAndWait('#ctl00_MainContent_CoverEndTime, #CoverEndTime').type('23:59', {force: true})
        cy.getAndWait('#ctl00_MainContent_Continue').click({force: true})
        
        // Enter TSV details
        cy.getAndWait('#divEnterCarReg > :nth-child(1) > .a-label').contains('Enter car registration number')
        cy.wait(1000)
        cy.getAndWait('#VehicleRegistration').type('12D101', {force: true})
        cy.wait(1000)
        cy.getAndWait('#ctl00_MainContent_btnFindCar').click({force: true})
        cy.getAndWait('#ctl00_MainContent_btnConfirmReg').click({force: true})
        cy.wait(1000)
        cy.getAndWait('#IsModified-no', { allowHidden: true }).click({force: true})
        cy.wait(1000)
        cy.getAndWait('#Continue2').click({force: true})
        
        // Quote screen
        cy.getAndWait('#ctl00_MainContent_NoPaymentPerma > .a-heading').should('have.text', 'No payment required ')
        cy.getAndWait('#ctl00_MainContent_Continue').click({force: true})
        
        // Thank you page
        cy.getAndWait('.m-heading-group__item').contains('Thank you')
    })
})



