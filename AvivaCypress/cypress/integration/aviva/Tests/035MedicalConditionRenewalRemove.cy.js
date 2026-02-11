import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { MTABOActions } from "../AvivaPOM/MTABOActions"
import { Login } from "../AvivaPOM/Login"
import { AboutYou } from "../AvivaPOM/AboutYou"
import { PersonalDetails } from "../AvivaPOM/PersonalDetails"
import { InsuranceDetails } from "../AvivaPOM/InsuranceDetails"
import { CarDetails } from "../AvivaPOM/CarDetails"
import { AdditionalDrivers } from "../AvivaPOM/AdditionalDrivers"
import { YourClaims } from "../AvivaPOM/YourClaims"
import { PenaltyPoints } from "../AvivaPOM/PenaltyPoints"
import { CoverStartDate } from "../AvivaPOM/CoverStartDate"
import { QuotePage } from "../AvivaPOM/QuotePage"
import { AboutYourCarPQ1 } from "../AvivaPOM/AboutYourCarPQ1"
import { AboutTheDriversPQ2 } from "../AvivaPOM/AboutTheDriversPQ2"
import { YourInsHistoryAndIncepDetsPQ3 } from "../AvivaPOM/YourInsHistoryAndIncepDetsPQ3"
import { PaymentTypes } from "../AvivaPOM/PaymentTypes"
import { DiaryAndCorrespondence } from "../AvivaPOM/DiaryAndCorrespondence"
import { ThankYouScreen } from "../AvivaPOM/ThankYouScreen"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const MTABOAction = new MTABOActions()
const Logins = new Login()
const AboutYouPage = new AboutYou()
const PersonalDetailsPage = new PersonalDetails()
const InsuranceDetailsPage = new InsuranceDetails()
const CarDetailsPage = new CarDetails()
const AdditionalDriversPage = new AdditionalDrivers()
const YourClaimsPage = new YourClaims()
const PenaltyPointsPage = new PenaltyPoints()
const CoverStartDatePage = new CoverStartDate()
const QuotePageAndExtras = new QuotePage()
const AboutYourCarPage = new AboutYourCarPQ1()
const AboutTheDriversPage = new AboutTheDriversPQ2()
const YourInsHistoryAndIncepDetsPage = new YourInsHistoryAndIncepDetsPQ3()
const PaymentTypesPage = new PaymentTypes()
const DiaryAndCorrespondencePage = new DiaryAndCorrespondence()
const ThankYouPage = new ThankYouScreen()
const day = require('dayjs')

