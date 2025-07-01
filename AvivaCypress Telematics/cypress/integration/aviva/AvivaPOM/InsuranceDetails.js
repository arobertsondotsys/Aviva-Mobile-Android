export class InsuranceDetails{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

insuranceDetailsTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.insurancedetails_title).contains(this.UserData.HeadingData.InsuranceDetails_Heading)

}

drivingExp(){

    cy.wait(500)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.drivingexp_ddl).select(1)
    cy.wait(500)
}

drivingExpYears(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.drivingexp_years).select(1)

}

carUse(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caruse_ddl).select(1)

}

insuranceDetailsContinue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.insurancedetails_continue).click()

}

}