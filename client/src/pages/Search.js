import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { SEARCH } from "../utils/mutations";

import Results from "./results";

const data = [
  {
    artistName: "Wiz Khalifa",
    album: "Rolling Papers",
    topHits: "Black and Yellow",
    lastTour: "Denver",
  },
  {
    artistName: "Empire of the Sun",
    album: "walking on a Dream",
    topHits: "Walking on a Dream",
    lastTour: "Denver",
  },
  {
    artistName: "Drama",
    album: "Dance Without Me",
    topHits: "Dance Without Me",
    lastTour: "Denver",
  },
  {
    artistName: "Baynk",
    album: "Adolescence",
    topHits: "Naked",
    lastTour: "Denver",
  },
  {
    artistName: "Louis the child",
    album: "single",
    topHits: "Every Color",
    lastTour: "Denver",
  },
  {
    artistName: "EST Gee",
    album: "Last Ones Left",
    topHits: "Ice Talk ft. 42 Dugg",
    lastTour: "Denver",
  },
];

function Search(props) {
  const [formState, setFormState] = useState({
    artist: "",
    album: "",
    song: "",
  });
  const [search, { error }] = useMutation(SEARCH);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await search({
      variables: {
        artist: formState.artist,
        album: formState.album,
        song: formState.song,
      },
    });
    const token = mutationResponse.data.search.token;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
      <Row>
        <h1>Record Store</h1>
      </Row>
      <Row>
        <Form onSubmit={handleFormSubmit}>
          <Form.Label htmlFor="search">Artist Search:</Form.Label>
          <br></br>
          <input
            placeholder="Artist"
            name="query"
            type="text"
            id="artist"
            onChange={handleChange}
          />
          <br></br>
          <Form.Label htmlFor="search">Album Search:</Form.Label>
          <br></br>
          <input
            placeholder="Album"
            name="query"
            type="text"
            id="album"
            onChange={handleChange}
          />
          <br></br>
          <Form.Label htmlFor="search">Song Search:</Form.Label>
          <br></br>
          <input
            placeholder="Song"
            name="query"
            type="text"
            id="song"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </Form>
        <Results data={data} />
        {/* Results({data: data}) */}
      </Row>
    </Container>
  );
}

export default Search;
