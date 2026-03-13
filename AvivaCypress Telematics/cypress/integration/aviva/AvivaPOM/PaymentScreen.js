export class PaymentScreen{

    LoginElementLocators = require('../AvivaPOM/Page Elements/POMElements.json')
    UserData = require('../AvivaPOM/Page Elements/POMInput.json')

selectPaymentMethod() {
    cy.wait(6000)
    cy.url().then((currentUrl) => {
        if (currentUrl.includes('rwy')) {
            this.paymentCardQAWithCheck()
        } else if (currentUrl.includes('stg')|| currentUrl.includes('pre-aviva')) {
            this.paymentCardDemo()
        } else {
            throw new Error('Unknown payment environment: ' + currentUrl)
        }
    });
}

 selectPaymentMethod1() {
    cy.wait(6000)
    cy.url().then((currentUrl) => {
        if (currentUrl.includes('rwy')) {
            this.paymentCardQAAgent()
        } else if (currentUrl.includes('stg')|| currentUrl.includes('pre-aviva')) {
            this.paymentCardDemoAgent()
        } else {
            throw new Error('Unknown payment environment: ' + currentUrl)
        }
    });
}

selectPaymentMethod2() {
    cy.wait(6000)
    cy.url().then((currentUrl) => {
        if (currentUrl.includes('rwy')) {
            this.paymentDDQANoPassword()
        } else if (currentUrl.includes('stg')|| currentUrl.includes('pre-aviva')) {
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

      getIframeDocument('Iframe for card number')
        .find('#encryptedCardNumber')
        .should('exist')
        .type(CCnumber);

      getIframeDocument('Iframe for expiry month')
        .find('#encryptedExpiryMonth')
        .should('exist')
        .type(Exp1);

      getIframeDocument('Iframe for expiry year')
        .find('#encryptedExpiryYear')
        .should('exist')
        .type(Exp2);

      getIframeDocument('Iframe for security code')
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
              // find your original parent iframe
              const threeDS = Cypress.$(body).find('iframe[name*="threeDSIframe"]');
              if (!threeDS.length) {
                cy.log(`No threeDSIframe inside iframe[${idx}]`);
                return;
              }

              // helper: ensures iframe body is rendered
              const getIframeBody = (iframeEl) => {
                return cy
                  .wrap(iframeEl)
                  .its('0.contentDocument.body', { timeout: 20000 })
                  .should(($b) => {
                    expect($b).to.exist;
                    expect($b[0].innerHTML.length).to.be.gt(30);
                  })
                  .then((b) => cy.wrap(b));
              };

              // recursively drill into nested iframes
              const findPasswordFrame = (iframeEl) => {
                return getIframeBody(iframeEl).then(($b) => {

                  if ($b.find('#password-input').length > 0) {
                    return $b;
                  }

                  const nested = $b.find('iframe');
                  if (!nested.length) return null;

                  return findPasswordFrame(nested[0]);
                });
              };

              // dive from your known correct iframe
              return findPasswordFrame(threeDS[0]).then(($pwBody) => {

                if (!$pwBody) {
                  cy.log(
                    `threeDSIframe found in iframe[${idx}], but no #password-input deeper down yet`
                  );
                  return;
                }

                cy.log(`FOUND #password-input via iframe[${idx}]`);

              
        cy.wrap($pwBody).within(() => {
          cy.get('#password-input').type('password', { force: true });
          cy.get('#buttonSubmit').click({ force: true });
        })
    })
  })
})

      } else if (
        url.includes('cover-summary') ||
        url.includes('diary-items-required')
      ) {

        cy.log('Redirected to thank you/diary page, skipping password logic.')
        cy.contains(/Thank you|Internal Diary and Correspondence/i).should('exist')

      } else {

        cy.contains(/Thank you|Internal Diary and Correspondence/i).then(($el) => {
          if ($el && $el.length) {
            cy.log('Found thank-you / diary content on page.')
          } else {
            throw new Error('Unknown payment environment after continue: ' + url)
          }
        })

      }

    })

  })

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

      cy.wait(10000);

      const getIframeDocumentCard = () => {
        return cy.get('iframe[title="Iframe for card number"]')
          .its('0.contentDocument.body').should('not.be.empty')
          .then((body) => cy.wrap(body));
      };

      const getIframeDocumentMonth = () => {
        return cy.get('iframe[title="Iframe for expiry month"]')
          .its('0.contentDocument.body').should('not.be.empty')
          .then((body) => cy.wrap(body));
      };

      const getIframeDocumentYear = () => {
        return cy.get('iframe[title="Iframe for expiry year"]')
          .its('0.contentDocument.body').should('not.be.empty')
          .then((body) => cy.wrap(body));
      };

      const getIframeDocumentCVC = () => {
        return cy.get('iframe[title="Iframe for security code"]')
          .its('0.contentDocument.body').should('not.be.empty')
          .then((body) => cy.wrap(body));
      };

      getIframeDocumentCard().find('#encryptedCardNumber').should('exist').type(CCnumber);
      getIframeDocumentMonth().find('#encryptedExpiryMonth').should('exist').type(Exp1);
      getIframeDocumentYear().find('#encryptedExpiryYear').should('exist').type(Exp2);
      getIframeDocumentCVC().find('#encryptedSecurityCode').should('exist').type(CVC);
      cy.get('#continueButton').click();
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

      getIframeDocument('Iframe for card number')
        .find('#encryptedCardNumber')
        .should('exist')
        .type(CCnumber);

      getIframeDocument('Iframe for expiry month')
        .find('#encryptedExpiryMonth')
        .should('exist')
        .type(Exp1);

      getIframeDocument('Iframe for expiry year')
        .find('#encryptedExpiryYear')
        .should('exist')
        .type(Exp2);

      getIframeDocument('Iframe for security code')
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
        cy.wait(8000);
        cy.get('iframe').each(($iframe, idx) => {
          cy.wrap($iframe)
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then((body) => {
              // find your original parent iframe
              const threeDS = Cypress.$(body).find('iframe[name*="threeDSIframe"]');
              if (!threeDS.length) {
                cy.log(`No threeDSIframe inside iframe[${idx}]`);
                return;
              }

              // helper: ensures iframe body is rendered
              const getIframeBody = (iframeEl) => {
                return cy
                  .wrap(iframeEl)
                  .its('0.contentDocument.body', { timeout: 20000 })
                  .should(($b) => {
                    expect($b).to.exist;
                    expect($b[0].innerHTML.length).to.be.gt(30);
                  })
                  .then((b) => cy.wrap(b));
              };

              // recursively drill into nested iframes
              const findPasswordFrame = (iframeEl) => {
                return getIframeBody(iframeEl).then(($b) => {

                  if ($b.find('#password-input').length > 0) {
                    return $b;
                  }

                  const nested = $b.find('iframe');
                  if (!nested.length) return null;

                  return findPasswordFrame(nested[0]);
                });
              };

              // dive from your known correct iframe
              return findPasswordFrame(threeDS[0]).then(($pwBody) => {

                if (!$pwBody) {
                  cy.log(
                    `threeDSIframe found in iframe[${idx}], but no #password-input deeper down yet`
                  );
                  return;
                }

                cy.log(`FOUND #password-input via iframe[${idx}]`);

              
        cy.wrap($pwBody).within(() => {
          cy.get('#password-input').type('password', { force: true });
          cy.get('#buttonSubmit').click({ force: true });
        })
    })
  })
})

      } else if (
        url.includes('cover-summary') ||
        url.includes('diary-items-required')
      ) {

        cy.log('Redirected to thank you/diary page, skipping password logic.')
        cy.contains(/Thank you|Internal Diary and Correspondence/i).should('exist')

      } else {

        cy.contains(/Thank you|Internal Diary and Correspondence/i).then(($el) => {
          if ($el && $el.length) {
            cy.log('Found thank-you / diary content on page.')
          } else {
            throw new Error('Unknown payment environment after continue: ' + url)
          }
        })

      }

    })

  })

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

      cy.wait(10000);

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

      getIframe('Iframe for card number').find('#encryptedCardNumber').type(CCnumber);
      getIframe('Iframe for expiry month').find('#encryptedExpiryMonth').type(Exp1);
      getIframe('Iframe for expiry year').find('#encryptedExpiryYear').type(Exp2);
      getIframe('Iframe for security code').find('#encryptedSecurityCode').type(CVC);

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
              // find your original parent iframe
              const threeDS = Cypress.$(body).find('iframe[name*="threeDSIframe"]');
              if (!threeDS.length) {
                cy.log(`No threeDSIframe inside iframe[${idx}]`);
                return;
              }

              // helper: ensures iframe body is rendered
              const getIframeBody = (iframeEl) => {
                return cy
                  .wrap(iframeEl)
                  .its('0.contentDocument.body', { timeout: 20000 })
                  .should(($b) => {
                    expect($b).to.exist;
                    expect($b[0].innerHTML.length).to.be.gt(30);
                  })
                  .then((b) => cy.wrap(b));
              };

              // recursively drill into nested iframes
              const findPasswordFrame = (iframeEl) => {
                return getIframeBody(iframeEl).then(($b) => {

                  if ($b.find('#password-input').length > 0) {
                    return $b;
                  }

                  const nested = $b.find('iframe');
                  if (!nested.length) return null;

                  return findPasswordFrame(nested[0]);
                });
              };

              // dive from your known correct iframe
              return findPasswordFrame(threeDS[0]).then(($pwBody) => {

                if (!$pwBody) {
                  cy.log(
                    `threeDSIframe found in iframe[${idx}], but no #password-input deeper down yet`
                  );
                  return;
                }

                cy.log(`FOUND #password-input via iframe[${idx}]`);

              
        cy.wrap($pwBody).within(() => {
          cy.get('#password-input').type('password', { force: true });
          cy.get('#buttonSubmit').click({ force: true });
        })
    })
  })
})

      } else if (
        url.includes('cover-summary') ||
        url.includes('diary-items-required')
      ) {

        cy.log('Redirected to thank you/diary page, skipping password logic.')
        cy.contains(/Thank you|Internal Diary and Correspondence/i).should('exist')

      } else {

        cy.contains(/Thank you|Internal Diary and Correspondence/i).then(($el) => {
          if ($el && $el.length) {
            cy.log('Found thank-you / diary content on page.')
          } else {
            throw new Error('Unknown payment environment after continue: ' + url)
          }
        })

      }

    })

  })

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
        return cy.get('iframe[title="Iframe for card number"]')
          .its('0.contentDocument.body').should('not.be.empty')
          .then((body) => cy.wrap(body));
      };

      const getIframeDocumentMonth = () => {
        return cy.get('iframe[title="Iframe for expiry month"]')
          .its('0.contentDocument.body').should('not.be.empty')
          .then((body) => cy.wrap(body));
      };

      const getIframeDocumentYear = () => {
        return cy.get('iframe[title="Iframe for expiry year"]')
          .its('0.contentDocument.body').should('not.be.empty')
          .then((body) => cy.wrap(body));
      };

      const getIframeDocumentCVC = () => {
        return cy.get('iframe[title="Iframe for security code"]')
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
              // find your original parent iframe
              const threeDS = Cypress.$(body).find('iframe[name*="threeDSIframe"]');
              if (!threeDS.length) {
                cy.log(`No threeDSIframe inside iframe[${idx}]`);
                return;
              }

              // helper: ensures iframe body is rendered
              const getIframeBody = (iframeEl) => {
                return cy
                  .wrap(iframeEl)
                  .its('0.contentDocument.body', { timeout: 20000 })
                  .should(($b) => {
                    expect($b).to.exist;
                    expect($b[0].innerHTML.length).to.be.gt(30);
                  })
                  .then((b) => cy.wrap(b));
              };

              // recursively drill into nested iframes
              const findPasswordFrame = (iframeEl) => {
                return getIframeBody(iframeEl).then(($b) => {

                  if ($b.find('#password-input').length > 0) {
                    return $b;
                  }

                  const nested = $b.find('iframe');
                  if (!nested.length) return null;

                  return findPasswordFrame(nested[0]);
                });
              };

              // dive from your known correct iframe
              return findPasswordFrame(threeDS[0]).then(($pwBody) => {

                if (!$pwBody) {
                  cy.log(
                    `threeDSIframe found in iframe[${idx}], but no #password-input deeper down yet`
                  );
                  return;
                }

                cy.log(`FOUND #password-input via iframe[${idx}]`);

              
        cy.wrap($pwBody).within(() => {
          cy.get('#password-input').type('password', { force: true });
          cy.get('#buttonSubmit').click({ force: true });
        })
    })
  })
})

      } else if (
        url.includes('cover-summary') ||
        url.includes('diary-items-required')
      ) {

        cy.log('Redirected to thank you/diary page, skipping password logic.')
        cy.contains(/Thank you|Internal Diary and Correspondence/i).should('exist')

      } else {

        cy.contains(/Thank you|Internal Diary and Correspondence/i).then(($el) => {
          if ($el && $el.length) {
            cy.log('Found thank-you / diary content on page.')
          } else {
            throw new Error('Unknown payment environment after continue: ' + url)
          }
        })

      }

    })

  })

} 
}
