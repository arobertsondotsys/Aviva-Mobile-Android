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

  //Spec Pattern for Batch printer checks***
  // config.specPattern = [

  //   'cypress/integration/aviva/BDD/PolicyOwnership.feature',
  //   'cypress/integration/aviva/BDD/BatchprintertestNNY.feature',
  //   'cypress/integration/aviva/BDD/BatchprintertestNYN.feature',
  //   'cypress/integration/aviva/BDD/BatchprintertestNYY.feature',
  //   'cypress/integration/aviva/BDD/BatchprinterCheck.feature',

  // ];

  //Spec Pattern for QA ONLY***
  config.specPattern = [

    
    'cypress/integration/aviva/BDD/PolicyOwnership.feature',
    //'cypress/integration/aviva/BDD/ChaserCheck.feature',
    //'cypress/integration/aviva/BDD/A.feature',
    'cypress/integration/aviva/BDD/Add7DriversAgent.feature',
    'cypress/integration/aviva/BDD/Add7DriversCust.feature',
    'cypress/integration/aviva/BDD/ParagonQueueNYY.feature',
    'cypress/integration/aviva/BDD/ParagonQueueNNY.feature',
    'cypress/integration/aviva/BDD/ParagonQueueNYN.feature',
    'cypress/integration/aviva/BDD/DocumentPreferences.feature',
    'cypress/integration/aviva/BDD/AgentAdditionalDriverRemoveQA.feature',
    'cypress/integration/aviva/BDD/AgentPurch.feature',
    'cypress/integration/aviva/BDD/AgentUnlock.feature',
    'cypress/integration/aviva/BDD/CheckCookies.feature',
    'cypress/integration/aviva/BDD/AgentDocUpload.feature',
    'cypress/integration/aviva/BDD/AgentMTAPurch.feature',
    'cypress/integration/aviva/BDD/AgentMTATempPurch.feature',
    'cypress/integration/aviva/BDD/AgentMTADriverNumber.feature',
    'cypress/integration/aviva/BDD/AmendNCD.feature',
    'cypress/integration/aviva/BDD/MedicalConditionRemove.feature',
    'cypress/integration/aviva/BDD/AgentCancelation.feature',
    'cypress/integration/aviva/BDD/NTUCanc.feature',
    'cypress/integration/aviva/BDD/PortalLogin.feature',
    'cypress/integration/aviva/BDD/CustDocUpload.feature',
    'cypress/integration/aviva/BDD/CustCancellation.feature',
    'cypress/integration/aviva/BDD/PasswordReset.feature',
    'cypress/integration/aviva/BDD/CustPurchQA.feature',
    'cypress/integration/aviva/BDD/AgentUnlock1.feature',
    'cypress/integration/aviva/BDD/CustMTATempPurchQA.feature',
    'cypress/integration/aviva/BDD/CustMTAPurch.feature',
    'cypress/integration/aviva/BDD/CustAdditionalDriverRemoveQA.feature',
    'cypress/integration/aviva/BDD/MedicalConditionRenewalRemoveQA.feature',
    'cypress/integration/aviva/BDD/AgentRenewalQA.feature',
    'cypress/integration/aviva/BDD/CustRenewalQA.feature',
    'cypress/integration/aviva/BDD/AmendRenewalNCDQA.feature',
    'cypress/integration/aviva/BDD/ParagonQueueCheck.feature',
    'cypress/integration/aviva/BDD/DiaryCheck.feature',
  
    
   ];

  //*****SPEC PATTERN FOR DEMO & ALL OTHER SERVERS
  // config.specPattern = [

  //   'cypress/integration/aviva/BDD/PolicyOwnership.feature',
  //   //'cypress/integration/aviva/BDD/ChaserCheck.feature',
  //   'cypress/integration/aviva/BDD/Add7DriversAgent.feature',
  //   'cypress/integration/aviva/BDD/Add7DriversCust.feature',
  //   'cypress/integration/aviva/BDD/ParagonQueueNYY.feature',
  //   'cypress/integration/aviva/BDD/ParagonQueueNNY.feature',
  //   'cypress/integration/aviva/BDD/ParagonQueueNYN.feature',
  //   'cypress/integration/aviva/BDD/DocumentPreferences.feature',
  //   'cypress/integration/aviva/BDD/AgentAdditionalDriverRemove.feature',
  //   'cypress/integration/aviva/BDD/AgentPurch.feature',
  //   'cypress/integration/aviva/BDD/AgentUnlock.feature',
  //   'cypress/integration/aviva/BDD/CheckCookies.feature',
  //   'cypress/integration/aviva/BDD/AgentDocUpload.feature',
  //   'cypress/integration/aviva/BDD/AgentMTAPurch.feature',
  //   'cypress/integration/aviva/BDD/AgentMTATempPurch.feature',
  //   'cypress/integration/aviva/BDD/AgentMTADriverNumber.feature',
  //   'cypress/integration/aviva/BDD/AmendNCD.feature',
  //   'cypress/integration/aviva/BDD/MedicalConditionRemove.feature',
  //   'cypress/integration/aviva/BDD/AgentCancelation.feature',
  //   'cypress/integration/aviva/BDD/NTUCanc.feature',
  //   'cypress/integration/aviva/BDD/PortalLogin.feature',
  //   'cypress/integration/aviva/BDD/CustDocUpload.feature',
  //   'cypress/integration/aviva/BDD/CustCancellation.feature',
  //   'cypress/integration/aviva/BDD/PasswordReset.feature',
  //   'cypress/integration/aviva/BDD/CustPurch.feature',
  //   'cypress/integration/aviva/BDD/AgentUnlock1.feature',
  //   'cypress/integration/aviva/BDD/CustMTATempPurch.feature',
  //   'cypress/integration/aviva/BDD/CustMTAPurch.feature',
  //   'cypress/integration/aviva/BDD/CustAdditionalDriverRemove.feature',
  //   'cypress/integration/aviva/BDD/MedicalConditionRenewalRemove.feature',
  //   'cypress/integration/aviva/BDD/AgentRenewal.feature',
  //   'cypress/integration/aviva/BDD/CustRenewal.feature',
  //   'cypress/integration/aviva/BDD/AmendRenewalNCD.feature',
  //   'cypress/integration/aviva/BDD/ParagonQueueCheck.feature',
  //   'cypress/integration/aviva/BDD/DiaryCheck.feature',
    
    
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

  viewportWidth: 1920,
  viewportHeight: 1400,

  pageLoadTimeout: 200000,

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
