/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { Component } from 'react';

import hashHistory from '../../hashHistory';
import FooterComponent from '../footer';
import { Header } from '../../containers/header';
import { Profile } from '../../containers/profile';

class AddressesListComponent extends Component {
  render() {
    const { cart } = this.props.state;
    const { createAddress, editAddress, setDefaultChange, deleteAdrs, adrsList, isDefault } = this.props;
    return (
      <div>
        <div className='wrapper'>
          <Header count={cart.length} />
          <section className='container-fluid bread-crumbs-section '>
            <div className='row align-items-center'>
              <div className='col-sm-12 px-0'>
                <div className="dokan_only_breadcrumb">
                  <div className="auto-container">
                    <div className="breadcrumbs nest">
                      <ul className="breadcrumb m-auto">
                        <li>
                          <a onClick={() => hashHistory.push('/home')} >
                            <i className="fa-solid fa-house me-2"></i>Home </a>
                        </li>
                        <li className="active"> Addresses List</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='profile-section my-3'>
            <div className='container-fluid auto-container'>
              <div className='row'>
                <Profile />
                <div className='col-sm-8'>
                  <div className='card shadow mt-2'>
                    <div className='card-header bg-transparent '>
                      <div className='row mt-2'>
                        <div className='col-sm-7 col-10'>
                          <h3 className='sub-title'>Profile Addresses</h3>
                        </div>
                        <div className='col-sm-5 col-2 text-end'>
                          <button onClick={createAddress} className='btn btn-success btn-sm'><span><i className="fa-regular fa-pen-to-square me-2"></i></span>New Address</button>
                        </div>
                      </div>
                    </div>
                    <div className='card-body'>
                      {adrsList && adrsList.length > 0 ?
                        <div className='row'>
                          {adrsList.map((data, i) => {
                            const houseNumber = data && data.intiNum ? data.intiNum + ', ' : '';
                            const street = data && data.veedhi ? data.veedhi + ', ' : '';
                            const village = data && data.vuru ? data.vuru + ', ' : '';
                            const mandal = data && data.mandal ? data.mandal + ', ' : '';
                            const dist = data && data.jilla ? data.jilla + ', ' : '';
                            const state = data && data.rastr ? data.rastr + ', ' : '';
                            const desam = data && data.desam ? data.desam + ', ' : '';
                            const pincode = data && data.pincode
                            const totalData = houseNumber + street + village + mandal + dist + state + desam + pincode
                            return (
                              <div className='col-sm-6 my-2'>
                                <div className='card border-0 shadow'>
                                  <div className='card-body'>
                                    <div className='row d-flex justify-content-between col-sm-12'>
                                      <div className='d-flex col-sm-6' key={data._id} >
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={isDefault}
                                          checked={data.isDefault == true ? data.isDefault : isDefault[data._id]}
                                          onChange={(e) => setDefaultChange(data._id, e)} />
                                        <div className='ms-2'><strong>{data.lName}</strong></div>
                                      </div>
                                      <div className='d-flex col-sm-6 justify-content-end'>
                                        <a onClick={() => editAddress(data._id)}>  <i title='Edit' className='fa fa-edit me-3 text-success'></i></a>
                                        <a>{data && data.isDefault != true && <i title='Delete' onClick={() => deleteAdrs(data)} className='fa fa-trash text-danger'></i>}</a>
                                      </div>
                                    </div>
                                    <div className='d-flex justify-content-between col-sm-10 mt-3'>
                                      <div className='d-flex col-sm-4 text-success'>
                                        <i className='fa-solid fa-location-dot me-2 mt-1'></i>
                                        <div><strong>Address</strong></div>
                                      </div>
                                      <div className="col-sm-12">
                                        <div className='col-sm-7'>{totalData}</div>
                                      </div>
                                    </div>
                                    <div className='d-flex justify-content-between col-sm-10 mt-3'>
                                      <div className='d-flex col-sm-4 text-success'>
                                        <i className='fa-solid fa-user text-success me-1'></i>
                                        <div><strong>Contact</strong></div>
                                      </div>
                                      <div className='col-sm-8'>
                                        {data.cName} | {data.cMobCcNum}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div> : <div className='text-center'>No Data</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <FooterComponent />
        </div>
      </div>
    )
  }
}

export default AddressesListComponent