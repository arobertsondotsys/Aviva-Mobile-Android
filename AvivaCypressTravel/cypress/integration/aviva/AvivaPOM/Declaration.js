export class Declaration{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')

declarationTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.declaration_title).contains(this.UserData.HeadingData.Declaration_Heading)

}

declarationIAgree(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.declaration_iagree).click()

}

declarationBack(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.declaration_back).click()

}

declarationContinue(){

    cy.wait(2000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.declaration_continue).click()

}







}