import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
      <Card.Text>Artist: {obj.artist}</Card.Text>
      <Card.Text>Release Year: {obj.year}</Card.Text>
    </Card.Body>
  );
}
