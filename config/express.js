'use strict';

const express = require('express');

module.exports = function() {
    let app = express();

    app.set('port', (process.env.PORT || 5000s));
    app.use(express.static('./build'))

    return app;
}