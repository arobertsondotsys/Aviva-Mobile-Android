import { Global } from "../AvivaPOM/Page Actions/POMActionsHome"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
/// <reference types= "Cypress"/>

const Global_stuff = new Global

describe('Customer purchase home policy renewal on new DD', () => {
  it('should allow a customer to purchase a home policy renewal on new DD', () => {
    // Access quote link 
    Global_stuff.Server2()
    Global_stuff.removeAttr()
    Global_stuff.cookiesAccept()

    // About you
    Global_stuff.proposerTitleHome()
    Global_stuff.proposerForenameHome()
    Global_stuff.proposerSurnameHome()
    Global_stuff.proposerEmailHome()
    Global_stuff.phone()
    Global_stuff.dob()
    Global_stuff.addressInput()
    Global_stuff.addressSuggest()
    Global_stuff.addressSelect()
    Global_stuff.addressConfirm()
    Global_stuff.postalAddressConfirm()
    Global_stuff.occupancy()
    Global_stuff.proposerEmployStatus()
    
    Global_stuff.bizStatus()
    
    Global_stuff.aboutYouContinueHome()
  
    // Your Property
    Global_stuff.yourPropertyTitle()
    Global_stuff.propertyType()
    Global_stuff.yearBuilt()
    Global_stuff.listedBuildingFalse()
    Global_stuff.flatRoofFlase()
    Global_stuff.standardMaterialsTrue()
    Global_stuff.burglarAlarm()
    Global_stuff.smokeAlarmTrue()

    // Additional security standards
    Global_stuff.additSecStandsTitle()
    Global_stuff.securityLocks()
    Global_stuff.noOfBedrooms()
    Global_stuff.noOfBathrooms()
    Global_stuff.heatingType()
    Global_stuff.goodStateOfRepairTrue()
    Global_stuff.floodSubsidenceFalse()
    
    Global_stuff.yourPropertyContinue()

    // Your cover
    Global_stuff.yourCoverTitle() 
    Global_stuff.buildingAndContentsTrue()
    Global_stuff.buildingAndContentsFalse()
    Global_stuff.buildingAndContentsTrue()
    
    Global_stuff.homeValue()
    Global_stuff.contentsValue()
    Global_stuff.isClaimsFalse()
    Global_stuff.isConvictionsFalse()
    Global_stuff.isRefusedFalse()
    Global_stuff.isSpecialFalse()
    Global_stuff.isCancelledFalse()
    
    Global_stuff.yourCoverContinue()

    // Policy start date and claims
    Global_stuff.coverStartTitle()
    Global_stuff.claimsFreeYears()
    
    Global_stuff.coverStartDate()
    Global_stuff.coverStartHaveCarIns()
    Global_stuff.coverStartMarketing()
    Global_stuff.coverStartCustomerQuote()
    Global_stuff.coverStartContinue()

    // Quotepage
    Global_stuff.quotePageHeading()
    
    Global_stuff.quotePageBuyNowBtn()

    // Complete and pay
    Global_stuff.completeAndPayHeading()
    Global_stuff.completeAndPayMortgage()
    Global_stuff.completeAndPayCheckBox()
    Global_stuff.completeAndPayContinue()

    // Select payment type
    Global_stuff.paymentCardQA()

    // Thank you page
    Global_stuff.thankyouHeading()
    Global_stuff.retreivePolicyNumber()

    // Navigate to the B/O and login
    Global_stuff.Server()
    Global_stuff.company()
    Global_stuff.username()
    Global_stuff.password()
    Global_stuff.loginButton()
    Global_stuff.email()
    Global_stuff.searchButton()
    Global_stuff.policySelectButton()
    Global_stuff.livePoliciesBTN()

    // Back date policy
    Global_stuff.policyToolsAgePolicyWithPolicyNumber()
    Global_stuff.agePolicy()
    // cy.get('#ctl00_ContentPlaceHolder1_BackDateDay').select(8)
    // cy.get('#ctl00_ContentPlaceHolder1_BackDateMonth').select(2)
    // cy.get('#ctl00_ContentPlaceHolder1_BackDateYear').select(3)
    // cy.get('#ctl00_ContentPlaceHolder1_UpdateDate').click()

    // Generate and invite renewal
    cy.go(-2)
    Global_stuff.generateRenewal()
    Global_stuff.inviteRenewal()

    // Checking for renewal invite email in docs
    Global_stuff.recallPolicy()
    Global_stuff.livePoliciesBTN()
    Global_stuff.selectActionDocumentsWithPolicyNumber()
    Global_stuff.checkRenewalInviteDocs()
    cy.go(-1)
  
    // Purchase Home Renewal as customer
    Global_stuff.Server1()
    Global_stuff.loginEmail()
    Global_stuff.loginPassword()
    Global_stuff.loginPortalButton()
    Global_stuff.portalRenewPolicySelect()
    Global_stuff.portalRenewDocsConfirm()
    
    Global_stuff.portalRenewMonthlyPaymentSwap()
    
    Global_stuff.coverStartCustomerQuote()
    Global_stuff.completeAndPayContinue()
  
    Global_stuff.paymentDDQA()
    cy.wait(4000)

    Global_stuff.thankyouHeading()

    // Navigate back to B/O and check renewal docs have generated
    Global_stuff.Server()
    Global_stuff.home()
    Global_stuff.email()
    Global_stuff.searchButton()
    Global_stuff.policySelectButton()
    Global_stuff.livePoliciesBTN()
    Global_stuff.selectActionDocumentsWithPolicyNumber()
    Global_stuff.checkRenewalDocs()
  })
})


  
    
 