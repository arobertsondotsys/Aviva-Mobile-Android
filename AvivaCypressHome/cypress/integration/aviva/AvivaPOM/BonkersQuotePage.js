export class BonkersQuotePage{

    LoginElementLocators = require('./Page Elements/POMElementsHome.json')
    UserData = require('./Page Elements/POMInputHome.json')



bonkersQuotePremium(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_quotepremium).should('not.contain', '0.00')

}

bonkersQuoteSelect(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_quotepremiumselect).click()

}

bonkersQuoteSelectAviva() {
    cy.wait(4000)
    cy.getAndWait('img[alt="Aviva-logo"]') // Find the Aviva logo image
    .closest('.home-card-wrapper > .justify-between ') // Adjust if needed to the card's parent class
    .find('.home-card-wrapper > .justify-between > ._UiButton_1dpbh_1') // Adjust to the actual selector for the Select quote button
    .contains('Select quote')
    .click();
}

bonkersquoteAccept(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_quoteaccept).click()
    cy.wait(3000)

}

}