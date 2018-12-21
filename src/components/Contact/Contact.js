import React, { Component } from 'react';
import "./Contact.css"
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contact">
           
                <section className="contact-section my-5">
                  <MDBCard>
                    <MDBRow>
                      <MDBCol lg="8">
                        <MDBCardBody className="form">
                          <h3 className="mt-4">
                            <MDBIcon icon="envelope" className="pr-2" />
                            Write to us:
                          </h3>
                          <MDBRow>
                            <MDBCol md="6">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="text"
                                  id="form-contact-name"
                                  label="Your name"
                                />
                              </div>
                            </MDBCol>
                            <MDBCol md="6">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="text"
                                  id="form-contact-email"
                                  label="Your email"
                                />
                              </div>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol md="6">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="text"
                                  id="form-contact-phone"
                                  label="Your phone"
                                />
                              </div>
                            </MDBCol>
                            <MDBCol md="6">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="text"
                                  id="form-contact-company"
                                  label="Your company"
                                />
                              </div>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol md="12">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="textarea"
                                  id="form-contact-message"
                                  label="Your message"
                                />
                                <MDBBtn rounded className="contact-button">
                                  <MDBIcon icon="send-o" />
                                </MDBBtn>
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCol>
                      <MDBCol lg="4">
                        <MDBCardBody className="contact text-center h-100 black-text">
                          <h3 className="my-4 pb-2">Contact information</h3>
                          <ul className="text-lg-left list-unstyled ml-4">
                            <li>
                              <p>
                                <MDBIcon icon="map-marker" className="pr-2" />
                                California, 90018 USA
                              </p>
                            </li>
                            <li>
                              <p>
                                <MDBIcon icon="phone" className="pr-2" />+ 1 323-593-0195
                              </p>
                            </li>
                            <li>
                              <p>
                                <MDBIcon icon="envelope" className="pr-2" />
                                aynazewdg37@gmail.com
                              </p>
                            </li>
                          </ul>
                          <hr className="hr-light my-4" />
                          <ul className="list-inline text-center list-unstyled">
                            <li className="list-inline-item">
                              <a href="#!" className="p-2 fa-lg w-ic">
                                <MDBIcon icon="twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#!" className="p-2 fa-lg w-ic">
                                <MDBIcon icon="linkedin" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#!" className="p-2 fa-lg w-ic">
                                <MDBIcon icon="instagram" />
                              </a>
                            </li>
                          </ul>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </section>
             
            </div>
         );
    }
}
 
export default Contact;