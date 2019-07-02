'use strict';
module.exports = {

  customerPage: {

     customerNameDropdown : element(by.model('custId')),
     //nameDropdownValue :  element(by.xpath("//option[@value='1']")),
     depositButton : element(by.css('[ng-click="deposit()"]')),
     withdrawButton : element(by.css('[ng-click="withdrawl()"]')),
     transactionButton : element(by.css('[ng-click="transactions()"]')),
     amount : element(by.xpath("//input[@placeholder='amount']")),
     submitButton : element(by.xpath("//button[@type='submit']")),
     validationMessage : element(by.xpath("//span[@class='error ng-binding']")),
   },
 
   clickCustomerNameDropdown: function() {
     return this.customerPage.customerNameDropdown.click();
   },
 
   clickNameValueDropdown: function() {
     return this.customerPage.nameDropdownValue.click();
   },
   clickDepositButton: function() {
     return this.customerPage.depositButton.click();
   },
   clickDepositButton: function() {
    return this.customerPage.depositButton.click();
    },
   sendAmount: function() {
     return this.customerPage.amount.sendKeys("122001");
   },
   clickSubmitButton: function() {
     return this.customerPage.submitButton.click();
   },

  
};