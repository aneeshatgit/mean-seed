// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumServerJar: './selenium/selenium-server-standalone-2.37.0.jar',
  seleniumPort: 4444,
  chromeDriver: './selenium/chromedriver',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['tests/e2e/*.js'],
  baseUrl: 'http://localhost:'+ (process.env.HTTP_PORT || '3000'),

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    defaultTimeoutInterval: 30000
  }
};
