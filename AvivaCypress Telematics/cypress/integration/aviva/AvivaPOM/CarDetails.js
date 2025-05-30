export class CarDetails{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

carDetailsTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.cardetails_title).contains(this.UserData.HeadingData.CarDetails_Heading)

}

carRegYes(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carreg_yes).click()

}

carRegInput(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carreg_input).type(this.UserData.InputData.CarReg)

}

findCarBTN(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.findcar_btn).click()

}

confirmCarBTN(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.confirmcar_btn).click()

}

carValueInput(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carvalue_input).select('75000')

}

carModifiedFalse(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carmodified_false).click({force: true})

}

carDetailsContinue(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.cardetails_continue).click()

}

}