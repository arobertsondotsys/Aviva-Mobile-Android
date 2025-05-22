export class Login{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')



    getUserIndex() {
        // Default to 1 if not set
        return Cypress.env('USER_INDEX') || 1;
    }

    getUsername1() {
        const idx = this.getUserIndex();
        return this.UserData.InputData[`User${idx}`] || this.UserData.InputData.User;
    }

    getPassword1() {
        const idx = this.getUserIndex();
        return this.UserData.InputData[`BOPass${idx}`] || this.UserData.InputData.BOPass;
    }
    
    company(){
       
        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.company_element).click().type(this.UserData.InputData.Comp)

    }

    username(){
    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.username_element).click()
      .type(this.getUsername1())
}

    password(){
    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.password_element).click()
      .type(this.getPassword1())
}
    
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

    loginButton(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.loginBtn_element).click()
        
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

    loginPassword(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_password).clear().type(this.UserData.InputData.PortalPass, {force:true})
        

    }

    loginPassword1(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_password).type(this.UserData.InputData.InvalidPass, {force:true})
        

    }

    loginPortalButton(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_login_btn).click()
        

    }

    handleLoginIfRequired() {
    cy.get('body').then(($body) => {
        if (
            $body.find('#ctl00_ContentPlaceHolder1_Login1_CompanyName').length > 0 &&
            $body.find('#ctl00_ContentPlaceHolder1_Login1_Username').length > 0
        ) {
            // Login form exists, enter login details
            cy.log('Login form found, entering login details.');
            cy.getAndWait(this.LoginElementLocators.LoginPageLocators.company_element)
              .click()
              .type(this.UserData.InputData.Comp);
            cy.getAndWait(this.LoginElementLocators.LoginPageLocators.username_element)
              .click()
              .type(this.getUsername1());
            cy.getAndWait(this.LoginElementLocators.LoginPageLocators.password_element)
              .click()
              .type(this.getPassword1());
            cy.getAndWait(this.LoginElementLocators.LoginPageLocators.loginBtn_element).click()
        } else {
            // Login form does not exist, click the specific element
            cy.log('Login form not found, clicking the specific element.');
            cy.getAndWait(this.LoginElementLocators.BOPageLocators.home_page).click()
        }
    })
}


        
}



