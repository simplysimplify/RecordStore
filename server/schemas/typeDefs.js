const { gql } = require("apollo-server-express");
const typeDefs = gql`
 type User {
  _id: ID!
  username: String
  password: String
  email: String
 }

 type Auth {
  token: ID!
  user: User
 }

 type Query {
  users: [User]
 }

 type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  updateUser(username: String, email: String, password: String): User
  login(email: String!, password: String!): Auth
 }
`;

module.exports = typeDefs;
