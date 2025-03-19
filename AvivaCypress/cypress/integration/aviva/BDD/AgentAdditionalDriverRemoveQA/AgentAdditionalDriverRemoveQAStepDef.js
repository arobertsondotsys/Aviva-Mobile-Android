import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";
import { Global } from "../AvivaPOM/Page Actions/POMActions";

Cypress.on('uncaught:exception', (err, runnable) =>
{
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_Stuff = new Global
const day = require('dayjs')

Given('Agent can add a driver and remove at ADJ',()=>
{ 
  Global_Stuff.Server()
    
    //Log in
    Global_Stuff.company()
    Global_Stuff.username()
    Global_Stuff.password()
    Global_Stuff.loginButton()

    //Revert new window that opens back to original window 
    Global_Stuff.agentQuote()
    Global_Stuff.createNewQuoteBTN()

    //Accept cookies
    Global_Stuff.cookiesAccept()

    //Complete section 1 "About you"
    Global_Stuff.aboutYouTitle()
    Global_Stuff.notes()
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
    Global_Stuff.notes()
    Global_Stuff.drivingExp()
    cy.wait(4000)
    Global_Stuff.drivingExpYears()
    Global_Stuff.carUse()
    Global_Stuff.insuranceDetailsContinue()

    //Complete section 4 "Car details"
    Global_Stuff.carDetailsTitle()
    Global_Stuff.notes()
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
    Global_Stuff.notes()
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
    Global_Stuff.additionalDriversFalse()
    Global_Stuff.additionalDriversContinue()
    
    //Complete section 6 "Your claims"
    Global_Stuff.additionalDriverAddedHeading()
    cy.reload()
    Global_Stuff.notes()
    Global_Stuff.claimsHeading()
    Global_Stuff.claimsFalse1st()
    cy.wait(3000)
    Global_Stuff.claimsFalseLast()
    Global_Stuff.claimsContinue()
    
    //Complete section 7 "Penalty points"
    Global_Stuff.ppHeading()
    Global_Stuff.notes()
    Global_Stuff.ppFalse1st()
    Global_Stuff.ppFalseLast()
    Global_Stuff.ppContinue()

    //Complete section 8 "Cover start date"
    Global_Stuff.coverStartHeading()
    Global_Stuff.notes()
    Global_Stuff.coverStartDate()
    Global_Stuff.coverStartHaveHomeIns()
    Global_Stuff.coverStartHaveCarIns()
    Global_Stuff.coverStartMarketing()
    cy.wait(3000)
    Global_Stuff.coverStartContinue()
    cy.wait(10000)

    //Quote screen - Buy now 
    Global_Stuff.quotePageHeading()
    Global_Stuff.notes()
    Global_Stuff.buyNowBtn()

    //Complete post quote 1 "About you car"
    Global_Stuff.postQuote1Heading()
    Global_Stuff.notes()
    Global_Stuff.postQuote1wnCar()
    Global_Stuff.postQuote1PrivateIns()
    Global_Stuff.postQuote1Continue()

    //Complete post quote 2 "About the drivers"
    Global_Stuff.postQuote2Heading()
    Global_Stuff.notes()
    Global_Stuff.postQuote2DriverNumber1()
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
    cy.wait(2000)
    Global_Stuff.postQuote2Continue()
   
    //Complete post quote 3 "Your insurance history and inception details"
    Global_Stuff.postQuote3Heading
    Global_Stuff.notes()
    Global_Stuff.postQuote3NCDROITrue()
    Global_Stuff.postQuote3NoOtherNCDTrue()
    Global_Stuff.postQuote3WithinExpiryTrue()
    Global_Stuff.postQuote3IsMyAvivaTrue()
    cy.wait(3000)
    Global_Stuff.postQuote3Continue()

    //Payment type screen - selecting "No payment required"
    Global_Stuff.notes()
    cy.wait(4000)
    Global_Stuff.paymentTypeAgentNoPay()
    Global_Stuff.paymentTypeAgentNoPayContinue()

    //Diary & correspondence page 
    Global_Stuff.diaryCorrespondenceHeading()
    Global_Stuff.notes()
    Global_Stuff.diaryCorrespondenceContinue()

    //Thank you page
    Global_Stuff.thankyouHeading()
    Global_Stuff.notes()
    Global_Stuff.retreivePolicyNumber()

    Global_Stuff.Server()
    Global_Stuff.home()
    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()

    //Open policy
    Global_Stuff.livePoliciesBTN()

    //Select Make adjustment and revert window back to current window
    Global_Stuff.selectActionMakeADJWithPolicyNumber()

    //Select to perform a permanent adjustment on Additional drivers
    cy.get('#ctl00_MainContent_ddlPermaSelection').select('Additional drivers',{force: true}).should('have.value', 'AddDriver')
    cy.get('#btnMakePermaChange').click({force: true})
    cy.contains('Remove driver').click({force: true})
    cy.contains('Additional drivers', {force: true})
    cy.contains('Sarah Vader', {force: true})
    cy.get('#ctl00_MainContent_DriverRepeater_ctl00_DeleteDriver').click({force: true})
    cy.wait(6000)
    cy.get('#Continue5').click({force: true})
    cy.get('#ctl00_MainContent_StartDate').type(day().format('DD/MM/YYYY'),{force:true})
    cy.get('#ctl00_MainContent_Continue8').click({force:true})
    cy.get('#ctl00_MainContent_btnBuyNow').click({force:true})
    cy.get('#div2').contains('About the drivers')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')

    //Completing post quote screen 2 questions

    Global_Stuff.postQuote2IsResidentTrue()
    Global_Stuff.postQuote2IsMainDriverTrue()
    Global_Stuff.postQuote2IsNotOtherCarTrue()
    Global_Stuff.postQuote2IsNotOtherInsTrue()
    Global_Stuff.postQuote2IsNoConvictionTrue()
    Global_Stuff.postQuote2IsNoDisqualificationTrue()
    Global_Stuff.postQuote2IsNoRefusalTrue()
    Global_Stuff.postQuote2IsNoIncreaseTrue()
    Global_Stuff.postQuote2IsNoMedicalTrue()
    cy.wait(3000)
    Global_Stuff.postQuote2Continue()

    //Completing post quote screen 3 
    cy.get('#ctl00_MainContent_btnContinueToPayment').click()

    cy.get('#ctl00_MainContent_PaymentType').select(3)
    cy.get('#ctl00_MainContent_PayNow').click()

    //Payment screen
    Global_Stuff.paymentCardQAAgent()

    //Thank you page
    Global_Stuff.thankyouHeading()
    



});