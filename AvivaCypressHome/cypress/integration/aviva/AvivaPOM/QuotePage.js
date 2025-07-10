export class QuotePage{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')

    quotePageHeading(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_heading).contains(this.UserData.HeadingData.QuotePage_Heading)

    }

    quotePageStaffOptions(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_staffoptions).click()

    }

    quotePageStaffDiscounts(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_discounts).select(2)

    }
    
    quotePageStaffRecalculate(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_recalculate).click()

    }

    quotePageBuyNowBtn(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_buynowbtn).click()

    }

    quotePageMonthlyBtn(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_paymonthly).click()

    }

    quotePageFullBtnRNLswap(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_payfullswap).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_payfullswapmessage).contains('change your payment method to paying in full')
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_payfullswapconfirm).click()

    }

    quotePageMonthlyBtnRNLswap(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_paymonthlyswap).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_paymonthlyswapmessage).contains('change your payment method to paying in installments')
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_paymonthlyswapconfirm).click()

    }

    quotePageAccidentalDamageViewOptions(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_accidentaldamage).click()

    }

    quotePageAccidentalDamageAddCover(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addaccidentaldamage).click()
        cy.wait(3000)

    }

    quotePageOptionalCoverViewOptions(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_optionalcover).click()

    }

    quotePageOptionalCoverAddUnpecifiedCover(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_unspecifieditems).select(1)
        cy.wait(3000)

    }

    quotePageOptionalCoverAddSpecifiedItem(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_specifieditem).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.specifieditem_itemdescription).type(this.UserData.InputData.SpecifiedItemDescription)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.specifieditem_itemtype).select(1)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.specifieditem_itemvalue).type(this.UserData.InputData.SpecifiedItemValue)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.specifieditem_additem).click()
        //cy.wait(4000)

    }

    quotePageRemoveSpecifiedItem(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.specifieditem_edit).click()
        cy.contains('Remove Item').click()
        cy.wait(4000)

    }

    quotePageSpecifiedItemAdded(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_specifieditemadded).contains('Added')
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_specifieditemedit).contains('Edit')

    }

    quotePageManageYourExcessViewOptions(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_manageexcess).click()

    }

    quotePageManageYourExcess275(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_manageexcess275).click()
        //cy.wait(3000)

    }
    
    quotePageManageYourExcess500(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_manageexcess500).click()
        //cy.wait(3000)

    }

    quotePageManageYourExcess750(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_manageexcess750).click()
        //cy.wait(3000)

    }

    quotePageManageYourExcess1000(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_manageexcess1000).click()
        //cy.wait(3000)

    }

    quotePageGardenCoverViewOptions(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_gardencover).click()

    }

    quotePageGardenCover1000(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_gardencoverddl).select(1)
        //cy.wait(3000)
        
    }

    quotePageGardenCover2000(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_gardencoverddl).select(2)
        //cy.wait(3000)

    }

    quotePageGardenCover3000(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_gardencoverddl).select(3)
        //cy.wait(3000)

    }

    quotePageCaravanCoverViewOptions(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_caravancover).click()
   
    }

    quotePageCaravanCoverAddWithoutPersonal(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addcaravancover).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_make).type(this.UserData.InputData.CaravanMake)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_serialno).type(this.UserData.InputData.CaravanSerial)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_year).type(this.UserData.InputData.CaravanYear)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_suminsured).type(this.UserData.InputData.CaravanValue)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_personalbelongingsno).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_addcoverbtn).click()
        ////cy.wait(2000)

    }

    quotePageCaravanCoverAddWithPersonal(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.quotepage_addcaravancover).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_make).type(this.UserData.InputData.CaravanMake)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_serialno).type(this.UserData.InputData.CaravanSerial)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_year).type(this.UserData.InputData.CaravanYear)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_suminsured).type(this.UserData.InputData.CaravanValue)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_personalbelongingsyes).click()
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_personalbelongingsvalue).type(this.UserData.InputData.PBValue)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.caravancover_addcoverbtn).click()
        ////cy.wait(2000)

    }

    selectStaffDiscount(){

        cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_discountheading).click()
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_discountselect).select(1)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_discountrecalc).click()
        cy.wait(3000)
        cy.getAndWait(this.LoginElementLocators.BOPageLocators.staff_nodiscountheading).should('contain', 'Call centre customer - No online discount')
    
    }


}