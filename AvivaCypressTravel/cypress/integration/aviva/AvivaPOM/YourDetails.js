export class YourDetails{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')

yourDetailsTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourdetails_title).contains(this.UserData.HeadingData.Yourdetails_Heading)

}

yourDetailsProposerTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourdetailsproposer_mr).select(1)

}

yourDetailsProposerForename(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourdetailsproposer_forename).type(this.UserData.InputData.ProposedForename, {force: true})

}

yourDetailsProposerSurname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourdetailsproposer_surname).type(this.UserData.InputData.ProposedSurname)

}

yourDetailsProposerEmail(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourdetailsproposer_email).type(this.UserData.InputData.Email1)

}

proposerNoEmail(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.proposernoemail).click()

}

yourDetailsPhone(){

    const numbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10))
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourdetailsproposer_phone).type('07' + numbers.join(''))

}

yourDetailsContinue(){

    cy.wait(2000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourdetailsproposer_continue).click()

}

}