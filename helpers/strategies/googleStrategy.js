const login = require('./provider_login');

const googleStrategy = (accessToken, refreshToken, profile, done) => {
  const { displayName, id, emails, provider } = profile;
  const user = {
    username: displayName,
    password: null,
    providerId: id,
    email: emails.filter((email) => email.verified === true)[0].value,
    providerName: provider
  };
  login(user, done);
};

module.exports = googleStrategy;
