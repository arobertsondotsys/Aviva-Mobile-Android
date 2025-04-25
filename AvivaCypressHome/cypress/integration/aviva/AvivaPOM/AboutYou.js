export class AboutYou{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')



aboutYouTitleHome(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_title).contains(this.UserData.HeadingData.AboutYou_Heading)

}

proposerTitleHome(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_mr).select(1)

}

proposerForenameHome(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_forename).type(this.UserData.InputData.ProposedForename)

}

proposerSurnameHome(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposer_surname).type(this.UserData.InputData.ProposedSurname)

}

proposerEmailHome(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposeremail_element).type(this.UserData.InputData.Email1)

}

proposerNoEmail(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.proposernoemail).click()

}



phone(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.phone_element).type(this.UserData.InputData.Phone1)

}

dob(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.dob_element).type(this.UserData.InputData.DOB1)

}

addressInput(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_input).type(this.UserData.InputData.ProposedAddress)

}

addressSuggest(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_suggest).click()

}

addressSelect(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_select).click()

}

addressConfirm(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_confirm).click()

}

postalAddressConfirm(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.postaladdress_confirm).click()

}

occupancy(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_occupancy).select(1)

}

proposerEmployStatus(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.employment_status).select('C')

}

bizStatus(){

    // cy.wait(1000)
    // cy.xpath(this.LoginElementLocators.QuotePageLocators.biz_status).select(1)
    // cy.wait(1000)

    cy.wait(1000)
    cy.xpath(this.LoginElementLocators.QuotePageLocators.biz_status)
        .select(1) // Select the first option
        .should('have.value', '1') // Verify that the selected value is '1'
        .then(($dropdown) => {
            if ($dropdown.val() !== '1') {
                cy.log('Retrying dropdown selection...')
                cy.xpath(this.LoginElementLocators.QuotePageLocators.biz_status).select(1)
            }
        })
    cy.wait(1000)

    

}

aboutYouContinueHome(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_continue).click()
    

}

aboutYouContinueHome(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_continue).click()

}



}