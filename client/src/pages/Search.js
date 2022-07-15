import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEARCH } from "../utils/mutations";

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
    </>
  );
}

export default Search;
