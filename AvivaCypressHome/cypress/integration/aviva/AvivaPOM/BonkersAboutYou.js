export class BonkersAboutYou{

    LoginElementLocators = require('./Page Elements/POMElementsHome.json')
    UserData = require('./Page Elements/POMInputHome.json')



bonkersAboutYouTitle(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_aboutyoutitle).select('Mr')

}

bonkersFirstName(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_firstname).type(this.UserData.BonkersData.Bonkers_FirstName)

}

bonkersSurname(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_surname).type(this.UserData.BonkersData.Bonkers_Surname)

}

bonkersEmail(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_email).type(this.UserData.BonkersData.Bonkers_Email)


}

bonkersMobile(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_mobile).type(this.UserData.BonkersData.Bonkers_Mobile)

}

bonkersDOB(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_daydob).type(this.UserData.BonkersData.Bonkers_DayDOB)
    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_monthdob).type(this.UserData.BonkersData.Bonkers_MonthDOB)
    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_yeardob).type(this.UserData.BonkersData.Bonkers_YearDOB)

}

bonkersEmploymentStatus(){

    cy.wait(500)
    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_employmentstaus).select('Employed')

}

bonkersOccupation(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_occupation).type(this.UserData.BonkersData.Bonkers_Occupation)
    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_occupationselect).click()

}

bonkersStartDate(){

    const dayjs = require('dayjs')
    const startDate = dayjs().add(1, 'day')

    const day = startDate.format('DD')
    const month = startDate.format('MM')
    const year = startDate.format('YYYY')

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_startday).type(day)
    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_startmonth).type(month)
    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_startyear).type(year)

}

bonkersSecondPolicyHolder(isSecondPolicyHolder) {
    if (isSecondPolicyHolder) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_secondpolicholderyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_secondpolicholderno).click()
    }
}

bonkersAccidentalDamage(isAccidentalDamage) {
    if (isAccidentalDamage) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_accidentaldamageyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_accidentaldamageno).click()
    }
}

bonkersPersonalAccident(isPersonalAccident) {
    if (isPersonalAccident) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_personalaccidentcoveryes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_personalaccidentcoverno).click()
    }
}

bonkersAboutYouContinue(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_aboutyoucontinue).click()

}

}