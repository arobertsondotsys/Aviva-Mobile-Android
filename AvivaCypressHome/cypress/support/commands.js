// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
import 'cypress-iframe'
import 'cypress-plugin-tab'

Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe, selector) => {
    Cypress.log({
      name: 'iframe',
      consoleProps() {
        return {
          iframe: $iframe,
        }
      },
    })
    return new Cypress.Promise(resolve => {
      resolve($iframe.contents().find(selector))
    })
  })

  Cypress.Commands.add('stopWindow', (webElement) => {
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url
      })
    })
   
    if (webElement.startsWith('//')) {
      // If the webElement is an XPath, use cy.xpath
      cy.xpath(webElement).invoke("removeAttr", "target").click()
    } else {
      // Otherwise, use cy.get for CSS selectors
      cy.get(webElement).invoke("removeAttr", "target").click()
    }
  })

Cypress.Commands.add('getAndWait', (selector) => {
    const retries = 20
    const interval = 1000 // 1 second

    function find(attempt = 0) {
        return cy.get('body').then($body => {
            if ($body.find(selector).length) {
                return cy.get(selector)
            } else if (attempt < retries - 1) {
                cy.wait(interval)
                return find(attempt + 1)
            } else {
                throw new Error(`Element '${selector}' not found after ${retries} seconds`)
            }
        })
    }

    return find()
})