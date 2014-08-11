exports = module.exports = function (models, config) {
    return {
        entry: require('./entry')(models.Entry, config),
        source: require('./source')(models.Source, config)
    };
};