
/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import moment from 'moment';

import hashHistory from '../../hashHistory';
import { connect } from 'react-redux';

import FooterComponent from '../footer';
import {Header} from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
class OrderViewComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { soGrpData, soGrpItemData } = this.props;
    const deliveryCharges = soGrpData.gsgc + soGrpData.gdc + soGrpData.gsc + soGrpData.gwhc;
    const tNetAmt = deliveryCharges + soGrpData.goc + soGrpData.gmrpTotal;
    const disAmt = soGrpData.gdAmt;
    const offAmt = soGrpData.gaoAmt;
    const totalAmt = tNetAmt - disAmt - offAmt;
    return (
      <div className='wrapper'>
        <Header />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='checkout-section mt-3 mb-5'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h3 className='screen-title'>Order View </h3>
                {soGrpData.soGrpHoda === 'Placed' || soGrpData.soGrpHoda == 'Confirmed' ||  soGrpData.soGrpHoda == 'Cancelled' || soGrpData.soGrpHoda == 'Rejected' ?  null : <button className='btn btn-sm btn-success' onClick={() => hashHistory.push('/invoice/bill/' +  soGrpData.soGrpCode)}>View Bill</button>}
              </div>
            </div>
            <div>
              <div className='row'>
                {/* Order info */}
                <div className='col-sm-6 col-12' >
                  <div className='card border-0 shadow mt-4'>
                    <div className='card-body'>
                      <h2 className="foo_wid_title mb-0">Order Details</h2>
                      <div className='my-4'>
                        <div className='d-flex justify-content-between'>
                          <p className='label'>Order No</p>
                          <p className='value'>{soGrpData.soCode}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p className='label'>Order Items</p>
                          <p className='value'>{soGrpData.gitQty} Items</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p className='label'>Order Date</p>
                          <p className='value'>{moment(soGrpData.cDtStr).format('Do MMM, YYYY')}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p className='label'>Order Status</p>
                          <p className='value'>{soGrpData.soGrpHoda}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          {soGrpData.soGrpHoda == 'Delivered' ? <p className='label'>Delivered Date</p> : <p className='label'>Expected Delivery Date</p>}
                          {soGrpData.soGrpHoda == 'Delivered' ? <p className='value'> {moment(soGrpData.adDtStr).format('Do MMM, YYYY')}</p> : <p className='value'> {moment(soGrpData.edDtStr).format('Do MMM, YYYY')}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* address info */}
                <div className='col-sm-6'>
                  <div className='card border-0 shadow mt-4'>
                    <div className='card-body'>
                      <h2 className="foo_wid_title mb-0">Deliver To</h2>
                      <div className='contact-infor pt-4'>
                        <div>
                          <strong className='mb-2'>{soGrpData.sodl && soGrpData.sodl.pName}</strong>
                        </div>
                        <div className='d-flex'>
                          <i className='fa-solid fa-location-dot me-2 mt-1'></i>
                          <div>
                            <strong className='mb-2'>Address : {soGrpData.sodl && soGrpData.sodl.lName}</strong>
                            <p className=' mt-2'>{soGrpData.sodl && soGrpData.sodl.jilla + (',') + soGrpData.sodl.rastr + ('-') + soGrpData.sodl.pincode}</p>
                          </div>
                        </div>
                      </div>
                      <div className='contact-infor'>
                        <i className='fa-solid fa-phone me-2'></i>
                        <strong className='ms-3 mt-2'>{soGrpData.sodl && soGrpData.sodl.mobCcNum}</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-12'>
                  <div className='each-category-card my-3 me-3 shadow'>
                    <div className='card-body cart-summary p-3'>
                      <h2 className="foo_wid_title mb-0">Payment Details</h2>
                      <div className='my-4'>
                        <div className='d-flex justify-content-between'>
                          <p className='label'>Sub Total</p>
                          <p className='value'>₹{soGrpData.gmrpTotal}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p className='label'>Delivery Charges</p>
                          <p className='value'>₹{deliveryCharges}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p className='label'>Other Charges</p>
                          <p className='value'>₹{soGrpData.goc}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p className='label'>Discount</p>
                          <p className='value text-success'>₹{disAmt}</p>
                        </div>
                        {offAmt != 0 ?
                          <div className='d-flex justify-content-between'>
                            <p className='label'>Offer</p>
                            <p className='value text-success'>₹{offAmt}</p>
                          </div> : null}
                      </div>
                      <hr />
                      <div className='d-flex justify-content-between'>
                        <p className='label'>Total Amount</p>
                        <p className='value '>₹{totalAmt}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* products list */}
                <div className='card shadow'>
                  <div className='row'>
                    {soGrpItemData && soGrpItemData.map((data, i) =>
                      <div className='col-sm-6'  key={data._id}>
                        <div className='card card-border-light shadow-sm'>
                          <div className='card-body' >
                            <div className='row '>
                              <div className='col-sm-2'>
                                <div className='image-div'>
                                  <img className='img-fluid' src={data.filePath} />
                                </div>
                              </div>
                              <div className='col-sm-8'>
                                <div className='category-title-div'>
                                  <a className='product-title'>{data.icn}</a>
                                  <strong>{data.itemPeru}</strong>
                                  <div className='d-flex'>
                                    <p>{data.units}</p>
                                  </div>
                                  <div className='d-flex'>
                                    <p className='price mb-0'>₹{data.netAmt}</p>
                                  </div>
                                </div>
                              </div>
                              <div className='col-sm-2 text-end'>
                                <div className='d-block pe-3'>
                                  <p>Qty </p>
                                  <p>{data.iQty}</p>
                                </div>
                              </div>
                              <div className='col-sm-12 text-end'>
                                {soGrpData.soGrpHoda == 'Delivered' ? data.isReview  == false ? <button className='btn btn-sm btn-warning ' onClick={() => hashHistory.push('/give-rating/' + data._id)} >Give Rating</button> : <button className='btn btn-sm btn-warning ' onClick={() => hashHistory.push('/edit-rating/' + data._id)} >Update Rating</button> : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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

export default OrderViewComponent;
