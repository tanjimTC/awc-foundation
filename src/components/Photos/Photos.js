import React from "react";
import "./Photos.css";
import { Link } from "react-router-dom";
const Photos = () => {
  return (
    <div className="wrapper">
      <div class="board">
        <h1>Page under construction</h1>
        <p>Regards, Tanjim</p>
        <Link
          style={{ textDecoration: "none" }}
          to="/"
          className="photo-button"
        >
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default Photos;
