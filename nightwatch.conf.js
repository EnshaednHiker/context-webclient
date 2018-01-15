"use strict";
// "babel": "^6.23.0",
//run postinstall script in package.json prior to running tests the first time

require ('dotenv').config();

var selenium = require('selenium-download');
var path = require('path');
var BINPATH = './node_modules/nightwatch/bin/';


require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) { // got it?
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function(error) {
      if (error) throw new Error(error); // no point continuing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});


var config = {
    "src_folders" : ["tests/e2e"],
    "output_folder" : "reports",
    "custom_commands_path" : "",
    "custom_assertions_path" : "",
    "page_objects_path" : "",
    "globals_path" : "",

    "selenium" : {
      "start_process" : true,
      "server_path" : "./node_modules/nightwatch/bin/selenium.jar",  //"./node_modules/nightwatch/bin/selenium.jar",  //"./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.4.0.jar",
      "log_path" : "./reports",
      "port" : 4444,
      "host" : "127.0.0.1",
      "cli_args" : {
        "webdriver.chrome.driver" : "./node_modules/nightwatch/bin/chromedriver"
      }
    },
    
    "test_settings" : {
      "default": {
        "launch_url": "http://localhost:3000/#",
        "selenium_port": 4444,
        "selenium_host": "127.0.0.1",
        "silent": true,
        "screenshots": {
          "enabled": false, 
          "path": ""
        }, 
        "globals": {
          "waitForConditionTimeout": 15000 // on localhost sometimes internet is slow so wait...
        },
        "desiredCapabilities": {
        "browserName": "chrome",
        "marionette": true
        },
        "javascriptEnabled": true,
        "acceptSslCerts": true
        },

      "local": {
        "launch_url": "http://localhost:3000",
        "selenium_port": 4444,
        "selenium_host": "127.0.0.1",
        "silent": true,
        "screenshots": {
          "enabled": false, 
          "path": ""
        }, 
        "globals": {
          "waitForConditionTimeout": 15000 // on localhost sometimes internet is slow so wait...
        },
        "desiredCapabilities": {
        "browserName": "chrome",
        "marionette": true
        },
        "javascriptEnabled": true,
        "acceptSslCerts": true
        }
      }
    }
      
    
  


module.exports = config;