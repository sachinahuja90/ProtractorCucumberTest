var hmPage = require('../pageObjects/homePage');
var cmPage = require('../pageObjects/customerPage');
var browserKeywords = require('../Utilities/browserKeywords');

When('User select his name {string} and Click Login Button', async function (string) {
    try {
        await browserKeywords.click(hmPage.homePage.customerLoginButton);
        await browserKeywords.selectByValueFromDropdown(cmPage.customerPage.customerNameDropdown, string);
        await browserKeywords.click(cmPage.customerPage.submitButton);
        return browser.sleep(200);
    }
    catch (e) {
        await Logger.error("Testcase Failed due to " + e);
        throw e;
    }

});

Then('User name {string} should be visible on the screen', async function (string) {
    try {
        await browserKeywords.verifyWebElementText(cmPage.customerPage.welcomeMessage, string);
        return browser.sleep(200);
    }
    catch (e) {
        await Logger.error("Testcase Failed due to " + e);
        throw e;
    }

});

When('A customer gets logged in as {string}', async function (string) {
    try {
        await browserKeywords.click(hmPage.homePage.customerLoginButton);
        await browserKeywords.selectByValueFromDropdown(cmPage.customerPage.customerNameDropdown, string);
        return browserKeywords.click(cmPage.customerPage.submitButton);;
    }
    catch (e) {
        await Logger.error("Testcase Failed due to " + e);
        throw e;
    }

});

When('Deposit {int} in his Account', async function (int) {
    try {
        await browserKeywords.click(cmPage.customerPage.depositButton);
        await browserKeywords.sendKeys(cmPage.customerPage.amount, int);
        await browserKeywords.click(cmPage.customerPage.submitButton);
        return browser.sleep(20);
    }
    catch (e) {
        await Logger.error("Testcase Failed due to " + e);
        throw e;
    }

});


When('Withdraw {int} from his Account', async function (int) {
    try {
        await browserKeywords.click(cmPage.customerPage.withdrawButton);
        await browserKeywords.sendKeys(cmPage.customerPage.amount, int);
        await browserKeywords.click(cmPage.customerPage.submitButton);
        return browser.sleep(20);
    }
    catch (e) {
        await Logger.error("Testcase Failed due to " + e);
        throw e;
    }

});

When('Withdraw amount greater than balance from his Account', async function () {
    try {
        await browserKeywords.click(cmPage.customerPage.withdrawButton);
        await cmPage.customerPage.balanceAmount.getText().then(async function (text) {
            await browserKeywords.sendKeys(cmPage.customerPage.amount, text + 12);
            await browserKeywords.click(cmPage.customerPage.submitButton);
        });
        return browser.sleep(20);
    }
    catch (e) {
        await Logger.error("Testcase Failed due to " + e);
        throw e;
    }

});


Then('User should get message as {string}', async function (string) {
    try {
        await browserKeywords.verifyWebElementText(cmPage.customerPage.validationMessage, string);
        return browser.sleep(20);
    }
    catch (e) {
        await Logger.error("Testcase Failed due to " + e);
        throw e;
    }

});


When('Navigate to Transactions Screen', async function () {
    try {
        await browserKeywords.click(cmPage.customerPage.transactionButton);
        return browser.sleep(20);
    }
    catch (e) {
        await Logger.error("Testcase Failed due to :" + e);
        throw e;
    }

});

Then('Reset button should be present if balance is greater than {int}',async  function (int) {
    try {
        return expect(cmPage.customerPage.resetTransaction.isDisplayed()).to.eventually.be.true;
    }
    catch (e) {
        await Logger.error("Testcase Failed due to :" + e);
        throw e;
    }

});