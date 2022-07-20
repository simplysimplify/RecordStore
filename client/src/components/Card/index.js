import React from "react";
import { ADD_WISHLIST } from "../../utils/mutations";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const [addWishlist, {error}] = useMutation(ADD_WISHLIST);

export function ArtistCard({ obj }) {
  return (
    <Card.Body>
      <Card.Title>{obj.title}</Card.Title>
      <Card.Text>Artist: {obj.artist}</Card.Text>
      <Card.Text>Release Year: {obj.year}</Card.Text>
    </Card.Body>
  );
}

export function AlbumCard({ obj }) { 
  return (
    <Card.Body>
      <Card.Title>{obj.title}</Card.Title>
      {obj.artists.map((artist, i) => (
        <Card.Text key={i}>Artist: {artist.name}</Card.Text>
      ))}
      <Card.Text>Release Year: {obj.year}</Card.Text>
      <a href={obj.uri} rel="noopener" target="_blank">Click here to visit store page.</a>
      <Button onClick={handleAdd}>Add to Wishlist</Button>
    </Card.Body>
  );
}

function handleAdd(event, { obj }) {
  event.preventDefault();
  
}
