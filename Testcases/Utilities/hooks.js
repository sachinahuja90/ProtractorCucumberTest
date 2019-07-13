
Before(async function (scenario) {
    await Logger.info("######## Start testcase : "+scenario.pickle.name+"########"); 
    await browser.get(applicationURL);
    
    await Logger.info("User Navigated to : "+applicationURL); 
    await browser.sleep(100);
});

After(async function (scenario) {
    if (await scenario.result.status === 'failed') {
        var attach = this.attach;
        return await browser.takeScreenshot().then(async function (png) {
            await Logger.info("######## End testcase : "+scenario.pickle.name+" ########");     
            var decodedImage = new Buffer(png, "base64");
            return await attach(decodedImage, "image/png");
        });
    }
    await Logger.info("######## End testcase : "+scenario.pickle.name+" ########");     
});
