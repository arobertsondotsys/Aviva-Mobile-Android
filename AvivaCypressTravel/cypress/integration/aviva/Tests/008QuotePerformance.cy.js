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

describe('[Performance] Travel Quote Performance Suite', function () {
  
  beforeEach(() => {
    Server.Server2()
    BOAction.removeAttr()
    BOAction.cookiesAccept()
  })

  it('Measures time to load customer quote homepage', function () {
    cy.window().then((win) => {
      const timing = win.performance.timing;   
      const loadTimeMs = timing.loadEventEnd - timing.navigationStart;
      const loadTimeSec = (loadTimeMs / 1000).toFixed(2)

      cy.log(`Quote Homepage Load Time: ${loadTimeSec} seconds`)
      cy.addTestContext({ title: 'Quote Homepage Load Time',value: `${loadTimeSec} seconds`})
      })
    })

  it('Measures time to populate address box', function () {
    AboutYouPage.aboutYouTitle()
    AboutYouPage.proposerTitle()
    AboutYouPage.proposerForename()
    AboutYouPage.proposerSurname()
    AboutYouPage.proposerEmail()
    AboutYouPage.phone()
    AboutYouPage.aboutYouContinue()

    PersonalDetailsPage.personalDetailsTitle()
    PersonalDetailsPage.addressInput()
    PersonalDetailsPage.addressSuggest()
    let t0   
    PersonalDetailsPage.addressSelect()
    cy.then(() => cy.window().then(w => { t0 = w.performance.now() }))  

    
    cy.get('#searchResult', { timeout: 20000 })
        .should('be.visible')
        .then(() => cy.window().then(w => {
          const ms = w.performance.now() - t0
          const sec = (ms / 1000).toFixed(2)
          cy.log(`Address find Population Time: ${sec} seconds`)
          cy.addTestContext({ title: 'Address Box Population Time', value: `${sec} seconds` })

    }))
})


  it('Measures time to populate car details', function () {
    AboutYouPage.aboutYouTitle()
    AboutYouPage.proposerTitle()
    AboutYouPage.proposerForename()
    AboutYouPage.proposerSurname()
    AboutYouPage.proposerEmail()
    AboutYouPage.phone()
    AboutYouPage.aboutYouContinue()

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

    InsuranceDetailsPage.insuranceDetailsTitle()
    InsuranceDetailsPage.drivingExp()
    InsuranceDetailsPage.drivingExpYears()
    InsuranceDetailsPage.insuranceDetailsContinue()

    CarDetailsPage.carDetailsTitle()
    CarDetailsPage.carRegYes()
    CarDetailsPage.carRegInput()
    let t0
    CarDetailsPage.findCarBTN()
    cy.then(() => cy.window().then(w => { t0 = w.performance.now() }))  
    
    cy.get('#CarSearchResult', { timeout: 80000 })
        .should('be.visible')
        .then(() => cy.window().then(w => {
          const ms = w.performance.now() - t0
          const sec = (ms / 1000).toFixed(2)
          cy.log(`Car find Population Time: ${sec} seconds`)
          cy.addTestContext({ title: 'Car find Population Time', value: `${sec} seconds` })

    }))
})

  it('Measures time to load the full quote page after inputs', function () {
    AboutYouPage.aboutYouTitle()
    AboutYouPage.proposerTitle()
    AboutYouPage.proposerForename()
    AboutYouPage.proposerSurname()
    AboutYouPage.proposerEmail()
    AboutYouPage.phone()
    AboutYouPage.aboutYouContinue()

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

    InsuranceDetailsPage.insuranceDetailsTitle()
    InsuranceDetailsPage.drivingExp()
    InsuranceDetailsPage.drivingExpYears()
    InsuranceDetailsPage.insuranceDetailsContinue()

    CarDetailsPage.carDetailsTitle()
    CarDetailsPage.carRegYes()
    CarDetailsPage.carRegInput()
    CarDetailsPage.findCarBTN()
    CarDetailsPage.confirmCarBTN()
    CarDetailsPage.carValueInput()
    CarDetailsPage.carModifiedFalse()
    CarDetailsPage.carDetailsContinue()

    AdditionalDriversPage.additionalDriversHeading()
    AdditionalDriversPage.additionalDriversFalse()
    AdditionalDriversPage.additionalDriversContinue()

    YourClaimsPage.claimsHeading()
    YourClaimsPage.claimsFalse1st()
    YourClaimsPage.claimsContinue()

    PenaltyPointsPage.ppHeading()
    PenaltyPointsPage.ppFalse1st()
    PenaltyPointsPage.ppContinue()

    CoverStartDatePage.coverStartHeading()
    CoverStartDatePage.coverStartDate()
    CoverStartDatePage.coverStartHaveHomeIns()
    CoverStartDatePage.coverStartHaveCarIns()
    CoverStartDatePage.coverStartMarketing()
    CoverStartDatePage.coverStartCustomerQuote()
    let t0
    CoverStartDatePage.coverStartContinue()
    
    cy.then(() => { t0 = Date.now() })  
    
    cy.get('#ctl00_MainContent_UP_Price', { timeout: 20000 })
        .should('be.visible')
        .then(() => {
          const sec = ((Date.now() - t0) / 1000).toFixed(2)
          cy.log(`Quote price Population Time: ${sec} seconds`)
          cy.addTestContext({ title: 'Quote price Population Time', value: `${sec} seconds` })

    })
  })
})
