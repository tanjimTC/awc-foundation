import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div class="mainbox1">
      <div class="mainbox">
        <div class="err">4</div>
        <i class="far fa-question-circle fa-spin"></i>
        <div class="err2">4</div>
        <div class="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <Link to="/">home</Link> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
