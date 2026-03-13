export class CarDetails{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

carDetailsTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.cardetails_title).contains(this.UserData.HeadingData.CarDetails_Heading)

}

carDetailsChangeDetails(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.cardetails_changedetails).click()

}

carRegYes(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carreg_yes).click()

}

carRegInput(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carreg_input).type(this.UserData.InputData.CarReg)

}

carRegInputAudiR8(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carreg_input).clear()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carreg_input).type('08D8')

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

carValueInput155K(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carvalue_input).select('155001')
    cy.wait(2000)

}

carTrackerYes(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.cartracker_yes).click()

}

carTrackerNo(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.cartracker_no).click()

}

carModifiedFalse(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carmodified_false).click()

}

carDetailsContinue(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.cardetails_continue).click()

}

}