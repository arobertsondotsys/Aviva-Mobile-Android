import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { Login } from "../AvivaPOM/Login"
import { AboutYou } from "../AvivaPOM/AboutYou"
import { PersonalDetails } from "../AvivaPOM/PersonalDetails"
import { InsuranceDetails } from "../AvivaPOM/InsuranceDetails"
import { CarDetails } from "../AvivaPOM/CarDetails"
import { AdditionalDrivers } from "../AvivaPOM/AdditionalDrivers"
import { YourClaims } from "../AvivaPOM/YourClaims"
import { QuotePage } from "../AvivaPOM/QuotePage"
import { AboutTheDriversPQ2 } from "../AvivaPOM/AboutTheDriversPQ2"
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
const QuotePageAndExtras = new QuotePage()
const AboutTheDriversPage = new AboutTheDriversPQ2()
const ThankYouPage = new ThankYouScreen()
const day = require('dayjs')

describe('Policy Purchase with NYY', () => {
    it('should complete the policy purchase process with NYY', () => {
        Server.Server()
        
        // Log in
        Logins.company()
        Logins.username()
        Logins.password()
        Logins.loginButton()
        
        // Revert new window that opens back to original window 
        cy.get('#ctl00_ContentPlaceHolder1_ProductList').select(1)
        cy.window().then((win) => {
            const orig = win.open
            win.open = function (url, target, features) {
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
        cy.wait(2000)
        PersonalDetailsPage.addressSuggest()
        PersonalDetailsPage.addressSelect()
        PersonalDetailsPage.addressConfirm()
        PersonalDetailsPage.proposerDOB()
        PersonalDetailsPage.proposerEmployStatus()
        PersonalDetailsPage.licenceType()
        PersonalDetailsPage.licenceYears()
        PersonalDetailsPage.personlaDetailsContinue()
        cy.wait(2000)
        
        // Complete section 3 "Insurance details"
        InsuranceDetailsPage.insuranceDetailsTitle()
        BOAction.notes()
        InsuranceDetailsPage.drivingExp()
        cy.wait(2000)
        InsuranceDetailsPage.drivingExpYears()
        InsuranceDetailsPage.carUse()
        InsuranceDetailsPage.insuranceDetailsContinue()
        
        // Complete section 4 "Car details"
        CarDetailsPage.carDetailsTitle()
        BOAction.notes()
        CarDetailsPage.carRegYes()
        CarDetailsPage.carRegInput()
        CarDetailsPage.findCarBTN()
        cy.wait(3000)
        CarDetailsPage.confirmCarBTN()
        cy.wait(3000)
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
        cy.wait(2000)
        YourClaimsPage.claimsFalse1st()
        cy.wait(2000)
        YourClaimsPage.claimsContinue()

        // Complete section 7 "Penalty points"
        cy.get('#div7').contains('Penalty points')
        cy.get('#ctl00_divNotes > .a-button').should('be.visible')
        cy.get('[id*="IsPenaltyPoints"][value^="No"]').click({force: true})
        cy.get('#Continue7').click({force: true})

        // Complete section 8 "Cover start date"
        cy.get('#div8').contains('Cover start date')
        cy.get('#ctl00_divNotes > .a-button').should('be.visible')
        cy.get('#ctl00_MainContent_StartDate').type(day().format('DD/MM/YYYY'), {force: true})
        cy.get('#IsHome-False > .a-radio > .a-radio__label').click({force: true})
        cy.get('#IsHouseholdCar-False > .a-radio > .a-radio__label').click({force: true})
        cy.get('#RecieveOffers-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
        cy.get('.a-checkbox__label').should('not.be.visible')
        cy.get('#ctl00_MainContent_Continue8').click({force: true})
        cy.wait(8000)

        // Quote screen - Buy now 
        cy.get('.m-heading-group__item').contains('Aviva car insurance quote')
        cy.get('#ctl00_divNotes > .a-button').should('be.visible')
        QuotePageAndExtras.buyNowBtn()
        
        // Complete post quote 1 "About your car"
        cy.get('#div1').contains('About your car')
        cy.get('#ctl00_divNotes > .a-button').should('be.visible')
        cy.get('#IsOwner-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
        cy.get('#IsPrivate-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
        cy.get('#ctl00_MainContent_btnContinueVehicle').click({force: true})

        // Complete post quote 2 "About the drivers"
        cy.get('#div2').contains('About the drivers')
        cy.get('#ctl00_divNotes > .a-button').should('be.visible')
        cy.get('#IsResident-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
        AboutTheDriversPage.postQuote2IsMainDriverTrue()
        AboutTheDriversPage.postQuote2IsNotOtherCarTrue()
        AboutTheDriversPage.postQuote2IsNotOtherInsTrue()
        AboutTheDriversPage.postQuote2IsNoConvictionTrue()
        AboutTheDriversPage.postQuote2IsNoDisqualificationTrue()
        AboutTheDriversPage.postQuote2IsNoRefusalTrue()
        AboutTheDriversPage.postQuote2IsNoIncreaseTrue()
        AboutTheDriversPage.postQuote2IsNoMedicalTrue()
        cy.get('#ctl00_MainContent_DriverRepeater_ctl00_DriverNum').type('123456789', {force: true})
        AboutTheDriversPage.postQuote2Continue()

        // Complete post quote 3 "Your insurance history and inception details" setting NYY to preferences
        cy.get('#div3').contains('Your insurance history and inception details')
        cy.get('#ctl00_divNotes > .a-button').should('be.visible')
        cy.get('#IsNCDROI-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
        cy.get('#IsNotOtherNCD-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
        cy.get('#IsWithinExpiry-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
        cy.wait(2000)
        cy.get('#IsMyAviva-False > .a-radio > .a-radio__label').click({force: true})
        cy.wait(2000)
        cy.get('#IsPostCert-yes').click({force: true})
        cy.get('#IsPostDocs-yes').click({force: true})
        
        cy.get('.a-checkbox__label').should('not.exist')
        cy.get('#ctl00_MainContent_btnContinueToPayment').click({force: true})
        cy.wait(6000)

        // Payment type screen - selecting "No payment required"
        cy.get('#ctl00_divNotes > .a-button').should('be.visible')
        cy.wait(4000)
        cy.get('#ctl00_MainContent_PaymentType').select(2)
        cy.get('#ctl00_MainContent_NoPay').click({force: true})

        // Diary & correspondence page 
        cy.get('.a-heading--1').contains('Internal Diary and Correspondence')
        cy.get('#ctl00_divNotes > .a-button').should('be.visible')
        cy.get('#ctl00_MainContent_Summary').click({force: true})

        // Thank you page
        ThankYouPage.thankyouHeading()
        cy.get('#ctl00_divNotes > .a-button').should('be.visible')
        
        // Check B/O preferences match Y/N/N
        Server.Server()
        cy.get(':nth-child(1) > .level1').click()
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()

        // Select policy and Documents 
        BOAction.livePoliciesBTN()
        BOAction.selectActionDocumentsWithPolicyNumber()
        
        cy.get('#ctl00_ContentPlaceHolder1_btnCorrespondence').click()
        cy.get('#ctl00_ContentPlaceHolder1_rblDocsByPortal_1').should('have.value', 'False')
        cy.get('#ctl00_ContentPlaceHolder1_rblCertByPost_0').should('have.value', 'True')
        cy.get('#ctl00_ContentPlaceHolder1_rblDocsByPost_0').should('have.value', 'True')
        cy.get('#CorrespondenceModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        cy.wait(60000)
        cy.get('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Schedule')
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Statement Of Fact')
        cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter Temp Cover')

        // Completing Diary chaser to move policy to full cover
        cy.get(':nth-child(1) > .level1').click()
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()

        // Select policy and Documents 
        BOAction.livePoliciesBTN()
        BOAction.selectActionDiaryWithPolicyNumber()
        cy.get(':nth-child(7) > .btn > span').click()
        cy.get('#ctl00_ContentPlaceHolder1_DocumentGrid_ctl02_IsReceived').click()
        cy.get(':nth-child(2) > :nth-child(6)').should('not.have.text', '')

        // Back dating policy 
        Server.Server()
        BOAction.home()
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        BOAction.unlockBTN()

        BOAction.livePoliciesBTN()
        cy.get('[class^="dropdown policyTools"]').last().click({force:true}).contains('Age Policy').invoke("removeAttr", "target").click({force:true})

        cy.get('#ctl00_ContentPlaceHolder1_BackDateDay').invoke('val').then(dayString => {
            const day = parseInt(dayString)
            cy.get('#ctl00_ContentPlaceHolder1_BackDateDay').select(day + 2)
        })
        cy.get('#ctl00_ContentPlaceHolder1_BackDateYear').select('2023')
        cy.get('#ctl00_ContentPlaceHolder1_UpdateDate').click()
        cy.get('.alert').contains('Policy has been backdated')

        // Generating and Printing renewal
        Server.Server()
        BOAction.home()
        Logins.email()
        BOAction.searchButton()
        BOAction.policySelectButton()
        cy.get('[class^="btn btn-sm btn-cta btn-sm"]').last().click()
        
        cy.get('.bg-info').should('contain', 'RNL')
        cy.get('.bg-info').should('not.contain', '€ 0')
        
        cy.get('[class^="badge rounded-pill text-bg-success"]').last().invoke('text').then(policyNumString => {
            const policy = policyNumString
            cy.get('[class^="level2 dropdown-item dynamic"][title^="Renewals"]').click({force: true})
            cy.get('#ctl00_ContentPlaceHolder1_PolicyNumber').type(policy)
        })
        
        cy.get('#ctl00_ContentPlaceHolder1_Search').click()
        cy.wait(6000)
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
    })
})