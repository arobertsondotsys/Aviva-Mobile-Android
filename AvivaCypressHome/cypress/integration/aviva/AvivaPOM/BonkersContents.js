export class BonkersContents{

    LoginElementLocators = require('./Page Elements/POMElementsHome.json')
    UserData = require('./Page Elements/POMInputHome.json')



bonkersContents(isContents) {
    if (isContents) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_contentsyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_contentsno).click()
    }
}

bonkersContentsAmount(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_contentsamount).type(this.UserData.BonkersData.Bonkers_ContentsAmount)

}

bonkersUnspecifiedItem(isUnspecifiedItem) {
    if (isUnspecifiedItem) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_unspecifieditemcoveryes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_unspecifieditemcoverno).click()
    }
}

bonkersSpecifiedItem(isSpecifiedItem) {
    if (isSpecifiedItem) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_specifieditemcoveryes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_specifieditemcoverno).click()
    }
}

bonkerscontentsContinue(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_contentscontinue).click()

}

}