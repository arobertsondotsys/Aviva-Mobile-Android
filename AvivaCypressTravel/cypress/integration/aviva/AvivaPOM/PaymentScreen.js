export class PaymentScreen{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

  selectPaymentMethod() {
    cy.wait(6000)
    cy.url().then((currentUrl) => {
        if (currentUrl.includes('rwy') || currentUrl.includes('pre-aviva')) {
            this.paymentCardQAWithCheck();
        } else if (currentUrl.includes('stg') || currentUrl.includes('pre-aviva')) {
            this.paymentCardDemo();
        } else {
            throw new Error('Unknown payment environment: ' + currentUrl);
        }
    });
}

 selectPaymentMethod1() {
    cy.wait(6000)
    cy.url().then((currentUrl) => {
        if (currentUrl.includes('rwy') || currentUrl.includes('pre-aviva')) {
            this.paymentCardQAAgent();
        } else if (currentUrl.includes('stg') || currentUrl.includes('pre-aviva')) {
            this.paymentCardDemoAgent();
        } else {
            throw new Error('Unknown payment environment: ' + currentUrl);
        }
    });
}

selectPaymentMethod2() {
    cy.wait(6000)
    cy.url().then((currentUrl) => {
        if (currentUrl.includes('rwy') || currentUrl.includes('pre-aviva')) {
            this.paymentDDQAWithPassword();
        } else if (currentUrl.includes('stg') || currentUrl.includes('pre-aviva')) {
            this.paymentDDDemo();
        } else {
            throw new Error('Unknown payment environment: ' + currentUrl);
        }
    });
}

paymentCardQAWithCheck() {
  cy.origin(
    { 
      origin: /^https:\/\/www\.direct\.(rwy-aviva|pre-aviva)\.co\.uk$/ 
    }, 
    () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
          return false // Prevent Cypress from failing the test on uncaught exceptions
      })
  
      const CCnumber = '4917610000000000';
      const Exp1 = '03'
      const Exp2 = '30'
      const CVC = '737'
  
      // Wait for the page to load and verify the payment heading
      cy.wait(5000)
      cy.get('.l-section > .a-heading').contains('Pay €')
      cy.wait(3000)
  
      // Check if the radio button exists and click it
      cy.get('body').then(($body) => {
          if ($body.find('.m-form-row__content > .m-radio-group > :nth-child(1) > .a-radio > .a-radio__label').length > 0) {
              cy.get('.m-form-row__content > .m-radio-group > :nth-child(1) > .a-radio > .a-radio__label').click()
          } else {
              cy.log('Radio button not found, proceeding without clicking.')
          }
      })
  
      // Helper function to get iframe content
      const getIframeDocument = (iframeTitle) => {
          return cy
              .get(`iframe[title="${iframeTitle}"]`)
              .its('0.contentDocument.body')
              .should('not.be.empty')
              .then((body) => cy.wrap(body));
      }
  
      // Enter card details in the respective iframes
      getIframeDocument('Iframe for secured card number')
          .find('#encryptedCardNumber')
          .should('exist')
          .type(CCnumber)
  
      getIframeDocument('Iframe for secured card expiry month')
          .find('#encryptedExpiryMonth')
          .should('exist')
          .type(Exp1)
  
      getIframeDocument('Iframe for secured card expiry year')
          .find('#encryptedExpiryYear')
          .should('exist')
          .type(Exp2)
  
      getIframeDocument('Iframe for secured card security code')
          .find('#encryptedSecurityCode')
          .should('exist')
          .type(CVC)
  
      // Click the continue button
      cy.get('#continueButton').click()
  
 // Wait for the Adyen iframe to appear
  cy.wait(10000);

  // Try all Adyen iframes for the password input
  cy.get('iframe').each(($iframe, idx) => {
    cy.wrap($iframe)
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then((body) => {
        if (Cypress.$(body).find('input[placeholder*="password"]').length > 0) {
          cy.log(`Found password input in iframe[${idx}]`);
          cy.wrap(body)
            .find('input[placeholder*="password"]')
            .type('password', { force: true })
          cy.wrap(body)
            .find('#buttonSubmit')
            .click({ force: true })
        }
      })
  })
})

}