describe('Medical condition can be removed at renewal', () => {
    it('should complete the process of adding and removing a medical condition', () => {
        Server.Server()
        
        // Log in
        Logins.company()
        Logins.username()
        Logins.password()
        Logins.loginButton()

        // Revert new window that opens back to original window 
        cy.getAndWait('#ctl00_ContentPlaceHolder1_ProductList').select(1)
        cy.window().then((win) => {
            const orig = win.open
            win.open = function (url, targetAndWait, features) {
                return orig.call(this, url, '_self', features)
            }
        })

        BOAction.createNewQuoteBTN()

        // Accept cookies
        BOAction.cookiesAccept()

        // Complete section 1 "About you"
        AboutYouPage.aboutYouTitle()
        BOAction.notes()
        AboutYouPage.proposerTitle()
        AboutYouPage.proposerForename()
        AboutYouPage.proposerSurname()
        AboutYouPage.proposerEmail()
        AboutYouPage.phone()
        AboutYouPage.aboutYouContinue()

        // Complete section 2 "Personal details"
        PersonalDetailsPage.personalDetailsTitle()
        PersonalDetailsPage.addressInput()
        PersonalDetailsPage.addressSuggest()
        PersonalDetailsPage.addressSelect()
        PersonalDetailsPage.addressConfirm()
        PersonalDetailsPage.proposerDOB()
        PersonalDetailsPage.proposerEmployStatus()
        PersonalDetailsPage.licenceType()
        PersonalDetailsPage.licenceYears()
        PersonalDetailsPage.personlaDetailsContinue()

        // Complete section 3 "Insurance details"
        InsuranceDetailsPage.insuranceDetailsTitle()
        BOAction.notes()
        InsuranceDetailsPage.drivingExp()
        InsuranceDetailsPage.drivingExpYears()
        InsuranceDetailsPage.carUse()
        InsuranceDetailsPage.insuranceDetailsContinue()

        // Complete section 4 "Car details"
        CarDetailsPage.carDetailsTitle()
        BOAction.notes()
        CarDetailsPage.carRegYes()
        CarDetailsPage.carRegInput()
        CarDetailsPage.findCarBTN()
        CarDetailsPage.confirmCarBTN()
        CarDetailsPage.carValueInput()
        CarDetailsPage.carModifiedFalse()
        CarDetailsPage.carDetailsContinue()

        // Complete section 5 "Additional drivers"
        AdditionalDriversPage.additionalDriversHeading()
        BOAction.notes()
        AdditionalDriversPage.additionalDriversFalse()
        AdditionalDriversPage.additionalDriversContinue()

        // Complete section 6 "Your claims"
        BOAction.notes()
        YourClaimsPage.claimsHeading()
        YourClaimsPage.claimsFalse1st()
        YourClaimsPage.claimsContinue()

        // Complete section 7 "Penalty points"
        PenaltyPointsPage.ppHeading()
        BOAction.notes()
        PenaltyPointsPage.ppFalse1st()
        PenaltyPointsPage.ppContinue()

        // Complete section 8 "Cover start date"
        CoverStartDatePage.coverStartHeading()
        BOAction.notes()
        CoverStartDatePage.coverStartDate()
        CoverStartDatePage.coverStartHaveHomeIns()
        CoverStartDatePage.coverStartHaveCarIns()
        CoverStartDatePage.coverStartMarketing()
        CoverStartDatePage.coverStartCallConsent(true)
        CoverStartDatePage.coverStartContinue()

        // Quote screen - Buy now 
        QuotePageAndExtras.quotePageHeading()
        BOAction.notes()
        QuotePageAndExtras.buyNowBtn()

        // Complete post quote 1 "About you car"
        AboutYourCarPage.postQuote1Heading()
        BOAction.notes()
        AboutYourCarPage.postQuote1OwnCar()
        AboutYourCarPage.postQuote1PrivateIns()
        AboutYourCarPage.postQuote1Continue()

        // Complete post quote 2 "About the drivers"
        AboutTheDriversPage.postQuote2Heading()
        BOAction.notes()
        AboutTheDriversPage.postQuote2IsResidentTrue()
        AboutTheDriversPage.postQuote2IsMainDriverTrue()
        AboutTheDriversPage.postQuote2IsNotOtherCarTrue()
        AboutTheDriversPage.postQuote2IsNotOtherInsTrue()
        AboutTheDriversPage.postQuote2IsNoConvictionTrue()
        AboutTheDriversPage.postQuote2IsNoDisqualificationTrue()
        AboutTheDriversPage.postQuote2IsNoRefusalTrue()
        AboutTheDriversPage.postQuote2IsNoIncreaseTrue()
        AboutTheDriversPage.postQuote2IsNoMedicalTrue()
        AboutTheDriversPage.postQuote2DriverNumber()
        AboutTheDriversPage.postQuote2Continue()

        // Complete post quote 3 "Your insurance history and inception details"
        YourInsHistoryAndIncepDetsPage.postQuote3Heading()
        BOAction.notes()
        YourInsHistoryAndIncepDetsPage.postQuote3NCDROITrue()
        YourInsHistoryAndIncepDetsPage.postQuote3NoOtherNCDTrue()
        YourInsHistoryAndIncepDetsPage.postQuote3WithinExpiryTrue()
        YourInsHistoryAndIncepDetsPage.postQuote3IsMyAvivaTrue()
        YourInsHistoryAndIncepDetsPage.postQuote3Continue()

        // Payment type screen - selecting "No payment required"
        BOAction.notes()
        PaymentTypesPage.paymentTypeAgentNoPay()
        PaymentTypesPage.paymentTypeAgentNoPayContinue()

        // Diary & correspondence page 
        DiaryAndCorrespondencePage.diaryCorrespondenceHeading()
        BOAction.notes()
        DiaryAndCorrespondencePage.diaryCorrespondenceContinue()

        // Thank you page
        ThankYouPage.thankyouHeading()
        BOAction.notes()
        ThankYouPage.retreivePolicyNumber()

        // Back date policy
        Server.Server()
        BOAction.home()
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        BOAction.unlockBTN()

        // Open policy
        BOAction.livePoliciesBTN()

        // Back date policy
        BOAction.policyToolsAgePolicyWithPolicyNumber()
        BOAction.agePolicy()

        // Generate and invite renewal
        Server.Server()
        BOAction.home()
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        BOAction.generateRenewal()
        BOAction.inviteRenewal()

        // Checking for renewal invite email in docs
        BOAction.recallPolicy()
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithPolicyNumber()
        BOAction.checkRenewalInviteDocs()
        cy.go(-1)

        // Purchase Home Renewal
        BOAction.livePoliciesBTN()
        BOAction.selectActionRenewalWithPolicyNumber()
        QuotePageAndExtras.selectStaffDiscount()
        cy.getAndWait('#ctl00_MainContent_EditAdditionalDriver').click()
        AdditionalDriversPage.additionalDriversTrue()
        AdditionalDriversPage.additionalDriver1Title()
        AdditionalDriversPage.additionalDriver1Forename()
        AdditionalDriversPage.additionalDriver1Surname()
        AdditionalDriversPage.additionalDriver1DOB()
        AdditionalDriversPage.additionalDriver1EmploymentStatus()
        AdditionalDriversPage.additionalDriver1LicenceType()
        AdditionalDriversPage.additionalDriver1LicenceYears()
        AdditionalDriversPage.addionalDriver1DriverNumber()
        AdditionalDriversPage.additionalDriver1Relationship()
        AdditionalDriversPage.additionalDriver1SpouseOwnVehFalse()
        AdditionalDriversPage.additionalDriver1Save()
        AdditionalDriversPage.additionalDriversFalse()
        AdditionalDriversPage.additionalDriversContinue()

        cy.getAndWait('#accHeading5 > .m-showhide__control').contains('Additional driver added')
        YourClaimsPage.claimsFalseLast()
        YourClaimsPage.claimsContinue()

        PenaltyPointsPage.ppFalseLast()
        PenaltyPointsPage.ppContinue()

        // Complete section 8 "Cover start date"
        cy.getAndWait('#div8').contains('Renewal date')
        BOAction.notes()
        cy.getAndWait('#IsHome-False > .a-radio > .a-radio__label').click({force: true})
        cy.getAndWait('#IsHouseholdCar-False > .a-radio > .a-radio__label').click({force: true})
        CoverStartDatePage.coverStartContinue()

        QuotePageAndExtras.selectStaffDiscount()
        cy.getAndWait('#btnBuyNow').click({force: true})

        AboutYourCarPage.postQuote1OwnCar()
        AboutYourCarPage.postQuote1PrivateIns()
        AboutYourCarPage.postQuote1Continue()

        // Completing post quote screen 2 questions
        AboutTheDriversPage.postQuote2Heading()
        BOAction.notes()
        AboutTheDriversPage.postQuote2IsResidentTrue()
        AboutTheDriversPage.postQuote2IsMainDriverTrue()
        AboutTheDriversPage.postQuote2IsNotOtherCarTrue()
        AboutTheDriversPage.postQuote2IsNotOtherInsTrue()
        AboutTheDriversPage.postQuote2IsNoConvictionTrue()
        AboutTheDriversPage.postQuote2IsNoDisqualificationTrue()
        AboutTheDriversPage.postQuote2IsNoRefusalTrue()
        AboutTheDriversPage.postQuote2IsNoIncreaseTrue()
        AboutTheDriversPage.postQuote2IsNoMedicalFalse()
        AboutTheDriversPage.postQuote2addMedicalConditionBTN()
        AboutTheDriversPage.postQuote2addMedicalConditionDriver()
        AboutTheDriversPage.postQuote2addMedicalConditionSelect()
        AboutTheDriversPage.postQuote2addMedicalConditionInformed()
        AboutTheDriversPage.postQuote2addMedicalConditionSave()
        AboutTheDriversPage.postQuote2addMedicalConditionBTN()
        AboutTheDriversPage.postQuote2addMedicalConditionAD()
        AboutTheDriversPage.postQuote2addMedicalConditionSelect1()
        AboutTheDriversPage.postQuote2addMedicalConditionInformed()
        AboutTheDriversPage.postQuote2addMedicalConditionSave()
        cy.getAndWait('#RemoveCondition').first().click()
        cy.getAndWait('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()

        cy.getAndWait('#RemoveCondition').last().click()
        cy.getAndWait('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()

        AboutTheDriversPage.postQuote2IsNoMedicalTrue()

        AboutTheDriversPage.postQuote2Continue()

        YourInsHistoryAndIncepDetsPage.postQuote3Continue()

         PaymentTypesPage.paymentTypeAgentNoPay()
        cy.getAndWait('#ctl00_MainContent_txtAmountReceived').type('100')
        cy.getAndWait('#ctl00_MainContent_txtPayRef').type('test')

        cy.getAndWait('#ctl00_MainContent_PayCheque').click()
        cy.getAndWait('#ctl00_MainContent_btnPayNSPayment').click()

        ThankYouPage.thankyouHeading()

        // Attempting to remove medical condition at MTA
        Server.Server()
        BOAction.home()
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()

        // Open policy
        BOAction.livePoliciesBTN()

        // Select Make adjustment and revert window back to current window
        BOAction.selectActionMakeADJWithPolicyNumber()

        // Select to perform a permanent adjustment on Additional drivers
        MTABOAction.permADJAdditionalDriver()
        
        cy.getAndWait('#Continue5').click()
        cy.getAndWait('#ctl00_MainContent_StartDate').type(day().add(3, 'day').format('DD/MM/YYYY'), {force: true})
        CoverStartDatePage.coverStartContinue()
        cy.getAndWait('#ctl00_MainContent_btnContinue').click({force: true})
        
        AboutTheDriversPage.postQuote2Heading()
        BOAction.notes()

        // Completing post quote screen 2 questions
        AboutTheDriversPage.postQuote2Heading()
        AboutTheDriversPage.postQuote2IsNoMedicalFalse()
        AboutTheDriversPage.postQuote2addMedicalConditionBTN()
        AboutTheDriversPage.postQuote2addMedicalConditionDriver()
        AboutTheDriversPage.postQuote2addMedicalConditionSelect()
        AboutTheDriversPage.postQuote2addMedicalConditionInformed()
        AboutTheDriversPage.postQuote2addMedicalConditionSave()
        AboutTheDriversPage.postQuote2addMedicalConditionBTN()
        AboutTheDriversPage.postQuote2addMedicalConditionAD()
        AboutTheDriversPage.postQuote2addMedicalConditionSelect1()
        AboutTheDriversPage.postQuote2addMedicalConditionInformed()
        AboutTheDriversPage.postQuote2addMedicalConditionSave()
        
        AboutTheDriversPage.postQuote2Headingselect()
        
        cy.getAndWait('#RemoveCondition').first().click()
        cy.getAndWait('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()

        AboutTheDriversPage.postQuote2Headingselect()

        cy.getAndWait('#RemoveCondition').last().click()
        cy.getAndWait('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()
        
        // Completing post quote screen 3 
        YourInsHistoryAndIncepDetsPage.postQuote3Continue()

        cy.getAndWait('.m-card-content > p').should('contain', 'Go back to make a change to your details')
    })
})