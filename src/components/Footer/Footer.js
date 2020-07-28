import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer text-center">
      <p>
        <b>
          &copy; {new Date().getFullYear()} Abdul Wahid Chowdhury Foundation -
          All Right Reserved
        </b>{" "}
        <br />
        Made with love by{" "}
        <span style={{ color: "#f70037", cursor: "pointer" }}>
          <b>Tanjim</b>
        </span>{" "}
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
