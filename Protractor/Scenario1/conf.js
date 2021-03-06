// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['scenario1.js'],
  directConnect: true,
  /*multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]*/

  capabilities: {
    browserName: 'chrome'
  },

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};