const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const { isEmail } = require('validator');

const classSchema = require('./Classes')
const homeworkSchema = require('./Homework')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'Email address is not valid. Please enter a valid email address.'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Classes'
    }
  ],
  homework: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Homework'
    }
  ]
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
