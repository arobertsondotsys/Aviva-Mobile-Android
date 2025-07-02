export class AboutYou{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

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

    const numbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10))
    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.phone_element).type('07' + numbers.join(''))

}

aboutYouContinue(){

    cy.wait(2000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_continue).click()

}

}