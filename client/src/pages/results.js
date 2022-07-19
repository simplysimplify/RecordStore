import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useMutation } from "@apollo/client";
// import { SEARCH } from "../utils/mutations";
import Search from "./Search";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { ArtistCard, AlbumCard } from "../components/Card";

export default function Results(props) {
  // const [searchData, setSearchData] = useState(
  //   props.data.length > 0 ? props.data : []
  // );
  return (
    <Container className="d-flex flex-wrap justify-content-center">
      {props.data.map((obj, i) => (
          <Card key={i} className="m-2">
            <ArtistCard obj={obj} />
          </Card>
      ))}
    </Container>
  );
}
