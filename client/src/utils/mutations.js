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
 mutation addFavorite($artist: String, $album: String, $song: String) {
  search(artist: $artist, album: $album, song: $song) {
   token
   user {
    _id
   }
  }
 }
`;
