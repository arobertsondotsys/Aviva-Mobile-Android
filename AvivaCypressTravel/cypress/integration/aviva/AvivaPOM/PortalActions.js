export class PortalActions{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')


forgotEmailPassDOB(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.forgotep_dob).type(this.UserData.InputData.DOB1)

}

registerDOB(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.register_dob).type(this.UserData.InputData.DOB1)

}

forgotEmailPassPolicy(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.forgotep_policy).type(this.UserData.InputData.InvalidPolicy)

}

forgotEmail(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.forgot_email).type(this.UserData.InputData.InvalidEmail2)

}

registerPolicy(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.register_policy).type(this.UserData.InputData.InvalidPolicy)

}

portalManagePolicyWithTravelMultiFamilyWith2AddOnsPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const travelMultiFamilyWith3AddOns = data.travelMultiFamilyWith3AddOns
    
        cy.getAndWait('.policypanels')
            .contains(travelMultiFamilyWith3AddOns)
            .closest('.d-flex.flex-column')
            .within(() => {
                cy.contains('Manage Policy').click({force: true})
            })
    })
        return
        
}

portalManagePolicyWithTravelPolicyNumberSingle(){

    cy.readFile('policy.json').then((data) => {
        const travelPolicyNumberSingle = data.travelPolicyNumberSingle
    
        cy.getAndWait('.policypanels')
            .contains(travelPolicyNumberSingle)
            .closest('.d-flex.flex-column')
            .within(() => {
                cy.contains('Manage Policy').click({force: true})
            })
    })
        return
        
}

portalCancelBTN(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationbtn).click()

}

portalCancellationrequest(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationrequest).click()

}

portalCancellationreason(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationreasonddl).select(1)
    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationagreeandconfirm).click()

}

portalCancellationContinue(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationcontinue).click()

}

portalCancellationDateHeading(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationdateheading).click()

}

portalCancellationDate(){

    const day = require('dayjs')
    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationdate).type(day().add(6, 'day').format('DD/MM/YYYY'))

}

portalCancellationAmountHeading(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationamountheading).contains(this.UserData.HeadingData.Cancellation_Amount_Heading)

}

portalCancellationAmountContinue(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationamountcontinue).click()

}

portalCancellationCancelPolicyHeading(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationcancelpolicyheading).contains(this.UserData.HeadingData.Cancellation_CancelPolicy_Heading)

}

portalCancellationCBeforeYouProceedHeading(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationbeforeyouproceedheading).contains(this.UserData.HeadingData.Cancellation_BeforeYouProceed_Heading)

}

portalCancellationSignature(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationsignature).click().click()

}

portalCancellationDate(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationcancelpolicycontinue).click()

}

portalCancellationConfirmHeading(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationconfirmheading).contains(this.UserData.HeadingData.Cancellation_CancConfirm_Heading)

}

portalCancellationconfirmContinue(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationconfirmcontinue).click()

}

portalCancellationConfirmPageHeading(){

    cy.getAndWait(this.LoginElementLocators.PortalCancPageLocators.portal_cancellationconfirmpageheading).contains(this.UserData.HeadingData.Cancellation_CancConfirmationPage_Heading)

}




}