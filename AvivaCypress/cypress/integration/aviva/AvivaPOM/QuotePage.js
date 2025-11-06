export class QuotePage{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')


quotePageHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_heading).contains(this.UserData.HeadingData.QuotePage_Heading)

}

quotePageAddOpenDrive(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addopendriving).click()

}

quotePageExcess125(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_excess125).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_excessconfirm).click()

}

quotePageExcess300(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_excess300).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_excessconfirm).click()

}

quotePageExcess600(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_excess600).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_excessconfirm).click()

}

quotePageAddJourneywise(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_journeywise).click()

}

quotePageStepBack(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_stepback).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addncdcover).click()

}

quotePagePNCD(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_protected).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addncdcover).click()

}

quotePagePNCDStepBack(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_protectedstepback).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addncdcover).click()

}

buyNowBtn(){

    //cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.buynow_btn).click().wait(1000)

}

quotePageStaffOptions(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_staffoptions).click()

}

quotePageStaffDiscounts(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_discounts).select(2)

}

selectStaffDiscount(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_discountheading).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_discountselect).select(1)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_discountrecalc).click()
    //cy.wait(2000)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_nodiscountheading).should('contain', 'Call centre customer - No online discount')

}

quotePageEditCar(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_editcar).click()

}



}