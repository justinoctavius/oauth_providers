const User = require('../../models/user');
const passportSetStrategies = require('./passportSetStrategies');
const passport = require('passport');

//serialize
passport.serializeUser((user, done) => {
  done(null, user.id);
});
//deserialize
passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, (err, user) => {
    done(err, user);
  });
});

passportSetStrategies(passport);
