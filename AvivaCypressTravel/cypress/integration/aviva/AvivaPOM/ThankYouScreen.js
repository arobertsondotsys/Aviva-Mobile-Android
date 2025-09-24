export class ThankYouScreen{

    LoginElementLocators = require('./Page Elements/POMElements.json')
    UserData = require('./Page Elements/POMInput.json')


thankyouHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.thankyou_heading).contains(this.UserData.HeadingData.Thankyou_Heading)
    return

}

retreiveTravelPolicyNumberMulti(){

    cy.getAndWait('.m-card-content__inner > p')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]
    const server = Cypress.env('server')

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, travelPolicyNumberMulti: numberOnly, server }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('travelPolicyNumberMulti')
    })

    cy.get('@travelPolicyNumberMulti').then((travelPolicyNumberMulti) => {
    cy.log(`Extracted policy number: ${travelPolicyNumberMulti}`)
    })
        
}

retreiveTravelPolicyNumberBackpacker(){

    cy.getAndWait('.m-card-content__inner > p')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, travelPolicyNumberBackpacker: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('travelPolicyNumberBackpacker')
    })

    cy.get('@travelPolicyNumberBackpacker').then((travelPolicyNumberBackpacker) => {
    cy.log(`Extracted policy number: ${travelPolicyNumberBackpacker}`)
    })
        
}

retreiveTravelPolicyNumberSingle(){

    cy.getAndWait('.m-card-content__inner > p')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, travelPolicyNumberSingle: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('travelPolicyNumberSingle')
    })

    cy.get('@travelPolicyNumberSingle').then((travelPolicyNumberSingle) => {
    cy.log(`Extracted policy number: ${travelPolicyNumberSingle}`)
    })
        
}

retreiveTravelMultiFamilyWith3AddOns(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, travelMultiFamilyWith3AddOns: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('travelMultiFamilyWith3AddOns')
    })

    cy.get('@travelMultiFamilyWith3AddOns').then((travelMultiFamilyWith3AddOns) => {
    cy.log(`Extracted policy number: ${travelMultiFamilyWith3AddOns}`)
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