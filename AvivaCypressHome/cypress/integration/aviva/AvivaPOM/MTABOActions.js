export class MTABOActions{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')


permMTAContinue(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.permmta_continue).click({force:true})
        
}

adjustmentType(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_type).select(4, {force: true})
        
}

adjustmentTypeCoverDetails(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_type).select(2, {force: true})
        
}

adjustmentContinue(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_continue).click({force: true})
        
}

addSpecifiedItemBTN(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.addspecifieditem_btn).click({force: true})
        
}

addSpecifiedItemDescription(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.addspecifieditem_description).type('Wedding Ring', {force: true})
        
}

addSpecifiedItemType(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.addspecifieditem_type).select(1, {force: true})
        
}

addSpecifiedItemValue(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.addspecifieditem_value).type('5000', {force: true})
        
}

addSpecifiedItemAddItem(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.addspecifieditem_additem).click({force: true})
        
}

adjustmentBuyNowBTN(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_buynow).click({force: true})
        
}

adjustmentBuyContinue(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_buycontinue).click({force: true})
        
}

adjustmentContinueToPayment(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_continuetopayment).click({force: true})
        
}

paymentTypeAgentCard(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agent).select(3)

}

paymentTypeAgentPayNow(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.paymenttype_agentcardpaycontinue).click()

}

adjustmentReceiptAssert(){

    cy.getAndWait(this.LoginElementLocators.PermMTAPageLocators.adjustment_receiptassert).contains('Valuations/Receipt for Ring')

}

}