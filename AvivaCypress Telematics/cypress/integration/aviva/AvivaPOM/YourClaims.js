export class YourClaims{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

claimsHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_heading).contains(this.UserData.HeadingData.Claims_Heading)

}

claimsTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_true, { allowHidden: true }).click({force: true})

}


claimsFalse1st(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_false, { allowHidden: true }).first().click({force: true})

}

claimsFalseLast(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_false, { allowHidden: true }).last().click({force: true})

}

claimsContinue(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_continue).click({force: true})

}

}
