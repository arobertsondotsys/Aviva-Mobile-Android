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
const day=require('dayjs')


Given('Policy Purchase with NYY',()=>
{ 
 Global_Stuff.Server()
    
    //Log in
    Global_Stuff.company()
    Global_Stuff.username()
    Global_Stuff.password()
    Global_Stuff.loginButton()
    
    //Revert new window that open back to original window 
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
    cy.wait(2000)
    Global_Stuff.addressSuggest()
    Global_Stuff.addressSelect()
    Global_Stuff.addressConfirm()
    Global_Stuff.proposerDOB()
    Global_Stuff.proposerEmployStatus()
    Global_Stuff.licenceType()
    Global_Stuff.licenceYears()
    Global_Stuff.personlaDetailsContinue()
    cy.wait(2000)
  
    //Complete section 3 "Insurance details"
    Global_Stuff.insuranceDetailsTitle()
    Global_Stuff.notes()
    Global_Stuff.drivingExp()
    cy.wait(2000)
    Global_Stuff.drivingExpYears()
    Global_Stuff.carUse()
    Global_Stuff.insuranceDetailsContinue()
  
    //Complete section 4 "Car details"
    Global_Stuff.carDetailsTitle()
    Global_Stuff.notes()
    Global_Stuff.carRegYes()
    Global_Stuff.carRegInput()
    Global_Stuff.findCarBTN()
    cy.wait(3000)
    Global_Stuff.confirmCarBTN()
    cy.wait(3000)
    Global_Stuff.carValueInput()
    Global_Stuff.carModifiedFalse()
    Global_Stuff.carDetailsContinue()
  
    //Complete section 5 "Additional drivers"
    Global_Stuff.additionalDriversHeading()
    Global_Stuff.notes()
    Global_Stuff.additionalDriversFalse()
    Global_Stuff.additionalDriversContinue()
  
    //Complete section 6 "Your claims"
    Global_Stuff.notes()
    Global_Stuff.claimsHeading()
    cy.wait(2000)
    Global_Stuff.claimsFalse1st()
    cy.wait(2000)
    Global_Stuff.claimsContinue()

    //Complete section 7 "Penalty points"
    cy.get('#div7').contains('Penalty points')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('[id*="IsPenaltyPoints"][value^="No"]').click({force: true})
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
    cy.wait(8000)

    //Quote screen - Buy now 
    cy.get('.m-heading-group__item').contains('Aviva car insurance quote')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    Global_Stuff.buyNowBtn()

    //Complete post quote 1 "About your car"
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
    Global_Stuff.postQuote2DriverNumber()
    cy.wait(2000)
    Global_Stuff.postQuote2Continue()

    //Complete post quote 3 "Your insurance history and inception details" setting NYY to preferences
    cy.get('#div3').contains('Your insurance history and inception details')
    cy.get('#ctl00_divNotes > .a-button').should('be.visible')
    cy.get('#IsNCDROI-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsNotOtherNCD-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.get('#IsWithinExpiry-True > .a-radio > .a-radio__label > .a-radio__label-inner').click({force: true})
    cy.wait(2000)
    cy.get('#IsMyAviva-False > .a-radio > .a-radio__label').click({force: true})
    cy.wait(2000)
    cy.get('#IsPostCert-yes').click({force: true})
    cy.get('#IsPostDocs-yes').click({force: true})
   
    cy.get('.a-checkbox__label').should('not.exist')
    cy.get('#ctl00_MainContent_btnContinueToPayment').click({force: true})
    cy.wait(6000)

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
    Global_Stuff.retreiveParagonPolicyNumber1()
    
    //Check B/O preferences match Y/N/N
    Global_Stuff.Server()

    cy.get(':nth-child(1) > .level1').click()
    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()

    //Select policy and Documents 
    Global_Stuff.livePoliciesBTN()
    Global_Stuff.selectActionDocumentsWithParagonPolicyNumber1()
    //cy.get('[class^="dropdown-item"]').contains('Documents').invoke("removeAttr", "target").click({force:true})
    cy.get('#ctl00_ContentPlaceHolder1_btnCorrespondence').click()
    cy.get('#ctl00_ContentPlaceHolder1_rblDocsByPortal_1').should('have.value', 'False')
    cy.get('#ctl00_ContentPlaceHolder1_rblCertByPost_0').should('have.value', 'True')
    cy.get('#ctl00_ContentPlaceHolder1_rblDocsByPost_0').should('have.value', 'True')
    cy.get('#CorrespondenceModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.wait(60000)
    cy.get('#ctl00_ContentPlaceHolder1_btnViewPrinterQueue').click()
    cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Schedule')
    cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Statement Of Fact')
    cy.get('tbody > :nth-child(3) > :nth-child(3)').contains('Welcome Letter Temp Cover')

    //Completing Diary chaser to move policy to full cover

    cy.get(':nth-child(1) > .level1').click()
    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()

    //Select policy and Documents 
    Global_Stuff.livePoliciesBTN()
    Global_Stuff.selectActionDiaryWithParagonPolicyNumber1()
    cy.get(':nth-child(7) > .btn > span').click()
    cy.get('#ctl00_ContentPlaceHolder1_DocumentGrid_ctl02_IsReceived').click()
    cy.get(':nth-child(2) > :nth-child(6)').should('not.have.text', '')

    




});