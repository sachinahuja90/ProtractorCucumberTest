
Before(function (scenario) {
    Logger.info("######## Start testcase : "+scenario.pickle.name+"########"); 
    browser.get(applicationURL);
    Logger.info("User Navigated to : "+applicationURL); 
    browser.sleep(100);
});

After(function (scenario) {
    if (scenario.result.status === 'failed') {
        var attach = this.attach;
        return browser.takeScreenshot().then(function (png) {
            var decodedImage = new Buffer(png, "base64");
            return attach(decodedImage, "image/png");
        });
    }
    Logger.info("######## End testcase : "+scenario.pickle.name+" ########");     
});
