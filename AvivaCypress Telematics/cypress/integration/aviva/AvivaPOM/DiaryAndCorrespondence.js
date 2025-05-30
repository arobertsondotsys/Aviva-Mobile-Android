export class DiaryAndCorrespondence{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')


diaryCorrespondenceHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.diarycorres_heading).contains(this.UserData.HeadingData.DiaryCorrespondence_Heading)

}

diaryCorrespondenceContinue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.diarycorres_continue).click({force: true})

}

}