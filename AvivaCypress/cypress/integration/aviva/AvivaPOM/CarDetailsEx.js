export class CarDetailsEx{

    LoginElementLocators = require('./Page Elements/POMElements.json')


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