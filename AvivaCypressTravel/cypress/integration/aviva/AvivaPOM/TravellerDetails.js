export class TravellerDetails{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')

travellerDetailsTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_title).contains(this.UserData.HeadingData.TravellerDetails_Heading)

}

travellerDetailsProposerDOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_proposerdob).type(this.UserData.InputData.DOB1)

}

travellerDetailsPMINo(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_pmino).click()

}

travellerDetailsPMIYes(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_pmiyes).click()

}

travellerDetailsContinue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_continue).click()

}



}