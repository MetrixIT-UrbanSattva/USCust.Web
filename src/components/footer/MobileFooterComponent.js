/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { useState } from 'react';
import hashHistory from '../../hashHistory';

function MobileFooterComponent() {

  return (
    <div className='d-flex justify-content-between mobile-footer-options'>
      <div className='col- footer-option text-center' onClick={() => hashHistory.push('/home')}>
        <p className='mb-0'><i className='fa-solid fa-home' style={{fontSize:20}}></i></p>
        <p className='mb-0'>Home</p>
      </div>
      <div className='col- footer-option text-center' onClick={() => hashHistory.push('/my-orders')}>
        <p className='mb-0'><i className="fa-solid fa-cart-shopping" style={{fontSize:20}}></i></p>
        <p className='mb-0'>My Orders</p>
      </div>
      <div className='col- footer-option text-center' onClick={() => hashHistory.push('/profile-details')}>
        <p className='mb-0'><i className="fa-solid fa-user" style={{fontSize:20}}></i></p>
        <p className='mb-0'>Account</p>
      </div>
      <div className='col- footer-option text-center' onClick={() => hashHistory.push('/support')}>
        <p className='mb-0'><i className="fa-solid fa-phone" style={{fontSize:20}}></i></p>
        <p className='mb-0'>support</p>
      </div>
    </div>
  );
}

export default MobileFooterComponent;