import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
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
import { PaymentScreen } from "../AvivaPOM/PaymentScreen"
import { ThankYouScreen } from "../AvivaPOM/ThankYouScreen"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
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
const PaymentPage = new PaymentScreen()
const ThankYouPage = new ThankYouScreen()

describe('Customer can purchase a policy via website', () => {
    it('should complete the process of purchasing a policy', () => {
        Server.Server2()
        
        // Revert new window that opens back to original window 
        BOAction.removeAttr()

        // Accept cookies
        BOAction.cookiesAccept()

        // Complete section 1 "About you"
        cy.wait(1000)
        const honeypots = [
        "emailConfirm",
        "userPhone",
        "addressLineCounty",
        "referralCode",
        "extraComments"
        ]

        honeypots.forEach((field) => {
        const selector = `input[name="${field}"], textarea[name="${field}"]`
        cy.get('body').then(($body) => {
            if ($body.find(selector).length) {
            cy.get(selector).then(($el) => {
                cy.wrap($el)
                .invoke('attr', 'style', 'display: block !important')
                .type('bot-test')                   
          
            })
            } else {
                cy.log(`Honeypot field "${field}" not found.`)
            }
        })
        })

        AboutYouPage.aboutYouTitle()
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
        InsuranceDetailsPage.drivingExp()
        InsuranceDetailsPage.drivingExpYears()
        InsuranceDetailsPage.insuranceDetailsContinue()

        // Complete section 4 "Car details"
        CarDetailsPage.carDetailsTitle()
        CarDetailsPage.carRegYes()
        CarDetailsPage.carRegInput()
        CarDetailsPage.findCarBTN()
        CarDetailsPage.confirmCarBTN()
        CarDetailsPage.carValueInput()
        CarDetailsPage.carModifiedFalse()
        CarDetailsPage.carDetailsContinue()

        // Complete section 5 "Additional drivers"
        AdditionalDriversPage.additionalDriversHeading()
        AdditionalDriversPage.additionalDriversFalse()
        AdditionalDriversPage.additionalDriversContinue()

        // Complete section 6 "Your claims"
        YourClaimsPage.claimsHeading()
        YourClaimsPage.claimsFalse1stHoneyPot()
        YourClaimsPage.claimsContinue()

        // Complete section 7 "Penalty points"
        PenaltyPointsPage.ppHeading()
        PenaltyPointsPage.ppFalse1st()
        PenaltyPointsPage.ppContinue()

        // Complete section 8 "Cover start date"
        CoverStartDatePage.coverStartHeading()
        CoverStartDatePage.coverStartDate()
        CoverStartDatePage.coverStartHaveHomeIns()
        CoverStartDatePage.coverStartHaveCarIns()
        CoverStartDatePage.coverStartMarketing()
        //CoverStartDatePage.coverStartCallConsent(true)
        CoverStartDatePage.coverStartCustomerQuote()
        CoverStartDatePage.coverStartContinue()

        cy.wait(2000)

        // Assert the URL contains the expected string
        cy.url().should('include', 'ZW~35pBSqPs6Z8zrFLyBnlfKibSOcmM5-1MZVofZeZROafHYYG-sdSzVj1t45OKU')

        // Assert the page contains the error message
        cy.contains('Sorry, we could not proceed').should('be.visible')

    })
})