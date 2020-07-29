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
                  <p>
                    <i className="fas fa-map-marker-alt"> </i> 19/1 Rajargoli ,
                    Sylhet
                  </p>
                  <p>
                    <i className="fas fa-phone-alt"></i>
                    01715141738 , 01672217641
                  </p>
                  <p>
                    <i className="fas fa-envelope"></i>
                    monjurulchy71@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-university"></i>
                    SB A/C No-11521060010573 <br />
                    <i
                      style={{ color: "transparent" }}
                      className="fas fa-university"
                    ></i>
                    Prime Bank Limited,IBB, Ambarkhana, <br />
                    <i
                      style={{ color: "transparent" }}
                      className="fas fa-university"
                    ></i>
                    Sylhet Bangladesh.
                  </p>
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
