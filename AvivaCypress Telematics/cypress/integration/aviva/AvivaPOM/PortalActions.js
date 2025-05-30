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

portalManagePolicyWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
    
        cy.getAndWait('.policypanels')
            .contains(telematicsPolicyNumber)
            .closest('.d-flex.flex-column')
            .within(() => {
                cy.contains('Manage Policy').click({force: true})
            })
    })
        return
        
}


}