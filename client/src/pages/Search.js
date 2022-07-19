import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { SEARCH } from "../utils/mutations";
import { Card } from "../components/Card";
import { getArtist, getAlbum } from "../utils/api";
import Results from "./results"

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
    submitted: false,
  });
  //  const [search, { error }] = useMutation(SEARCH);

  const [value, setValue] = useState("Search by  ")

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormState({ submitted: true })
    if (value === "Album") {
      return getAlbum(formState.query);
    } else {
      return getArtist(formState.query);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSelect = (target) => {
    setValue(target)
  }

  function renderResults() {
    return <Results props={handleFormSubmit()} />
  }

  return (
    <>
      <div className="container col-12 d-flex flex-column text-center align-content-center justify-content-center">
        <h1 className="jumbotron">Record Store!</h1>
          <DropdownButton onSelect={handleSelect} className="mb-1" id="dropdown-basic-button" title={value}>
            <Dropdown.Item eventKey="Artist">Artist</Dropdown.Item>
            <Dropdown.Item eventKey="Album">Album</Dropdown.Item>
          </DropdownButton>
        <input
          className="col-4 mx-auto text-center"
          placeholder="Search"
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
      <div>
        {formState.submitted && renderResults()}
      </div>
    </>
  );
}

export default Search;
