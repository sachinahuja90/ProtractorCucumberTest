'use strict';
module.exports = {

  managerPage: {

    addCustomerButton : element(by.css('[ng-click="addCust()"]')),
    openAccountButton : element(by.css('[ng-click="openAccount()"]')),
    customerButton : element(by.css('[ng-click="showCust()"]')),
    firstName :  element(by.model('fName')),
    lastName : element(by.model('lName')),
    postalCode : element(by.model('postCd')),
    submitButton : element(by.xpath("//button[@type='submit']")),
  },

  // clickAddCustomerButton: function() {
  //   return this.managerPage.addCustomerButton.click();
  // },

  // clickOpenAccountButton: function() {
  //   return this.managerPage.openAccountButton.click();
  // },

  // clickCustomerButton: function() {
  //   return this.managerPage.customerButton.click();
  // },

  // sendFirstName: function(fName) {
  //   return this.managerPage.firstName.sendKeys(fName);
  // },
  // sendLastName: function(lName) {
  //   return this.managerPage.lastName.sendKeys(lName);
  // },
  // sendPostalCode: function(zip) {
  //   return this.managerPage.postalCode.sendKeys(zip);
  // },
  // clickSubmitButton: function() {
  //   return this.managerPage.submitButton.click();
  // },

};