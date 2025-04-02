import { Global } from "../AvivaPOM/Page Actions/POMActions"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global()
const day = require('dayjs')

describe('Medical condition can be removed at renewal QA', () => {
    it('should complete the process of adding and removing a medical condition', () => {
        Global_Stuff.Server()
        
        // Log in
        Global_Stuff.company()
        Global_Stuff.username()
        Global_Stuff.password()
        Global_Stuff.loginButton()

        // Revert new window that opens back to original window 
        cy.getAndWait('#ctl00_ContentPlaceHolder1_ProductList').select(1)
        cy.window().then((win) => {
            const orig = win.open
            win.open = function (url, targetAndWait, features) {
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
        Global_Stuff.notes()
        Global_Stuff.claimsHeading()
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

        // Back date policy
        Global_Stuff.Server()
        Global_Stuff.home()
        Global_Stuff.email()
        Global_Stuff.searchButton()
        Global_Stuff.policySelectButton()
        Global_Stuff.unlockBTN()

        // Open policy
        Global_Stuff.livePoliciesBTN()

        // Back date policy
        Global_Stuff.policyToolsAgePolicyWithPolicyNumber()
        Global_Stuff.agePolicy()

        // Generate and invite renewal
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

        // Purchase Home Renewal
        Global_Stuff.livePoliciesBTN()
        Global_Stuff.selectActionRenewalWithPolicyNumber()
        Global_Stuff.selectStaffDiscount()
        cy.getAndWait('#ctl00_MainContent_EditAdditionalDriver').click()
        Global_Stuff.additionalDriversTrue()
        Global_Stuff.additionalDriver1Title()
        Global_Stuff.additionalDriver1Forename()
        Global_Stuff.additionalDriver1Surname()
        Global_Stuff.additionalDriver1DOB()
        Global_Stuff.additionalDriver1EmploymentStatus()
        Global_Stuff.additionalDriver1LicenceType()
        Global_Stuff.additionalDriver1LicenceYears()
        Global_Stuff.addionalDriver1DriverNumber()
        Global_Stuff.additionalDriver1Relationship()
        Global_Stuff.additionalDriver1SpouseOwnVehFalse()
        Global_Stuff.additionalDriver1Save()
        Global_Stuff.additionalDriversFalse()
        Global_Stuff.additionalDriversContinue()

        cy.getAndWait('#accHeading5 > .m-showhide__control').contains('Additional driver added')
        Global_Stuff.claimsFalseLast()
        Global_Stuff.claimsContinue()

        Global_Stuff.ppFalseLast()
        Global_Stuff.ppContinue()

        // Complete section 8 "Cover start date"
        cy.getAndWait('#div8').contains('Renewal date')
        Global_Stuff.notes()
        cy.getAndWait('#IsHome-False > .a-radio > .a-radio__label').click({force: true})
        cy.getAndWait('#IsHouseholdCar-False > .a-radio > .a-radio__label').click({force: true})
        cy.getAndWait('#ctl00_MainContent_Continue8').click({force: true})

        cy.getAndWait('#StaffHeading > .m-showhide__control').click()
        cy.getAndWait('#ddlAvailableDiscounts').select(1)
        cy.getAndWait('#ctl00_MainContent_Recalculate').click()
        cy.getAndWait('#ctl00_MainContent_UP_Price > :nth-child(1)').should('contain', 'Call centre customer - No online discount')
        cy.getAndWait('#btnBuyNow').click({force: true})

        Global_Stuff.postQuote1wnCar()
        Global_Stuff.postQuote1PrivateIns()
        Global_Stuff.postQuote1Continue()

        // Completing post quote screen 2 questions
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
        cy.getAndWait('#RemoveCondition').first().click()
        cy.getAndWait('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()

        cy.getAndWait('#RemoveCondition').last().click()
        cy.getAndWait('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()

        Global_Stuff.postQuote2IsNoMedicalTrue()

        Global_Stuff.postQuote2Continue()

        Global_Stuff.postQuote3Continue()

        cy.getAndWait('#ctl00_MainContent_PaymentType').select(2)
        cy.getAndWait('#ctl00_MainContent_txtAmountReceived').type('100')
        cy.getAndWait('#ctl00_MainContent_txtPayRef').type('test')

        cy.getAndWait('#ctl00_MainContent_PayCheque').click()
        cy.getAndWait('#ctl00_MainContent_btnPayNSPayment').click()

        Global_Stuff.thankyouHeading()

        // Attempting to remove medical condition at MTA
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
        cy.getAndWait('#ctl00_MainContent_ddlPermaSelection').select('Additional drivers', {force: true}).should('have.value', 'AddDriver')
        cy.getAndWait('#btnMakePermaChange').click({force: true})
        
        cy.getAndWait('#Continue5').click()
        cy.getAndWait('#ctl00_MainContent_StartDate').type(day().add(3, 'day').format('DD/MM/YYYY'), {force: true})
        cy.getAndWait('#ctl00_MainContent_Continue8').click({force: true})
        cy.getAndWait('#ctl00_MainContent_btnContinue').click({force: true})
        
        cy.getAndWait('#div2').contains('About the drivers')
        cy.getAndWait('#ctl00_divNotes > .a-button').should('be.visible')

        // Completing post quote screen 2 questions
        Global_Stuff.postQuote2Heading()
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

        Global_Stuff.postQuote2Headingselect()
        
        cy.getAndWait('#RemoveCondition').first().click()
        cy.getAndWait('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()

        Global_Stuff.postQuote2Headingselect()

        cy.getAndWait('#RemoveCondition').last().click()
        cy.getAndWait('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()
        
        // Completing post quote screen 3 
        Global_Stuff.postQuote3Continue()
        
        cy.getAndWait('.m-card-content > p').should('contain', 'Go back to make a change to your details')
    })
})