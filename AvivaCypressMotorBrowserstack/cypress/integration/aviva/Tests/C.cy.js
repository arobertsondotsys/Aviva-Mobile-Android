import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { AboutYou } from "../AvivaPOM/AboutYou"
import { AboutYouEx} from "../AvivaPOM/AboutYouEx"
import { PersonalDetails } from "../AvivaPOM/PersonalDetails"
import { PersonalDetailsEx } from "../AvivaPOM/PersonalDetailsEx"
import { InsuranceDetails } from "../AvivaPOM/InsuranceDetails"
import { InsuranceDetailsEx } from "../AvivaPOM/InsuranceDetailsEx"
import { CarDetails } from "../AvivaPOM/CarDetails"
import { CarDetailsEx } from "../AvivaPOM/CarDetailsEx"
import { AdditionalDrivers } from "../AvivaPOM/AdditionalDrivers"
import { YourClaims } from "../AvivaPOM/YourClaims"
import { PenaltyPoints } from "../AvivaPOM/PenaltyPoints"
import { CoverStartDate } from "../AvivaPOM/CoverStartDate"
import { CoverStartDateEx } from "../AvivaPOM/CoverStartDateEx"
import { QuotePage } from "../AvivaPOM/QuotePage"
import { AboutYourCarPQ1 } from "../AvivaPOM/AboutYourCarPQ1"
import { AboutYourCarPQ1Ex } from "../AvivaPOM/AboutYourCarPQ1Ex"
import { AboutTheDriversPQ2 } from "../AvivaPOM/AboutTheDriversPQ2"
import { AboutTheDriversPQ2Ex } from "../AvivaPOM/AboutTheDriversPQ2Ex"
import { YourInsHistoryAndIncepDetsPQ3 } from "../AvivaPOM/YourInsHistoryAndIncepDetsPQ3"
import { YourInsHistoryAndIncepDetsPQ3Ex } from "../AvivaPOM/YourInsHistoryAndIncepDetsPQ3Ex"
import { PaymentScreen } from "../AvivaPOM/PaymentScreen"
import { ThankYouScreen } from "../AvivaPOM/ThankYouScreen"
import 'cypress-real-events/support'

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const AboutYouPage = new AboutYou()
const AboutYouExcel = new AboutYouEx()
const PersonalDetailsPage = new PersonalDetails()
const PersonalDetailsExcel = new PersonalDetailsEx()
const InsuranceDetailsPage = new InsuranceDetails()
const InsuranceDetailsExcel = new InsuranceDetailsEx()
const CarDetailsPage = new CarDetails()
const CarDetailsExcel = new CarDetailsEx()
const AdditionalDriversPage = new AdditionalDrivers()
const YourClaimsPage = new YourClaims()
const PenaltyPointsPage = new PenaltyPoints()
const CoverStartDatePage = new CoverStartDate()
const CoverStartDateExcel = new CoverStartDateEx()
const QuotePageAndExtras = new QuotePage()
const AboutYourCarPage = new AboutYourCarPQ1()
const AboutYourCarExcel = new AboutYourCarPQ1Ex()
const AboutTheDriversPage = new AboutTheDriversPQ2()
const AboutTheDriversExcel = new AboutTheDriversPQ2Ex()
const YourInsHistoryAndIncepDetsPage = new YourInsHistoryAndIncepDetsPQ3()
const YourInsHistoryAndIncepDetsExcel = new YourInsHistoryAndIncepDetsPQ3Ex()
const PaymentPage = new PaymentScreen()
const ThankYouPage = new ThankYouScreen()
const writeFilePath = 'cypress/fixtures/PolicyNumbers.xlsx'
const writeSheetName = 'Sheet1'

const excelsheet = require('../../../fixtures/Quotedetails.json')

