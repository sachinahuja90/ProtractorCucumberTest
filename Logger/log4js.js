var log4js = require('log4js');
log4js.configure({
    appenders: {
      everything: { 
          type: 'file', 
          filename: 'all-the-logs.log', 
          maxLogSize: 2048, 
          backups: 4, 
          compress: true 
        }
    },
    categories: {
      default: { appenders: [ 'everything' ], level: 'debug'}
    }
  });

