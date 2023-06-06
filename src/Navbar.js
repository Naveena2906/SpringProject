import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import { Link } from "react-router-dom";
import { useStates } from "./States";
const Navbar = () => {
  const { editMovie, setEditMovie, movies, setMovies,searchvalue, setSearchvalue, getAllMovies } =
    useStates();
  useEffect(() => {
    getAllMovies();
  }, [searchvalue]);

  return (
    <div className="navbar-container">
      <div className="but-nav">
        <input className="nav-search" type="text"  onChange={(e) => setSearchvalue(e.target.value)} placeholder="search books"/>
      </div>
    </div>
  );
};

export default Navbar;
