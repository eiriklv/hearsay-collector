// catch all errors with no handler
process.on('uncaughtException', function (err) {
    debug('Caught exception without specific handler: ' + util.inspect(err));
    debug(err.stack, 'error');
    process.exit(1);
});

// dependencies
var util = require('util');
var convict = require('convict');
var debug = require('debug')('hearsay:collector:configuration');

// application config
var config = module.exports = convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development'],
        default: 'development',
        env: 'NODE_ENV'
    },
    port: {
        doc: 'The server port to bind.',
        format: 'port',
        default: 3000,
        env: 'PORT'
    },
    mongo_url: {
        doc: 'MongoDB url to connect to (including db reference)',
        default: 'mongodb://localhost/content-aggregator',
        env: 'MONGO_URL'
    },
    redis_url: {
        doc: 'Redis url to connect to (including auth string)',
        default: 'redis://localhost:6379',
        env: 'REDIS_URL'
    }
});

debug(util.inspect(process.env, { colors: true })); // print the environment for debugging

config.validate();