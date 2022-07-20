import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
          <a href="/wishlist">
            Wishlist
          </a>
        </>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1 list-group-item">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1 list-group-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1 className="header">
        <Link to="/">Record Store!</Link>
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
