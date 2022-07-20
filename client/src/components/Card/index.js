import React from "react";
import { ADD_WISHLIST } from "../../utils/mutations";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useMutation } from "@apollo/client";




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

  const [addWishlist, { error }] = useMutation(ADD_WISHLIST);

  if (error) {
    console.log(JSON.stringify(error))
  }

  function handleAdd(event) {
    event.preventDefault();
    const sendData = {
      artist: obj.artists[0].name,
      title:obj.title,
      release: obj.year+"",
      website: obj.uri
    }
    addWishlist({
      variables: sendData
    })
    console.log(sendData)
  }

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