exports = module.exports = function (Entry, config) {
    return {
        save: require('./save')(Entry, config)
    };
};