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

describe('Agent can purchase a policy via back office', () => {
    it('should complete the policy purchase process', () => {
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
        CoverStartDatePage.coverStartHaveHomeInsTrue()
        CoverStartDatePage.coverStartHaveCarInsTrue()
        CoverStartDatePage.coverStartPromoCode()
        CoverStartDatePage.coverStartMarketing()
        CoverStartDatePage.coverStartContinue()

        // Quote screen - Buy now 
        QuotePageAndExtras.quotePageHeading()
        BOAction.notes()
        QuotePageAndExtras.quotePageAddOpenDrive()
        QuotePageAndExtras.quotePageExcess125()
        QuotePageAndExtras.quotePageAddJourneywise()
        QuotePageAndExtras.quotePagePNCDStepBack()
        // cy.pause()
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
        YourInsHistoryAndIncepDetsPage.postQuote3OtherCar()
        YourInsHistoryAndIncepDetsPage.postQuote3OtherHome()
        YourInsHistoryAndIncepDetsPage.postQuote3IsMyAvivaFalse()
        YourInsHistoryAndIncepDetsPage.postQuote3PostCert()
        YourInsHistoryAndIncepDetsPage.postQuote3PostDocs()
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

        Server.Server()
        BOAction.home()

        // Search for Customer file
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()

        // Select policy and Scrutiny
        // BOAction.livePoliciesBTN()
        
        // cy.get('[class^="dropdown selectAction"]').last().click().contains('Scrutiny').invoke("removeAttr", "target").click({force:true})
        // cy.get('#ctl00_ContentPlaceHolder1_Edit').click()
        // cy.get('#ctl00_ContentPlaceHolder1_chkScrutiny').click()
        // cy.get('#ctl00_ContentPlaceHolder1_ShowContinuePopup').click()
        // cy.get('#ctl00_ContentPlaceHolder1_Save > span').click()
        // cy.wait(2000)

        // cy.go('back')

        BOAction.livePoliciesBTN()
        BOAction.policyToolsAgePolicyWithPolicyNumber()

        cy.get('#ctl00_ContentPlaceHolder1_BackDateDay').invoke('val').then(dayString => {
            const day = parseInt(dayString)
            cy.get('#ctl00_ContentPlaceHolder1_BackDateDay').select(day + 2)
        })

        // cy.get('#ctl00_ContentPlaceHolder1_BackDateMonth').select(6)
        cy.get('#ctl00_ContentPlaceHolder1_BackDateYear').select('2023')
        cy.get('#ctl00_ContentPlaceHolder1_UpdateDate').click()

        cy.go('back')
        cy.go('back')

        cy.get('#ctl00_ContentPlaceHolder1_LockCustomer').click()

        cy.get('[class^="btn btn-sm btn-cta btn-sm"]').last().click()

        cy.get('.bg-info').should('contain', 'RNL')
        cy.get('.bg-info').should('not.contain', '€ 0')
        
        cy.get('[class^="badge rounded-pill text-bg-success"]').last().invoke('text').then(policyNumString => {
            const policy = policyNumString
            cy.get('[class^="level2 dropdown-item dynamic"][title^="Renewals"]').click({force: true})
            cy.get('#ctl00_ContentPlaceHolder1_PolicyNumber').type(policy)
        })
        
        cy.get('#ctl00_ContentPlaceHolder1_Search').click()
        cy.get('#ctl00_ContentPlaceHolder1_RenewalGrid_ctl02_checkRenewal').click()
        cy.get('#ctl00_ContentPlaceHolder1_BatchPrint').click()

        // Checking for renewal invite email in docs
        cy.get('#ctl00_ContentPlaceHolder1_RenewalGrid_ctl02_RecallPolicy').click()
        BOAction.livePoliciesBTN()

        BOAction.selectActionDocumentsWithPolicyNumber()
        
        // Purchase renewal quote
        cy.get('tbody > :nth-child(4) > :nth-child(4)').should('contain', 'Renewal Invite Email')
        cy.go('back')
        BOAction.livePoliciesBTN()

        // BOAction.livePoliciesBTN()
        // cy.get('[class^="dropdown selectAction"]').last().click().contains('Renewal').invoke("removeAttr", "target").click({force:true})

        // BOAction.cookiesAccept()
        // cy.get('#ctl00_MainContent_Continue8').click()

        // cy.get('#ctl00_MainContent_btnShowPremiumAdjustment').click()
        // cy.get('#ctl00_MainContent_ddlPremiumAdjustmentType').select(1)
        // cy.get('ctl00_MainContent_txtAdjustmentAmount').type('50')
        // cy.get('#ctl00_MainContent_btnRecalculate').click()
        // cy.wait(2000)
        // cy.get('#ctl00_MainContent_btnApplyAdjustment').click()

        // cy.get('#ctl00_MainContent_btnShowPremiumAdjustment').click()
        // cy.get('#ctl00_MainContent_ddlPremiumAdjustmentType').select(2)
        // cy.get('ctl00_MainContent_txtAdjustmentAmount').type('50')
        // cy.get('#ctl00_MainContent_btnRecalculate').click()
        // cy.wait(2000)
        // cy.get('#ctl00_MainContent_btnApplyAdjustment').click()

        // cy.get('#ctl00_MainContent_btnOverrideQuote').click()
    })
})