var homePage = require('../pageObjects/homePage');
var managerPage = require('../pageObjects/managerPage');
var customerPage = require('../pageObjects/customerPage');
var browserKeywords = require('../Utilities/browserKeywords');
Given('User is on the Home page of the application', async function () {
  await browserKeywords.verifyElementPresence(homePage.homePage.customerLoginButton);
  return await browser.sleep(20);
});



When('A manager gets logged in', async function () {
  await browserKeywords.click(homePage.homePage.managerLoginButton);
  return await  browser.sleep(20);
});


When('Add a Customer with {string}, {string}, {string}', async function (string, string2, string3) {
  await browserKeywords.click(managerPage.managerPage.addCustomerButton);
  await browserKeywords.sendKeys(managerPage.managerPage.firstName,string);
  await browserKeywords.sendKeys(managerPage.managerPage.lastName,string2);
  await browserKeywords.sendKeys(managerPage.managerPage.postalCode,string3);
  await browserKeywords.click(managerPage.managerPage.submitButton);
  await browser.sleep(20);
  return await browser.switchTo().alert().accept();
});


Then('Customer [{string} {string}] must get added in Customer List', async function (string, string2) {
  await browserKeywords.click(managerPage.managerPage.customerButton);
  await expect(element(by.xpath("//tbody/tr/td[text()='"+string+"']")).isDisplayed()).to.eventually.be.true;
  return await browser.sleep(20);
});




When('Open account for a Customer with name as  {string} and Currency type as {string}', async function (string, string2) {
  await browserKeywords.click(managerPage.managerPage.openAccountButton);
  await browserKeywords.selectByValueFromDropdown(customerPage.customerPage.customerNameDropdown,string);
  await browserKeywords.selectByValueFromDropdown(customerPage.customerPage.currencyTypeDropdown,string2);
  await browserKeywords.click(customerPage.customerPage.submitButton);
  await browser.sleep(200);
  return await browser.switchTo().alert().accept();
});

Then('Account must get added in Customer List with name as {string}',async function (string) {
  await browserKeywords.click(managerPage.managerPage.customerButton);
  await element(by.xpath("(//tbody/tr/td[text()='"+string.split(" ")[0]+"']/following-sibling::td)[3]")).getText().then(async function(text){
    if(isNaN(text.split(" ")[0])){
      const exists = true;
      await expect(!exists).to.throw('Account not created');
    }
  });
  return await browser.sleep(2000);
});

