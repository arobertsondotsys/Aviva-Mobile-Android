const { remote } = require("webdriverio");
const config = require("./browserstack.conf");

// Import POMs

const Server = require("./AvivaMobilePOM/ServersMobile");
const BO = require("./AvivaMobilePOM/BOActions");
const AboutYou = require("./AvivaMobilePOM/AboutYou");
const PersonalDetails = require("./AvivaMobilePOM/PersonalDetails");

(async () => {

  // 1. Connect to BrowserStack device
  console.log("Final caps ->\n" + JSON.stringify(config.capabilities, null, 2));
  const driver = await remote({
    protocol: "https",
    hostname: "hub-cloud.browserstack.com",
    port: 443,
    path: "/wd/hub",
    user: config.userName,
    key: config.accessKey,
    capabilities: config.capabilities
  });

  try {
    // 2. Navigate to selected server URL
    console.log("Navigating to server...");
    await Server.openDemoLinks(driver);

    // 3. Give mobile browser a moment to load then click yo open quote page
    await driver.pause(2000);
    await BO.tapQuoteLink(driver);
    await driver.pause(5000);

    await BO.acceptCookiesIfShown(driver); 

    await AboutYou.aboutYouTitle(driver);
    await AboutYou.proposerTitle(driver);
    await AboutYou.proposerForename(driver);
    await AboutYou.proposerSurname(driver);
    await AboutYou.proposerEmail(driver);
    await AboutYou.phone(driver);
    await AboutYou.aboutYouContinue(driver);

    //await PersonalDetails.personalDetailsTitle(driver);
    await PersonalDetails.addressInput(driver);
    await PersonalDetails.clickAddressSuggestion(driver);
    await PersonalDetails.addressSelect(driver);
    await PersonalDetails.addressConfirm(driver);
    await PersonalDetails.proposerDOB(driver);
    await PersonalDetails.proposerEmployStatus(driver);
    await PersonalDetails.licenceType(driver);
    await PersonalDetails.licenceYears(driver);
    await driver.pause(2000);
    await PersonalDetails.personalDetailsContinue(driver);

    
    await driver.executeScript(`window.scrollTo({top: document.body.scrollHeight,behavior: "smooth"});`, []);


  } catch (err) {
    console.error("Test failed:", err);
  } finally {
    console.log("Ending session...");
    await driver.deleteSession();
  }
})();