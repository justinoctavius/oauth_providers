const { Router } = require('express');
const passport = require('passport');
const router = Router();

router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

router.get(
  '/facebook/redirect',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

module.exports = router;
