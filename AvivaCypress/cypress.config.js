const { defineConfig } = require("cypress")
const fs = require('fs')
const pdf = require('pdf-parse')
const path = require('path')
require('cypress-mochawesome-reporter/plugin')

async function setupNodeEvents(on, config) {

  const serverKey = config.env.serverKey || 'QA2'; // Default to QA2 if no serverKey is provided
  
  // Define the spec patterns
  const qaSpecPattern = [
    'cypress/integration/aviva/Tests/001PolicyOwnership.cy.js',
    'cypress/integration/aviva/Tests/002AgentRenewalPIFtoPIFNoEmail.cy.js',
    'cypress/integration/aviva/Tests/003ReportsCheck.cy.js',
    //'cypress/integration/aviva/Tests/ChaserCheck.cy.js',
    //'cypress/integration/aviva/Tests/A.cy.js',
    'cypress/integration/aviva/Tests/004Add7DriversAgent.cy.js',
    'cypress/integration/aviva/Tests/005Add7DriversCust.cy.js',
    'cypress/integration/aviva/Tests/006ParagonQueueNYY.cy.js',
    'cypress/integration/aviva/Tests/007ParagonQueueNNY.cy.js',
    'cypress/integration/aviva/Tests/008ParagonQueueNYN.cy.js',
    'cypress/integration/aviva/Tests/009DocumentPreferences.cy.js',
    'cypress/integration/aviva/Tests/010AgentAdditionalDriverRemoveQA.cy.js',
    'cypress/integration/aviva/Tests/011AgentPurch.cy.js',
    'cypress/integration/aviva/Tests/012AgentUnlock.cy.js',
    'cypress/integration/aviva/Tests/013CheckCookies.cy.js',
    'cypress/integration/aviva/Tests/014AgentDocUpload.cy.js',
    'cypress/integration/aviva/Tests/015AgentMTAPurch.cy.js',
    'cypress/integration/aviva/Tests/016AgentMTATempPurch.cy.js',
    'cypress/integration/aviva/Tests/017AgentMTADriverNumber.cy.js',
    'cypress/integration/aviva/Tests/018AmendNCD.cy.js',
    'cypress/integration/aviva/Tests/019MedicalConditionRemove.cy.js',
    'cypress/integration/aviva/Tests/020AgentCancelation.cy.js',
    'cypress/integration/aviva/Tests/021NTUCanc.cy.js',
    'cypress/integration/aviva/Tests/022PortalLogin.cy.js',
    'cypress/integration/aviva/Tests/023CustDocUpload.cy.js',
    'cypress/integration/aviva/Tests/024CustCancellation.cy.js',
    'cypress/integration/aviva/Tests/025PasswordReset.cy.js',
    'cypress/integration/aviva/Tests/026CustPurchQA.cy.js',
    'cypress/integration/aviva/Tests/027AgentUnlock1.cy.js',
    'cypress/integration/aviva/Tests/028CustMTATempPurchQA.cy.js',
    'cypress/integration/aviva/Tests/029CustMTAPurch.cy.js',
    'cypress/integration/aviva/Tests/030CustAdditionalDriverRemoveQA.cy.js',
    'cypress/integration/aviva/Tests/031MedicalConditionRenewalRemoveQA.cy.js',
    'cypress/integration/aviva/Tests/032AgentRenewalQA.cy.js',
    'cypress/integration/aviva/Tests/033CustRenewalQA.cy.js',
    'cypress/integration/aviva/Tests/034AmendRenewalNCDQA.cy.js',
    'cypress/integration/aviva/Tests/035ParagonQueueCheck.cy.js',
    'cypress/integration/aviva/Tests/036DiaryCheck.cy.js',
  ]

  const demoSpecPattern = [
    'cypress/integration/aviva/Tests/001PolicyOwnership.cy.js',
    'cypress/integration/aviva/Tests/002AgentRenewalPIFtoPIFNoEmail.cy.js',
    'cypress/integration/aviva/Tests/003ReportsCheck.cy.js',
    //'cypress/integration/aviva/Tests/ChaserCheck.cy.js',
    'cypress/integration/aviva/Tests/004Add7DriversAgent.cy.js',
    'cypress/integration/aviva/Tests/005Add7DriversCust.cy.js',
    'cypress/integration/aviva/Tests/006ParagonQueueNYY.cy.js',
    'cypress/integration/aviva/Tests/007ParagonQueueNNY.cy.js',
    'cypress/integration/aviva/Tests/008ParagonQueueNYN.cy.js',
    'cypress/integration/aviva/Tests/009DocumentPreferences.cy.js',
    'cypress/integration/aviva/Tests/010AgentAdditionalDriverRemove.cy.js',
    'cypress/integration/aviva/Tests/011AgentPurch.cy.js',
    'cypress/integration/aviva/Tests/012AgentUnlock.cy.js',
    'cypress/integration/aviva/Tests/013CheckCookies.cy.js',
    'cypress/integration/aviva/Tests/014AgentDocUpload.cy.js',
    'cypress/integration/aviva/Tests/015AgentMTAPurch.cy.js',
    'cypress/integration/aviva/Tests/016AgentMTATempPurch.cy.js',
    'cypress/integration/aviva/Tests/017AgentMTADriverNumber.cy.js',
    'cypress/integration/aviva/Tests/018AmendNCD.cy.js',
    'cypress/integration/aviva/Tests/019MedicalConditionRemove.cy.js',
    'cypress/integration/aviva/Tests/020AgentCancelation.cy.js',
    'cypress/integration/aviva/Tests/021NTUCanc.cy.js',
    'cypress/integration/aviva/Tests/022PortalLogin.cy.js',
    'cypress/integration/aviva/Tests/023CustDocUpload.cy.js',
    'cypress/integration/aviva/Tests/024CustCancellation.cy.js',
    'cypress/integration/aviva/Tests/025PasswordReset.cy.js',
    'cypress/integration/aviva/Tests/026CustPurch.cy.js',
    'cypress/integration/aviva/Tests/027AgentUnlock1.cy.js',
    'cypress/integration/aviva/Tests/028CustMTATempPurch.cy.js',
    'cypress/integration/aviva/Tests/029CustMTAPurch.cy.js',
    'cypress/integration/aviva/Tests/030CustAdditionalDriverRemove.cy.js',
    'cypress/integration/aviva/Tests/031MedicalConditionRenewalRemove.cy.js',
    'cypress/integration/aviva/Tests/032AgentRenewal.cy.js',
    'cypress/integration/aviva/Tests/033CustRenewal.cy.js',
    'cypress/integration/aviva/Tests/034AmendRenewalNCD.cy.js',
    'cypress/integration/aviva/Tests/035ParagonQueueCheck.cy.js',
    'cypress/integration/aviva/Tests/036DiaryCheck.cy.js',
  ]

  if (['QA', 'QA2', 'QA3'].includes(serverKey)) {
    config.specPattern = qaSpecPattern
  } else if (['TEST2LOADED', 'DEMO', 'TEST3FAT', 'TEST4E2E', 'TEST5PRICING', 'TEST6TRAINING', 'TEST7HOTFIX', 'TEST8CRMIGRATION', 'TEST9FATMIGRATION', 'TEST10PRODMIGRATION', 'GCCPRE'].includes(serverKey)) {
    config.specPattern = demoSpecPattern
  }

  // Add incognito mode for Chrome
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--incognito')
    }
    return launchOptions
  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

module.exports = defineConfig({
  projectId: "3cnerm",
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
    //experimentalRunAllSpecs: true,
    setupNodeEvents,
    specPattern: '**/*.cy.js', // Default pattern
    env: {
      serverKey: '' // Set the default serverKey here
      
    
    }
  },
})