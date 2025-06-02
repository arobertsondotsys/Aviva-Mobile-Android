export class AboutYou{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

checkForNoEmailTicked(){

    cy.get('#divEmailCheckbox > .a-checkbox > .a-checkbox__label input[type="checkbox"]')
    .then($checkbox => {
    if ($checkbox.is(':checked')) {
      cy.wrap($checkbox).uncheck({ force: true })
    }
  })
}

aboutYouTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_title).contains(this.UserData.HeadingData.AboutYou_Heading)

}

proposerTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_mr).select(1)

}

proposerForename(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_forename).type(this.UserData.InputData.ProposedForename, {force: true})

}

proposerSurname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_surname).type(this.UserData.InputData.ProposedSurname)

}

proposerEmail(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.proposeremail_element).type(this.UserData.InputData.Email1)

}

proposerNoEmail(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.proposernoemail).click()

}

phone(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.phone_element).type(this.UserData.InputData.Phone1)

}

aboutYouContinue(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_continue).click()

}

}