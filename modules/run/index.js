var async = require('async');
var http = require('http');

exports = module.exports = function (scraper, rssReader, config) {
    async.series({
        startHttpServer: function (callback) {
            if('heroku' == config.get('env')){
                // http server to be able to keep the process alive on heroku free apps
                http.createServer(function (req, res) {
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end('Keep Alive, Stay Cool..\n');
                }).listen(config.get('port'));
            }
            callback();
        },
        collectAndDistributeContent: function (callback) {
            async.parallel({
                runSiteScraper: function (callback) {
                    async.forever(scraper.run.bind(scraper), function (err) {
                        callback(err);
                    });
                },
                runRssFeedParser: function (callback) {
                    async.forever(rssReader.run.bind(rssReader), function (err) {
                        callback(err);
                    });
                }
            }, function (err, result) {
                callback(err);
            });
        }
    }, function (err, results) {
        if (err) {
            debug(util.inspect(err), 'error');
            process.exit(1);
        }
        else {
            console.log('??? - this should never happen');
        }
    });
};
