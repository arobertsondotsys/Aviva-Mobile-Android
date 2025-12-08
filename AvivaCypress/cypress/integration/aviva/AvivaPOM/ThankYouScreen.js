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
    const server = Cypress.env('server')

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, policyNumber: numberOnly, server }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('policyNumber')
    })

    cy.get('@policyNumber').then((policyNumber) => {
    cy.log(`Extracted policy number: ${policyNumber}`)
    })
        
}

retreivePolicyNumberDD(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]
    const server = Cypress.env('server')

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, policyNumberDD: numberOnly, server }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('policyNumberDD')
    })

    cy.get('@policyNumberDD').then((policyNumberDD) => {
    cy.log(`Extracted policy number: ${policyNumberDD}`)
    })
        
}

retreiveTempPackPolicyNumber(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, tempPackPolicyNumber: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('tempPackPolicyNumber')
    })

    cy.get('@tempPackPolicyNumber').then((tempPackPolicyNumber) => {
    cy.log(`Extracted policy number: ${tempPackPolicyNumber}`)
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

retreiveOverrideDeclinePolicyNumber(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]
    const server = Cypress.env('server')

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, overrideDeclinePolicyNumber: numberOnly, server }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('overrideDeclinePolicyNumber')
    })

    cy.get('@overrideDeclinePolicyNumber').then((overrideDeclinePolicyNumber) => {
    cy.log(`Extracted policy number: ${overrideDeclinePolicyNumber}`)
    })
        
}

}