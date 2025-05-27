export class BOActions{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')


cookiesAccept(){

    //7HOTFIX ONLY
    // cy.getAndWait('body').then(($body) => {
    //     if ($body.find('#onetrust-accept-btn-handler').length > 0) {
    //         cy.getAndWait('#onetrust-accept-btn-handler', {timeout: 3000}).click()
    //     } else {
    //         cy.log('Element not found')
    //     }
    // })

    cy.getAndWait('.ot-sdk-container > .ot-sdk-row').then(($body) => {
        if ($body.find('#onetrust-accept-btn-handler').length > 0) {
            cy.getAndWait('#onetrust-accept-btn-handler').click()
        } else {
            cy.log('Element not found')
        }
    })

}

searchButton(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.searchBtn_element).click()
    
}

policySelectButton(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.policyslctbtn_element).click()
    

}

removeAttr(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quote_linkbtn).invoke("removeAttr", "target").click()

}

agentQuote(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.agent_quote).select(2)
    cy.window().then((win) => {
        const orig = win.open
      
        win.open = function (url, target, features) {
          return orig.call(this, url, '_self', features)
        }
      })

}

home(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.home_page).click()

}

unlockBTN(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.unlock_btn).click()

}

notes(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.notes).should('be.visible')
    
}

createNewQuoteBTN(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.createnewquote_btn).click()
        
}

livePoliciesBTN(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.livepolicy_btn).click()
    cy.wait(1000)
        
}

homePolicyTab(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.homepolicy_tab).click()
    return
        
}

selectActionMakeAdjustment(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.selectaction_makeadjustment).last().click().contains('Make Adjustment').invoke("removeAttr", "target").click()
        
}

selectActionCancelPolicy(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.selectaction_cancelpolicy).last().click().contains('Cancel Policy').invoke("removeAttr", "target").click()
        
}

selectActionDiary(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.selectaction_diary).last().click().contains('Diary').invoke("removeAttr", "target").click()
        
}

selectActionRenewal(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.selectaction_renewal).last().click().contains('Renewal').invoke("removeAttr", "target").click()
        
}

selectActionDocuments(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.selectaction_documents).last().click().contains('Documents').invoke("removeAttr", "target").click()
        
}

returnToCustFileFromDocuments(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.return_customerfile).click()
        
}


noEmailPolicySearch(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('#ctl00_ContentPlaceHolder1_SearchText')
        .type(policyNumber)
        cy.getAndWait('#ctl00_ContentPlaceHolder1_Search').click()
         })
        
}

selectActionRenewalWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Renewal']")
         })
        
}

selectActionRenewalWithParagonPolicyNumber9(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber9 = data.paragonPolicyNumber9
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber9)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber9+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Renewal']")
         })
        
}

selectActionRenewalWithParagonPolicyNumber10(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber10 = data.paragonPolicyNumber10
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber10)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber10+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Renewal']")
         })
        
}

selectActionRenewalWithParagonPolicyNumber11(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber11 = data.paragonPolicyNumber11
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber11)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber11+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Renewal']")
         })
        
}

selectActionRenewalWithParagonPolicyNumber12(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber12 = data.paragonPolicyNumber12
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber12)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber12+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Renewal']")
         })
        
}

selectActionMakeADJWithPolicyNumberForAgentMTA(){

    cy.readFile('policy.json').then((data) => {
        const PolicyNumberForAgentMTA = data.PolicyNumberForAgentMTA
        cy.getAndWait('.panel-title')
        .contains(PolicyNumberForAgentMTA)
        cy.xpath("//span[normalize-space()='"+PolicyNumberForAgentMTA+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
         })
        
}


selectActionMakeADJWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
         })
        
}

selectActionMakeADJWithParagonPolicyNumber5(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber5 = data.paragonPolicyNumber5
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber5)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber5+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
         })
        
}


selectActionMakeADJWithParagonPolicyNumber6(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber6 = data.paragonPolicyNumber6
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber6)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber6+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
         })
        
}

selectActionMakeADJWithParagonPolicyNumber7(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber7 = data.paragonPolicyNumber7
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber7)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber7+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
         })
        
}

selectActionMakeADJWithParagonPolicyNumber8(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber8 = data.paragonPolicyNumber8
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber8)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber8+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
         })
        
}

selectActionMakeADJWithParagonPolicyNumber11(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber11 = data.paragonPolicyNumber11
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber11)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber11+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
         })
        
}

selectActionMakeADJWithParagonPolicyNumber12(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber12 = data.paragonPolicyNumber12
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber12)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber12+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
         })
        
}

selectActionCancelWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Cancel Policy']")
         })
        
}

selectActionDiaryWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
         })
        
}

selectActionDiaryWithParagonPolicyNumber4(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber4 = data.paragonPolicyNumber4
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber4)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber4+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
         })
        
}

