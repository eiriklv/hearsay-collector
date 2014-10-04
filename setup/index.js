var debug = require('debug')('hearsay:collector:setup');

module.exports.db = function(mongoose, config) {
    function connect() {
        mongoose.connect(config.get('mongo_url'));
    }

    // connection is open and ready
    mongoose.connection.on('open', function(ref) {
        debug('open connection to mongo server.');
    });

    // mongoose is connected to server
    mongoose.connection.on('connected', function(ref) {
        debug('connected to mongo server.');
    });

    // mongoose has disconnected
    mongoose.connection.on('disconnected', function(ref) {
        debug('disconnected from mongo server.');

        debug('retrying connection in 2 seconds..');
        setTimeout(function() {
            connect();
        }.bind(this), 2000);
    });

    // mongoose connection has closed
    mongoose.connection.on('close', function(ref) {
        debug('closed connection to mongo server');
    });

    // error has occured for mongoose connection
    mongoose.connection.on('error', function(err) {
        debug('error connection to mongo server!');
        debug(err);
    });

    // mongoose is reconnecting
    mongoose.connection.on('reconnect', function(ref) {
        debug('reconnect to mongo server.');
    });

    // initial connect
    connect();
};
