var hmPage = require('../pageObjects/homePage');
var cmPage = require('../pageObjects/customerPage');
var browserKeywords = require('../Utilities/browserKeywords');

When('User select his name {string} and Click Login Button', async function (string) {
    await browserKeywords.click(hmPage.homePage.customerLoginButton);
    await browserKeywords.selectByValueFromDropdown(cmPage.customerPage.customerNameDropdown, string);
    await browserKeywords.click(cmPage.customerPage.submitButton);
    return browser.sleep(200);   
});

Then('User name {string} should be visible on the screen', async function (string) {
    await browserKeywords.verifyWebElementText(cmPage.customerPage.welcomeMessage, string);
    return browser.sleep(200);
});

When('A customer gets logged in as {string}', async function (string) {
    await browserKeywords.click(hmPage.homePage.customerLoginButton);
    await browserKeywords.selectByValueFromDropdown(cmPage.customerPage.customerNameDropdown, string);
    return browserKeywords.click(cmPage.customerPage.submitButton);;
});

When('Deposit {int} in his Account', async function (int) {
    await browserKeywords.click(cmPage.customerPage.depositButton);
    await browserKeywords.sendKeys(cmPage.customerPage.amount, int);
    await browserKeywords.click(cmPage.customerPage.submitButton);
    return browser.sleep(20);
});


When('Withdraw {int} from his Account', async function (int) {
    await browserKeywords.click(cmPage.customerPage.withdrawButton);
    await browserKeywords.sendKeys(cmPage.customerPage.amount, int);
    await browserKeywords.click(cmPage.customerPage.submitButton);
    return browser.sleep(20);
});

When('Withdraw amount greater than balance from his Account', async function () {
    await browserKeywords.click(cmPage.customerPage.withdrawButton);
    await cmPage.customerPage.balanceAmount.getText().then(async function (text) {
        await browserKeywords.sendKeys(cmPage.customerPage.amount, text + 12);
        await browserKeywords.click(cmPage.customerPage.submitButton);
    });
    return browser.sleep(20);
});


Then('User should get message as {string}', async function (string) {
    await browserKeywords.verifyWebElementText(cmPage.customerPage.validationMessage, string);
    return browser.sleep(20);
});


When('Navigate to Transactions Screen', async function () {
    await browserKeywords.click(cmPage.customerPage.transactionButton);
    return browser.sleep(20);
});

Then('Reset button should be present if balance is greater than {int}', function (int) {
    return expect(cmPage.customerPage.resetTransaction.isDisplayed()).to.eventually.be.true;
});