import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="section-About">
      <div className="header-section">
        <h2 className="title text-center">
          <span>About</span>
        </h2>
      </div>
      <div className="container">
        <div className="row  d-flex justify-content-center align-items-center about-container">
          <div className="col-md-7">
            <h3 className="pl-3">Abdul Wahid Choudhury </h3>
            <p style={{ color: "grey" }} className="pl-3">
              Bio: 1908 - 1990
            </p>{" "}
            <br /> <br />
            <p style={{ textAlign: "justify" }} className="px-3">
              Abdul Wahid Choudhury was a renowned headmaster in Sylhet, best
              known for dedicating his life to the educational development of
              his students and equally supporting his friends and family. <br />{" "}
              <br />
              Born into a highly distinguished family in the village of Kasbah
              Sunaitha Porogona, Nabiganj, Habiganj, Abdul Wahid Choudhury was
              the eldest son of Moulovi Sonuwar Ali Choudhury and Jahirunessa
              Choudhury. <br /> <br />
              Abdul Wahid Choudhury studied for his SSC (matriculation exam) and
              HSC exam under Calcutta University and completed his BA (Hons)
              degree in Political Economy and Political Philosophy also from
              Calcutta University in 1928. Further to this, he studied for his
              BT in Education Research and in Geography from Dhaka University in
              1933 achieving First Class. In 1935, he gained special training
              and a certificate in PT from the Assam Education Department.{" "}
              <br /> <br />
              Abdul Wahid Choudhury started his teaching career in 1929 in
              undivided Bharat where he taught for 19 years in numerous
              government schools in Assam Province. After partition he started
              teaching in various government schools in Sylhet District. <br />{" "}
              <br /> For his dedication, contribution and honesty in teaching,
              Abdul Wahid Choudhury was selected as The Best Headmaster amongst
              all high school headmasters and received an award (money and
              certificate) from the Education Board of Pakistan. Achieving this
              accolade meant he was later awarded the “Tamgha-e-khidmat” - the
              prestigious civilian honour from the President of Pakistan. <br />{" "}
              <br />
              After 39 years of commitment and service to the education system
              he retired from Sylhet Government Pilot High School in 1968.
              Sadly, he died in February 1990 in his residence surrounded by his
              family and extended family. In honour of his great service and his
              enormous contributions to education and society, we have dedicated
              this charity under his name to ensure that his legacy of helping
              others lives on.
            </p>{" "}
            <br /> <br />
          </div>
          <div className="col-md-5">
            <div className="Tamgha">
              <img
                src="https://dl.dropboxusercontent.com/s/5ny5zrkt36t7tmu/00000IMG_00000_BURST20200728214747577_COVER-01.jpeg?dl=0"
                alt="Tamgha-e-khidmat Award"
                className="img-fluid "
              />
            </div>
            <figcaption
              style={{ fontSize: "14px", marginTop: "4px", color: "grey" }}
            >
              Tamgha-e-khidmat Award
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
