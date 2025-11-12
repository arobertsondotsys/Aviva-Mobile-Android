export class Login{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

company(){
       
    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.company_element).click().type(this.UserData.InputData.Comp)

}

username(){
       
    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.username_element).click().type(this.UserData.InputData.User2)

}

password(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.password_element).click().type(this.UserData.InputData.BOPass)

}

username2(){
       
    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.username_element).click().type(this.UserData.InputData.User2)

}

password2(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.password_element).click().type(this.UserData.InputData.BOPass2)

}

username3(){
       
    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.username_element).click().type(this.UserData.InputData.User3)

}

password3(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.password_element).click().type(this.UserData.InputData.BOPass3)

}

username4(){
       
    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.username_element).click().type(this.UserData.InputData.User4)

}

password4(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.password_element).click().type(this.UserData.InputData.BOPass4)

}

username5(){
       
    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.username_element).click().type(this.UserData.InputData.User5)

}

password5(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.password_element).click().type(this.UserData.InputData.BOPass5)

}

loginButton(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.loginBtn_element).click()
    
}

loginPortalButton(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_login_btn).click()

}

email(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.emailsearch_element).type(this.UserData.InputData.Email1)

}

loginEmail(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_email).clear().type(this.UserData.InputData.Email1).should('have.value', this.UserData.InputData.Email1.substring(0,50))

}

loginEmail1(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_email).clear().type(this.UserData.InputData.InvalidEmail).should('have.value', this.UserData.InputData.InvalidEmail.substring(0,50))
    
}

loginEmail2(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_email).clear().type(this.UserData.InputData.InvalidEmail1).should('have.value', this.UserData.InputData.InvalidEmail1.substring(0,50))
    
}

loginPassword() {
    // Get the server from Cypress.env or default to empty string
    const server = Cypress.env('server') || '';
    let password;

    // Choose password based on server name
    if (server.toLowerCase().includes('4e2e') || server.toLowerCase().includes('7hotfix')) {
        password = this.UserData.InputData.PortalPass7Hotfix;
    } else {
        password = this.UserData.InputData.PortalPass;
    }

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_password)
      .clear({force:true})
      .type(password, {force:true});
}

loginPassword1(){

    cy.waitForElementToLoad(this.LoginElementLocators.LoginPageLocators.portal_password).clear({force:true}).type(this.UserData.InputData.InvalidPass, {force:true})

}



}