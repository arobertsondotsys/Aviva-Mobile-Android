export class YourCover{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')

    yourCoverTitle(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_title).contains(this.UserData.HeadingData.YourCover_Heading)

    }

    buildingAndContentsTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.building_contentstrue).click().click()

    }

    buildingAndContentsFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.building_contentsfalse).click().click()

    }

    homeValue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.home_value).type(this.UserData.InputData.HomeValue)

    }

    contentsValue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.contents_value).type(this.UserData.InputData.ContentsValue)

    }

    isClaimsFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.is_claimsfalse).click()

    }

    isConvictionsFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.is_convictionsfalse).click()

    }

    isRefusedFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.is_refusedfalse).click()

    }

    isSpecialFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.is_specialfalse).click()

    }

    isCancelledFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.is_cancelledfalse).click()

    }

    yourCoverJointOwner(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointowner).click()

    }

    yourCoverJointOwner1(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointownertitle).select(2)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointownerfirstname).type(this.UserData.InputData.JointPropFirstName)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointownersurname).type(this.UserData.InputData.JointPropSurname)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointownerdob).type(this.UserData.InputData.JointPropDOB)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointownerrelation).select(1)
        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_jointownersave).click()

    }

    yourCoverContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourcover_continue).click({force: true})

    }

}