import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer text-center">
      <p>
        <b>
          &copy; {new Date().getFullYear()} Abdul Wahid Chowdhury Foundation -
          All Right Reserved
        </b>{" "}
        <br />
        Made with
        <img
          src="https://cdn3.iconfinder.com/data/icons/christmas-winter/234/christmas-winter-xmas-holidays-december_68-32.png"
          alt="love"
          className="img-fluid"
        />
        by{" "}
        <a
          style={{
            textDecoration: "none",
            color: "#f70037",
            cursor: "pointer",
            marginRight: "7px",
          }}
          href="https://www.linkedin.com/in/its-tanjim-chowdhury/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Tanjim</b>
        </a>
        <img
          src="https://cdn1.iconfinder.com/data/icons/ui-basic-8/64/x-20-16.png"
          alt="Tanjim"
          className="img-fluid"
        />
      </p>
    </div>
  );
};

export default Footer;
