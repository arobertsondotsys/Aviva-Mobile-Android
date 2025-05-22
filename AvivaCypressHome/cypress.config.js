
const { defineConfig } = require("cypress")


async function setupNodeEvents(on, config) {
  
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  
  require('cypress-mochawesome-reporter/plugin')(on)  

  const serverKey = config.env.serverKey || 'QA2' // Default to QA2 if no serverKey is provided
  

  // Modify config if needed
  //*****SPEC PATTERN FOR QA ONLY
  const qaSpecPattern = [
     'cypress/integration/aviva/Tests/001PolicyOwnership.cy.js',
     'cypress/integration/aviva/Tests/002AgentNBAddSpecifiedRNLRemoveQA.cy.js',
     'cypress/integration/aviva/Tests/003AgentRNLAddSpecifiedRNLPurchQA.cy.js',
     'cypress/integration/aviva/Tests/004AgentPurch.cy.js',
     'cypress/integration/aviva/Tests/005AgentMTAQA.cy.js',
     'cypress/integration/aviva/Tests/006AgentMTAJointProv.cy.js',
     'cypress/integration/aviva/Tests/007CustPurchQA.cy.js',
     'cypress/integration/aviva/Tests/008CustMTA.cy.js',
     'cypress/integration/aviva/Tests/009CustNBAddSpecifiedRNLRemoveQA.cy.js',
     'cypress/integration/aviva/Tests/010CustRNLAddSpecifiedRNLPurchQA.cy.js',
     'cypress/integration/aviva/Tests/011AgentPurchJointProv.cy.js',
     'cypress/integration/aviva/Tests/012RenewalAgentPIFtoPIFNoEmailQA.cy.js',
     'cypress/integration/aviva/Tests/013RenewalAgentDDtoPIFNoEmailQA.cy.js',
     'cypress/integration/aviva/Tests/014RenewalAgentDDtoDDAutoRolloverNoEmailQA.cy.js',
     'cypress/integration/aviva/Tests/015RenewalAgentPIFtoDDNoEmailQA.cy.js',
     'cypress/integration/aviva/Tests/016RenewalAgentPIFtoDDQA.cy.js',
     'cypress/integration/aviva/Tests/017RenewalCustPIFtoDDQA.cy.js',
     'cypress/integration/aviva/Tests/018RenewalAgentPIFtoPIFQA.cy.js',
     'cypress/integration/aviva/Tests/019RenewalCustPIFtoPIFQA.cy.js',
     'cypress/integration/aviva/Tests/020RenewalAgentDDtoPIFQA.cy.js',
     'cypress/integration/aviva/Tests/021RenewalCustDDtoPIFQA.cy.js',
     'cypress/integration/aviva/Tests/022RenewalAgentDDtoDDAutoRolloverQA.cy.js',
     'cypress/integration/aviva/Tests/023ParagonCheckNBQA.cy.js',
     'cypress/integration/aviva/Tests/024ParagonCheckNBNoPayQA.cy.js',
     'cypress/integration/aviva/Tests/025ParagonCheckNBNoPayAdHocLettersQA.cy.js',
     'cypress/integration/aviva/Tests/026ParagonCheckMTAQA.cy.js',
     'cypress/integration/aviva/Tests/027ParagonCheckMTAQANoDocsWithCharge.cy.js',
     'cypress/integration/aviva/Tests/028ParagonCheckRNLQA.cy.js',
     'cypress/integration/aviva/Tests/029ParagonCheckRNLMTAQA.cy.js',
     'cypress/integration/aviva/Tests/030AgentCancellation.cy.js',
     'cypress/integration/aviva/Tests/031ParagonQueueDocsCheckQA.cy.js',
  ]

  //*****SPEC PATTERN FOR DEMO & ALL OTHER SERVERS
  const demoSpecPattern = [
    'cypress/integration/aviva/Tests/001PolicyOwnership.cy.js',
    'cypress/integration/aviva/Tests/002AgentNBAddSpecifiedRNLRemove.cy.js',
    'cypress/integration/aviva/Tests/003AgentRNLAddSpecifiedRNLPurch.cy.js',
    'cypress/integration/aviva/Tests/004AgentPurch.cy.js',
    'cypress/integration/aviva/Tests/005AgentMTA.cy.js',
    'cypress/integration/aviva/Tests/006AgentMTAJointProv.cy.js',
    'cypress/integration/aviva/Tests/007CustPurch.cy.js',
    'cypress/integration/aviva/Tests/008CustMTA.cy.js',
    'cypress/integration/aviva/Tests/009CustNBAddSpecifiedRNLRemove.cy.js',
    'cypress/integration/aviva/Tests/010CustRNLAddSpecifiedRNLPurch.cy.js',
    'cypress/integration/aviva/Tests/011AgentPurchJointProv.cy.js',
    'cypress/integration/aviva/Tests/012RenewalAgentNoEmailPIFtoPIF.cy.js',
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

  projectId: 'ybpieo',
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
      serverKey: '' // Set the default serverKey here QA2 is default if nothing specified
    },
 onBeforeBrowserLaunch(browser = {}, launchOptions) {
      if (browser.family === 'chromium' && browser.name !== 'electron') {
        launchOptions.args.push('--incognito')
      }
      return launchOptions
    }
  }
})
