export class PersonalDetailsEx{

    LoginElementLocators = require('./Page Elements/POMElements.json')


addressInput(address){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_input).type(address)

}


proposerDOB(dob){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_dob).type(dob)

}

proposerEmployStatus(status){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.employment_status).select(status)

}

licenceType(lictype){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.licence_type).select(lictype)

}

licenceYears(licyears){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.licence_years).select(licyears)

}


}