import React from "react";
// import {View, Image, Text, StyleSheet} from 'react-native';

const ContactUs = () => {
  return (
    <>
      <div class="contact-us section" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="contact-us-content">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="item">
                      <img
                        src="assets/images/projects-01.jpg"
                        width="100%"
                        height="670px"
                        frameborder="0"
                        //  style="border:0; border-radius: 23px;"
                        allowfullscreen=""
                        alt="img projects-01.jpg not found"
                      />

                      {/* <View style={styles.container}> */}
                      {/* <View>
        <Image
          style={{
            resizeMode: 'cover',
            height: 100,
            width: 200,
          }}
          source={require('assets/_images_not_needed_in_cotatct/projects-01.jpg')}
        />
        <Text>resizeMode : cover</Text>
      </View> */}
                    </div>

                    {/* <div>
      <img src={companyLogo} alt="BigCo Inc. logo"/>
    </div> */}

                    {/* <div id="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                        width="100%"
                        height="670px"
                        frameborder="0"
                        /// style="border:0; border-radius: 23px;"
                        /// style={{border:0, borderradius: 23px;}}
                        allowfullscreen=""
                      ></iframe>
                    </div> */}
                  </div>

                  <div class="col-lg-8">
                    <form id="contact-form" action="" method="post">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="section-heading">
                            <h2>
                              {/* <em>Contact Us</em> &amp; Get In{" "} */}
                              <em>Contact Us</em>
                            </h2>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <fieldset>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="
                              ___________________________________________________________
                              ___________________________________________________________
                              ___________________________________________________________
                              ___________________________________________________________
                             "
                            ></textarea>
                          </fieldset>
                        </div>

                        {/* Contact Info */}
                        <div class="more-info">
                          <div class="row">
                            <div class="col-lg-4">
                              <div class="info-item">
                                <i class="fa fa-phone"></i>
                                {/* <!-- <h4><a href="#">010-020-0340</a></h4> --> */}
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
                                {/* <!-- <h4><a href="#">hello@company.com</a></h4> --> */}
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

                        <div class="col-lg-12">
                          <div class="section-heading">
                            <h4>
                              {/* <em>Contact Us</em> &amp; Get In{" "} */}
                              {/* <em>Get in touch with us</em> */}
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
                        {/* 
                        <div class="col-lg-8">
                          <fieldset>
                            <input
                              type="surname"
                              name="surname"
                              id="surname"
                              placeholder="Your Surname (no need)."
                              autocomplete="on"
                              required
                            ></input>
                          </fieldset>
                        </div> */}

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

                        {/* <div class="col-lg-8">
                          <fieldset>
                            <input
                              type="subject"
                              name="subject"
                              id="subject"
                              placeholder="Subject (no need)."
                              autocomplete="on"
                            ></input>
                          </fieldset>
                        </div> */}

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
