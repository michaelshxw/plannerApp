const { AuthenticationError } = require('apollo-server-express');
const { User, Classes, Homework } = require('../models');
const { signToken } = require('../utils/auth');

// resolvers object here
const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    classes: async () => {
      // code here
    },
    class: async () => {
      // code here
    },
    allHomework: async () => {
      // code here
    },
    homework: async () => {
      // code here
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("Error: You need to be logged in.");
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found. Please check your username and email and try again.');
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect password. Please try again.');
      }

      const token = signToken(user);
      return { token, user };
    },
    addClass: async () => {
      // code here
    },
    addHomework: async () => {
      // code here
    },
    removeClass: async () => {
      // code here
    },
    removeHomework: async () => {
      // code here
    },
  }
}

module.exports = resolvers;