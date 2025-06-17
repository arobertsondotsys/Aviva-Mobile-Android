export class CancellationBOActions{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')

    cancellationRequest(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_request).select(1)

    }

    cancellationReason(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_poilcyholderreason).select(2)

    }

    cancellationReason1(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_osdocs).click()

    }

    cancellationReasonContinue(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_reasoncontinue).click()

    }

    cancellationInception(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_inception).click()

    }

    cancellationContinue(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_continue).click()
        ////cy.wait(1000)

    }

    cancellationAccept(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_accept).click()

    }

    cancellationDone(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_done).should('contain', 'Your policy has been cancelled')

    }

}