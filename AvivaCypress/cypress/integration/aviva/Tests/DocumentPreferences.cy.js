import { Global } from "../AvivaPOM/Page Actions/POMActions"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global()
const day = require('dayjs')

describe('Policy Purchase with YNN', () => {
    it('should complete the process of purchasing a policy with YNN preferences', () => {
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
        Global_Stuff.paymentTypeAgentNoPay()
        Global_Stuff.paymentTypeAgentNoPayContinue()

        // Diary & correspondence page 
        Global_Stuff.diaryCorrespondenceHeading()
        Global_Stuff.notes()
        Global_Stuff.diaryCorrespondenceContinue()

        // Thank you page
        Global_Stuff.thankyouHeading()
        Global_Stuff.notes()
        Global_Stuff.retreivePolicyNumber()
        
        // Check B/O preferences match Y/N/N
        Global_Stuff.Server()

        Global_Stuff.home()
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()

        // Select policy and Documents 
        Global_Stuff.livePoliciesBTN()
        Global_Stuff.selectActionDocumentsWithPolicyNumber()
        
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnCorrespondence').click()
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblDocsByPortal_0').should('have.value', 'True')
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblCertByPost_1').should('have.value', 'False')
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblDocsByPost_1').should('have.value', 'False')

        // Check Portal preferences match Y/N/N
        Global_Stuff.Server1()

        Global_Stuff.cookiesAccept()
        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')
        Global_Stuff.loginEmail()
        Global_Stuff.loginPassword()
        Global_Stuff.loginPortalButton()
        Global_Stuff.portalManagePolicyWithPolicyNumber()
        cy.getAndWait('#Main_btnDocPref').click()
        cy.getAndWait('#IsMyAviva-yes', { allowHidden: true } ).should('have.value', 'True')

        // Enter B/O and amend preferences to N/Y/Y
        Global_Stuff.Server()

        cy.getAndWait(':nth-child(1) > .level1').click()
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()
        
        // Select policy and Documents 
        Global_Stuff.livePoliciesBTN()
        Global_Stuff.selectActionDocumentsWithPolicyNumber()
        
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnCorrespondence').click()
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblDocsByPortal_1').click({force: true})
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblCertByPost_0').click({force: true})
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblDocsByPost_0').click({force: true})
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnSave').click()
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnCorrespondence').click()
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblDocsByPortal_1').should('have.value', 'False')
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblCertByPost_0').should('have.value', 'True')
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblDocsByPost_0').should('have.value', 'True')

        // Check Portal preferences match N/Y/Y
        Global_Stuff.Server1()

        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')
        Global_Stuff.loginEmail()
        Global_Stuff.loginPassword()
        Global_Stuff.loginPortalButton()
        Global_Stuff.portalManagePolicyWithPolicyNumber()
        cy.getAndWait('#Main_btnDocPref').click()
        cy.getAndWait('#IsMyAviva-no', { allowHidden: true }).should('have.value', 'False')
        cy.getAndWait('#IsPostCert-yes', { allowHidden: true }).should('have.value', 'True')
        cy.getAndWait('#IsPostDocs-yes', { allowHidden: true }).should('have.value', 'True')

        // Amend Portal preferences to N/N/Y
        cy.getAndWait('#IsMyAviva-False > .a-radio > .a-radio__label > .a-radio__label-inner').click()
        cy.getAndWait('#IsPostCert-False > .a-radio > .a-radio__label > .a-radio__label-inner').click()
        cy.getAndWait('#IsPostDocs-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
        cy.getAndWait('#Main_btnSave').click()

        // Enter B/O and check preferences match N/N/Y
        Global_Stuff.Server()

        cy.getAndWait(':nth-child(1) > .level1').click()
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()
        
        // Select policy and Documents 
        Global_Stuff.livePoliciesBTN()
        Global_Stuff.selectActionDocumentsWithPolicyNumber()
       
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnCorrespondence').click()
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblDocsByPortal_1').should('have.value', 'False')
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblCertByPost_1').should('have.value', 'False')
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblDocsByPost_0').should('have.value', 'True')
        cy.getAndWait('#CorrespondenceModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
    })
})