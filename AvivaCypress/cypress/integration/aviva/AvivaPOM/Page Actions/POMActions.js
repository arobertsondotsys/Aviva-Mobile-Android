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

    Server(serverKey = '') {
        const url = this.serverUrls[serverKey] || this.serverUrls['QA2'] // Default to QA2 if no valid serverKey is provided
        Cypress.env('serverKey', serverKey) // Set the environment variable
        cy.visit(url)
    }

    Server1(serverKey = '') {
        const url = this.server1Urls[serverKey] || this.server1Urls['QA2'] // Default to QA2 if no valid serverKey is provided
        Cypress.env('serverKey', serverKey) // Set the environment variable
        cy.visit(url)
    }

    Server2(serverKey = '') {
        const url = this.server2Urls[serverKey] || this.server2Urls['QA2'] // Default to QA2 if no valid serverKey is provided
        Cypress.env('serverKey', serverKey) // Set the environment variable
        cy.visit(url)
    }


    //Global actions

    company(){
       
        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.company_element).click().type(this.UserData.InputData.Comp)
        return

    }
    username(){
       
        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.username_element).click().type(this.UserData.InputData.User)
        return

    }

    password(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.password_element).click().type(this.UserData.InputData.BOPass)
        return

    }

    phone(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.phone_element).type(this.UserData.InputData.Phone1)
        return

    }

    dob(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.dob_element).type(this.UserData.InputData.DOB1)
        return

    }

    forgotEmailPassDOB(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.forgotep_dob).type(this.UserData.InputData.DOB1)
        return

    }

    registerDOB(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.register_dob).type(this.UserData.InputData.DOB1)
        return

    }

    forgotEmailPassPolicy(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.forgotep_policy).type(this.UserData.InputData.InvalidPolicy)
        return

    }

    forgotEmail(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.forgot_email).type(this.UserData.InputData.InvalidEmail2)
        return

    }

    registerPolicy(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.register_policy).type(this.UserData.InputData.InvalidPolicy)
        return

    }

    proposerEmail(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.proposeremail_element).type(this.UserData.InputData.Email1)
        return

    }

    loginButton(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.loginBtn_element).click()
        return
    }

    email(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.emailsearch_element).type(this.UserData.InputData.Email1)
        return
    }

    searchButton(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.searchBtn_element).click()
        return
    }

    policySelectButton(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.policyslctbtn_element).click()
        return

    }

    loginEmail(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_email).clear().type(this.UserData.InputData.Email1).should('have.value', this.UserData.InputData.Email1.substring(0,50))
        return
    }

    loginEmail1(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_email).clear().type(this.UserData.InputData.InvalidEmail).should('have.value', this.UserData.InputData.InvalidEmail.substring(0,50))
        return
    
    }

    loginEmail2(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_email).clear().type(this.UserData.InputData.InvalidEmail1).should('have.value', this.UserData.InputData.InvalidEmail1.substring(0,50))
        return
    
    }

    loginPassword(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_password).clear().type(this.UserData.InputData.PortalPass, {force:true})

        //cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_password).clear().type(this.UserData.InputData.PortalPass7Hotfix, {force:true})
        return

    }

    loginPassword1(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_password).type(this.UserData.InputData.InvalidPass, {force:true})
        return

    }

    loginPortalButton(){

        cy.getAndWait(this.LoginElementLocators.LoginPageLocators.portal_login_btn).click()
        return

    }

    cookiesAccept(){

        // //7HOTFIX ONLY
        // cy.getAndWait('body').then(($body) => {
        //     if ($body.find('#onetrust-accept-btn-handler').length > 0) {
        //         cy.getAndWait('#onetrust-accept-btn-handler', {timeout: 3000}).click()
        //     } else {
        //         cy.log('Element not found')
        //     }
        // })


        cy.getAndWait('.ot-sdk-container > .ot-sdk-row').then(($body) => {
            if ($body.find('#onetrust-accept-btn-handler').length > 0) {
                cy.getAndWait('#onetrust-accept-btn-handler').click()
            } else {
                cy.log('Element not found')
            }
        })
        return

    }

    removeAttr(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quote_linkbtn).invoke("removeAttr", "target").click()
        return

    }

    agentQuote(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.agent_quote).select(1)
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

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_title).contains(this.UserData.HeadingData.AboutYou_Heading)
        return

    }

    proposerTitle(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_mr).select(1)
        return

    }

    proposerForename(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_forename).type(this.UserData.InputData.ProposedForename, {force: true})
        return

    }

    proposerSurname(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_surname).type(this.UserData.InputData.ProposedSurname)
        return

    }

    aboutYouContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_continue).click()
        return

    }

    //Global Quote Actions (Personal Details)

    personalDetailsTitle(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.personaldetails_title).contains(this.UserData.HeadingData.PersonDetails_Heading)
        return

    }

    addressInput(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_input).type(this.UserData.InputData.ProposedAddress)
        return

    }

    addressSuggest(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_suggest).click()
        return

    }

    addressSelect(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_select).click()
        return

    }

    addressConfirm(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_confirm).click()
        return

    }

    proposerDOB(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_dob).type(this.UserData.InputData.DOB1)
        return

    }

    proposerEmployStatus(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.employment_status).select('C')
        return

    }

    licenceType(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.licence_type).select('Full Irish')
        return

    }

    licenceYears(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.licence_years).select('5')
        return

    }

    personlaDetailsContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.personaldetails_continue).click()
        return

    }

    //Global Quote Actions (Inusrance Details)

    insuranceDetailsTitle(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.insurancedetails_title).contains(this.UserData.HeadingData.InsuranceDetails_Heading)
        return

    }

    drivingExp(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.drivingexp_ddl).select(1, { force: true });
        return

    }

    drivingExpYears(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.drivingexp_years).select(6,{force: true})
        return

    }

    carUse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caruse_ddl).select(1,{force: true})
        return

    }

    insuranceDetailsContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.insurancedetails_continue).click({force: true})
        return

    }

    //Global Quote Actions (Car Details)

    carDetailsTitle(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.cardetails_title).contains(this.UserData.HeadingData.CarDetails_Heading)
        return

    }

    carRegYes(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carreg_yes).click()
        return

    }

    carRegInput(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carreg_input).type(this.UserData.InputData.CarReg, {force: true})
        return

    }

    findCarBTN(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.findcar_btn).click({force: true})
        return

    }

    confirmCarBTN(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.confirmcar_btn).click()
        return

    }

    carValueInput(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carvalue_input).select('75000', {force: true})
        return

    }

    carModifiedFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carmodified_false).click({force: true})
        return

    }

    carDetailsContinue(){

        cy.wait(2000)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.cardetails_continue).click({force: true})
        return

    }
    
    //Global Quote Actions (Additional Drivers)
    
    additionalDriversHeading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldrivers_heading).contains(this.UserData.HeadingData.AdditionalDrivers_Heading)
        return

    }

    additionalDriversFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_false).click({force: true})
        return

    }

    additionalDriversTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click({force: true})
        return

    }

    additionalDriversContinue(){

        cy.wait(1000)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_continue).click({force: true})
        return

    }

    additionalDriver1Title(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(2, {force: true})
        return

    }

    additionalDriver1Forename(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).type(this.UserData.InputData.AD1_Forename)
        return

    }

    additionalDriver1Surname(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).type(this.UserData.InputData.AD1_Surname)
        return


        
    }

    additionalDriver1DOB(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).type(this.UserData.InputData.AD1_DOB)
        return

    }

    additionalDriver1EmploymentStatus(){

        
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(2)
        return

    }

    additionalDriver1LicenceType(){

        
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(1)
        return

    }

    additionalDriver1LicenceYears(){

        cy.wait(1000)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(6)
        return

    }

    addionalDriver1DriverNumber(){

        cy.wait(1000)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_drivernumber).type(this.UserData.InputData.AD1_DriverNum)
        cy.wait(1000)
        return

    }

    additionalDriver1Relationship(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(1)
        return

    }

    additionalDriver1SpouseOwnVehFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_spousefalse).click()
        return

    }

    additionalDriver1Save(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
        cy.wait(2000)
        return

    }

    additionalDriver2(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(3, {force: true})
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD2_Forename)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD2_Surname)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD2_DOB)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(1)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_occupation).type('shop')
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_occuseggest).contains('Shop Assistant').click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(2)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(5)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
        return

    }

    additionalDriver3(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(1)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD3_Forename)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD3_Surname)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD3_DOB)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(1)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_occupation).type('shop')
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_occuseggest1).contains('Shop Assistant').click({force: true})
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(1)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(4)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
        return

    }

    additionalDriver4(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(1)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD4_Forename)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD4_Surname)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD4_DOB)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(4)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(6)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(2)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
        cy.wait(2000)
        return

    }

    additionalDriver5(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(2, {force: true})
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD5_Forename)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD5_Surname)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD5_DOB)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(4)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(6)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(8)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
        cy.wait(2000)
        return

    }

    additionalDriver6(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(2, {force: true})
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD6_Forename)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD6_Surname)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD6_DOB)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(4)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(6)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(7)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
        cy.wait(2000)
        return

    }

    additionalDriver7(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).should('not.be.visible')
        return

    }

    additionalDriverAddedHeading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_added_heading).contains(this.UserData.HeadingData.AD_Added)
        return

    }

    additionalDriverAddedHeading1(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_added_heading1).contains(this.UserData.HeadingData.AD_Added6)
        return

    }

    //Global Quote Actions (Your Claims)

    claimsHeading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_heading).contains(this.UserData.HeadingData.Claims_Heading)
        return

    }

    claimsTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_true, { allowHidden: true }).click({force: true})
        return

    }


    claimsFalse1st(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_false, { allowHidden: true }).first().click({force: true})
        return

    }

    claimsFalseLast(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_false, { allowHidden: true }).last().click({force: true})
        //cy.xpath("(//span[text()='No'])[7]").click()
        return

    }

    claimsContinue(){

        cy.wait(1000)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.claims_continue).click({force: true})
        return

    }

    //Global Quote Actions (Penalty Points)
    
    ppHeading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pp_heading).contains(this.UserData.HeadingData.PP_Heading)
        return

    }

    ppTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pp_true).click({force: true})
        return

    }

    ppFalse1st(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pp_false, { allowHidden: true }).first().click({force: true})
        return

    }

    ppFalseLast(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pp_false, { allowHidden: true }).last().click({force: true})
        return

    }

    ppContinue(){

        cy.wait(1000)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pp_continue).click({force: true})
        return

    }
    
    
    //Global Quote Actions (Cover start date)

    coverStartHeading(){
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_heading).contains(this.UserData.HeadingData.CoverStart_Heading)
        return

    }

    coverStartDate(){

        const day = require('dayjs')

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_date).type(day().format('DD/MM/YYYY'),{force: true})
        return

    }

    coverStartDatePlus1(){

        const day = require('dayjs')

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_date).type(day().add(1, 'day').format('DD/MM/YYYY'),{force: true})
        return

    }

    coverStartHaveHomeIns(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_havehomefalse, { allowHidden: true }).click({force: true})
        return

    }

    coverStartHaveHomeInsTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_havehometrue, { allowHidden: true }).click({force: true})
        return

    }

    coverStartHaveCarIns(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_havecarfalse, { allowHidden: true }).click({force: true})
        return

    }

    coverStartHaveCarInsTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_havecartrue, { allowHidden: true }).click({force: true})
        return

    }

    coverStartPromoCode(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_promocode).type(this.UserData.InputData.PromoCode, {force: true})
        return

    }

    coverStartMarketing(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_marketing).click({force: true})
        return

    }

    coverStartNotCustomerQuote(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_notcustcheck).should('not.be.visible')
        return

    }

    coverStartCustomerQuote(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_custcheck).click({force: true})
        return

    }
    coverStartCustomerQuote1(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_custcheck1).click({force: true})
        return

    }

    coverStartContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_continue).click({force: true})
        return

    }

    //Global Quote Actions (Quote Page - Buy now)

    quotePageHeading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_heading).contains(this.UserData.HeadingData.QuotePage_Heading)
        return

    }

    quotePageAddOpenDrive(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addopendriving).click()
        return

    }

    quotePageExcess125(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_excess125).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_excessconfirm).click()
        return

    }

    quotePageExcess300(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_excess300).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_excessconfirm).click()
        return

    }

    quotePageExcess600(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_excess600).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_excessconfirm).click()
        return

    }

    quotePageAddJourneywise(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_journeywise).click()
        return

    }

    quotePageStepBack(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_stepback).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addncdcover).click()
        return

    }

    quotePagePNCD(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_protected).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addncdcover).click()
        return

    }

    quotePagePNCDStepBack(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_protectedstepback).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addncdcover).click()
        return

    }
    
    buyNowBtn(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.buynow_btn).click()
        return

    }

    quotePageStaffOptions(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_staffoptions).click()
        return

    }

    quotePageStaffDiscounts(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_discounts).select(2)
        return

    }

    selectStaffDiscount(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_discountheading).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_discountselect).select(1)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_discountrecalc).click()
        cy.wait(2000)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_nodiscountheading).should('contain', 'Call centre customer - No online discount')
        return

    }

    //Global Quote Actions (Post Quote - About your car)
    
    postQuote1Heading(){

        cy.reload()
        cy.wait(2000)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_heading).contains(this.UserData.HeadingData.PostQuote1_Heading)
        return

    }

    postQuote1wnCar(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_owncar).click({force: true})
        return

    }

    postQuote1PrivateIns(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_privins).click({force: true})
        cy.wait(1000)
        return

    }

    postQuote1Continue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyourcar_continue).click({force: true})
        return

    }

    //Global Quote Actions (Post Quote - About the drivers)

    postQuote2Heading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_heading).contains(this.UserData.HeadingData.PostQuote2_Heading)
        return

    }

    postQuote2Headingselect(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_heading).click()
        return

    }

    postQuote2IsResidentTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isresidenttrue).click()
        return

    }

    postQuote2IsMainDriverTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_ismaindrivertrue).click()
        return

    }

    postQuote2IsNotOtherCarTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnotothercartrue).click()
        return

    }

    postQuote2IsNotOtherCarTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnotothercartrue).click()
        return

    }

    postQuote2IsNotOtherInsTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnototherinstrue).click()
        return

    }

    postQuote2IsNoConvictionTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnoconvtrue).click()
        return

    }
    
    postQuote2IsNoDisqualificationTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnodisqualtrue).click()
        return

    }

    postQuote2IsNoRefusalTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnorefusaltrue).click()
        return

    }

    postQuote2IsNoIncreaseTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnoincreasetrue).click()
        return

    }

    postQuote2IsNoMedicalTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnomedicaltrue).click({force: true})
        return
        
    }

    postQuote2IsNoMedicalFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnomedicalfalse).click({force: true})
        return
        
    }

    postQuote2addMedicalConditionBTN(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_btn).click({force: true})
        return
        
    }

    postQuote2addMedicalConditionDriver(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_driver).select(1,{force: true})
        return
        
    }

    postQuote2addMedicalConditionAD(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_driver).select(2,{force: true})
        return
        
    }

    postQuote2addMedicalConditionSelect(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_select).select(2,{force: true})
        return
        
    }

    postQuote2addMedicalConditionSelect1(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_select).select(3,{force: true})
        return
        
    }

    postQuote2addMedicalConditionInformed(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_informed).click({force: true})
        return
        
    }

    postQuote2addMedicalConditionSave(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_save).click({force: true})
        cy.wait(1000)
        return
        
    }

    postQuote2MedicalDeleteBTN(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_medicaldelete_btn).click({force: true})
        return
        
    }

    postQuote2MedicalDeleteBTN1(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_medicaldelete_btn1).click({force: true})
        return
        
    }


    postQuote2MedicalRemoveBTN(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_medicalremove_btn).click({force: true})
        return
        
    }

    postQuote2DriverNumber(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_drivernum).type(this.UserData.InputData.Driver_Number)
        cy.wait(2000)
        return

    }

    postQuote2DriverNumber1(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_drivernum1).type(this.UserData.InputData.Driver_Number1)
        return

    }

    postQuote2DriverNumber2(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_drivernum2).type(this.UserData.InputData.Driver_Number1)
        return

    }

    postQuote2Continue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_continue).click()
        return

    }

    //Global Quote Actions (Post Quote - Your insurance history and inception details)

    postQuote3Heading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_heading, { allowHidden: true }).contains(this.UserData.HeadingData.PostQuote3_Heading)
        return

    }

    postQuote3NCDROITrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_isncdroitrue).click({force: true})
        return

    }

    postQuote3NoOtherNCDTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_nootherncdtrue).click({force: true})
        return

    }

    postQuote3WithinExpiryTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_withinexptrue).click({force: true})
        return

    }

    postQuote3OtherHome(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_othercarpolicy).type(this.UserData.InputData.OtherHomePol)
        return

    }

    postQuote3OtherCar(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_otherhomepolicy).type(this.UserData.InputData.OtherCarPol)
        return

    }

    postQuote3IsMyAvivaTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_ismyavivatrue).click({force: true})
        return

    }

    postQuote3IsMyAvivaFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_ismyavivatrue).click({force: true})
        return

    }

    postQuote3PostCert(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_ispostcerttrue, { allowHidden: true }).click({force: true})
        return

    }

    postQuote3PostCertFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_ispostcertfalse, { allowHidden: true }).click({force: true})
        return

    }

    postQuote3PostDocs(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_ispostdocstrue, { allowHidden: true }).click({force: true})
        return

    }

    postQuote3PostDocsFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_ispostdocsfalse, { allowHidden: true }).click({force: true})
        return

    }


    postQuote3Continue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.inshistory_continue).click({force: true})
        return

    }

    //Global Quote Actions - Payment type screen

    paymentTypeAgentCcard(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(1)
        return

    }

    paymentTypeAgentNoPay(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(2)
        return

    }

    paymentTypeAgentDD(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(3)
        return

    }

    paymentTypeAgentNoPayContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agentnopaycontinue).click({force: true})
        return

    }

    //Global Quote Actions - Diary & correspondence page 

    diaryCorrespondenceHeading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.diarycorres_heading).contains(this.UserData.HeadingData.DiaryCorrespondence_Heading)
        return

    }

    diaryCorrespondenceContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.diarycorres_continue).click({force: true})
        return

    }

    //Global Quote Actions - Thank you page

    thankyouHeading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.thankyou_heading).contains(this.UserData.HeadingData.Thankyou_Heading)
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
          //cy.getAndWait('.payment-heading').contains('Payment')
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

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.home_page).click()
        return

    }

    livePoliciesBTN(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.livepolicy_btn).click()
        return
            
    }

    unlockBTN(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.unlock_btn).click()
        return
    
    }

    notes(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.notes).should('be.visible')
        return
        
    }
    
    createNewQuoteBTN(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.createnewquote_btn).click()
        return
            
    }

    selectActionDocuments(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.selectaction_documents).last().click().contains('Documents').invoke("removeAttr", "target").click()
        return
            
    }

    selectActionCancelPolicy(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.selectaction_cancelpolicy).last().click().contains('Cancel Policy').invoke("removeAttr", "target").click()
        return
            
    }

    selectActionDiary(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.selectaction_diary).last().click().contains('Diary').invoke("removeAttr", "target").click()
        return
            
    }

    selectActionRenewal(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.selectaction_renewal).last().click().contains('Renewal').invoke("removeAttr", "target").click()
        return
            
    }

    agePolicyTool(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.age_policytool).last().click({force: true}).contains('Age Policy').invoke("removeAttr", "target").click({force: true})
        return
            
    }

    agePolicy(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).invoke('val').then(dayString => {
            const day = parseInt(dayString)
            cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).select(day+1)
          })

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_year).select(this.UserData.InputData.BackdateYear)

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_confirm).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_message).contains(this.UserData.InputData.BackdateMessage)
            
    }

    selectActionRenewalWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Renewal']")
             })
            return
            
    }

    selectActionMakeADJWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
             })
            return
            
    }

    selectActionCancelWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Cancel Policy']")
             })
            return
            
    }

    selectActionAmendNCDWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.='  Amend NCD']")
             })
            return
            
    }

    selectActionAmendRNLNCDWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.='  Amend Renewal NCD']")
             })
            return
            
    }

    selectActionDiaryWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
             })
            return
            
    }

    selectActionDiaryWithParagonPolicyNumber1(){

        cy.readFile('policy.json').then((data) => {
            const paragonPolicyNumber1 = data.paragonPolicyNumber1
            cy.getAndWait('.panel-title')
            .contains(paragonPolicyNumber1)
            cy.xpath("//span[normalize-space()='"+paragonPolicyNumber1+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
             })
            return
            
    }

    selectActionDiaryWithParagonPolicyNumber2(){

        cy.readFile('policy.json').then((data) => {
            const paragonPolicyNumber2 = data.paragonPolicyNumber2
            cy.getAndWait('.panel-title')
            .contains(paragonPolicyNumber2)
            cy.xpath("//span[normalize-space()='"+paragonPolicyNumber2+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
             })
            return
            
    }

    selectActionDiaryWithParagonPolicyNumber3(){

        cy.readFile('policy.json').then((data) => {
            const paragonPolicyNumber3 = data.paragonPolicyNumber3
            cy.getAndWait('.panel-title')
            .contains(paragonPolicyNumber3)
            cy.xpath("//span[normalize-space()='"+paragonPolicyNumber3+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
             })
            return
            
    }

    selectActionAccountsWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Accounts']")
             })
            return
            
    }

    selectActionRefundsWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Refunds']")
             })
            return
            
    }

    selectActionDocumentsWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
             })
            return
            
    }
    
    selectActionDocumentsWithParagonPolicyNumber1(){

        cy.readFile('policy.json').then((data) => {
            const paragonPolicyNumber1 = data.paragonPolicyNumber1
            cy.getAndWait('.panel-title')
            .contains(paragonPolicyNumber1)
            cy.xpath("//span[normalize-space()='"+paragonPolicyNumber1+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
             })
            return
            
    }

    selectActionDocumentsWithParagonPolicyNumber2(){

        cy.readFile('policy.json').then((data) => {
            const paragonPolicyNumber2 = data.paragonPolicyNumber2
            cy.getAndWait('.panel-title')
            .contains(paragonPolicyNumber2)
            cy.xpath("//span[normalize-space()='"+paragonPolicyNumber2+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
             })
            return
            
    }

    selectActionDocumentsWithParagonPolicyNumber3(){

        cy.readFile('policy.json').then((data) => {
            const paragonPolicyNumber3 = data.paragonPolicyNumber3
            cy.getAndWait('.panel-title')
            .contains(paragonPolicyNumber3)
            cy.xpath("//span[normalize-space()='"+paragonPolicyNumber3+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
             })
            return
            
    }

    selectActionDPAWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' DPA / Preferences']")
             })
            return
            
    }

    selectActionPolicyOwnershipWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Policy Owenership']")
             })
            
    }

    selectActionScrutinyWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Scrutiny']")
             })
            return
            
    }

    ntuWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
                .contains(policyNumber)
                .click()
            cy.stopWindow("//span[normalize-space()='"+policyNumber+"']/../../../..//span[contains(text(),'NTU')]")
            })
            return
            
    }

    policyToolsAgePolicyWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait('.panel-title')
            .contains(policyNumber)
            cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Policy Tools']").click()
            cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Age Policy']")
            
             })
            return
            
    }

    retreivePolicyNumber(){

        cy.getAndWait('.m-card-content__inner > p > strong')
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

        cy.getAndWait('.m-card-content__inner > p > strong')
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

        cy.getAndWait('.m-card-content__inner > p > strong')
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

        cy.getAndWait('.m-card-content__inner > p > strong')
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

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewal).last().click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewalcheck).should('contain', 'RNL')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewalcheck1).should('not.contain', '€ 0')
            
    }

    searchRenewal(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewaldashboard).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewalpolicynumber).type(policyNumber)

        });    
    }

    inviteRenewal(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait(this.LoginElementLocators.BOPageLocators.select_renewals).click({force: true})
            cy.getAndWait(this.LoginElementLocators.BOPageLocators.input_policynumber).type(policyNumber)
        })

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.renewed_scheme).select(0)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.search_policynumber).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.tick_renewal).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.batchprint_renewal).click()
            
    }

    recallPolicy(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.recall_policy).click()
        return

    }

    checkRenewalInviteDocs(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Email')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Letter')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Schedule')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Statement Of Fact')
        return

    }

    checkRenewalDocs(){

        cy.wait(120000)
        cy.reload()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Letter')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Email')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Home Renewal Receipt')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Policy Schedule')
        return

    }




    //MTA B/O Actions

    selectActionMakeADJ(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.selectaction_makeadj).last().click().contains('Make Adjustment').invoke("removeAttr", "target").click()
        return
            
    }

    permADJAdditionalDriver(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.perm_additonaldriver).select('Additional drivers',{force: true}).should('have.value', 'AddDriver')
        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.perm_adjbtn).click({force: true})
        return
            
    }

    permMTAContinue(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.permmta_continue).click({force:true})
        return
            
    }

    permMTABuyNow(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.permmta_buynow).click({force:true})
        return
            
    }



    //Portal Actions

    portalManagePolicyWithPolicyNumber(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
        
            cy.getAndWait('.policypanels')
                .contains(policyNumber)
                .closest('.d-flex.flex-column')
                .within(() => {
                    cy.contains('Manage Policy').click({force: true})
                })
        })
            return
            
    }

    
    

    
    
    
   
        
    
   
    
    

        
    
    
    






}