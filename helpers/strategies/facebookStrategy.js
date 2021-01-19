const login = require('./provider_login');

const facebookStrategy = (accessToken, refreshToken, profile, done) => {
  const { displayName, provider, id, emails } = profile;
  const user = {
    username: displayName,
    providerId: id,
    providerName: provider,
    email: emails[0].value,
    password: null
  };
  login(user, done);
};

module.exports = facebookStrategy;
