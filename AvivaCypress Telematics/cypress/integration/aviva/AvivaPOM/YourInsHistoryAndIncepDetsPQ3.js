export class YourInsHistoryAndIncepDetsPQ3{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')


postQuote3Heading(){

    
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_heading, { allowHidden: true }).contains(this.UserData.HeadingData.PostQuote3_Heading, {force: true})

}

postQuote3NCDROITrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_isncdroitrue).click({force: true})

}

postQuote3NoOtherNCDTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_nootherncdtrue).click({force: true})

}

postQuote3WithinExpiryTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_withinexptrue).click({force: true})

}

postQuote3OtherHome(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_othercarpolicy).type(this.UserData.InputData.OtherHomePol)

}

postQuote3OtherCar(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_otherhomepolicy).type(this.UserData.InputData.OtherCarPol)

}

postQuote3IsMyAvivaTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_ismyavivatrue).click({force: true})

}

postQuote3IsMyAvivaFalse(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_ismyavivatrue).click({force: true})

}

postQuote3PostCert(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_ispostcerttrue, { allowHidden: true }).click({force: true})

}

postQuote3PostCertFalse(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_ispostcertfalse, { allowHidden: true }).click({force: true})

}

postQuote3PostDocs(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_ispostdocstrue, { allowHidden: true }).click({force: true})

}

postQuote3PostDocsFalse(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_ispostdocsfalse, { allowHidden: true }).click({force: true})

}

postQuote3CustomerQuoteTsAndCs(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_custcheck).click({force: true})

}


postQuote3Continue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_continue).click({force: true})

}

}