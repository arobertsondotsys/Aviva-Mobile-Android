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

    const numbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10))
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.phone_element).type('07'+ numbers.join(''))

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

bizStatus() {
    cy.wait(1000)
    const trySelect = (attempt = 1) => {
        cy.log(`Attempting to select business status, try #${attempt}`);
        cy.xpath(this.LoginElementLocators.QuotePageLocators.biz_status, { timeout: 20000 })
            .should('exist')
            .should('be.visible')
            .then($dropdown => {
                // Re-query before select to avoid stale element
                cy.xpath(this.LoginElementLocators.QuotePageLocators.biz_status, { timeout: 20000 })
                    .select(1)
                    .then($el => {
                        // Check if value is '1'
                        if ($el.val() !== '1') {
                            if (attempt < 3) {
                                ////cy.wait(1000)
                                trySelect(attempt + 1)
                            } else {
                                throw new Error('Failed to select business status after 3 attempts');
                            }
                        }
                    });
            });
    };

    trySelect();
}

aboutYouContinueHome(){

    ////cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_continue).click()
    

}

aboutYouContinueHome(){

    ////cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutyou_continue).click()

}



}