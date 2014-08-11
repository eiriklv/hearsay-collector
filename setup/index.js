var url = require('url');

module.exports.db = function (db, config){
    db.connect(config.get('mongo_url'));
};
