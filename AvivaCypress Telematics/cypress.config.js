const { defineConfig } = require("cypress")

async function setupNodeEvents(on, config) {
  
require('cypress-mochawesome-reporter/plugin')(on);

  const demoSpecPattern = [
    'cypress/integration/aviva/Tests/000PolicyOwnership.cy.js',
    'cypress/integration/aviva/Tests/001TempPack.cy.js',
    // 'cypress/integration/aviva/Tests/002AgentRenewalPIFtoPIFNoEmail.cy.js',
    // 'cypress/integration/aviva/Tests/003ReportsCheck.cy.js',
    // 'cypress/integration/aviva/Tests/ChaserCheck.cy.js',
    // 'cypress/integration/aviva/Tests/004Add7DriversAgent.cy.js',
    // 'cypress/integration/aviva/Tests/005Add7DriversCust.cy.js',
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
    // 'cypress/integration/aviva/Tests/017AgentMTADriverNumber.cy.js',
    'cypress/integration/aviva/Tests/018AmendNCD.cy.js',
    // 'cypress/integration/aviva/Tests/019MedicalConditionRemove.cy.js',
    'cypress/integration/aviva/Tests/020AgentCancelation.cy.js',
    // 'cypress/integration/aviva/Tests/021NTUCanc.cy.js',
    'cypress/integration/aviva/Tests/022PortalLogin.cy.js',
    'cypress/integration/aviva/Tests/023CustDocUpload.cy.js',
    'cypress/integration/aviva/Tests/024CustCancellation.cy.js',
    'cypress/integration/aviva/Tests/025PasswordReset.cy.js',
    'cypress/integration/aviva/Tests/026CustPurch.cy.js',
    'cypress/integration/aviva/Tests/027AgentUnlock1.cy.js',
    'cypress/integration/aviva/Tests/028CustMTATempPurch.cy.js',
    'cypress/integration/aviva/Tests/029CustMTAPurch.cy.js',
    // 'cypress/integration/aviva/Tests/030CustAdditionalDriverRemove.cy.js',
    // 'cypress/integration/aviva/Tests/031MedicalConditionRenewalRemove.cy.js',
    'cypress/integration/aviva/Tests/032AgentRenewal.cy.js',
    'cypress/integration/aviva/Tests/033CustRenewal.cy.js',
    // 'cypress/integration/aviva/Tests/034AmendRenewalNCD.cy.js',
    'cypress/integration/aviva/Tests/035ParagonQueueCheck.cy.js',
    // 'cypress/integration/aviva/Tests/036DiaryCheck.cy.js',
  ]
  config.specPattern = demoSpecPattern

  return config
}

module.exports = defineConfig({
  projectId: "3cnerm",
  redirectionLimit: 100,
  //video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    inlineAssets: true,
    useInlineDiffs: true,
    embeddedScreenshots: true,
    videoOnFailOnly: true,
    reportFilename: 'Aviva Telematics Automation results',
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  viewportWidth: 1920,
  viewportHeight: 1400,
  pageLoadTimeout: 30000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    //experimentalRunAllSpecs: true,
    setupNodeEvents,
    specPattern: '**/*.cy.js', // Default pattern
    env: {
      server: '' // Set the default server here
      
    
    }
  },
})