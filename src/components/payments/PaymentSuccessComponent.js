/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { Component } from 'react';

import { Header } from '../../containers/header';
import FooterComponent from '../footer';
import successImg from '../../assets/images/success.jpg';
import hashHistory from '../../hashHistory';

export class PaymentSuccessComponent extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='checkout-section my-5 mt-5' >
          <div className='container-fluid auto-container' style={{ marginTop: 200, marginBottom: 100 }}>
            <div className='row d-flex justify-content-center'>
              <div className='col-sm-5'>
                <div className='d-flex justify-content-between mx-5'>
                  <h3 className='text-center mb-1' ><b> Your Order is successfully placed</b> </h3>
                  <img src={successImg} style={{ width: 50, height: 50 }} />
                </div>
                <div className='card'>
                  <div className='mx-3 my-3'>
                    <div className='row d-flex justify-content-between'>
                      <div className='col-sm-12'>
                        <div className='d-flex justify-content-between'>
                          <h6 className='label'>Order Number</h6>
                          <p className='value'>122132</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <h6 className='label'>Order Date</h6>
                          <p className='value'>9th Mar 2023</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <h6 className='label'>Order Amount</h6>
                          <p className='value'>₹ 300</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <button className='btn btn-primary' onClick={() => hashHistory.push('/home')}>Home</button>
                  <button className='btn btn-success' onClick={() => hashHistory.push('/my-orders')}>My Orders</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =============================== footer start ================================= --> */}
        <FooterComponent />
      </div >
    )
  }
}

export default PaymentSuccessComponent;