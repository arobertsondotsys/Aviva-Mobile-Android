// AvivaMobilePOM/BOPersonalDetails.js
const locators = require('./Page Elements/POMElements.json');
const data     = require('./Page Elements/POMInput.json');

class PersonalDetails {

  // ---- mobile-safe helpers ----
  async _resolve(driver, selector) {
    const el = await driver.$(selector);
    await el.waitForExist({ timeout: 15000 });
    await el.scrollIntoView();
    try { await driver.hideKeyboard(); } catch (_) {}
    return el;
  }

  async _clickSafe(driver, el) {
    try {
      await el.waitForClickable({ timeout: 8000 });
      await el.click();
    } catch {
      // Fallback when "element click intercepted" happens on real devices
      await driver.executeScript('arguments[0].click();', [el]);
    }
  }

  // Try A selector; if it doesn't exist, try B
  async _resolveEither(driver, selA, selB) {
    const a = await driver.$(selA);
    if (await a.isExisting()) return this._resolve(driver, selA);
    return this._resolve(driver, selB);
  }

  // ---- page actions ----

  async personalDetailsTitle(driver) {
    const el = await this._resolve(driver, locators.QuotePageLocators.personaldetails_title);
    const txt = await el.getText();
    const expected = data.HeadingData.PersonDetails_Heading;
    if (!txt || !txt.includes(expected)) {
      throw new Error(`Personal Details title mismatch. Expected to include "${expected}", got "${txt}"`);
    }
  }

  async addressInput(driver) {
    const el = await this._resolve(driver, locators.QuotePageLocators.address_input);
    await el.addValue(data.InputData.ProposedAddress);
  }

  async selectFirstAutoAddress(driver) {
    // Wait for the autoaddress suggestion container
    const container = await driver.$('.autoaddress-autocomplete');
    await container.waitForDisplayed({ timeout: 5000 });

    // Find the FIRST visible suggestion <li>
    const suggestions = await container.$$('li');

    for (const s of suggestions) {
        if (await s.isDisplayed()) {
            // DO NOT scroll, DO NOT hide keyboard
            // Direct JS click — mobile safe
            await driver.executeScript("arguments[0].click()", [s]);
            return;
        }
    }

    throw new Error("Address suggestion appeared but no visible <li> item to click");
}

  // Triggers the address suggestion dropdown (if your UI has a separate trigger)
 async clickAddressSuggestion(driver, text = "1 Dub") {
    // wait for any suggestion containing the text
    const selector = `//*[contains(text(), "${text}")]`;

    const el = await driver.$(selector);

    await el.waitForDisplayed({ timeout: 3000 });

    // Mobile-safe click
    await driver.executeScript("arguments[0].click()", [el]);
}

  // Select first suggestion if suggestions list is visible; else no-op (matches your Cypress logic)
  async addressSelect(driver) {
    await driver.pause(2000); // allow suggest list to populate
    const listSel = locators.QuotePageLocators.address_select; // container e.g. ".autoaddress-options-list"
    const listEl  = await driver.$(listSel);

    if (await listEl.isExisting() && await listEl.isDisplayed()) {
      // Find first visible <li>
      const items = await listEl.$$('li');
      for (const li of items) {
        if (await li.isDisplayed()) {
          await this._clickSafe(driver, li);
          return;
        }
      }
      // If none displayed, silently continue
    } else {
      // no suggestions visible → do nothing
    }
  }

  async addressConfirm(driver) {
    const el = await this._resolve(driver, locators.QuotePageLocators.address_confirm);
    await this._clickSafe(driver, el);
  }

  async proposerDOB(driver) {
    const el = await this._resolve(driver, locators.QuotePageLocators.proposer_dob);
    await el.setValue(data.InputData.DOB1);
  }

  async proposerEmployStatus(driver) {
    const el = await this._resolve(driver, locators.QuotePageLocators.employment_status);
    // Cypress: select('C') → choose by value "C"
    await el.selectByAttribute('value', 'C');
  }

  async licenceType(driver) {
    const el = await this._resolve(driver, locators.QuotePageLocators.licence_type);
    // Cypress: select('Full Irish') → choose by visible text
    await el.selectByVisibleText('Full Irish');
  }

  async licenceYears(driver) {
    const el = await this._resolve(driver, locators.QuotePageLocators.licence_years);
    // Cypress: select('5') → choose by visible text or value; pick the one your markup uses:
    await el.selectByAttribute("value", "5");
    // or: await el.selectByAttribute('value', '5');
  }

  async personalDetailsContinue(driver) {
    const el = await this._resolve(driver, locators.QuotePageLocators.personaldetails_continue);
    await this._clickSafe(driver, el);
    await driver.pause(2000); // buffer for next page
  }
}

module.exports = new PersonalDetails();