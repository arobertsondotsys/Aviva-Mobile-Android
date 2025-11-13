export class DiaryCorrespondence{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')


diaryCorrespondenceHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.diarycorres_heading).contains(this.UserData.HeadingData.DiaryCorrespondence_Heading)

}

diaryCorrespondenceContinue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.diarycorres_continue).click({force: true})

}

diaryCorrespondenceReceipt(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.diarycorres_valuationreciept).contains('Receipt for Ring')

}


}