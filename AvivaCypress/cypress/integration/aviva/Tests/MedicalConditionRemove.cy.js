import { Global } from "../AvivaPOM/Page Actions/POMActions"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global()

describe('Agent can add a Medical condition and remove ok', () => {
    it('should complete the process of adding and removing a medical condition', () => {
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
        Global_Stuff.additionalDriversTrue()
        Global_Stuff.additionalDriver1Title()
        Global_Stuff.additionalDriver1Forename()
        Global_Stuff.additionalDriver1Surname()
        Global_Stuff.additionalDriver1DOB()
        Global_Stuff.additionalDriver1EmploymentStatus()
        Global_Stuff.additionalDriver1LicenceType()
        Global_Stuff.additionalDriver1LicenceYears()
        Global_Stuff.additionalDriver1Relationship()
        Global_Stuff.additionalDriver1SpouseOwnVehFalse()
        Global_Stuff.additionalDriver1Save()
        Global_Stuff.additionalDriversFalse()
        Global_Stuff.additionalDriversContinue()
        
        // Complete section 6 "Your claims"
        Global_Stuff.additionalDriverAddedHeading()
        Global_Stuff.notes()
        Global_Stuff.claimsHeading()
        Global_Stuff.claimsFalse1st()
        Global_Stuff.claimsFalseLast()
        Global_Stuff.claimsContinue()

        // Complete section 7 "Penalty points"
        Global_Stuff.ppHeading()
        Global_Stuff.notes()
        Global_Stuff.ppFalse1st()
        Global_Stuff.ppFalseLast()
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
        Global_Stuff.postQuote2DriverNumber1()
        Global_Stuff.postQuote2IsResidentTrue()
        Global_Stuff.postQuote2IsMainDriverTrue()
        Global_Stuff.postQuote2IsNotOtherCarTrue()
        Global_Stuff.postQuote2IsNotOtherInsTrue()
        Global_Stuff.postQuote2IsNoConvictionTrue()
        Global_Stuff.postQuote2IsNoDisqualificationTrue()
        Global_Stuff.postQuote2IsNoRefusalTrue()
        Global_Stuff.postQuote2IsNoIncreaseTrue()
        
        Global_Stuff.postQuote2IsNoMedicalFalse()
        Global_Stuff.postQuote2addMedicalConditionBTN()
        Global_Stuff.postQuote2addMedicalConditionDriver()
        Global_Stuff.postQuote2addMedicalConditionSelect()
        Global_Stuff.postQuote2addMedicalConditionInformed()
        Global_Stuff.postQuote2addMedicalConditionSave()
        Global_Stuff.postQuote2addMedicalConditionBTN()
        Global_Stuff.postQuote2addMedicalConditionAD()
        Global_Stuff.postQuote2addMedicalConditionSelect1()
        Global_Stuff.postQuote2addMedicalConditionInformed()
        Global_Stuff.postQuote2addMedicalConditionSave()
        
        Global_Stuff.postQuote2MedicalDeleteBTN()
        Global_Stuff.postQuote2MedicalRemoveBTN()
        
        // Global_Stuff.postQuote1wnCar()
        // Global_Stuff.postQuote1PrivateIns()
        // Global_Stuff.postQuote1Continue()

        Global_Stuff.postQuote2MedicalDeleteBTN1()
        Global_Stuff.postQuote2MedicalRemoveBTN()

        // Global_Stuff.postQuote1wnCar()
        // Global_Stuff.postQuote1PrivateIns()
        // Global_Stuff.postQuote1Continue()
        
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
        
        // Add and remove medical condition at MTA via B/O
        Global_Stuff.Server()
        Global_Stuff.home()
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()

        // Open policy
        Global_Stuff.livePoliciesBTN()

        // Select Make adjustment and revert window back to current window
        Global_Stuff.selectActionMakeADJWithPolicyNumber()

        // Select to perform a permanent adjustment on Additional drivers
        Global_Stuff.permADJAdditionalDriver()
        Global_Stuff.additionalDriversContinue()
        Global_Stuff.coverStartDatePlus1()
        Global_Stuff.coverStartContinue()
        Global_Stuff.permMTAContinue()
        

        // Completing post quote screen 2 questions - adding medical condition to drivers and removing
        Global_Stuff.postQuote2Headingselect()
        Global_Stuff.postQuote2Heading()
        Global_Stuff.notes()
        Global_Stuff.postQuote2IsNoMedicalFalse()
        Global_Stuff.postQuote2addMedicalConditionBTN()
        Global_Stuff.postQuote2addMedicalConditionDriver()
        Global_Stuff.postQuote2addMedicalConditionSelect()
        Global_Stuff.postQuote2addMedicalConditionInformed()
        Global_Stuff.postQuote2addMedicalConditionSave()
        Global_Stuff.postQuote2addMedicalConditionBTN()
        Global_Stuff.postQuote2addMedicalConditionAD()
        Global_Stuff.postQuote2addMedicalConditionSelect1()
        Global_Stuff.postQuote2addMedicalConditionInformed()
        Global_Stuff.postQuote2addMedicalConditionSave()
        cy.wait(1000)
        cy.getAndWait('#RemoveCondition').click()
        cy.getAndWait('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()
        cy.wait(1000)
        Global_Stuff.postQuote2Headingselect()
        cy.getAndWait('#RemoveCondition').click()
        cy.getAndWait('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()
        cy.wait(1000)
        Global_Stuff.postQuote2Headingselect()
        Global_Stuff.postQuote2IsNoMedicalTrue()
        
        // Completing post quote screen 3 
        Global_Stuff.postQuote3Continue()

        cy.getAndWait('.m-card-content > p').should('contain', 'Go back to make a change to your details')
    })
})