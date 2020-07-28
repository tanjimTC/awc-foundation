import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="container">
      <div className="row  d-flex justify-content-center align-items-center header-container">
        <div className="col-md-6">
          <h1 class="intro__title">
            Abdul Wahid Chowdhury <br /> Foundation
          </h1>{" "}
          <br />
          <i class="intro__subtitle">
            Helping the distress people and trying to contribute to the socity
            to fight against poverty and make a educated nation....
          </i>{" "}
          <br /> <br />
          <a style={{ textDecoration: "none" }} href="#" class="button">
            See our work
          </a>
        </div>
        <div className="col-md-6 logo-image">
          <img
            class="intro__illustration img-fluid "
            src="https://dl.dropboxusercontent.com/s/2f77jq4dl0dozjh/undraw_black_lives_matter_rndk.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
