import React from "react";
import { Link } from "react-router-dom";

// var Discogs = require('disconnect').Client;

// var db = new Discogs().database();
// db.getRelease(176126, function(err, data){
// 	console.log(data);
// });

const Home = () => {
	return (
    <>
      <h1>Record Store</h1>
      <Link to="/login">Go to Login</Link>
      <Link to="/signup">Go to Signup</Link>
	  <Link to= "/search">Go to Search</Link>
      {/* ${Discogs} */}
    </>
  );
};

export default Home;