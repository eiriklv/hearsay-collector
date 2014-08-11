var url = require('url');
var async = require('async');
var sources = require('./sources');

exports = module.exports = function (config, origin) {
    return function (options, callback) {
        callback(null, sources[origin].filter(function (element) {
            return element.active;
        }));
    }
};