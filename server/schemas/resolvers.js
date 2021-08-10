const { AuthenticationError } = require('apollo-server-express');
const { User, Classes, Homework } = require('../models');
const { signToken } = require('../utils/auth');

// resolvers object here
const resolvers = {
  Query: {
    users: async () => {
      return
      // code here
    },
    user: async () => {
      return
      // code here
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
        return User.findOne({ _id: context.user._id }).populate('????');
      }
      throw new AuthenticationError("Error: You need to be logged in.");
    }
  },
  Mutation: {
    addUser: async () => {
      // code here
    },
    login: async () => {
      // code here
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