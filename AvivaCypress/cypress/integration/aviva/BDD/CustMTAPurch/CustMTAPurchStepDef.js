import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";
import { Global } from "../AvivaPOM/Page Actions/POMActions";

//Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) =>
{
    
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global
const day=require('dayjs')

Given('Customer can purchase an MTA',()=>
{
    Global_Stuff.Server1()

    Global_Stuff.cookiesAccept()
    cy.get('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible');

    Global_Stuff.loginEmail()
    Global_Stuff.loginPassword()
    Global_Stuff.loginPortalButton()

    //cy.get('#RenewalDueModal > .CloseBtnMockup').click()
    cy.get('#Main_MotorPolicyRepeaterDesktop_BtnSelectPolicyMob_0').click()
    cy.get('#Main_btnAdjustment').click()
    cy.get('#ctl00_MainContent_ddlPermaSelection').select(4, {force:true})
    cy.window().then((win) => {
        cy.get('#btnMakePermaChange').click({force:true})
          const orig = win.open
          win.open = function (url, target, features) {
            return orig.call(this, url, '_self', features)
          }
      })
      
      //Input AD details
      cy.get('#IsAdditionalDriver-True > .a-radio > .a-radio__label').click()
      cy.get('#ctl00_MainContent_DDL_AddDriverTitle').select(2)
      //cy.get('#AddDriverTitle > #Mrs > .a-radio > .a-radio__label').click()
      cy.get('#ctl00_MainContent_DriverForename').type('Sarah')
      cy.get('#ctl00_MainContent_DriverSurname').type('Test')
      cy.get('#ctl00_MainContent_DriverDOB').type('28/12/1982')
      cy.get('#DriverEmploymentStatus').select('E')
      cy.get('#txtDriverOccupation').type('shop as')
      cy.get('#ui-id-2').click()
      cy.get('#DriverLicenceType').select(1)
      cy.get('#ctl00_MainContent_DriverLicenceYearsHeld').select(3)
      cy.get('#RelationshipToProposer').select(1)
      cy.get('#IsSpouseOwnVehicle-True > .a-radio > .a-radio__label').click()
      cy.get('#SaveDriver').click()
      cy.get('#IsAdditionalDriver-False > .a-radio > .a-radio__label').click()
      cy.wait(2000)
      cy.get('#Continue5').click()

      //Claims screen
      cy.get('[id*="IsClaims"][value^="False"]').click({force: true})
      cy.get('#Continue6').click({force: true})

      //Penalty points screen
      cy.get('[id*="IsPenaltyPoints"][value^="No"]').click({force: true})
      cy.get('#Continue7').click({force: true})
      cy.wait(6000)

      //Start date
      cy.get('#div8').contains('Cover start date')
      cy.get('#ctl00_MainContent_StartDate').type(day().add(2,'day').format('DD/MM/YYYY'))
      cy.get('#TermsAndConditions > .a-checkbox > .a-checkbox__label').click()
      cy.get('#ctl00_MainContent_Continue8').click()

      //Quote screen
      cy.get('#ctl00_MainContent_btnBuyNow').click({force: true})

      //Post quote screen 2
      cy.get('#IsMainDriver-True > .a-radio > .a-radio__label').click()
      cy.get('#IsNotOtherCar-True > .a-radio > .a-radio__label').click()
      cy.get('#IsNotOtherInsurance-True > .a-radio > .a-radio__label').click()
      cy.get('#IsNoConvictions-True > .a-radio > .a-radio__label').click()
      cy.get('#IsNoDisqualifications-True > .a-radio > .a-radio__label').click()
      cy.get('#IsNoRefusal-True > .a-radio > .a-radio__label').click()
      cy.get('#IsNoIncrease-True > .a-radio > .a-radio__label').click()
      cy.get('#IsNoMedical-True > .a-radio > .a-radio__label').click()
      Global_Stuff.postQuote2Continue()
      
      //Post quote screen 3
      cy.get('.a-checkbox__label').click()
      Global_Stuff.postQuote3Continue()

      //Thank you page
      cy.get('.m-heading-group__item').contains('Thank you')


       
})



  


