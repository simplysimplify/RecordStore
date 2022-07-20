const { gql } = require("apollo-server-express");
const typeDefs = gql`
type User {
    _id: ID!
    username: String
    password: String
    email: String
    wishlists: [Wishlist]
}

type Wishlist {
    title: String!
    artist: String!
    release: String!
    website: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    user: [User]
    wishlists: [Wishlist]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addWishlist(artist: String!, title: String!, release: String!, website: String!):Wishlist
}
`;

module.exports = typeDefs;
