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

        // // Complete section 3 "Traveller Details"
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

        // // Complete section 4 "Before You Get Your Quote"
        BeforeYouGetYourQuotePage.beforeYouGetYourQuoteTitle()
        BeforeYouGetYourQuotePage.beforeYouGetYourQuoteMarketingNo()
        BeforeYouGetYourQuotePage.beforeYouGetYourQuoteIAgree()
        BeforeYouGetYourQuotePage.beforeYouGetYourQuoteContinue()

        // // Complete section 5 "Declaration Page"
        DeclarationPage.declarationTitle()
        DeclarationPage.declarationIAgree()
        DeclarationPage.declarationContinue()

        TravelQuotePageAndExtras.travelQuotePageTitle()
        TravelQuotePageAndExtras.travelQuotePageWinterSportsCover()
        TravelQuotePageAndExtras.travelQuotePageBuyNow()

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

        PaymentPage.selectPaymentMethod()

        ThankYouPage.thankyouHeading()
        ThankYouPage.retreiveTravelWelcomePackPolicyNumber()
    })
})