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
    className: String
    teacherName: String
    time: Date
    building: String
    roomNumber: String
  }

  type Homework {
    _id: ID
    className: String
    dueDate: Date
    taskInfo: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String): User
    classes(username: String): [Classes]
    class(classId: ID!): Classes
    me: user
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addClass(className: String!, teacherName: String!, building: String!, roomNumber: String!): Classes
    addHomework(homeworkId: ID!, className: String!, dueDate: Date!, taskInfo: String!): Homework
    removeClass(classId: ID!): Classes
    removeHomework(homeworkId: ID!): Homework
  }
`;

module.exports = typeDefs;