const { Router } = require('express');
const passport = require('passport');

const route = Router();

route.get(
  '/github',
  passport.authenticate('github', {
    scope: ['user:email', 'user', 'user:follow', 'email']
  })
);

route.get(
  '/github/redirect',
  passport.authenticate('github', {
    failureRedirect: '/login',
    successRedirect: '/',
    failureFlash: true
  })
);

module.exports = route;
