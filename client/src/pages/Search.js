import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { SEARCH } from "../utils/mutations";
import Card from "../components/card";
import { getArtist, getAlbum } from "../utils/api";

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
    query: "",
  });
  //  const [search, { error }] = useMutation(SEARCH);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //   const mutationResponse = await search({
    //     variables: {
    //      query: "query"
    //    },
    //   });
    //   localStorage.setItem("search_term", mutationResponse);
    getAlbum(formState.query);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <div className="container col-12 d-flex flex-column text-center align-content-center justify-content-center">
        <h1 className="jumbotron">Record Store!</h1>
          <DropdownButton className="mb-1" id="dropdown-basic-button" title="Search By">
            <Dropdown.Item href="">Artist</Dropdown.Item>
            <Dropdown.Item href="">Album</Dropdown.Item>
          </DropdownButton>
        <input
          className="col-4 mx-auto text-center"
          placeholder="Enter Artist/Album Here!"
          name="query"
          type="text"
          id="query"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="col-2 mx-auto mt-1"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
      <div></div>
    </>
  );
}

export default Search;
