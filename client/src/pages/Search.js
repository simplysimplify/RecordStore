import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { SEARCH } from "../utils/mutations";

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
          <br></br>
          <button type="submit">Submit</button>
        </Form>
      </Row>
    </Container>
  );
}

export default Search;
