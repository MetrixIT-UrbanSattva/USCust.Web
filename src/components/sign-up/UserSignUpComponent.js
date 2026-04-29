/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { t } from 'ttag';

import hashHistory from '../../hashHistory';
import FooterComponent from '../footer';
import {Header} from '../../containers/header';
import { PreFooterComponent } from '../home';

import '../login/css/LoginStyles.css';

import asideBanner2 from '../../assets/images/oils.jpg';
import asideBanner3 from '../../assets/images/dry-fruits.jpg';
import asideBanner4 from '../../assets/images/ghee.jpg';
import asideBanner5 from '../../assets/images/banners/HEALTHY-ORGANICS.jpg';
import asideBanner6 from '../../assets/images/banners/PULSES.jpg';
import asideBanner7 from '../../assets/images/banners/RICE-BANNER.jpg';

import video from '../../assets/video/video.mp4';

class UserSignUpComponent extends React.Component {

  render() {
    return (
      <div className='wrapper'>
        <Header />
        {/* <!-- =============================== footer start ================================= --> */}
        <section className='login-section my-5'>
          <div className='container-fluid auto-container py-5'>
            <div className='row align-items-center justify-content-center'>
              <div className='col-sm-10'>
                <div className='card border-0 shadow'>
                  <div className='card-body p-0 pe-3' >
                    <div className='row '>
                      <div className='col-sm-8'>
                        <Carousel className='carousel slide' 
                          autoPlay={true}
                          interval={1500}
                          controls={false}
                          indicators={true}
                        >
                          <Carousel.Item>
                            <img src={asideBanner3} className='img-fluid w-100 login-banner' />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img src={asideBanner2} className='img-fluid w-100 login-banner' />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img src={asideBanner4} className='img-fluid w-100 login-banner' />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img src={asideBanner5} className='img-fluid w-100 login-banner' />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img src={asideBanner6} className='img-fluid w-100 login-banner' />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img src={asideBanner7} className='img-fluid w-100 login-banner' />
                          </Carousel.Item>
                        </Carousel>
                      </div>
                      <div className='col-sm-4 py-3'>
                        <div className='card border-0 my-3 '>
                          <div className='card-header'>
                            <h1 className='title'> Sign Up</h1>
                            <p>Please enter your email to login</p>
                          </div>
                          <div className='card-body'>
                            <div className='mb-3'>
                              <label className='form-label'>User Name</label>
                              <input type='text' className='form-control' id='exampleFormControlInput1' placeholder='email' />
                              {/* <p className='required'>Email / User name required</p> */}
                            </div>
                            <div className='mb-3'>
                              <label className='form-label'>User Mobile number</label>
                              <input type='text' className='form-control' id='exampleFormControlInput1' placeholder='email' />
                              {/* <p className='required'>Email / User name required</p> */}
                            </div>
                            <div className='mb-3'>
                              <label className='form-label'>Email / User name</label>
                              <input type='email' className='form-control' placeholder='email' />
                              {/* <p className='required'>Email / User name required</p> */}
                            </div>
                            <div className='mb-3'>
                              <label className='form-label'>Password</label>
                              <input type='Password' className='form-control' placeholder='email' />
                              {/* <p className='required'>Password required</p> */}
                            </div>
                            <div className='text-end my-2'>
                            <a className='forgot-link'>Forgot password ?</a>
                            </div>
                          </div>
                          <div className='card-footer'>
                            <button className='btn btn-success px-4 w-100' >Sign Up</button>
                            <div className='text-center my-3'>
                            <p className=''>Already have an account?<a onClick={() => hashHistory.push('/login')} className='signup-link ms-1'> Login </a> </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================= section 7 Pre footer banner Start ============================ */}
        {/* <PreFooterComponent /> */}

        {/* <!-- =============================== footer start ================================= --> */}
        <FooterComponent />
      </div>
    );
  }

}

export default UserSignUpComponent;
