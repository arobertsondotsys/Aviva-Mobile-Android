export class AboutYourCarPQ1{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')


postQuote1Heading(){

    //cy.reload()
    //cy.wait(2000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_heading).contains(this.UserData.HeadingData.PostQuote1_Heading)
    return

}

postQuote1OwnCar(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_owncar).click({force: true})
    return

}

postQuote1PrivateIns(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_privins).click({force: true})
    //cy.wait(1000)
    return

}

postQuote1Continue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_continue).click({force: true})
    return

}

}