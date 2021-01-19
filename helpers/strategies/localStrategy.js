const User = require('../../models/user');

const localStrategy = async (username, password, done) => {
  const currentUser = await User.findOne({
    $or: [{ username }, { email: username }]
  });
  if (currentUser) {
    if (!currentUser.providerId) {
      if (currentUser.comparePassword(password)) {
        done(null, currentUser);
      } else {
        done(null, false, { message: 'Username or password incorrect' });
      }
    } else {
      done(null, false, { message: 'you should login with your provider' });
    }
  } else {
    done(null, false, { message: 'Username or password incorrect' });
  }
};

module.exports = localStrategy;
