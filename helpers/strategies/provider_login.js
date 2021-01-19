const User = require('../../models/user');

const login = async (user, done) => {
  const { username, password, email, providerId, providerName } = user;
  const currentUser = await User.findOne({ $or: [{ username }, { email }] });
  if (currentUser) {
    done(null, currentUser);
  } else {
    const newUser = new User({
      username,
      providerId,
      email,
      password,
      providerName
    });
    await newUser.save();
    console.log('new user added', newUser);
    done(null, newUser);
  }
};

module.exports = login;
