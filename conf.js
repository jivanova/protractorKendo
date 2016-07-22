exports.config = {
  seleniumArgs: ['IEDriverServer.exe'],
  specs: ['tests/grid.js'],
  framework: 'jasmine',
  multiCapabilities: [
    {'browserName': 'chrome'},
    {'browserName': 'firefox'},
    {'browserName': 'internet explorer'}
  ],  
  maxSessions: 1,
  jasmineNideOpts: {
    showColors: true
  }
};