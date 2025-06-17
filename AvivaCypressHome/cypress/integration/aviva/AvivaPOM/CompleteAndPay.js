export class CompleteAndPay{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')


    completeAndPayHeading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_heading).contains(this.UserData.HeadingData.CompleteAndPay_Heading)

    }

    completeAndPayMortgage(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_mortgage).select(1)

    }

    completeAndPayMyAvivaDocsNo(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_myavivadocsno).click()

    }

    completeAndPayCheckBox(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_checkbox).click({force:true})
        ////cy.wait(1000)

    }

    completeAndPayNoCheckBox(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_nocheckbox).should('not.exist')

    }

    completeAndPayContinue(){

        ////cy.wait(1000)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_continue).click()

    }

    completeAndPayNBPayNow(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_paynow).click()

    }

    completeAndPayRNLPayNow(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_paynow).click()

    }

}