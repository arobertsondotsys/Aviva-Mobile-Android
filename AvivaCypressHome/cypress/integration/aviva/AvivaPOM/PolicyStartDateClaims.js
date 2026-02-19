export class PolicyStartDateClaims{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')

    coverStartTitle(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_title).contains(this.UserData.HeadingData.CoverStart_Heading)

    }

    claimsFreeYears(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_claimsfreeyears).select(7)

    }

    coverStartDate(){

        const day = require('dayjs')
        cy.wait(1000)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_date).type(day().format('DD/MM/YYYY'))

    }

    coverStartHaveCarIns(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_havecarfalse).click()

    }

    coverStartMarketing(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_marketingfalse).click()

    }

    coverStartCallConsent(consentYes = true) {
        const server = (Cypress.env('server') || '').trim().toLowerCase();
        if (server !== 'qa2') {
            const yesSelector = this.LoginElementLocators.QuotePageLocators.coverstart_callconsentyes;
            const noSelector = this.LoginElementLocators.QuotePageLocators.coverstart_callconsentno;
            cy.getAndWait(consentYes ? yesSelector : noSelector).click();
        }
        // If QA2, do nothing (question will not appear)
    }


    coverStartCustomerQuote(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_custcheck).click()

    }

    coverStartAgentQuote(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_custcheck).should('not.exist')

    }

    coverStartContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_continue).click()

    }

}