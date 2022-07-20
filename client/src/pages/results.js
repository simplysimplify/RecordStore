import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { ArtistCard, AlbumCard } from "../components/Card";

export default function Results(props) {
  return (
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
  );
}
