export class InsuranceDetailsEx{

    LoginElementLocators = require('./Page Elements/POMElements.json')


drivingExp(drivingExperience, yearsValue) {
    // Select the driving experience option from the dropdown
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.drivingexp_ddl).select(drivingExperience)

    // Handle the conditional input fields
    switch (drivingExperience) {
        case 'Insured in my own name in Ireland/UK':
            cy.getAndWait(this.LoginElementLocators.QuotePageLocators.drivingexp_years).should('be.visible').select(yearsValue)
            break
        case 'Currently insured as a named driver in Ireland':
            cy.getAndWait(this.LoginElementLocators.QuotePageLocators.drivingexp_named).should('be.visible').select(yearsValue)
            break
        case 'I currently have insurance in my own name outside Ireland/UK':
            cy.getAndWait(this.LoginElementLocators.QuotePageLocators.drivingexp_outsideroi).should('be.visible').select(yearsValue)
            break
        case 'No previous experience':
            // No input required
            break
        default:
            throw new Error('Unknown driving experience option: ' + drivingExperience);
    }
}

drivingExpYears(drivyears){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.drivingexp_years).select(drivyears)

}

carUse(classuse){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caruse_ddl).select(classuse)

}

}