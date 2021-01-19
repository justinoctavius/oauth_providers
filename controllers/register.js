const User = require('../models/user');

const register = async (req, res) => {
  const { username, password, email } = req.body;
  const currentUser = await User.findOne({
    $or: [{ username }, { email }]
  });
  if (currentUser) {
    res.status(500).json({ msg: 'This user already exists' });
  } else {
    const newUser = new User({
      username,
      password,
      email,
      providerId: null,
      providerName: 'Local'
    });
    await newUser.save();
    console.log('new user added using local', newUser);
    res.status(200).json({ msg: 'User created successfully' });
  }
};

module.exports = register;
