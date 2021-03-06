// An example configuration file

 //dependencies add of Report Generation
 var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },
 
  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['Elements4.js'],

  //To run different specs for an test
  suites:
  {
    SmokeSuite:['Chaining.js','All.js'],
    Regression:['Elements3'] 
  },

  // Use colors in the command line report.
  jasmineNodeOpts: {
    showColors: true, 
  },

  onPrepare : function()
  {
    browser.driver.manage().window().maximize();     

    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );

  },

    
   

 
};