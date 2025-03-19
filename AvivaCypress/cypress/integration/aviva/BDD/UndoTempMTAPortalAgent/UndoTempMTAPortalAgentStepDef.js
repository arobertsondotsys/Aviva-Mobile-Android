import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";
import { Global } from "../AvivaPOM/Page Actions/POMActions";

//Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) =>
{
    
    return false
})

/// <reference types= "Cypress"/>

const Global_Stuff = new Global


Given('Undo Temp MTA in Portal',()=>
{
    Global_Stuff.Server1()

    //Log in to portal
    Global_Stuff.cookiesAccept()
    cy.get('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')
    Global_Stuff.loginEmail()
    Global_Stuff.loginPassword()
    Global_Stuff.loginPortalButton()

    //Select policy to Undo MTA on
    //cy.get('#RenewalDueModal > .CloseBtnMockup').click()
    cy.get('#Main_BreadcrumbHeading').contains( 'Welcome to MyAviva').and('be.visible')
    cy.get('#Main_PolicyRepeaterDesktop_BtnSelectPolicyMob_0').click()
    cy.get('[data-dd-loc="make-a-change"]').click();
    cy.get('.m-heading-group__item').contains('Make a change').and('be.visible')

    cy.window().then((win) => {
      cy.get('#ctl00_MainContent_UndoButton').invoke('removeAttr', 'target').click({force: true})
      const orig = win.open
      win.open = function (url, target, features) {
      return orig.call(this, url, '_self', features)
      }
  })
    
    // cy.get('#ctl00_MainContent_UndoButton').click({force: true})
    // cy.window().then((win) => {
    //   cy.spy(win, 'open').as('windowOpen'); // 'spy' vs 'stub' lets the new tab still open if you are visually watching it
    // });
    // perform action here [for me it was a button being clicked that eventually ended in a window.open]
    // verify the window opened
    // verify the first parameter is a string (this is the dynamic url) and the second is _blank (opens a new window)
    // cy.get('@windowOpen').focus()
    
  

   
    // cy.url()
    // cy.go('back')
  
    // cy.intercept('https://qainsurance-aviva.dotsys.co.uk/products/Car/EndTempAdjustment.aspx?enc=Y/qlHvbv+Gt2rmvC4GL1GzEO87O1bd8H91aPhk96iKLRMC+ywMY3gWzR7jpKnJVPaIz+srggNtdnpsEudpo4lFd3GIeMmQDt5IKLWzVC3ViwP3PFBgpFer4OKXpv9+PFxLTMFlTWnkF0KTHESofYScIjP4C31dmrwszolr69lYyWVUo7MJapZ3j6Rl37T14i', '//<![CDATA[//]]>').as('intercept-undo')
    // cy.contains('Undo').click({force: true})
    // cy.get('@intercept-undo').then((aliascontent) => {
    //   cy.log(aliascontent)

    // })   
    
    
       
      cy.get('#ctl00_Main_EndDay').invoke('val').then(dayString => {
        const day = parseInt(dayString)
        cy.get('#ctl00_Main_EndDay')
          .select(day-1)
      })
      cy.get('#ctl00_Main_EndHour').select('23')
      cy.get('#ctl00_Main_Submit').click()
      cy.get('.col-md-12 > .alert').contains('Temporary Adjustment has been changed.')

    })

       


Given ('Undo Temp MTA in Back office',() => {
   
Global_Stuff.Server()
    
     //Log in
     Global_Stuff.company()
     Global_Stuff.username()
     Global_Stuff.password()
     Global_Stuff.loginButton()
 
     //Search for Customer file
     Global_Stuff.email()
     Global_Stuff.searchButton()
     Global_Stuff.policySelectButton()
    
    //Select policy and Undo
    Global_Stuff.livePoliciesBTN()
    cy.get(':nth-child(6) > .panel-heading > .panel-title > .accordion-toggle > .label').last().click({force: true})
    cy.get(':nth-child(5) > :nth-child(4) > a').invoke("removeAttr", "target").click()

    //Move day back 1 and amend end time for Temp MTA
    cy.get('#ctl00_Main_EndDay').invoke('val').then(dayString => {
      const day = parseInt(dayString)
      cy.get('#ctl00_Main_EndDay')
        .select(day-1)
    })
    cy.get('#ctl00_Main_EndHour').select('22')
    cy.get('#ctl00_Main_Submit').click()
    cy.get('.col-md-12 > .alert').contains('Temporary Adjustment has been changed.')

  }) 
  

  


