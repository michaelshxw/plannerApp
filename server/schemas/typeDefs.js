const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    classes: [Classes]!
  }

  type Class {
    _id: ID
    
  }

  type Homework {

  }

  type Auth {

  }

  type Query {

  }

  type Mutation {
    addUser: 
    login:
    addClass:
    addHomework:
    removeClass:
    removeHomework: 
  }
`;

module.exports = typeDefs;