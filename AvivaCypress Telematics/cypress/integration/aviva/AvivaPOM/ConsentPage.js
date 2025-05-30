export class ConsentPage{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')

telematicsConsentHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.telematicsconsent_heading).contains(this.UserData.HeadingData.Consent_Heading)

}

telematicsConsentEmail(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.telematicsconsent_email).contains('Telematics@dotsys.co.uk')

}

telematicsConsentEmailConfirm(){

    cy.wait(500)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.telematicsconsent_emailconfirm).type(this.UserData.InputData.Email1)

}

telematicsConsentCheckBox(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.telematicsconsent_consenttickbox).click()

}

telematicsConsentContinue(){

    cy.wait(500)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.telematicsconsent_consentcontinue).click()

}

}
