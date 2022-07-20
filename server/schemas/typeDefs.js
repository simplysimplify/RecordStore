const { gql } = require("apollo-server-express");
const typeDefs = gql`
type User {
    _id: ID!
    username: String
    password: String
    email: String
    wishlists: [Wishlist!]!
}

type Wishlist {
    album: String!
    artist: String!
    release: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    wishlists: [Wishlist]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addWishlist(artist: String, album: String, release: String):Wishlist
    updateWishlist(artist: String, album: String, release: String):Wishlist
}
`;

module.exports = typeDefs;
