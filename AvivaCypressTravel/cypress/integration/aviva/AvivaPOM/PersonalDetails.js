export class PersonalDetails{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

personalDetailsTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.personaldetails_title).contains(this.UserData.HeadingData.PersonDetails_Heading)

}

addressInput(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_input).type(this.UserData.InputData.ProposedAddress)

}

addressSuggest(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_suggest).find(':first-child').click()

}

addressSelect(){
    cy.wait(2000)
    cy.document().then(doc => {
        const el = doc.querySelector(this.LoginElementLocators.QuotePageLocators.address_select)
       if (el && el.offsetParent !== null) { // checks for existence and visibility
            cy.wrap(el).getAndWait('.autoaddress-options-list').find('li:visible').first().click()
        } else {
            cy.log('No address suggestions to select.')
        }
    })

}

addressConfirm(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_confirm).click()

}

proposerDOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_dob).type(this.UserData.InputData.DOB1)

}

proposerEmployStatus(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.employment_status).select('C')

}

licenceType(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.licence_type).select('Full Irish')

}

licenceYears(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.licence_years).select('5')

}

personlaDetailsContinue(){
    
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.personaldetails_continue).click()
    cy.wait(6000)

}


}