selectActionDiaryWithParagonPolicyNumber14(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber14 = data.paragonPolicyNumber14
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber14)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber14+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
         })
        
}

selectActionAccountsWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Accounts']")
         })
        
}

selectActionRefundsWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Refunds']")
         })
        
}

selectActionDocumentsWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithPolicyNumberForAgentMTA(){

    cy.readFile('policy.json').then((data) => {
        const PolicyNumberForAgentMTA = data.PolicyNumberForAgentMTA
        cy.getAndWait('.panel-title')
        .contains(PolicyNumberForAgentMTA)
        cy.xpath("//span[normalize-space()='"+PolicyNumberForAgentMTA+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber1(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber1 = data.paragonPolicyNumber1
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber1)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber1+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber2(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber2 = data.paragonPolicyNumber2
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber2)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber2+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber3(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber3 = data.paragonPolicyNumber3
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber3)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber3+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber4(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber4 = data.paragonPolicyNumber4
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber4)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber4+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber5(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber5 = data.paragonPolicyNumber5
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber5)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber5+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber6(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber6 = data.paragonPolicyNumber6
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber6)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber6+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber7(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber7 = data.paragonPolicyNumber7
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber7)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber7+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber8(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber8 = data.paragonPolicyNumber8
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber8)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber8+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber9(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber9 = data.paragonPolicyNumber9
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber9)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber9+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber10(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber10 = data.paragonPolicyNumber10
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber10)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber10+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber11(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber11 = data.paragonPolicyNumber11
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber11)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber11+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber12(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber12 = data.paragonPolicyNumber12
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber12)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber12+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber13(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber13 = data.paragonPolicyNumber13
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber13)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber13+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithParagonPolicyNumber14(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber14 = data.paragonPolicyNumber14
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber14)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber14+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDPAWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click({force:true})
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' DPA / Preferences']")
         })
        
}

selectActionPolicyOwnershipWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Policy Owenership']")
         })
        
}

selectActionScrutinyWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Scrutiny']")
         })
        
}



policyToolsAgePolicyWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Policy Tools']").click({force:true})
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Age Policy']")
        
         })
        
}

policyToolsAgePolicyWithParagonPolicyNumber9(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber9 = data.paragonPolicyNumber9
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber9)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber9+"']/../..//button[@type='button'][normalize-space()='Policy Tools']").click({force:true})
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Age Policy']")
        
         })
        
}

policyToolsAgePolicyWithParagonPolicyNumber10(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber10 = data.paragonPolicyNumber10
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber10)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber10+"']/../..//button[@type='button'][normalize-space()='Policy Tools']").click({force:true})
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Age Policy']")
        
         })
        
}

policyToolsAgePolicyWithParagonPolicyNumber11(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber11 = data.paragonPolicyNumber11
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber11)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber11+"']/../..//button[@type='button'][normalize-space()='Policy Tools']").click({force:true})
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Age Policy']")
        
         })
        
}

policyToolsAgePolicyWithParagonPolicyNumber12(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber12 = data.paragonPolicyNumber12
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber12)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber12+"']/../..//button[@type='button'][normalize-space()='Policy Tools']").click({force:true})
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Age Policy']")
        
         })
        
}

policyDocsSOF(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.policydocs_check).contains('Statement Of Fact')
        
}

policyDocsSchedule(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.policydocs_check).contains('Policy Schedule')
        
}

agePolicyTool(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.age_policytool).last().click({force: true}).contains('Age Policy').invoke("removeAttr", "target").click({force: true})
        
}

agePolicy(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).invoke('val').then(dayString => {
        const day = parseInt(dayString)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).select(day+1)
      })
    // cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).select(9)
    // cy.getAndWait('#ctl00_ContentPlaceHolder1_BackDateMonth').select(3)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_year).select(this.UserData.InputData.BackdateYear)

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_confirm).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_message).contains(this.UserData.InputData.BackdateMessage)
        
}

optOutRollover(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.dpa_edit).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.optout_rollover).select(1)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.save_rollover).click()
        
}

generateRenewal(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewal).last().click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewalcheck).should('contain', 'RNL')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewalcheck1).should('not.contain', '€ 0')
        
}

inviteRenewal(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.select_renewals).click({force: true})
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.input_policynumber).type(policyNumber)
    })

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.renewed_scheme).select(1)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.search_policynumber).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.tick_renewal).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.batchprint_renewal).click()
        
}

inviteRenewalParagon9(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber9 = data.paragonPolicyNumber9
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.select_renewals).click({force: true})
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.input_policynumber).type(paragonPolicyNumber9)
    })

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.renewed_scheme).select(1)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.search_policynumber).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.tick_renewal).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.batchprint_renewal).click()
        
}

