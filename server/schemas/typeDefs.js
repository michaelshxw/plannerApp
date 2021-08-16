const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Class {
    _id: ID
    name: String
    teacher: String
    time: String
    length: String
    building: String
    room: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    classes(username: String): [Class]
    class(classId: ID!): Class
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addClass(name: String!, teacher: String!, time: String!, building: String!, length: String!, room: String!): Class
    removeClass(classId: ID!): Class
  }
`;

module.exports = typeDefs;
