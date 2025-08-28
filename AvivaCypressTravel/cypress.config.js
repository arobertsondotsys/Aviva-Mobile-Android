const { defineConfig } = require("cypress")
const path = require('path')
const xlsx = require('xlsx')

async function setupNodeEvents(on, config) {

  require('cypress-mochawesome-reporter/plugin')(on)

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
    // 'cypress/integration/aviva/Tests/000PolicyOwnership.cy.js',
    // 'cypress/integration/aviva/Tests/001TempPack.cy.js',
    // 'cypress/integration/aviva/Tests/002AgentPurch.cy.js',
    // 'cypress/integration/aviva/Tests/003AgentUnlock.cy.js',
    // 'cypress/integration/aviva/Tests/004CheckCookies.cy.js',
    // 'cypress/integration/aviva/Tests/005AgentDocUpload.cy.js',
    // 'cypress/integration/aviva/Tests/006AgentMTAPurch.cy.js',
    // 'cypress/integration/aviva/Tests/007AgentCancelation.cy.js',
    // 'cypress/integration/aviva/Tests/008NTUCanc.cy.js',
    'cypress/integration/aviva/Tests/008QuotePerformance.cy.js',
    // 'cypress/integration/aviva/Tests/009CustDocUpload.cy.js',
    // 'cypress/integration/aviva/Tests/010CustHoneyPotCheck.cy.js',
    'cypress/integration/aviva/Tests/011CustPurch.cy.js',
    // 'cypress/integration/aviva/Tests/012AgentUnlock1.cy.js',
  
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
    reportFilename: 'Aviva Travel Automation results',
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
      server: '' // Set the default server here
      
    
    }
  },
})