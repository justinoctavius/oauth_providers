const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  if (req.user) {
    res.render('home', { user: req.user });
  } else {
    res.redirect('/login');
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/profile/', (req, res) => {});
module.exports = router;
