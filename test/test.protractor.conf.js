exports.config = {
    framework: 'jasmine',
    // seleniumServerJar: '../node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/*.js'],
    // chromeOnly: true,
    showColors: true,
    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': require('phantomjs-prebuilt').path,
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true
    },
    allScriptsTimeout: 30000

};