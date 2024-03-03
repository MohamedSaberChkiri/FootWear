const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [{
    productId: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0
    }
  }],

  resetToken : { type: String },
  resetTokenExpiration: {Date},
});

module.exports = mongoose.model('User', userSchema);