describe('Customer can purchase a policy via website (Excel driven)', () => {

    excelsheet.forEach((excel, idx) => {
        it(`should complete the process of purchasing a policy from Excel data`, () => {
            
            Server.Server2()
            BOAction.removeAttr()
            BOAction.cookiesAccept()

            // Section 1 "About you"
            AboutYouPage.aboutYouTitle()
            AboutYouExcel.proposerTitle(excel.Title)
            AboutYouExcel.proposerForename(excel.Forename)
            AboutYouExcel.proposerSurname(excel.Surname)
            AboutYouExcel.proposerEmail(excel.Email)
            AboutYouExcel.phone(excel.Phone)
            AboutYouPage.aboutYouContinue()

            // Section 2 "Personal details"
            PersonalDetailsPage.personalDetailsTitle()
            PersonalDetailsExcel.addressInput(excel.Address)
            PersonalDetailsPage.addressSuggest()
            PersonalDetailsPage.addressSelect()
            PersonalDetailsPage.addressConfirm()
            PersonalDetailsExcel.proposerDOB(excel.DOB)
            PersonalDetailsExcel.proposerEmployStatus(excel.EmploymentStatus, excel.Occupation)
            PersonalDetailsExcel.licenceType(excel.LicenceType, excel.CountryObtained)
            PersonalDetailsExcel.licenceYears(excel.LicenceYears)
            PersonalDetailsPage.personlaDetailsContinue()

            // Section 3 "Insurance details"
            InsuranceDetailsPage.insuranceDetailsTitle()
            InsuranceDetailsExcel.drivingExp(excel.DrivingExperience, excel.DrivingExpYears)
            InsuranceDetailsPage.insuranceDetailsContinue()

            // Section 4 "Car details"
            CarDetailsPage.carDetailsTitle()
            CarDetailsExcel.regKnown(excel.CarRegKnown)
            CarDetailsExcel.carRegKnown(excel.CarRegKnown,excel.CarReg,excel.Make,excel.Model,excel.FuelType,excel.Year,excel.Transmission)
            CarDetailsExcel.carValueInput(excel.CarValue)
            CarDetailsExcel.carModified(excel.CarMods)

            if (excel.CarMods === true || excel.CarMods === "true") {
            CarDetailsExcel.carModifiedType(excel.CarModType)
            }
            
            CarDetailsPage.carDetailsContinue()

            // Section 5 "Additional drivers"
            AdditionalDriversPage.additionalDriversHeading()
            AdditionalDriversPage.additionalDriversFalse()
            AdditionalDriversPage.additionalDriversContinue()

            // Section 6 "Your claims"
            YourClaimsPage.claimsHeading()
            YourClaimsPage.claimsFalse1st()
            YourClaimsPage.claimsContinue()

            // Section 7 "Penalty points"
            PenaltyPointsPage.ppHeading()
            PenaltyPointsPage.ppFalse1st()
            PenaltyPointsPage.ppContinue()

            // Section 8 "Cover start date"
            CoverStartDatePage.coverStartHeading()
            CoverStartDateExcel.coverStartDate(excel.CoverStartDate)
            CoverStartDatePage.coverStartHaveHomeIns()
            CoverStartDatePage.coverStartHaveCarIns()
            CoverStartDatePage.coverStartMarketing()
            CoverStartDatePage.coverStartCustomerQuote()
            CoverStartDatePage.coverStartContinue()

            // Quote screen - Buy now 
            QuotePageAndExtras.quotePageHeading()
            QuotePageAndExtras.buyNowBtn()

            // Post quote 1 "About your car"
            AboutYourCarPage.postQuote1Heading()
            AboutYourCarExcel.carRegManual(excel.CarRegKnown,excel.CarReg)
            AboutYourCarPage.postQuote1OwnCar()
            AboutYourCarPage.postQuote1PrivateIns()
            AboutYourCarPage.postQuote1Continue()

            // Post quote 2 "About the drivers"
            AboutTheDriversPage.postQuote2Heading()
            AboutTheDriversExcel.postQuote2IsResident(excel.IsResident)
            AboutTheDriversExcel.postQuote2IsMainDriver(excel.IsMainDriver)
            AboutTheDriversExcel.postQuote2IsNotOtherCar(excel.NotOtherCarIns)
            AboutTheDriversExcel.postQuote2IsNotOtherIns(excel.NoConvictions)
            AboutTheDriversExcel.postQuote2IsNoConviction(excel.NoRefusal)
            AboutTheDriversExcel.postQuote2IsNoDisqualification(excel.NoDisqualifications)
            AboutTheDriversExcel.postQuote2IsNoRefusal(excel.NoRefusal)
            AboutTheDriversExcel.postQuote2IsNoIncrease(excel.NoIncrease)
            AboutTheDriversExcel.postQuote2IsNoMedical(excel.NoMedical)
            AboutTheDriversExcel.postQuote2DriverNumber(excel.DriverNumber)
            AboutTheDriversPage.postQuote2Continue()

            // Post quote 3 "Your insurance history and inception details"
            YourInsHistoryAndIncepDetsPage.postQuote3Heading()
            YourInsHistoryAndIncepDetsExcel.postQuote3NCDROITrue(excel.DrivingExperience)
            YourInsHistoryAndIncepDetsExcel.postQuote3NoOtherNCDTrue(excel.DrivingExperience)
            YourInsHistoryAndIncepDetsExcel.postQuote3WithinExpiryTrue(excel.DrivingExperience)
            YourInsHistoryAndIncepDetsPage.postQuote3IsMyAvivaTrue()
            YourInsHistoryAndIncepDetsPage.postQuote3CustomerQuoteTsAndCs()
            YourInsHistoryAndIncepDetsPage.postQuote3Continue()

            // Payment screen
            //PaymentPage.paymentCardQAWithCheck()
            PaymentPage.selectPaymentMethod()

            // Thank you page
            cy.wait(2000)
            ThankYouPage.thankyouHeading()

            cy.get('.m-card-content__inner > p > strong').invoke('text').then((text) => {
            const policyNumber = text.match(/\d+/)[0];
            cy.task('writePolicyNumberToExcel', {
                filePath: writeFilePath,
                sheetName: writeSheetName,
                rowIndex: idx, // idx matches the row in your Excel data
                policyNumber: policyNumber
                }).then(() => {
                    cy.log(`Policy number ${policyNumber} written to Excel at row ${idx + 2}`);
                    
                })
            })
        })
    })
})