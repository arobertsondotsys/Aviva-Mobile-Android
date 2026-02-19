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

beforeYouGetYourQuoteCallConsent(consentYes = true) {
    const server = (Cypress.env('server') || '').trim().toLowerCase();
    if (server !== 'qa2') {
        const yesSelector = this.LoginElementLocators.QuotePageLocators.coverstart_callconsentyes;
        const noSelector = this.LoginElementLocators.QuotePageLocators.coverstart_callconsentno;
        cy.getAndWait(consentYes ? yesSelector : noSelector).click();
    }
    // If QA2, do nothing (question will not appear)
}

beforeYouGetYourQuoteIAgree(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.beforeyougetyourquote_iagree).click()

}

beforeYouGetYourQuoteContinue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.beforeyougetyourquote_continue).click()

}





}