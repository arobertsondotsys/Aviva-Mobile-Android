const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path') 

async function setupNodeEvents(on, config) {
  
  
  
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  require('cypress-mochawesome-reporter/plugin')(on);  

  // Modify config if needed

  //Spec Pattern for QA ONLY***
  config.specPattern = [

    'cypress/integration/aviva/BDD/PolicyOwnership.feature',
    //'cypress/integration/aviva/BDD/ChaserCheck.feature',
    //'cypress/integration/aviva/BDD/A.feature',
    'cypress/integration/aviva/BDD/Add7DriversAgent.feature',
    'cypress/integration/aviva/BDD/Add7DriversCust.feature',
    'cypress/integration/aviva/BDD/AgentAdditionalDriverRemoveQA.feature',
    'cypress/integration/aviva/BDD/AgentMTADriverNumber.feature',
    'cypress/integration/aviva/BDD/MedicalConditionRemove.feature',
    'cypress/integration/aviva/BDD/AgentUnlock1.feature',
    'cypress/integration/aviva/BDD/MedicalConditionRenewalRemoveQA.feature',
  
    
   ];

  //*****SPEC PATTERN FOR DEMO & ALL OTHER SERVERS
  // config.specPattern = [

  //   'cypress/integration/aviva/BDD/PolicyOwnership.feature',
  //   'cypress/integration/aviva/BDD/ChaserCheck.feature',
  //   'cypress/integration/aviva/BDD/Add7DriversAgent.feature',
  //   'cypress/integration/aviva/BDD/Add7DriversCust.feature',
  //   'cypress/integration/aviva/BDD/AgentAdditionalDriverRemove.feature',
  //   'cypress/integration/aviva/BDD/AgentMTADriverNumber.feature',
  //   'cypress/integration/aviva/BDD/MedicalConditionRemove.feature',
  //   'cypress/integration/aviva/BDD/AgentUnlock1.feature',
  //   'cypress/integration/aviva/BDD/MedicalConditionRenewalRemove.feature',
      
  //  ];


//   // Make sure to return the config object as it might have been modified by the plugin.
   return config;
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
        
     
     
     
      


    }, 
  
  
  
});
