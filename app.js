// config
var common = require('hearsay-common');
var config = require('./config');
var setup = require('./setup');

// dependencies
var mongoose = require('mongoose');
var debug = require('debug')('hearsay:collector:app');
var SiteScraper = require('congregator-sitescraper');
var RssReader = require('congregator-rssreader');

// create connection to db
setup.db(mongoose, config);

// app specific modules
var models = common.models(mongoose);
var services = require('./services')(models, config); // this can be mocked

// website scraper module
var siteScraper = new SiteScraper({
    getSources: services.source.getSites,
    handleEntry: services.entry.save,
    sockets: 15,
    waitTime: 10000,
    timeout: 5000
});

// rss feed reader/parser
var rssReader = new RssReader({
    getSources: services.source.getFeeds,
    handleEntry: services.entry.save,
    sockets: 15,
    waitTime: 10000,
    timeout: 5000
});

// run the process
require('./modules/run')(siteScraper, rssReader, config);
