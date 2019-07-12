var cucumber = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var log4js = require('log4js');
var PropertiesReader = require('properties-reader');
chai.use(chaiAsPromised);


exports.config = {

    seleniumAddress : 'http://localhost:4444/wd/hub',
    // set to "custom" instead of cucumber.
    framework: 'custom',

    SELENIUM_PROMISE_MANAGER: false,

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // require feature files
    specs: ['./Testcases/features/*.feature'],

    cucumberOpts: {
        // require step definitions
        require: [
            './Testcases/stepdefinations/*.js', // Location of step definition file
            './Testcases/Utilities/*.js'
        ],
        tags:'@manager',
        format: ['node_modules/cucumber-pretty', 'json:./reports/json/report.json'],
    },

    beforeLaunch:function(){
        log4js.configure({
            appenders: [
                { type: 'log4js-protractor-appender', category: 'protractorLog4js' },
                {
                    type: "file",
                    filename: './logs/ExecutionLog.log',
                    category: 'protractorLog4js',
                    maxLogSize: 20480, 
                  backups: 4, 
                  compress: true 
                }
            ],
          });
    },

    onPrepare: function () {        
        global.properties = PropertiesReader('.../properties.file');
        global.applicationURL=//'http://www.way2automation.com/angularjs-protractor/banking/#/login';
        global.Given = cucumber.Given;
        global.When = cucumber.When;
        global.Then = cucumber.Then;
        global.expect = chai.expect;
        global.And = cucumber.And;
        global.After = cucumber.After;
        global.Before = cucumber.Before;
        
        global.Logger = log4js.getLogger('ProtractorTest');
        global.PropertiesReader = require('properties-reader');

        browser.refresh = function () {
            var self = this;
            return self.getCurrentUrl()
                .then(function (url) {
                    return self.get(url);
                });
        };
    },

    onComplete: function () {
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: 'reports/json/report.json',
            output: 'reports/html/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            screenshotsDirectory: 'screenshots/',
            storeScreenshots: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "TEST",
                "Browser": "Chrome  75.0.3770.100",
                "Platform": "Windows 10",
                "Parallel": "Scenarios"
            }
        };
        reporter.generate(options);
    }
};

