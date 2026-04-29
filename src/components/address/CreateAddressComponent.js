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
import Countries from '../../../public/data/Countries.json';
import CountryStates from '../../../public/data/CountryStates.json';

class CreateAddressComponent extends Component {
  render() {
    const { districts, mandals, locationName, contactName, contactMobNumber, houseNumber, street, landmark, pincode, mandal, village, countryMobCode, stateValue, districtValue,
      countryValue, isDefault, errorMsg, disable, userInfo, selectedOption, showOtherInput, otherLocation } = this.props.state;
    const { handleNumerical, handleChangeCountry, handleChangeState, handleChangeCity, handleChangeAreaLocality, createAddress, setStateData, handleOptionChange } = this.props;
    return (
      <div>
        <div className='wrapper'>
          <Header />
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
                        <li>
                          <a onClick={() => hashHistory.push('/addresses')}  >Addresses List</a>
                        </li>
                        <li className="active">Create Address</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='create-new-address-section my-3'>
            <div className='container-fluid auto-container'>
              <div className='row'>
                <Profile />
                <div className='col-sm-8'>
                  <div className='card shadow mt-2'>
                    <div className='card-header bg-transparent '>
                      <div className='row mt-2'>
                        <div className='col-sm-7 col-10'>
                          <h3 className='sub-title'>Create Address</h3>
                        </div>
                      </div>
                    </div>
                    <div className='card-body p-4'>
                      <div className='row'>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>Contact Person <span className='required-field'>*</span></label>
                            <input type='text' className='form-control' placeholder='Contact Person' value={userInfo.userId ? userInfo.fullName : contactName} onChange={(e) => setStateData({ contactName: e.target.value, errorMsg: '' })} />
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>Mobile No(#) <span className='required-field'>*</span></label>
                            <div className='d-flex'>
                              <select className="form-control border-left-0" style={{ width: 'auto' }} value={countryMobCode} onChange={(e) => setStateData({ countryMobCode: e.target.value })}>
                                <option value='+91'>+91</option>
                                <option value='+1'>+1</option>
                              </select>
                              <input type='text' className='form-control' placeholder='Mobile No(#)' maxLength='10' value={userInfo.userId ? userInfo.mobNum : contactMobNumber} onChange={(e) => setStateData({ contactMobNumber: e.target.value, errorMsg: '' })} onKeyPress={handleNumerical} />
                            </div>
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>House No / Flat no / Building Name <span className='required-field'>*</span></label>
                            <input type='text' className='form-control' placeholder='House No / Flat no / Building Name' value={houseNumber} onChange={(e) => setStateData({ houseNumber: e.target.value, errorMsg: '' })} />
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>Street / Locality <span className='required-field'>*</span></label>
                            <input type='text' className='form-control' placeholder='Street / Locality' value={street} onChange={(e) => setStateData({ street: e.target.value, errorMsg: '' })} />
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>Landmark </label>
                            <input type='text' className='form-control' placeholder='Landmark' value={landmark} onChange={(e) => setStateData({ landmark: e.target.value, errorMsg: '' })} />
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>Country <span className='required-field'>*</span></label>
                            <select className="form-control" id="stateName" autoFocus value={countryValue} onChange={handleChangeCountry} >
                              <option value="">Select Country</option>
                              {Countries.map((data, i) => <option key={i} value={data.code + '$' + data.value}>{data.value}</option>)}
                            </select>
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>Zip/Pincode <span className='required-field'>*</span></label>
                            <input type='text' className='form-control' placeholder='Zip/Pincode ' maxLength={6} value={pincode} onChange={(e) => setStateData({ pincode: e.target.value, errorMsg: '' })} onKeyPress={handleNumerical} />
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>State <span className='required-field'>*</span></label>
                            <select className="form-control" id="stateName" autoFocus value={stateValue} onChange={handleChangeState} >
                              <option value="">Select State</option>
                              {(CountryStates.IND).map((data, i) => <option key={i} value={data.value + '$' + data.label}>{data.label}</option>)}
                            </select>
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>District <span className='required-field'>*</span></label>
                            <select className="form-control" id="districtName" placeholder="Enter City" maxLength='100' onChange={handleChangeCity} value={districtValue} >
                              <option value="">Select City / District</option>
                              {districts.map((data, i) => <option key={i} value={data.value + '$' + data.label}>{data.label}</option>)}
                            </select>
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>Mandal <span className='required-field'>*</span></label>
                            <select className="form-control" id="cityName" placeholder="AreaLocality" maxLength='100' onChange={handleChangeAreaLocality} value={mandal} >
                              <option value="">Select  Mandal</option>
                              {mandals.map((data, i) => <option key={i} value={data.value}>{data.label}</option>)}
                            </select>
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>Area/Village <span className='required-field'>*</span></label>
                            <input type='text' className='form-control' placeholder='Area/Village' value={village} onChange={(e) => setStateData({ village: e.target.value, errorMsg: '' })} />
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <label className='form-label'>Location Name <span className='required-field'>*</span></label>
                          <div className='mb-3'>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="exampleRadio" id="exampleRadio1" value="Home" checked={selectedOption === "Home"} onChange={handleOptionChange} />
                              <label className="form-check-label" htmlFor="exampleRadio1">Home</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="exampleRadio" id="exampleRadio2" value="Office" checked={selectedOption === "Office"} onChange={handleOptionChange} />
                              <label className="form-check-label" htmlFor="exampleRadio2">Office</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="exampleRadio" id="exampleRadio3" value="Other" checked={selectedOption === "Other"} onChange={handleOptionChange} />
                              <label className="form-check-label" htmlFor="exampleRadio3">Other</label>
                            </div>
                          </div>
                        </div>
                        {showOtherInput && <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>Other <span className='required-field'>*</span></label>
                            <input type='text' className='form-control' placeholder='Home, Office, Work ..' value={otherLocation} onChange={(e) => setStateData({ otherLocation: e.target.value, errorMsg: '' })} />
                          </div>
                        </div>}
                        <div className='row d-flex justify-content between'>
                          <div className='col-sm-6'>
                            <div className="form-check mt-4 pt-2">
                              <input className="form-check-input" type="checkbox" value={isDefault} checked={isDefault} disabled={disable} />
                              <label className="form-check-label text-primary" >
                                Set as default address
                              </label>
                            </div>
                          </div>
                        </div>
                        <p className='required-center'>{errorMsg}</p>
                        <div className='col-sm-12 text-center mt-3 pb-3'>
                          <button className='btn btn-success px-4' onClick={createAddress}>Create Address</button>
                        </div>
                      </div>
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

export default CreateAddressComponent