/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import Modal from 'react-modal';

import hashHistory from '../../hashHistory';

import FooterComponent from '../footer';
import {Header} from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';

import prodImg1 from '../../assets/images/products/oils/2.png';

class PaymentScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddToCart: false,
      isCartEmpty: false
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='checkout-section mt-3 mb-5'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h3 className='screen-title'> Payment </h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                <div className='row'>
                  {/* ordered products card */}
                  <div className='card card-border-light shadow-none mt-3'>
                    <div className='card-header border-0 bg-transparent'>
                      <h2 class="foo_wid_title mb-0">Products</h2>
                    </div>
                    <div className='card-body p-0 pb-3'>
                      <div className='col-sm-12 each-item-payment'>
                        <div className='card card-border-light shadow-sm'>
                          <div className='card-body'>
                            <div className='row '>
                              <div className='col-sm-1'>
                                <div className='image-div'>
                                  <img className='img-fluid' src={prodImg1} />
                                </div>
                              </div>
                              <div className='col-sm-7'>
                                <div className='category-title-div'>
                                  <a className='product-title'>Dry druits and Nuts </a>
                                  <p className='mb-0'>Order will dispatch with in 2 Hours</p>
                                  <div className='d-flex'>
                                    <p className='price mb-0'>₹ 300.00</p>
                                    <p className='text-strikeoff mb-0'>₹ 30.00</p>
                                  </div>

                                </div>
                              </div>
                              <div className='col-sm-2 text-center'>
                                <p className='mb-2 '>Qty </p>
                                <p className='product-title1'> 3</p>
                              </div>
                              <div className='col-sm-2 text-center'>
                                <p className='mb-2'>Price </p>
                                <p className=''> 300 * 3</p>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                      {/* each item card */}
                      <div className='col-sm-12 each-item-payment'>
                        <div className='card card-border-light shadow-sm'>
                          <div className='card-body'>
                            <div className='row '>
                              <div className='col-sm-1'>
                                <div className='image-div'>
                                  <img className='img-fluid' src={prodImg1} />
                                </div>
                              </div>
                              <div className='col-sm-7'>
                                <div className='category-title-div'>
                                  <a className='product-title'>Dry druits and Nuts </a>
                                  <p className='mb-0'>Order will dispatch with in 2 Hours</p>
                                  <div className='d-flex'>
                                    <p className='price mb-0'>₹ 300.00</p>
                                    <p className='text-strikeoff mb-0'>₹ 30.00</p>
                                  </div>

                                </div>
                              </div>
                              <div className='col-sm-2 text-center'>
                                <p className='mb-2 '>Qty </p>
                                <p className='product-title1'> 3</p>
                              </div>
                              <div className='col-sm-2 text-center'>
                                <p className='mb-2'>Price </p>
                                <p className=''> 300 * 3</p>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                       {/* each item card */}
                       <div className='col-sm-12 each-item-payment'>
                        <div className='card card-border-light shadow-sm'>
                          <div className='card-body'>
                            <div className='row '>
                              <div className='col-sm-1'>
                                <div className='image-div'>
                                  <img className='img-fluid' src={prodImg1} />
                                </div>
                              </div>
                              <div className='col-sm-7'>
                                <div className='category-title-div'>
                                  <a className='product-title'>Dry druits and Nuts </a>
                                  <p className='mb-0'>Order will dispatch with in 2 Hours</p>
                                  <div className='d-flex'>
                                    <p className='price mb-0'>₹ 300.00</p>
                                    <p className='text-strikeoff mb-0'>₹ 30.00</p>
                                  </div>

                                </div>
                              </div>
                              <div className='col-sm-2 text-center'>
                                <p className='mb-2 '>Qty </p>
                                <p className='product-title1'> 3</p>
                              </div>
                              <div className='col-sm-2 text-center'>
                                <p className='mb-2'>Price </p>
                                <p className=''> 300 * 3</p>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* delivery address info card */}
                  <div className='col-sm-12 px-0'>
                    <div className='card card-border-light shadow'>
                      <div className='card-header bg-transparent'>
                        <h2 class="foo_wid_title mb-0">Delivery Address</h2>
                      </div>
                      <div className='card-body'>
                        <div class="form-check">
                          <input onClick={this.handleSelectAddress} className="form-check-input" type="checkbox" value="" checked />
                          <label className="form-check-label " for="flexCheckChecked">
                            Home
                          </label>
                          <i onClick={() => hashHistory.push('/edit-address')} className='fa fa-edit mx-3 text-secondary' />
                        </div>
                        <div className='contact-infor'>
                          <div className='d-flex'>
                            <i className='fa-solid fa-location-dot me-2 mt-1'></i>
                            <div>
                              <strong>Address :</strong>
                              <p className=' mt-3'>Skill works IT, Madapur, Hyderabad, Telangana, 500007.</p>
                            </div>
                          </div>
                        </div>
                        <div className='contact-infor'>
                          <i className='fa-solid fa-phone me-2'></i>
                          <strong>Call Us</strong>
                          <p className='ms-3 mt-2'><a className=' ms-2 mobile-text'>(+91)9090909090</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='each-category-card shadow my-3 me-3'>
                  <div className='card-body cart-summary p-3'>
                    <h2 class="foo_wid_title mb-0">Cart Summary</h2>
                    <div className='my-4'>
                      <div className='d-flex justify-content-between'>
                        <p className='label'>Total Quantity</p>
                        <p className='value'>9</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='label'>Total Price</p>
                        <p className='value'>$3600.00</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='label'>Deliver Charges</p>
                        <p className='value'>$100.00</p>
                      </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                      <p className='label'>Sub Total</p>
                      <p className='value'>$3500.00</p>
                    </div>
                    {this.state.isEnableCheckout && <div className='d-flex justify-content-center'>
                      <button onClick={() => hashHistory.push('/payment')} className='btn btn-success br-22 px-3 w-100 text-white'>Proceed To Payment</button>
                    </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =============================== footer start ================================= --> */}
        <FooterComponent />
      </div>
    );
  }

}

export default PaymentScreenComponent;
