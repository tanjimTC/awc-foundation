import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <section className="section-services" id="service">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-8">
            <div className="header-section">
              <h2 className="title text-center">
                Our <span>Services</span>
              </h2>
              <q className="description text-white">
                Thousands of candles can be lighted from a single candle, and
                the life of the candle will not be shortened. Happiness never
                decreases by being shared.
              </q>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="single-service">
              <div className="part-1">
                <img
                  src="https://dl.dropboxusercontent.com/s/x7jt4dxvo9ej93f/undraw_true_friends_c94g.svg?dl=0"
                  alt=""
                  className="img-fluid mb-5 p-2"
                  style={{ height: "200px", width: "100%" }}
                />
                <h3 className="title text-center">Education</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service">
              <div className="part-1">
                <img
                  src="https://dl.dropboxusercontent.com/s/d7hiox9xkak8s2i/undraw_medical_care_movn.svg?dl=0"
                  alt=""
                  className="img-fluid mb-5 p-2"
                  style={{ height: "200px", width: "100%" }}
                />
                <h3 className="title text-center">Health</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service">
              <div className="part-1">
                <img
                  src="https://dl.dropboxusercontent.com/s/na3e23fzk7czabi/undraw_smiley_face_lmgm.svg?dl=0"
                  alt=""
                  className="img-fluid mb-5 p-2"
                  style={{ height: "200px", width: "100%" }}
                />
                <h3 className="title text-center">Livlihood</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service">
              <div className="part-1">
                <img
                  src="https://dl.dropboxusercontent.com/s/z6bxgnef4a1o50l/undraw_super_woman_dv0y.svg?dl=0"
                  alt=""
                  className="img-fluid mb-5 p-2"
                  style={{ height: "200px", width: "100%" }}
                />
                <h3 className="title text-center">Women's empowerment</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service">
              <div className="part-1">
                <img
                  src="https://dl.dropboxusercontent.com/s/yxqrg4izsjduykd/undraw_deliveries_131a.svg?dl=0"
                  alt=""
                  className="img-fluid mb-5 p-2"
                  style={{ height: "200px", width: "100%" }}
                />
                <h3 className="title text-center">Disaster response</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service">
              <div className="part-1">
                <img
                  src="https://dl.dropboxusercontent.com/s/78j58rf57k8tgs5/undraw_Appreciation_sjc1.svg?dl=0"
                  alt=""
                  className="img-fluid mb-5 p-2"
                  style={{ height: "200px", width: "100%" }}
                />
                <h3 className="title text-center">Privileged Children</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
