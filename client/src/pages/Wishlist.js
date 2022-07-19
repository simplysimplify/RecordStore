import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import { AlbumCard } from "../components/Card";

export default function Wishlist(props) {

  return (
    <Container className="d-flex flex-wrap justify-content-center">
      {props.data.map((obj, i) => (
        <Card key={i} className="m-2">
            <AlbumCard obj={obj} />
        </Card>
      ))}
    </Container>
  );
}
