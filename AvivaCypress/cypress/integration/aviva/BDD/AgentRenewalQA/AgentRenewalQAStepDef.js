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

Given('Agent can Renew a policy',()=>
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
    Global_Stuff.additionalDriversFalse()
    Global_Stuff.additionalDriversContinue()

    //Complete section 6 "Your claims"
    Global_Stuff.claimsHeading()
    Global_Stuff.notes()
    Global_Stuff.claimsHeading()
    cy.wait(2000)
    Global_Stuff.claimsFalse1st()
    cy.wait(2000)
    Global_Stuff.claimsContinue()

    //Complete section 7 "Penalty points"
    Global_Stuff.ppHeading()
    Global_Stuff.notes()
    Global_Stuff.ppFalse1st()
    Global_Stuff.ppContinue()

    //Complete section 8 "Cover start date"
    Global_Stuff.coverStartHeading()
    Global_Stuff.notes()
    Global_Stuff.coverStartDate()
    Global_Stuff.coverStartHaveHomeIns()
    Global_Stuff.coverStartHaveCarIns()
    Global_Stuff.coverStartMarketing()
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
    Global_Stuff.notes()
    Global_Stuff.postQuote3NCDROITrue()
    Global_Stuff.postQuote3NoOtherNCDTrue()
    Global_Stuff.postQuote3WithinExpiryTrue()
    Global_Stuff.postQuote3IsMyAvivaFalse()
    Global_Stuff.postQuote3PostCert()
    Global_Stuff.postQuote3PostDocs()
    //Global_Stuff.coverStartNotCustomerQuote()
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

    //Back dating policy 
    Global_Stuff.Server()
    Global_Stuff.home()
    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()
    Global_Stuff.unlockBTN()

    cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click()

    cy.get('[class^="dropdown policyTools"]').last().click({force:true}).contains('Age Policy').invoke("removeAttr", "target").click({force:true})


    cy.get('#ctl00_ContentPlaceHolder1_BackDateDay').invoke('val').then(dayString => {
      const day = parseInt(dayString)
      cy.get('#ctl00_ContentPlaceHolder1_BackDateDay').select(day+1)
    })
    
    cy.get('#ctl00_ContentPlaceHolder1_BackDateYear').select('2024')

    cy.get('#ctl00_ContentPlaceHolder1_UpdateDate').click()
    cy.get('.alert').contains('Policy has been backdated')

    //Generating and Printing renewal
    Global_Stuff.Server()
    Global_Stuff.home()
    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()
    cy.get('[class^="btn btn-sm btn-cta btn-sm"]').last().click()
    
    cy.get('.bg-info').should('contain', 'RNL')
    cy.get('.bg-info').should('not.contain', '€ 0')
    
    cy.get('[class^="badge rounded-pill text-bg-success"]').last().invoke('text').then(policyNumString => {
      const policy = policyNumString
      cy.get('[class^="level2 dropdown-item dynamic"][title^="Renewals"]').click({force: true})
      cy.get('#ctl00_ContentPlaceHolder1_PolicyNumber').type(policy)
  })
    
    cy.get('#ctl00_ContentPlaceHolder1_Search').click()
    cy.wait(6000)
    cy.get('#ctl00_ContentPlaceHolder1_RenewalGrid_ctl02_checkRenewal').click()
    cy.get('#ctl00_ContentPlaceHolder1_BatchPrint').click()

    //Checking for renewal invite email in docs
    cy.get('#ctl00_ContentPlaceHolder1_RenewalGrid_ctl02_RecallPolicy').click()
    cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click()

    cy.get('[class^="dropdown selectAction"]').last().click({force:true}).contains('Documents').invoke("removeAttr", "target").click({force:true})
    
    //Purchase renewal quote
    cy.get('tbody > :nth-child(4) > :nth-child(4)').should('contain', 'Renewal Invite Email')
    cy.go('back')
    cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click()

    cy.get('[class^="dropdown selectAction"]').last().click({force:true}).contains('Renewal').invoke("removeAttr", "target").click({force:true})
   
    cy.wait(4000)
    cy.get('#StaffHeading > .m-showhide__control').click()
    cy.get('#ddlAvailableDiscounts').select(1)
    cy.get('#ctl00_MainContent_Recalculate').click()
    cy.get('#ctl00_MainContent_UP_Price > :nth-child(1)').should('contain', 'Call centre customer - No online discount')
    cy.get('#btnBuyNow').click()

    Global_Stuff.postQuote1wnCar()
    Global_Stuff.postQuote1PrivateIns()
    Global_Stuff.postQuote1Continue()

    Global_Stuff.postQuote2Continue()
    cy.wait(6000)

    cy.get('#ctl00_MainContent_btnContinueToPayment').click({force: true})
    cy.get('#ctl00_MainContent_PaymentType').select(2)
    cy.get('#ctl00_MainContent_txtAmountReceived').type('100')
    cy.get('#ctl00_MainContent_txtPayRef').type('test')
    cy.get('#ctl00_MainContent_PayCheque').click()
    cy.get('#ctl00_MainContent_btnPayNSPayment').click()

    //cy.get('#ctl00_MainContent_Summary').click()
    Global_Stuff.thankyouHeading()





   
   
    
















    





});