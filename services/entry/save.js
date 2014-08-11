var async = require('async');

exports = module.exports = function (Entry, config) {
    return function(entry, callback) {
        // async control flow
        async.waterfall([
            // check if article exists
            function (callback) {
                Entry.findOne({ guid: entry.guid }, function (err, result) {
                    callback(err, !!result);
                });
            },
            // create new entry in db, or update existing (when using upsert, the defaults are ignored, hence the use of findOne/update/save)
            function (exists, callback) {
                if (exists) {
                    entry.createdAt = new Date();

                    Entry.update({ guid: entry.guid }, entry, { upsert: true }, function (err, numberAffected, raw) {
                        callback(err, false);
                    });
                } else {
                    entry.posted = new Date(); // overwrite

                    var newEntry = new Entry(entry);

                    newEntry.save(function (err, product) {
                        var error = err ? 'error saving article: ' + err : null;
                        callback(error, product);
                    });
                }
            }
        ], function (err, newEntry) {
            callback(err, newEntry);
        });
    };
};