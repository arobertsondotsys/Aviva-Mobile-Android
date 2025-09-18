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
    cy.wait(6000)
    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_quotepremiumselectquotecontainer).each(($card) => {
        if ($card.find(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_quotepremiumavivaimage).length > 0) {
            cy.wrap($card).contains('Select quote').click();
            return false
        }
    })
}

bonkersquoteAccept(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_quoteaccept).click()
    cy.wait(3000)

}

}