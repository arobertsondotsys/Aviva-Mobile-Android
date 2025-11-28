import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { Login } from "../AvivaPOM/Login"
import { Cancel } from "../AvivaPOM/Cancel"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const Logins = new Login()
const CancellationPage = new Cancel()

describe('Agent can cancel a policy', () => {
    it('should complete the process of canceling a policy', () => {
        Server.Server()

        // Log in
        Logins.company()
        Logins.username3()
        Logins.password()
        Logins.loginButton()

        // Search for Customer file
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()

        // Select policy
        BOAction.livePoliciesBTN()

        BOAction.selectActionCancelWithTravelMultiFamilyWith3AddOns()

        // Select Cancelation reason 
        BOAction.cookiesAccept()
        CancellationPage.cancellationTitle()
        CancellationPage.cancellationRequests()
        CancellationPage.cancellationReason()
        CancellationPage.cancellationContinue()

        // Select Cancelation date (+5 days from current date)
        CancellationPage.cancellationDateHeading()
        CancellationPage.cancellationDate()
        CancellationPage.cancellationDateContinue()

        // Quote screen for cancelation
        CancellationPage.cancellationAmountHeading()
        CancellationPage.cancellationAmountContinue()

        // Confirmation page check
        CancellationPage.cancellationConfirmHeading()
    })
})



