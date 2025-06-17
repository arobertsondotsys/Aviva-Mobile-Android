export class PenaltyPoints{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

ppHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pp_heading).contains(this.UserData.HeadingData.PP_Heading)

}

ppTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pp_true).click()

}

ppFalse1st(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pp_false, { allowHidden: true }).first().click({force: true})

}

ppFalseLast(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pp_false, { allowHidden: true }).last().click({force: true})

}

ppContinue(){

    //cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pp_continue).click({force: true})

}

}