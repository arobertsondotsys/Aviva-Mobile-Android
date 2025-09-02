export class TravelQuotePage{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')


travelQuotePageTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travelquotepage_title).contains(this.UserData.HeadingData.TravelQuotePage_Heading)

}

travelQuotePageWinterSportsCover(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travelquotepage_wintersportsselect).click()

}

travelQuotePageTitleCruiseCover(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travelquotepage_cruiseselect).click()

}

travelQuotePageTitleScubaDivingCover(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travelquotepage_scubadivingselect).click()

}

travelQuotePageBuyNow(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travelquotepage_buynow).click()

}

travelQuotePageBreakdown(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travelquotepage_breakdown).click()

}

travelQuotePageBuyNowBottom(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travelquotepage_buynowbottom).click()

}

travelQuotePageBack(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travelquotepage_back).click()

}



}