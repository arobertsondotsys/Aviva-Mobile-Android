import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { Login } from "../AvivaPOM/Login"
import { YourDetails } from "../AvivaPOM/YourDetails"
import { TravelDetails } from "../AvivaPOM/TravelDetails"
import { TravellerDetails } from "../AvivaPOM/TravellerDetails"
import { BeforeYouGetYourQuote } from "../AvivaPOM/BeforeYouGetYourQuote"
import { Declaration } from "../AvivaPOM/Declaration"
import { TravelQuotePage } from "../AvivaPOM/TravelQuotePage"
import { TravellerNames } from "../AvivaPOM/TravellerNames"
import { AboutTheDriversPQ2 } from "../AvivaPOM/AboutTheDriversPQ2"
import { YourInsHistoryAndIncepDetsPQ3 } from "../AvivaPOM/YourInsHistoryAndIncepDetsPQ3"
import { PaymentTypes } from "../AvivaPOM/PaymentTypes"
import { PaymentScreen } from "../AvivaPOM/PaymentScreen"
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
const YourDetailsPage = new YourDetails()
const TravelDetailsPage = new TravelDetails()
const TravellerDetailsPage = new TravellerDetails
const BeforeYouGetYourQuotePage = new BeforeYouGetYourQuote
const DeclarationPage = new Declaration()
const TravelQuotePageAndExtras = new TravelQuotePage()
const TravellerNamesPage = new TravellerNames()
const AboutTheDriversPage = new AboutTheDriversPQ2()
const YourInsHistoryAndIncepDetsPage = new YourInsHistoryAndIncepDetsPQ3()
const PaymentTypesPage = new PaymentTypes()
const PaymentPage = new PaymentScreen()
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
        TravelDetailsPage.travelDetailsMultiTrip()
        TravelDetailsPage.travelDetailsTravellingToWorldwideExcUSA()
        TravelDetailsPage.travelDetailsCoverStartDate()
        TravelDetailsPage.travelDetailsWhoTravellingFamily()
        TravelDetailsPage.travelDetailsContinue()

        // Complete section 3 "Traveller Details"
        TravellerDetailsPage.travellerDetailsTitle()
        TravellerDetailsPage.travellerDetailsNoOfAdults2()
        TravellerDetailsPage.travellerDetailsProposerDOB()
        TravellerDetailsPage.travellerDetailsPMINo()
        TravellerDetailsPage.travellerDetailsAdult2DOB()
        TravellerDetailsPage.travellerDetailsAdult2PMINo()
        TravellerDetailsPage.travellerDetailsNoOfChildren()
        TravellerDetailsPage.travellerDetailsChild1DOB()
        TravellerDetailsPage.travellerDetailsChild2DOB()
        TravellerDetailsPage.travellerDetailsChild3DOB()
        TravellerDetailsPage.travellerDetailsChild4DOB()
        TravellerDetailsPage.travellerDetailsChild4Education()
        TravellerDetailsPage.travellerDetailsChild5DOB()
        TravellerDetailsPage.travellerDetailsChild5Education()
        // TravellerDetailsPage.travellerDetailsChild6DOB()
        // TravellerDetailsPage.travellerDetailsChild7DOB()
        TravellerDetailsPage.travellerDetailsContinue()

        // Complete section 4 "Before You Get Your Quote"
        BeforeYouGetYourQuotePage.beforeYouGetYourQuoteTitle()
        BeforeYouGetYourQuotePage.beforeYouGetYourQuoteMarketingNo()
        BeforeYouGetYourQuotePage.beforeYouGetYourQuoteIAgree()
        BeforeYouGetYourQuotePage.beforeYouGetYourQuoteContinue()

        // Complete section 5 "Declaration Page"
        DeclarationPage.declarationTitle()
        DeclarationPage.declarationIAgree()
        DeclarationPage.declarationContinue()

        // Complete section 6 "Quote Page"
        TravelQuotePageAndExtras.travelQuotePageTitle()
        TravelQuotePageAndExtras.travelQuotePageWinterSportsCover()
        TravelQuotePageAndExtras.travelQuotePageBuyNow()

        // Complete section 7 "Traveller Names/Details"
        TravellerNamesPage.travellerNamesTitle()
        TravellerNamesPage.travellerNamesTitle1()
        TravellerNamesPage.travellerNamesAdult2Firstname()
        TravellerNamesPage.travellerNamesAdult2Surname()
        TravellerNamesPage.travellerNamesChild1Firstname()
        TravellerNamesPage.travellerNamesChild1Surname()
        TravellerNamesPage.travellerNamesChild2Firstname()
        TravellerNamesPage.travellerNamesChild2Surname()
        TravellerNamesPage.travellerNamesChild3Firstname()
        TravellerNamesPage.travellerNamesChild3Surname()
        TravellerNamesPage.travellerNamesChild4Firstname()
        TravellerNamesPage.travellerNamesChild4Surname()
        TravellerNamesPage.travellerNamesChild5Firstname()
        TravellerNamesPage.travellerNamesChild5Surname()
        TravellerNamesPage.travellerNamesEnterAddress()
        TravellerNamesPage.travellerNamesIAgree()
        TravellerNamesPage.travellerNamesContinue()

        // Complete section 8 "Payment Type"
        PaymentTypesPage.paymentTypeAgentNoPay()
        PaymentTypesPage.paymentTypeAgentNoPayContinue()

        // Section 9 "Thank you Page"
        ThankYouPage.thankyouHeading()
        ThankYouPage.retreiveTravelWelcomePackPolicyNumber()
    })
})