paymentCardQA(){

    cy.origin(
    { 
      origin: /^https:\/\/www\.direct\.(rwy-aviva|pre-aviva)\.co\.uk$/ 
    }, 
    () => {
      Cypress.on('uncaught:exception', (err, runnable) =>
      {
      return false
      })
      const CCnumber='4917610000000000'
      const Exp1='03'
      const Exp2='30'
      const CVC='737'
      
      cy.wait(10000)
      cy.get('.payment-heading').contains('Payment')
      cy.get('.m-form-row__content > .m-radio-group > :nth-child(1) > .a-radio > .a-radio__label').click()
      
        
     
      const getIframeDocumentCard = () => {
        return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentMonth = () => {
        return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentYear = () => {
        return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentCVC = () => {
        return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }
      
        
      getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
      getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
      getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
      getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
      cy.get('#continueButton').click()

    })

 // Wait for the Adyen iframe to appear
  cy.wait(10000);

  // Try all Adyen iframes for the password input
  cy.get('iframe').each(($iframe, idx) => {
    cy.wrap($iframe)
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then((body) => {
        if (Cypress.$(body).find('input[placeholder*="password"]').length > 0) {
          cy.log(`Found password input in iframe[${idx}]`);
          cy.wrap(body)
            .find('input[placeholder*="password"]')
            .type('password', { force: true });
          cy.wrap(body)
            .find('#buttonSubmit')
            .click({ force: true });
        }
      });
  });


}

paymentCardQAAgent(){

    cy.origin(
    { 
      origin: /^https:\/\/www\.direct\.(rwy-aviva|pre-aviva)\.co\.uk$/ 
    }, 
    () => {
      Cypress.on('uncaught:exception', (err, runnable) =>
      {
      return false
      })
      const CCnumber='4917610000000000'
      const Exp1='03'
      const Exp2='30'
      const CVC='737'
      
      cy.wait(10000)
    
      const getIframeDocumentCard = () => {
        return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentMonth = () => {
        return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentYear = () => {
        return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentCVC = () => {
        return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }
      
        
      getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
      getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
      getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
      getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
      cy.get('#continueButton').click()

    })

}

paymentCardDemo(){

    cy.origin(
    { 
      origin: /^https:\/\/www\.direct\.(stg-aviva|pre-aviva)\.co\.uk$/ 
    }, 
    () => {
      Cypress.on('uncaught:exception', (err, runnable) =>
      {
      return false
      })
      const CCnumber='4917610000000000'
      const Exp1='03'
      const Exp2='30'
      const CVC='737'
      
      cy.wait(10000)
      //cy.getAndWait('.payment-heading').contains('Payment')
      cy.wait(3000)
       // Check if the radio button exists and click it
      cy.get('body').then(($body) => {
          if ($body.find('.m-form-row__content > .m-radio-group > :nth-child(1) > .a-radio > .a-radio__label').length > 0) {
              cy.get('.m-form-row__content > .m-radio-group > :nth-child(1) > .a-radio > .a-radio__label').click()
          } else {
              cy.log('Radio button not found, proceeding without clicking.')
          }
      })
      
        
     
      const getIframeDocumentCard = () => {
        return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentMonth = () => {
        return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentYear = () => {
        return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentCVC = () => {
        return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }
      
        
      getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
      getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
      getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
      getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
      cy.get('#continueButton').click()

    })

    // Wait for the Adyen iframe to appear
      cy.wait(10000);

      // Try all Adyen iframes for the password input
      cy.get('iframe').each(($iframe, idx) => {
          cy.wrap($iframe)
          .its('0.contentDocument.body')
          .should('not.be.empty')
          .then((body) => {
        if (Cypress.$(body).find('input[placeholder*="password"]').length > 0) {
          cy.log(`Found password input in iframe[${idx}]`);
          cy.wrap(body)
            .find('input[placeholder*="password"]')
            .type('password', { force: true });
          cy.wrap(body)
            .find('#buttonSubmit')
            .click({ force: true });
            }
          });
      });


}

paymentCardDemoAgent(){

    cy.origin(
    { 
      origin: /^https:\/\/www\.direct\.(stg-aviva|pre-aviva)\.co\.uk$/ 
    }, 
    () => {
        Cypress.on('uncaught:exception', (err, runnable) =>
        {
        return false
        })
        const CCnumber='4917610000000000'
        const Exp1='03'
        const Exp2='30'
        const CVC='737'
   
        cy.wait(10000)
  
        const getIframeDocumentCard = () => {
            return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
     
        }

        const getIframeDocumentMonth = () => {
            return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
     
        }

        const getIframeDocumentYear = () => {
            return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
     
        }

        const getIframeDocumentCVC = () => {
            return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
            .then((body) => cy.wrap(body))
     
        }
   
        getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
        getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
        getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
        getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
        cy.get('#continueButton').click()

    })

}

paymentDDQA(){

    cy.origin(
    { 
      origin: /^https:\/\/www\.direct\.(rwy-aviva|pre-aviva)\.co\.uk$/ 
    }, 
    () => {
      Cypress.on('uncaught:exception', (err, runnable) =>
      {
      return false
      })
      const bic= 'BOFIIE2D'
      const iban= 'IE87BOFI90491561068076'
      const CCnumber='4917610000000000'
      const Exp1='03'
      const Exp2='30'
      const CVC='737'
      
      cy.wait(10000)
      cy.get('.payment-heading').contains('Payment')

      cy.get('#BIC').type(bic)
      cy.get('#IBAN').type(iban)
      cy.get('#PaymentDayOfMonth').select(1)
      cy.get('.a-checkbox__label').click()
      cy.get('#continueButton').click()

      const getIframeDocumentCard = () => {
        return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentMonth = () => {
        return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentYear = () => {
        return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentCVC = () => {
        return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }
      
        
      getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
      getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
      getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
      getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
      cy.get('#continueButton').click()

    })

}

paymentDDQAWithPassword(){

    cy.origin(
    { 
      origin: /^https:\/\/www\.direct\.(rwy-aviva|pre-aviva)\.co\.uk$/ 
    }, 
    () => {
      Cypress.on('uncaught:exception', (err, runnable) =>
      {
      return false
      })
      const bic= 'BOFIIE2D'
      const iban= 'IE87BOFI90491561068076'
      const CCnumber='4917610000000000'
      const Exp1='03'
      const Exp2='30'
      const CVC='737'
      
      cy.wait(10000)
      cy.get('.payment-heading').contains('Payment')

      cy.get('#BIC').type(bic)
      cy.get('#IBAN').type(iban)
      cy.get('#PaymentDayOfMonth').select(1)
      cy.get('.a-checkbox__label').click()
      cy.get('#continueButton').click()

      const getIframeDocumentCard = () => {
        return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentMonth = () => {
        return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentYear = () => {
        return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentCVC = () => {
        return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }
      
        
      getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
      getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
      getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
      getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
      cy.get('#continueButton').click()

    })

          // Wait for the Adyen iframe to appear
      cy.wait(10000)

      // Try all Adyen iframes for the password input
      cy.get('iframe').each(($iframe, idx) => {
        cy.wrap($iframe)
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then((body) => {
          if (Cypress.$(body).find('input[placeholder*="password"]').length > 0) {
            cy.log(`Found password input in iframe[${idx}]`);
            cy.wrap(body)
              .find('input[placeholder*="password"]')
              .type('password', { force: true })
            cy.wrap(body)
              .find('#buttonSubmit')
              .click({ force: true })
        }
      })
  })




}

paymentDDDemo(){

    cy.origin(
    { 
      origin: /^https:\/\/www\.direct\.(stg-aviva|pre-aviva)\.co\.uk$/ 
    }, 
    () => {
      Cypress.on('uncaught:exception', (err, runnable) =>
      {
      return false
      })
      const bic= 'BOFIIE2D'
      const iban= 'IE87BOFI90491561068076'
      const CCnumber='4917610000000000'
      const Exp1='03'
      const Exp2='30'
      const CVC='737'
      
      cy.wait(10000)
      cy.get('.payment-heading').contains('Payment')

      cy.get('#BIC').type(bic)
      cy.get('#IBAN').type(iban)
      cy.get('#PaymentDayOfMonth').select(1)
      cy.get('.a-checkbox__label').click()
      cy.get('#continueButton').click()

      const getIframeDocumentCard = () => {
        return cy.get('iframe[title="Iframe for secured card number"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentMonth = () => {
        return cy.get('iframe[title="Iframe for secured card expiry month"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentYear = () => {
        return cy.get('iframe[title="Iframe for secured card expiry year"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }

      const getIframeDocumentCVC = () => {
        return cy.get('iframe[title="Iframe for secured card security code"]').its('0.contentDocument.body').should('not.be.empty')
        .then((body) => cy.wrap(body))
        
      }
      
        
      getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber)
      getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1)
      getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2)
      getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC)
      cy.get('#continueButton').click()

      // Wait for the Adyen iframe to appear
      cy.wait(10000)

      // Try all Adyen iframes for the password input
      cy.get('iframe').each(($iframe, idx) => {
        cy.wrap($iframe)
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then((body) => {
          if (Cypress.$(body).find('input[placeholder*="password"]').length > 0) {
            cy.log(`Found password input in iframe[${idx}]`);
            cy.wrap(body)
              .find('input[placeholder*="password"]')
              .type('password', { force: true })
            cy.wrap(body)
              .find('#buttonSubmit')
              .click({ force: true })
        }
      })
  })
})

}
}
