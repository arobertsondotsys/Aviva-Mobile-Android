export class AboutTheDriversPQ2{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')


postQuote2Heading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_heading).contains(this.UserData.HeadingData.PostQuote2_Heading)

}

postQuote2Headingselect(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_heading).click()

}

postQuote2IsResidentTrue(){

    //cy.wait(2000)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isresidenttrue).click()

}

postQuote2IsMainDriverTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_ismaindrivertrue).click()

}

postQuote2IsNotOtherCarTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnotothercartrue).click()

}

postQuote2IsNotOtherCarTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnotothercartrue).click()

}

postQuote2IsNotOtherInsTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnototherinstrue).click()

}

postQuote2IsNoConvictionTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnoconvtrue).click()

}

postQuote2IsNoDisqualificationTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnodisqualtrue).click()

}

postQuote2IsNoRefusalTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnorefusaltrue).click()

}

postQuote2IsNoIncreaseTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnoincreasetrue).click()

}

postQuote2IsNoMedicalTrue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnomedicaltrue).click()
    
}

postQuote2IsNoMedicalFalse(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnomedicalfalse).click()
    
}

postQuote2addMedicalConditionBTN(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_btn).click({force: true})
    
}

postQuote2addMedicalConditionDriver(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_driver).select(1,{force: true})
    
}

postQuote2addMedicalConditionAD(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_driver).select(2,{force: true})
    
}

postQuote2addMedicalConditionSelect(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_select).select(2,{force: true})
    
}

postQuote2addMedicalConditionSelect1(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_select).select(3,{force: true})
    
}

postQuote2addMedicalConditionInformed(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_informed).click({force: true})
    
}

postQuote2addMedicalConditionSave(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_addmedicalcon_save).click({force: true})
    //cy.wait(1000)
    
}

postQuote2MedicalDeleteBTN(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_medicaldelete_btn).click({force: true})
    
}

postQuote2MedicalDeleteBTN1(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_medicaldelete_btn1).click({force: true})
    
}


postQuote2MedicalRemoveBTN(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_medicalremove_btn).click({force: true})
    
}

postQuote2DriverNumber(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_drivernum).type(this.UserData.InputData.Driver_Number)
    //cy.wait(2000)

}

postQuote2DriverNumber1(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_drivernum1).type(this.UserData.InputData.Driver_Number1)

}

postQuote2DriverNumber2(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_drivernum2).type(this.UserData.InputData.Driver_Number1)

}

postQuote2Continue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_continue).click()

}

}