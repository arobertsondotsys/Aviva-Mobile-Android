export class Global {

    LoginElementLocators = require('../Page Elements/POMElements.json')
    UserData = require('../Page Elements/POMInput.json')

    constructor() {
        this.serverUrls = {
            QA: 'https://qaaviva.dotsys.co.uk/BackOffice/Login.aspx?',
            QA2: 'https://qa2aviva.dotsys.co.uk/BackOffice/Login.aspx?',
            QA3: 'https://qa3aviva.dotsys.co.uk/BackOffice/Login.aspx?',
            TEST2LOADED: 'https://testaviva2loaded.dotsys.co.uk/backoffice/Login.aspx',
            DEMO: 'https://testaviva3.dotsys.co.uk/backoffice/Login.aspx?',
            TEST3FAT: 'https://testaviva3fat.dotsys.co.uk/backoffice/Login.aspx?',
            TEST4E2E: 'https://testaviva4e2e.dotsys.co.uk/backoffice/Login.aspx?',
            TEST5PRICING: 'https://testaviva5pricing.dotsys.co.uk/backoffice/Login.aspx?',
            TEST6TRAINING: 'https://testaviva6training.dotsys.co.uk/backoffice/Login.aspx?',
            TEST7HOTFIX: 'https://testaviva7hotfix.dotsys.co.uk/backoffice/Login.aspx?',
            TEST8CRMIGRATION: 'https://testaviva8crmigration.dotsys.co.uk/backoffice/Login.aspx?',
            TEST9FATMIGRATION: 'https://testaviva9fatmigration.dotsys.co.uk/backoffice/Login.aspx?',
            TEST10PRODMIGRATION: 'https://testaviva10prodmigration.dotsys.co.uk/backoffice/Login.aspx?',
            GCCPRE: 'https://gcc-pre.aviva.ie/backoffice/Default.aspx'
        }

        this.server1Urls = {
            QA: 'https://qainsurance-aviva.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            QA2: 'https://qa2insurance-aviva.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            QA3: 'https://qa3insurance-aviva.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST2LOADED: 'https://insurance-testaviva2loaded.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            DEMO: 'https://insurance-testaviva3.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST3FAT: 'https://insurance-testaviva3fat.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST4E2E: 'https://insurance-testaviva4e2e.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST5PRICING: 'https://insurance-testaviva5pricing.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST6TRAINING: 'https://insurance-testaviva6training.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST7HOTFIX: 'https://insurance-testaviva7hotfix.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST8CRMIGRATION: 'https://insurance-testaviva8crmigration.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST9FATMIGRATION: 'https://insurance-testaviva9fatmigration.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST10PRODMIGRATION: 'https://insurance-testaviva10prodmigration.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            GCCPRE: 'https://insurance-pre.aviva.ie/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy'
        }

        this.server2Urls = {
            QA: 'https://qainsurance-aviva.dotsys.co.uk/testdemolinks.html#',
            QA2: 'https://qa2insurance-aviva.dotsys.co.uk/testdemolinks.html#',
            QA3: 'https://qa3insurance-aviva.dotsys.co.uk/testdemolinks.html#',
            TEST2LOADED: 'http://insurance-testaviva2loaded.dotsys.co.uk/testdemolinks.html',
            DEMO: 'https://insurance-testaviva3.dotsys.co.uk/testdemolinks.html',
            TEST3FAT: 'https://insurance-testaviva3fat.dotsys.co.uk/testdemolinks.html',
            TEST4E2E: 'https://insurance-testaviva4e2e.dotsys.co.uk/testdemolinks.html',
            TEST5PRICING: 'https://insurance-testaviva5pricing.dotsys.co.uk/testdemolinks.html',
            TEST6TRAINING: 'https://insurance-testaviva6training.dotsys.co.uk/testdemolinks.html',
            TEST7HOTFIX: 'https://insurance-testaviva7hotfix.dotsys.co.uk/testdemolinks.html',
            TEST8CRMIGRATION: 'https://insurance-testaviva8crmigration.dotsys.co.uk/testdemolinks.html',
            TEST9FATMIGRATION: 'https://insurance-testaviva9fatmigration.dotsys.co.uk/testdemolinks.html',
            TEST10PRODMIGRATION: 'https://insurance-testaviva10PRODmigration.dotsys.co.uk/testdemolinks.html',
            GCCPRE: 'https://insurance-pre.aviva.ie/testdemolinks.html'
        }
    }

    Server(serverKey = 'QA2') {
        const url = this.serverUrls[serverKey] || this.serverUrls['QA2'] // Default to QA2 if no valid serverKey is provided
        Cypress.env('serverKey', serverKey) // Set the environment variable
        cy.visit(url)
    }

    Server1(serverKey = 'QA2') {
        const url = this.server1Urls[serverKey] || this.server1Urls['QA2'] // Default to QA2 if no valid serverKey is provided
        Cypress.env('serverKey', serverKey) // Set the environment variable
        cy.visit(url)
    }

    Server2(serverKey = 'QA2') {
        const url = this.server2Urls[serverKey] || this.server2Urls['QA2'] // Default to QA2 if no valid serverKey is provided
        Cypress.env('serverKey', serverKey) // Set the environment variable
        cy.visit(url)
    }


    //Global actions

    company(){
       
        cy.get(this.LoginElementLocators.LoginPageLocators.company_element).click().type(this.UserData.InputData.Comp)
        return

    }
    username(){
       
        cy.get(this.LoginElementLocators.LoginPageLocators.username_element).click().type(this.UserData.InputData.User)
        return

    }

    password(){

        cy.get(this.LoginElementLocators.LoginPageLocators.password_element).click().type(this.UserData.InputData.BOPass)
        return

    }

    phone(){

        cy.get(this.LoginElementLocators.LoginPageLocators.phone_element).type(this.UserData.InputData.Phone1)
        return

    }

    dob(){

        cy.get(this.LoginElementLocators.LoginPageLocators.dob_element).type(this.UserData.InputData.DOB1)
        return

    }

    forgotEmailPassDOB(){

        cy.get(this.LoginElementLocators.LoginPageLocators.forgotep_dob).type(this.UserData.InputData.DOB1)
        return

    }

    registerDOB(){

        cy.get(this.LoginElementLocators.LoginPageLocators.register_dob).type(this.UserData.InputData.DOB1)
        return

    }

    forgotEmailPassPolicy(){

        cy.get(this.LoginElementLocators.LoginPageLocators.forgotep_policy).type(this.UserData.InputData.InvalidPolicy)
        return

    }

    forgotEmail(){

        cy.get(this.LoginElementLocators.LoginPageLocators.forgot_email).type(this.UserData.InputData.InvalidEmail2)
        return

    }

    registerPolicy(){

        cy.get(this.LoginElementLocators.LoginPageLocators.register_policy).type(this.UserData.InputData.InvalidPolicy)
        return

    }

    proposerEmail(){

        cy.get(this.LoginElementLocators.LoginPageLocators.proposeremail_element).type(this.UserData.InputData.Email1)
        return

    }

    loginButton(){

        cy.get(this.LoginElementLocators.LoginPageLocators.loginBtn_element).click()
        return
    }

    email(){

        cy.get(this.LoginElementLocators.LoginPageLocators.emailsearch_element).type(this.UserData.InputData.Email1)
        return
    }

    searchButton(){

        cy.get(this.LoginElementLocators.LoginPageLocators.searchBtn_element).click()
        return
    }

    policySelectButton(){

        cy.get(this.LoginElementLocators.LoginPageLocators.policyslctbtn_element).click()
        return

    }

    loginEmail(){

        cy.get(this.LoginElementLocators.LoginPageLocators.portal_email).clear().type(this.UserData.InputData.Email1).should('have.value', this.UserData.InputData.Email1.substring(0,50))
        return
    }

    loginEmail1(){

        cy.get(this.LoginElementLocators.LoginPageLocators.portal_email).clear().type(this.UserData.InputData.InvalidEmail).should('have.value', this.UserData.InputData.InvalidEmail.substring(0,50))
        return
    
    }

    loginEmail2(){

        cy.get(this.LoginElementLocators.LoginPageLocators.portal_email).clear().type(this.UserData.InputData.InvalidEmail1).should('have.value', this.UserData.InputData.InvalidEmail1.substring(0,50))
        return
    
    }

    loginPassword(){

        cy.get(this.LoginElementLocators.LoginPageLocators.portal_password).clear().type(this.UserData.InputData.PortalPass, {force:true})

        //cy.get(this.LoginElementLocators.LoginPageLocators.portal_password).clear().type(this.UserData.InputData.PortalPass7Hotfix, {force:true})
        return

    }

    loginPassword1(){

        cy.get(this.LoginElementLocators.LoginPageLocators.portal_password).type(this.UserData.InputData.InvalidPass, {force:true})
        return

    }

    loginPortalButton(){

        cy.get(this.LoginElementLocators.LoginPageLocators.portal_login_btn).click()
        return

    }

    cookiesAccept(){

        // //7HOTFIX ONLY
        // cy.get('body').then(($body) => {
        //     if ($body.find('#onetrust-accept-btn-handler').length > 0) {
        //         cy.get('#onetrust-accept-btn-handler', {timeout: 3000}).click()
        //     } else {
        //         cy.log('Element not found')
        //     }
        // })


        cy.get('.ot-sdk-container > .ot-sdk-row').then(($body) => {
            if ($body.find('#onetrust-accept-btn-handler').length > 0) {
                cy.get('#onetrust-accept-btn-handler').click()
            } else {
                cy.log('Element not found')
            }
        })
        return

    }

    removeAttr(){

        cy.get(this.LoginElementLocators.QuotePageLocators.quote_linkbtn).invoke("removeAttr", "target").click()
        return

    }

    agentQuote(){

        cy.get(this.LoginElementLocators.QuotePageLocators.agent_quote).select(1)
        cy.window().then((win) => {
            const orig = win.open
          
            win.open = function (url, target, features) {
              return orig.call(this, url, '_self', features)
            }
          })
        return

    }


    //Global Quote Actions (About you)

    aboutYouTitle(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutyou_title).contains(this.UserData.HeadingData.AboutYou_Heading)
        return

    }

    proposerTitle(){

        cy.get(this.LoginElementLocators.QuotePageLocators.proposer_mr).select(1)
        return

    }

    proposerForename(){

        cy.get(this.LoginElementLocators.QuotePageLocators.proposer_forename).type(this.UserData.InputData.ProposedForename, {force: true})
        return

    }

    proposerSurname(){

        cy.get(this.LoginElementLocators.QuotePageLocators.proposer_surname).type(this.UserData.InputData.ProposedSurname)
        return

    }

    aboutYouContinue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutyou_continue).click()
        cy.wait(2000)
        return

    }

    //Global Quote Actions (Personal Details)

    personalDetailsTitle(){

        cy.get(this.LoginElementLocators.QuotePageLocators.personaldetails_title).contains(this.UserData.HeadingData.PersonDetails_Heading)
        return

    }

    addressInput(){

        cy.wait(2000)
        cy.get(this.LoginElementLocators.QuotePageLocators.address_input).type(this.UserData.InputData.ProposedAddress)
        return

    }

    addressSuggest(){

        cy.get(this.LoginElementLocators.QuotePageLocators.address_suggest).click()
        return

    }

    addressSelect(){

        cy.get(this.LoginElementLocators.QuotePageLocators.address_select).click()
        return

    }

    addressConfirm(){

        cy.get(this.LoginElementLocators.QuotePageLocators.address_confirm).click()
        return

    }

    proposerDOB(){

        cy.get(this.LoginElementLocators.QuotePageLocators.proposer_dob).type(this.UserData.InputData.DOB1)
        return

    }

    proposerEmployStatus(){

        cy.get(this.LoginElementLocators.QuotePageLocators.employment_status).select('C')
        return

    }

    licenceType(){

        cy.get(this.LoginElementLocators.QuotePageLocators.licence_type).select('Full Irish')
        return

    }

    licenceYears(){

        cy.get(this.LoginElementLocators.QuotePageLocators.licence_years).select('5')
        return

    }

    personlaDetailsContinue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.personaldetails_continue).click()
        return

    }

    //Global Quote Actions (Inusrance Details)

    insuranceDetailsTitle(){

        cy.get(this.LoginElementLocators.QuotePageLocators.insurancedetails_title).contains(this.UserData.HeadingData.InsuranceDetails_Heading)
        return

    }

    drivingExp(){

        cy.get(this.LoginElementLocators.QuotePageLocators.drivingexp_ddl,({waitForAnimations: false},{force: true})).select(1,{force: true})
        return

    }

    drivingExpYears(){

        cy.get(this.LoginElementLocators.QuotePageLocators.drivingexp_years).select(6,{force: true})
        return

    }

    carUse(){

        cy.get(this.LoginElementLocators.QuotePageLocators.caruse_ddl).select(1,{force: true})
        return

    }

    insuranceDetailsContinue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.insurancedetails_continue).click({force: true})
        return

    }

    //Global Quote Actions (Car Details)

    carDetailsTitle(){

        cy.get(this.LoginElementLocators.QuotePageLocators.cardetails_title).contains(this.UserData.HeadingData.CarDetails_Heading)
        return

    }

    carRegYes(){

        cy.get(this.LoginElementLocators.QuotePageLocators.carreg_yes).click()
        return

    }

    carRegInput(){

        cy.get(this.LoginElementLocators.QuotePageLocators.carreg_input).type(this.UserData.InputData.CarReg, {force: true})
        return

    }

    findCarBTN(){

        cy.get(this.LoginElementLocators.QuotePageLocators.findcar_btn).click({force: true})
        return

    }

    confirmCarBTN(){

        cy.get(this.LoginElementLocators.QuotePageLocators.confirmcar_btn).click()
        return

    }

    carValueInput(){

        cy.get(this.LoginElementLocators.QuotePageLocators.carvalue_input).select('75000', {force: true})
        return

    }

    carModifiedFalse(){

        cy.get(this.LoginElementLocators.QuotePageLocators.carmodified_false).click({force: true})
        return

    }

    carDetailsContinue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.cardetails_continue).click({force: true})
        return

    }
    
    //Global Quote Actions (Additional Drivers)
    
    additionalDriversHeading(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldrivers_heading).contains(this.UserData.HeadingData.AdditionalDrivers_Heading)
        return

    }

    additionalDriversFalse(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_false).click({force: true})
        return

    }

    additionalDriversTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click({force: true})
        return

    }

    additionalDriversContinue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_continue).click({force: true})
        return

    }

    additionalDriver1Title(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(2, {force: true})
        return

    }

    additionalDriver1Forename(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).type(this.UserData.InputData.AD1_Forename)
        return

    }

    additionalDriver1Surname(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).type(this.UserData.InputData.AD1_Surname)
        return


        
    }

    additionalDriver1DOB(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).type(this.UserData.InputData.AD1_DOB)
        return

    }

    additionalDriver1EmploymentStatus(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(2)
        return

    }

    additionalDriver1LicenceType(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(1)
        return

    }

    additionalDriver1LicenceYears(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(6)
        return

    }

    additionalDriver1Relationship(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(1)
        return

    }

    additionalDriver1SpouseOwnVehFalse(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_spousefalse).click()
        return

    }

    additionalDriver1Save(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
        cy.wait(2000)
        return

        

    }

    additionalDriver2(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(3, {force: true})
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD2_Forename)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD2_Surname)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD2_DOB)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(1)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_occupation).type('shop')
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_occuseggest).contains('Shop Assistant').click()
        cy.wait(2000)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(2)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(5)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
        cy.wait(2000)
        return

    }

    additionalDriver3(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(1)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD3_Forename)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD3_Surname)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD3_DOB)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(1)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_occupation).type('shop')
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_occuseggest1).contains('Shop Assistant').click({force: true})
        cy.wait(2000)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(1)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(4)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
        cy.wait(3000)
        return

    }

    additionalDriver4(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(1)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD4_Forename)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD4_Surname)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD4_DOB)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(4)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(6)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(2)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
        cy.wait(2000)
        return

    }

    additionalDriver5(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(2, {force: true})
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD5_Forename)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD5_Surname)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD5_DOB)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(4)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(6)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(8)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
        cy.wait(2000)
        return

    }

    additionalDriver6(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(2, {force: true})
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD6_Forename)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD6_Surname)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD6_DOB)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(4)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(6)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(7)
        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
        cy.wait(2000)
        return

    }

    additionalDriver7(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).should('not.be.visible')
        return

    }

    additionalDriverAddedHeading(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_added_heading).contains(this.UserData.HeadingData.AD_Added)
        return

    }

    additionalDriverAddedHeading1(){

        cy.get(this.LoginElementLocators.QuotePageLocators.additionaldriver_added_heading1).contains(this.UserData.HeadingData.AD_Added6)
        return

    }

    //Global Quote Actions (Your Claims)

    claimsHeading(){

        cy.get(this.LoginElementLocators.QuotePageLocators.claims_heading).contains(this.UserData.HeadingData.Claims_Heading)
        return

    }

    claimsTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.claims_true).click({force: true})
        return

    }


    claimsFalse1st(){

        cy.get(this.LoginElementLocators.QuotePageLocators.claims_false).first().click({force: true})
        return

    }

    claimsFalseLast(){

        cy.get(this.LoginElementLocators.QuotePageLocators.claims_false).last().click({force: true})
        return

    }

    claimsContinue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.claims_continue).click({force: true})
        return

    }

    //Global Quote Actions (Penalty Points)
    
    ppHeading(){

        cy.get(this.LoginElementLocators.QuotePageLocators.pp_heading).contains(this.UserData.HeadingData.PP_Heading)
        return

    }

    ppTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.pp_true).click({force: true})
        return

    }

    ppFalse1st(){

        cy.get(this.LoginElementLocators.QuotePageLocators.pp_false).first().click({force: true})
        return

    }

    ppFalseLast(){

        cy.get(this.LoginElementLocators.QuotePageLocators.pp_false).last().click({force: true})
        return

    }

    ppContinue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.pp_continue).click({force: true})
        return

    }
    
    
    //Global Quote Actions (Cover start date)

    coverStartHeading(){
        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_heading).contains(this.UserData.HeadingData.CoverStart_Heading)
        return

    }

    coverStartDate(){

        const day = require('dayjs')

        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_date).type(day().format('DD/MM/YYYY'),{force: true})
        return

    }

    coverStartDatePlus1(){

        const day = require('dayjs')

        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_date).type(day().add(1, 'day').format('DD/MM/YYYY'),{force: true})
        return

    }

    coverStartHaveHomeIns(){

        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_havehomefalse).click({force: true})
        return

    }

    coverStartHaveHomeInsTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_havehometrue).click({force: true})
        return

    }

    coverStartHaveCarIns(){

        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_havecarfalse).click({force: true})
        return

    }

    coverStartHaveCarInsTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_havecartrue).click({force: true})
        return

    }

    coverStartPromoCode(){

        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_promocode).type(this.UserData.InputData.PromoCode, {force: true})
        return

    }

    coverStartMarketing(){

        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_marketing).click({force: true})
        return

    }

    coverStartNotCustomerQuote(){

        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_notcustcheck).should('not.be.visible')
        return

    }

    coverStartCustomerQuote(){

        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_custcheck).click({force: true})
        return

    }
    coverStartCustomerQuote1(){

        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_custcheck1).click({force: true})
        return

    }

    coverStartContinue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.coverstart_continue).click({force: true})
        return

    }

    //Global Quote Actions (Quote Page - Buy now)

    quotePageHeading(){

        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_heading).contains(this.UserData.HeadingData.QuotePage_Heading)
        return

    }

    quotePageAddOpenDrive(){

        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_addopendriving).click()
        return

    }

    quotePageExcess125(){

        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_excess125).click()
        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_excessconfirm).click()
        return

    }

    quotePageExcess300(){

        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_excess300).click()
        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_excessconfirm).click()
        return

    }

    quotePageExcess600(){

        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_excess600).click()
        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_excessconfirm).click()
        return

    }

    quotePageAddJourneywise(){

        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_journeywise).click()
        return

    }

    quotePageStepBack(){

        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_stepback).click()
        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_addncdcover).click()
        return

    }

    quotePagePNCD(){

        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_protected).click()
        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_addncdcover).click()
        return

    }

    quotePagePNCDStepBack(){

        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_protectedstepback).click()
        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_addncdcover).click()
        return

    }
    
    buyNowBtn(){

        cy.get(this.LoginElementLocators.QuotePageLocators.buynow_btn).click({force:true})
        return

    }

    quotePageStaffOptions(){

        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_staffoptions).click()
        return

    }

    quotePageStaffDiscounts(){

        cy.get(this.LoginElementLocators.QuotePageLocators.quotepage_discounts).select(2)
        return

    }

    selectStaffDiscount(){

        cy.get(this.LoginElementLocators.BOPageLocators.staff_discountheading).click()
        cy.get(this.LoginElementLocators.BOPageLocators.staff_discountselect).select(1)
        cy.get(this.LoginElementLocators.BOPageLocators.staff_discountrecalc).click()
        cy.wait(2000)
        cy.get(this.LoginElementLocators.BOPageLocators.staff_nodiscountheading).should('contain', 'Call centre customer - No online discount')
        return

    }

    //Global Quote Actions (Post Quote - About your car)
    
    postQuote1Heading(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutyourcar_heading).contains(this.UserData.HeadingData.PostQuote1_Heading)
        return

    }

    postQuote1wnCar(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutyourcar_owncar).click({force: true})
        return

    }

    postQuote1PrivateIns(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutyourcar_privins).click({force: true})
        return

    }

    postQuote1Continue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutyourcar_continue).click({force: true})
        return

    }

    //Global Quote Actions (Post Quote - About the drivers)

    postQuote2Heading(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_heading).contains(this.UserData.HeadingData.PostQuote2_Heading)
        return

    }

    postQuote2IsResidentTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isresidenttrue).click({force: true})
        return

    }

    postQuote2IsMainDriverTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_ismaindrivertrue).click({force: true})
        return

    }

    postQuote2IsNotOtherCarTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnotothercartrue).click({force: true})
        return

    }

    postQuote2IsNotOtherCarTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnotothercartrue).click({force: true})
        return

    }

    postQuote2IsNotOtherInsTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnototherinstrue).click({force: true})
        return

    }

    postQuote2IsNoConvictionTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnoconvtrue).click({force: true})
        return

    }
    
    postQuote2IsNoDisqualificationTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnodisqualtrue).click({force: true})
        return

    }

    postQuote2IsNoRefusalTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnorefusaltrue).click({force: true})
        return

    }

    postQuote2IsNoIncreaseTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnoincreasetrue).click({force: true})
        return

    }

    postQuote2IsNoMedicalTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnomedicaltrue).click({force: true})
        return
        
    }

    postQuote2IsNoMedicalFalse(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnomedicalfalse).click({force: true})
        return
        
    }

    postQuote2addMedicalConditionBTN(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_btn).click({force: true})
        return
        
    }

    postQuote2addMedicalConditionDriver(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_driver).select(1,{force: true})
        return
        
    }

    postQuote2addMedicalConditionAD(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_driver).select(2,{force: true})
        return
        
    }

    postQuote2addMedicalConditionSelect(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_select).select(2,{force: true})
        return
        
    }

    postQuote2addMedicalConditionSelect1(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_select).select(3,{force: true})
        return
        
    }

    postQuote2addMedicalConditionInformed(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_informed).click({force: true})
        return
        
    }

    postQuote2addMedicalConditionSave(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_save).click({force: true})
        return
        
    }

    postQuote2MedicalDeleteBTN(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_medicaldelete_btn).click({force: true})
        return
        
    }

    postQuote2MedicalDeleteBTN1(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_medicaldelete_btn1).click({force: true})
        return
        
    }


    postQuote2MedicalRemoveBTN(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_medicalremove_btn).click({force: true})
        return
        
    }

    postQuote2DriverNumber(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_drivernum).type(this.UserData.InputData.Driver_Number)
        return

    }

    postQuote2DriverNumber1(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_drivernum1).type(this.UserData.InputData.Driver_Number1)
        return

    }

    postQuote2DriverNumber2(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_drivernum2).type(this.UserData.InputData.Driver_Number1)
        return

    }

    postQuote2Continue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_continue).click({force: true})
        return

    }

    //Global Quote Actions (Post Quote - Your insurance history and inception details)

    postQuote3Heading(){

        cy.get(this.LoginElementLocators.QuotePageLocators.inshistory_heading).contains(this.UserData.HeadingData.PostQuote3_Heading)
        return

    }

    postQuote3NCDROITrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.inshistory_isncdroitrue).click({force: true})
        return

    }

    postQuote3NoOtherNCDTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.inshistory_nootherncdtrue).click({force: true})
        return

    }

    postQuote3WithinExpiryTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.inshistory_withinexptrue).click({force: true})
        return

    }

    postQuote3OtherHome(){

        cy.get(this.LoginElementLocators.QuotePageLocators.inshistory_othercarpolicy).type(this.UserData.InputData.OtherHomePol)
        return

    }

    postQuote3OtherCar(){

        cy.get(this.LoginElementLocators.QuotePageLocators.inshistory_otherhomepolicy).type(this.UserData.InputData.OtherCarPol)
        return

    }

    postQuote3IsMyAvivaTrue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.inshistory_ismyavivatrue).click({force: true})
        return

    }

    postQuote3IsMyAvivaFalse(){

        cy.get(this.LoginElementLocators.QuotePageLocators.inshistory_ismyavivatrue).click({force: true})
        return

    }

    postQuote3PostCert(){

        cy.get(this.LoginElementLocators.QuotePageLocators.inshistory_ispostcerttrue).click({force: true})
        return

    }

    postQuote3PostDocs(){

        cy.get(this.LoginElementLocators.QuotePageLocators.inshistory_ispostdocstrue).click({force: true})
        return

    }

    postQuote3PostDocsFalse(){

        cy.get(this.LoginElementLocators.QuotePageLocators.inshistory_ispostdocsfalse).click({force: true})
        return

    }


    postQuote3Continue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.inshistory_continue).click({force: true})
        return

    }

    //Global Quote Actions - Payment type screen

    paymentTypeAgentCcard(){

        cy.get(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(1)
        return

    }

    paymentTypeAgentNoPay(){

        cy.get(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(2)
        return

    }

    paymentTypeAgentDD(){

        cy.get(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(3)
        return

    }

    paymentTypeAgentNoPayContinue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.paymenttype_agentnopaycontinue).click({force: true})
        return

    }

    //Global Quote Actions - Diary & correspondence page 

    diaryCorrespondenceHeading(){

        cy.get(this.LoginElementLocators.QuotePageLocators.diarycorres_heading).contains(this.UserData.HeadingData.DiaryCorrespondence_Heading)
        return

    }

    diaryCorrespondenceContinue(){

        cy.get(this.LoginElementLocators.QuotePageLocators.diarycorres_continue).click({force: true})
        return

    }

    //Global Quote Actions - Thank you page

    thankyouHeading(){

        cy.get(this.LoginElementLocators.QuotePageLocators.thankyou_heading).contains(this.UserData.HeadingData.Thankyou_Heading)
        return

    }
    
    //Global Quote Actions - Card Payments 

    paymentCardQA(){

        cy.origin('https://www.direct.rwy-aviva.co.uk', () => 
        {
          Cypress.on('uncaught:exception', (err, runnable) =>
          {
          return false
          })
          const CCnumber='4917610000000000'
          const Exp1='03'
          const Exp2='30'
          const CVC='737'
          
          cy.wait(10000)
          cy.get('.payment-heading').contains('Payment')
          cy.get('.m-form-row__content > .m-radio-group > :nth-child(1) > .a-radio > .a-radio__label').click()
          
            
         
          const getIframeDocumentCard = () => {
            return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentMonth = () => {
            return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentYear = () => {
            return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentCVC = () => {
            return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }
          
            
          getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
          getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
          getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
          getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
          cy.get('#continueButton').click()

        })

          //Password box
          cy.wait(10000)
          const getIframeDocumentPassword = () => {
            
            return cy.get('.adyen-checkout__iframe').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))

          }
          cy.wait(4000)
          getIframeDocumentPassword().find('input[placeholder="enter the word \'password\'"]').as('passwordbox').should('exist')
          cy.get('@passwordbox').type('password')
          getIframeDocumentPassword().find('#buttonSubmit').should('exist').click()
        return

    }

    paymentCardQAAgent(){

        cy.origin('https://www.direct.rwy-aviva.co.uk', () => 
        {
          Cypress.on('uncaught:exception', (err, runnable) =>
          {
          return false
          })
          const CCnumber='4917610000000000'
          const Exp1='03'
          const Exp2='30'
          const CVC='737'
          
          cy.wait(10000)
        
          const getIframeDocumentCard = () => {
            return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentMonth = () => {
            return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentYear = () => {
            return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentCVC = () => {
            return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }
          
            
          getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
          getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
          getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
          getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
          cy.get('#continueButton').click()

        })
        return

    }

    paymentCardDemo(){

        cy.origin('https://www.direct.stg-aviva.co.uk', () => 
        {
          Cypress.on('uncaught:exception', (err, runnable) =>
          {
          return false
          })
          const CCnumber='4917610000000000'
          const Exp1='03'
          const Exp2='30'
          const CVC='737'
          
          cy.wait(10000)
          //cy.get('.payment-heading').contains('Payment')
          cy.wait(3000)
          cy.get('.m-form-row__content > .m-radio-group > :nth-child(1) > .a-radio > .a-radio__label').click()
          
            
         
          const getIframeDocumentCard = () => {
            return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentMonth = () => {
            return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentYear = () => {
            return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentCVC = () => {
            return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }
          
            
          getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
          getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
          getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
          getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
          cy.get('#continueButton').click()

        })

          //Password box
          cy.wait(10000)
          const getIframeDocumentPassword = () => {
            
            return cy.get('.adyen-checkout__iframe').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))

          }
          cy.wait(4000)
          getIframeDocumentPassword().find('input[placeholder="enter the word \'password\'"]').as('passwordbox').should('exist')
          cy.get('@passwordbox').type('password')
          getIframeDocumentPassword().find('#buttonSubmit').should('exist').click()
        return

    }

    paymentCardDemoAgent(){

        cy.origin('https://www.direct.stg-aviva.co.uk', () => 
        {
            Cypress.on('uncaught:exception', (err, runnable) =>
            {
            return false
            })
            const CCnumber='4917610000000000'
            const Exp1='03'
            const Exp2='30'
            const CVC='737'
       
            cy.wait(10000)
      
            const getIframeDocumentCard = () => {
                return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
                .then((body) => cy.wrap(body))
         
            }

            const getIframeDocumentMonth = () => {
                return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
                .then((body) => cy.wrap(body))
         
            }

            const getIframeDocumentYear = () => {
                return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
                .then((body) => cy.wrap(body))
         
            }

            const getIframeDocumentCVC = () => {
                return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
                .then((body) => cy.wrap(body))
         
            }
       
            getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
            getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
            getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
            getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
            cy.get('#continueButton').click()

        })
        return

    }

    paymentDDQA(){

        cy.origin('https://www.direct.rwy-aviva.co.uk', () => 
        {
          Cypress.on('uncaught:exception', (err, runnable) =>
          {
          return false
          })
          const bic= 'BOFIIE2D'
          const iban= 'IE87BOFI90491561068076'
          const CCnumber='4917610000000000'
          const Exp1='03'
          const Exp2='30'
          const CVC='737'
          
          cy.wait(10000)
          cy.get('.payment-heading').contains('Payment')

          cy.get('#BIC').type(bic)
          cy.get('#IBAN').type(iban)
          cy.get('#PaymentDayOfMonth').select(1)
          cy.get('.a-checkbox__label').click()
          cy.get('#continueButton').click()

          const getIframeDocumentCard = () => {
            return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentMonth = () => {
            return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentYear = () => {
            return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentCVC = () => {
            return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }
          
            
          getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
          getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
          getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
          getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
          cy.get('#continueButton').click()

        })
        return

    }

    paymentDDDemo(){

        cy.origin('https://www.direct.stg-aviva.co.uk', () => 
        {
          Cypress.on('uncaught:exception', (err, runnable) =>
          {
          return false
          })
          const bic= 'BOFIIE2D'
          const iban= 'IE87BOFI90491561068076'
          const CCnumber='4917610000000000'
          const Exp1='03'
          const Exp2='30'
          const CVC='737'
          
          cy.wait(10000)
          cy.get('.payment-heading').contains('Payment')

          cy.get('#BIC').type(bic)
          cy.get('#IBAN').type(iban)
          cy.get('#PaymentDayOfMonth').select(1)
          cy.get('.a-checkbox__label').click()
          cy.get('#continueButton').click()

          const getIframeDocumentCard = () => {
            return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentMonth = () => {
            return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentYear = () => {
            return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }

          const getIframeDocumentCVC = () => {
            return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
            
          }
          
            
          getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
          getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
          getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
          getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
          cy.get('#continueButton').click()

          //Password box
          cy.wait(10000)
          const getIframeDocumentPassword = () => {
            
            return cy.get('.adyen-checkout__iframe').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))

          }
          getIframeDocumentPassword().find('input[placeholder="enter the word \'password\'"]').as('passwordbox').should('exist')
          cy.get('@passwordbox').type('password')
          getIframeDocumentPassword().find('#buttonSubmit').should('exist').click()

        })
        return

    }
        

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    

    
    
    

    //BO Actions

    home(){

        cy.get(this.LoginElementLocators.BOPageLocators.home_page).click()
        return

    }

    livePoliciesBTN(){

        cy.get(this.LoginElementLocators.BOPageLocators.livepolicy_btn).click()
        return
            
    }

    unlockBTN(){

        cy.get(this.LoginElementLocators.BOPageLocators.unlock_btn).click()
        return
    
    }

    notes(){

        cy.get(this.LoginElementLocators.BOPageLocators.notes).should('be.visible')
        return
        
    }
    
    createNewQuoteBTN(){

        cy.get(this.LoginElementLocators.BOPageLocators.createnewquote_btn).click()
        return
            
    }

    selectActionDocuments(){

        cy.get(this.LoginElementLocators.BOPageLocators.selectaction_documents).last().click().contains('Documents').invoke("removeAttr", "target").click()
        return
            
    }

    selectActionCancelPolicy(){

        cy.get(this.LoginElementLocators.BOPageLocators.selectaction_cancelpolicy).last().click().contains('Cancel Policy').invoke("removeAttr", "target").click()
        return
            
    }

    selectActionDiary(){

        cy.get(this.LoginElementLocators.BOPageLocators.selectaction_diary).last().click().contains('Diary').invoke("removeAttr", "target").click()
        return
            
    }

    selectActionRenewal(){

        cy.get(this.LoginElementLocators.BOPageLocators.selectaction_renewal).last().click().contains('Renewal').invoke("removeAttr", "target").click()
        return
            
    }

    agePolicyTool(){

        cy.get(this.LoginElementLocators.BOPageLocators.age_policytool).last().click({force: true}).contains('Age Policy').invoke("removeAttr", "target").click({force: true})
        return
            
    }

    agePolicy(){

        cy.get(this.LoginElementLocators.BOPageLocators.backdate_day).invoke('val').then(dayString => {
            const day = parseInt(dayString)
            cy.get(this.LoginElementLocators.BOPageLocators.backdate_day).select(day+1)
          })

        cy.get(this.LoginElementLocators.BOPageLocators.backdate_year).select(this.UserData.InputData.BackdateYear)

        cy.get(this.LoginElementLocators.BOPageLocators.backdate_confirm).click()
        cy.get(this.LoginElementLocators.BOPageLocators.backdate_message).contains(this.UserData.InputData.BackdateMessage)
            
    }

    selectActionRenewalWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Renewal']")
             })
            return
            
    }

    selectActionMakeADJWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
             })
            return
            
    }

    selectActionCancelWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Cancel Policy']")
             })
            return
            
    }

    selectActionAmendNCDWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.='  Amend NCD']")
             })
            return
            
    }

    selectActionAmendRNLNCDWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.='  Amend Renewal NCD']")
             })
            return
            
    }

    selectActionDiaryWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
             })
            return
            
    }

    selectActionDiaryWithParagonPolicyNumber1(){

        cy.readFile('policy.json').then((data) => {
            const paragonPolicyNumber1 = data.paragonPolicyNumber1
            cy.get('.panel-title')
            .contains(paragonPolicyNumber1)
            cy.xpath("//span[normalize-space()='"+paragonPolicyNumber1+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
             })
            return
            
    }

    selectActionDiaryWithParagonPolicyNumber2(){

        cy.readFile('policy.json').then((data) => {
            const paragonPolicyNumber2 = data.paragonPolicyNumber2
            cy.get('.panel-title')
            .contains(paragonPolicyNumber2)
            cy.xpath("//span[normalize-space()='"+paragonPolicyNumber2+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
             })
            return
            
    }

    selectActionDiaryWithParagonPolicyNumber3(){

        cy.readFile('policy.json').then((data) => {
            const paragonPolicyNumber3 = data.paragonPolicyNumber3
            cy.get('.panel-title')
            .contains(paragonPolicyNumber3)
            cy.xpath("//span[normalize-space()='"+paragonPolicyNumber3+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
             })
            return
            
    }

    selectActionAccountsWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Accounts']")
             })
            return
            
    }

    selectActionRefundsWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Refunds']")
             })
            return
            
    }

    selectActionDocumentsWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
             })
            return
            
    }
    
    selectActionDocumentsWithParagonPolicyNumber1(){

        cy.readFile('policy.json').then((data) => {
            const paragonPolicyNumber1 = data.paragonPolicyNumber1
            cy.get('.panel-title')
            .contains(paragonPolicyNumber1)
            cy.xpath("//span[normalize-space()='"+paragonPolicyNumber1+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
             })
            return
            
    }

    selectActionDocumentsWithParagonPolicyNumber2(){

        cy.readFile('policy.json').then((data) => {
            const paragonPolicyNumber2 = data.paragonPolicyNumber2
            cy.get('.panel-title')
            .contains(paragonPolicyNumber2)
            cy.xpath("//span[normalize-space()='"+paragonPolicyNumber2+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
             })
            return
            
    }

    selectActionDocumentsWithParagonPolicyNumber3(){

        cy.readFile('policy.json').then((data) => {
            const paragonPolicyNumber3 = data.paragonPolicyNumber3
            cy.get('.panel-title')
            .contains(paragonPolicyNumber3)
            cy.xpath("//span[normalize-space()='"+paragonPolicyNumber3+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
             })
            return
            
    }

    selectActionDPAWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' DPA / Preferences']")
             })
            return
            
    }

    selectActionPolicyOwnershipWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Policy Owenership']")
             })
            
    }

    selectActionScrutinyWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Scrutiny']")
             })
            return
            
    }

    ntuWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
                .contains(policyNumber)
                .click()
            cy.stopWindow("//span[normalize-space()='"+policyNumber+"']/../../../..//span[contains(text(),'NTU')]")
            })
            return
            
    }

    policyToolsAgePolicyWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.get('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Policy Tools']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Age Policy']")
            
             })
            return
            
    }

    retreivePolicyNumber(){

        cy.get('.m-card-content__inner > p > strong')
        .invoke('text') 
        .then((text) => {
        
        const numberOnly = text.match(/\d+/)[0]

        cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
            const updatedData = { ...data, policyNumber: numberOnly }
            cy.writeFile('policy.json', updatedData)
        })

        cy.wrap(numberOnly).as('policyNumber')
        })

        cy.get('@policyNumber').then((policyNumber) => {
        cy.log(`Extracted policy number: ${policyNumber}`)
        })
            
    }

    retreiveParagonPolicyNumber1(){

        cy.get('.m-card-content__inner > p > strong')
        .invoke('text') 
        .then((text) => {
        
        const numberOnly = text.match(/\d+/)[0]

        cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
            const updatedData = { ...data, paragonPolicyNumber1: numberOnly }
            cy.writeFile('policy.json', updatedData)
        })

        cy.wrap(numberOnly).as('paragonPolicyNumber1')
        })

        cy.get('@paragonPolicyNumber1').then((paragonPolicyNumber1) => {
        cy.log(`Extracted policy number: ${paragonPolicyNumber1}`)
        })
            
    }

    retreiveParagonPolicyNumber2(){

        cy.get('.m-card-content__inner > p > strong')
        .invoke('text') 
        .then((text) => {
        
        const numberOnly = text.match(/\d+/)[0]

        cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
            const updatedData = { ...data, paragonPolicyNumber2: numberOnly }
            cy.writeFile('policy.json', updatedData)
        })

        cy.wrap(numberOnly).as('paragonPolicyNumber2')
        })

        cy.get('@paragonPolicyNumber2').then((paragonPolicyNumber2) => {
        cy.log(`Extracted policy number: ${paragonPolicyNumber2}`)
        })
        return
            
    }

    retreiveParagonPolicyNumber3(){

        cy.get('.m-card-content__inner > p > strong')
        .invoke('text') 
        .then((text) => {
        
        const numberOnly = text.match(/\d+/)[0]

        cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
            const updatedData = { ...data, paragonPolicyNumber3: numberOnly }
            cy.writeFile('policy.json', updatedData)
        })

        cy.wrap(numberOnly).as('paragonPolicyNumber3')
        })

        cy.get('@paragonPolicyNumber3').then((paragonPolicyNumber3) => {
        cy.log(`Extracted policy number: ${paragonPolicyNumber3}`)
        })
        return
            
    }

    generateRenewal(){

        cy.get(this.LoginElementLocators.BOPageLocators.generate_renewal).last().click()
        cy.get(this.LoginElementLocators.BOPageLocators.generate_renewalcheck).should('contain', 'RNL')
        cy.get(this.LoginElementLocators.BOPageLocators.generate_renewalcheck1).should('not.contain', '€ 0')
            
    }

    generateRenewal(){

        cy.get(this.LoginElementLocators.BOPageLocators.generate_renewal).last().click()
        cy.get(this.LoginElementLocators.BOPageLocators.generate_renewalcheck).should('contain', 'RNL')
        cy.get(this.LoginElementLocators.BOPageLocators.generate_renewalcheck1).should('not.contain', '€ 0')
            
    }

    inviteRenewal(){

        cy.get(this.LoginElementLocators.BOPageLocators.extract_policynumber).last().invoke('text').then(policyNumString => {
            const policy = policyNumString
            cy.get(this.LoginElementLocators.BOPageLocators.select_renewals).click({force: true})
            cy.get(this.LoginElementLocators.BOPageLocators.input_policynumber).type(policy)
        })

        cy.get(this.LoginElementLocators.BOPageLocators.renewed_scheme).select(0)
        cy.get(this.LoginElementLocators.BOPageLocators.search_policynumber).click()
        cy.get(this.LoginElementLocators.BOPageLocators.tick_renewal).click()
        cy.get(this.LoginElementLocators.BOPageLocators.batchprint_renewal).click()
            
    }

    recallPolicy(){

        cy.get(this.LoginElementLocators.BOPageLocators.recall_policy).click()
        return

    }

    checkRenewalInviteDocs(){

        cy.get(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Email')
        cy.get(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Letter')
        cy.get(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Schedule')
        cy.get(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Statement Of Fact')
        return

    }

    checkRenewalDocs(){

        cy.wait(120000)
        cy.reload()
        cy.get(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Letter')
        cy.get(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Email')
        cy.get(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Home Renewal Receipt')
        cy.get(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Policy Schedule')
        return

    }




    //MTA B/O Actions

    selectActionMakeADJ(){

        cy.get(this.LoginElementLocators.PermMTAPageLocators.selectaction_makeadj).last().click().contains('Make Adjustment').invoke("removeAttr", "target").click()
        return
            
    }

    permADJAdditionalDriver(){

        cy.get(this.LoginElementLocators.PermMTAPageLocators.perm_additonaldriver).select('Additional drivers',{force: true}).should('have.value', 'AddDriver')
        cy.get(this.LoginElementLocators.PermMTAPageLocators.perm_adjbtn).click({force: true})
        return
            
    }

    permMTAContinue(){

        cy.get(this.LoginElementLocators.PermMTAPageLocators.permmta_continue).click({force:true})
        return
            
    }

    permMTABuyNow(){

        cy.get(this.LoginElementLocators.PermMTAPageLocators.permmta_buynow).click({force:true})
        return
            
    }



    //Portal Actions

    portalManagePolicyWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
        
            cy.get('.policypanels')
                .contains(policyNumber)
                .closest('.d-flex.flex-column')
                .within(() => {
                    cy.contains('Manage Policy').click({force: true})
                })
        })
            return
            
    }

    
    

    
    
    
   
        
    
   
    
    

        
    
    
    






}