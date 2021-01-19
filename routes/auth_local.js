const { Router } = require('express');
const router = Router();
const passport = require('passport');
const { register } = require('../controllers');

//login view
router.get('/local-login', async (req, res) => {
  if (!req.user) {
    res.render('local_login');
  } else {
    res.redirect('/');
  }
});
//register view
router.get('/local-register', (req, res) => {
  res.render('local_register');
});
//local register
router.post('/local-register', register);
//local authentication
router.post(
  '/local-login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

module.exports = router;
