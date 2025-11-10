export class Cancel{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')
    

cancellationTitle(){

    cy.getAndWait(this.LoginElementLocators.BOCancPageLocators.cancellation_heading).contains(this.UserData.HeadingData.Cancellation_Heading)

}

cancellationRequests(){

    cy.getAndWait(this.LoginElementLocators.BOCancPageLocators.Cancellation_request).select('Insurer')

}

cancellationReason(){

    cy.getAndWait(this.LoginElementLocators.BOCancPageLocators.cancellation_reasonddl).click()
    cy.getAndWait(this.LoginElementLocators.BOCancPageLocators.cancellation_reason).click()

}

cancellationContinue(){

    cy.getAndWait(this.LoginElementLocators.BOCancPageLocators.cancellation_continue).click()

}

cancellationDateHeading(){

    cy.getAndWait(this.LoginElementLocators.BOCancPageLocators.cancellation_dateheading).should('have.text', 'What date would you like to cancel from?')
    cy.wait(1000)
}

cancellationDate(){

    const day = require('dayjs')
    cy.getAndWait(this.LoginElementLocators.BOCancPageLocators.cancellation_date).type(day().add(6, 'day').format('DD/MM/YYYY'))

}

cancellationDateContinue(){

    cy.getAndWait(this.LoginElementLocators.BOCancPageLocators.cancellation_staffcontinue).click()

}

cancellationAmountHeading(){

    cy.getAndWait(this.LoginElementLocators.BOCancPageLocators.cancellation_amountheading).should('have.text', 'Amount to be refunded')

}

cancellationAmountContinue(){

    cy.getAndWait(this.LoginElementLocators.BOCancPageLocators.cancellation_amountcontinue).click()

}

cancellationConfirmHeading(){

    cy.getAndWait(this.LoginElementLocators.BOCancPageLocators.cancellation_confirmheading).should('have.text', 'Your policy has been cancelled')

}

}