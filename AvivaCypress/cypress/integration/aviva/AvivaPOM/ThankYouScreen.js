export class ThankYouScreen{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')


thankyouHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.thankyou_heading).contains(this.UserData.HeadingData.Thankyou_Heading)
    return

}

retreivePolicyNumber(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, policyNumber: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('policyNumber')
    })

    cy.get('@policyNumber').then((policyNumber) => {
    cy.log(`Extracted policy number: ${policyNumber}`)
    })
        
}

retreiveParagonPolicyNumber1(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber1: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber1')
    })

    cy.get('@paragonPolicyNumber1').then((paragonPolicyNumber1) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber1}`)
    })
        
}

retreiveParagonPolicyNumber2(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber2: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber2')
    })

    cy.get('@paragonPolicyNumber2').then((paragonPolicyNumber2) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber2}`)
    })
        
}

retreiveParagonPolicyNumber3(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber3: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber3')
    })

    cy.get('@paragonPolicyNumber3').then((paragonPolicyNumber3) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber3}`)
    })
        
}

}