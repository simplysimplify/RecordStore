import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { SEARCH } from "../utils/mutations";
import { Card } from "../components/Card";
import API from "../utils/api";

import Results from "./results";


function Search(props) {
  const [formState, setFormState] = useState({
    query: "",
  });

  const [results, setResults] = useState([]);
  //  const [search, { error }] = useMutation(SEARCH);

  const [value, setValue] = useState("Search by  ");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (value === "Album") {
      const res = await API.getAlbum(formState.query);
      setResults([res]);
      } else {
      const res = await API.getArtist(formState.query);
      setResults(res);
    }
    setFormState({query: "",})
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSelect = (target) => {
    setValue(target);
  };

  // function renderResults() {
  //   return <Results props={handleFormSubmit()} />
  // }

  return (
    <>
      <div className="container col-12 d-flex flex-column text-center align-content-center justify-content-center">
        <h1 className="jumbotron">Search for an album or an artist!</h1>
        <DropdownButton
          onSelect={handleSelect}
          className="mb-1"
          id="dropdown-basic-button"
          title={value}
        >
          <Dropdown.Item eventKey="Artist">Artist</Dropdown.Item>
          <Dropdown.Item eventKey="Album">Album</Dropdown.Item>
        </DropdownButton>
        <input
          className="col-4 mx-auto text-center"
          placeholder="Search"
          name="query"
          type="text"
          id="query"
          value={formState.query}
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
      <Results data={results} />
    </>
  );
}

export default Search;
