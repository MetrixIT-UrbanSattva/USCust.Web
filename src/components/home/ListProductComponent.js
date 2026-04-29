import React, { useState } from 'react';
import RatingComponent from '../common/RatingComponent';

import prodImg1 from '../../assets/images/product-1-1.jpg';

function ListProductComponent() {
  return (
    <div className='row'>
      <div className='col-xl-12 col-12'>
        <div className='product-list-small product_wrapper'>
          <div className='d-flex align-items-center hover-up'>
            <div className='col-md-4 col-3 pr-15 mb-0'>
              <a>
                <img src={prodImg1} className='small-product-img' />
              </a>
            </div>
            <div className='col-md-8 col-9 mb-0'>
              <h6 className='pro_title'>Seeds of Change Organic Red Rice</h6>
              <div className='product-rate-cover'>
                <div className='product-rate d-inline-block'>
                  <RatingComponent />
                </div>
              </div>
              <div className='product-card-bottom'>
                <div className='d-flex '>
                  <p className='price mb-0'>₹ 300.00</p>
                  <p className='text-strikeoff mb-0'>₹ 30.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xl-12 col-12'>
        <div className='product-list-small product_wrapper'>
          <div className='d-flex align-items-center hover-up'>
            <div className='col-md-4 col-3 pr-15 mb-0'>
              <a>
                <img src={prodImg1} className='small-product-img' />
              </a>
            </div>
            <div className='col-md-8 col-9 mb-0'>
              <h6 className='pro_title'>Seeds of Change Organic Red Rice</h6>
              <div className='product-rate-cover'>
                <div className='product-rate d-inline-block'>
                  <RatingComponent />
                </div>
              </div>
              <div className='product-card-bottom'>
                <div className='d-flex '>
                  <p className='price mb-0'>₹ 300.00</p>
                  <p className='text-strikeoff mb-0'>₹ 30.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xl-12 col-12'>
        <div className='product-list-small product_wrapper'>
          <div className='d-flex align-items-center hover-up'>
            <div className='col-md-4 col-3 pr-15 mb-0'>
              <a>
                <img src={prodImg1} className='small-product-img' />
              </a>
            </div>
            <div className='col-md-8 col-9 mb-0'>
              <h6 className='pro_title'>Seeds of Change Organic Red Rice</h6>
              <div className='product-rate-cover'>
                <div className='product-rate d-inline-block'>
                  <RatingComponent />
                </div>
              </div>
              <div className='product-card-bottom'>
                <div className='d-flex '>
                  <p className='price mb-0'>₹ 300.00</p>
                  <p className='text-strikeoff mb-0'>₹ 30.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProductComponent;