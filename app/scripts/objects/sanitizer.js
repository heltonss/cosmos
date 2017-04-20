'use strict'

function Sanitizer() {
    this.sanitizer = function (string) {
        if (typeof string === 'string') {
            var clean = string.trim().toLowerCase();
            return clean;
        } else {
            var obj = string;
            var prop;
            var clean = {}
            for (prop in obj) {
                var str = obj[prop];
                clean[prop] = str.toString().toLowerCase().trim();
            }
            return clean;
        }
    }
}