import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEARCH } from "../utils/mutations";

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
]

function Search(props) {
  const [formState, setFormState] = useState({ query: "" });
  const [search] = useMutation(SEARCH);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
      <h2>Search</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="search">Search:</label>
          <input
            placeholder="First"
            name="query"
            type="text"
            id="search"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Results
        data={data}
      />
      {/* Results({data: data}) */}
    </>
  );
}

export default Search;
