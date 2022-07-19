import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Row from "react-bootstrap/Row";

export function ArtistCard({ obj }) {
    console.log("artist")
  return (
    <Card.Body>
      <Card.Title>{obj.title}</Card.Title>
      <Card.Text>Artist: {obj.artist}</Card.Text>
      <Card.Text>Release Year: {obj.year}</Card.Text>
    </Card.Body>
  );
}

export function AlbumCard({ obj }) {
    console.log(obj)
  return (
    <Card.Body>
      <Card.Title>{obj.title}</Card.Title>
      {obj.artists.map((artist, i) => (
        <Card.Text key={i}>Artist: {artist.name}</Card.Text>
      ))}
      <Card.Text>Release Year: {obj.year}</Card.Text>
    </Card.Body>
  );
}
