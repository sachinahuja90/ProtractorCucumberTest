'use strict';
module.exports = {

  homePage: {
    customerLoginButton: element(by.css('[ng-click="customer()"]')),
    managerLoginButton: element(by.css('[ng-click="manager()"]')),
    homeButton: element(by.css('[ng-click="home()"]')),
    
  },

  clickCustomerLogin: function () {
    this.homePage.customerLoginButton.click();
  },

  clickManagerLogin: function () {
    this.homePage.managerLoginButton.click();
  },

  clickHomeButton: function () {
    this.homePage.homeButton.click();
  },

  verifyCustomerLoginButton:function(){
    return expect(this.homePage.customerLoginButton.isDisplayed()).to.eventually.be.true;
  }
};