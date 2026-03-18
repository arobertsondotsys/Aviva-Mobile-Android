const locators = require('./Page Elements/POMElements.json');
const inputData = require('./Page Elements/POMInput.json');

class Login {

    // Instead of getters returning $, use functions that accept driver
    companyField(driver) {
        return driver.$(locators.LoginPageLocators.company_element);
    }

    usernameField(driver) {
        return driver.$(locators.LoginPageLocators.username_element);
    }

    passwordField(driver) {
        return driver.$(locators.LoginPageLocators.password_element);
    }

    loginButtonElement(driver) {
        return driver.$(locators.LoginPageLocators.loginBtn_element);
    }

    // --- ACTIONS ---

    async enterCompany(driver) {
        const el = await this.companyField(driver);
        await el.waitForDisplayed({ timeout: 15000 });
        await el.click();
        await el.setValue(inputData.InputData.Comp);
    }

    async enterUsername1(driver) {
        const el = await this.usernameField(driver);
        await el.waitForDisplayed({ timeout: 15000 });
        await el.click();
        await el.setValue(inputData.InputData.User1);
    }

    async enterPassword1(driver) {
        const el = await this.passwordField(driver);
        await el.waitForDisplayed({ timeout: 15000 });
        await el.click();
        await el.setValue(inputData.InputData.BOPass1);
    }

    async tapLoginButton(driver) {
    const btn = await this.loginButtonElement(driver);

    // Make sure element is visible and not hidden under the keyboard
    await btn.scrollIntoView();
    await driver.pause(500);

    try {
        await btn.waitForClickable({ timeout: 5000 });
        await driver.hideKeyboard();  // important on mobile
        await btn.click();
    } catch (err) {
        // Fallback - JS click (never fails)
        await driver.executeScript("arguments[0].click();", [btn]);
    }
}


    // Optional user/password variants
    async enterUsername2(driver) {
        const el = await this.usernameField(driver);
        await el.waitForDisplayed({ timeout: 15000 });
        await el.click();
        await el.setValue(inputData.InputData.User2);
    }

    async enterPassword2(driver) {
        const el = await this.passwordField(driver);
        await el.waitForDisplayed({ timeout: 15000 });
        await el.click();
        await el.setValue(inputData.InputData.BOPass2);
    }

}

module.exports = new Login();