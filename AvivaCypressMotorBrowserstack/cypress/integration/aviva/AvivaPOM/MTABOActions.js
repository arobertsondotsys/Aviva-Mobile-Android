export class MTABOActions{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')


selectActionMakeADJ(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.selectaction_makeadj).last().click().contains('Make Adjustment').invoke("removeAttr", "target").click()
        
}

permADJAdditionalDriver(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.perm_additonaldriver).select('Additional drivers',{force: true}).should('have.value', 'AddDriver')
    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.perm_adjbtn).click({force: true})
        
}

permADJRemoveAdditionalDriver(){

    cy.contains('Remove driver').click({force: true})
    cy.contains('Additional drivers', {force: true})
    cy.contains('Jane Dough', {force: true})
    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.permmta_deletedriverbtn).click({force: true})
        
}

permMTAContinue(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.permmta_continue).click({force:true})
        
}

permMTABuyNow(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.permmta_buynow).click({force:true})
        
}

}