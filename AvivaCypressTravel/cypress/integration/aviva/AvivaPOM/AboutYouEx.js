export class AboutYouEx{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    

proposerTitle(title){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_mr).select(title)

}

proposerForename(forename){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_forename).type(forename)

}

proposerSurname(surname){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_surname).type(surname)

}

proposerEmail(email){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.proposeremail_element).type(email)

}


phone(phone){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.phone_element).type(phone)

}


}