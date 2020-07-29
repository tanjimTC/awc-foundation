import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="section-contact" id="contact">
      <div className="header-section">
        <h2 className="title text-center">
          <span>Contact</span>
        </h2>
        <div className="text-center">
          <p className="description text-white">Get in touch!</p>
        </div>
      </div>
      <section className="bg-contact bg-section" id="contact">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-sm-6 contact-left">
              <div className="left-box">
                <h5 style={{ color: "#F70037" }}>
                  Abdul Wahid Chowdhury Foundation
                </h5>
                <br />
                <address>
                  <div className="d-flex">
                    <p>
                      <i className="fas fa-map-marker-alt"> </i>
                    </p>
                    <p>19/1 Rajargoli ,Sylhet</p>
                  </div>
                  <div className="d-flex">
                    <p>
                      <i className="fas fa-phone-alt"></i>
                    </p>
                    <p>
                      01715141738 <br /> 01672217641
                    </p>
                  </div>
                  <div className="d-flex">
                    <p>
                      <i className="fas fa-envelope"></i>
                    </p>
                    <p>monjurulchy71@gmail.com</p>
                  </div>
                  <div className="d-flex">
                    <p>
                      <i className="fas fa-university"></i>
                    </p>
                    <p>
                      SB A/C No-11521060010573 <br />
                      Prime Bank Limited,IBB, Ambarkhana, <br />
                      Sylhet Bangladesh.
                    </p>
                  </div>
                </address>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 contact-right">
              <form
                noValidate
                action="mailto:monjurulchy71@gmail.com"
                name="frm"
                method="post"
              >
                <div className="form-group has-feedback">
                  <label className="sr-only">First name:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="form-group has-feedback">
                  <label className="sr-only">Last name:</label>
                  <input
                    type="text"
                    name="surname"
                    className="form-control"
                    placeholder="Last name"
                    required
                  />
                </div>
                <div className="form-group has-feedback">
                  <label className="sr-only">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" name="comment" htmlFor="comment">
                    Comment:
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    id="comment"
                    placeholder="Description"
                  ></textarea>
                </div>
                <div className="contact-buttons pull-left">
                  <input type="submit" name="submit" value="Send" />
                  <input type="reset" value="Reset" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
