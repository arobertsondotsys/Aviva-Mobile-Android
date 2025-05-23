export class PortalActions{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')




portalPolicySelect(){

    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portal_policyselect).click()

}

portalMakeAdjustmentSelect(){

    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portal_makeadjselect).click()

}

portalAdjustmentTypeSelect(){

    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portaladj_adjtypeselect).select(4, {force:true})

}

portalMakeADJWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
    
        cy.getAndWait('.policypanels')
            .contains(policyNumber)
            .closest('.d-flex.flex-column')
            .within(() => {
                cy.contains('Manage Policy').click({force: true})
            })
    })
        
}

portalMakeADJWithPolicyNumberForCustMTA(){

    cy.readFile('policy.json').then((data) => {
        const PolicyNumberForCustMTA = data.PolicyNumberForCustMTA
        cy.getAndWait('.panel-title')
        .contains(PolicyNumberForCustMTA)
        cy.xpath("//span[normalize-space()='"+PolicyNumberForCustMTA+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
         })
        
}

portalMortgageSelect(){

    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portaladj_mortgageselect).select(2)


}

portalMortgageIntLetterTrue(){

    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portaladj_mortgageintlettertrue).click()


}

portalMortgageProvider(){

    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portaladj_mortgageprovider).select(7)


}

portalAdjContinue(){

    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portaladj_adjcontinue).click({force:true})

}

portalManagePolicyWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
    
        cy.getAndWait('.policypanels')
            .contains(policyNumber)
            .closest('.d-flex.flex-column')
            .within(() => {
                cy.contains('Manage Policy').click({force: true})
            })
    })
        
}

portalRenewPolicyCloseModal(){

    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portalrenew_closemodal).click()
    
}

portalRenewThisPolicy(){

    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portalrenew_renewthispolicy).click()
    
}

portalRenewPolicySelect(){

    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portalrenew_policyselect).click()
    
}

portalRenewDocsConfirm(){

    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portalrenew_docsconfirm).click()
    
}

portalRenewMonthlyPaymentSwap(){

    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portalrenew_monthlypaymentswap).click()
    cy.getAndWait(this.LoginElementLocators.PortalPageLocators.portalrenew_monthlypaymentswapconfirm).click({force: true})
    
}

}