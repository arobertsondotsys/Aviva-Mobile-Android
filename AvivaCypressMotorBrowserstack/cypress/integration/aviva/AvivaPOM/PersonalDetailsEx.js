export class PersonalDetailsEx{

    LoginElementLocators = require('./Page Elements/POMElements.json')


addressInput(address){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_input).type(address)

}


proposerDOB(dob){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_dob).type(dob)

}

proposerEmployStatus(employmentStatus, occupation) {
    // Select employment status (adjust selector as needed)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.employment_status).select(employmentStatus)

    // If employed or self employed, enter occupation
    if (
        employmentStatus &&
        ['Employed', 'Self Employed'].includes(employmentStatus.trim())
    ) {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.driver_occupation).clear().type(occupation)
        cy.getAndWait('#ui-id-1').contains(occupation).click()
        
    }
}

licenceType(lictype, countryObtained){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.licence_type).select(lictype)

    // If Full EU or Non EU, enter country obtained
    if (
        lictype &&
        ['Full EU', 'Non EU'].includes(lictype.trim())
    ) {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.licence_obtained).select(countryObtained)
    }

}

licenceYears(licyears){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.licence_years).select(licyears)

}


}