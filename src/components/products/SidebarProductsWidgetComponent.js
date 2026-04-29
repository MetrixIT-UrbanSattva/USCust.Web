/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import RatingComponent from '../common/RatingComponent';

import '../../styles/SidebarWidgetStyles.css';


import prodImg1 from '../../assets/images/product-1-1.jpg';
import prodImg2 from '../../assets/images/product-2-2.jpg';

class SidebarProductsWidgetComponent extends React.Component {

  render() {
    return (
      <div className='sidebar-widget my-4'>
        <div className='card '>
          <div className='widget widget_box  widget_block'>
            <div className='card-header bg-transparent'>
              <h2 className='foo_wid_title mb-0' >
                Products
              </h2>
            </div>
            <div className='card-body px-0 pt-2'>
              {/* each-category */}
              <div className=' each-category-card'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-product-img me-3'>
                      <img src={prodImg1} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='product-title'>Organic Cage Grade A Large  Eggs</a>
                      <div className='d-flex'>
                        <RatingComponent />
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
              {/* -- */}
              <div className=' each-category-card'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-product-img me-3'>
                      <img src={prodImg1} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='product-title'>Ghee </a>
                      <div className='d-flex'>
                        <RatingComponent />
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
              <div className=' each-category-card'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-product-img me-3'>
                      <img src={prodImg1} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='product-title'>Honey</a>
                      <div className='d-flex'>
                        <RatingComponent />
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
              <div className=' each-category-card'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-product-img me-3'>
                      <img src={prodImg1} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='product-title'>Millets</a>
                      <div className='d-flex'>
                        <RatingComponent />
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
              {/* <div className='each-category-card'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-product-img me-3'>
                      <img src={prodImg1} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='product-title'>Oils</a>
                      <div className='d-flex'>
                        <RatingComponent />
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
              <div className=' each-category-card'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-product-img me-3'>
                      <img src={prodImg1} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='product-title'>pulses</a>
                    </div>
                  </div>
                </div>
              </div>
               <div className=' each-category-card'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-product-img me-3'>
                      <img src={prodImg1} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='product-title'>Rice</a>
                      <div className='d-flex'>
                        <RatingComponent />
                      </div>
                      <div className='product-card-bottom'>
                        <div className='d-flex '>
                          <p className='price mb-0'>₹ 300.00</p>
                          <p className='text-strikeoff mb-0'>₹ 30.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="badge-soft-success "><span >0</span></div>
                </div>
              </div>
              <div className=' each-category-card'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-product-img me-3'>
                      <img src={prodImg1} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='product-title'>Spices</a>
                      <div className='d-flex'>
                        <RatingComponent />
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default SidebarProductsWidgetComponent;
