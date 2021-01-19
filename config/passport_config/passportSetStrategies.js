const helpers = require('../../helpers');
const { google, facebook, github } = require('../keys');

//strategies
const GoogleStrategy = require('passport-google-oauth20');
const LocalStrategy = require('passport-local');
const FacebookStrategy = require('passport-facebook');
const GithubStrategy = require('passport-github2');

const passportSetStrategies = (passport) => {
  // local strategy
  passport.use(new LocalStrategy(helpers.localStrategy));
  //google strategy
  passport.use(
    new GoogleStrategy(
      {
        callbackURL: '/auth/google/redirect',
        clientID: google.clientID,
        clientSecret: google.clientSecret
      },
      helpers.googleStrategy
    )
  );
  // facebook strategy
  passport.use(
    new FacebookStrategy(
      {
        callbackURL: '/auth/facebook/redirect',
        clientID: facebook.clientID,
        clientSecret: facebook.clientSecret,
        profileFields: ['id', 'displayName', 'email']
      },
      helpers.facebookStrategy
    )
  );
  // github strategy
  passport.use(
    new GithubStrategy(
      {
        callbackURL: '/auth/github/redirect',
        clientID: github.clientID,
        clientSecret: github.clientSecret,
        profileFields: ['id', 'displayName', 'email']
      },
      helpers.githubStrategy
    )
  );
};

module.exports = passportSetStrategies;
