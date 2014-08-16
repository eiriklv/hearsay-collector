exports = module.exports = function (Source, config) {
    return {
        getSites: require('./get')(config, 'site'),
        getFeeds: require('./get')(config, 'feed'),
        getMappings: require('./get')(config, 'json')
    };
};