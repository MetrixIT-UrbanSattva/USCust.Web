import React, { useState } from 'react';

import PrefooterBanImg from '../../assets/images/banner-9-min.png';
import ban1 from '../../assets/images/landing-big-banner/3.png';
import icon1 from '../../assets/images/icon-1.png';
import icon2 from '../../assets/images/icon-2.png';
import icon3 from '../../assets/images/icon-3.png';
import icon4 from '../../assets/images/icon-4.png';
import icon5 from '../../assets/images/icon-5.png';



function PreFooterComponent() {
  return (
    <div className='container-fluid auto-container text-center my-5' >
      <div className='row align-items-center' id='big-banner-2'>
        <div className='col-sm-12 text-left'>
          <div className='pre-footer-banner' >
            <img src={ban1} className='img-fluid w-100' style={{width: '100%', height: '100%'}} />
          </div>
        </div>
      </div>
      <div className='row align-items-center my-4'>
        <div className='col-sm-3'>
          <div className='card border-0 pre-footer-card-small'>
            <div className='card-body'>
              <div className='d-flex'>
                <div className='icon-img me-3'>
                  <img src={icon1} className='img-fluid' />
                </div>
                <div className='icon-content banner-text text-start'>
                  <h3 className='pre-footer-card-title'><a>Free delivery</a></h3>
                  <p className='pre-footer-card-data'>24/7 amazing services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='card border-0 pre-footer-card-small'>
            <div className='card-body'>
              <div className='d-flex'>
                <div className='icon-img me-3'>
                  <img src={icon2} className='img-fluid' />
                </div>
                <div className='icon-content banner-text text-start'>
                  <h3 className='pre-footer-card-title'><a>Wide assortment</a></h3>
                  <p className='pre-footer-card-data'>Mega Discounts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='card border-0 pre-footer-card-small'>
            <div className='card-body'>
              <div className='d-flex'>
                <div className='icon-img me-3'>
                  <img src={icon4} className='img-fluid' />
                </div>
                <div className='icon-content banner-text text-start'>
                  <h3 className='pre-footer-card-title'><a>Easy returns</a></h3>
                  <p className='pre-footer-card-data'>Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='card border-0 pre-footer-card-small'>
            <div className='card-body'>
              <div className='d-flex'>
                <div className='icon-img me-3'>
                  <img src={icon5} className='img-fluid' />
                </div>
                <div className='icon-content banner-text text-start'>
                  <h3 className='pre-footer-card-title'><a>Best prices & offers</a></h3>
                  <p className='pre-footer-card-data'>Orders $50 or more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreFooterComponent;