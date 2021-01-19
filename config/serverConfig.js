const express = require('express');
const passport = require('passport');
const flash = require('connect-flash');
const cookieSession = require('cookie-session');
const { cookie } = require('./keys');

const serverConfig = (app) => {
  //MIDDLERWARES
  app.use(express.json());
  //view engine
  app.set('view engine', 'ejs');
  //cookies
  app.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: [cookie.secret]
    })
  );
  //passport
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  //ROUTES
  app.use('/', require('../routes'));
  app.use('/auth', require('../routes/auth_google'));
  app.use('/auth', require('../routes/auth_local'));
  app.use('/auth', require('../routes/auth_facebook'));
  app.use('/auth', require('../routes/auth_github'));
};

module.exports = serverConfig;
