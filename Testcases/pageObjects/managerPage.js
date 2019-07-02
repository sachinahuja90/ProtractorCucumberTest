'use strict';
module.exports = {

  managerPage: {

    addCustomerButton : element(by.css('[ng-click="addCust()"]')),
    firstName :  element(by.model('fName')),
    lastName : element(by.model('lName')),
    postalCode : element(by.model('postCd')),
    submitButton : element(by.xpath("//button[@type='submit']")),
    
  },

  clickAddCustomerButton: function() {
    return this.managerPage.addCustomerButton.click();
  },

  sendFirstName: function(fName) {
    return this.managerPage.firstName.sendKeys(fName);
  },
  sendLastName: function(lName) {
    return this.managerPage.lastName.sendKeys(lName);
  },
  sendPostalCode: function(zip) {
    return this.managerPage.postalCode.sendKeys(zip);
  },
  clickSubmitButton: function() {
    return this.managerPage.submitButton.click();
  },

};