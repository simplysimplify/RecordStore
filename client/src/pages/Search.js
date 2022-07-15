import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEARCH } from "../utils/mutations";

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
    </>
  );
}

export default Search;
