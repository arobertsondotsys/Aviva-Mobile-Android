export class Decline{

    LoginElementLocators = require('./Page Elements/POMElementsHome.json')
    UserData = require('./Page Elements/POMInputHome.json')


declineHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.decline_heading).contains(this.UserData.HeadingData.Decline_Heading)

}

declineOverrideToQuote(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.decline_overridetoquote).click()

}

declineOverrideToDecline(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.decline_overridetodecline).click()

}

declineOverrideToQuoteContinue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.decline_overridetoquotecontinue).click()

}

}