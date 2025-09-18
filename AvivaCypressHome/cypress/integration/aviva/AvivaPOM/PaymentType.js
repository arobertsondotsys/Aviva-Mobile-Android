export class PaymentType{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')

    paymentTypeAgentCcard(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(1)

    }

    paymentTypeAgentCard(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(3)

    }

    paymentTypeAgentPayNow(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agentcardpaycontinue).click()

    }

    paymentTypeAgentCardRenewal(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(3)

    }

    paymentTypeAgentNoPay(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(2)

    }

    paymentTypeAgentDD(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(3)

    }

    paymentTypeAgentNoPayContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agentnopaycontinue).click({force: true})

    }

    paymentTypeAgentMonthlypay(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_paymonthly).click()

    }


}