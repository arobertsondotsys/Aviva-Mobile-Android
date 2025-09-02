export class TravellerDetails{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')

travellerDetailsTitle(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_title).contains(this.UserData.HeadingData.TravellerDetails_Heading)

}

travellerDetailsNoOfAdults1(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_adults1).click()

}

travellerDetailsNoOfAdults2(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_adults2).click()

}

travellerDetailsProposerDOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_proposerdob).type(this.UserData.InputData.DOB1)

}

travellerDetailsAdult2DOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_adult2dob).type(this.UserData.InputData.DOB2)

}

travellerDetailsPMINo(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_pmino).click()

}

travellerDetailsPMIYes(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_pmiyes).click()

}

travellerDetailsAdult2PMINo(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_adult2pmino).click()

}

travellerDetailsAdult2PMIYes(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_adult2pmiyes).click()

}

travellerDetailsNoOfChildren(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_noofchildren).select(5)

}

travellerDetailsChild1DOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_child1dob).type(this.UserData.InputData.ChildDOB1)

}

travellerDetailsChild2DOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_child2dob).type(this.UserData.InputData.ChildDOB2)

}

travellerDetailsChild3DOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_child3dob).type(this.UserData.InputData.ChildDOB3)

}

travellerDetailsChild4DOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_child4dob).type(this.UserData.InputData.ChildDOB4)

}

travellerDetailsChild5DOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_child5dob).type(this.UserData.InputData.ChildDOB5)

}

travellerDetailsChild6DOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_child6dob).type(this.UserData.InputData.ChildDOB6)

}

travellerDetailsChild7DOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_child7dob).type(this.UserData.InputData.ChildDOB7)

}

travellerDetailsChild8DOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_child8dob).type(this.UserData.InputData.ChildDOB8)

}

travellerDetailsChild9DOB(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_child9dob).type(this.UserData.InputData.ChildDOB9)

}


travellerDetailsChild1Education(isYes){
   
     const selector = isYes
    ? this.LoginElementLocators.QuotePageLocators.travellerdetails_child1educationno
    : this.LoginElementLocators.QuotePageLocators.travellerdetails_child1educationyes

    cy.getAndWait(selector).click()

}

travellerDetailsChild2Education(isYes){

     const selector = isYes
    ? this.LoginElementLocators.QuotePageLocators.travellerdetails_child2educationno
    : this.LoginElementLocators.QuotePageLocators.travellerdetails_child2educationyes

    cy.getAndWait(selector).click()

}

travellerDetailsChild3Education(isYes){

     const selector = isYes
    ? this.LoginElementLocators.QuotePageLocators.travellerdetails_child3educationno
    : this.LoginElementLocators.QuotePageLocators.travellerdetails_child3educationyes

    cy.getAndWait(selector).click()

}

travellerDetailsChild4Education(isYes){
    
     const selector = isYes
    ? this.LoginElementLocators.QuotePageLocators.travellerdetails_child4educationno
    : this.LoginElementLocators.QuotePageLocators.travellerdetails_child4educationyes

    cy.getAndWait(selector).click()

}

travellerDetailsChild5Education(isYes){

     const selector = isYes
    ? this.LoginElementLocators.QuotePageLocators.travellerdetails_child5educationno
    : this.LoginElementLocators.QuotePageLocators.travellerdetails_child5educationyes

    cy.getAndWait(selector).click()

}

travellerDetailsChild6Education(isYes){

     const selector = isYes
    ? this.LoginElementLocators.QuotePageLocators.travellerdetails_child6educationno
    : this.LoginElementLocators.QuotePageLocators.travellerdetails_child6educationyes

    cy.getAndWait(selector).click()

}

travellerDetailsChild7Education(isYes){

     const selector = isYes
    ? this.LoginElementLocators.QuotePageLocators.travellerdetails_child7educationno
    : this.LoginElementLocators.QuotePageLocators.travellerdetails_child7educationyes

    cy.getAndWait(selector).click()

}

travellerDetailsContinue(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.travellerdetails_continue).click()

}



}