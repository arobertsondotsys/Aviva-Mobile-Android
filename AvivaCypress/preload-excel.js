const fs = require('fs');
const xlsx = require('xlsx');

// Update these paths/names as needed:
const excelFile = 'cypress/fixtures/Quotedetails.xlsm'
const sheetName = 'Sheet1'; // Change if your sheet name is different
const jsonFile = 'cypress/fixtures/Quotedetails.json'

// Read the Excel file
const workbook = xlsx.readFile(excelFile)
const worksheet = workbook.Sheets[sheetName]

// Convert to JSON
const data = xlsx.utils.sheet_to_json(worksheet)

// Write to JSON file
fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2))
console.log(`Wrote ${data.length} rows to ${jsonFile}`)