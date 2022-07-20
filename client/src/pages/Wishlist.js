import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { ArtistCard, AlbumCard } from "../components/Card";


export default function Wishlist(props) {

  const [wishlist, setWishlist] = useState()

  return (
    <>
    <Container className="d-flex flex-wrap justify-content-center">
      <h1 className="jumbotron ">Wishlist!</h1>
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
