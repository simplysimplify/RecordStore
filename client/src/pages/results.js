import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useMutation } from "@apollo/client";
// import { SEARCH } from "../utils/mutations";
import Search from "./Search"

import Card from "../components/Card";

export default function Results(props) {
  // const [searchData, setSearchData] = useState(
  //   props.data.length > 0 ? props.data : []
  // );
  return (
    <ul>
      {props.data.map((obj, i) => (
        <li key={i}>
          <Card obj={obj} />
        </li>
      ))}
    </ul>
  );
}
