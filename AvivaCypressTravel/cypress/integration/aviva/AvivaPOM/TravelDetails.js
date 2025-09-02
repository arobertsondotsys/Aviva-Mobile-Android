export class TravelDetails{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')

travelDetailsTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_title).contains(this.UserData.HeadingData.TravelDetails_Heading)

}

travelDetailsSingleTrip(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_singletrip).click()

}

travelDetailsMultiTrip(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_multitrip).click()

}

travelDetailsBackpacker(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_backpacker).click()

}

travelDetailsTravellingTo(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_travellingto).select("Egypt")

}

travelDetailsTravellingToEurope(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_travellingtoeurope).click()

}

travelDetailsTravellingToWorldwideExcUSA(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_travellingtowwexcusa).click()

}

travelDetailsTravellingToWorldwideIncUSA(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_travellingtowwincusa).click()

}

travelDetailsStartDate(){

    const day = require('dayjs')

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_startdate).type(day().format('DD/MM/YYYY'))

}

travelDetailsCoverStartDate(){

    cy.wait(2000)    
    const day = require('dayjs')

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_coverstartdate).type(day().add(7, 'day').format('DD/MM/YYYY'))

}

travelDetailsReturnDate(){

    const day = require('dayjs')

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_returndate).invoke('val', day().add(21, 'day').format('DD/MM/YYYY'))

}

travelDetailsReturnDateBackpacker(){

    const day = require('dayjs')

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_returndate).invoke('val', day().add(39, 'day').format('DD/MM/YYYY'))

}

travelDetailsWhoTravellingIndividual(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_whotravellingindividual).click()

}

travelDetailsWhoTravellingCouple(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_whotravellingcouple).click()

}

travelDetailsWhoTravellingFamily(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_whotravellingfamily).click()

}

travelDetailsContinue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.traveldetails_continue).click()

}




}