export class CoverStartDate{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

coverStartHeading(){
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_heading).contains(this.UserData.HeadingData.CoverStart_Heading)

}

coverStartDate(){

    const day = require('dayjs')

    cy.waitForElementToLoad(this.LoginElementLocators.QuotePageLocators.coverstart_date).type(day().format('DD/MM/YYYY'),{force: true})

}

coverStartDatePlus1(){

    const day = require('dayjs')

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_date).type(day().add(1, 'day').format('DD/MM/YYYY'),{force: true})

}

coverStartHaveHomeIns(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_havehomefalse, { allowHidden: true }).click({force: true})

}

coverStartHaveHomeInsTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_havehometrue, { allowHidden: true }).click({force: true})

}

coverStartHaveCarIns(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_havecarfalse, { allowHidden: true }).click({force: true})

}

coverStartHaveCarInsTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_havecartrue, { allowHidden: true }).click({force: true})

}

coverStartPromoCode(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_promocode).type(this.UserData.InputData.PromoCode)

}

coverStartMarketing(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_marketing).click()

}

coverStartNotCustomerQuote(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_notcustcheck).should('not.be.visible')

}

coverStartCustomerQuote(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_custcheck).click()

}

coverStartCustomerQuote1(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_custcheck1).click()

}

coverStartContinue(){

    //cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_continue).click({force:true})

}


}