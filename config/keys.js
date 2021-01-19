const google = {};
const facebook = {};
const cookie = {};
const github = {};

google.clientID = process.env.GOOGLE_CLIENT_ID;
google.clientSecret = process.env.GOOGLE_CLIENT_SECRET;

facebook.clientID = process.env.FACEBOOK_CLIENT_ID;
facebook.clientSecret = process.env.FACEBOOK_CLIENT_SECRET;

github.clientID = process.env.GITHUB_CLIENT_ID;
github.clientSecret = process.env.GITHUB_CLIENT_SECRET;

cookie.secret = process.env.COOKIE_SECRET || '123';

module.exports = {
  google,
  facebook,
  github,
  cookie
};
