var cucumber = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var log4js = require('log4js');
var reporter = require('cucumber-html-reporter');
var util = require('./Testcases/Utilities/util');

//var PropertiesReader = require('properties-reader');
chai.use(chaiAsPromised);




exports.config = {

    // Selenium server path
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Disabled selenium promise manager
    SELENIUM_PROMISE_MANAGER: false,

    // set default timeout time
    getPageTimeout: 100000,

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // require feature files
    specs: ['./Testcases/features/*.feature'],

    capabilities: {
        'browserName': 'chrome'
    },

    // multiCapabilities: [
    //     {
    //         'browserName': 'chrome',
    //         'chromeOptions': {
    //             'args': ['show-fps-counter=true'],
    //             //'args': [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    //         }
    //     },
    //     {
    //         'browserName': 'firefox',
    //         'moz:firefoxOptions': {
    //             'args': ['--safe-mode'],
    //             //'args': [ "--headless" ]
    //         }
    //     },
    //     {
    //         'browserName': 'internet explorer',
    //     }
    // ],


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
        tags: '@Customer or @Deposit or @Withdraw or @manager',
        format: ['node_modules/cucumber-pretty', 'json:./reports/json/report.json'],
    },

    onPrepare: function () {
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

        global.Logger = log4js.getLogger('ProtractorTest');
    },

    onComplete: async function () {
        var options = await {
            theme: 'bootstrap',
            jsonFile: 'reports/json/report.json',
            output: 'reports/html/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "TEST",
                "Browser": "Chrome  75.0.3770.100",
                "Platform": "Windows 10",
                "Parallel": "Scenarios"
            }
        };
        await reporter.generate(options);
        await util.archiveReport('reports/html/cucumber_report.html');

    }
};

