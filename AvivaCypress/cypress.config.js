const { defineConfig } = require("cypress")
const fs = require('fs')
const pdf = require('pdf-parse')
const path = require('path')
require('cypress-mochawesome-reporter/plugin')

async function setupNodeEvents(on, config) {
  // Define the spec patterns
  const qaSpecPattern = [
    'cypress/integration/aviva/Tests/PolicyOwnership.cy.js',
    //'cypress/integration/aviva/Tests/ChaserCheck.cy.js',
    //'cypress/integration/aviva/Tests/A.cy.js',
    'cypress/integration/aviva/Tests/Add7DriversAgent.cy.js',
    'cypress/integration/aviva/Tests/Add7DriversCust.cy.js',
    'cypress/integration/aviva/Tests/ParagonQueueNYY.cy.js',
    'cypress/integration/aviva/Tests/ParagonQueueNNY.cy.js',
    'cypress/integration/aviva/Tests/ParagonQueueNYN.cy.js',
    'cypress/integration/aviva/Tests/DocumentPreferences.cy.js',
    'cypress/integration/aviva/Tests/AgentAdditionalDriverRemoveQA.cy.js',
    'cypress/integration/aviva/Tests/AgentPurch.cy.js',
    'cypress/integration/aviva/Tests/AgentUnlock.cy.js',
    'cypress/integration/aviva/Tests/CheckCookies.cy.js',
    'cypress/integration/aviva/Tests/AgentDocUpload.cy.js',
    'cypress/integration/aviva/Tests/AgentMTAPurch.cy.js',
    'cypress/integration/aviva/Tests/AgentMTATempPurch.cy.js',
    'cypress/integration/aviva/Tests/AgentMTADriverNumber.cy.js',
    'cypress/integration/aviva/Tests/AmendNCD.cy.js',
    'cypress/integration/aviva/Tests/MedicalConditionRemove.cy.js',
    'cypress/integration/aviva/Tests/AgentCancelation.cy.js',
    'cypress/integration/aviva/Tests/NTUCanc.cy.js',
    'cypress/integration/aviva/Tests/PortalLogin.cy.js',
    'cypress/integration/aviva/Tests/CustDocUpload.cy.js',
    'cypress/integration/aviva/Tests/CustCancellation.cy.js',
    'cypress/integration/aviva/Tests/PasswordReset.cy.js',
    'cypress/integration/aviva/Tests/CustPurchQA.cy.js',
    'cypress/integration/aviva/Tests/AgentUnlock1.cy.js',
    'cypress/integration/aviva/Tests/CustMTATempPurchQA.cy.js',
    'cypress/integration/aviva/Tests/CustMTAPurch.cy.js',
    'cypress/integration/aviva/Tests/CustAdditionalDriverRemoveQA.cy.js',
    'cypress/integration/aviva/Tests/MedicalConditionRenewalRemoveQA.cy.js',
    'cypress/integration/aviva/Tests/AgentRenewalQA.cy.js',
    'cypress/integration/aviva/Tests/CustRenewalQA.cy.js',
    'cypress/integration/aviva/Tests/AmendRenewalNCDQA.cy.js',
    'cypress/integration/aviva/Tests/ParagonQueueCheck.cy.js',
    'cypress/integration/aviva/Tests/DiaryCheck.cy.js',
  ]

  const demoSpecPattern = [
    'cypress/integration/aviva/Tests/PolicyOwnership.cy.js',
    //'cypress/integration/aviva/Tests/ChaserCheck.cy.js',
    'cypress/integration/aviva/Tests/Add7DriversAgent.cy.js',
    'cypress/integration/aviva/Tests/Add7DriversCust.cy.js',
    'cypress/integration/aviva/Tests/ParagonQueueNYY.cy.js',
    'cypress/integration/aviva/Tests/ParagonQueueNNY.cy.js',
    'cypress/integration/aviva/Tests/ParagonQueueNYN.cy.js',
    'cypress/integration/aviva/Tests/DocumentPreferences.cy.js',
    'cypress/integration/aviva/Tests/AgentAdditionalDriverRemove.cy.js',
    'cypress/integration/aviva/Tests/AgentPurch.cy.js',
    'cypress/integration/aviva/Tests/AgentUnlock.cy.js',
    'cypress/integration/aviva/Tests/CheckCookies.cy.js',
    'cypress/integration/aviva/Tests/AgentDocUpload.cy.js',
    'cypress/integration/aviva/Tests/AgentMTAPurch.cy.js',
    'cypress/integration/aviva/Tests/AgentMTATempPurch.cy.js',
    'cypress/integration/aviva/Tests/AgentMTADriverNumber.cy.js',
    'cypress/integration/aviva/Tests/AmendNCD.cy.js',
    'cypress/integration/aviva/Tests/MedicalConditionRemove.cy.js',
    'cypress/integration/aviva/Tests/AgentCancelation.cy.js',
    'cypress/integration/aviva/Tests/NTUCanc.cy.js',
    'cypress/integration/aviva/Tests/PortalLogin.cy.js',
    'cypress/integration/aviva/Tests/CustDocUpload.cy.js',
    'cypress/integration/aviva/Tests/CustCancellation.cy.js',
    'cypress/integration/aviva/Tests/PasswordReset.cy.js',
    'cypress/integration/aviva/Tests/CustPurch.cy.js',
    'cypress/integration/aviva/Tests/AgentUnlock1.cy.js',
    'cypress/integration/aviva/Tests/CustMTATempPurch.cy.js',
    'cypress/integration/aviva/Tests/CustMTAPurch.cy.js',
    'cypress/integration/aviva/Tests/CustAdditionalDriverRemove.cy.js',
    'cypress/integration/aviva/Tests/MedicalConditionRenewalRemove.cy.js',
    'cypress/integration/aviva/Tests/AgentRenewal.cy.js',
    'cypress/integration/aviva/Tests/CustRenewal.cy.js',
    'cypress/integration/aviva/Tests/AmendRenewalNCD.cy.js',
    'cypress/integration/aviva/Tests/ParagonQueueCheck.cy.js',
    'cypress/integration/aviva/Tests/DiaryCheck.cy.js',
  ]

  // Determine the spec pattern based on the environment variable
  const serverKey = config.env.serverKey

  if (['QA', 'QA2', 'QA3'].includes(serverKey)) {
    config.specPattern = qaSpecPattern
  } else if (['TEST2LOADED', 'DEMO', 'TEST3FAT', 'TEST4E2E', 'TEST5PRICING', 'TEST6TRAINING', 'TEST7HOTFIX', 'TEST8CRMIGRATION', 'TEST9FATMIGRATION', 'TEST10PRODMIGRATION', 'GCCPRE'].includes(serverKey)) {
    config.specPattern = demoSpecPattern
  }

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

module.exports = defineConfig({
  redirectionLimit: 100,
  //video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    useInlineDiffs: true,
    embeddedScreenshots: true,
    videoOnFailOnly: true,
    reportFilename: 'Aviva Automation results',
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1400,
  pageLoadTimeout: 200000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents,
    specPattern: '**/*.cy.js', // Default pattern
    env: {
      serverKey: 'QA2' // Set the default serverKey here
    }
  },
})