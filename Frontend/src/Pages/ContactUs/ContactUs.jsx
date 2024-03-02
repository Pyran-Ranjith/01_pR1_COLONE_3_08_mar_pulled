import React from "react";

const ContactUs = () => {
  return (
    <>
      <div class="contact-us section" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="contact-us-content">
                <div class="row">

                  <div class="col-lg-8">
                    <form id="contact-form" action="" method="post">
                      <div class="row">

                        {/* Header row Contact Us */}
                        <div class="col-lg-12">

                          <div class="section-heading">
                            <h2>
                              {/* <em>Contact Us</em> &amp; Get In{" "} */}
                              <em>Contact Us</em>
                            </h2>
                          </div>

                        </div>

                        {/* Contact info - phne, email and whtsapp */}
                        <div class="more-info">
                          <div class="row">
                            {/* <div class="col-lg-4"> */}
                            <div class="col-sm-4">
                              <div class="info-item">
                                <i class="fa fa-phone"></i>
                                {
                                  <h4>
                                    <a href="#">0112 123 456 78 90</a>
                                  </h4>
                                }
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <div class="info-item">
                                <i class="fa fa-envelope"></i>
                                <h4>
                                  <a href="#">pyran@gmail.com</a>
                                </h4>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <div class="info-item">
                                <i class="fab fa-whatsapp "></i>
                                <h4>
                                  <a href="#">pyran@gmail.com</a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Message input text box */}
                        <div class="col-lg-12">
                          <fieldset>
                          <br/>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="
                              Your message ___________________________________________
                              ___________________________________________________________
                              ___________________________________________________________
                              ___________________________________________________________
                             "
                            ></textarea>
                          </fieldset>
                        </div>

                        {/* Sub Header row - Get in touch with us */}
                        <div class="col-lg-12">
                          <div class="section-heading">
                            <h4>
                              Get in touch with us
                            </h4>
                          </div>
                        </div>

                        <div class="col-lg-8">
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
                        </div>

                        <div class="col-lg-8">
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
                        </div>

                        <div class="col-lg-12">
                          <fieldset>
                            <textarea
                              name="message"
                              id="message"
                              // placeholder="Your Message"

                              placeholder="
                              Message
                             "
                            ></textarea>
                          </fieldset>
                        </div>
                        <div class="col-lg-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              class="orange-button"
                            >
                              Send Message
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>

                    {/* End of contact-us */}
                  </div>
                  
                  <div class="col-lg-4">
                    <div class="item">
                      <img
                        src="assets/images/projects-01.jpg"
                        width="100%"
                        height="670px"
                        frameborder="0"
                        //  style="border:0; border-radius: 23px;" (This opton does not work, WHY??)
                        allowfullscreen=""
                        alt="img projects-01.jpg not found"
                      />
                    </div>
                  </div>

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
