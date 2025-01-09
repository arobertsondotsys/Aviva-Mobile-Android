const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");




async function setupNodeEvents(on, config) {
  
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  require('cypress-mochawesome-reporter/plugin')(on);  

  

  // Modify config if needed
  //*****SPEC PATTERN FOR QA ONLY
  // config.specPattern = [
   
  //    'cypress/integration/aviva/BDD/PolicyOwnership.feature',
  //    'cypress/integration/aviva/BDD/AgentPurch.feature',
  //    'cypress/integration/aviva/BDD/AgentMTAQA.feature',
  //    'cypress/integration/aviva/BDD/AgentMTAJointProv.feature',
  //    'cypress/integration/aviva/BDD/CustPurchQA.feature',
  //    'cypress/integration/aviva/BDD/CustMTA.feature',
  //    'cypress/integration/aviva/BDD/AgentPurchJointProv.feature',
  //    'cypress/integration/aviva/BDD/AgentCancellation.feature',
    
    
  // ];

  //*****SPEC PATTERN FOR DEMO & ALL OTHER SERVERS
  config.specPattern = [
    
    'cypress/integration/aviva/BDD/PolicyOwnership.feature',
    'cypress/integration/aviva/BDD/AgentPurch.feature',
    'cypress/integration/aviva/BDD/AgentMTA.feature',
    'cypress/integration/aviva/BDD/AgentMTAJointProv.feature',
    'cypress/integration/aviva/BDD/CustPurch.feature',
    'cypress/integration/aviva/BDD/CustMTA.feature',
    'cypress/integration/aviva/BDD/AgentPurchJointProv.feature',
    'cypress/integration/aviva/BDD/AgentCancellation.feature',
    
      
   
 ];

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
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

  viewportWidth: 1280,
  viewportHeight: 1000,

  pageLoadTimeout: 80000,

  retries: 
  {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents,
    
  
  }
  
});

