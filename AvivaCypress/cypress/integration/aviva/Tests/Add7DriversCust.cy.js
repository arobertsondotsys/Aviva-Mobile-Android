import { Global } from "../AvivaPOM/Page Actions/POMActions"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_Stuff = new Global()
const day = require('dayjs')

describe('Customer to add 7 drivers and check errors', () => {
    it('should complete the process of adding 7 drivers and checking for errors', () => {
        Global_Stuff.Server2()
        
        // Revert new window that opens back to original window 
        Global_Stuff.removeAttr()

        // Accept cookies
        Global_Stuff.cookiesAccept()

        // Complete section 1 "About you"
        Global_Stuff.aboutYouTitle()
        Global_Stuff.proposerTitle()
        Global_Stuff.proposerForename()
        Global_Stuff.proposerSurname()
        Global_Stuff.proposerEmail()
        Global_Stuff.phone()
        Global_Stuff.aboutYouContinue()

        // Complete section 2 "Personal details"
        Global_Stuff.personalDetailsTitle()
        Global_Stuff.addressInput()
        Global_Stuff.addressSuggest()
        Global_Stuff.addressSelect()
        Global_Stuff.addressConfirm()
        Global_Stuff.proposerDOB()
        Global_Stuff.proposerEmployStatus()
        Global_Stuff.licenceType()
        Global_Stuff.licenceYears()
        Global_Stuff.personlaDetailsContinue()

        // Complete section 3 "Insurance details"
        Global_Stuff.insuranceDetailsTitle()
        Global_Stuff.drivingExp()
        Global_Stuff.drivingExpYears()
        Global_Stuff.insuranceDetailsContinue()

        // Complete section 4 "Car details"
        Global_Stuff.carDetailsTitle()
        Global_Stuff.carRegYes()
        Global_Stuff.carRegInput()
        Global_Stuff.findCarBTN()
        Global_Stuff.confirmCarBTN()
        Global_Stuff.carValueInput()
        Global_Stuff.carModifiedFalse()
        Global_Stuff.carDetailsContinue()

        // Complete section 5 "Additional drivers"
        Global_Stuff.additionalDriversHeading()
        Global_Stuff.additionalDriversTrue()
        Global_Stuff.additionalDriver1Title()
        Global_Stuff.additionalDriver1Forename()
        Global_Stuff.additionalDriver1Surname()
        Global_Stuff.additionalDriver1DOB()
        Global_Stuff.additionalDriver1EmploymentStatus()
        Global_Stuff.additionalDriver1LicenceType()
        Global_Stuff.additionalDriver1LicenceYears()
        Global_Stuff.additionalDriver1Relationship()
        Global_Stuff.additionalDriver1SpouseOwnVehFalse()
        Global_Stuff.additionalDriver1Save()
        
        Global_Stuff.additionalDriver2()
        Global_Stuff.additionalDriver3()
        Global_Stuff.additionalDriver4()
        Global_Stuff.additionalDriver5()
        Global_Stuff.additionalDriver6()
        Global_Stuff.additionalDriver7()

        Global_Stuff.additionalDriversContinue()
        
        // Complete section 6 "Your claims"
        Global_Stuff.additionalDriverAddedHeading1()
    })
})