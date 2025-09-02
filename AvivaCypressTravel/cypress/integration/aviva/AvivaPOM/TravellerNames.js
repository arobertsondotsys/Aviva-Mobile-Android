export class TravellerNames{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')

travellerNamesTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_title).contains(this.UserData.HeadingData.TravellerNames_Heading)

}

travellerNamesTitle1(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_title1).contains(this.UserData.HeadingData.TravellerNames_Heading1)

}

travellerNamesAdult2Firstname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_adult2firstname).type(this.UserData.InputData.AD1_Forename)

}

travellerNamesAdult2Surname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_adult2surname).type(this.UserData.InputData.AD1_Surname)

}

travellerNamesChild1Firstname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_child1firstname).type(this.UserData.InputData.AD2_Forename)

}

travellerNamesChild1Surname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_child1surname).type(this.UserData.InputData.AD2_Surname)

}

travellerNamesChild2Firstname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_child2firstname).type(this.UserData.InputData.AD3_Forename)

}

travellerNamesChild2Surname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_child2surname).type(this.UserData.InputData.AD3_Surname)

}

travellerNamesChild3Firstname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_child3firstname).type(this.UserData.InputData.AD4_Forename)

}

travellerNamesChild3Surname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_child3surname).type(this.UserData.InputData.AD4_Surname)

}

travellerNamesChild4Firstname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_child4firstname).type(this.UserData.InputData.AD5_Forename)

}

travellerNamesChild4Surname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_child4surname).type(this.UserData.InputData.AD5_Surname)

}

travellerNamesChild5Firstname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_child5firstname).type(this.UserData.InputData.AD6_Forename)

}

travellerNamesChild5Surname(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_child5surname).type(this.UserData.InputData.AD6_Surname)

}

travellerNamesEnterAddress(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_address).type(this.UserData.InputData.ProposedAddress)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.address_suggest).find(':first-child').click()

    cy.wait(2000)
    cy.document().then(doc => {
        const el = doc.querySelector(this.LoginElementLocators.QuotePageLocators.address_select)
       if (el && el.offsetParent !== null) { // checks for existence and visibility
            cy.wrap(el).getAndWait('.autoaddress-options-list').find('li:visible').first().click()
        } else {
            cy.log('No address suggestions to select.')
        }
    })

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_addressconfirm).click()

}

travellerNamesIAgree(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_iagree).click()

}

travellerNamesIAgree(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_iagree).click()

}

travellerNamesContinue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_continue).click()

}

travellerNamesBack(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellernames_back).click()

}



}