exports.config = {
    seleniumServerJar: '../node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    chromeOnly: true,
    showColors: true

};