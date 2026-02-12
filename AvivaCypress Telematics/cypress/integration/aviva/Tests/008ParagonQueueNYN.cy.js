import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
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
import { ConsentPage } from "../AvivaPOM/ConsentPage"
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
const TelematicsConsentPage = new ConsentPage()
const AboutYourCarPage = new AboutYourCarPQ1()
const AboutTheDriversPage = new AboutTheDriversPQ2()
const YourInsHistoryAndIncepDetsPage = new YourInsHistoryAndIncepDetsPQ3()
const PaymentTypesPage = new PaymentTypes()
const DiaryAndCorrespondencePage = new DiaryAndCorrespondence()
const ThankYouPage = new ThankYouScreen()
const day = require('dayjs')

describe('Policy Purchase with NYN', () => {
    it('should complete the process of purchasing a policy with NYN preferences', () => {
        Server.Server()
        
        // Log in
        cy.agentLogin()
        
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
        //CoverStartDatePage.coverStartCallConsent(true)
        CoverStartDatePage.coverStartContinue()

        // Quote screen - Buy now 
        QuotePageAndExtras.quotePageHeading()
        BOAction.notes()
        QuotePageAndExtras.buyNowBtn()

        //Telematics Consent Page
        TelematicsConsentPage.telematicsConsentHeading()
        //TelematicsConsentPage.telematicsConsentEmail()
        TelematicsConsentPage.telematicsConsentEmailConfirm()
        TelematicsConsentPage.telematicsConsentCheckBox()
        TelematicsConsentPage.telematicsConsentContinue()
        
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
        YourInsHistoryAndIncepDetsPage.postQuote3IsMyAvivaFalse()
        YourInsHistoryAndIncepDetsPage.postQuote3PostCert()
        YourInsHistoryAndIncepDetsPage.postQuote3PostDocsFalse()
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
        ThankYouPage.retreiveParagonPolicyNumber3()
        
        // Check B/O preferences match Y/N/N
        Server.Server()
        BOAction.home()
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()

        // Select policy and Documents 
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithParagonPolicyNumber3()
        
        
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnCorrespondence').click()
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblDocsByPortal_1').should('have.value', 'False')
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblCertByPost_0').should('have.value', 'True')
        cy.getAndWait('#ctl00_ContentPlaceHolder1_rblDocsByPost_1').should('have.value', 'False')
        cy.getAndWait('#CorrespondenceModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        //cy.wait(80000)
        cy.getAndWait('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        cy.getAndWait('tbody > :nth-child(3) > :nth-child(4)').contains('No Documents In Queue')

        // Completing Diary chaser to move policy to full cover and check for cert being added to print queue
        cy.getAndWait(':nth-child(1) > .level1').click()
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()

        // Select policy and Documents 
        BOAction.livePoliciesBTN()
        BOAction.selectActionDiaryWithParagonPolicyNumber3()
        
        cy.getAndWait(':nth-child(7) > .btn > span').click()
        BOAction.tickBoxAsReceived()
        cy.getAndWait(':nth-child(2) > :nth-child(6)').should('not.have.text', '')
    })
})
    

    
    


    









   
   
    
















    





