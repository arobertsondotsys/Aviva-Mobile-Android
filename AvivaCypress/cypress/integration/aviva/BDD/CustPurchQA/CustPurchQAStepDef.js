import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import { Global } from "../AvivaPOM/Page Actions/POMActions";
//Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) =>
{
    
    return false
})
/// <reference types= "Cypress"/>

const Global_Stuff = new Global

Given('Customer can purchase a policy via website',()=>
{ 
    Global_Stuff.Server2()
    
    //Revert new window that open back to original window 
    Global_Stuff.removeAttr()

    //Accept cookies
    Global_Stuff.cookiesAccept()

    //Complete section 1 "About you"
    Global_Stuff.aboutYouTitle()
    Global_Stuff.proposerTitle()
    Global_Stuff.proposerForename()
    Global_Stuff.proposerSurname()
    Global_Stuff.proposerEmail()
    Global_Stuff.phone()
    Global_Stuff.aboutYouContinue()

    //Complete section 2 "Personal details"
    Global_Stuff.personalDetailsTitle()
    Global_Stuff.addressInput()
    cy.wait(4000)
    Global_Stuff.addressSuggest()
    Global_Stuff.addressSelect()
    Global_Stuff.addressConfirm()
    Global_Stuff.proposerDOB()
    Global_Stuff.proposerEmployStatus()
    Global_Stuff.licenceType()
    Global_Stuff.licenceYears()
    Global_Stuff.personlaDetailsContinue()
    cy.wait(4000)

    //Complete section 3 "Insurance details"
    Global_Stuff.insuranceDetailsTitle()
    Global_Stuff.drivingExp()
    cy.wait(4000)
    Global_Stuff.drivingExpYears()
    Global_Stuff.insuranceDetailsContinue()

    //Complete section 4 "Car details"
    Global_Stuff.carDetailsTitle()
    Global_Stuff.carRegYes()
    Global_Stuff.carRegInput()
    Global_Stuff.findCarBTN()
    cy.wait(6000)
    Global_Stuff.confirmCarBTN()
    cy.wait(6000)
    Global_Stuff.carValueInput()
    Global_Stuff.carModifiedFalse()
    Global_Stuff.carDetailsContinue()

    //Complete section 5 "Additional drivers"
    Global_Stuff.additionalDriversHeading()
    Global_Stuff.additionalDriversFalse()
    Global_Stuff.additionalDriversContinue()

    //Complete section 6 "Your claims"
    Global_Stuff.claimsHeading()
    Global_Stuff.claimsFalse1st()
    Global_Stuff.claimsContinue()

    //Complete section 7 "Penalty points"
    Global_Stuff.ppHeading()
    Global_Stuff.ppFalse1st()
    Global_Stuff.ppContinue()

    //Complete section 8 "Cover start date"
    Global_Stuff.coverStartHeading()
    Global_Stuff.coverStartDate()
    Global_Stuff.coverStartHaveHomeIns()
    Global_Stuff.coverStartHaveCarIns()
    Global_Stuff.coverStartMarketing()
    Global_Stuff.coverStartCustomerQuote()
    Global_Stuff.coverStartContinue()
    cy.wait(10000)

    //Quote screen - Buy now 
    Global_Stuff.quotePageHeading()
    cy.pause()
    Global_Stuff.buyNowBtn()

    //Complete post quote 1 "About you car"
    Global_Stuff.postQuote1Heading()
    Global_Stuff.postQuote1wnCar()
    Global_Stuff.postQuote1PrivateIns()
    Global_Stuff.postQuote1Continue()

    //Complete post quote 2 "About the drivers"
    Global_Stuff.postQuote2Heading()
    Global_Stuff.postQuote2IsResidentTrue()
    Global_Stuff.postQuote2IsMainDriverTrue()
    Global_Stuff.postQuote2IsNotOtherCarTrue()
    Global_Stuff.postQuote2IsNotOtherInsTrue()
    Global_Stuff.postQuote2IsNoConvictionTrue()
    Global_Stuff.postQuote2IsNoDisqualificationTrue()
    Global_Stuff.postQuote2IsNoRefusalTrue()
    Global_Stuff.postQuote2IsNoIncreaseTrue()
    Global_Stuff.postQuote2IsNoMedicalTrue()
    Global_Stuff.postQuote2DriverNumber()
    cy.wait(3000)
    Global_Stuff.postQuote2Continue()

    //Complete post quote 3 "Your insurance history and inception details"
    Global_Stuff.postQuote3Heading
    Global_Stuff.postQuote3NCDROITrue()
    Global_Stuff.postQuote3NoOtherNCDTrue()
    Global_Stuff.postQuote3WithinExpiryTrue()
    Global_Stuff.postQuote3IsMyAvivaFalse()
    Global_Stuff.postQuote3PostCert()
    Global_Stuff.postQuote3PostDocs()
    Global_Stuff.coverStartCustomerQuote()
    cy.wait(3000)
    Global_Stuff.postQuote3Continue()

    //Payment screen
    Global_Stuff.paymentCardQA()

    //Thank you page
    Global_Stuff.thankyouHeading()     


 });