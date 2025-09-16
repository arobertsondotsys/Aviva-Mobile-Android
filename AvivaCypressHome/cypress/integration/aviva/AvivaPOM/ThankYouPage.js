export class ThankYouPage{

    LoginElementLocators = require('./Page Elements/POMElementsHome.json')
    UserData = require('./Page Elements/POMInputHome.json')




thankyouHeading(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.thankyou_heading).contains(this.UserData.HeadingData.Thankyou_Heading)

}

retreivePolicyNumber() {
    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text')
    .then((text) => {

    const numberOnly = text.match(/\d+/)[0]
    const server = Cypress.env('server')

    cy.wrap(numberOnly).as('policyNumber')

    // Read the existing data from the file
    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
            const updatedData = { ...data, policyNumber: numberOnly, server } 
            cy.writeFile('policy.json', updatedData)
        })
    })
    cy.get('@policyNumber').then((policyNumber) => {
    cy.log(`Extracted policy number: ${policyNumber}`)
    })
}

retreivePolicyNumberForAgentDD() {
    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text')
    .then((text) => {

    const numberOnly = text.match(/\d+/)[0]

    cy.wrap(numberOnly).as('PolicyNumberForAgentDD')

    // Read the existing data from the file
    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
            const updatedData = { ...data, PolicyNumberForAgentDD: numberOnly } // Merge new data with existing data
            cy.writeFile('policy.json', updatedData); // Write the updated data back to the file
        })
    })
    cy.get('@PolicyNumberForAgentDD').then((PolicyNumberForAgentDD) => {
    cy.log(`Extracted policy number: ${PolicyNumberForAgentDD}`)
    })
}

retreivePolicyNumberForCustDD() {
    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text')
    .then((text) => {

    const numberOnly = text.match(/\d+/)[0]

    cy.wrap(numberOnly).as('PolicyNumberForCustDD')

    // Read the existing data from the file
    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
            const updatedData = { ...data, PolicyNumberForCustDD: numberOnly } // Merge new data with existing data
            cy.writeFile('policy.json', updatedData); // Write the updated data back to the file
        })
    })
    cy.get('@PolicyNumberForCustDD').then((PolicyNumberForCustDD) => {
    cy.log(`Extracted policy number: ${PolicyNumberForCustDD}`)
    })
}

retreivePolicyNumberForAgentMTA() {
    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text')
    .then((text) => {

    const numberOnly = text.match(/\d+/)[0]

    cy.wrap(numberOnly).as('PolicyNumberForAgentMTA')

    // Read the existing data from the file
    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
            const updatedData = { ...data, PolicyNumberForAgentMTA: numberOnly } // Merge new data with existing data
            cy.writeFile('policy.json', updatedData); // Write the updated data back to the file
        })
    })
    cy.get('@PolicyNumberForAgentMTA').then((PolicyNumberForAgentMTA) => {
    cy.log(`Extracted policy number: ${PolicyNumberForAgentMTA}`)
    })
}

retreiveBonkersPolicyNumber() {
    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text')
    .then((text) => {

    const numberOnly = text.match(/\d+/)[0]

    cy.wrap(numberOnly).as('BonkersPolicyNumber')

    // Read the existing data from the file
    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
            const updatedData = { ...data, BonkersPolicyNumber: numberOnly } // Merge new data with existing data
            cy.writeFile('policy.json', updatedData); // Write the updated data back to the file
        })
    })
    cy.get('@BonkersPolicyNumber').then((BonkersPolicyNumber) => {
    cy.log(`Extracted policy number: ${BonkersPolicyNumber}`)
    })
}

retreivePolicyNumberForCustMTA() {
    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text')
    .then((text) => {

    const numberOnly = text.match(/\d+/)[0]

    cy.wrap(numberOnly).as('PolicyNumberForCustMTA')

    // Read the existing data from the file
    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
            const updatedData = { ...data, PolicyNumberForCustMTA: numberOnly } // Merge new data with existing data
            cy.writeFile('policy.json', updatedData); // Write the updated data back to the file
        })
    })
    cy.get('@PolicyNumberForCustMTA').then((PolicyNumberForCustMTA) => {
    cy.log(`Extracted policy number: ${PolicyNumberForCustMTA}`)
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

retreiveParagonPolicyNumber4(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber4: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber4')
    })

    cy.get('@paragonPolicyNumber4').then((paragonPolicyNumber4) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber4}`)
    })
        
}

retreiveParagonPolicyNumber5(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber5: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber5')
    })

    cy.get('@paragonPolicyNumber5').then((paragonPolicyNumber5) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber5}`)
    })
        
}

retreiveParagonPolicyNumber6(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber6: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber6')
    })

    cy.get('@paragonPolicyNumber6').then((paragonPolicyNumber6) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber6}`)
    })
        
}

retreiveParagonPolicyNumber7(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber7: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber7')
    })

    cy.get('@paragonPolicyNumber7').then((paragonPolicyNumber7) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber7}`)
    })
        
}

retreiveParagonPolicyNumber8(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber8: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber8')
    })

    cy.get('@paragonPolicyNumber8').then((paragonPolicyNumber8) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber8}`)
    })
        
}

retreiveParagonPolicyNumber9(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber9: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber9')
    })

    cy.get('@paragonPolicyNumber9').then((paragonPolicyNumber9) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber9}`)
    })
        
}

retreiveParagonPolicyNumber10(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber10: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber10')
    })

    cy.get('@paragonPolicyNumber10').then((paragonPolicyNumber10) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber10}`)
    })
        
}

retreiveParagonPolicyNumber11(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber11: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber11')
    })

    cy.get('@paragonPolicyNumber11').then((paragonPolicyNumber11) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber11}`)
    })
        
}

retreiveParagonPolicyNumber12(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber12: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber12')
    })

    cy.get('@paragonPolicyNumber12').then((paragonPolicyNumber12) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber12}`)
    })
        
}

retreiveParagonPolicyNumber13(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber13: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber13')
    })

    cy.get('@paragonPolicyNumber13').then((paragonPolicyNumber13) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber13}`)
    })
        
}

retreiveParagonPolicyNumber14(){

    cy.getAndWait('.m-card-content__inner > p > strong')
    .invoke('text') 
    .then((text) => {
    
    const numberOnly = text.match(/\d+/)[0]

    cy.readFile('policy.json', { timeout: 10000 }).then((data) => {
        const updatedData = { ...data, paragonPolicyNumber14: numberOnly }
        cy.writeFile('policy.json', updatedData)
    })

    cy.wrap(numberOnly).as('paragonPolicyNumber14')
    })

    cy.get('@paragonPolicyNumber14').then((paragonPolicyNumber14) => {
    cy.log(`Extracted policy number: ${paragonPolicyNumber14}`)
    })
        
}

}