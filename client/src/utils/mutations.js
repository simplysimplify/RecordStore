import { gql } from "@apollo/client";

export const LOGIN = gql`
 mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
   token
   user {
    _id
   }
  }
 }
`;

export const ADD_USER = gql`
 mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
   token
   user {
    _id
    username
   }
  }
 }
`;

export const ADD_WISHLIST = gql`
 mutation wishlist($artist: String!, $title: String!, $release: String!, $website: String!) {
  addWishlist(artist: $artist, title: $title, release: $release, website: $website) {
    title
    artist
    release
    website
  }
 }
`;