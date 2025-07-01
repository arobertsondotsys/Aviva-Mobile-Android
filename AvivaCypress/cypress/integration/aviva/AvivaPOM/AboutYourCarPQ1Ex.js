export class AboutYourCarPQ1Ex{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')


carRegManual(carregknown, carreg){
    if (carregknown === false || carregknown === "False") {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_carreg).type(carreg)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_confirmcarreg).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_declinecar).click()
    }
}

}