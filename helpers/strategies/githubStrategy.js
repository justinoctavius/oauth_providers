const login = require('./provider_login');

const githubStrategy = (accessToken, refreshToken, profile, done) => {
  const { username, id, provider } = profile;
  const user = {
    username,
    password: null,
    providerId: id,
    email: '',
    providerName: provider
  };
  login(user, done);
};

module.exports = githubStrategy;
