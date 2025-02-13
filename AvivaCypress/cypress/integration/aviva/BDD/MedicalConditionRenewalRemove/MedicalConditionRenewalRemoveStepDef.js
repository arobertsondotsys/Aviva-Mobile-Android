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

Given('Medical condition can be removed at renewal',()=>
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
    cy.wait(3000)
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

    //Back date policy
    Global_Stuff.Server()
    Global_Stuff.home()
    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()
    Global_Stuff.unlockBTN()

    //Open policy
    Global_Stuff.livePoliciesBTN()

    //Back date policy
    Global_Stuff.agePolicyTool()
    Global_Stuff.agePolicy()

    //Generate and invite renewal
    Global_Stuff.Server()
    Global_Stuff.home()
    Global_Stuff.email()
    Global_Stuff.searchButton()
    Global_Stuff.policySelectButton()
    Global_Stuff.generateRenewal()
    Global_Stuff.inviteRenewal()
    
    
    
    //Checking for renewal invite email in docs
    Global_Stuff.recallPolicy()
    Global_Stuff.livePoliciesBTN()
    Global_Stuff.selectActionDocuments()
    Global_Stuff.checkRenewalInviteDocs()
    cy.go(-1)
    
    //Purchase Home Renewal
    Global_Stuff.livePoliciesBTN()
    Global_Stuff.selectActionRenewal()
    cy.wait(4000)
    Global_Stuff.selectStaffDiscount()
    cy.get('#ctl00_MainContent_EditAdditionalDriver').click()
    Global_Stuff.additionalDriversTrue()
    cy.get('#ctl00_MainContent_DDL_AddDriverTitle').select(2)
    cy.get('#ctl00_MainContent_DriverForename').type('Sarah')
    cy.get('#ctl00_MainContent_DriverSurname').type('Test')
    cy.get('#ctl00_MainContent_DriverDOB').type('28/12/1982')
    cy.get('#DriverEmploymentStatus').select(2)
    cy.get('#DriverLicenceType').select('U')
    cy.get('#ctl00_MainContent_DriverLicenceYearsHeld').select(6)
    cy.wait(2000)
    cy.get('#AdditionalDriverNumber').type('123456799UK')
    cy.wait(2000)
    cy.get('#RelationshipToProposer').select(1)
    cy.get('#IsSpouseOwnVehicle-False > .a-radio > .a-radio__label').click()
    cy.get('#SaveDriver').click()
    cy.wait(3000)
    cy.get('#IsAdditionalDriver-False > .a-radio > .a-radio__label').click()
    Global_Stuff.additionalDriversContinue()

    cy.get('#accHeading5 > .m-showhide__control').contains('Additional driver added')
    cy.reload()
    //cy.wait(6000)
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
    // cy.get('[id*="IsClaims"][value^="False"]').last().click({force:true})
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
    cy.get('#ctl00_MainContent_ddlMedicalConditions').select(3)
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

    //cy.get('#ctl00_MainContent_DriverRepeater_ctl01_DriverNum').type('123123123')

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

    cy.get('#accHeading2 > .m-showhide__control').click()
    cy.wait(2000)
    cy.get('#RemoveCondition').click()
    cy.get('#ctl00_MainContent_MedicalRepeater_ctl00_DeleteThisCondition').click()
    cy.wait(2000)
    
    //Completing post quote screen 3 
    cy.get('#ctl00_MainContent_btnContinueToPayment').click({force: true})

    cy.get('.m-card-content > p').should('contain', 'Go back to make a change to your details')

    



    

    


     


































});