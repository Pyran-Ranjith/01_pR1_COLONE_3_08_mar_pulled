import React from "react";

const ContactUs = () => {
  return (
    <>
      <div class="contact-us section" id="contact">
        <div class="row">
          <div class="col-lg-12">
            <div class="contact-us-content">
              <div class="row">
                <div class="col-lg-8">
                  <form id="contact-form" action="" method="post">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="section-heading em">
                          <h3>Contact Us</h3>
                        </div>
                      </div>

                      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <noscript>contactus phone, email and whtsapp</noscript>

                        <noscript>phone</noscript>
                        <div class="col-md-4 mb-5 mb-md-0">
                          <div class="card">
                            <img
                              src="assets/images/telephone.png"
                              class="card-img-top"
                              alt="telephone.png"
                            />

                            <div class="card-body">
                              <h1 class="card-title pricing-card-title">
                                <small class="text-body-secondary fw-light"></small>
                              </h1>
                              <ul class="list-unstyled mt-3 mb-4">
                                <li>Contact Number</li>
                                <li></li>
                                <li>025 - xxxxxxxx</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <noscript>email</noscript>
                        <div class="col-md-4 mb-5 mb-md-0">
                          <div class="card">
                            <img
                              src="assets/images/e-mail.png"
                              class="card-img-top"
                              alt="e-mail.png"
                            />
                            <div class="card-body">
                              <h1 class="card-title pricing-card-title">
                                <small class="text-body-secondary fw-light"></small>
                              </h1>
                              <ul class="list-unstyled mt-3 mb-4">
                                <li>Email</li>
                                <li></li>
                                <li>. . @gmail.com</li>
                              </ul>
                            </div>
                            <noscript>
                              <button
                                type="button"
                                class="w-100 btn btn-lg btn-outline-primary"
                              >
                                Sign up for free
                              </button>
                            </noscript>
                          </div>
                        </div>

                        <noscript>Whtsapp</noscript>
                        <div class="col-md-4 mb-5 mb-md-0">
                          <div class="card">
                            <img
                              src="assets/images/whtsapp.png"
                              class="card-img-top"
                              alt="whtsapp.png"
                            />

                            <div class="card-body">
                              <h1 class="card-title pricing-card-title">
                                <small class="text-body-secondary fw-light"></small>
                              </h1>
                              <ul class="list-unstyled mt-3 mb-4">
                                <li>Whtsapp</li>
                                <li></li>
                                <li>025 - xxxxxxxx</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <noscript>Message</noscript>
                      <div class="col-md-3 mb-8 mb-md-0"></div>
                      <div class="col-lg-12">
                        <fieldset>
                          <br />
                          <textarea
                            style={{ color: "black" }}
                            name="message"
                            id="message"
                            placeholder="
                                   ______________________________________________________
                              ___________________________________________________________
                              ___________________________________________________________
                              ___________________________________________________________
                             "
                          ></textarea>
                        </fieldset>
                      </div>

                      <noscript>Sub Header row - Get in touch with us</noscript>
                      <div class="col-lg-12">
                        <div class="section-heading">
                          <h4>Get in touch with us</h4>
                        </div>
                      </div>

                      <noscript>Name inpt</noscript>
                      <div class="row">
                        <div class="col-8">
                          <noscript>name</noscript>
                          <fieldset>
                            <input
                              type="name"
                              name="name"
                              id="name"
                              placeholder="Your Name"
                              autocomplete="on"
                              required
                            ></input>
                          </fieldset>

                          <noscript>Email input</noscript>
                          <fieldset>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              pattern="[^ @]*@[^ @]*"
                              placeholder="E-mail"
                              required=""
                            ></input>
                          </fieldset>

                          <noscript>Message input</noscript>
                          <fieldset>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="
                              Message
                             "
                            ></textarea>
                          </fieldset>
                        </div>

                        <noscript>Image side-bar</noscript>
                        <div class="col-4">
                          <div class="imgBx">
                            <a href="#">
                              <img src="assets/images/contactus.jpg" />
                            </a>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                          </div>
                          <div>
                            <button type="button" class="btn btn-success">
                              Success
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
