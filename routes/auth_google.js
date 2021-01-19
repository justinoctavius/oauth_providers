const { Router } = require('express');
const router = Router();
const passport = require('passport');

//google authentication
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
//google redirect
router.get(
  '/google/redirect',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

module.exports = router;
