Before(function (scenario) {
    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    browser.sleep(1000);

});

After(function (scenario) {
    console.log("I am inside After hooks");
    if (scenario.result.status === 'failed') {
        var attach = this.attach;
        return browser.takeScreenshot().then(function (png) {
            var decodedImage = new Buffer(png, "base64");
            return attach(decodedImage, "image/png");
        });
    }
});
