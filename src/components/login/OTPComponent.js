/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';

import hashHistory from '../../hashHistory';
import './css/LoginStyles.css';

function OTPComponent (props){

    return (

      <section className='login-section '>
        <div className='col-sm-12 col-12 '>
          <div className='card border-0 '>
            <button onClick={props.closeModal} className='btn btn-outline-danger btn-md modal-close-btn'>
              <i class="fa-solid fa-xmark"></i>
            </button>
            <div className='card-header'>
              <h1 className='title mb-3'> OTP </h1>
              <p className='mb-0'>Please enter OTP sent to your Mobile</p>
            </div>
            <div className='card-body'>
              <div className='mb-3'>
                <label className='form-label'>Email / User name</label>
                <input type='email' className='form-control' id='exampleFormControlInput1' placeholder='email' />
                {/* <p className='required'>Email / User name required</p> */}
              </div>
              <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='Password' className='form-control' id='exampleFormControlInput1' placeholder='password' />
                {/* <p className='required'>Password required</p> */}
              </div>
              <div className='text-end my-2'>
                <a className=''>Forgot password ?</a>
              </div>
            </div>
            <div className='card-footer'>
              <button className='btn btn-success px-4 w-100' onClick={() => hashHistory.push('/home')}>Login</button>
            </div>
          </div>
        </div>
      </section>
    );

}

export default OTPComponent;
