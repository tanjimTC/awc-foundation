import React from "react";
import "./script";
import "./Navbar.css";
const Navbar = () => {
  const hide = () => {
    let aria = document
      .getElementById("collapsed")
      .getAttribute("aria-expanded");
    if (aria === "true") {
      let element = document.getElementById("navbarNav");
      element.classList.remove("show");
      let x = document.getElementById("collapsed");
      x.classList.add("collapsed");
      console.log("called", x, element);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand " href="/">
          <img
            src="https://dl.dropboxusercontent.com/s/lm4myg1l0js2ssn/rsz_1logo.png?dl=0"
            alt="logo"
            className="img-fluid pl-2"
          />
        </a>
        <button
          id="collapsed"
          className="navbar-toggler navbar-toggler-right collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon"></span> */}
          <span> </span>
          <span> </span>
          <span> </span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home" onClick={() => hide()}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service" onClick={() => hide()}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => hide()}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#photos" onClick={() => hide()}>
                Photos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => hide()}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
