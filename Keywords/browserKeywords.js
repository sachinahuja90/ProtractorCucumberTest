var browserKeywords = function () {

    click = function (webElement) {
        webElement.click();
        Logger.info(webElement+" clicked");
        return browser.sleep(2000);
    };

    selectByValueFromDropdown = function (webElement, string) {
        webElement.click();
        console.log("dropdonw clicked");
        webElement.all(by.tagName('option')).each(function (element, index) {

            element.getText().then(function (text) {
                if (string === text) {
                    element.click();
                    Logger.info(string +" has been selected from dropdown "+webElement);
                }
            });
        });
        
        return browser.sleep(2000);
    }

    verifyWebElementText = function (webElement, string) {
        webElement.getText().then(function (text) {
            expect(string).to.equal(text);
            Logger.info(webElement +" contains text : "+string);
        });
        return browser.sleep(2000);
    }

    sendKeys=function(webElement, string){
        webElement.sendKeys(string);
        Logger.info("Text : '"+string+"' typed in "+webElement);
        return browser.sleep(2000);
    }

};
module.exports = new browserKeywords();