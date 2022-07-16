import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { SEARCH } from "../utils/mutations";


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
    localStorage.setItem("search_term", mutationResponse);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/signup">Go to Signup</Link>
      <br></br>
      <Link to="/login">Go to Login</Link>

      <h2>Record Store</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Search Artist:</label>
          <input
            placeholder="Artist"
            name="artist"
            type="text"
            id="artist"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Search Album:</label>
          <input
            placeholder="Album"
            name="album"
            type="text"
            id="album"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Search Song:</label>
          <input
            placeholder="Song"
            name="song"
            type="text"
            id="song"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
