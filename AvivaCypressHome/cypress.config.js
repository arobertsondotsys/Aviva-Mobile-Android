
const { defineConfig } = require("cypress")


async function setupNodeEvents(on, config) {
  
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  
  require('cypress-mochawesome-reporter/plugin')(on)  

  const serverKey = config.env.serverKey || 'QA2'; // Default to QA2 if no serverKey is provided
  

  // Modify config if needed
  //*****SPEC PATTERN FOR QA ONLY
  const qaSpecPattern = [
     'cypress/integration/aviva/Tests/PolicyOwnership.cy.js',
     'cypress/integration/aviva/Tests/AgentNBAddSpecifiedRNLRemoveQA.cy.js',
     'cypress/integration/aviva/Tests/AgentRNLAddSpecifiedRNLPurchQA.cy.js',
     'cypress/integration/aviva/Tests/AgentPurch.cy.js',
     'cypress/integration/aviva/Tests/AgentMTAQA.cy.js',
     'cypress/integration/aviva/Tests/AgentMTAJointProv.cy.js',
     'cypress/integration/aviva/Tests/CustPurchQA.cy.js',
     'cypress/integration/aviva/Tests/CustMTA.cy.js',
     'cypress/integration/aviva/Tests/CustNBAddSpecifiedRNLRemoveQA.cy.js',
     'cypress/integration/aviva/Tests/CustRNLAddSpecifiedRNLPurchQA.cy.js',
     'cypress/integration/aviva/Tests/AgentPurchJointProv.cy.js',
     'cypress/integration/aviva/Tests/RenewalAgentPIFtoDDQA.cy.js',
     'cypress/integration/aviva/Tests/RenewalCustPIFtoDDQA.cy.js',
     'cypress/integration/aviva/Tests/RenewalAgentPIFtoPIFQA.cy.js',
     'cypress/integration/aviva/Tests/RenewalCustPIFtoPIFQA.cy.js',
     'cypress/integration/aviva/Tests/RenewalAgentDDtoPIFQA.cy.js',
     'cypress/integration/aviva/Tests/RenewalCustDDtoPIFQA.cy.js',
     'cypress/integration/aviva/Tests/RenewalAgentDDtoDDAutoRolloverQA.cy.js',
     'cypress/integration/aviva/Tests/ParagonCheckNBQA.cy.js',
     'cypress/integration/aviva/Tests/ParagonCheckNBNoPay.cy.js',
     'cypress/integration/aviva/Tests/ParagonCheckNBNoPayAdHocLetters.cy.js',
     'cypress/integration/aviva/Tests/ParagonCheckMTAQA.cy.js',
     'cypress/integration/aviva/Tests/ParagonCheckMTAQANoDocsWithCharge.cy.js',
     'cypress/integration/aviva/Tests/ParagonCheckRNLQA.cy.js',
     'cypress/integration/aviva/Tests/ParagonCheckRNLMTAQA.cy.js',
     'cypress/integration/aviva/Tests/AgentCancellation.cy.js'
  ]

  //*****SPEC PATTERN FOR DEMO & ALL OTHER SERVERS
  const demoSpecPattern = [
    'cypress/integration/aviva/Tests/PolicyOwnership.cy.js',
    'cypress/integration/aviva/Tests/AgentNBAddSpecifiedRNLRemove.cy.js',
    'cypress/integration/aviva/Tests/AgentRNLAddSpecifiedRNLPurch.cy.js',
    'cypress/integration/aviva/Tests/AgentPurch.cy.js',
    'cypress/integration/aviva/Tests/AgentMTA.cy.js',
    'cypress/integration/aviva/Tests/AgentMTAJointProv.cy.js',
    'cypress/integration/aviva/Tests/CustPurch.cy.js',
    'cypress/integration/aviva/Tests/CustMTA.cy.js',
    'cypress/integration/aviva/Tests/CustNBAddSpecifiedRNLRemove.cy.js',
    'cypress/integration/aviva/Tests/CustRNLAddSpecifiedRNLPurch.cy.js',
    'cypress/integration/aviva/Tests/AgentPurchJointProv.cy.js',
    'cypress/integration/aviva/Tests/RenewalAgentPIFtoDD.cy.js',
    'cypress/integration/aviva/Tests/RenewalCustPIFtoDD.cy.js',
    'cypress/integration/aviva/Tests/RenewalAgentPIFtoPIF.cy.js',
    'cypress/integration/aviva/Tests/RenewalCustPIFtoPIF.cy.js',
    'cypress/integration/aviva/Tests/RenewalAgentDDtoPIF.cy.js',
    'cypress/integration/aviva/Tests/RenewalCustDDtoPIF.cy.js',
    'cypress/integration/aviva/Tests/RenewalAgentDDtoDDAutoRollover.cy.js',
    'cypress/integration/aviva/Tests/ParagonCheckNB.cy.js',
    'cypress/integration/aviva/Tests/ParagonCheckNBNoPay.cy.js',
    'cypress/integration/aviva/Tests/ParagonCheckNBNoPayAdHocLetters.cy.js',
    'cypress/integration/aviva/Tests/ParagonCheckMTA.cy.js',
    'cypress/integration/aviva/Tests/ParagonCheckMTANoDocsWithCharge.cy.js',
    'cypress/integration/aviva/Tests/ParagonCheckRNL.cy.js',
    'cypress/integration/aviva/Tests/ParagonCheckRNLMTA.cy.js',
    'cypress/integration/aviva/Tests/AgentCancellation.cy.js', 
 ]

 // Determine the spec pattern based on the environment variable
 //const serverKey = config.env.serverKey
 

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

  reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      useInlineDiffs: true,
      embeddedScreenshots: true,
      videoOnFailOnly: true,
      reportFilename: 'Aviva Home Automation results',
    

    },
  
  "chromeWebSecurity": false,

  defaultCommandTimeout: 10000,

  viewportWidth: 1920,
  viewportHeight: 1400,

  pageLoadTimeout: 80000,

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
      serverKey: '' // Set the default serverKey here
    }
    
  
  }
  
})

