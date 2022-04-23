import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">STAR WARS</span>
      </Link>
      <div className="ml-auto">
        <div class="btn-group">
          <button
            class="btn btn-primary btn-md dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Favorites
          </button>
          <div className="dropdown-menu">{/* //{store.favorites.map()} */}</div>
        </div>
      </div>
    </nav>
  );
};
