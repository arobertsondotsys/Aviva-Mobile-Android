export class InsuranceDetailsEx{

    LoginElementLocators = require('./Page Elements/POMElements.json')


drivingExp(drivexp){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.drivingexp_ddl).select(drivexp);

}

drivingExpYears(drivyears){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.drivingexp_years).select(drivyears)

}

carUse(classuse){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caruse_ddl).select(classuse)

}

}