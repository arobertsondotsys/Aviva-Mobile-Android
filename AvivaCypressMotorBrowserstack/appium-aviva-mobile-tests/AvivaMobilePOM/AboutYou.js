const locators = require('./Page Elements/POMElements.json');
const inputData = require('./Page Elements/POMInput.json');

class BOAboutYou {

    // --- utility to make elements mobile-safe ---
    async _resolve(driver, selector) {
        const el = await driver.$(selector);
        await el.waitForExist({ timeout: 15000 });
        await el.scrollIntoView();
        try { await driver.hideKeyboard(); } catch (_) {}
        return el;
    }

    // --- TITLE VALIDATION ---
    async aboutYouTitle(driver) {
        const el = await this._resolve(driver, locators.QuotePageLocators.aboutyou_title);
        const text = await el.getText();
        if (!text.includes(inputData.HeadingData.AboutYou_Heading)) {
            throw new Error(`AboutYou title mismatch. Expected: ${inputData.HeadingData.AboutYou_Heading}, Got: ${text}`);
        }
    }

    // --- SELECT TITLE ("Mr", "Mrs", etc.) ---
    async proposerTitle(driver) {
        const el = await this._resolve(driver, locators.QuotePageLocators.proposer_mr);
        await el.selectByIndex(1);     // matches Cypress `select(1)`
    }

    async proposerForename(driver) {
        const el = await this._resolve(driver, locators.QuotePageLocators.proposer_forename);
        await el.setValue(inputData.InputData.ProposedForename);
    }

    async proposerSurname(driver) {
        const el = await this._resolve(driver, locators.QuotePageLocators.proposer_surname);
        await el.setValue(inputData.InputData.ProposedSurname);
    }

    async proposerEmail(driver) {
        const el = await this._resolve(driver, locators.LoginPageLocators.proposeremail_element);
        await el.setValue(inputData.InputData.Email1);
    }

    async proposerNoEmail(driver) {
        const el = await this._resolve(driver, locators.LoginPageLocators.proposernoemail);
        await el.click();
    }

    async phone(driver) {
        const phone = '07' + Array.from({ length: 8}, () => Math.floor(Math.random() * 10)).join('');
        const el = await this._resolve(driver, locators.LoginPageLocators.phone_element);
        await el.setValue(phone);
    }

    async aboutYouContinue(driver) {
        await driver.pause(1000); // small mobile buffer
        const el = await this._resolve(driver, locators.QuotePageLocators.aboutyou_continue);

        try {
            await el.waitForClickable({ timeout: 6000 });
            await el.click();
        } catch {
            await driver.executeScript("arguments[0].click();", [el]);
        }
    }
}

module.exports = new BOAboutYou();