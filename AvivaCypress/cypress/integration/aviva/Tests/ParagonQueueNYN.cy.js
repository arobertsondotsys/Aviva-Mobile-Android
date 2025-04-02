import { Global } from "../AvivaPOM/Page Actions/POMActions"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global()
const day = require('dayjs')

describe('Policy Purchase with NYN', () => {
    it('should complete the process of purchasing a policy with NYN preferences', () => {
        Global_Stuff.Server()
        
        // Log in
        Global_Stuff.company()
        Global_Stuff.username()
        Global_Stuff.password()
        Global_Stuff.loginButton()
        
        // Revert new window that opens back to original window 
        cy.get('#ctl00_ContentPlaceHolder1_ProductList').select(1)
        cy.window().then((win) => {
            const orig = win.open
            win.open = function (url, target, features) {
                return orig.call(this, url, '_self', features)
            }
        })

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
        cy.wait(2000)
        Global_Stuff.addressSuggest()
        Global_Stuff.addressSelect()
        Global_Stuff.addressConfirm()
        Global_Stuff.proposerDOB()
        Global_Stuff.proposerEmployStatus()
        Global_Stuff.licenceType()
        Global_Stuff.licenceYears()
        Global_Stuff.personlaDetailsContinue()
        cy.wait(2000)
        
        // Complete section 3 "Insurance details"
        Global_Stuff.insuranceDetailsTitle()
        Global_Stuff.notes()
        Global_Stuff.drivingExp()
        cy.wait(2000)
        Global_Stuff.drivingExpYears()
        Global_Stuff.carUse()
        Global_Stuff.insuranceDetailsContinue()
        
        // Complete section 4 "Car details"
        Global_Stuff.carDetailsTitle()
        Global_Stuff.notes()
        Global_Stuff.carRegYes()
        Global_Stuff.carRegInput()
        Global_Stuff.findCarBTN()
        cy.wait(3000)
        Global_Stuff.confirmCarBTN()
        cy.wait(3000)
        Global_Stuff.carValueInput()
        Global_Stuff.carModifiedFalse()
        Global_Stuff.carDetailsContinue()
        
        // Complete section 5 "Additional drivers"
        Global_Stuff.additionalDriversHeading()
        Global_Stuff.notes()
        Global_Stuff.additionalDriversFalse()
        Global_Stuff.additionalDriversContinue()

        // Complete section 6 "Your claims"
        Global_Stuff.notes()
        Global_Stuff.claimsHeading()
        cy.wait(2000)
        Global_Stuff.claimsFalse1st()
        cy.wait(2000)
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
        cy.wait(10000)

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
       cy.wait(2000)
       Global_Stuff.postQuote2Continue()
        
        // Complete post quote 3 "Your insurance history and inception details"
        Global_Stuff.postQuote3Heading()
        Global_Stuff.notes()
        Global_Stuff.postQuote3NCDROITrue()
        Global_Stuff.postQuote3NoOtherNCDTrue()
        Global_Stuff.postQuote3WithinExpiryTrue()
        Global_Stuff.postQuote3IsMyAvivaFalse()
        Global_Stuff.postQuote3PostCert()
        Global_Stuff.postQuote3PostDocsFalse()
        cy.wait(3000)
        Global_Stuff.postQuote3Continue()

        // Payment type screen - selecting "No payment required"
        Global_Stuff.notes()
        cy.wait(4000)
        Global_Stuff.paymentTypeAgentNoPay()
        Global_Stuff.paymentTypeAgentNoPayContinue()
        
        // Diary & correspondence page 
        Global_Stuff.diaryCorrespondenceHeading()
        Global_Stuff.notes()
        Global_Stuff.diaryCorrespondenceContinue()
        
        // Thank you page
        Global_Stuff.thankyouHeading()
        Global_Stuff.notes()
        Global_Stuff.retreiveParagonPolicyNumber3()
        
        // Check B/O preferences match Y/N/N
        Global_Stuff.Server()
        cy.get(':nth-child(1) > .level1').click()
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()

        // Select policy and Documents 
        Global_Stuff.livePoliciesBTN()
        Global_Stuff.selectActionDocumentsWithParagonPolicyNumber3()
        
        cy.get('#ctl00_ContentPlaceHolder1_btnCorrespondence').click()
        cy.get('#ctl00_ContentPlaceHolder1_rblDocsByPortal_1').should('have.value', 'False')
        cy.get('#ctl00_ContentPlaceHolder1_rblCertByPost_0').should('have.value', 'True')
        cy.get('#ctl00_ContentPlaceHolder1_rblDocsByPost_1').should('have.value', 'False')
        cy.get('#CorrespondenceModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        cy.wait(60000)
        cy.get('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('No Documents In Queue')

        // Completing Diary chaser to move policy to full cover and check for cert being added to print queue
        cy.get(':nth-child(1) > .level1').click()
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()

        // Select policy and Documents 
        Global_Stuff.livePoliciesBTN()
        Global_Stuff.selectActionDiaryWithParagonPolicyNumber3()
        
        cy.get(':nth-child(7) > .btn > span').click()
        cy.get('#ctl00_ContentPlaceHolder1_DocumentGrid_ctl02_IsReceived').click()
        cy.get(':nth-child(2) > :nth-child(6)').should('not.have.text', '')
    })
})
    

    
    


    









   
   
    
















    





