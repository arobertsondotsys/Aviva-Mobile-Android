export class YourClaims{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

claimsHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_heading).contains(this.UserData.HeadingData.Claims_Heading)

}

claimsTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_true).click()

}


claimsFalse1st(){

    cy.reload()
    cy.wait(2000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_false).first().click({force:true})

}

claimsFalseLast(){
    
    //cy.reload()
    cy.wait(2000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_false).last().click({force:true})

}

claimsFalse1stHoneyPot(){
    
    cy.wait(2000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_false).first().click({force:true})

}

claimsContinue(){

    //cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_continue).click({force: true})

}

}
