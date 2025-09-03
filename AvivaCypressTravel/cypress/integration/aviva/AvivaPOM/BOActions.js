export class BOActions{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

noEmailPolicySearch(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('#ctl00_ContentPlaceHolder1_SearchText')
        .type(policyNumber)
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

    cy.wait(1000)
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

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.agent_quote).select(3)
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

    //cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.livepolicy_btn).click()
    //cy.wait(1000)
        
}

unlockBTN(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.unlock_btn).click()

}

lockQuoteBTN(){

    cy.getAndWait(this.LoginElementLocators.BOPageLocators.lock_quote).should('be.visible')

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

// agePolicyPlus2(){

//     cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).invoke('val').then(dayString => {
//         const day = parseInt(dayString)
//         cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).select(day+2)
//       })

//     cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_year).select(this.UserData.InputData.BackdateYear)

//     cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_confirm).click()
//     cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_message).contains(this.UserData.InputData.BackdateMessage)
        
// }

agePolicyPlus2() {
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).invoke('val').then(dayString => {
        const day = parseInt(dayString);
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_month).invoke('val').then(monthString => {
            let month = parseInt(monthString); // 1-based (1 = January)
            let newDay = day + 2;
            let newMonth = month;

            // Always set year to current year minus 1
            const currentYear = new Date().getFullYear();
            let newYear = (currentYear - 1).toString();

            // Get the number of days in the current month of the newYear
            const daysInMonth = new Date(newYear, month, 0).getDate();

            if (newDay > daysInMonth) {
                newDay = newDay - daysInMonth;
                newMonth += 1;
                // If month > 12, reset month to 1 (January), but DO NOT increment year
                if (newMonth > 12) {
                    newMonth = 1;
                }
            }

            // Pad month to two digits if needed
            let paddedMonth = newMonth.toString().padStart(2, '0');

            cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_day).select(newDay.toString());
            cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_month).select(paddedMonth);
            cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_year).select(newYear);

            cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_confirm).click();
            cy.getAndWait(this.LoginElementLocators.BOPageLocators.backdate_message).contains(this.UserData.InputData.BackdateMessage);
        });
    });
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

selectActionMakeADJWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Make Adjustment']")
         })
        
}

selectActionCancelWithTravelPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const travelPolicyNumber = data.travelPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(travelPolicyNumber)
        cy.xpath("//span[normalize-space()='"+travelPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Cancel Policy']")
         })
        
}

selectActionAmendNCDWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.='  Amend NCD']")
         })
        
}

selectActionAmendRNLNCDWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.='  Amend Renewal NCD']")
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

selectActionDocumentsWithTravelPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const travelPolicyNumber = data.travelPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(travelPolicyNumber)
        cy.xpath("//span[normalize-space()='"+travelPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
        cy.stopWindow("//ul[@class='dropdown-menu show']//a[.=' Documents']")
         })
        
}

selectActionDocumentsWithWelcomePackPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const welcomePackPolicyNumber = data.welcomePackPolicyNumber
        cy.getAndWait('.panel-title')
        .contains(welcomePackPolicyNumber)
        cy.xpath("//span[normalize-space()='"+welcomePackPolicyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
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
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Select Action']").click()
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

ntuWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
            .contains(policyNumber)
            .click()
        cy.stopWindow("//span[normalize-space()='"+policyNumber+"']/../../../..//span[contains(text(),'NTU')]")
        })
        
}

policyToolsAgePolicyWithPolicyNumber(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait('.panel-title')
        .contains(policyNumber)
        cy.xpath("//span[normalize-space()='"+policyNumber+"']/../..//button[@type='button'][normalize-space()='Policy Tools']").click()
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
        const policyNumber = data.policyNumber
        
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewaldashboard).click()
    cy.getAndWait(this.LoginElementLocators.BOPageLocators.generate_renewalpolicynumber).type(policyNumber)

    })   
}

inviteRenewal(){

    cy.readFile('policy.json').then((data) => {
        const policyNumber = data.policyNumber
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.select_renewals).click({force: true})
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.input_policynumber).type(policyNumber)
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
    //cy.wait(1000)
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
    //cy.wait(1000)
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

tickNCBAsReceived(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('No Claims Bonus from previous insurer')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsReceived"]').check({ force: true })
         })
        } else {
            throw new Error('No matching row found for No Claims Bonus from previous insurer')
        }
    })
}

tickDrivingExpAsRequired(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Driving experience')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsRequired"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Driving experience')
        }
    })
}

tickProofOfIgnitionAsRequired(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Proof of Ignition')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsRequired"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Proof of Ignition')
        }
    })
}

tickEngineersReportAsRequired(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Engineers report')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsRequired"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Engineers report')
        }
    })
}

tickMedReportFormAsRequired(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Medical report form')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsRequired"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Medical report form')
        }
    })
}

tickNCTAsRequired(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('NCT / MOT')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsRequired"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for NCT / MOT')
        }
    })
}

tickVehicleRegDocsAsRequired(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Vehicle registration documents')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsRequired"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Vehicle registration documents')
        }
    })
}

tickGapInCoverAsRequired(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Gap in cover reason')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsRequired"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Gap in cover reason')
        }
    })
}

tickOldCertAsRequired(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Old certificate')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsRequired"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Old certificate')
        }
    })
}

tickProofOfDriverMembAsRequired(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Proof of advanced driver membership')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsRequired"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Proof of advanced driver membership')
        }
    })
}

tickDrivingExpAsReceived(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Driving experience')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsReceived"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Driving experience')
        }
    })
}

tickProofOfIgnitionAsReceived(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Proof of Ignition')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsReceived"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Proof of Ignition')
        }
    })
}

tickEngineersReportAsReceived(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Engineers report')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsReceived"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Engineers report')
        }
    })
}

tickMedReportFormAsReceived(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Medical report form')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsReceived"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Medical report form')
        }
    })
}

tickNCTAsReceived(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('NCT / MOT')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsReceived"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for NCT / MOT')
        }
    })
}

tickVehicleRegDocsAsReceived(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Vehicle registration documents')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsReceived"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Vehicle registration documents')
        }
    })
}

tickGapInCoverAsReceived(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Gap in cover reason')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsReceived"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Gap in cover reason')
        }
    })
}

tickOldCertAsReceived(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Old certificate')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsReceived"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Old certificate')
        }
    })
}

tickProofOfDriverMembAsReceived(){

cy.getAndWait('tr').then($rows => {
        // $rows is a jQuery collection of <tr> elements
        const match = Cypress._.find($rows.toArray(), el => {
            const $el = Cypress.$(el)
            return $el.text().includes('Proof of advanced driver membership')
        })
        if (match) {
            cy.wrap(match).within(() => {
                cy.get('input[type="checkbox"][id*="_IsReceived"]').check({ force: true })
                cy.wait(1500)
         })
        } else {
            throw new Error('No matching row found for Proof of advanced driver membership')
        }
    })
}


}