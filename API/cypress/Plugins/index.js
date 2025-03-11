const fs = require('fs');
const pdf = require('pdf-parse');

module.exports = (on, config) => {
  on('task', {
    getPdfContent(pdfPath) {
      const dataBuffer = fs.readFileSync(pdfPath);
      return pdf(dataBuffer).then(data => {
        return data.text;
      });
    }
  });
};
