export class PaymentTypes{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')


paymentTypeAgentCcard(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(1)

}

paymentTypeAgentNoPay(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(2)

}

paymentTypeAgentCheque(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agentchequeamount).type('100')
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agentchequeref).type('test')
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agentchequepay).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agentchequecontinue).click()

}

paymentTypeAgentDD(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(3)

}

paymentTypeAgentADJCard(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(3)

}

paymentTypeAgentNoPayContinue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agentnopaycontinue).click()

}


paymentTypeAgentADJCardContinue(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.permmta_cardadjpaynow).click()

}


}