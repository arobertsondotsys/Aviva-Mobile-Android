export class YourProperty{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElementsHome.json')
    UserData = require('../AvivaPOM/Page Elements/POMInputHome.json')



    yourPropertyTitle(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourproperty_title).contains(this.UserData.HeadingData.YourProperty_Heading)

    }

    propertyType(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.property_type).select(1, {force:true})

    }

    yearBuilt(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.year_built).type(this.UserData.InputData.YearBuilt, {force:true})

    }

    listedBuildingFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.listed_buildingfalse).click({force:true})

    }

    flatRoofFlase(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.flat_rooffalse).click({force:true})

    }

    standardMaterialsTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.standard_materialstrue).click({force:true})

    }

    burglarAlarm(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.burglar_alarm).select(2, {force:true})

    }

    smokeAlarmTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.smoke_alarmtrue).click({force:true})

    }

    additSecStandsTitle(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.addit_secstandards_title).contains(this.UserData.HeadingData.AdditSecStands, {force:true})

    }

    securityLocks(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.security_lockstrue).click({force:true})

    }

    noOfBedrooms(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.number_bedrooms).select(5, {force:true})

    }

    noOfBathrooms(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.number_bathrooms).select(4, {force:true})

    }

    heatingType(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.heating_type).select(4, {force:true})

    }

    goodStateOfRepairTrue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.good_repairstatetrue).click({force:true})

    }

    floodSubsidenceFalse(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.flood_subsidencefalse).click({force:true})

    }
    
    yourPropertyContinue(){

        cy.getAndWait(this.LoginElementLocators.QuotePageLocators.yourproperty_continue).click({force:true})

    }


}