var homePage = require('../pageObjects/homePage');
var managerPage = require('../pageObjects/managerPage');

Given('User is on the Home page of the application', function () {
    expect(homePage.customerLoginButton.isPresent()).to.eventually.be.true;
    Logger.info('User is at the Home page');
    return browser.sleep(20);
  });

  When('A manager gets logged in & add a Customer with {firstName} {lastName} {zipCode}', function (firstName, lastName, zipCode) {
    homePage.clickManagerLogin();
    managerPage.clickAddCustomerButton();
    managerPage.sendFirstName(firstName);
    managerPage.sendLastName(lastName);
    managerPage.sendPostalCode(zipCode);
    managerPage.clickSubmitButton();
    return browser.sleep(20);
  });

  Then('Customer must get added in Customer List', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });