
module.exports = {
  
  customerPage: {
    customerNameDropdown: element(by.model('custId')),
    currencyTypeDropdown: element(by.model('currency')),
    depositButton: element(by.css('[ng-click="deposit()"]')),
    withdrawButton: element(by.css('[ng-click="withdrawl()"]')),
    transactionButton: element(by.css('[ng-click="transactions()"]')),
    resetTransaction: element(by.xpath("//button[@ng-click='reset()']")),
    amount: element(by.xpath("//input[@placeholder='amount']")),
    submitButton: element(by.xpath("//button[@type='submit']")),
    validationMessage: element(by.xpath("//span[@class='error ng-binding']")),
    welcomeMessage: element(by.xpath("//span[@class='fontBig ng-binding']")),
    balanceAmount: element(by.xpath("//div[@ng-hide='noAccount']//Strong[2]")),
    depositSuccessMsg: element(by.xpath("//span[text()='Deposit Successful']")),
  }

  // clickCustomerNameDropdown: function () {
  //   return this.click(this.customerPage.customerNameDropdown);
  // },

  // clickNameValueDropdown: function () {
  //   return this.click(this.customerPage.nameDropdownValue);
  // },
  // clickDepositButton: function () {
  //   return this.click(this.customerPage.depositButton);
  // },
  // clickWithdrawButton: function () {
  //   return this.click(this.customerPage.withdrawButton);
  // },
  // clickTransactionButton: function () {
  //   return this.click(this.customerPage.transactionButton);
  // },

  // sendAmount: function (int) {
  //   return this.sendKeys(this.customerPage.amount, int);
  // },

  // clickSubmitButton: function () {
  //   return this.customerPage.submitButton.click();
  // },


  // verifyWelcomeMessage: function (string) {
  //   return this.verifyWebElementText(this.customerPage.welcomeMessage, string)
  // },



  // verifyValidationMessage: function (string) {
  //   return this.verifyWebElementText(this.customerPage.validationMessage, string);
  // },


  // selectCustomerNameFromDropdown: function (string) {
  //   this.selectByValueFromDropdown(this.customerPage.customerNameDropdown, string);
  // },

  // selectcurrencyTypeDropdown: function (string) {
  //   this.selectByValueFromDropdown(this.customerPage.currencyTypeDropdown, string);
  // },
  // click: function (webElement) {
  //   webElement.click();
  //   Logger.info("Webelement : ["+webElement.locator().toString() + "] clicked");
  //   return browser.sleep(200);
  // },
  // selectByValueFromDropdown: function (webElement, string) {
  //   webElement.click();
  //   webElement.all(by.tagName('option')).each(function (element, index) {

  //     element.getText().then(function (text) {
  //       if (string === text) {
  //         element.click();
  //         Logger.info(string + " has been selected from dropdown [" +webElement.locator().toString()+"]");
  //       }
  //     });
  //   });
  //   return browser.sleep(200);
  // },

  // verifyWebElementText: function (webElement, string) {
  //   webElement.getText().then(function (text) {
  //     expect(string).to.equal(text);
  //     Logger.info("Webelement : ["+webElement.locator().toString() + "] contains text : " + string);
  //   });
  //   return browser.sleep(200);
  // },

  // sendKeys: function (webElement, string) {
  //   webElement.sendKeys(string);
  //   Logger.info("Text : '" + string + "' typed in Webelement[" + webElement.locator().toString()+"]");
  //   return browser.sleep(200);
  // },


};