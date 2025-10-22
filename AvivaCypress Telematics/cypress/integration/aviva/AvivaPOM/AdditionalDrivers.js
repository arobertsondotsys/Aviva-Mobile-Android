export class AdditionalDrivers{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

additionalDriversHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldrivers_heading).contains(this.UserData.HeadingData.AdditionalDrivers_Heading)

}

additionalDriversFalse(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_false).click()

}

additionalDriversTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()

}

additionalDriversContinue(){

    cy.wait(2000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_continue).click()

}

additionalDriver1Title(){

cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(2)

}

additionalDriver1Forename(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).type(this.UserData.InputData.AD1_Forename)

}

additionalDriver1Surname(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).type(this.UserData.InputData.AD1_Surname)
        
}

additionalDriver1DOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).type(this.UserData.InputData.AD1_DOB)

}

additionalDriver1EmploymentStatus(){
        
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(2)

}

additionalDriver1LicenceType(){
    
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(1)

}

additionalDriver1LicenceYears(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(6)

}

addionalDriver1DriverNumber(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_drivernumber).type(this.UserData.InputData.AD1_DriverNum)
    cy.wait(1000)

}

additionalDriver1Relationship(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(1)

}

additionalDriver1SpouseOwnVehFalse(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_spousefalse).click()

}

additionalDriver1Save(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
    cy.wait(1000)

}

additionalDriver2(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(3, {force: true})
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD2_Forename)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD2_Surname)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD2_DOB)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(1)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_occupation).type('shop')
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_occuseggest).contains('Shop Assistant').click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(2)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(5)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()

}

additionalDriver3(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(1)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD3_Forename)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD3_Surname)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD3_DOB)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(1)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_occupation).type('shop')
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_occuseggest1).contains('Shop Assistant').click({force: true})
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(1)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(4)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()

}

additionalDriver4(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(1)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD4_Forename)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD4_Surname)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD4_DOB)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(4)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(6)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(2)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
    //cy.wait(2000)

}

additionalDriver5(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(2, {force: true})
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD5_Forename)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD5_Surname)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD5_DOB)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(4)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(6)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(8)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
    //cy.wait(2000)

}

additionalDriver6(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_title).select(2, {force: true})
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_forename).clear().type(this.UserData.InputData.AD6_Forename)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_surname).clear().type(this.UserData.InputData.AD6_Surname)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_dob).clear().type(this.UserData.InputData.AD6_DOB)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_empstatus).select(4)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_lictype).select(2)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_licyears).select(6)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_relationship).select(7)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_save).click()
    //cy.wait(2000)

}

additionalDriver7(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_true).should('not.be.visible')

}

additionalDriverAddedHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_added_heading).contains(this.UserData.HeadingData.AD_Added)

}

additionalDriverAddedHeading1(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.additionaldriver_added_heading1).contains(this.UserData.HeadingData.AD_Added6)

}


}