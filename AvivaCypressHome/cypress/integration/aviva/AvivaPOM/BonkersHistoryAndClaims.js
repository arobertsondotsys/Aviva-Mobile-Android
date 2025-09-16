export class BonkersHistoryAndClaims{

    LoginElementLocators = require('./Page Elements/POMElementsHome.json')
    UserData = require('./Page Elements/POMInputHome.json')



bonkersClaimHistory(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_claimhistory).select(8)

}

bonkersConviction(isConvicition) {
    if (isConvicition) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_convictionyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_convictionno).click()
    }
}

bonkersRefused(isRefused) {
    if (isRefused) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_refusedyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_refusedno).click()
    }
}

bonkersSpecialTermsImposed(isSpecialTermsImposed) {
    if (isSpecialTermsImposed) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_specialtermsimposedyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_specialtermsimposedno).click()
    }
}

bonkersCancelled(isCancelled) {
    if (isCancelled) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_cancelledyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_cancelledno).click()
    }
}

bonkersHistoryAndClaimsContinue(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_historyandclaimscontinue).click()
    cy.wait(500)

}

}