inviteRenewalParagon10(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber10 = data.paragonPolicyNumber10
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.select_renewals).click({force: true})
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.input_policynumber).type(paragonPolicyNumber10)
    })

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.renewed_scheme).select(1)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.search_policynumber).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.tick_renewal).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.batchprint_renewal).click()
        
}

inviteRenewalParagon11(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber11 = data.paragonPolicyNumber11
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.select_renewals).click({force: true})
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.input_policynumber).type(paragonPolicyNumber11)
    })

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.renewed_scheme).select(1)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.search_policynumber).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.tick_renewal).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.batchprint_renewal).click()
        
}

inviteRenewalParagon12(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber12 = data.paragonPolicyNumber12
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.select_renewals).click({force: true})
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.input_policynumber).type(paragonPolicyNumber12)
    })

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.renewed_scheme).select(1)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.search_policynumber).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.tick_renewal).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.batchprint_renewal).click()
        
}

recallPolicy(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.recall_policy).click()

}

checkRenewalInviteDocs(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Statement Of Fact')

}

checkRenewalInviteDocsNoEmailAutoRollover(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).should('not.contain', 'Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).should('not.contain','Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).should('not.contain','Email')



}

checkRenewalInviteDocsNoEmail(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Invite Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).should('not.contain', 'Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).should('not.contain','Email')



}

checkRenewalDocs(){

    cy.wait(80000)
    cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Confirm Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Policy Schedule')

}

checkRenewalDocsNoEmail(){

    cy.wait(80000)
    cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Policy Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).should('not.contain','Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Cover Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Policy Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).should('not.contain','Email')

}

checkRenewalDocsNoEmailQA(){

    cy.wait(80000)
    cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Policy Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).should('not.contain','Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Confirm Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Policy Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).should('not.contain','Email')

}

checkRenewalDocsAutoRolover(){

    cy.wait(80000)
    cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Confirm Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Policy Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).should('not.contain', 'Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).should('not.contain', 'Receipt')

}

checkRenewalDocsAutoRoloverNoEmail(){

    cy.wait(80000)
    cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Policy Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).should('not.contain', 'Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).should('not.contain','Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Cover Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Policy Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).should('not.contain', 'Receipt')

}

checkRenewalDocsAutoRoloverNoEmailQA(){

    cy.wait(80000)
    cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Policy Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).should('not.contain', 'Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).should('not.contain','Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Confirm Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Policy Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).should('not.contain', 'Receipt')

}

checkRenewalInviteDocsPost(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')

}

checkRenewalConfirmationDocsPost(){

    cy.wait(80000)
    cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Cover Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Confirm Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Policy Schedule')

}

checkNBParagonDocs(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    //cy.wait(80000)
    //cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Welcome Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Policy Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).should('not.contain', 'Receipt')

}

checkAdhocParagonDocs(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    // cy.wait(80000)
    // cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Notice of Interest')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('One Off Letter - ADIL')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('One Off Letter - AIIDAC')
    

}

checkNBParagonDocsWithReceipt(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    //cy.wait(80000)
    //cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Welcome Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_nbdocspost).contains('Policy Schedule')

}

checkMTAParagonDocs(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    //cy.wait(80000)
    //cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_mtadocspost).contains('Home MTA Confirmation Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_mtadocspost).contains('Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_mtadocspost).contains('Policy Schedule')

}

checkRNLInviteParagonDocs(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    //cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Invite Schedule')

}

checkRNLParagonDocs(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    //cy.wait(80000)
    //cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Confirm Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Policy Schedule')

}

checkRNLMTAParagonDocs(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    //cy.wait(80000)
    //cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewalmtadocspost).contains('Home MTA Confirmation Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewalmtadocspost).contains('Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewalmtadocspost).contains('Policy Schedule')

}



diaryAddAdHocLetters(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_entry).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_typeddl).select(2)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_lettertypeddl).select(0)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_saveletter).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_postorprint).select(0)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_printsend).click()
    cy.wait(1000)
    cy.go(-3)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_entry).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_typeddl).select(2)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_lettertypeddl).select(1)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_saveletter).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_postorprint).select(0)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_printsend).click()
    cy.wait(1000)
    cy.go(-3)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_entry).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_typeddl).select(2)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_lettertypeddl).select(2)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_saveletter).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_postorprint).select(0)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_printsend).click()
    cy.wait(1000)
    cy.go(-3)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_entry).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_typeddl).select(2)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_lettertypeddl).select(3)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_saveletter).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_postorprint).select(0)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_printsend).click()
    cy.wait(1000)
    cy.go(-3)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_entry).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_typeddl).select(2)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_lettertypeddl).select(4)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diary_saveletter).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_postorprint).select(0)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.diaryletter_printsend).click()
    cy.wait(1000)
    cy.go(-3)

}









}