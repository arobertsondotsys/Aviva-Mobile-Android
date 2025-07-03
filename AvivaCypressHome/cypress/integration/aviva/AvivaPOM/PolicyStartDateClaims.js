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