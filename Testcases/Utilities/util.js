var zlib = require('zlib');
var fs = require('fs');
var dateTime = require('node-datetime');
const { zip } = require('zip-a-folder');

var util = function () {
    this.zip = async function (source) {
        var destination = await source + '.zip'
        try {
            await zip(source, destination);
            await commonLogger.info("Zipped folder : " + applicationURL);
        }
        catch (err) {
        
            await commonLogger.error(err);
            throw e;
        }
    };

    this.copyFile = async function (source, destination) {
        try{
        await fs.copyFile(source, destination, async (err) => {
            if (err) {
                await commonLogger.error(err);
                throw err;
            }
            await commonLogger.log('Archived html report');
        });
    }
    catch (err) {
        
        await commonLogger.error(err);
        throw e;
    }
    };


    this.archiveReport = async function (report) {
        try {
            var temp = await report.split("/");
            var curDT = await this.getCurrentDateTime();
            var cr = await curDT.replaceAll(" ", "_");
            var cr1 = await cr.replaceAll(":", "_");
            cr1 = await cr1.replaceAll("-", "_");
            var arcFolder = await report.replace(temp[temp.length - 1], cr1);
            await this.createFolder(arcFolder);
            var destination = await arcFolder + "/" + temp[temp.length - 1];
            await this.copyFile(report, destination);
            await this.zip(arcFolder);
            await this.deleteFolder(arcFolder);
        }
        catch (e) {
        
            await commonLogger.error(err);
            throw e;

        }
    }

    String.prototype.replaceAll = async function (search, replacement) {
        try{
        var target = this;
        return await target.replace(new RegExp(search, 'g'), replacement);
        }
        catch (err) {
        
            await commonLogger.error(err);
            throw e;
        }
    };

    this.getCurrentDateTime = async function () {
        try{
        var dt = await dateTime.create();
        return await dt.format('Y-m-d H:M:S');
        }
        catch (err) {
        
            await commonLogger.error(err);
            throw e;
        }
    };

    this.createFolder = async function (folder) {
        try {
            if (await !fs.existsSync(folder)) {
                await fs.mkdirSync(folder);
                await commonLogger.log("Folder " + folder + " created successfully.");
            }
        } catch (err) {
        
            await commonLogger.error(err);
            throw e;
        }
    }

    this.deleteFolder = async function (path) {
        try{
        if (await fs.existsSync(path)) {
            await fs.readdirSync(path).forEach(async function (file, index) {
                var curPath = path + "/" + file;
                if (await fs.lstatSync(curPath).isDirectory()) { // recurse
                    await deleteFolder(curPath);
                } else { // delete file
                    await fs.unlinkSync(curPath);
                }
            });
            await fs.rmdirSync(path);
        }
        await commonLogger.log("Folder : " + folder + " deleted successfully.");
    }
    catch(e){
        
        await commonLogger.error(err);
        throw e;
    }
    };

    this.createReportFolder = async function () {
        try {
            var curDT = await this.getCurrentDateTime();
            var cr = await curDT.replaceAll(" ", "_");//
            var cr1 = await cr.replaceAll(":", "_");//
            cr1 = await cr1.replaceAll("-", "_");
            var arcFolder = "./reports/";
            await this.createFolder(arcFolder);
            await this.createFolder(arcFolder + cr1);
        }
        catch (err) {
        
            await commonLogger.error(err);
            throw e;
        }
    }

    this.createBlankJson = function (file) {
        // appendFile function with filename, content and callback function
        fs.appendFile(file, '', function (err) {
            if (err) throw err;
            commonLogger.log('File is created successfully.');
        });
    }
};

module.exports = new util();