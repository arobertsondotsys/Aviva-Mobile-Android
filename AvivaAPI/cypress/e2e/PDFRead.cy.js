describe('PDF Test', () => {
  it('should read, verify PDF content, and count occurrences of various phrases', () => {
    cy.task('getPdfContentAndRead', 'C:/Users/a.robertson/Downloads/DOTSYS-PIADH_TEST_MON_19032025-161749_DIRECT.PDF').then(({ text, fileName, numPages, yesCount, piadmrCount, piadhCount, estagCount, emdocCount, iwhitCount, noCount, dotsysCount, telCount }) => {
      const lastNumberPattern = /\d+$/;
      const match = text.match(lastNumberPattern);
  
      if (match) {
        const extractedYesCount = parseInt(match[0], 10);
      // Log and verify the PDF content
      cy.log('Starting PDF content read...');
      cy.log(text);
      //expect(text).to.include('\n\nMr Sam Test \nDunlín \nFortwilliam \nSixmilebridge \nClare \nV95FW61');

      // Log and count occurrences of the word "yes"
      cy.log(`Filename: ${fileName}`);
      cy.log(`Total Pages: ${numPages}`);
      cy.log(`Envolopes: ${yesCount}`);
      cy.log(`PIADMR: ${piadmrCount}`);
      cy.log(`PIADH: ${piadhCount}`);
      cy.log(`ESTAG16342: ${estagCount}`);
      cy.log(`EMDOC16357: ${emdocCount}`);
      cy.log(`IWHIT: ${iwhitCount}`);
      cy.log(`Pages with word "no": ${noCount}`);
      cy.log(`Trailer Page(s): ${dotsysCount}`);
      cy.log(`TEL as 001000: ${telCount}`);

      if (yesCount !== extractedYesCount) {
        cy.log(`Mismatch: 'No' count (${yesCount}) does not match trailer page (${extractedYesCount})`);
      } else {
        cy.log(`Match: 'Yes' count (${yesCount}) matches trailer page (${extractedYesCount})`);
      }
    } else {
      cy.log("No match found for the expected pattern in extracted text.");
    }
      //expect(yesCount).to.be.greaterThan(0); // Adjust as needed for your test
    });
  });
});

  