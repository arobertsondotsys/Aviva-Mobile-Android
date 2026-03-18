const locators = require('./Page Elements/POMElements.json');

class BOActions {
  constructor() {
   this.sel = {
    cookieTitle: '#onetrust-policy-title',
    cookieAcceptBtn: '#onetrust-accept-btn-handler',

    quoteLinkBtn: locators?.QuotePageLocators?.quote_linkbtn
    };
  }

  // ---- utilities ----
  async _exists(driver, selector, timeout = 1000) {
    const el = await driver.$(selector);
    return el.waitForExist({ timeout }).then(() => true).catch(() => false);
  }

  async _visible(driver, selector, timeout = 1000) {
    const el = await driver.$(selector);
    return el.waitForDisplayed({ timeout }).then(() => true).catch(() => false);
  }

  async _jsClick(driver, element) {
    // Safe fallback when element click is intercepted on mobile
    await driver.executeScript('arguments[0].click();', [element]);
  }
  async _hideKeyboardIfVisible(driver) {
    try { await driver.hideKeyboard(); } catch (_) { /* ignore */ }
  }
  async _switchIntoCookieFrameIfAny(driver) {
  }

  async acceptCookiesIfShown(driver, { waitMs = 3000 } = {}) {
    // small grace wait like your Cypress code
    await driver.pause(waitMs);

    await this._switchIntoCookieFrameIfAny(driver);

    // Check if cookie title is visible
    const titleVisible = await this._visible(driver, this.sel.cookieTitle, 1500);
    if (!titleVisible) return; // quietly exit if not present

    const btn = await driver.$(this.sel.cookieAcceptBtn);

    // Try a normal click with mobile-safe pre-steps
    try {
      await btn.scrollIntoView();
      await this._hideKeyboardIfVisible(driver);
      await btn.waitForClickable({ timeout: 10000 });
      await btn.click();
    } catch (err) {
      // JS click fallback (handles overlays/intercepts)
      await this._jsClick(driver, btn);
    } finally {
      // If we switched to a cookie iframe, consider switching back:
      // await driver.switchToParentFrame();
    }
  }

    async tapQuoteLink(driver) {
        
        await driver.$(this.sel.quoteLinkBtn).click();
        const handles = await driver.getWindowHandles();
        await driver.switchToWindow(handles[handles.length - 1]);

        }
}

module.exports = new BOActions();