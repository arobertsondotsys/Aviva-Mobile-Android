
export class Global{

    LoginElementLocators = require('../Page Elements/POMElementsHome.json')
    UserData = require('../Page Elements/POMInputHome.json')
    

        constructor() {
        this.serverKey = Cypress.env('serverKey') || 'QA2' // Default to QA2 if no serverKey is provided
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

    Server() {
        const url = this.serverUrls[this.serverKey] || this.serverUrls['QA2'] // Default to QA2 if no valid serverKey is provided
        cy.visit(url)
    }

    Server1() {
        const url = this.server1Urls[this.serverKey] || this.server1Urls['QA2'] // Default to QA2 if no valid serverKey is provided
        cy.visit(url)
    }

    Server2() {
        const url = this.server2Urls[this.serverKey] || this.server2Urls['QA2'] // Default to QA2 if no valid serverKey is provided
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

        //7HOTFIX ONLY
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

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.agent_quote).select(2)
        cy.window().then((win) => {
            const orig = win.open
          
            win.open = function (url, target, features) {
              return orig.call(this, url, '_self', features)
            }
          })
        return

    }


    //Global Quote Actions (About you)


    aboutYouTitleHome(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_title).contains(this.UserData.HeadingData.AboutYou_Heading)
        return

    }

    proposerTitleHome(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_mr).select(1)
        return

    }

    proposerForenameHome(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_forename).type(this.UserData.InputData.ProposedForename)
        return

    }

    proposerSurnameHome(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_surname).type(this.UserData.InputData.ProposedSurname)
        return

    }

    proposerEmailHome(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposeremail_element).type(this.UserData.InputData.Email1)
        return

    }

    phone(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.phone_element).type(this.UserData.InputData.Phone1)
        return

    }

    dob(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.dob_element).type(this.UserData.InputData.DOB1)
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

    postalAddressConfirm(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.postaladdress_confirm).click()
        return

    }

    occupancy(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_occupancy).select(1)
        return

    }

    proposerEmployStatus(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.employment_status).select('C')
        return

    }

    bizStatus(){

        cy.wait(1000)
        cy.xpath(this.LoginElementLocators.QuotePageLocators.biz_status).select(1)
        cy.wait(1000)
        return

    }

    aboutYouContinueHome(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_continue).click()
        return

    }

    

    //Global Quote Actions (Your Property)

    yourPropertyTitle(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourproperty_title).contains(this.UserData.HeadingData.YourProperty_Heading)
        return

    }

    propertyType(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.property_type).select(1, {force:true})
        return

    }

    yearBuilt(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.year_built).type(this.UserData.InputData.YearBuilt, {force:true})
        return

    }

    listedBuildingFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.listed_buildingfalse).click({force:true})
        return

    }

    flatRoofFlase(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.flat_rooffalse).click({force:true})
        return

    }

    standardMaterialsTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.standard_materialstrue).click({force:true})
        return

    }

    burglarAlarm(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.burglar_alarm).select(2, {force:true})
        return

    }

    smokeAlarmTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.smoke_alarmtrue).click({force:true})
        return

    }

    additSecStandsTitle(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.addit_secstandards_title).contains(this.UserData.HeadingData.AdditSecStands, {force:true})
        return

    }

    securityLocks(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.security_lockstrue).click({force:true})
        return

    }

    noOfBedrooms(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.number_bedrooms).select(5, {force:true})
        return

    }

    noOfBathrooms(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.number_bathrooms).select(4, {force:true})
        return

    }

    heatingType(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.heating_type).select(4, {force:true})
        return

    }

    goodStateOfRepairTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.good_repairstatetrue).click({force:true})
        return

    }

    floodSubsidenceFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.flood_subsidencefalse).click({force:true})
        return

    }
    
    yourPropertyContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourproperty_continue).click({force:true})
        return

    }

    //Global Quote Actions (Your cover)

    yourCoverTitle(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_title).contains(this.UserData.HeadingData.YourCover_Heading)
        return

    }

    buildingAndContentsTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.building_contentstrue).click().click()
        return

    }

    buildingAndContentsFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.building_contentsfalse).click().click()
        return

    }

    homeValue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.home_value).type(this.UserData.InputData.HomeValue)
        return

    }

    contentsValue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.contents_value).type(this.UserData.InputData.ContentsValue)
        return

    }

    isClaimsFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.is_claimsfalse).click()
        return

    }

    isConvictionsFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.is_convictionsfalse).click()
        return

    }

    isRefusedFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.is_refusedfalse).click()
        return

    }

    isSpecialFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.is_specialfalse).click()
        return

    }

    isCancelledFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.is_cancelledfalse).click()
        return

    }

    yourCoverJointOwner(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointowner).click()
        return

    }

    yourCoverJointOwner1(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointownertitle).select(2)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointownerfirstname).type(this.UserData.InputData.JointPropFirstName)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointownersurname).type(this.UserData.InputData.JointPropSurname)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointownerdob).type(this.UserData.InputData.JointPropDOB)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointownerrelation).select(1)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointownersave).click()

        return

    }

    yourCoverContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_continue).click({force: true})
        return

    }

    //Global Quote Actions (Policy start date and claims)

    coverStartTitle(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_title).contains(this.UserData.HeadingData.CoverStart_Heading)
        return

    }

    claimsFreeYears(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_claimsfreeyears).select(7)
        return

    }

    coverStartDate(){

        const day = require('dayjs')
        cy.wait(1000)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_date).type(day().format('DD/MM/YYYY'))
        return

    }

    coverStartHaveCarIns(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_havecarfalse).click()
        return

    }

    coverStartMarketing(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_marketingfalse).click()
        return

    }

    coverStartCustomerQuote(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_custcheck).click()
        return

    }

    coverStartAgentQuote(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_custcheck).should('not.exist')
        return

    }

    coverStartContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.coverstart_continue).click()
        return

    }
    
    //Global Quote Actions (Quote Page)

    quotePageHeading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_heading).contains(this.UserData.HeadingData.QuotePage_Heading)
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
    
    quotePageStaffRecalculate(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_recalculate).click()
        return

    }

    quotePageBuyNowBtn(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_buynowbtn).click()
        return

    }

    quotePageMonthlyBtn(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_paymonthly).click()
        return

    }

    quotePageFullBtnRNLswap(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_payfullswap).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_payfullswapmessage).contains('change your payment method to paying in full')
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_payfullswapconfirm).click()
        return

    }

    quotePageMonthlyBtnRNLswap(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_paymonthlyswap).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_paymonthlyswapmessage).contains('change your payment method to paying in installments')
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_paymonthlyswapconfirm).click()
        return

    }

    quotePageAccidentalDamageViewOptions(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_accidentaldamage).click()
        return

    }

    quotePageAccidentalDamageAddCover(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addaccidentaldamage).click()
        cy.wait(4000)
        return

    }

    quotePageOptionalCoverViewOptions(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_optionalcover).click()
        return

    }

    quotePageOptionalCoverAddUnpecifiedCover(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_unspecifieditems).select(1)
        cy.wait(4000)
        return

    }

    quotePageOptionalCoverAddSpecifiedItem(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_specifieditem).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.specifieditem_itemdescription).type(this.UserData.InputData.SpecifiedItemDescription)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.specifieditem_itemtype).select(1)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.specifieditem_itemvalue).type(this.UserData.InputData.SpecifiedItemValue)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.specifieditem_additem).click()
        cy.wait(4000)
        return

    }

    quotePageRemoveSpecifiedItem(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.specifieditem_edit).click()
        cy.contains('Remove Item').click()
        return

    }

    quotePageSpecifiedItemAdded(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_specifieditemadded).contains('Added')
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_specifieditemedit).contains('Edit')
        return

    }

    quotePageManageYourExcessViewOptions(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_manageexcess).click()
        return

    }

    quotePageManageYourExcess275(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_manageexcess275).click()
        cy.wait(4000)
        return

    }
    
    quotePageManageYourExcess500(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_manageexcess500).click()
        cy.wait(4000)
        return

    }

    quotePageManageYourExcess750(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_manageexcess750).click()
        cy.wait(4000)
        return

    }

    quotePageManageYourExcess1000(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_manageexcess1000).click()
        cy.wait(4000)
        return

    }

    quotePageGardenCoverViewOptions(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_gardencover).click()
        return

    }

    quotePageGardenCover1000(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_gardencoverddl).select(1)
        cy.wait(4000)
        return


        
    }

    quotePageGardenCover2000(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_gardencoverddl).select(2)
        cy.wait(4000)
        return

    }

    quotePageGardenCover3000(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_gardencoverddl).select(3)
        cy.wait(4000)
        return

    }

    quotePageCaravanCoverViewOptions(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_caravancover).click()
        return

    }

    quotePageCaravanCoverAddWithoutPersonal(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addcaravancover).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_make).type(this.UserData.InputData.CaravanMake)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_serialno).type(this.UserData.InputData.CaravanSerial)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_year).type(this.UserData.InputData.CaravanYear)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_suminsured).type(this.UserData.InputData.CaravanValue)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_personalbelongingsno).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_addcoverbtn).click()
        cy.wait(4000)
        return

    }

    quotePageCaravanCoverAddWithPersonal(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addcaravancover).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_make).type(this.UserData.InputData.CaravanMake)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_serialno).type(this.UserData.InputData.CaravanSerial)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_year).type(this.UserData.InputData.CaravanYear)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_suminsured).type(this.UserData.InputData.CaravanValue)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_personalbelongingsyes).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_personalbelongingsvalue).type(this.UserData.InputData.PBValue)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_addcoverbtn).click()
        cy.wait(4000)

        return

    }

    //Global Quote Actions (Post Quote - Complete and pay)
    
    completeAndPayHeading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_heading).contains(this.UserData.HeadingData.CompleteAndPay_Heading)
        return

    }

    completeAndPayMortgage(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_mortgage).select(1)
        return

    }

    completeAndPayMyAvivaDocsNo(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_myavivadocsno).click()
        return

    }

    completeAndPayCheckBox(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_checkbox).click()
        return

    }

    completeAndPayNoCheckBox(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_nocheckbox).should('not.exist')
        return

    }

    completeAndPayContinue(){

        cy.wait(1000)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_continue).click()
        return

    }

    completeAndPayNBPayNow(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_paynow).click()
        return

    }

    completeAndPayRNLPayNow(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_paynow).click()
        return

    }


    //Global Quote Actions - Payment type screen

    paymentTypeAgentCcard(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(1)
        return

    }

    paymentTypeAgentCardRenewal(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(3)
        return

    }

    paymentTypeAgentNoPay(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(2)
        return

    }

    paymentTypeAgentDD(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(2)
        return

    }

    paymentTypeAgentNoPayContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agentnopaycontinue).click({force: true})
        return

    }

    paymentTypeAgentMonthlypay(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.completeandpay_paymonthly).click()
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

    diaryCorrespondenceReceipt(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.diarycorres_valuationreciept).contains(' Valuations/Receipt for Ring ')
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

          //cy.get('.m-form-row__content > .m-radio-group > :nth-child(1) > .a-radio > .a-radio__label').click()
        
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
          cy.wait(4000)

        })
        return

    }

    paymentCardQAAgentNoGooglePay(){

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
          cy.wait(4000)

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
          cy.get('.l-section > .a-heading').contains('Pay €')
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
          cy.get('#pspForm > :nth-child(1) > :nth-child(1) > :nth-child(1) > .a-heading').contains('Set up monthly Direct Debit')

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

        //Password box
        cy.wait(10000)
        const getIframeDocumentPassword = () => {
          
          return cy.get('.adyen-checkout__iframe').its('0.contentDocument.body').should('not.be.empty')
          .then((body) => cy.wrap(body))

        }
        getIframeDocumentPassword().find('input[placeholder="enter the word \'password\'"]').as('passwordbox').should('exist')
        cy.get('@passwordbox').type('password')
        getIframeDocumentPassword().find('#buttonSubmit').should('exist').click()
        return

    }

    paymentDDQANoPassword(){

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
          cy.get('#pspForm > :nth-child(1) > :nth-child(1) > :nth-child(1) > .a-heading').contains('Set up monthly Direct Debit')

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


    paymentDDQACust(){

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
          cy.get('#pspForm > :nth-child(1) > :nth-child(1) > :nth-child(1) > .a-heading').contains('Set up monthly Direct Debit')

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

        })
        return

    }

    paymentDDDemoCust(){

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
          cy.get('#pspForm > :nth-child(1) > :nth-child(1) > :nth-child(1) > .a-heading').contains('Set up monthly Direct Debit')

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

    RNLDDQA(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.enter_bic).type(this.UserData.InputData.BIC)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.enter_iban).type(this.UserData.InputData.IBAN)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.preferred_day).select(1)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.confirm_dd).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.deposit_paymenttype).select(3)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pay_depositbtn).click()
        return

    }

    NBDDQA(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.enter_bic).type(this.UserData.InputData.BIC)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.enter_iban).type(this.UserData.InputData.IBAN)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.preferred_day).select(1)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.confirm_dd).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pay_depositbtn).click()
        return

    }
        

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    

    
    
    

    //B/O Actions

    home(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.home_page).click()
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

    livePoliciesBTN(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.livepolicy_btn).click()
        return
            
    }

    homePolicyTab(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.homepolicy_tab).click()
        return
            
    }

    selectActionMakeAdjustment(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.selectaction_makeadjustment).last().click().contains('Make Adjustment').invoke("removeAttr", "target").click()
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

    selectActionDocuments(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.selectaction_documents).last().click().contains('Documents').invoke("removeAttr", "target").click()
        return
            
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
            return
            
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

    retreivePolicyNumber(){

        cy.getAndWait('.m-card-content__inner > p > strong')
        .invoke('text') 
        .then((text) => {
        const numberOnly = text.match(/\d+/)[0]
        cy.wrap(numberOnly).as('policyNumber')
        cy.writeFile('policy.json', { policyNumber: numberOnly })
        })

        cy.get('@policyNumber').then((policyNumber) => {
        cy.log(`Extracted policy number: ${policyNumber}`)
        
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

    


    policyDocsSOF(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.policydocs_check).contains('Statement Of Fact')
        return
            
    }

    policyDocsSchedule(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.policydocs_check).contains('Policy Schedule')
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
        // cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).select(9)
        // cy.getAndWait('#ctl00_ContentPlaceHolder1_BackDateMonth').select(3)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_year).select(this.UserData.InputData.BackdateYear)

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_confirm).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_message).contains(this.UserData.InputData.BackdateMessage)
            
    }

    optOutRollover(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.dpa_edit).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.optout_rollover).select(1)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.save_rollover).click()
        cy.go(-3)
        return
            
    }

    generateRenewal(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewal).last().click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewalcheck).should('contain', 'RNL')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewalcheck1).should('not.contain', '€ 0')
            
    }

    inviteRenewal(){

        cy.readFile('policy.json').then((data) => {
            const policyNumber = data.policyNumber
            cy.getAndWait(this.LoginElementLocators.BOPageLocators.select_renewals).click({force: true})
            cy.getAndWait(this.LoginElementLocators.BOPageLocators.input_policynumber).type(policyNumber)
        })

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.renewed_scheme).select(1)
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

        cy.wait(80000)
        cy.reload()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Letter')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Confirm Email')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Home Renewal Receipt')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Policy Schedule')
        return

    }

    checkRenewalDocsAutoRolover(){

        cy.wait(80000)
        cy.reload()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Letter')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Confirm Email')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Policy Schedule')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).should('not.contain', 'Receipt')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
        cy.wait(1000)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).should('not.contain', 'Receipt')
        return

    }

    checkRenewalInviteDocsPost(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Email')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Letter')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Schedule')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')
        return

    }

    checkRenewalConfirmationDocsPost(){

        cy.wait(80000)
        cy.reload()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Cover Letter')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Confirm Email')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Policy Schedule')
        return

    }

    checkNBParagonDocs(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
        cy.wait(80000)
        cy.reload()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Welcome Letter')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Statement Of Fact')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Policy Schedule')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).should('not.contain', 'Receipt')
        return

    }

    checkAdhocParagonDocs(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
        // cy.wait(80000)
        // cy.reload()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Notice of Interest')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('One Off Letter - ADIL')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('One Off Letter - AIIDAC')
        
        return

    }

    checkNBParagonDocsWithReceipt(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
        cy.wait(80000)
        cy.reload()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Welcome Letter')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Statement Of Fact')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Receipt')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Policy Schedule')
        return

    }

    checkMTAParagonDocs(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
        cy.wait(80000)
        cy.reload()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_mtadocspost).contains('Home MTA Confirmation Letter')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_mtadocspost).contains('Receipt')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_mtadocspost).contains('Policy Schedule')
        return

    }

    checkRNLInviteParagonDocs(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
        cy.reload()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Letter')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Schedule')
        return

    }

    checkRNLParagonDocs(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
        cy.wait(80000)
        cy.reload()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Confirm Letter')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Policy Schedule')
        return

    }

    checkRNLMTAParagonDocs(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
        cy.wait(80000)
        cy.reload()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewalmtadocspost).contains('Home MTA Confirmation Letter')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewalmtadocspost).contains('Receipt')
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewalmtadocspost).contains('Policy Schedule')
        return

    }

    selectStaffDiscount(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_discountheading).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_discountselect).select(1)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_discountrecalc).click()
        
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_nodiscountheading).should('contain', 'Call centre customer - No online discount')
        return

    }

    diaryAddAdHocLetters(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_entry).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_typeddl).select(2)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_lettertypeddl).select(0)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_saveletter).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_postorprint).select(0)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_printsend).click()
        cy.wait(1000)
        cy.go(-3)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_entry).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_typeddl).select(2)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_lettertypeddl).select(1)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_saveletter).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_postorprint).select(0)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_printsend).click()
        cy.wait(1000)
        cy.go(-3)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_entry).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_typeddl).select(2)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_lettertypeddl).select(2)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_saveletter).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_postorprint).select(0)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_printsend).click()
        cy.wait(1000)
        cy.go(-3)
        // cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_entry).click()
        // cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_typeddl).select(2)
        // cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_lettertypeddl).select(3)
        // cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_saveletter).click()
        // cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_postorprint).select(1)
        // cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_printsend).click()
        // cy.wait(1000)
        // cy.go(-3)
        return

    }



    //MTA B/O Actions

    permMTAContinue(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.permmta_continue).click({force:true})
        return
            
    }

    adjustmentType(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_type).select(4, {force: true})
        return
            
    }

    adjustmentTypeCoverDetails(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_type).select(2, {force: true})
        return
            
    }
    
    adjustmentContinue(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_continue).click({force: true})
        return
            
    }

    addSpecifiedItemBTN(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.addspecifieditem_btn).click({force: true})
        return
            
    }

    addSpecifiedItemDescription(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.addspecifieditem_description).type('Wedding Ring', {force: true})
        return
            
    }

    addSpecifiedItemType(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.addspecifieditem_type).select(1, {force: true})
        return
            
    }

    addSpecifiedItemValue(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.addspecifieditem_value).type('5000', {force: true})
        return
            
    }

    addSpecifiedItemAddItem(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.addspecifieditem_additem).click({force: true})
        return
            
    }

    adjustmentBuyNowBTN(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_buynow).click({force: true})
        return
            
    }

    adjustmentBuyContinue(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_buycontinue).click({force: true})
        return
            
    }

    adjustmentContinueToPayment(){

        cy.wait(1000)
        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_continuetopayment).click({force: true})
        return
            
    }

    paymentTypeAgentCard(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(3)
        return

    }

    paymentTypeAgentPayNow(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agentcardpaycontinue).click()
        return

    }

    adjustmentReceiptAssert(){

        cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_receiptassert).contains('Valuations/Receipt for Ring')
        return

    }

    //Cancel Policy B/O actions

    cancellationRequest(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_request).select(1)
        return

    }

    cancellationReason(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_poilcyholderreason).select(2)
        return

    }

    cancellationReason1(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_osdocs).click()
        return

    }

    cancellationReasonContinue(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_reasoncontinue).click()
        return

    }

    cancellationInception(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_inception).click()
        return

    }

    cancellationContinue(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_continue).click()
        cy.wait(1000)
        return

    }

    cancellationAccept(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_accept).click()
        return

    }

    cancellationDone(){

        cy.getAndWait(this.LoginElementLocators.CancPageLocators.cancellation_done).should('contain', 'Your policy has been cancelled')
        return

    }

    

    //Portal Actions

    portalPolicySelect(){

        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portal_policyselect).click()
        return

    }

    portalMakeAdjustmentSelect(){

        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portal_makeadjselect).click()
        return

    }

    portalAdjustmentTypeSelect(){

        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portaladj_adjtypeselect).select(4, {force:true})
        return

    }

    portalMakeADJWithPolicyNumber(){

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

    portalMortgageSelect(){

        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portaladj_mortgageselect).select(2)
        return


    }
    
    portalMortgageIntLetterTrue(){

        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portaladj_mortgageintlettertrue).click()
        return


    }

    portalMortgageProvider(){

        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portaladj_mortgageprovider).select(7)
        return


    }

    portalAdjContinue(){

        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portaladj_adjcontinue).click({force:true})
        return

    }

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
    
    portalRenewPolicyCloseModal(){

        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portalrenew_closemodal).click()
        return
        
    }

    portalRenewThisPolicy(){

        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portalrenew_renewthispolicy).click()
        return
        
    }

    portalRenewPolicySelect(){

        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portalrenew_policyselect).click()
        return
        
    }

    portalRenewDocsConfirm(){

        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portalrenew_docsconfirm).click()
        return
        
    }

    portalRenewMonthlyPaymentSwap(){

        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portalrenew_monthlypaymentswap).click()
        cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portalrenew_monthlypaymentswapconfirm).click({force: true})

        return
        
    }




    
    
   
        
    
   
    
    

        
    
    
    






}