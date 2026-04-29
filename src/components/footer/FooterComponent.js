/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';

import '../../styles/Styles.css';

import Logo from '../../assets/images/logo.png';

class FooterComponent extends React.Component {

  
  render() {
    return (
      <>
       {/* <!-- =============================== footer start ================================= --> */}
       <footer >
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-3'>
                <a className='navbar-brand '>
                  <img className='image-fluid' src={Logo} width={240} />
                </a>
                <p className='font-lg  mb-30 text-heading mt-3'>Awesome grocery store </p>
                <div className='contact-infor'>
                  <div className='d-flex'>
                    <i className='fa-solid fa-location-dot me-2 mt-1'></i>
                    <div>
                      <strong>Address :</strong>
                      <span className='ms-3'>Skill works IT, Madapur, Hyderabad, Telangana.</span>
                    </div>
                  </div>
                </div>
                <div className='contact-infor'>
                  <i className='fa-solid fa-phone me-2'></i>
                  <strong>Call Us</strong>
                  <a className='ms-3 mobile-text'>(+91)9090909090</a>
                </div>
                <div className='contact-infor'>
                  <i className='fa-solid fa-envelope-circle-check me-2'></i>
                  <strong>Email</strong>
                  <a className='ms-3 email-text'>skillwrk.com</a>
                </div>
                <div className='contact-infor'>
                  <i className='fa-regular fa-clock me-2'></i>
                  <strong>Hours</strong>
                  <a className='ms-3' >10:00 - 18:00, Mon - Sat</a>
                </div>
              </div>
              <div className='col-sm-9'>
                <div className='row'>
                  <div className='col-sm-3'>
                  <div className='footer-link-widget'>
                    <div className='foo_wid_title'>Company</div>
                    <div className='widget_content_box'>
                      <ul className='footer-list mb-sm-5 mb-md-0'>
                        <li><a href='#' target='_blank' >About Us</a></li>
                        <li><a href='#' target='_blank' >Delivery Information</a></li>
                        <li><a href='#' target='_blank' >Privacy Policy</a></li>
                        <li><a href='#' target='_blank' >Terms & Conditions</a></li>
                        <li><a href='#' target='_blank' >Contact Us</a></li>
                        <li><a href='#' target='_blank' >Support Center</a></li>
                        <li><a href='#' target='_blank' >Careers</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-sm-3'>
                  <div className='footer-link-widget'>
                    <div className='foo_wid_title'>Company</div>
                    <div className='widget_content_box'>
                      <ul className='footer-list mb-sm-5 mb-md-0'>
                        <li><a href='#' target='_blank' >About Us</a></li>
                        <li><a href='#' target='_blank' >Delivery Information</a></li>
                        <li><a href='#' target='_blank' >Privacy Policy</a></li>
                        <li><a href='#' target='_blank' >Terms & Conditions</a></li>
                        <li><a href='#' target='_blank' >Contact Us</a></li>
                        <li><a href='#' target='_blank' >Support Center</a></li>
                        <li><a href='#' target='_blank' >Careers</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-sm-3'>
                  <div className='footer-link-widget'>
                    <div className='foo_wid_title'>Company</div>
                    <div className='widget_content_box'>
                      <ul className='footer-list mb-sm-5 mb-md-0'>
                        <li><a href='#' target='_blank' >About Us</a></li>
                        <li><a href='#' target='_blank' >Delivery Information</a></li>
                        <li><a href='#' target='_blank' >Privacy Policy</a></li>
                        <li><a href='#' target='_blank' >Terms & Conditions</a></li>
                        <li><a href='#' target='_blank' >Contact Us</a></li>
                        <li><a href='#' target='_blank' >Support Center</a></li>
                        <li><a href='#' target='_blank' >Careers</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-sm-3'>
                  <div className='footer-link-widget'>
                    <div className='foo_wid_title'>Company</div>
                    <div className='widget_content_box'>
                      <ul className='footer-list mb-sm-5 mb-md-0'>
                        <li><a href='#' target='_blank' >About Us</a></li>
                        <li><a href='#' target='_blank' >Delivery Information</a></li>
                        <li><a href='#' target='_blank' >Privacy Policy</a></li>
                        <li><a href='#' target='_blank' >Terms & Conditions</a></li>
                        <li><a href='#' target='_blank' >Contact Us</a></li>
                        <li><a href='#' target='_blank' >Support Center</a></li>
                        <li><a href='#' target='_blank' >Careers</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
              </div>
             
            </div>
          </div>
        </footer>
        {/* <!-- =============================== after footer start ================================= --> */}
        <section className='footer after-footer' id='post-footer'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center justify-content-end'>
              <div className='col-sm-6'>
                <a target='_self'><p className='copy-right-text'>© 2022, Skill Work IT | Mills to Home <br />All rights reserved</p></a>
              </div>
              <div className='col-sm-6 text-end'>
                <div className='mobile-social-icon my-2'>
                  <h6>Follow Us</h6>
                  <a href='#'> <i className='fa-brands fa-facebook-f'></i></a>
                  <a href='#'> <i className='fa-brands fa-twitter'></i></a>
                  <a href='#'> <i className='fa-brands fa-skype'></i></a>
                  <a href='#'> <i className='fa-brands fa-instagram'></i></a>
                </div>
                <p>Need Help? Call Us:<span className='text-success'>7890567890</span> </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default FooterComponent;
