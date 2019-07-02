var cucumber = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var log4js = require('log4js');
chai.use(chaiAsPromised);


exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // require feature files
    specs: ['./Testcases/features/*.feature'],

    cucumberOpts: {
        // require step definitions
        require: [
            './Testcases/stepdefinations/*.js' // Location of step definition file
        ],
        format: ['node_modules/cucumber-pretty', 'json:./reports/json/report.json'],
    },
    onPrepare: function () {
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
                  maxLogSize: 2048, 
                  backups: 4, 
                  compress: true 
                }
            },
            categories: {
              default: { appenders: [ 'everything' ], level: 'info'}
            }
          });
        
        
        global.Logger = log4js.getLogger('ProtractorTest');
    },

    onComplete: function () {
        var reporter = require('cucumber-html-reporter');

        var options = {
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
        reporter.generate(options);
    }
};

