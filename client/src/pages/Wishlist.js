import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { ArtistCard, AlbumCard } from "../components/Card";

<<<<<<< HEAD
=======
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

import { AlbumCard, ArtistCard } from "../components/Card";
>>>>>>> f936962b92d72af57054eb6d62745443176d2647

export default function Wishlist(props) {
  const { loading, data } = useQuery(QUERY_USER);
  const userData = data?.user;

  if (loading) {
    return <h1>LOADING</h1>;
  }
  console.log(userData);

<<<<<<< HEAD
  const [wishlist, setWishlist] = useState()

  return (
    <>
=======
  return (
>>>>>>> f936962b92d72af57054eb6d62745443176d2647
    <Container className="d-flex flex-wrap justify-content-center">
      <h1 className="jumbotron ">Wishlist!</h1>

      {userData.wishlist && userData.wishlist.map((obj, i) => (
        <Card key={i} className="m-2">
          <ArtistCard obj={obj} />
        </Card>
      ))}
    </Container>
    <Container className="d-flex flex-wrap justify-content-center">
      {props.data.map((obj, i) => (
          <Card key={i} className="m-2">
            { obj.artists ?
            <AlbumCard obj={obj} />
            :
            <ArtistCard obj={obj} /> }
          </Card>
      ))}
    </Container>
  </>
  );
}
