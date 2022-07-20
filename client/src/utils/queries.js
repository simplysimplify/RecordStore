import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      username
      wishlist {
        title
        artist
        release
        website
      }
    }
  }
`;
