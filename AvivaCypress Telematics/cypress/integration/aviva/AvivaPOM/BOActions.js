export class BOActions{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

noEmailPolicySearch(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('#ctl00_ContentPlaceHolder1_SearchText')
        .type(telematicsPolicyNumber)
        cy.getAndWait('#ctl00_ContentPlaceHolder1_Search').click()
        })
            
}

searchButton(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.searchBtn_element).click()

}

policySelectButton(){

    cy.getAndWait(this.LoginElementLocators.LoginPageLocators.policyslctbtn_element).click()

}



cookiesAccept(){

    // //7HOTFIX ONLY
    // cy.getAndWait('body').then(($body) => {
    //     if ($body.find('#onetrust-accept-btn-handler').length > 0) {
    //         cy.getAndWait('#onetrust-accept-btn-handler', {timeout: 3000}).click()
    //     } else {
    //         cy.log('Element not found')
    //     }
    // })

    cy.wait(2000)
    cy.get('body').then($body => {
        // Check if the cookie banner title is visible
        if ($body.find('#onetrust-policy-title:visible').length) {
            cy.get('#onetrust-accept-btn-handler', { timeout: 10000 })
              .should('be.visible')
              .click({ force: true });
        }
        // If not visible, do nothing and continue
    });
}

removeAttr(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quote_linkbtn).invoke("removeAttr", "target").click()

}

agentQuote(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.agent_quote).select(1)
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

livePoliciesBTN(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.livepolicy_btn).click()
    cy.wait(1000)
        
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

selectActionDocuments(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.selectaction_documents).last().click().contains('Documents').invoke("removeAttr", "target").click()
        
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

agePolicyTool(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.age_policytool).last().click({force: true}).contains('Age Policy').invoke("removeAttr", "target").click({force: true})
        
}

agePolicy(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).invoke('val').then(dayString => {
        const day = parseInt(dayString)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).select(day+1)
      })

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_year).select(this.UserData.InputData.BackdateYear)

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_confirm).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_message).contains(this.UserData.InputData.BackdateMessage)
        
}

agePolicyPlus2(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).invoke('val').then(dayString => {
        const day = parseInt(dayString)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).select(day+2)
      })

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_year).select(this.UserData.InputData.BackdateYear)

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_confirm).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_message).contains(this.UserData.InputData.BackdateMessage)
        
}

selectActionRenewalWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Renewal']")
         })
        
}

selectActionMakeADJWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
         })
        
}

selectActionCancelWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Cancel Policy']")
         })
        
}

selectActionAmendNCDWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.='  Amend NCD']")
         })
        
}

selectActionAmendRNLNCDWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.='  Amend Renewal NCD']")
         })
        
}

selectActionDiaryWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
         })
        
}

selectActionDiaryWithParagonPolicyNumber1(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber1 = data.paragonPolicyNumber1
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber1)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber1+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
         })
        
}

selectActionDiaryWithParagonPolicyNumber2(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber2 = data.paragonPolicyNumber2
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber2)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber2+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
         })
        
}

selectActionDiaryWithParagonPolicyNumber3(){

    cy.readFile('policy.json').then((data) => {
        const paragonPolicyNumber3 = data.paragonPolicyNumber3
        cy.getAndWait('.panel-title')
        .contains(paragonPolicyNumber3)
        cy.xpath("//span[normalize-space()='"+paragonPolicyNumber3+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Diary']")
         })
        
}

selectActionAccountsWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Accounts']")
         })
        
}

selectActionRefundsWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Refunds']")
         })
        
}

selectActionDocumentsWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
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

selectActionDPAWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' DPA / Preferences']")
         })
        
}

selectActionPolicyOwnershipWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Policy Owenership']")
         })
        
}

selectActionScrutinyWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Scrutiny']")
         })
        
}

ntuWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
            .contains(telematicsPolicyNumber)
            .click()
        cy.stopWindow("//span[normalize-space()='"+telematicsPolicyNumber+"']/../../../..//span[contains(text(),'NTU')]")
        })
        
}

policyToolsAgePolicyWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(telematicsPolicyNumber)
        cy.xpath("//span[normalize-space()='"+telematicsPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Policy Tools']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Age Policy']")
        
         })
        
}





generateRenewal(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewal).last().click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewalcheck).should('contain', 'RNL')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewalcheck1).should('not.contain', '€ 0')
        
}

searchRenewal(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewaldashboard).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewalpolicynumber).type(telematicsPolicyNumber)

    })   
}

inviteRenewal(){

    cy.readFile('policy.json').then((data) => {
        const telematicsPolicyNumber = data.telematicsPolicyNumber
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.select_renewals).click({force: true})
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.input_policynumber).type(telematicsPolicyNumber)
    })

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.renewed_scheme).select(0)
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

checkRenewalDocsNoEmail(){

    cy.wait(120000)
    cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Policy Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).should('not.contain','Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.printqueue_view).click()
    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Certificate of no claims')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Statement Of Fact')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Renewal Cover Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Schedule')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Certificate')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).contains('Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocspost).should('not.contain','Email')

}

checkRenewalDocs(){

    cy.wait(120000)
    cy.reload()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Letter')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Renewal Cover Email')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Home Renewal Receipt')
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.check_renewaldocs).contains('Policy Schedule')

}


}