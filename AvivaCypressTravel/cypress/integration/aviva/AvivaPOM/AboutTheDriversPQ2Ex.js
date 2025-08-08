export class AboutTheDriversPQ2Ex{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    



postQuote2IsResident(trueorfalse){

    cy.log(`Setting IsResident to: ${trueorfalse}`)
    if (trueorfalse==true) {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isresidenttrue, { timeout: 10000 }).click()
    } else{
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isresidentfalse, { timeout: 10000 }).click()
    } 
}

postQuote2IsMainDriver(trueorfalse){

    if (trueorfalse==true) {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_ismaindrivertrue).click()
    } else{
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_ismaindriverfalse).click()
    } 
}

postQuote2IsNotOtherCar(trueorfalse){

    if (trueorfalse==true) {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnotothercartrue).click()
    } else{
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnotothercarfalse).click()
    } 
}

postQuote2IsNotOtherCar(trueorfalse){

    if (trueorfalse==true) {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnotothercartrue).click()
    } else{
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnotothercarfalse).click()
    } 
}

postQuote2IsNotOtherIns(trueorfalse){

    if (trueorfalse==true) {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnototherinstrue).click()
    } else{
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnototherinsfalse).click()
    } 
}

postQuote2IsNoConviction(trueorfalse){

    if (trueorfalse==true) {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnoconvtrue).click()
    } else{
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnoconvfalse).click()
    } 
}

postQuote2IsNoDisqualification(trueorfalse){

    if (trueorfalse==true) {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnodisqualtrue).click()
    } else{
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnodisqualfalse).click()
    } 
}

postQuote2IsNoRefusal(trueorfalse){

    if (trueorfalse==true) {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnorefusaltrue).click()
    } else{
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnorefusalfalse).click()
    } 
}

postQuote2IsNoIncrease(trueorfalse){

    if (trueorfalse==true) {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnoincreasetrue).click()
    } else{
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnoincreasefalse).click()
    }
}

postQuote2IsNoMedical(trueorfalse){

    if (trueorfalse==true) {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnomedicaltrue).click()
    } else{
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_isnomedicalfalse).click()
    } 
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

postQuote2DriverNumber(drivnumber){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_drivernum).type(drivnumber)
    //cy.wait(2000)

}

postQuote2DriverNumber1(drivnumber1){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_drivernum1).type(drivnumber1)

}

postQuote2DriverNumber2(drivnumber2){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.aboutthedrivers_drivernum2).type(drivnumber2)

}


}