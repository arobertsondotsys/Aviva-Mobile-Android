import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { Login } from "../AvivaPOM/Login"
import { CoverStartDate } from "../AvivaPOM/CoverStartDate"
import { AboutYourCarPQ1 } from "../AvivaPOM/AboutYourCarPQ1"
import { AboutTheDriversPQ2 } from "../AvivaPOM/AboutTheDriversPQ2"
import { YourInsHistoryAndIncepDetsPQ3 } from "../AvivaPOM/YourInsHistoryAndIncepDetsPQ3"
import { ThankYouScreen } from "../AvivaPOM/ThankYouScreen"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const Logins = new Login()
const CoverStartDatePage = new CoverStartDate()
const AboutYourCarPage = new AboutYourCarPQ1()
const AboutTheDriversPage = new AboutTheDriversPQ2()
const YourInsHistoryAndIncepDetsPage = new YourInsHistoryAndIncepDetsPQ3()
const ThankYouPage = new ThankYouScreen()
const day = require('dayjs')

describe('Agent can purchase MTA', () => {
    it('should complete the process of purchasing MTA', () => {
        Server.Server()
        
        // Log in
        cy.agentLogin()

        // Search for Customer file
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        
        // Open policy
        BOAction.livePoliciesBTN()

        // Select Make adjustment and revert window back to current window
        BOAction.selectActionMakeADJWithPolicyNumber()
        
        // Select to perform a permanent adjustment on contact details
        BOAction.cookiesAccept()
        cy.getAndWait('#ctl00_MainContent_ddlPermaSelection, #ddlPermaSelection').select('CarDetails').should('have.value', 'CarDetails')
        cy.getAndWait('#btnMakePermaChange').click()
        
        // Amend Contact number
        cy.getAndWait('#ctl00_MainContent_btnEditCar').click()
        cy.getAndWait('#VehicleRegistration').clear()
        cy.getAndWait('#VehicleRegistration').type('12D101')
        cy.getAndWait('#ctl00_MainContent_btnFindCar').click()
        cy.getAndWait('#ctl00_MainContent_btnConfirmReg').click()
        cy.getAndWait('#IsCOV-True > .a-radio > .a-radio__label').click()
        cy.wait(500)
        cy.getAndWait('#Continue4').click()
        
        // Input date for MTA to start
        CoverStartDatePage.coverStartDate()
        CoverStartDatePage.coverStartContinue()
        
        // Checking the heading, Note box present 
        cy.getAndWait('.marginTop30Important').contains('Total adjustment premium')
        BOAction.notes()
        cy.getAndWait('#ctl00_MainContent_btnBuyNow').click()

        AboutYourCarPage.postQuote1OwnCar()
        AboutYourCarPage.postQuote1PrivateIns()
        AboutYourCarPage.postQuote1Continue()
        
        // Completing post quote screen 3 
        YourInsHistoryAndIncepDetsPage.postQuote3Continue()
        
        // Thank you page
        ThankYouPage.thankyouHeading()
        BOAction.notes()
    })
})