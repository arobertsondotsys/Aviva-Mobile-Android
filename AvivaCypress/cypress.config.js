const { defineConfig } = require("cypress")
const path = require('path')
const xlsx = require('xlsx')
require('cypress-mochawesome-reporter/plugin')

async function setupNodeEvents(on, config) {

   on('task', {
  readExcel({ filePath, sheetName }) {
    const workbook = xlsx.readFile(path.resolve(filePath))
    const worksheet = workbook.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(worksheet);
  },
  writePolicyNumberToExcel({ filePath, sheetName, rowIndex, policyNumber }) {
    const workbook = xlsx.readFile(path.resolve(filePath));
    const worksheet = workbook.Sheets[sheetName];
    const json = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

    // Find the PolicyNumbers column index
    const headerRow = json[0];
    const policyColIndex = headerRow.indexOf('PolicyNumbers');
    if (policyColIndex === -1) throw new Error('PolicyNumbers column not found');

    // Ensure the row exists
    if (!json[rowIndex + 1]) {
    // Create an empty row with the right number of columns
    json[rowIndex + 1] = Array(headerRow.length).fill('');
    }

    // Write the policy number to the correct row (rowIndex is 0-based for data, +1 for header)
    json[rowIndex + 1][policyColIndex] = policyNumber;

    // Write back to worksheet and file
    const newWorksheet = xlsx.utils.aoa_to_sheet(json);
    workbook.Sheets[sheetName] = newWorksheet;
    xlsx.writeFile(workbook, path.resolve(filePath));
    return null;
  }
})

  const demoSpecPattern = [
    'cypress/integration/aviva/Tests/000PolicyOwnership.cy.js',
    'cypress/integration/aviva/Tests/001TempPack.cy.js',
    'cypress/integration/aviva/Tests/002AgentRenewalPIFtoPIFNoEmail.cy.js',
    'cypress/integration/aviva/Tests/003ReportsCheck.cy.js',
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
    //'cypress/integration/aviva/Tests/C.cy.js',
    //'cypress/integration/aviva/Tests/ChaserCheck.cy.js',
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