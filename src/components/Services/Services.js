import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <section class="section-services">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-10 col-lg-8">
            <div class="header-section">
              <h2 class="title text-center">
                Our <span>Services</span>
              </h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some injected
                humour
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="single-service">
              <div class="part-1">
                <img
                  src="https://dl.dropboxusercontent.com/s/x7jt4dxvo9ej93f/undraw_true_friends_c94g.svg?dl=0"
                  alt=""
                  className="img-fluid mb-5 p-2"
                  style={{ height: "200px", width: "100%" }}
                />
                <h3 class="title text-center">Education</h3>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="single-service">
              <div class="part-1">
                <img
                  src="https://dl.dropboxusercontent.com/s/d7hiox9xkak8s2i/undraw_medical_care_movn.svg?dl=0"
                  alt=""
                  className="img-fluid mb-5 p-2"
                  style={{ height: "200px", width: "100%" }}
                />
                <h3 class="title text-center">Health</h3>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="single-service">
              <div class="part-1">
                <img
                  src="https://dl.dropboxusercontent.com/s/na3e23fzk7czabi/undraw_smiley_face_lmgm.svg?dl=0"
                  alt=""
                  className="img-fluid mb-5 p-2"
                  style={{ height: "200px", width: "100%" }}
                />
                <h3 class="title text-center">Livlihood</h3>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="single-service">
              <div class="part-1">
                <img
                  src="https://dl.dropboxusercontent.com/s/z6bxgnef4a1o50l/undraw_super_woman_dv0y.svg?dl=0"
                  alt=""
                  className="img-fluid mb-5 p-2"
                  style={{ height: "200px", width: "100%" }}
                />
                <h3 class="title text-center">Women's empowerment</h3>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="single-service">
              <div class="part-1">
                <img
                  src="https://dl.dropboxusercontent.com/s/yxqrg4izsjduykd/undraw_deliveries_131a.svg?dl=0"
                  alt=""
                  className="img-fluid mb-5 p-2"
                  style={{ height: "200px", width: "100%" }}
                />
                <h3 class="title text-center">Disaster response</h3>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="single-service">
              <div class="part-1">
                <img
                  src="https://dl.dropboxusercontent.com/s/78j58rf57k8tgs5/undraw_Appreciation_sjc1.svg?dl=0"
                  alt=""
                  className="img-fluid mb-5 p-2"
                  style={{ height: "200px", width: "100%" }}
                />
                <h3 class="title text-center">Privileged Children</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
