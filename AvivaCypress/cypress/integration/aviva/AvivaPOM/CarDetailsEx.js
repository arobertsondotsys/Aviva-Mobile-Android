export class CarDetailsEx{

    LoginElementLocators = require('./Page Elements/POMElements.json')

regKnown(trueorfalse){

    if (trueorfalse==true || trueorfalse=="True") {
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carreg_yes).click()
    } else{
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carreg_no).click()
    } 
}

carRegKnown(isKnown, carreg, make, model, fuelType, year, transmission) {
    cy.wait(1000)
    if (isKnown === true || isKnown === "True") {
        // Car registration is known, use CarReg input
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carreg_input).clear().type(carreg)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.findcar_btn).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.confirmcar_btn).click()
    } else {
        // Car registration is not known, fill out details
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.manual_make).select(make)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.manual_model).select(model)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.manual_fuel).select(fuelType)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.manual_year).select(year)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.manual_gears).select(transmission)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.manual_vehicle).select(1)
    }
}


carRegInput(carreg){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carreg_input).type(carreg)

}

carValueInput(carvalue){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.carvalue_input).select(carvalue)
    
}

carModified(trueorfalse){
    
    if (trueorfalse==true) {
        cy.get('#IsModified-True > .a-radio > .a-radio__label').click()
    } else{
        cy.get('#IsModified-False > .a-radio > .a-radio__label').click()
    }  

}

carModifiedType(carModType) {
    if (carModType) {
        // Open the multi-select dropdown
        cy.get('.m-multiselect-toggle').click();
        cy.wait(500)
        carModType.split(',').map(type => type.trim()).forEach(type => {
            cy.get('[id^="m-multiselect"]').contains(type).click({ force: true });
        });

        // Optionally close the dropdown
        cy.get('body').click(0,0);
    }
}


}