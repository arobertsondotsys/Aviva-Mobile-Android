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
    cy.wait(10000);
    cy.getAndWait('img[alt="Aviva-logo"]').each(($img) => {
        // Traverse up to the card container (adjust selector if needed)
        const $card = $img.closest('.justify-between');
        if ($card.length) {
            cy.wrap($card).find('._UiButton_1dpbh_1').contains('Select quote').click();
            return false; // Stop after clicking the first match
        }
    });
}

bonkersquoteAccept(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_quoteaccept).click()
    cy.wait(3000)

}

}