# Protractor
Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor is a Node.js program built on top of WebDriverJS. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

# E2E Test Automation using Protractor

## Features supported
1. Dependency management using package.json file.
2. E2E GUI Automation by using Protractor-Cucumber Framework.
3. BDD implementation by using Cucumber and Gerkin format.
4. GIT as distributed version-control system.
5. Modular Approach via Page Object model, Common methods and Hooks implementation.
6. Browser supported - Chrome, IE and Firefox.
7. Parallel Execution on Multiple Browsers.
8. Headless browsers.
9. HTML Report by including cucumber-html-reporter.
10. Logging implementation via Log4j and log4js-protractor-appender.
11. Chai is used for assertions.
12. Capture screen shots for failed testcases.
13. Parameterized Test.
14. Testcases are created by using regular expressions so that same step definition for multiple scenarios.
15. Archived Last execution results.
---
16. Exception handling


## Pre-requisite
1. Node js

## How to install & Run using command prompt
1. Please extract the project at your desired path.
2. Open Terminal and Run "npm install"
3. Run command "webdriver-manager start"
4. On another Terminal Run command "npm test" or "protractor config.js"
5. All the automated test cases in the config.js will be executed.


## To view Report 
1. Go to the root directory under `reports/html/cucumber_report.html`
2. All past reports are saved under `reports/html/<yyyy-mm-dd hh-mm-ss>.zip/cucumber_report.html` 


Note: Test cases are available in `.\Testcases.xlsx` for your reference.

## Git Repository for the source.
`https://github.com/sachinahuja90/ProtractorCucumberTest.git`
