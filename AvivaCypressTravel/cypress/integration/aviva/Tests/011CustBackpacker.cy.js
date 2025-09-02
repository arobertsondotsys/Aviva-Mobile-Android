import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { YourDetails } from "../AvivaPOM/YourDetails"
import { TravelDetails } from "../AvivaPOM/TravelDetails"
import { TravellerDetails } from "../AvivaPOM/TravellerDetails"
import { BeforeYouGetYourQuote } from "../AvivaPOM/BeforeYouGetYourQuote"
import { Declaration } from "../AvivaPOM/Declaration"
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
const YourDetailsPage = new YourDetails()
const TravelDetailsPage = new TravelDetails()
const TravellerDetailsPage = new TravellerDetails
const BeforeYouGetYourQuotePage = new BeforeYouGetYourQuote
const DeclarationPage = new Declaration()
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

        // Complete section 1 "Your Details"
        YourDetailsPage.yourDetailsTitle()
        YourDetailsPage.yourDetailsProposerTitle()
        YourDetailsPage.yourDetailsProposerForename()
        YourDetailsPage.yourDetailsProposerSurname()
        YourDetailsPage.yourDetailsProposerEmail()
        YourDetailsPage.yourDetailsPhone()
        YourDetailsPage.yourDetailsContinue()

        // Complete section 2 "Travel details"
        TravelDetailsPage.travelDetailsTitle()
        TravelDetailsPage.travelDetailsBackpacker()
        TravelDetailsPage.travelDetailsTravellingToWorldwideIncUSA()
        TravelDetailsPage.travelDetailsStartDate()
        TravelDetailsPage.travelDetailsReturnDateBackpacker()
        TravelDetailsPage.travelDetailsWhoTravellingCouple()
        TravelDetailsPage.travelDetailsContinue()

        // // Complete section 3 "Traveller Details"
        TravellerDetailsPage.travellerDetailsTitle()
        TravellerDetailsPage.travellerDetailsProposerDOB()
        TravellerDetailsPage.travellerDetailsPMINo()
        TravellerDetailsPage.travellerDetailsAdult2DOB()
        TravellerDetailsPage.travellerDetailsAdult2PMINo()
        TravellerDetailsPage.travellerDetailsContinue()

        // // Complete section 4 "Before You Get Your Quote"
        BeforeYouGetYourQuotePage.beforeYouGetYourQuoteTitle()
        BeforeYouGetYourQuotePage.beforeYouGetYourQuoteMarketingNo()
        BeforeYouGetYourQuotePage.beforeYouGetYourQuoteIAgree()
        BeforeYouGetYourQuotePage.beforeYouGetYourQuoteContinue()

        // // Complete section 5 "Declaration Page"
        DeclarationPage.declarationTitle()
        DeclarationPage.declarationIAgree()
        DeclarationPage.declarationContinue()

        
    })
})