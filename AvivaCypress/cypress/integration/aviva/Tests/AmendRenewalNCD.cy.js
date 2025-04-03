import { Global } from "../AvivaPOM/Page Actions/POMActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_Stuff = new Global()
const day = require('dayjs')

describe('Agent can Amend renewal NCD', () => {
    it('should complete the process of amending renewal NCD', () => {
        Global_Stuff.Server()
        
        // Log in
        Global_Stuff.company()
        Global_Stuff.username()
        Global_Stuff.password()
        Global_Stuff.loginButton()

        // Revert new window that opens back to original window 
        Global_Stuff.agentQuote()
        Global_Stuff.createNewQuoteBTN()
        
        // Accept cookies
        Global_Stuff.cookiesAccept()

        // Complete section 1 "About you"
        Global_Stuff.aboutYouTitle()
        Global_Stuff.notes()
        Global_Stuff.proposerTitle()
        Global_Stuff.proposerForename()
        Global_Stuff.proposerSurname()
        Global_Stuff.proposerEmail()
        Global_Stuff.phone()
        Global_Stuff.aboutYouContinue()

        // Complete section 2 "Personal details"
        Global_Stuff.personalDetailsTitle()
        Global_Stuff.addressInput()
        Global_Stuff.addressSuggest()
        Global_Stuff.addressSelect()
        Global_Stuff.addressConfirm()
        Global_Stuff.proposerDOB()
        Global_Stuff.proposerEmployStatus()
        Global_Stuff.licenceType()
        Global_Stuff.licenceYears()
        Global_Stuff.personlaDetailsContinue()

        // Complete section 3 "Insurance details"
        Global_Stuff.insuranceDetailsTitle()
        Global_Stuff.notes()
        Global_Stuff.drivingExp()
        Global_Stuff.drivingExpYears()
        Global_Stuff.carUse()
        Global_Stuff.insuranceDetailsContinue()

        // Complete section 4 "Car details"
        Global_Stuff.carDetailsTitle()
        Global_Stuff.notes()
        Global_Stuff.carRegYes()
        Global_Stuff.carRegInput()
        Global_Stuff.findCarBTN()
        Global_Stuff.confirmCarBTN()
        Global_Stuff.carValueInput()
        Global_Stuff.carModifiedFalse()
        Global_Stuff.carDetailsContinue()

        // Complete section 5 "Additional drivers"
        Global_Stuff.additionalDriversHeading()
        Global_Stuff.notes()
        Global_Stuff.additionalDriversFalse()
        Global_Stuff.additionalDriversContinue()

        // Complete section 6 "Your claims"
        Global_Stuff.claimsHeading()
        Global_Stuff.notes()
        Global_Stuff.claimsFalse1st()
        Global_Stuff.claimsContinue()

        // Complete section 7 "Penalty points"
        Global_Stuff.ppHeading()
        Global_Stuff.notes()
        Global_Stuff.ppFalse1st()
        Global_Stuff.ppContinue()

        // Complete section 8 "Cover start date"
        Global_Stuff.coverStartHeading()
        Global_Stuff.notes()
        Global_Stuff.coverStartDate()
        Global_Stuff.coverStartHaveHomeIns()
        Global_Stuff.coverStartHaveCarIns()
        Global_Stuff.coverStartMarketing()
        Global_Stuff.coverStartContinue()

        // Quote screen - Buy now 
        Global_Stuff.quotePageHeading()
        Global_Stuff.notes()
        Global_Stuff.buyNowBtn()

        // Complete post quote 1 "About you car"
        Global_Stuff.postQuote1Heading()
        Global_Stuff.notes()
        Global_Stuff.postQuote1wnCar()
        Global_Stuff.postQuote1PrivateIns()
        Global_Stuff.postQuote1Continue()

        // Complete post quote 2 "About the drivers"
        Global_Stuff.postQuote2Heading()
        Global_Stuff.notes()
        Global_Stuff.postQuote2IsResidentTrue()
        Global_Stuff.postQuote2IsMainDriverTrue()
        Global_Stuff.postQuote2IsNotOtherCarTrue()
        Global_Stuff.postQuote2IsNotOtherInsTrue()
        Global_Stuff.postQuote2IsNoConvictionTrue()
        Global_Stuff.postQuote2IsNoDisqualificationTrue()
        Global_Stuff.postQuote2IsNoRefusalTrue()
        Global_Stuff.postQuote2IsNoIncreaseTrue()
        Global_Stuff.postQuote2IsNoMedicalTrue()
        Global_Stuff.postQuote2DriverNumber()
        Global_Stuff.postQuote2Continue()

        // Complete post quote 3 "Your insurance history and inception details"
        Global_Stuff.postQuote3Heading()
        Global_Stuff.notes()
        Global_Stuff.postQuote3NCDROITrue()
        Global_Stuff.postQuote3NoOtherNCDTrue()
        Global_Stuff.postQuote3WithinExpiryTrue()
        Global_Stuff.postQuote3IsMyAvivaTrue()
        Global_Stuff.postQuote3Continue()

        // Payment type screen - selecting "No payment required"
        Global_Stuff.notes()
        cy.getAndWait('#ctl00_MainContent_PaymentType').select(2)
        cy.getAndWait('#ctl00_MainContent_NoPay').click({force: true})

        // Diary & correspondence page 
        cy.getAndWait('.a-heading--1').contains('Internal Diary and Correspondence')
        cy.getAndWait('#ctl00_divNotes > .a-button').should('be.visible')
        cy.getAndWait('#ctl00_MainContent_Summary').click({force: true})

        // Thank you page
        Global_Stuff.thankyouHeading()
        Global_Stuff.notes()
        Global_Stuff.retreivePolicyNumber()

        // Back dating policy 
        Global_Stuff.Server()
        Global_Stuff.home()
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()
        Global_Stuff.unlockBTN()

        Global_Stuff.livePoliciesBTN()

        Global_Stuff.policyToolsAgePolicyWithPolicyNumber()

        cy.getAndWait('#ctl00_ContentPlaceHolder1_BackDateDay').invoke('val').then(dayString => {
            const day = parseInt(dayString)
            cy.getAndWait('#ctl00_ContentPlaceHolder1_BackDateDay').select(day + 2)
        })
        cy.getAndWait('#ctl00_ContentPlaceHolder1_BackDateYear').select('2024')
        cy.getAndWait('#ctl00_ContentPlaceHolder1_UpdateDate').click()
        cy.getAndWait('.alert').contains('Policy has been backdated')

        // Generating and Printing renewal
        Global_Stuff.Server()
        Global_Stuff.home()
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()
        Global_Stuff.generateRenewal()
        Global_Stuff.inviteRenewal()

        // Checking for renewal invite email in docs
        Global_Stuff.recallPolicy()
        Global_Stuff.livePoliciesBTN()
        Global_Stuff.selectActionDocumentsWithPolicyNumber()
        Global_Stuff.checkRenewalInviteDocs()
        cy.go(-1)

        // Amend the renewal NCD
        Global_Stuff.livePoliciesBTN()
        Global_Stuff.selectActionAmendRNLNCDWithPolicyNumber()
        cy.getAndWait('#ctl00_ContentPlaceHolder1_Edit').click()
        cy.getAndWait('#ctl00_ContentPlaceHolder1_ddlNCDYears').select(5)
        cy.getAndWait('#ctl00_ContentPlaceHolder1_ddlNCDPercent').select(5)
        cy.getAndWait('#ctl00_ContentPlaceHolder1_ShowContinuePopup').click()
        cy.getAndWait('#ctl00_ContentPlaceHolder1_Save').click()
        cy.go('back')
    })
})