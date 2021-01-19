const mongoose = require('../database');
const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  providerId: {
    type: String
  },
  providerName: {
    type: String
  },
  password: {
    type: String
  }
});

UserSchema.pre('save', function (next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 14);
    next();
  }
  next();
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
