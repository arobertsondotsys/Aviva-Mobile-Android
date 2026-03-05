export class PaymentPage{

    LoginElementLocators = require('./Page Elements/POMElementsHome.json')
    UserData = require('./Page Elements/POMInputHome.json')

  selectPaymentMethod() {
    cy.wait(6000)
    cy.url().then((currentUrl) => {
        if (currentUrl.includes('rwy')) {
            this.paymentCardQAAgent()
        } else if (currentUrl.includes('stg') || currentUrl.includes('pre-aviva')) {
            this.paymentCardDemoAgent()
        } else {
            throw new Error('Unknown payment environment: ' + currentUrl)
        }
    })
}

  selectPaymentMethod1() {
    cy.wait(6000)
    cy.url().then((currentUrl) => {
        if (currentUrl.includes('rwy')) {
            this.paymentCardQAWithCheck()
        } else if (currentUrl.includes('stg') || currentUrl.includes('pre-aviva')) {
            this.paymentCardDemo()
        } else {
            throw new Error('Unknown payment environment: ' + currentUrl)
        }
    })
}

  selectPaymentMethod2() {
    cy.wait(6000)
    cy.url().then((currentUrl) => {
        if (currentUrl.includes('rwy')) {
            this.paymentDDQANoPassword()
        } else if (currentUrl.includes('stg') || currentUrl.includes('pre-aviva')) {
            this.paymentDDDemo()
        } else {
            throw new Error('Unknown payment environment: ' + currentUrl)
        }
    })
}

 paymentCardQAWithCheck() {
  cy.url().then((currentUrl) => {
    let originUrl = '';
    if (currentUrl.startsWith('https://www.direct.rwy-aviva.co.uk')) {
      originUrl = 'https://www.direct.rwy-aviva.co.uk';
    } else if (currentUrl.startsWith('https://www.direct.pre-aviva.co.uk')) {
      originUrl = 'https://www.direct.pre-aviva.co.uk';
    } else {
      throw new Error('Unknown payment domain: ' + currentUrl);
    }

    cy.origin(originUrl, () => {
      Cypress.on('uncaught:exception', () => false);

      const CCnumber = '4917610000000000';
      const Exp1 = '03';
      const Exp2 = '30';
      const CVC = '737';

      cy.wait(5000);
      cy.get('.l-section > .a-heading').contains('Pay €');
      cy.wait(3000);

        // Check if the radio button exists and click it
        cy.get('body').then(($body) => {
        const selector = 'label:contains("Credit or debit card")'
        if ($body.find(selector).length > 0) {
        cy.contains('label', 'Credit or debit card').click({ force: true })
          } else {
              cy.log('Radio button not found, proceeding without clicking.')
          }
      })

      // Helper for iframe
      const getIframeDocument = (iframeTitle) =>
        cy.get(`iframe[title="${iframeTitle}"]`)
          .its('0.contentDocument.body')
          .should('not.be.empty')
          .then((body) => cy.wrap(body));

      getIframeDocument('Iframe for secured card number')
        .find('#encryptedCardNumber')
        .should('exist')
        .type(CCnumber);

      getIframeDocument('Iframe for secured card expiry month')
        .find('#encryptedExpiryMonth')
        .should('exist')
        .type(Exp1);

      getIframeDocument('Iframe for secured card expiry year')
        .find('#encryptedExpiryYear')
        .should('exist')
        .type(Exp2);

      getIframeDocument('Iframe for secured card security code')
        .find('#encryptedSecurityCode')
        .should('exist')
        .type(CVC);

      cy.get('#continueButton').click();
    });

    // Back in top-level context
    cy.wait(4000);

    cy.url().then((url) => {
      if (url.includes('direct')) {
        // Still on payment host, check for password iframe
        cy.wait(6000);
        cy.get('iframe').each(($iframe, idx) => {
          cy.wrap($iframe)
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then((body) => {
              const pw = Cypress.$(body).find('input[placeholder*="password"]');
              if (pw.length > 0) {
                cy.log(`Found password input in iframe[${idx}]`);
                cy.wrap(body).find('input[placeholder*="password"]').type('password', { force: true });
                cy.wrap(body).find('#buttonSubmit').click({ force: true });
              } else {
                cy.log(`No password input found in iframe[${idx}]`);
              }
            });
        });
      } else if (url.includes('cover-summary') || url.includes('diary-items-required')) {
        cy.log('Redirected to thank you/diary page, skipping password logic.');
        cy.contains(/Thank you|Internal Diary and Correspondence/i).should('exist');
      } else {
        cy.contains(/Thank you|Internal Diary and Correspondence/i).then(($el) => {
          if ($el && $el.length) {
            cy.log('Found thank-you / diary content on page.');
          } else {
            throw new Error('Unknown payment environment after continue: ' + url);
          }
        });
      }
    });
  });
}

paymentDDQANoPassword() {
  cy.url().then((currentUrl) => {
    let originUrl = '';
    if (currentUrl.startsWith('https://www.direct.rwy-aviva.co.uk')) {
      originUrl = 'https://www.direct.rwy-aviva.co.uk';
    } else if (currentUrl.startsWith('https://www.direct.pre-aviva.co.uk')) {
      originUrl = 'https://www.direct.pre-aviva.co.uk';
    } else {
      throw new Error('Unknown payment domain: ' + currentUrl);
    }

    cy.origin(originUrl, () => {
      Cypress.on('uncaught:exception', () => false);

      const bic = 'BOFIIE2D';
      const iban = 'IE87BOFI90491561068076';
      const CCnumber = '4917610000000000';
      const Exp1 = '03';
      const Exp2 = '30';
      const CVC = '737';

      cy.wait(5000);
      cy.get('#pspForm > :nth-child(1) > :nth-child(1) > :nth-child(1) > .a-heading')
        .contains('Set up monthly Direct Debit');
      cy.get('#BIC').type(bic);
      cy.get('#IBAN').type(iban);
      cy.get('#PaymentDayOfMonth').select(1);
      cy.get('.a-checkbox__label').click();
      cy.get('#continueButton').click();

      // fill card iframes and click continue
      const getIframe = (title) =>
        cy.get(`iframe[title="${title}"]`)
          .its('0.contentDocument.body')
          .should('not.be.empty')
          .then((body) => cy.wrap(body));

      getIframe('Iframe for secured card number').find('#encryptedCardNumber').type(CCnumber);
      getIframe('Iframe for secured card expiry month').find('#encryptedExpiryMonth').type(Exp1);
      getIframe('Iframe for secured card expiry year').find('#encryptedExpiryYear').type(Exp2);
      getIframe('Iframe for secured card security code').find('#encryptedSecurityCode').type(CVC);

      cy.get('#continueButton').click();
    });

    // Back in top-level context
    cy.wait(4000);

    cy.url().then((url) => {
      if (url.includes('direct')) {
        // still on payment host — password flow
        cy.wait(6000);
        cy.get('iframe').each(($iframe, idx) => {
          cy.wrap($iframe)
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then((body) => {
              const pw = Cypress.$(body).find('input[placeholder*="password"]');
              if (pw.length > 0) {
                cy.log(`Found password input in iframe[${idx}]`);
                cy.wrap(body).find('input[placeholder*="password"]').type('password', { force: true });
                cy.wrap(body).find('#buttonSubmit').click({ force: true });
              } else {
                cy.log(`No password input found in iframe[${idx}]`);
              }
            });
        });
      } else if (url.includes('cover-summary') || url.includes('diary-items-required')) {
        cy.log('Redirected to thank you/diary page, skipping password logic.');
        cy.contains(/Thank you|Internal Diary and Correspondence/i).should('exist');
      } else {
        cy.contains(/Thank you|Internal Diary and Correspondence/i).then(($el) => {
          if ($el && $el.length) {
            cy.log('Found thank-you / diary content on page.');
          } else {
            throw new Error('Unknown payment environment after continue: ' + url);
          }
        });
      }
    });
  });
}


paymentCardQAAgent() {
  cy.url().then((currentUrl) => {
    let originUrl = '';
    if (currentUrl.startsWith('https://www.direct.rwy-aviva.co.uk')) {
      originUrl = 'https://www.direct.rwy-aviva.co.uk';
    } else if (currentUrl.startsWith('https://www.direct.pre-aviva.co.uk')) {
      originUrl = 'https://www.direct.pre-aviva.co.uk';
    } else {
      throw new Error('Unknown payment domain: ' + currentUrl);
    }

    cy.origin(originUrl, () => {
      Cypress.on('uncaught:exception', () => false);

      const CCnumber = '4917610000000000';
      const Exp1 = '03';
      const Exp2 = '30';
      const CVC = '737';

      cy.wait(12000);

      // Check all iframes for the plain card number input
      cy.get('iframe').each(($iframe, idx) => {
        cy.wrap($iframe)
          .its('0.contentDocument.body')
          .should('not.be.empty')
          .then((body) => {
            const cardInput = Cypress.$(body).find('input[placeholder="Card Number"]');
            const $body = Cypress.$(body);
            if (cardInput.length > 0) {
              cy.log(`Found plain card input in iframe[${idx}]`);
              cy.wrap(body).find('input[placeholder="Card Number"]').type(CCnumber);
              cy.wrap(body).find('input[placeholder="MMYY"], input[placeholder="MMYY"]').type(`${Exp1}/${Exp2}`);
              cy.wrap(body).find('input[placeholder="CV2"], input[placeholder="CVC"]').type(CVC);
              cy.wrap(body).find('input[placeholder="Address Line 1"], input[placeholder="Address Line 1"]').click();
              cy.wrap(body).contains('button', 'Submit').click();
            } else {
            // Fallback to Adyen iframe logic if not found
            if ($body.find('#encryptedCardNumber').length) {
            cy.log(`Found Adyen card number in iframe[${idx}]`);
            cy.wrap(body).find('#encryptedCardNumber').type(CCnumber);
            adyenFieldsFilled = true
            }
            if ($body.find('#encryptedExpiryMonth').length) {
            cy.log(`Found Adyen expiry month in iframe[${idx}]`);
            cy.wrap(body).find('#encryptedExpiryMonth').type(Exp1);
            adyenFieldsFilled = true
            }
            if ($body.find('#encryptedExpiryYear').length) {
            cy.log(`Found Adyen expiry year in iframe[${idx}]`);
            cy.wrap(body).find('#encryptedExpiryYear').type(Exp2);
            adyenFieldsFilled = true
            }
            if ($body.find('#encryptedSecurityCode').length) {
            cy.log(`Found Adyen CVC in iframe[${idx}]`);
            cy.wrap(body).find('#encryptedSecurityCode').type(CVC);
            adyenFieldsFilled = true
            }
          }
        });
        }).then(() => {   
        if (adyenFieldsFilled) {
        cy.get('#continueButton', { timeout: 10000 }).should('be.visible').and('not.be.disabled').click();
        }
      });
    });
  });
}

paymentCardDemo() {
  cy.url().then((currentUrl) => {
    let originUrl = '';
    if (currentUrl.startsWith('https://www.direct.stg-aviva.co.uk')) {
      originUrl = 'https://www.direct.stg-aviva.co.uk';
    } else if (currentUrl.startsWith('https://www.direct.pre-aviva.co.uk')) {
      originUrl = 'https://www.direct.pre-aviva.co.uk';
    } else {
      throw new Error('Unknown payment domain: ' + currentUrl);
    }

    cy.origin(originUrl, () => {
      Cypress.on('uncaught:exception', () => false);

      const CCnumber = '4917610000000000';
      const Exp1 = '03';
      const Exp2 = '30';
      const CVC = '737';

      cy.wait(5000);
      cy.get('.payment-heading').contains('Payment');
      cy.wait(2000);

        // Check if the radio button exists and click it
      cy.get('body').then(($body) => {
        const selector = 'label:contains("Credit or debit card")'
        if ($body.find(selector).length > 0) {
        cy.contains('label', 'Credit or debit card').click({ force: true })
          } else {
              cy.log('Radio button not found, proceeding without clicking.')
          }
      })

      // Helper for iframe
      const getIframeDocument = (iframeTitle) =>
        cy.get(`iframe[title="${iframeTitle}"]`)
          .its('0.contentDocument.body')
          .should('not.be.empty')
          .then((body) => cy.wrap(body));

      getIframeDocument('Iframe for secured card number')
        .find('#encryptedCardNumber')
        .should('exist')
        .type(CCnumber);

      getIframeDocument('Iframe for secured card expiry month')
        .find('#encryptedExpiryMonth')
        .should('exist')
        .type(Exp1);

      getIframeDocument('Iframe for secured card expiry year')
        .find('#encryptedExpiryYear')
        .should('exist')
        .type(Exp2);

      getIframeDocument('Iframe for secured card security code')
        .find('#encryptedSecurityCode')
        .should('exist')
        .type(CVC);

      cy.get('#continueButton').click();
    });

    // Back in top-level context
    cy.wait(4000);

    cy.url().then((url) => {
      if (url.includes('direct')) {
        // Still on payment host, check for password iframe
        cy.wait(6000);
        cy.get('iframe').each(($iframe, idx) => {
          cy.wrap($iframe)
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then((body) => {
              const pw = Cypress.$(body).find('input[placeholder*="password"]');
              if (pw.length > 0) {
                cy.log(`Found password input in iframe[${idx}]`);
                cy.wrap(body).find('input[placeholder*="password"]').type('password', { force: true });
                cy.wrap(body).find('#buttonSubmit').click({ force: true });
              } else {
                cy.log(`No password input found in iframe[${idx}]`);
              }
            });
        });
      } else if (url.includes('cover-summary') || url.includes('diary-items-required')) {
        cy.log('Redirected to thank you/diary page, skipping password logic.');
        cy.contains(/Thank you|Internal Diary and Correspondence/i).should('exist');
      } else {
        cy.contains(/Thank you|Internal Diary and Correspondence/i).then(($el) => {
          if ($el && $el.length) {
            cy.log('Found thank-you / diary content on page.');
          } else {
            throw new Error('Unknown payment environment after continue: ' + url);
          }
        });
      }
    });
  });
}

paymentCardDemoAgent() {
  cy.url().then((currentUrl) => {
    let originUrl = '';
    if (currentUrl.startsWith('https://www.direct.stg-aviva.co.uk')) {
      originUrl = 'https://www.direct.stg-aviva.co.uk';
    } else if (currentUrl.startsWith('https://www.direct.pre-aviva.co.uk')) {
      originUrl = 'https://www.direct.pre-aviva.co.uk';
    } else {
      throw new Error('Unknown payment domain: ' + currentUrl);
    }

    cy.origin(originUrl, () => {
      Cypress.on('uncaught:exception', () => false);

      const CCnumber = '4917610000000000';
      const Exp1 = '03';
      const Exp2 = '30';
      const CVC = '737';

      cy.wait(12000);

      // Check all iframes for the plain card number input
      cy.get('iframe').each(($iframe, idx) => {
        cy.wrap($iframe)
          .its('0.contentDocument.body')
          .should('not.be.empty')
          .then((body) => {
            const $body = Cypress.$(body);
            const cardInput = Cypress.$(body).find('input[placeholder="Card Number"]');
            if (cardInput.length > 0) {
              cy.log(`Found plain card input in iframe[${idx}]`);
              cy.wrap(body).find('input[placeholder="Card Number"]').type(CCnumber);
              cy.wrap(body).find('input[placeholder="MMYY"]').type(`${Exp1}/${Exp2}`);
              cy.wrap(body).find('input[placeholder="CV2"]').type(CVC);
              cy.wrap(body).find('input[placeholder="Address Line 1"]').click();
              cy.wrap(body).contains('button', 'Submit').click();
            } else {
            // Fallback to Adyen iframe logic if not found
            if ($body.find('#encryptedCardNumber').length) {
            cy.log(`Found Adyen card number in iframe[${idx}]`);
            cy.wrap(body).find('#encryptedCardNumber').type(CCnumber);
            adyenFieldsFilled = true
            }
            if ($body.find('#encryptedExpiryMonth').length) {
            cy.log(`Found Adyen expiry month in iframe[${idx}]`);
            cy.wrap(body).find('#encryptedExpiryMonth').type(Exp1);
            adyenFieldsFilled = true
            }
            if ($body.find('#encryptedExpiryYear').length) {
            cy.log(`Found Adyen expiry year in iframe[${idx}]`);
            cy.wrap(body).find('#encryptedExpiryYear').type(Exp2);
            adyenFieldsFilled = true
            }
            if ($body.find('#encryptedSecurityCode').length) {
            cy.log(`Found Adyen CVC in iframe[${idx}]`);
            cy.wrap(body).find('#encryptedSecurityCode').type(CVC);
            adyenFieldsFilled = true
            }
          }
        });
        }).then(() => {   
        if (adyenFieldsFilled) {
        cy.get('#continueButton', { timeout: 10000 }).should('be.visible').and('not.be.disabled').click();
        }
      });
    });
  });
}

paymentDDDemo() {
  cy.url().then((currentUrl) => {
    let originUrl = '';
    if (currentUrl.startsWith('https://www.direct.stg-aviva.co.uk')) {
      originUrl = 'https://www.direct.stg-aviva.co.uk';
    } else if (currentUrl.startsWith('https://www.direct.pre-aviva.co.uk')) {
      originUrl = 'https://www.direct.pre-aviva.co.uk';
    } else {
      throw new Error('Unknown payment domain: ' + currentUrl);
    }

    cy.origin(originUrl, () => {
      Cypress.on('uncaught:exception', () => false);

      const bic = 'BOFIIE2D';
      const iban = 'IE87BOFI90491561068076';
      const CCnumber = '4917610000000000';
      const Exp1 = '03';
      const Exp2 = '30';
      const CVC = '737';

      cy.wait(10000);
      cy.get('.payment-heading').contains('Payment');

      cy.get('#BIC').type(bic);
      cy.get('#IBAN').type(iban);
      cy.get('#PaymentDayOfMonth').select(1);
      cy.get('.a-checkbox__label').click();
      cy.get('#continueButton').click();

      const getIframeDocumentCard = () => {
        return cy.get('iframe[title="Iframe for secured card number"]')
          .its('0.contentDocument.body').should('not.be.empty')
          .then((body) => cy.wrap(body));
      };

      const getIframeDocumentMonth = () => {
        return cy.get('iframe[title="Iframe for secured card expiry month"]')
          .its('0.contentDocument.body').should('not.be.empty')
          .then((body) => cy.wrap(body));
      };

      const getIframeDocumentYear = () => {
        return cy.get('iframe[title="Iframe for secured card expiry year"]')
          .its('0.contentDocument.body').should('not.be.empty')
          .then((body) => cy.wrap(body));
      };

      const getIframeDocumentCVC = () => {
        return cy.get('iframe[title="Iframe for secured card security code"]')
          .its('0.contentDocument.body').should('not.be.empty')
          .then((body) => cy.wrap(body));
      };

      getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber);
      getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1);
      getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2);
      getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC);
      cy.get('#continueButton').click();
    });

    // Back in top-level context
    cy.wait(4000);

    cy.url().then((url) => {
      if (url.includes('direct')) {
        // Still on payment host, check for password iframe
        cy.wait(6000);
        cy.get('iframe').each(($iframe, idx) => {
          cy.wrap($iframe)
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then((body) => {
              const pw = Cypress.$(body).find('input[placeholder*="password"]');
              if (pw.length > 0) {
                cy.log(`Found password input in iframe[${idx}]`);
                cy.wrap(body).find('input[placeholder*="password"]').type('password', { force: true });
                cy.wrap(body).find('#buttonSubmit').click({ force: true });
              } else {
                cy.log(`No password input found in iframe[${idx}]`);
              }
            });
        });
      } else if (url.includes('cover-summary') || url.includes('diary-items-required')) {
        cy.log('Redirected to thank you/diary page, skipping password logic.');
        cy.contains(/Thank you|Internal Diary and Correspondence/i).should('exist');
      } else {
        cy.contains(/Thank you|Internal Diary and Correspondence/i).then(($el) => {
          if ($el && $el.length) {
            cy.log('Found thank-you / diary content on page.');
          } else {
            throw new Error('Unknown payment environment after continue: ' + url);
          }
        });
      }
    });
  });
}

RNLDDQA(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.enter_bic).type(this.UserData.InputData.BIC)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.enter_iban).type(this.UserData.InputData.IBAN)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.preferred_day).select(1)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.confirm_dd).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.deposit_paymenttype).select(3)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pay_depositbtn).click()

}

NBDDQA(){

    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.enter_bic).type(this.UserData.InputData.BIC)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.enter_iban).type(this.UserData.InputData.IBAN)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.preferred_day).select(1)
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.confirm_dd).click()
    cy.getAndWait(this.LoginElementLocators.QuotePageLocators.pay_depositbtn).click()

}

}