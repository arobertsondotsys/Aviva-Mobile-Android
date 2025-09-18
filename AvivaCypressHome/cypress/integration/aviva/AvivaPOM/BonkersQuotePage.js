export class BonkersQuotePage{

    LoginElementLocators = require('./Page Elements/POMElementsHome.json')
    UserData = require('./Page Elements/POMInputHome.json')



bonkersQuotePremium(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_quotepremium).should('not.contain', '0.00')

}

bonkersQuoteSelect(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_quotepremiumselect).click()

}

bonkersQuoteSelectAviva(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_quotepremiumselectquotecontainer).within(() => {
    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_quotepremiumavivaimage).should('be.visible')
    cy.contains('Select quote').click()
  })

}

bonkersquoteAccept(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_quoteaccept).click()
    cy.wait(3000)

}

}