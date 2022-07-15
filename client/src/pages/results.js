import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useMutation } from "@apollo/client";
// import { SEARCH } from "../utils/mutations";

import Card from "../components/card";


export default function Results(props) {
    const [searchData, setSearchData] = useState(props.data.length > 0 ? props.data : [])
    console.log(props);
    return (
        <ul>
            {searchData.map((obj, i) => (
                <li key= {i}>
                    <Card
                    obj={obj}
                    />
    </li>
))}

        </ul>
    )
}
