export class BonkersProperty{

    LoginElementLocators = require('./Page Elements/POMElementsHome.json')
    UserData = require('./Page Elements/POMInputHome.json')



bonkersAddressInput(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_addess).type(this.UserData.BonkersData.Bonkers_Address)

}

bonkersAddressSelect(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_addessoption1).click()

}

bonkersAddressGetStarted(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_getstarted).click()

}

bonkersYearBuilt(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_yearbuilt).type(this.UserData.BonkersData.Bonkers_YearBuilt)


}

bonkersBER(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_ber).click()

}

bonkersPropertyType(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_propertytype).select(3)

}

bonkersFlatRoof(isFlatRoof) {
    if (isFlatRoof) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_flatroofyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_flatrrofno).click()
    }
}

bonkersStandardMaterials(isStandardMaterials) {
    if (isStandardMaterials) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_standardmaterialsyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_standardmaterialsno).click()
    }
}

bonkersNoOfBedrooms(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_noofbedrooms).select(3)

}

bonkersNoOfBathrooms(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_noofbathrooms).select(1)

}

bonkersHeatingType(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_heatingtype).select(5)

}

bonkersListedBuilding(isListedBuilding) {
    if (isListedBuilding) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_listedbuildingyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_listedbuildingno).click()
    }
}

bonkersNotAlarmed(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_notalarmed).click()

}

bonkersAlarmed(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_alarmed).click()

}

bonkersMonitoredAlarm(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_monitoredalarm).click()

}

bonkersSmokeAlarmed(isSmokeAlarmed) {
    if (isSmokeAlarmed) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_smokealarmsyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_smokealarmsno).click()
    }
}

bonkersSecurityLocks(isSecurityLocks) {
    if (isSecurityLocks) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_securitylocksyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_securitylocksno).click()
    }
}

bonkersOccupancyType(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_occupancytype).select(1)

}

bonkersPropertyContinue(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_propertycontinue).click()

}

bonkersRebuildCost(){

    cy.wait(1000)
    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_rebuildcost).type(this.UserData.BonkersData.Bonkers_RebuildCost)

}

bonkersUnderConstrution(isUnderConstrution) {
    if (isUnderConstrution) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_underconstructionyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_underconstructionno).click()
    }
}

bonkersGoodStateOfRepair(isGoodStateOfRepair) {
    if (isGoodStateOfRepair) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_goodstateofrepairyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_goodstateofrepairno).click()
    }
}

bonkersLossOrDamage(isLossOrDamage) {
    if (isLossOrDamage) {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_lossordamageyes).click()
    } else {
        cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_lossordamageno).click()
    }
}

bonkersProperty1Continue(){

    cy.getAndWait(this.LoginElementLocators.BonkersHomePageLocators.bonkershome_property1continue).click()
    cy.wait(500)

}



}