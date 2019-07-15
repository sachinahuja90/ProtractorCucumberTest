var cucumber = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var log4js = require('log4js');
var reporter = require('cucumber-html-reporter');
var util = require('./Testcases/Utilities/util');

chai.use(chaiAsPromised);
exports.config = {

    // Selenium server path
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Disabled selenium promise manager
    SELENIUM_PROMISE_MANAGER: false,

    // set  timeout time
    setPageTimeout: 100000,
    setDefaultTimeout: 60 * 1000,
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // require feature files
    specs: ['./Testcases/features/*.feature'],

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--disable-extensions=true']
        }
    },

    // ###### Multi browser Parallel Execution
    /* multiCapabilities: [
         {
             'browserName': 'chrome',
             'chromeOptions': {
                 'args': ['show-fps-counter=true'],
                 //'args': [ "--headless", "--disable-gpu", "--window-size=800,600" ]
             }
         },
         {
             'browserName': 'firefox',
             'moz:firefoxOptions': {
                'args': ['--safe-mode'],
                //'args': [ "--headless" ]
            }
        },
        {
            'browserName': 'internet explorer',
        }
    ],
    */

    // set to "custom" instead of cucumber.
    framework: 'custom',


    // Set cucumber options
    cucumberOpts: {
        // require step definitions
        require: [
            // Location of step definition file
            './Testcases/stepdefinations/*.js',
            './Testcases/Utilities/*.js'
        ],
        tags: '@Deposit',

        format: ['node_modules/cucumber-pretty', 'json:./reports/json/report.json'],
    },

    onPrepare: async function () {
        await browser.manage().window().maximize();
        global.applicationURL = 'http://www.way2automation.com/angularjs-protractor/banking/#/login';
        global.Given = cucumber.Given;
        global.When = cucumber.When;
        global.Then = cucumber.Then;
        global.expect = chai.expect;
        global.And = cucumber.And;
        global.After = cucumber.After;
        global.Before = cucumber.Before;
        log4js.configure({
            appenders: {
                everything: {
                    type: 'file',
                    filename: 'logs.log',
                    maxLogSize: 20480,
                    backups: 4,
                    compress: true
                }
            },
            categories: {
                default: { appenders: ['everything'], level: 'info' }
            }
        });
        global.commonLogger = log4js.getLogger('ProtractorTest');
        global.capabilities;
        await browser.getCapabilities().then(async (c) => {
            capabilities = await c;
        })
        global.Logger = log4js.getLogger('ProtractorTest - ' + capabilities.get('browserName'));
    },

    onComplete: async function () {
        var options = {
            theme: 'bootstrap',
            jsonFile: 'reports/json/report.json',
            output: 'reports/html/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "Test Environment": "TEST",
                "Browser": capabilities.get('browserName'),
                "Browser Version": capabilities.get('browserVersion'),
                "Platform": capabilities.get('platformName')
            }
        };
        await reporter.generate(options);
        await util.archiveReport('./reports/html/cucumber_report.html');
    }
};

