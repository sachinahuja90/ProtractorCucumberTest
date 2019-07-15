module.exports = {

  click: async function (webElement) {
    await webElement.click();
    await Logger.info("Webelement : [" + webElement.locator().toString() + "] clicked");
    return await browser.sleep(200);
  },

  selectByValueFromDropdown: async function (webElement, string) {
    await this.click(webElement);
    await webElement.all(by.tagName('option')).each(async function (element, index) {
      await element.getText().then(async function (text) {
        if (string === text) {
          await element.click();
          await Logger.info(string + " has been selected from dropdown [" + webElement.locator().toString() + "]");
        }
      });
    });


    return await browser.sleep(200);
  },

  verifyWebElementText: async function (webElement, string) {
    await webElement.getText().then(async function (text) {
      await expect(string).to.equal(text);
      await Logger.info("Validation Pass => Webelement : [" + webElement.locator().toString() + "] contains text : " + string);
    });
    return await browser.sleep(200);
  },

  sendKeys: async function (webElement, string) {
    try {
      await webElement.sendKeys(string);
      await Logger.info("Text : '" + string + "' typed in Webelement[" + webElement.locator().toString() + "]");
      return await browser.sleep(200);
    }
    catch (e) {
      await Logger.error("Not able to type Text : '" + string + "' in Webelement[" + webElement.locator().toString() + "]");
      await Logger.error(e);
    }

  },

  verifyElementPresence: async function (webElement) {
    try {
      await expect(webElement.isDisplayed()).to.eventually.be.true;
      await Logger.info("Validation Pass => Webelement[" + webElement.locator().toString() + "] present on screen");
      return await browser.sleep(200);
    }
    catch (e) {
      await Logger.error("Validation Fail => Webelement[" + webElement.locator().toString() + "] not found");
      await Logger.error(e);
    }
  },
};