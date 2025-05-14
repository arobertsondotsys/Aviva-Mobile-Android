import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { AboutYou } from "../AvivaPOM/AboutYou"
import { PersonalDetails } from "../AvivaPOM/PersonalDetails"
import { InsuranceDetails } from "../AvivaPOM/InsuranceDetails"
import { CarDetails } from "../AvivaPOM/CarDetails"
import { AdditionalDrivers } from "../AvivaPOM/AdditionalDrivers"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
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
const day = require('dayjs')

describe('Customer to add 7 drivers and check errors', () => {
    it('should complete the process of adding 7 drivers and checking for errors', () => {
        Server.Server2()
        
        // Revert new window that opens back to original window 
        BOAction.removeAttr()

        // Accept cookies
        BOAction.cookiesAccept()

        // Complete section 1 "About you"
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
        AdditionalDriversPage.additionalDriversTrue()
        AdditionalDriversPage.additionalDriver1Title()
        AdditionalDriversPage.additionalDriver1Forename()
        AdditionalDriversPage.additionalDriver1Surname()
        AdditionalDriversPage.additionalDriver1DOB()
        AdditionalDriversPage.additionalDriver1EmploymentStatus()
        AdditionalDriversPage.additionalDriver1LicenceType()
        AdditionalDriversPage.additionalDriver1LicenceYears()
        AdditionalDriversPage.additionalDriver1Relationship()
        AdditionalDriversPage.additionalDriver1SpouseOwnVehFalse()
        AdditionalDriversPage.additionalDriver1Save()
        
        AdditionalDriversPage.additionalDriver2()
        AdditionalDriversPage.additionalDriver3()
        AdditionalDriversPage.additionalDriver4()
        AdditionalDriversPage.additionalDriver5()
        AdditionalDriversPage.additionalDriver6()
        AdditionalDriversPage.additionalDriver7()

        AdditionalDriversPage.additionalDriversContinue()
        
        // Complete section 6 "Your claims"
        AdditionalDriversPage.additionalDriverAddedHeading1()
    })
})