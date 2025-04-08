// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register'
require('cypress-xpath')
import 'cypress-wait-until'
//import 'cypress-email-results'
// Alternatively you can use CommonJS syntax:
// require('./commands')

// Add this utility function to format milliseconds into minutes and seconds
function formatDuration(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}m ${seconds}s`;
}

// Use Cypress's `afterEach` hook to log the duration
afterEach(function () {
    const duration = this.currentTest.duration; // Get the test duration in ms
    const formattedDuration = formatDuration(duration);
    console.log(`Test Duration: ${formattedDuration}`);
});