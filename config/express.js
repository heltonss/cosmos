'use strict';

const express = require('express');

module.exports = function() {
    let app = express();

    app.set('port', 3000);
    app.use(express.static('./build'))

    return app;
}