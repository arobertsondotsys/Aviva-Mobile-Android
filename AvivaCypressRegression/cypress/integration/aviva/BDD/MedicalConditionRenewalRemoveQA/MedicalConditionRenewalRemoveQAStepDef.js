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

Given('Medical condition can be removed at renewal QA',()=>
{ 
  Global_Stuff.Server()
    
    //Log in
    Global_Stuff.company()
    Global_Stuff.username()
    Global_Stuff.password()
    Global_Stuff.loginButton()

    //Revert new window that opens back to original window 
    cy.get('#ctl00_ContentPlaceHolder1_ProductList').select(1)
    cy.window().then((win) => {
        const orig = win.open
      
        win.open = function (url, target, features) {
          return orig.call(this, url, '_self', features)
        }
      })

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
    cy.get('#div6').contains('Your claims')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('[id*="IsClaims"][value^="False"]').first().click({force: true})
    cy.get('[id*="IsClaims"][value^="False"]').last().click({force: true})
    cy.get('#Continue6').click({force: true})

    //Complete section 7 "Penalty points"
    cy.get('#div7').contains('Penalty points')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('[id*="IsPenaltyPoints"][value^="No"]').first().click({force: true})
    cy.get('[id*="IsPenaltyPoints"][value^="No"]').last().click({force: true})
    cy.get('#Continue7').click({force: true})

    //Complete section 8 "Cover start date"
    cy.get('#div8').contains('Cover start date')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('#ctl00_MainContent_StartDate').type(day().format('DD/MM/YYYY'),{force: true})
    cy.get('#IsHome-False > .a-radio > .a-radio__label').click({force: true})
    cy.get('#IsHouseholdCar-False > .a-radio > .a-radio__label').click({force: true})
    cy.get('#RecieveOffers-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('.a-checkbox__label').should('be.not.visible')
    cy.get('#ctl00_MainContent_Continue8').click({force: true})
    cy.wait(10000)

    //Quote screen - Buy now 
    cy.get('.m-heading-group__item').contains('Aviva car insurance quote')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    Global_Stuff.buyNowBtn()

    //Complete post quote 1 "About you car"
    cy.get('#div1').contains('About your car')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('#IsOwner-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsPrivate-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#ctl00_MainContent_btnContinueVehicle').click({force: true})
    //Complete post quote 2 "About the drivers"
    cy.get('#div2').contains('About the drivers')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('#IsResident-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsMainDriver-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNotOtherCar-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNotOtherInsurance-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoConvictions-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoDisqualifications-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoRefusal-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoIncrease-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoMedical-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#ctl00_MainContent_DriverRepeater_ctl00_DriverNum').type('123456789',{force: true})
    Global_Stuff.postQuote2Continue()
    //Complete post quote 3 "Your insurance history and inception details"
    cy.get('#div3').contains('Your insurance history and inception details')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('#IsNCDROI-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNotOtherNCD-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsWithinExpiry-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsMyAviva-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('.a-checkbox__label').should('not.exist')
    cy.get('#ctl00_MainContent_btnContinueToPayment').click({force: true})
    //Payment type screen - selecting "No payment required"
    //cy.get('.m-heading-group__item').contains('Select payment type')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.wait(4000)
    cy.get('#ctl00_MainContent_PaymentType').select(2)
    cy.get('#ctl00_MainContent_NoPay').click({force: true})
    //Diary & correspondence page 
    cy.get('.a-heading--1').contains('Internal Diary and Correspondence')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('#ctl00_MainContent_Summary').click({force: true})
    //Thank you page
    cy.get('.m-heading-group > .m-heading-group__item').contains('Thank you')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')

    //Back date policy
    Global_Stuff.Server()
    Global_Stuff.home()
    // cy.visit('https://devaviva.dotsys.co.uk/BackOffice/Login.aspx?ReturnUrl=%2fBackOffice%2fLogin.aspx&Session=Expired')
    // Global_Stuff.company()
    // Global_Stuff.username()
    // Global_Stuff.password()
    // Global_Stuff.loginButton()
    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()
    Global_Stuff.unlockBTN()

    cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click()

    cy.get('[class^="dropdown policyTools"]').last().click().contains('Age Policy').invoke("removeAttr", "target").click()


    cy.get('#ctl00_ContentPlaceHolder1_BackDateDay').invoke('val').then(dayString => {
      const day = parseInt(dayString)
      cy.get('#ctl00_ContentPlaceHolder1_BackDateDay').select(day+2)
    })
    //cy.get('#ctl00_ContentPlaceHolder1_BackDateMonth').select(3)
    cy.get('#ctl00_ContentPlaceHolder1_BackDateYear').select('2023')
   

    cy.get('#ctl00_ContentPlaceHolder1_UpdateDate').click()
    cy.get('.alert').contains('Policy has been backdated')

    //Generating and Prinitng renewal
    Global_Stuff.Server()
    Global_Stuff.home()
    // Global_Stuff.company()
    // Global_Stuff.username()
    // Global_Stuff.password()
    // Global_Stuff.loginButton()
    // Global_Stuff.company()
    // Global_Stuff.username()
    // Global_Stuff.password()
    // Global_Stuff.loginButton()
    
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
    //cy.get('#ctl00_ContentPlaceHolder1_btnReset').click()
    cy.get('#ctl00_ContentPlaceHolder1_RenewalGrid_ctl02_checkRenewal').click()
    cy.get('#ctl00_ContentPlaceHolder1_BatchPrint').click()

    //Checking for renewal invite email in docs
    cy.get('#ctl00_ContentPlaceHolder1_RenewalGrid_ctl02_RecallPolicy').click()
    cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click()
    
    cy.get('[class^="dropdown selectAction"]').last().click({force:true}).contains('Documents').invoke("removeAttr", "target").click({force:true})
    

    cy.get('tbody > :nth-child(4) > :nth-child(4)').should('contain', 'Renewal Invite Email')
    cy.go('back')
    cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click()

    //Enter Renewal quote and add Medical conditions
     cy.get('[class^="dropdown selectAction"]').last().click({force:true}).contains('Renewal').invoke("removeAttr", "target").click({force:true})
   
    cy.wait(4000)
   //Global_Stuff.cookiesAccept()
    cy.get('#StaffHeading > .m-showhide__control').click()
    cy.get('#ddlAvailableDiscounts').select(1)
    cy.get('#ctl00_MainContent_Recalculate').click()
    cy.get('#ctl00_MainContent_UP_Price > :nth-child(1)').should('contain', 'Call centre customer - No online discount')
    cy.get('#ctl00_MainContent_EditAdditionalDriver').click()
    Global_Stuff.additionalDriversTrue()
    cy.get('#ctl00_MainContent_DDL_AddDriverTitle').select(2)
    cy.get('#ctl00_MainContent_DriverForename').type('Sarah')
    cy.get('#ctl00_MainContent_DriverSurname').type('Test')
    cy.get('#ctl00_MainContent_DriverDOB').type('28/12/1982')
    cy.get('#DriverEmploymentStatus').select(2)
    cy.get('#DriverLicenceType').select('U')
    cy.get('#ctl00_MainContent_DriverLicenceYearsHeld').select(6)
    cy.get('#RelationshipToProposer').select(1)
    cy.get('#IsSpouseOwnVehicle-False > .a-radio > .a-radio__label').click()
    cy.get('#SaveDriver').click()
    cy.wait(3000)
    cy.get('#IsAdditionalDriver-False > .a-radio > .a-radio__label').click()
    Global_Stuff.additionalDriversContinue()

    
    cy.get('#accHeading5 > .m-showhide__control').contains('Additional driver added')
    cy.wait(6000)
    cy.get('[id*="IsClaims"][value^="False"]').last().click({force:true})
    //cy.wait(3000)
    cy.get('#Continue6').click({force:true})

    cy.get('[id*="IsPenaltyPoints"][value^="No"]').last().click({force:true})
    //cy.wait(3000)
    cy.get('#Continue7').click({force:true})

    //Complete section 8 "Cover start date"
    cy.get('#div8').contains('Renewal date')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('#IsHome-False > .a-radio > .a-radio__label').click({force:true})
    cy.get('#IsHouseholdCar-False > .a-radio > .a-radio__label').click({force:true})
    cy.get('#ctl00_MainContent_Continue8').click({force:true})
    // cy.get('[id*="IsClaims"][value^="False"]').last().trigger('mouseover').click({force:true})
    // cy.get('#Continue6').click()
    // cy.get('[id*="IsPenaltyPoints"][value^="No"]').last().click({force:true})
    // cy.get('#Continue7').click({force:true})
    // cy.get('#ctl00_MainContent_Continue8').click({force:true})
    cy.wait(10000)

    cy.get('#StaffHeading > .m-showhide__control').click()
    cy.get('#ddlAvailableDiscounts').select(1)
    cy.get('#ctl00_MainContent_Recalculate').click()
    cy.get('#ctl00_MainContent_UP_Price > :nth-child(1)').should('contain', 'Call centre customer - No online discount')
    cy.get('#btnBuyNow').click({force: true})

    Global_Stuff.postQuote1wnCar()
    Global_Stuff.postQuote1PrivateIns()
    Global_Stuff.postQuote1Continue()

    cy.get('#div2').contains('About the drivers')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('#IsResident-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsMainDriver-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNotOtherCar-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNotOtherInsurance-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoConvictions-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoDisqualifications-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoRefusal-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoIncrease-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNoMedical-False > .a-radio > .a-radio__label').click({force: true})
    cy.get('#btnAddMedicalCondition').click({force: true})
    cy.get('#ctl00_MainContent_ddlDriversMedicalConditions').select(1,{force: true})
    cy.get('#ctl00_MainContent_ddlMedicalConditions').select(2,{force: true})
    cy.get('#IsInformed-False > .a-radio > .a-radio__label').click({force: true})
    cy.get('#SaveMedicalCondition').click({force: true})
    cy.get('#btnAddMedicalCondition').click({force: true})
    cy.get('#ctl00_MainContent_ddlDriversMedicalConditions').select(2,{force: true})
    cy.get('#ctl00_MainContent_ddlMedicalConditions').select(3,{force: true})
    cy.get('#IsInformed-False').click()
    cy.get('#SaveMedicalCondition').click()
    cy.get(':nth-child(1) > .m-card-content > .m-card-content__inner > .m-card > .m-form-row > .has-modules-loaded').click({force: true})
    cy.wait(2000)
    cy.get('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()

    cy.get('#IsOwner-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsPrivate-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#ctl00_MainContent_btnContinueVehicle').click({force: true})

    cy.get('.m-form-row > .has-modules-loaded').click({force: true})
    cy.wait(2000)
    cy.get('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click({force: true})
    cy.wait(2000)
    cy.get('#IsOwner-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsPrivate-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#ctl00_MainContent_btnContinueVehicle').click({force: true})

    cy.get('#IsNoMedical-yes').click({force: true})

    cy.get('#ctl00_MainContent_DriverRepeater_ctl01_DriverNum').type('123123123')

    Global_Stuff.postQuote2Continue()

    cy.get('#ctl00_MainContent_btnContinueToPayment').click()

    cy.get('#ctl00_MainContent_PaymentType').select(2)
    cy.get('#ctl00_MainContent_txtAmountReceived').type('100')
    cy.get('#ctl00_MainContent_txtPayRef').type('test')

    cy.get('#ctl00_MainContent_PayCheque').click()
    cy.get('#ctl00_MainContent_btnPayNSPayment').click()

    cy.get('.m-heading-group > .m-heading-group__item').contains('Thank you')
    

    //Attempting to remove medical condition at MTA
    Global_Stuff.Server()
    Global_Stuff.home()
    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()

    //Open policy
    cy.get('#accordion > :nth-child(2) > :nth-child(1) > .panel-title > .accordion-toggle > :nth-child(1)').click()

    //Select Make adjustment and revert window back to current window
    cy.get('[class^="dropdown selectAction"]').last().click().contains('Make Adjustment').invoke("removeAttr", "target").click({force:true})

    //Select to perform a permanent adjustment on Additional drivers
    //Global_Stuff.cookiesAccept()
    cy.get('#ctl00_MainContent_ddlPermaSelection').select('Additional drivers',{force: true}).should('have.value', 'AddDriver')
    cy.get('#btnMakePermaChange').click({force: true})
    
     cy.get('#Continue5').click()
    // cy.get('[id*="IsClaims"][value^="False"]').last().trigger('mouseover').click({force:true})
    // cy.wait(3000)
    // cy.get('#Continue6').click({force:true})

    // cy.get('[id*="IsPenaltyPoints"][value^="No"]').last().click({force:true})
    // cy.wait(3000)
    // cy.get('#Continue7').click({force:true})

    cy.get('#ctl00_MainContent_StartDate').type(day().add(3,'day').format('DD/MM/YYYY'),{force:true})
    cy.get('#ctl00_MainContent_Continue8').click({force:true})
    cy.get('#ctl00_MainContent_btnContinue').click({force:true})
    
    cy.get('#div2').contains('About the drivers')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')

    //Completing post quote screen 2 questions
    cy.get('#accHeading2 > .m-showhide__control').click()
    cy.get('#IsNoMedical-False > .a-radio > .a-radio__label').click()
    cy.get('#btnAddMedicalCondition').click()
    cy.get('#ctl00_MainContent_ddlDriversMedicalConditions').select(1)
    cy.get('#ctl00_MainContent_ddlMedicalConditions').select(2,)
    cy.get('#IsInformed-False > .a-radio > .a-radio__label').click()
    cy.get('#SaveMedicalCondition').click()
    cy.get('#btnAddMedicalCondition').click()
    cy.get('#ctl00_MainContent_ddlDriversMedicalConditions').select(2)
    cy.get('#ctl00_MainContent_ddlMedicalConditions').select(3)
    cy.get('#IsInformed-False > .a-radio > .a-radio__label').click()
    cy.get('#SaveMedicalCondition').click()
    cy.get(':nth-child(1) > .m-card-content > .m-card-content__inner > .m-card > .m-form-row > .has-modules-loaded').click()
    cy.wait(2000)
    cy.get('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()

    // cy.get('#div2').click({force: true})
    // cy.get('.m-form-row > .has-modules-loaded').click()
    cy.get('#accHeading2 > .m-showhide__control').click()
    cy.wait(2000)
    cy.get('#RemoveCondition').click()
    cy.get('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()
    cy.wait(2000)
   
    //Completing post quote screen 3 
    cy.get('#ctl00_MainContent_btnContinueToPayment').click({force: true})

    cy.get('.m-card-content > p').should('contain', 'Go back to make a change to your details')

    



    

    


     


































});