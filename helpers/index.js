const googleStrategy = require('./strategies/googleStrategy');

const helpers = {
  googleStrategy: require('./strategies/googleStrategy'),
  localStrategy: require('./strategies/localStrategy'),
  facebookStrategy: require('./strategies/facebookStrategy'),
  githubStrategy: require('./strategies/githubStrategy')
};

module.exports = helpers;
