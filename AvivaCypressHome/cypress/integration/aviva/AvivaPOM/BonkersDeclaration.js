export class BonkersDeclaration{

    LoginElementLocators = require('./Page Elements/POMElementsHome.json')
    UserData = require('./Page Elements/POMInputHome.json')


bonkersDeclarationAgree(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_declarationagree).click()

}


bonkersTsAndCsAgree(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_tsandcsagree).click()

}

bonkersDeclarationContinue(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_declarationcontinue).click()

}

}