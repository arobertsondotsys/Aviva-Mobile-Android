import { realClick } from 'cypress-real-events/commands/realClick'

export class AboutYourCarPQ1Ex{

    LoginElementLocators = require('./Page Elements/POMElements.json')


carRegManual(carregknown, carreg){
    if (carregknown === false || carregknown === "False") {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_carreg).clear().type(carreg).should('have.value', carreg).blur()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_findcar).click()
        cy.wait(4000)

        // cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_findcar).click()
 
    }
}

}