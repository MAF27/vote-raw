var config = {};

config.mongoURI = process.env.MONGOLAB_RUI || 'mongodb://localhost:27017/voteRaw';

module.exports = config;