export class BeforeYouGetYourQuote{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')

beforeYouGetYourQuoteTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.beforeyougetyourquote_title).contains(this.UserData.HeadingData.BeforeYouGetYourQuote_Heading)

}

beforeYouGetYourQuoteMarketingYes(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.beforeyougetyourquote_marketingyes).click()

}

beforeYouGetYourQuoteMarketingNo(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.beforeyougetyourquote_marketingno).click()

}

beforeYouGetYourQuoteIAgree(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.beforeyougetyourquote_iagree).click()

}

beforeYouGetYourQuoteContinue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.beforeyougetyourquote_continue).click()

}





}