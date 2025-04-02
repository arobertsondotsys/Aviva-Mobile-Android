import { Global } from "../AvivaPOM/Page Actions/POMActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_Stuff = new Global()
const day = require('dayjs')

describe('Agent can Amend an NCD', () => {
    it('should complete the process of amending an NCD', () => {
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
        
        Global_Stuff.Server()
        
        // Log in
        Global_Stuff.home()

        // Search for Customer file
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()
        
        // Select policy and Documents 
        Global_Stuff.livePoliciesBTN()
        
        Global_Stuff.selectActionAmendNCDWithPolicyNumber()
          
        // Amend NCD to 40% & Select Cover start date 
        //Global_Stuff.cookiesAccept()
        cy.getAndWait('#ctl00_MainContent_ddlNCDPercent').select(5)
        cy.getAndWait('#ctl00_MainContent_Continue3').click()
        cy.getAndWait('#ctl00_MainContent_StartDate').type(day().add(2, 'day').format('DD/MM/YYYY'))
        cy.getAndWait('#ctl00_MainContent_NCDStartTime').type('13:00')
        cy.getAndWait('#ctl00_MainContent_Continue8').click()
        
        // Quote Page 
        cy.getAndWait('.marginTop30Important').should('have.text', 'Total adjustment premium')
        cy.getAndWait(':nth-child(4) > .l-columns > :nth-child(2) > .bold').contains('No protection')
        cy.wait(1000)
        cy.getAndWait('#ctl00_MainContent_ddlAmendNCD').select(2)
        cy.wait(1000)
        cy.getAndWait('#ctl00_MainContent_NCDRecalculate').click()
        cy.wait(5000)
        cy.contains('View premium breakdown').click()
        cy.get('[data-origin="#SinglePaymentBreakdown"]').contains('Step-back NCD')
        cy.getAndWait('.o-modal__cancel').click()
        
        cy.getAndWait('#ctl00_MainContent_btnBuyNow').click({force: true})
        
        Global_Stuff.postQuote3Continue()
        cy.getAndWait('#ctl00_MainContent_PaymentType').select(2)
        cy.getAndWait('#ctl00_MainContent_txtAmountReceived').type('100')
        cy.getAndWait('#ctl00_MainContent_txtPayRef').type('test')
        cy.getAndWait('#ctl00_MainContent_PayCheque').click()
        cy.getAndWait('#ctl00_MainContent_btnPayNSPayment').click()
        
        // Thank you page
        cy.getAndWait('.m-heading-group__item').should('have.text', 'Thank you')
    })

    it('should fail to amend an NCD', () => {
        Global_Stuff.Server()

        // Log in
        Global_Stuff.company()
        Global_Stuff.username()
        Global_Stuff.password()
        Global_Stuff.loginButton()

        // Search for Customer file
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()
        
        // Select policy and Documents 
        Global_Stuff.livePoliciesBTN()
        
        Global_Stuff.selectActionAmendNCDWithPolicyNumber()
          
        // Amend NCD to 40% & Select Cover start date 
        Global_Stuff.cookiesAccept()
        cy.getAndWait('#ctl00_MainContent_ddlNCDPercent').select(5)
        cy.getAndWait('#ctl00_MainContent_Continue3').click()
        cy.getAndWait('#ctl00_MainContent_StartDate').type(day().add(1, 'day').format('DD/MM/YYYY'))
        cy.getAndWait('#ctl00_MainContent_NCDStartTime').type('13:00')
        cy.getAndWait('#ctl00_MainContent_Continue8').click({force: true})

        cy.getAndWait('#ctl00_MainContent_CV__StartDate').should('contain', 'NCD can not start before the effective date of the latest adjustment')
    })
})

