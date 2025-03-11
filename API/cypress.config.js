const { defineConfig } = require('cypress');
const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');



module.exports = defineConfig({
  e2e: {

    viewportWidth: 1920,
    viewportHeight: 1400,
    
    setupNodeEvents(on, config) {
      on('task', {
        getPdfContentAndRead(pdfPath) {
          const dataBuffer = fs.readFileSync(pdfPath);
          const fileName = path.basename(pdfPath);
          return pdf(dataBuffer, { max: 5000 }).then(data => { // Read only the first 2100 pages
            const text = data.text;
            const numPages = data.numpages; // Get the number of pages
            const yesCount = (text.match(/\b,yes,\b/gi) || []).length; // Count occurrences of "yes"
            const noCount = (text.match(/\b,no,\b/gi) || []).length; // Count occurrences of "no"
            const piadmrCount = (text.match(/\b,PIADMR,\b/gi) || []).length; // Count occurrences of "PIADMR"
            const piadhCount = (text.match(/\b,PIADH,\b/gi) || []).length; // Count occurrences of "PIADH"
            const estagCount = (text.match(/\b,ESTAG16342,\b/gi) || []).length; // Count occurrences of "ESTAG16342"
            const emdocCount = (text.match(/\b,EMDOC16357,\b/gi) || []).length; // Count occurrences of "EMDOC16357"
            const iwhitCount = (text.match(/\b,IWHIT,\b/gi) || []).length; // Count occurrences of "IWHIT"
            const dotsysCount = (text.match(/\b.ZIP\b/gi) || []).length; // Count occurrences of "DOTSYS_"
            
            return { text, fileName, numPages, yesCount, piadmrCount, piadhCount, estagCount, emdocCount, iwhitCount, noCount, dotsysCount };
          });
        }
      });
      return config;
    },
  },
});



