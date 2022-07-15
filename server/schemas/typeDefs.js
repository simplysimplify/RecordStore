const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    username: String
    password: String
    email: String
  }

  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;
