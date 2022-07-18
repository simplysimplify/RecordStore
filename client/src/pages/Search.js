import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEARCH } from "../utils/mutations";

import Results from "./results"

const data = [
  {
    artistName: "Mistah F.A.B., The Mekanix", 
    album: "AmeriKKKa Dont Love Us",
    topHits: "Power",
    lastTour: "Look Outside",
  },
  {
    artistName: "E", 
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
  const [formState, setFormState] = useState({ artist: "", album: "", song: "" });
  const [search, {error}] = useMutation(SEARCH);

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
    <>
      <h2>Search</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="search">Artist Search:</label>
          <input
            placeholder="Artist"
            name="query"
            type="text"
            id="artist"
            onChange={handleChange}
          />
          <label htmlFor="search">Album Search:</label>
          <input
            placeholder="Album"
            name="query"
            type="text"
            id="album"
            onChange={handleChange}
          />
          <label htmlFor="search">Song Search:</label>
          <input
            placeholder="Song"
            name="query"
            type="text"
            id="song"
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
