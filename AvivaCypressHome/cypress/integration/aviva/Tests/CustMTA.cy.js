import { Global } from "../AvivaPOM/Page Actions/POMActionsHome"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_stuff = new Global

describe('Customer MTA purchase', () => {
  it('should allow a customer to make an MTA purchase', () => {
    // Access quote link 
    Global_stuff.Server1()
    Global_stuff.cookiesAccept()
    Global_stuff.loginEmail()
    Global_stuff.loginPassword()
    Global_stuff.loginPortalButton()
    Global_stuff.portalMakeADJWithPolicyNumber()
    Global_stuff.portalMakeAdjustmentSelect()
    Global_stuff.portalAdjustmentTypeSelect()
    Global_stuff.portalAdjContinue()
    // cy.get('.a-checkbox__label').click()
    // cy.get('#MainContent_Continue4').click()
    Global_stuff.portalMortgageSelect()
    Global_stuff.portalMortgageIntLetterTrue()
    Global_stuff.portalMortgageProvider()
    Global_stuff.completeAndPayCheckBox()
    Global_stuff.completeAndPayContinue()
    Global_stuff.thankyouHeading()
    cy.contains('Your Notice of Bank Interest Letter')
  })
})
  


  
    
 