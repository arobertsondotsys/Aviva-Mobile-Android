
const { defineConfig } = require("cypress")


async function setupNodeEvents(on, config) {
  
  require('cypress-mochawesome-reporter/plugin')(on)  

  const demoSpecPattern = [
    'cypress/integration/aviva/Tests/001PolicyOwnership.cy.js',
    'cypress/integration/aviva/Tests/002AgentNBAddSpecifiedRNLRemove.cy.js',
    'cypress/integration/aviva/Tests/003AgentRNLAddSpecifiedRNLPurch.cy.js',
    'cypress/integration/aviva/Tests/004AgentPurch.cy.js',
    'cypress/integration/aviva/Tests/004AgentPurchDD.cy.js',
    'cypress/integration/aviva/Tests/005AgentMTA.cy.js',
    'cypress/integration/aviva/Tests/006AgentMTAJointProv.cy.js',
    'cypress/integration/aviva/Tests/007CustPurch.cy.js',
    'cypress/integration/aviva/Tests/007CustPurchDD.cy.js',
    'cypress/integration/aviva/Tests/007CustHoneyPotCheck.cy.js',
    'cypress/integration/aviva/Tests/008CustMTA.cy.js',
    'cypress/integration/aviva/Tests/009CustNBAddSpecifiedRNLRemove.cy.js',
    'cypress/integration/aviva/Tests/010CustRNLAddSpecifiedRNLPurch.cy.js',
    'cypress/integration/aviva/Tests/011AgentPurchJointProv.cy.js',
    'cypress/integration/aviva/Tests/012RenewalAgentPIFtoPIFNoEmail.cy.js',
    'cypress/integration/aviva/Tests/013RenewalAgentDDtoPIFNoEmail.cy.js',
    'cypress/integration/aviva/Tests/014RenewalAgentDDtoDDAutoRolloverNoEmail.cy.js',
    'cypress/integration/aviva/Tests/015RenewalAgentPIFtoDDNoEmail.cy.js',
    'cypress/integration/aviva/Tests/016RenewalAgentPIFtoDD.cy.js',
    'cypress/integration/aviva/Tests/017RenewalCustPIFtoDD.cy.js',
    'cypress/integration/aviva/Tests/018RenewalAgentPIFtoPIF.cy.js',
    'cypress/integration/aviva/Tests/019RenewalCustPIFtoPIF.cy.js',
    'cypress/integration/aviva/Tests/020RenewalAgentDDtoPIF.cy.js',
    'cypress/integration/aviva/Tests/021RenewalCustDDtoPIF.cy.js',
    'cypress/integration/aviva/Tests/022RenewalAgentDDtoDDAutoRollover.cy.js',
    'cypress/integration/aviva/Tests/023ParagonCheckNB.cy.js',
    'cypress/integration/aviva/Tests/024ParagonCheckNBNoPay.cy.js',
    'cypress/integration/aviva/Tests/025ParagonCheckNBNoPayAdHocLetters.cy.js',
    'cypress/integration/aviva/Tests/026ParagonCheckMTA.cy.js',
    'cypress/integration/aviva/Tests/027ParagonCheckMTANoDocsWithCharge.cy.js',
    'cypress/integration/aviva/Tests/028ParagonCheckRNL.cy.js',
    'cypress/integration/aviva/Tests/029ParagonCheckRNLMTA.cy.js',
    'cypress/integration/aviva/Tests/030AgentCancellation.cy.js', 
    'cypress/integration/aviva/Tests/031ParagonQueueDocsCheck.cy.js',
    'cypress/integration/aviva/Tests/032BonkersPurch.cy.js',
 ]
 config.specPattern = demoSpecPattern
 
 return config
}


module.exports = defineConfig({

  projectId: 'ybpieo',
  redirectionLimit: 100,
  reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      inlineAssets: true,
      useInlineDiffs: true,
      embeddedScreenshots: true,
      videoOnFailOnly: true,
      reportFilename: 'Aviva Home Automation results',
    

    },
  
  chromeWebSecurity: false,
  defaultCommandTimeout: 100000,
  viewportWidth: 1920,
  viewportHeight: 1400,
  pageLoadTimeout: 100000,

  retries: 
  {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    experimentalRunAllSpecs: true,
    experimentalOriginDependencies: true,
    setupNodeEvents,
    specPattern: '**/*.cy.js', // Default pattern
    env: {
      server: '' // Set the default server here QA2 is default if nothing specified
    }
 
  }
})
