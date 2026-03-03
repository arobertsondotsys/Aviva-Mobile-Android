const { defineConfig } = require('cypress');
const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const SpecPattern = [
  'cypress/e2e/Tests/BonkersAPICheck.cy.js',
];

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1400,
    taskTimeout: 120000,
    specPattern: SpecPattern,

    setupNodeEvents(on, config) {
      on('task', {
        getPdfContentAndRead(pdfPath) {
          const dataBuffer = fs.readFileSync(pdfPath);
          const fileName = path.basename(pdfPath);

          return pdf(dataBuffer, { max: 11000 }).then(data => {
            const text = data.text;

            return {
              text,
              fileName,
              numPages: data.numpages,
              yesCount: (text.match(/\b,yes,\b/gi) || []).length,
              noCount: (text.match(/\b,no,\b/gi) || []).length,
              piadmrCount: (text.match(/\b,PIADMR,\b/gi) || []).length,
              piadhCount: (text.match(/\b,PIADH,\b/gi) || []).length,
              estagCount: (text.match(/\b,ESTAG16342,\b/gi) || []).length,
              emdocCount: (text.match(/\b,EMDOC16357,\b/gi) || []).length,
              iwhitCount: (text.match(/\b,IWHIT,\b/gi) || []).length,
              dotsysCount: (text.match(/\b.ZIP\b/gi) || []).length,
              telCount: (text.match(/\b001000\b/gi) || []).length
            };
          });
        },
      });

      return config;
    },
  },
});



