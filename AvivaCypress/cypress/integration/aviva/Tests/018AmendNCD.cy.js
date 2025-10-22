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

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
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

describe('Agent can Amend an NCD', () => {
    it('should complete the process of amending an NCD', () => {
        Server.Server()
        
        // Log in
        Logins.company()
        Logins.username()
        Logins.password()
        Logins.loginButton()

        // Revert new window that opens back to original window 
        BOAction.agentQuote()
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
        YourClaimsPage.claimsHeading()
        BOAction.notes()
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
        
        Server.Server()
        
        // Log in
        BOAction.home()

        // Search for Customer file
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        
        // Select policy and Documents 
        BOAction.livePoliciesBTN()
        
        BOAction.selectActionAmendNCDWithPolicyNumber()
          
        // Amend NCD to 40% & Select Cover start date 
        //BOAction.cookiesAccept()
        cy.wait(2000)
        cy.getAndWait('#ctl00_MainContent_ddlNCDPercent').select(5, {force:true})
        cy.getAndWait('#ctl00_MainContent_Continue3').click()
        cy.wait(6000)
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
        cy.wait(10000)
        cy.contains('View premium breakdown').click()
        cy.get('[data-origin="#SinglePaymentBreakdown"], #ctl00_MainContent_PermBreakdown').contains('Step-back NCD')
        //cy.getAndWait('.o-modal__cancel').click()
        
        MTABOAction.permMTABuyNow()
        
        YourInsHistoryAndIncepDetsPage.postQuote3Continue()
         PaymentTypesPage.paymentTypeAgentNoPay()
        PaymentTypesPage.paymentTypeAgentCheque()
        
        // Thank you page
        cy.getAndWait('.m-heading-group__item').should('have.text', 'Thank you')
    })

    it('should fail to amend an NCD', () => {
        Server.Server()

        // Log in
        Logins.company()
        Logins.username()
        Logins.password()
        Logins.loginButton()

        // Search for Customer file
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        
        // Select policy and Documents 
        BOAction.livePoliciesBTN()
        
        BOAction.selectActionAmendNCDWithPolicyNumber()
          
        // Amend NCD to 40% & Select Cover start date 
        BOAction.cookiesAccept()
        cy.getAndWait('#ctl00_MainContent_ddlNCDPercent').select(5)
        cy.getAndWait('#ctl00_MainContent_Continue3').click()
        cy.wait(2000)
        cy.getAndWait('#ctl00_MainContent_StartDate').type(day().add(1, 'day').format('DD/MM/YYYY'))
        cy.getAndWait('#ctl00_MainContent_NCDStartTime').type('13:00')
        CoverStartDatePage.coverStartContinue()

        cy.getAndWait('#ctl00_MainContent_CV__StartDate').should('contain', 'NCD can not start before the effective date of the latest adjustment')
    })
})

