module.exports = {
  
    click: async function (webElement) {
        await webElement.click();
        await Logger.info("Webelement : ["+webElement.locator().toString() + "] clicked");
        return await  browser.sleep(200);
      },
      
      selectByValueFromDropdown: function (webElement, string) {
         this.click(webElement);
        webElement.all(by.tagName('option')).each(function (element, index) {
    
            element.getText().then(function (text) {
            if (string === text) {
                element.click();
                Logger.info(string + " has been selected from dropdown [" +webElement.locator().toString()+"]");
            }
          });
        });
        return browser.sleep(200);
      },
    
      verifyWebElementText: async function (webElement, string) {
        await webElement.getText().then(async function (text) {
          await expect(text).to.include(string);
          Logger.info("Webelement : ["+webElement.locator().toString() + "] contains text : " + string);
        });
        return browser.sleep(200);
      },
    
      sendKeys: function (webElement, string) {
        webElement.sendKeys(string);
        Logger.info("Text : '" + string + "' typed in Webelement[" + webElement.locator().toString()+"]");
        return browser.sleep(200);
      },

      verifyElementPresence:function(webElement){
        expect(webElement.isDisplayed()).to.eventually.be.true;        
        Logger.info("Webelement[" + webElement.locator().toString()+"] present on screen");
        return browser.sleep(200);
      },


    
  };


