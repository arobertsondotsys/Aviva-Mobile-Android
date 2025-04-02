import { Global } from "../AvivaPOM/Page Actions/POMActionsHome"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_stuff = new Global

describe('Agent MTA purchase', () => {
  it('should allow an agent to make an MTA purchase', () => {
    // Login to back office 
    Global_stuff.Server()
    Global_stuff.company()
    Global_stuff.username()
    Global_stuff.password()
    Global_stuff.loginButton()
    Global_stuff.email()
    Global_stuff.searchButton()
    Global_stuff.policySelectButton()
    Global_stuff.livePoliciesBTN()
    Global_stuff.homePolicyTab()
    Global_stuff.selectActionMakeADJWithPolicyNumber()
    Global_stuff.cookiesAccept()
    Global_stuff.adjustmentType()
    Global_stuff.adjustmentContinue()
    Global_stuff.quotePageOptionalCoverViewOptions()
    Global_stuff.addSpecifiedItemBTN()
    Global_stuff.addSpecifiedItemDescription()
    Global_stuff.addSpecifiedItemType()
    Global_stuff.addSpecifiedItemValue()
    Global_stuff.addSpecifiedItemAddItem()
    //cy.wait(120000)
    Global_stuff.adjustmentBuyNowBTN()
    Global_stuff.completeAndPayContinue()
    Global_stuff.paymentTypeAgentCard()
    Global_stuff.paymentTypeAgentPayNow()
    Global_stuff.paymentCardDemoAgent()
  })
})
  


  
    
 