import React from "react";
import "./Gallary.css";
const Gallary = () => {
  return (
    <div className="section-gallery">
      <div className="header-section">
        <h2 className="title text-center">
          <span>Photos</span>
        </h2>
        <div className="text-center">
          <q className="description">...Because every picture tells story</q>
        </div>
      </div>
      <div className=" gallery-images">
        <img
          src="https://mediaprocessor.websimages.com//https://abdulwahidchowdhuryfoundation.webs.com/photos/DSC00255%20(FILEminimizer).JPG"
          alt="AWC-Foundation"
          className="img-fluid"
        />
        <img
          src="https://mediaprocessor.websimages.com//https://abdulwahidchowdhuryfoundation.webs.com/photos/DSC00248%20(FILEminimizer).JPG"
          alt="AWC-Foundation"
          className="img-fluid"
        />
        <img
          src="https://mediaprocessor.websimages.com//https://abdulwahidchowdhuryfoundation.webs.com/photos/100_2149%20(FILEminimizer).JPG"
          alt="AWC-Foundation"
          className="img-fluid"
        />
        <img
          src="https://mediaprocessor.websimages.com//https://abdulwahidchowdhuryfoundation.webs.com/photos/DSC00177%20(FILEminimizer).JPG"
          alt="AWC-Foundation"
          className="img-fluid"
        />
        <img
          src="https://mediaprocessor.websimages.com//https://memberfiles.freewebs.com/90/80/96618090/photos/undefined/IMG00054-20121019-1637.jpg"
          alt="AWC-Foundation"
          className="img-fluid"
        />
        <img
          src="https://mediaprocessor.websimages.com//https://memberfiles.freewebs.com/90/80/96618090/photos/undefined/IMG00139-20131203-1002.jpg"
          alt="AWC-Foundation"
          className="img-fluid"
        />
      </div>{" "}
      <br /> <br />
      <div className="text-center">
        <a
          style={{ textDecoration: "none" }}
          href="haha"
          className="gallery-button"
        >
          See More photos
        </a>
      </div>
    </div>
  );
};

export default Gallary;
