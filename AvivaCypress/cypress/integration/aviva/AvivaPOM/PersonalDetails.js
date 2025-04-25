export class PersonalDetails{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

personalDetailsTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.personaldetails_title).contains(this.UserData.HeadingData.PersonDetails_Heading)

}

addressInput(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_input).type(this.UserData.InputData.ProposedAddress)

}

addressSuggest(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_suggest).click()

}

addressSelect(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_select).click()

}

addressConfirm(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_confirm).click()

}

proposerDOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_dob).type(this.UserData.InputData.DOB1)

}

proposerEmployStatus(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.employment_status).select('C')

}

licenceType(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.licence_type).select('Full Irish')

}

licenceYears(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.licence_years).select('5')

}

personlaDetailsContinue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.personaldetails_continue).click()

}


}